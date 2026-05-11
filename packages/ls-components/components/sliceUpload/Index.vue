<script setup lang="ts" name="LSSliceUpload">
/**
 * @summary 分片上传组件 - 基于 `LSUpload` 的分片上传封装
 *
 * `LSSliceUpload` 在 `LSUpload` 的基础上增加了分片上传能力：
 * 内部按分片并发上传文件数据，使用 `el-progress` 展示分片上传进度。
 * 保留 `LSUpload` 的文件选择、列表展示、格式/大小校验等全部交互能力。
 *
 * @attr {number} chunkSize 单个分片大小（字节），默认 `2097152`（2MB）
 * @attr {Function} chunkUploadRequest 分片上传请求函数；调用时会传入 `(params, config)`
 * @attr {object|null} chunkUploadRequestParams 自定义请求参数；内部会额外合并当前分片信息
 * @attr {object|null} chunkUploadRequestConfig 分片请求配置；未传时默认注入 `{ signal }`
 * @attr {Function|null} mergeRequest 所有分片上传成功后触发的合并请求函数
 * @attr {object|null} mergeRequestParams 合并请求参数
 * @attr {number} initRequestNum 初始化并发请求分片数，默认 `3`
 * @attr {number} maxErrorNum 最大错误请求次数，默认 `3`
 * @attr {boolean} cancelUploadInLimit 请求异常达到限制后是否取消剩余上传，默认 `true`
 *
 * 其余属性与事件全部透传给内部 `LSUpload`，详见 `LSUpload` 文档。
 *
 * @event onUploadSuccess(data) 所有分片请求并合并成功后触发
 * @event onUploadError(data) 上传失败时触发，返回失败分片信息
 *
 * @example
 * <LSSliceUpload
 *   ref="sliceUploadRef"
 *   action="/api/upload"
 *   :chunk-size="2 * 1024 * 1024"
 *   :chunk-upload-request="chunkUpload"
 *   :merge-request="mergeUpload"
 *   :item="{ limitSize: 50, limitFile: ['png', 'jpg'] }"
 *   @on-upload-success="handleSuccess"
 *   @on-upload-error="handleError"
 * />
 */
import { useNamespace } from '@cpo/_hooks/useNamespace'
import LSUpload from '@cpo/upload/Index.vue'
import { emitNames, lsSliceUploadProps } from './types'

const props = defineProps(lsSliceUploadProps)
const emitAll = defineEmits(emitNames)
const slots = useSlots()
const ns = useNamespace('slice-upload')
const comClass: string = ns.b()

const uploadRef = ref<InstanceType<typeof LSUpload>>()

interface ProgressAttrs {
  strokeWidth?: number
  striped?: boolean
  stripedFlow?: boolean
  percentage: number
  duration?: number
  status?: string
}

const defAttrs: Ref<ProgressAttrs> = ref({
  strokeWidth: 15,
  striped: true,
  stripedFlow: true,
  percentage: 0,
  duration: 10,
})

const controllerList: Ref<AbortController[]> = ref([])
const successChunkIndexs: Ref<number[]> = ref([])
const errChunkIndexs: Ref<number[]> = ref([])
const chunkDatas: Ref<unknown[]> = ref([])
const chunkNum: Ref<number> = ref(0)
const chunkTotal: Ref<number> = ref(0)
const fileHash: Ref<string> = ref('')
const totalErrorCount: Ref<number> = ref(0)
const inFlightChunks: Ref<Set<number>> = ref(new Set())
const currentFile: Ref<File | null> = ref(null)
const uploading = ref(false)

const isMaxError = computed(() => {
  return props.maxErrorNum <= totalErrorCount.value
})

const isComplete = computed(() => {
  return successChunkIndexs.value.length === chunkTotal.value && chunkTotal.value > 0
})

function reset() {
  successChunkIndexs.value = []
  errChunkIndexs.value = []
  chunkDatas.value = []
  defAttrs.value.status = ''
  defAttrs.value.percentage = 0
  chunkNum.value = 0
  chunkTotal.value = 0
  fileHash.value = ''
  totalErrorCount.value = 0
  controllerList.value = []
  inFlightChunks.value.clear()
  currentFile.value = null
  uploading.value = false
}

function setPercentage() {
  if (chunkTotal.value === 0) {
    return 0
  }

  return Math.ceil((successChunkIndexs.value.length / chunkTotal.value) * 100)
}

/**
 * 对外暴露的 httpRequest，供内部 LSUpload 调用
 */
async function sliceHttpRequest(data: any) {
  const { file } = data

  if (!file) {
    return
  }

  currentFile.value = file
  reset()

  chunkTotal.value = Math.ceil(file.size / props.chunkSize)
  fileHash.value = `${file.name}-${file.size}-${file.lastModified}`

  uploading.value = true

  return new Promise((resolve, reject) => {
    const concurrent = Math.min(props.initRequestNum, chunkTotal.value)
    let completed = false

    function checkDone() {
      if (completed) {
        return
      }

      if (isMaxError.value || (chunkNum.value === 0 && errChunkIndexs.value.length > 0)) {
        completed = true
        defAttrs.value.status = 'exception'
        uploading.value = false
        emitAll('onUploadError', {
          errChunk: errChunkIndexs.value,
          fileHash: fileHash.value,
        })
        reject(new Error('分片上传失败'))

        if (props.cancelUploadInLimit) {
          controllerList.value.forEach(item => item?.abort())
        }

        return
      }

      if (isComplete.value) {
        completed = true
        defAttrs.value.status = 'success'
        uploading.value = false

        if (props.mergeRequest && typeof props.mergeRequest === 'function') {
          props.mergeRequest({
            fileHash: fileHash.value,
            fileName: file.name,
            chunkTotal: chunkTotal.value,
            ...props.mergeRequestParams,
          })
            .then((mergeRes: any) => {
              emitAll('onUploadSuccess', mergeRes)
              resolve(mergeRes)
            })
            .catch((error: any) => {
              emitAll('onUploadError', { error, fileHash: fileHash.value })
              reject(error)
            })
        }
        else {
          const result = {
            fileHash: fileHash.value,
            fileName: file.name,
            chunkTotal: chunkTotal.value,
            chunkDatas: chunkDatas.value,
          }
          emitAll('onUploadSuccess', result)
          resolve(result)
        }
      }
    }

    async function doUploadChunk(chunkIndex: number) {
      if (successChunkIndexs.value.includes(chunkIndex) || inFlightChunks.value.has(chunkIndex)) {
        return
      }

      if (isMaxError.value || completed) {
        return
      }

      chunkNum.value++
      inFlightChunks.value.add(chunkIndex)

      const start = chunkIndex * props.chunkSize
      const end = Math.min(start + props.chunkSize, file.size)
      const chunkBlob = file.slice(start, end)

      controllerList.value[chunkIndex] = new AbortController()
      const signal = controllerList.value[chunkIndex].signal

      const formData = new FormData()
      formData.append('file', chunkBlob)
      formData.append('chunk', String(chunkIndex + 1))
      formData.append('chunkTotal', String(chunkTotal.value))
      formData.append('fileHash', fileHash.value)
      formData.append('fileName', file.name)
      formData.append('fileSize', String(file.size))

      const params = props.chunkUploadRequestParams
        ? Object.assign({}, props.chunkUploadRequestParams, {
            chunk: chunkIndex + 1,
            chunkTotal: chunkTotal.value,
            fileHash: fileHash.value,
            fileName: file.name,
            fileSize: file.size,
            formData,
          })
        : {
            chunk: chunkIndex + 1,
            chunkTotal: chunkTotal.value,
            fileHash: fileHash.value,
            fileName: file.name,
            fileSize: file.size,
            formData,
          }

      try {
        const res = await props.chunkUploadRequest(
          Object.assign(params),
          props.chunkUploadRequestConfig || { signal },
        )
        chunkDatas.value[chunkIndex] = res

        if (!successChunkIndexs.value.includes(chunkIndex)) {
          successChunkIndexs.value.push(chunkIndex)
        }
      }
      catch {
        totalErrorCount.value++

        if (!errChunkIndexs.value.includes(chunkIndex)) {
          errChunkIndexs.value.push(chunkIndex)
        }
      }
      finally {
        chunkNum.value--
        inFlightChunks.value.delete(chunkIndex)
        defAttrs.value.percentage = setPercentage()
        checkDone()

        if (!completed && !isMaxError.value) {
          const next = findNextChunk()

          if (next !== -1) {
            doUploadChunk(next)
          }
        }
      }
    }

    function findNextChunk() {
      for (let i = 0; i < chunkTotal.value; i++) {
        if (!successChunkIndexs.value.includes(i) && !errChunkIndexs.value.includes(i) && !inFlightChunks.value.has(i)) {
          return i
        }
      }

      if (errChunkIndexs.value.length > 0 && !isMaxError.value) {
        return errChunkIndexs.value.shift() as number
      }

      return -1
    }

    for (let i = 0; i < concurrent; i++) {
      doUploadChunk(i)
    }
  })
}

onUnmounted(() => {
  controllerList.value.forEach(item => item?.abort())
})

defineExpose({ uploadRef, reset })
</script>

<template>
  <div :class="comClass">
    <LSUpload
      ref="uploadRef"
      v-bind="$attrs"
      :action="props.action"
      :http-request="sliceHttpRequest"
    >
      <template v-if="slots.trigger" #trigger>
        <slot name="trigger" />
      </template>
      <template v-if="slots.default" #default>
        <slot />
      </template>
      <template v-if="slots.tip" #tip>
        <slot name="tip" />
      </template>
      <template v-if="slots.file" #file="{ file, index }">
        <slot name="file" :file="file" :index="index" />
      </template>
    </LSUpload>

    <div v-if="uploading || defAttrs.percentage > 0" class="slice-progress-wrap">
      <div class="slice-progress-label">
        分片上传进度：{{ defAttrs.percentage }}%
      </div>
      <el-progress v-bind="Object.assign(defAttrs, $attrs) as any" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-slice-upload {
  width: 100%;
  .slice-progress-wrap {
    margin-top: 12px;
    .slice-progress-label {
      margin-bottom: 4px;
      font-size: cpo-var.$font-size-content-small;
      color: cpo-var.$color-text2;
    }
  }
}
</style>

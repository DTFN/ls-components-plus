<script setup lang="ts" name="LSSliceUpload">
/**
 * @summary 分片上传组件 - 支持分片上传与进度展示
 *
 * `LSSliceUpload` 是一个分片上传进度组件：内部按分片并发请求上传文件数据，
 * 使用 `el-progress` 展示上传进度，并通过组件暴露的 `start()` 方法主动启动上传流程。
 * 除了自身上传相关 props 外，其余进度条样式属性会继续透传给 `el-progress`。
 *
 * @attr {File|null} file 要上传的文件
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
 * @slot 无
 *
 * @event onUploadSuccess(data) 所有分片请求成功后触发，返回合并结果或分片数据数组
 * @event onUploadError(data) 上传失败时触发，返回失败分片信息，如 `{ errChunk }`
 *
 * @example
 * <LSSliceUpload
 *   ref="sliceUploadRef"
 *   :file="currentFile"
 *   :chunk-size="2 * 1024 * 1024"
 *   :init-request-num="3"
 *   :chunk-upload-request="chunkUpload"
 *   :merge-request="mergeUpload"
 *   :max-error-num="2"
 *   @on-upload-success="handleSuccess"
 *   @on-upload-error="handleError"
 * />
 * <LSButton type="primary" @click="sliceUploadRef?.start()">开始上传</LSButton>
 */
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { emitNames, lsSliceUploadProps } from './types'

const props = defineProps(lsSliceUploadProps)
const emitAll = defineEmits(emitNames)
const ns = useNamespace('slice-upload')
const comClass: string = ns.b()

const defAttrs: Ref<Record<string, unknown>> = ref({
  strokeWidth: 15,
  striped: true,
  stripedFlow: true,
  percentage: 0,
  duration: 10,
})

// 取消队列
const controllerList: Ref<AbortController[]> = ref([])
// 成功分片索引
const successChunkIndexs: Ref<number[]> = ref([])
// 失败分片索引
const errChunkIndexs: Ref<number[]> = ref([])
// 分片数据
const chunkDatas: Ref<unknown[]> = ref([])
// 正在执行的 chunk 数量
const chunkNum: Ref<number> = ref(0)
// 分片总数
const chunkTotal: Ref<number> = ref(0)
// 文件 hash
const fileHash: Ref<string> = ref('')
// 累计错误次数
const totalErrorCount: Ref<number> = ref(0)

const isMaxError = computed(() => {
  return props.maxErrorNum <= totalErrorCount.value
})

const isComplete = computed(() => {
  return successChunkIndexs.value.length === chunkTotal.value && chunkTotal.value > 0
})

function start() {
  if (!props.file) {
    return
  }
  initUpload()
}

function reset() {
  successChunkIndexs.value = []
  errChunkIndexs.value = []
  chunkDatas.value = []
  defAttrs.value.status = ''
  chunkNum.value = 0
  chunkTotal.value = 0
  fileHash.value = ''
  totalErrorCount.value = 0
  controllerList.value = []
}

/**
 * 进度条百分比
 */
function setPercentage() {
  if (chunkTotal.value === 0) {
    return 0
  }

  return Math.ceil((successChunkIndexs.value.length / chunkTotal.value) * 100)
}

/**
 * 初始化上传
 */
function initUpload() {
  if (chunkNum.value > 0) {
    return
  }
  reset()

  const file = props.file as File
  chunkTotal.value = Math.ceil(file.size / props.chunkSize)
  fileHash.value = `${file.name}-${file.size}-${file.lastModified}`

  defAttrs.value.percentage = setPercentage()

  const concurrent = Math.min(props.initRequestNum, chunkTotal.value)

  for (let i = 0; i < concurrent; i++) {
    uploadChunk(i)
  }
}

/**
 * 分片请求
 * @param chunkIndex 分片索引（从 0 开始）
 */
async function uploadChunk(chunkIndex: number) {
  if (successChunkIndexs.value.includes(chunkIndex)) {
    return
  }

  if (isMaxError.value) {
    return
  }

  chunkNum.value++

  const file = props.file as File
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
    const data = await props.chunkUploadRequest(
      Object.assign(params),
      props.chunkUploadRequestConfig || {
        signal,
      },
    )
    chunkDatas.value[chunkIndex] = data

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
    defAttrs.value.percentage = setPercentage()

    if (isMaxError.value || (chunkNum.value === 0 && errChunkIndexs.value.length > 0)) {
      defAttrs.value.status = 'exception'
      emitAll('onUploadError', {
        errChunk: errChunkIndexs.value,
        fileHash: fileHash.value,
      })

      if (props.cancelUploadInLimit) {
        controllerList.value.forEach(item => item?.abort())
      }
    }
    else if (isComplete.value) {
      defAttrs.value.status = 'success'

      if (props.mergeRequest && typeof props.mergeRequest === 'function') {
        try {
          const mergeRes = await props.mergeRequest({
            fileHash: fileHash.value,
            fileName: file.name,
            chunkTotal: chunkTotal.value,
            ...props.mergeRequestParams,
          })
          emitAll('onUploadSuccess', mergeRes)
        }
        catch (error) {
          emitAll('onUploadError', { error, fileHash: fileHash.value })
        }
      }
      else {
        emitAll('onUploadSuccess', {
          fileHash: fileHash.value,
          fileName: file.name,
          chunkTotal: chunkTotal.value,
          chunkDatas: chunkDatas.value,
        })
      }
    }
    else {
      const next = findNextChunk()

      if (next !== -1) {
        uploadChunk(next)
      }
    }
  }
}

/**
 * 查找下一个待上传的分片索引
 */
function findNextChunk() {
  for (let i = 0; i < chunkTotal.value; i++) {
    if (!successChunkIndexs.value.includes(i) && !errChunkIndexs.value.includes(i)) {
      return i
    }
  }

  if (errChunkIndexs.value.length > 0 && !isMaxError.value) {
    return errChunkIndexs.value.shift() as number
  }

  return -1
}

onUnmounted(() => {
  controllerList.value.forEach(item => item?.abort())
})

defineExpose({ start, reset })
</script>

<template>
  <div :class="comClass">
    <div v-if="props.file" class="file-info">
      {{ props.file.name }}
    </div>
    <el-progress v-bind="Object.assign(defAttrs, $attrs)" />
  </div>
</template>

<style lang="scss" scoped>
.ls-slice-upload {
  width: 100%;
  .file-info {
    margin-bottom: 8px;
    font-size: cpo-var.$font-size-content-small;
    color: cpo-var.$color-text1;
  }
}
</style>

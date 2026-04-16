<script setup lang="ts" name="LSDownloadFile">
/**
 * @summary 文件下载组件 - 支持分片下载与进度展示
 *
 * `LSDownloadFile` 是一个分片下载进度组件：内部按分片并发请求文件数据，
 * 使用 `el-progress` 展示下载进度，并通过组件暴露的 `start()` 方法主动启动下载流程。
 * 除了自身下载相关 props 外，其余进度条样式属性会继续透传给 `el-progress`。
 *
 * @attr {string|number} recordId 当前文件所在记录的 id
 * @attr {number} chunkTotal 分片总数
 * @attr {Function} chunkDataRequest 分片数据请求函数；调用时会传入 `(params, config)`
 * @attr {object|null} chunkDataRequestParams 自定义请求参数；内部会额外合并当前 `chunk`
 * @attr {object|null} chunkDataRequestConfig 分片请求配置；未传时默认注入 `{ signal }`
 * @attr {number} initRequstNum 初始化请求分片数，默认 `10`
 * @attr {number} maxErrorNum 最大错误请求次数，默认 `6`
 * @attr {boolean} cancelUploadInLimit 请求异常达到限制后是否取消剩余下载，默认 `true`
 *
 * @slot 无
 *
 * @event onDownloadSuccess(data) 所有分片请求成功后触发，返回下载的分片数据数组
 * @event onDownloadError(data) 下载失败时触发，返回失败分片信息，如 `{ errChunk }`
 *
 * @example
 * <LSDownloadFile
 *   ref="downloadFileRef"
 *   :record-id="3"
 *   :chunk-total="chunkTotal"
 *   :init-requst-num="2"
 *   :chunk-data-request="chunkDownload"
 *   :max-error-num="2"
 *   @on-download-success="handleSuccess"
 *   @on-download-error="handleError"
 * />
 * <LSButton type="primary" @click="downloadFileRef?.start()">下载</LSButton>
 */
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { emitNames, lsDownloadProp } from './types'

const props = defineProps(lsDownloadProp)
const emitAll = defineEmits(emitNames)
const ns = useNamespace('download-file')
const comClass: string = ns.b()

const defAttrs: Ref<any> = ref({
  strokeWidth: 15,
  striped: true,
  stripedFlow: true,
  percentage: 0,
  duration: 10,
})

// 取消队列
const controllerList: Ref<any> = ref([])
// 当前分片索引
const successChunkIndexs: Ref<any> = ref([])
const errChunkIndexs: Ref<any> = ref([])
// 当前分片数据
const chunkDatas: Ref<any> = ref([])
// chunk队列
const chunkQueue: Ref<any> = ref([])
// 正在执行的chunk
const chunkNum: Ref<number> = ref(0)

const isMaxError = computed(() => {
  return props.maxErrorNum <= errChunkIndexs.value.length
})

const isComplete = computed(() => {
  return successChunkIndexs.value.length === props.chunkTotal
})

function start() {
  initDownload()
}

function reset() {
  successChunkIndexs.value = []
  errChunkIndexs.value = []
  chunkDatas.value = []
  defAttrs.value.status = ''
  chunkQueue.value = []
  chunkNum.value = 0
}

function initChunkQueue() {
  chunkQueue.value = Array.from({ length: props.chunkTotal }, (_, index) => index + 1)
}

/**
 * 进度条百分比
 */
function setPercentage() {
  return Math.ceil((successChunkIndexs.value.length / props.chunkTotal) * 100)
}

/**
 * 初始化下载
 */
async function initDownload() {
  if (chunkNum.value === 0) {
    reset()
    initChunkQueue()
  }
  defAttrs.value.percentage = setPercentage()
  downloadChunk()
}

/**
 * 下载分片
 */
async function downloadChunk() {
  if (errChunkIndexs.value.length > 0) {
    const max = Math.max(...errChunkIndexs.value)
    const len = props.initRequstNum - errChunkIndexs.value.length || 0
    chunkQueue.value = errChunkIndexs.value.concat(Array.from({ length: len }, (_, index) => index + max + 1))
  }
  chunkQueue.value.forEach((chunk: number) => {
    chunkDataRequestFunc(chunk)
  })
}

/**
 *
 * @param chunk 分片请求
 */
async function chunkDataRequestFunc(chunk: number) {
  chunkNum.value++
  const index = chunk - 1
  controllerList.value[index] = new AbortController()
  const signal = controllerList.value[index].signal

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const params = props.chunkDataRequestParams
      ? Object.assign(props.chunkDataRequestParams, { chunk })
      : {
          id: props.recordId,
          chunk,
        }

    try {
      const data = await props.chunkDataRequest(
        Object.assign(params),
        props.chunkDataRequestConfig || {
          signal,
        },
      )
      chunkNum.value--
      chunkDatas.value[index] = data

      if (!successChunkIndexs.value.includes(chunk)) {
        successChunkIndexs.value.push(chunk)
      }
      defAttrs.value.percentage = setPercentage()
      resolve(data)
    }
    catch (error) {
      if (!errChunkIndexs.value.includes(chunk)) {
        errChunkIndexs.value.push(chunk)
      }
      reject(error)
    }
    finally {
      if ((chunkNum.value === 0 && errChunkIndexs.value.length > 0) || isMaxError.value) {
        defAttrs.value.status = 'exception'
        emitAll('onDownloadError', {
          errChunk: errChunkIndexs.value,
        })

        if (props.cancelUploadInLimit) {
          controllerList.value.forEach((item: any) => item.abort())
        }
      }
      else if (chunkNum.value !== 0 && !isMaxError.value && chunkQueue.value.length !== props.chunkTotal) {
        chunkDataRequestFunc(chunkQueue.value.length)
      }
      else if (isComplete.value) {
        defAttrs.value.status = 'success'
        emitAll('onDownloadSuccess', chunkDatas.value)
      }
    }
  })
}

onUnmounted(() => {
  controllerList.value.forEach((item: any) => item.abort())
})

defineExpose({ start })
</script>

<template>
  <div :class="comClass">
    <el-progress v-bind="Object.assign(defAttrs, $attrs)" />
  </div>
</template>

<style lang="scss" scoped></style>

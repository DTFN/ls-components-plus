<script setup lang="ts" name="LSDownloadFile">
/**
 * @summary 文件下载组件 - 支持分片下载与进度展示
 *
 * 基于分片请求实现大文件下载进度展示，支持控制初始并发数、异常重试上限，
 * 并可在失败达到上限时中止剩余请求。组件本身渲染 `el-progress`，额外进度条属性可直接透传。
 *
 * @attr {string|number} recordId - 数据记录标识
 * @attr {number} chunkTotal - 下载分片总数量
 * @attr {Function} chunkDataRequest - 分片下载请求函数
 * @attr {object} chunkDataRequestParams - 自定义分片请求参数
 * @attr {object} chunkDataRequestConfig - 自定义分片请求配置
 * @attr {number} initRequstNum - 初始并发请求数量
 * @attr {number} maxErrorNum - 最大异常请求数
 * @attr {boolean} cancelUploadInLimit - 达到最大异常请求数后是否中止剩余下载请求
 *
 * @slot 无
 *
 * @event onDownloadSuccess - 所有分片下载成功后触发
 * @event onDownloadError - 下载失败或达到异常上限时触发
 *
 * @csspart download-file - 下载进度容器
 *
 * @example
 * <!-- 基础分片下载 -->
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
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { emitNames, lsDownloadProp } from './types';

const ns = useNamespace('download-file');
const comClass: string = ns.b();

const props = defineProps(lsDownloadProp);

const emitAll = defineEmits(emitNames);

const defAttrs: Ref<any> = ref({
  strokeWidth: 15,
  striped: true,
  stripedFlow: true,
  percentage: 0,
  duration: 10
});

// 取消队列
const controllerList: Ref<any> = ref([]);
// 当前分片索引
const successChunkIndexs: Ref<any> = ref([]);
const errChunkIndexs: Ref<any> = ref([]);
// 当前分片数据
const chunkDatas: Ref<any> = ref([]);
// chunk队列
const chunkQueue: Ref<any> = ref([]);
// 正在执行的chunk
const chunkNum: Ref<number> = ref(0);

const isMaxError = computed(() => {
  return props.maxErrorNum <= errChunkIndexs.value.length;
});

const isComplete = computed(() => {
  return successChunkIndexs.value.length === props.chunkTotal;
});

function start() {
  initDownload();
}

function reset() {
  successChunkIndexs.value = [];
  errChunkIndexs.value = [];
  chunkDatas.value = [];
  defAttrs.value.status = '';
  chunkQueue.value = [];
  chunkNum.value = 0;
}

function initChunkQueue() {
  chunkQueue.value = Array.from({ length: props.chunkTotal }, (_, index) => index + 1);
}

/**
 * 进度条百分比
 */
function setPercentage() {
  return Math.ceil((successChunkIndexs.value.length / props.chunkTotal) * 100);
}

/**
 * 初始化下载
 */
async function initDownload() {
  if (chunkNum.value == 0) {
    reset();
    initChunkQueue();
  }
  defAttrs.value.percentage = setPercentage();
  downloadChunk();
}

/**
 * 下载分片
 */
async function downloadChunk() {
  if (errChunkIndexs.value.length > 0) {
    const max = Math.max(...errChunkIndexs.value);
    const len = props.initRequstNum - errChunkIndexs.value.length || 0;
    chunkQueue.value = errChunkIndexs.value.concat(Array.from({ length: len }, (_, index) => index + max + 1));
  }
  chunkQueue.value.forEach((chunk: number) => {
    chunkDataRequestFunc(chunk);
  });
}

/**
 *
 * @param chunk 分片请求
 *  */
async function chunkDataRequestFunc(chunk: number) {
  chunkNum.value++;
  const index = chunk - 1;
  controllerList.value[index] = new AbortController();
  const signal = controllerList.value[index].signal;
  return new Promise(async (resolve, reject) => {
    const params = props.chunkDataRequestParams
      ? Object.assign(props.chunkDataRequestParams, { chunk })
      : {
          id: props.recordId,
          chunk
        };
    try {
      const data = await props.chunkDataRequest(
        Object.assign(params),
        props.chunkDataRequestConfig || {
          signal
        }
      );
      chunkNum.value--;
      chunkDatas.value[index] = data;
      if (!successChunkIndexs.value.includes(chunk)) {
        successChunkIndexs.value.push(chunk);
      }
      defAttrs.value.percentage = setPercentage();
      resolve(data);
    } catch (error) {
      if (!errChunkIndexs.value.includes(chunk)) {
        errChunkIndexs.value.push(chunk);
      }
      reject(error);
    } finally {
      if ((chunkNum.value === 0 && errChunkIndexs.value.length > 0) || isMaxError.value) {
        defAttrs.value.status = 'exception';
        emitAll('onDownloadError', {
          errChunk: errChunkIndexs.value
        });
        if (props.cancelUploadInLimit) {
          controllerList.value.forEach((item: any) => item.abort());
        }
      } else if (chunkNum.value !== 0 && !isMaxError.value && chunkQueue.value.length != props.chunkTotal) {
        chunkDataRequestFunc(chunkQueue.value.length);
      } else if (isComplete.value) {
        defAttrs.value.status = 'success';
        emitAll('onDownloadSuccess', chunkDatas.value);
      }
    }
  });
}

onUnmounted(() => {
  controllerList.value.forEach((item: any) => item.abort());
});

defineExpose({ start });
</script>

<template>
  <div :class="comClass">
    <el-progress v-bind="Object.assign(defAttrs, $attrs)" />
  </div>
</template>

<style lang="scss" scoped></style>

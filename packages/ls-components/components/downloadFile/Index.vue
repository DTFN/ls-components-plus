<script setup lang="ts" name="LSDownloadFile">
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
      const data = await props.chunkDataRequest(Object.assign(params), {
        signal
      });
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
        controllerList.value.forEach((item: any) => item.abort());
      } else if (chunkNum.value !== 0 && !isMaxError.value) {
        chunkDataRequestFunc(Math.max(...chunkQueue.value));
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

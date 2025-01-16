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

// 当前分片索引
const successChunkIndexs: Ref<any> = ref([]);
const errChunkIndexs: Ref<any> = ref([]);
// 当前分片数据
const chunkDatas: Ref<any> = ref({});
// 是否下载异常
const isDownloadError: Ref<boolean> = ref(false);

function start() {
  initDownload();
}

function reset() {
  successChunkIndexs.value = [];
  errChunkIndexs.value = [];
  chunkDatas.value = {};
  isDownloadError.value = false;
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
  defAttrs.value.percentage = setPercentage();
  const data = await downloadChunk();

  (data || []).forEach((item: any) => {
    if (item.status === 'rejected') {
      isDownloadError.value = true;
    }
  });

  if (!isDownloadError.value) {
    defAttrs.value.status = 'success';
    emitAll('onDownloadSuccess', chunkDatas.value);
    reset();
  } else {
    defAttrs.value.status = 'exception';
    emitAll('onDownloadError', {
      errChunk: errChunkIndexs.value
    });
  }
}

/**
 * 下载分片
 */
async function downloadChunk() {
  const downloadApiTemp = [];
  if (errChunkIndexs.value.length > 0) {
    for (let i = 0; i < errChunkIndexs.value.length; i++) {
      downloadApiTemp.push(chunkDataRequestFunc(errChunkIndexs.value[i]));
    }
  } else {
    for (let i = 0; i < props.chunkTotal; i++) {
      downloadApiTemp.push(chunkDataRequestFunc(i + 1));
    }
  }
  return await Promise.allSettled(downloadApiTemp);
}

async function chunkDataRequestFunc(chunk: number) {
  return new Promise(async (resolve, reject) => {
    const params = props.chunkDataRequestParams
      ? Object.assign(props.chunkDataRequestParams, { chunk })
      : {
          id: props.recordId,
          chunk
        };
    try {
      const data = await props.chunkDataRequest(params);
      chunkDatas.value[chunk] = data;
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
    }
  });
}

defineExpose({ start });
</script>

<template>
  <div :class="comClass">
    <el-progress v-bind="Object.assign(defAttrs, $attrs)" />
  </div>
</template>

<style lang="scss" scoped></style>

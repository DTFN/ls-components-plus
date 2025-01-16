<script setup lang="ts">
import { get } from '@/request/request';

const downloadFileRef = ref();
const chunkTotal = ref(1);

// 初始化分片下载
function chunkDownloadInit(params: any): Promise<any> {
  return get(`/v2/data/transfer/startMultipartDownload/${params.id}`);
}

// 分片下载
function chunkDownload(params: any, config: any): Promise<any> {
  return get(`/v2/data/transfer/multipartDownload/${params.id}/${params.chunk}`, {}, config);
}

// 分片下载结束
function chunkDownloadEnd(params: any): Promise<any> {
  return get(`/v2/data/transfer/endMultiPartDownload/${params.id}/${params.taskId}`);
}

const id = ref(3);
const taskId = ref('');

async function downloadFunc() {
  taskId.value = await chunkDownloadInit({
    id: id.value
  });
  downloadFileRef.value.start();
}

async function onDownloadSuccess(data: any) {
  console.log(data);
  await chunkDownloadEnd({
    id: id.value,
    taskId: taskId.value
  });
}

function onDownloadError(data: any) {
  console.log(data);
}
</script>

<template>
  <div>
    <LSDownloadFile
      ref="downloadFileRef"
      :record-id="3"
      :chunk-total="chunkTotal"
      :chunk-data-request="chunkDownload"
      @on-download-success="onDownloadSuccess"
      @on-download-error="onDownloadError"
    />
    <br />
    <LSButton type="primary" @click="downloadFunc">下载</LSButton>
  </div>
</template>

<style lang="scss" scoped></style>

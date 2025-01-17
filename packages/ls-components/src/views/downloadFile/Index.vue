<script setup lang="ts">
import { get } from '@/request/request';
import { lsUtil } from '@cpo/_utils';

const { mergeBuffer, fileToBuffer } = lsUtil;

const downloadFileRef = ref();
const chunkTotal = ref(3);
const initRequstNum = ref(2);
const maxErrorNum = ref(2);

// 初始化分片下载
function chunkDownloadInit(params: any): Promise<any> {
  return get(`/v2/data/transfer/startMultipartDownload/${params.id}`);
}

// 分片下载
function chunkDownload(params: any, config: any): Promise<any> {
  return get(`/v2/data/transfer/multipartDownload/${params.id}/${params.chunk}`, {}, 'GET', {
    signal: config.signal
  });
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
  const result = mergeBuffer(
    (data || []).map((item: any) => {
      return {
        file: fileToBuffer(item.multipartFile),
        byteLength: item.length
      };
    })
  );
  console.log(result);
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
      :init-requst-num="initRequstNum"
      :chunk-data-request="chunkDownload"
      :max-error-num="maxErrorNum"
      @on-download-success="onDownloadSuccess"
      @on-download-error="onDownloadError"
    />
    <br />
    <LSButton type="primary" @click="downloadFunc">下载</LSButton>
  </div>
</template>

<style lang="scss" scoped></style>

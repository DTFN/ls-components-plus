<script setup lang="ts">
import axios from 'axios'

const sliceUploadRef = ref()
const chunkSize = ref(2 * 1024 * 1024)
const initRequestNum = ref(3)
const maxErrorNum = ref(3)

function resetSliceUpload() {
  sliceUploadRef.value?.reset()
}

function chunkUpload(params: any, config: any): Promise<any> {
  return axios.post('http://192.168.1.33:8080/api/v1/upload/chunk', params.formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...config,
  })
}

function mergeUpload(params: any): Promise<any> {
  return axios.post('http://192.168.1.33:8080/api/v1/upload/merge', params)
}

function onUploadSuccess(data: any) {
  ElMessage.success('上传成功')
  console.log('onUploadSuccess', data)
}

function onUploadError(data: any) {
  ElMessage.error('上传失败')
  console.log('onUploadError', data)
}

function onChangeFunc(file: any) {
  console.log('onChangeFunc', file)
}
</script>

<template>
  <div>
    <h3>分片上传示例（基于 LSUpload）</h3>

    <LSSliceUpload
      ref="sliceUploadRef"
      :auto-upload="false"
      :chunk-size="chunkSize"
      :init-request-num="initRequestNum"
      :max-error-num="maxErrorNum"
      :chunk-upload-request="chunkUpload"
      :merge-request="mergeUpload"
      :item="{ limitSize: 12, limitFile: ['png', 'jpg', 'pdf', 'txt'] }"
      @on-upload-success="onUploadSuccess"
      @on-upload-error="onUploadError"
      @on-change-func="onChangeFunc"
    />
    <LSButton style="margin-top: 8px;" @click="resetSliceUpload">
      重置分片上传
    </LSButton>

    <div style="margin-top: 32px;">
      <h4>普通上传示例（LSUpload）</h4>
      <LSUpload
        action="http://192.168.1.33:8080/api/v1/upload/file"
        :item="{ limitSize: 50, limitFile: ['png', 'jpg', 'pdf'] }"
        :auto-upload="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

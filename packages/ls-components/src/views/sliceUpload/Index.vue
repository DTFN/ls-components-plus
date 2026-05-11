<script setup lang="ts">
import axios from 'axios'

const sliceUploadRef = ref()
const file = ref<File | null>(null)
const chunkSize = ref(2 * 1024 * 1024)
const initRequestNum = ref(3)
const maxErrorNum = ref(3)

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement

  if (target.files && target.files.length > 0) {
    file.value = target.files[0]
  }
}

function chunkUpload(params: any, config: any): Promise<any> {
  return axios.post('http://192.168.1.33:3001/upload', params.formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...config,
  })
}

function mergeUpload(params: any): Promise<any> {
  return axios.post('http://192.168.1.33:3001/upload', params)
}

function startUpload() {
  if (!file.value) {
    ElMessage.warning('请先选择文件')

    return
  }
  sliceUploadRef.value?.start()
}

function resetUpload() {
  sliceUploadRef.value?.reset()
  file.value = null
}

function onUploadSuccess(data: any) {
  ElMessage.success('上传成功')
  console.log('onUploadSuccess', data)
}

function onUploadError(data: any) {
  ElMessage.error('上传失败')
  console.log('onUploadError', data)
}
</script>

<template>
  <div>
    <h3>分片上传示例</h3>

    <div style="margin-bottom: 16px;">
      <input type="file" @change="handleFileChange">
      <LSButton type="primary" style="margin-left: 8px;" @click="startUpload">
        开始上传
      </LSButton>
      <LSButton style="margin-left: 8px;" @click="resetUpload">
        重置
      </LSButton>
    </div>

    <div v-if="file" style="margin-bottom: 16px;">
      已选择文件：{{ file.name }}（{{ (file.size / 1024 / 1024).toFixed(2) }} MB）
    </div>

    <LSSliceUpload
      ref="sliceUploadRef"
      :file="file"
      :chunk-size="chunkSize"
      :init-request-num="initRequestNum"
      :max-error-num="maxErrorNum"
      :chunk-upload-request="chunkUpload"
      :merge-request="mergeUpload"
      @on-upload-success="onUploadSuccess"
      @on-upload-error="onUploadError"
    />

    <div style="margin-top: 32px;">
      <h4>基础上传示例（LSUpload）</h4>
      <LSUpload
        action="http://192.168.1.33:3001/upload"
        :item="{ limitSize: 50, limitFile: ['png', 'jpg', 'pdf'] }"
        :auto-upload="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

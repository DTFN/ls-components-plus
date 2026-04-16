<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const fileList: any = ref([])

const visible = ref(false)

const cropData: any = ref({})

const imgUrl = ref('')

/** 本页为裁剪弹窗单独创建的 blob URL，需在关闭或替换时 revoke，避免泄漏；且不可依赖 Upload 内部的 blob（清空列表时可能被 revoke） */
let cropObjectUrl: string | null = null

function revokeCropObjectUrl() {
  if (cropObjectUrl) {
    URL.revokeObjectURL(cropObjectUrl)
    cropObjectUrl = null
  }
}

async function onChangeFunc(res: any) {
  if (!res?.raw && !res?.blob)
    return

  // 先用本地 File 生成独立 URL，再清空上传列表；否则先清空会导致 el-upload revoke 掉 res.blob，裁剪区图片高度为 0
  revokeCropObjectUrl()
  const url = res.raw ? URL.createObjectURL(res.raw) : res.blob
  if (res.raw)
    cropObjectUrl = url

  imgUrl.value = url
  fileList.value = []
  await nextTick()
  visible.value = true
}

function onConfirm() {
  visible.value = false
  fileList.value = [
    {
      url: URL.createObjectURL(cropData.value.file),
    },
  ]
}

function onCropData(data: any) {
  cropData.value = data
}

watch(visible, (v) => {
  if (!v) {
    revokeCropObjectUrl()
    imgUrl.value = ''
  }
})

onBeforeUnmount(() => {
  revokeCropObjectUrl()
})
</script>

<template>
  <div>
    <LSUpload
      list-type="picture-card"
      :auto-upload="false"
      :file-list="fileList"
      :item="{
        limitFile: ['png', 'jpg', 'jpeg'],
        limitSize: 20,
      }"
      @on-change-func="onChangeFunc"
    ></LSUpload>
    <LSDialog v-model="visible" @on-confirm="onConfirm">
      <!-- key 保证换图时 vue-cropper 重新挂载，避免弹窗内尺寸计算为 0 -->
      <LSCropper
        v-if="visible && imgUrl"
        :key="imgUrl"
        :img-url="imgUrl"
        graphics-type="circular"
        :show-preview="true"
        :fixed="false"
        @on-crop-data="onCropData"
      />
    </LSDialog>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
const fileList: any = ref([]);

const visible = ref(false);

const cropData: any = ref({});

const imgUrl = ref('');

function onChangeFunc(res: any) {
  fileList.value = [];
  imgUrl.value = res.blob;
  visible.value = true;
}

function onConfirm() {
  visible.value = false;
  fileList.value = [
    {
      url: URL.createObjectURL(cropData.value.file)
    }
  ];
}

function onCropData(data: any) {
  console.log(data);
  cropData.value = data;
}
</script>

<template>
  <div>
    <LSUpload
      list-type="picture-card"
      :auto-upload="false"
      :file-list="fileList"
      :item="{
        limitFile: ['png', 'jpg', 'jpeg'],
        limitSize: 20
      }"
      @on-change-func="onChangeFunc"
    ></LSUpload>
    <LSDialog v-model="visible" @on-confirm="onConfirm">
      <LSCropper :img-url="imgUrl" graphics-type="circular" :show-preview="true" @on-crop-data="onCropData" />
    </LSDialog>
  </div>
</template>

<style lang="scss" scoped></style>

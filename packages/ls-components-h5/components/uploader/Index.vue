<script setup lang="ts" name="LSUploader">
import { showToast } from 'vant';

const fileList = ref<any[]>([]);

// const imgSuffix = 'jpg,jpeg,png,gif';
// const videoSuffix = 'mp4,mov,m4v,3gp,wmv';

const props = defineProps({
  imageFit: {
    type: String as PropType<any>,
    default: 'contain'
  },
  // 上传文件类型 png, jpg, video, pdf
  limitTypes: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  limitTypesMsg: {
    type: String,
    default: '上传文件类型不符合要求'
  },
  maxSizes: {
    type: Object as PropType<{ [key: string]: number }>,
    default: () => ({
      image: 10, // 5MB
      video: 200, // 20MB
      pdf: 50 // 10MB
    })
  }
});

function isOverSize(file: any) {
  const { size, type } = file || {};
  let status = false;
  const imageSize = props.maxSizes.image;
  const videoSize = props.maxSizes.video;
  const pdfSize = props.maxSizes.pdf;

  if (type.startsWith('image/') && imageSize) {
    status = size > imageSize;
    if (status) {
      showToast({
        type: 'fail',
        message: `图片大小不能超过 ${imageSize} MB`
      });
    }
  } else if (type.startsWith('video')) {
    status = size > videoSize;
    if (status) {
      showToast({
        type: 'fail',
        message: `视频大小不能超过 ${videoSize} MB`
      });
    }
  } else if (type.startsWith('application/pdf')) {
    status = size > pdfSize;
    if (status) {
      showToast({
        type: 'fail',
        message: `PDF大小不能超过 ${pdfSize} MB`
      });
    }
  }

  return status;
}

function isExistType(limitTypes: Array<string>, curType: string) {
  const curTypePrefix = curType.split('/')[1];
  return limitTypes.includes(curTypePrefix);
}

function beforeRead(file: any) {
  let status = true;

  const limitTypes = props.limitTypes;

  if (!limitTypes || limitTypes.length === 0) {
    return true;
  }

  if (Array.isArray(file)) {
    for (let i = 0; i < file.length; i++) {
      const tempFile = file[i];
      const { type } = tempFile || {};
      if (!isExistType(limitTypes, type)) {
        status = false;
        showToast({
          type: 'fail',
          message: props.limitTypesMsg || '上传文件类型不符合要求'
        });
        break;
      }
    }
  } else {
    const { type } = file || {};
    if (!isExistType(limitTypes, type)) {
      status = false;
      showToast({
        type: 'fail',
        message: props.limitTypesMsg || '上传文件类型不符合要求'
      });
    }
  }

  return status;
}

function afterRead() {}

function onDelete() {}
</script>

<template>
  <div class="ls-uploader">
    <van-uploader
      v-model="fileList"
      :image-fit="imageFit"
      :max-size="isOverSize"
      :before-read="beforeRead"
      :after-read="afterRead"
      v-bind="$attrs"
      @delete="onDelete"
    >
    </van-uploader>
  </div>
</template>

<style lang="scss" scoped></style>

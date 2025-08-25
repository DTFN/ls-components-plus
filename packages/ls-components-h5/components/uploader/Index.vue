<script setup lang="ts" name="LSUploader">
import VideoItem from '@cpo/_common/VideoItem.vue';
import { showToast, UploaderFileListItem } from 'vant';

const imgSuffix = 'jpg,jpeg,png,gif';
const videoSuffix = 'mp4,mov,m4v,3gp,wmv';

const fileList = ref<any[]>([]);
const filesLoading: any = ref([]);
const modelValue: any = ref([]);

const slots = useSlots();
const attrs = useAttrs();

const emits = defineEmits(['update:modelValue', 'updateLoadingData', 'uploadError', 'pdfPreview']);

const props: any = defineProps({
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
  },
  fileUploadApi: {
    type: Function as PropType<(formData: FormData) => Promise<string>>,
    required: true
  },
  previewList: {
    type: Array as PropType<any[]>,
    default: () => []
  },
  showUploadProgress: {
    type: Boolean,
    default: true
  }
});

watch(
  () => props.previewList,
  newVal => {
    if (newVal && newVal.length > 0) {
      modelValue.value = [...props.modelValue];
      fileList.value = newVal.map((item: any) => {
        const { fileKey, fileUrl } = item || {};

        return {
          objectUrl: fileUrl,
          url: fileUrl,
          name: fileKey,
          fileType: getFileType(fileKey),
          fileName: fileKey.replace(fileKey?.substring(fileKey?.lastIndexOf('-'), fileKey?.lastIndexOf('.')), '')
        };
      });
    } else {
      fileList.value = [];
    }
  },
  { immediate: true }
);

function getFileType(url: any) {
  const paramIndex = url.indexOf('?');
  const suffixIndex = url.lastIndexOf('.') + 1;
  let suffix = url.substring(suffixIndex);

  if (paramIndex !== -1) {
    suffix = url.substring(suffixIndex, paramIndex);
  }
  suffix = suffix.toLowerCase();

  if (imgSuffix.includes(suffix)) {
    return 'image';
  } else if (videoSuffix.includes(suffix)) {
    return 'video';
  } else if (suffix === 'pdf') {
    return 'pdf';
  }

  return suffix;
}

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

function uploadLoadingExcute(type: boolean, data: Array<number | string>, file: any) {
  const { lastModified } = file || {};

  if (lastModified) {
    if (type) {
      data.push(lastModified);
    } else {
      data = data.filter((item: any) => item !== lastModified);
    }
  }

  return data;
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
      if (status) {
        filesLoading.value = uploadLoadingExcute(true, filesLoading.value, tempFile);
      }
    }

    if (!status) {
      file.forEach(item => {
        filesLoading.value = uploadLoadingExcute(false, filesLoading.value, item);
      });
    }
    emits('updateLoadingData', status, filesLoading.value);
  } else {
    const { type } = file || {};
    if (!isExistType(limitTypes, type)) {
      status = false;
      showToast({
        type: 'fail',
        message: props.limitTypesMsg || '上传文件类型不符合要求'
      });
    }
    if (status) {
      filesLoading.value = uploadLoadingExcute(true, filesLoading.value, file);
      emits('updateLoadingData', true, filesLoading.value);
    }
  }

  return status;
}

function afterRead(file: any, detail: { index: number }) {
  if (Array.isArray(file)) {
    file.forEach((item, i) => {
      afterReadAction(item, i + detail.index);
    });
  } else {
    afterReadAction(file, detail.index);
  }
}

function setUploadStatus(type: number, file: any) {
  switch (type) {
    case 0:
      file.status = 'uploading';
      file.message = '上传中...';
      break;
    case 1:
      file.status = 'done';
      file.message = '';
      break;
    case 2:
      file.status = 'failed';
      file.message = '上传失败';
      break;
    default:
      break;
  }

  return file;
}

function afterReadAction(file: any, index: number) {
  const formData = new FormData();

  if (file.file) {
    formData.append('file', file.file);
  } else {
    console.error('No file found in file.file');

    return;
  }
  setUploadStatus(0, file);
  props
    .fileUploadApi(formData)
    .then((response: any) => {
      modelValue?.value.push(response);

      setUploadStatus(1, file);
      emits('update:modelValue', modelValue.value);
    })
    .catch(() => {
      fileList.value.splice(index, 1);
      showToast('上传失败');

      setUploadStatus(2, file);
      emits('uploadError');
    })
    .finally(() => {
      filesLoading.value = uploadLoadingExcute(false, filesLoading.value, file?.file);

      emits('updateLoadingData', false, filesLoading.value);
    });
}

function onDelete(file: UploaderFileListItem, detail: { index: number }) {
  modelValue.value?.splice(detail.index, 1);

  filesLoading.value = uploadLoadingExcute(false, filesLoading.value, file?.file);

  emits('updateLoadingData', false, filesLoading.value);

  emits('update:modelValue', modelValue.value);
}

function previewPdf(title: string, url: string) {
  emits('pdfPreview', {
    title,
    url
  });
}
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
      <template #default>
        <slot v-if="slots.default" />
        <div
          v-else
          class="btn-upload"
          :class="{
            'video-upload': limitTypes?.includes('video')
          }"
        >
          <van-icon name="plus" />
          <span v-if="showUploadProgress && attrs.maxCount" class="upload-count">{{ fileList.length }}/{{ attrs.maxCount }}</span>
        </div>
      </template>
      <template #preview-cover="{ content, objectUrl, file, fileName, fileType }">
        <slot v-if="slots['preview-cover']" />
        <div v-else class="video-preview-cover">
          <VideoItem v-if="(fileType || content)?.includes('video')" :url="objectUrl" />

          <van-image v-else-if="(fileType || content)?.includes('image')" fit="contain" :src="objectUrl" />

          <div
            v-else-if="(fileType || content)?.includes('pdf')"
            class="pdf-view"
            @click="previewPdf(fileName || file?.name, objectUrl)"
          >
            <div class="file-info">
              <van-icon name="records" />
              <div>{{ fileName || file?.name }}</div>
            </div>
          </div>
        </div>
      </template>
    </van-uploader>
  </div>
</template>

<style lang="scss" scoped></style>

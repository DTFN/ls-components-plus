<script setup lang="ts">
import LSUploader from '@cpo/uploader';
import dayjs from 'dayjs';

const showAccidentDatePicker = ref(false);

const currentTime = ref(['2022', '02', '19', '16', '30', '50']);
const minDate = ref(dayjs().subtract(2, 'day').toDate());
// const minDate = ref(dayjs().subtract(2, 'day').startOf('day').toDate());
const maxDate = ref(dayjs().toDate());
const columnsType = ref(['year', 'month', 'day', 'hour', 'minute', 'second']);

function onChange(value: any) {
  console.log('onChange', value);
}

function onConfirm(res: any) {
  console.log('onConfirm', res);
  showAccidentDatePicker.value = false;
}

function onCancel(res: any) {
  console.log('onCancel', res);
  showAccidentDatePicker.value = false;
}

// vant demo
const currentDate = ref(['2021', '01', '01']);
const minDate2 = new Date(2025, 0, 1);
const maxDate2 = new Date(2025, 5, 1);

// uploader demo
const uploadData: any = ref({
  fileKey: 'abc1.jpeg',
  fileUrl: 'https://img.yzcdn.cn/vant/cat.jpeg'
});
const uploadData2: any = ref({
  fileKey: 'abc2.video',
  fileUrl:
    'https://zlst-cldp-test-tos01.tos-s3-cn-shanghai.volces.com/video1753324077742-IO0B30DYngKqAKkbls.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKLTNzM0MTAzMjgxOWY1NDM5Nzk4ZDk5NGZiNmIyNzljZjQ%2F20250825%2Fcn-shanghai%2Fs3%2Faws4_request&X-Amz-Date=20250825T094601Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=8458a7035237be5bf1a20cf49ec8712ada5a43639546a8b616b06acde9a27542'
});

const fileModel = ref<any[]>([]);
const previewList: any = ref<any[]>([uploadData.value]);
const isUploadError = ref(false);

function updateLoadingData(type: boolean, list: Array<number | string>) {
  console.log('updateLoadingData', type, list, fileModel);
}

function uploadError() {
  isUploadError.value = true;
}

function fileUploadApi() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (isUploadError.value) {
        isUploadError.value = false;
        reject('上传失败');
      } else {
        resolve(uploadData.value);
      }
    }, 3000);
  });
}

const fileModel2 = ref<any[]>([]);
const previewList2: any = ref<any[]>([uploadData2.value]);
const isUploadError2 = ref(false);

function updateLoadingData2(type: boolean, list: Array<number | string>) {
  console.log('updateLoadingData', type, list);
}

function uploadError2() {
  isUploadError2.value = true;
}

function fileUploadApi2() {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (isUploadError2.value) {
        isUploadError2.value = false;
        reject('上传失败');
      } else {
        resolve(uploadData2.value);
      }
    }, 1000);
  });
}
</script>

<template>
  <div>
    <div class="time-panel">{{ currentTime }}</div>

    <van-button type="primary" @click="showAccidentDatePicker = true">open</van-button>

    <van-popup v-model:show="showAccidentDatePicker" destroy-on-close position="bottom" class="com-data-time-popup">
      <LSDateTimePicker
        v-model="currentTime"
        title="选择日期时间"
        cancel-text="取消"
        confirm-text="保存"
        :min-date="minDate"
        :max-date="maxDate"
        :columns-type="columnsType"
        :show-toolbar="true"
        :loading="false"
        :readonly="false"
        option-height="1.5rem"
        @change="onChange"
        @cancel="onCancel"
        @confirm="onConfirm"
      >
        <template #columns-top> 我们将根据您选择的事故发生时间，调取该时间前后各30分钟的行车数据，以出具事故分析报告 </template>
        <!-- <template #toolbar>
        sadasdasda
      </template> -->

        <template #columns-bottom>
          我们将根据您选择的事故发生时间，调取该时间前后各30分钟的行车数据，以出具事故分析报告
        </template>
      </LSDateTimePicker>
    </van-popup>

    <VanDivider />

    <van-date-picker v-model="currentDate" title="选择日期" :min-date="minDate2" :max-date="maxDate2" :loading="false">
      <template #columns-top> columns-top columns-top columns-top </template>
      <template #columns-bottom> columns-bottomcolumns-bottomcolumns-bottom </template>
    </van-date-picker>

    <VanDivider />

    <LSUploader
      v-model="fileModel"
      :preview-list="previewList"
      :file-upload-api="fileUploadApi"
      :limit-types="['png']"
      :limit-types-msg="'只能上传png格式的图片'"
      :def-attrs="{
        maxCount: 5,
        accept: 'image/jpg'
      }"
      @update-loading-data="updateLoadingData"
      @upload-error="uploadError"
    />

    <VanDivider />

    <LSUploader
      v-model="fileModel2"
      :preview-list="previewList2"
      :file-upload-api="fileUploadApi2"
      :limit-types="['video', 'pdf']"
      :max-sizes="{ video: 4, pdf: 1 }"
      :def-attrs="{
        maxCount: 3,
        accept: 'video/*, application/pdf'
      }"
      @update-loading-data="updateLoadingData2"
      @upload-error="uploadError2"
    />

    <VanDivider />
  </div>
</template>

<style lang="scss" scoped>
.time-panel {
  margin: 24px;
}
</style>

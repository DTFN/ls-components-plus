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
const fileModel = ref<any[]>([]);
const previewList: any = ref<any[]>([]);
const isUploadError = ref(false);

function updateLoadingData(type: boolean, list: Array<number | string>) {
  console.log('updateLoadingData', type, list);
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
        previewList.value = [
          {
            fileKey: 'abc',
            fileUrl: 'https://img.yzcdn.cn/vant/cat.jpeg'
          }
        ];
        resolve(previewList.value);
      }
    }, 1000);
  });
}

const fileModel2 = ref<any[]>([]);
const previewList2: any = ref<any[]>([]);
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
        previewList.value = [
          {
            fileKey: 'abc',
            fileUrl: 'https://img.yzcdn.cn/vant/cat.jpeg'
          }
        ];
        resolve(previewList.value);
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
      max-count="5"
      @update-loading-data="updateLoadingData"
      @upload-error="uploadError"
    />

    <VanDivider />

    <LSUploader
      v-model="fileModel2"
      :preview-list="previewList2"
      :file-upload-api="fileUploadApi2"
      max-count="5"
      :limit-types="['video']"
      @update-loading-data="updateLoadingData2"
      @upload-error="uploadError2"
    />
  </div>
</template>

<style lang="scss" scoped>
.time-panel {
  margin: 24px;
}
</style>

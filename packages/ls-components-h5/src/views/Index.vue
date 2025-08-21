<script setup lang="ts">
import dayjs from 'dayjs';

const minDate = ref(dayjs().subtract(2, 'day').startOf('day').toDate());
const maxDate = ref(dayjs().toDate());
const columnsType = ref(['year', 'month', 'day', 'hour', 'minute', 'second']);

function onChange(value: any) {
  console.log('onChange', value);
}

function onConfirm(res: any) {
  console.log('onConfirm', res);
}

function onCancel(res: any) {
  console.log('onCancel', res);
}

// vant demo
const currentDate = ref(['2021', '01', '01']);
const minDate2 = new Date(2025, 0, 1);
const maxDate2 = new Date(2025, 5, 1);
</script>

<template>
  <div>
    <LSDateTimePicker
      title="选择日期时间"
      cancel-text="取消"
      confirm-text="保存"
      :min-date="minDate"
      :max-date="maxDate"
      :columns-type="columnsType"
      :show-toolbar="true"
      :loading="false"
      :readonly="false"
      @change="onChange"
      @cancel="onCancel"
      @confirm="onConfirm"
    >
      <template #columns-top> 我们将根据您选择的事故发生时间，调取该时间前后各30分钟的行车数据，以出具事故分析报告 </template>
      <!-- <template #toolbar>
        sadasdasda
      </template> -->

      <template #columns-bottom> 我们将根据您选择的事故发生时间，调取该时间前后各30分钟的行车数据，以出具事故分析报告 </template>
    </LSDateTimePicker>

    <VanDivider />

    <van-date-picker v-model="currentDate" title="选择日期" :min-date="minDate2" :max-date="maxDate2" :loading="false">
      <template #columns-top> columns-top columns-top columns-top </template>
      <template #columns-bottom> columns-bottomcolumns-bottomcolumns-bottom </template>
    </van-date-picker>
  </div>
</template>

<style lang="scss" scoped></style>

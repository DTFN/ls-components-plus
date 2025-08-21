<script setup lang="ts">
const currentTime = ref(['2022', '02', '20', '12', '30', '50']);
const minDate = ref(new Date(2020, 1, 10, 2, 20));
const maxDate = ref(new Date(2023, 10, 10, 20, 50));
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
const minDate2 = new Date(2020, 0, 1);
const maxDate2 = new Date(2025, 5, 1);
</script>

<template>
  <div>
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

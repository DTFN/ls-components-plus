<script setup lang="ts">
import LSConfirm from '@cpo/confirm';
import axios from 'axios';

const visible = ref(false);
const title = ref('标题');
const message = ref('内容');
const type = ref(1);
const useHtml = ref(false);
const requestApi: any = ref(null);

function onConfirm(data: any) {
  console.log(data.value);
}

function onCancel() {
  console.log('取消');
}

const handleClick = (val: number) => {
  type.value = val;
  if (val == 1) {
    title.value = '标题 1';
    useHtml.value = false;
  } else if (val == 2) {
    title.value = '标题 2';
    useHtml.value = true;
  } else if (val == 3) {
    title.value = '标题 3';
    useHtml.value = false;
    requestApi.value = () => axios.get('https://jsonplaceholder.typicode.com/posts/1');
  }
  visible.value = true;
};
</script>

<template>
  <div>
    <LSButton type="primary" @click="handleClick(1)">确认框1</LSButton>

    <LSButton type="primary" @click="handleClick(2)">确认框2</LSButton>

    <LSButton type="primary" @click="handleClick(3)">确认框3</LSButton>

    <LSConfirm
      v-model="visible"
      :title="title"
      :message="message"
      :use-html="useHtml"
      :request-api="requestApi"
      @on-confirm="onConfirm"
      @on-cancel="onCancel"
    >
      <template #message>
        <div :style="{ color: 'red' }">
          <p>内容{{ title }}</p>
          <p>内容</p>
          <p>内容</p>
        </div>
      </template>
    </LSConfirm>
  </div>
</template>

<style lang="scss" scoped></style>

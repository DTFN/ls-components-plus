<script setup lang="ts">
const visible = ref(false);
const loading = ref(false);

const btnConfirmConfig = ref({
  type: 'warning',
  iconConfig: {
    name: 'Edit'
  }
});

const onConfirm = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    visible.value = false;
  }, 2000);
};
</script>

<template>
  <div>
    <LSButton type="primary" @click="visible = true">测试弹窗</LSButton>

    <LSDialog
      v-model="visible"
      :loading="loading"
      title="弹窗Title"
      :btn-confirm-config="btnConfirmConfig"
      @on-confirm="onConfirm"
    >
      <div>弹窗内容</div>
      <template #header>
        <div>弹窗头部</div>
      </template>
    </LSDialog>
  </div>
</template>

<style lang="scss" scoped></style>

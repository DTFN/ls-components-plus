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

const formData = ref({
  username: '',
  password: ''
});
const formItems = ref<FormItemsType[]>([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        pattern: /^[A-Z0-9]{4,36}$/i,
        message: '4-36位数字字母组合',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    attrs: {
      'show-password': true,
      maxlength: 24
    },
    rules: [
      {
        required: true,
        message: '请输入用户密码',
        trigger: 'blur'
      },
      {
        pattern: /^[A-Z0-9@]*$/i,
        message: '8-24位数字大小写字母组合',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'itemSlot',
    prop: 'slotTest',
    label: '自定义插槽'
  }
]);

const contentLoading = ref(false);

function testDialog() {
  contentLoading.value = true;
  visible.value = true;
  setTimeout(() => {
    contentLoading.value = false;
  }, 2000);
}
</script>

<template>
  <div>
    <LSButton type="primary" @click="testDialog">测试弹窗</LSButton>

    <LSDialog
      v-model="visible"
      :loading="loading"
      title="弹窗Title"
      :content-loading="contentLoading"
      :btn-confirm-config="btnConfirmConfig"
      @on-confirm="onConfirm"
    >
      <div>弹窗内容</div>
      <template #header>
        <div>弹窗头部</div>
      </template>

      <LSForm
        ref="FormRef"
        label-position="top"
        inline
        require-asterisk-position="left"
        :loading="loading"
        :colon="false"
        :show-buttons="true"
        :show-reset="true"
        confirm-text="登录"
        :form-data="formData"
        :form-items="formItems"
        :hide-required-asterisk="false"
      >
        <template #slotTest-slot="{ row }"> dasdasd：{{ row }} </template>
      </LSForm>
    </LSDialog>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { MonthDayOptions } from '@/constant';

const FormRef = ref();
const FormRef1 = ref();
const loading = ref(false);
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
    type: 'select',
    label: '日期',
    prop: 'dateList',
    attrs: {
      placeholder: '请选择日期，支持多选',
      multiple: true,
      clearable: true,
      'popper-class': 'ls-sel-calendar-popper'
    },
    options: MonthDayOptions,
    rules: [
      {
        required: true,
        message: '请选择日期，支持多选',
        trigger: 'change'
      }
    ]
  }
]);

const formData1 = ref({
  username: '',
  password: ''
});
const formItems1 = ref<FormItemsType[]>([
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
  }
]);

function onLogin() {
  if (loading.value) return;
  FormRef.value.validate().then((res: any) => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      console.log('submit success!');
      console.log('username:', res.username, ', password:', res.password);
    }, 2000);
  });
}
</script>

<template>
  <LSForm
    ref="FormRef"
    label-position="top"
    :loading="loading"
    :colon="false"
    :show-buttons="true"
    :show-reset="false"
    confirm-text="登录"
    :form-data="formData"
    :form-items="formItems"
    :hide-required-asterisk="true"
  />

  <div>--------------------------------------------------------------------------------------------</div>
  <LSForm
    ref="FormRef1"
    label-position="top"
    :loading="loading"
    :colon="false"
    :show-buttons="true"
    :form-data="formData1"
    :form-items="formItems1"
    :hide-required-asterisk="true"
    @submit="onLogin"
  />
  <!-- <el-button type="primary" :loading="loading" :disabled="loading" @click="onLogin">登 录</el-button> -->
</template>

<style scoped></style>

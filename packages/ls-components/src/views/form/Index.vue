<script setup lang="ts">
import { ref } from 'vue';
// import Form from '../../../components/form/Form.vue';
const FormRef = ref();
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

// const form = reactive({
//   name: '',
//   region: '',
//   date1: '',
//   date2: '',
//   delivery: false,
//   type: [],
//   resource: '',
//   desc: ''
// });

// const onSubmit = () => {
//   console.log('submit!');
// };
</script>

<template>
  <LSForm
    ref="FormRef"
    label-position="top"
    :loading="loading"
    :colon="false"
    :show-buttons="false"
    :form-data="formData"
    :form-items="formItems"
    :hide-required-asterisk="true"
  />
  <el-button type="primary" :loading="loading" :disabled="loading" @click="onLogin">登 录</el-button>
  <!-- <div>--------------------------------------------------------------------------------------------</div> -->
</template>

<style scoped></style>

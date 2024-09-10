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

// do not use same name with ref
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
  <!-- <div>--------------------------------------------------------------------------------------------</div>
  <el-form :model="form" label-width="auto" style="max-width: 600px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox value="Online activities" name="type"> Online activities </el-checkbox>
        <el-checkbox value="Promotion activities" name="type"> Promotion activities </el-checkbox>
        <el-checkbox value="Offline activities" name="type"> Offline activities </el-checkbox>
        <el-checkbox value="Simple brand exposure" name="type"> Simple brand exposure </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio value="Sponsor">Sponsor</el-radio>
        <el-radio value="Venue">Venue</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form> -->
</template>

<style scoped></style>

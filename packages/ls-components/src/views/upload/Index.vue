<script setup lang="ts">
import axios from 'axios';

const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
const item1 = ref({
  isCover: false,
  limitFile: ['png', 'docx'],
  tipContent: '上傳文件不超過2m',
  textPreview: ['pdf']
});

const item2 = ref({
  httpRequestFunc: function (formData: any, uploadProcessObj: any) {
    return axios.post('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership', formData, uploadProcessObj);
  },
  limitFile: ['pdf'],
  textPreview: ['pdf']
});

const logoImg = new URL('@/assets/logo.png', import.meta.url).href;
const defImg = new URL('@/assets/default_head.png', import.meta.url).href;
const fileList = ref<any[]>([
  {
    name: 'food.jpeg',
    url: defImg
  }
]);

function testFunc() {
  fileList.value = [];
}

function httpResponseFunc(res: any) {
  const {
    data: { code, data }
  } = res;
  console.log('httpResponseFunc', code, data);
}

const ruleFormRef: Ref<any> = ref();
const ruleForm = ref({
  fileId: ''
});
const rules = ref({
  fileId: [
    {
      required: true,
      message: '请上传文件',
      trigger: 'change'
    }
  ]
});
function submitForm() {
  ruleFormRef.value.validate((valid: Boolean) => {
    if (valid) {
      alert('submit!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
}
function uploadErrorFunc<T>(msg: T) {
  console.log(msg);
}
function formValidateFunc() {
  ruleForm.value.fileId = '11111';
  ruleFormRef.value.validateField('fileId');
}
</script>

<template>
  <div>
    <LSUpload :action="action" :disabled="true"></LSUpload>

    <br />

    <LSUpload :action="action" :item="item1" :file-list="[{ name: '1' }, { name: '2' }]"></LSUpload>

    <br />

    <LSUpload :action="action" :auto-upload="false" :item="item2" @http-response-func="httpResponseFunc"></LSUpload>

    <br />

    <LSUpload :action="action" :item="item2"></LSUpload>

    <br />

    <LSUpload :action="action" :drag="true"></LSUpload>

    <br />

    <LSUpload :action="action" :drag="true" :auto-upload="false" :item="{ isCover: false }"></LSUpload>

    <br />

    <LSUpload list-type="picture-card" :action="action" :item="{ hideCoverBtn: true }"> </LSUpload>

    <br />
    <LSUpload
      list-type="picture-card"
      :action="action"
      :auto-upload="false"
      :item="{ profile: true, defProfile: logoImg, limitSize: 100, limitUnit: 'KB' }"
      :file-list="fileList"
    >
      <template #tip>
        <div>12312312</div>
      </template>
    </LSUpload>

    <LSButton @click="testFunc">Test</LSButton>

    <br />
    <LSUpload list-type="picture-card" :action="action" :drag="true" :auto-upload="false" :item="{ isCover: false }"> </LSUpload>

    <br />

    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleFormRef" label-width="100px" class="demo-ruleForm">
      <el-form-item label="文件上传：" prop="fileId">
        <LSUpload
          :action="action"
          :item="{
            isCover: false,
            limitFile: ['png', 'JPG'],
            limitFileMsg: '上传文件必须为PNG，JPG',
            limitSize: 10,
            limitSizeMsg: '文件大小不能超过10M',
            isToast: false,
            formRuleFunc: () => rules['fileId'][0],
            formValidateFunc
          }"
          @upload-error-func="uploadErrorFunc"
        >
          <template #trigger>
            <LSButton class="ls-upload-btn-com ls-upload-btn-default">上传</LSButton>
          </template>
          <template #tip>
            <div class="ls-tip">上传文件大小能超过10M</div>
          </template>
        </LSUpload>
      </el-form-item>
      <el-form-item>
        <LSButton type="primary" @click="submitForm()">提交</LSButton>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped></style>

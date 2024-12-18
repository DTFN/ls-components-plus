<script setup lang="ts">
import axios from 'axios';
import { ElMessageBox, UploadProps } from 'element-plus';

const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
const item1 = ref({
  isCover: false,
  limitFile: ['png', 'docx'],
  tipContent: '上傳文件不超過2m'
});

const item2 = ref({
  httpRequestFunc: function (formData: any, uploadProcessObj: any) {
    return axios.post('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership', formData, uploadProcessObj);
  },
  limitFile: ['pdf', 'jpg']
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

const fileList2: any = ref([]);
function onChange2(file: any) {
  fileList2.value.push({
    name: file.name,
    url: file.blob
  });
}

const uploadRef = ref();
const fileList3 = ref([]);
function onSuccess() {
  fileList3.value = [];
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile: any) => {
  return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
    () => true,
    () => false
  );
};

function onPreview(file: any) {
  console.log(file);
}
</script>

<template>
  <div>
    <LSUpload
      ref="uploadRef"
      :action="action"
      :on-success="onSuccess"
      :file-list="fileList3"
      :limit="1"
      multiple
      :before-remove="beforeRemove"
    ></LSUpload>

    <br />

    <LSUpload
      :action="action"
      :item="item1"
      :file-list="fileList2"
      @on-change-func="onChange2"
      :before-remove="beforeRemove"
    ></LSUpload>

    <br />

    <LSUpload
      :action="action"
      :auto-upload="false"
      :item="item2"
      @http-response-func="httpResponseFunc"
      :on-preview="onPreview"
    ></LSUpload>

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

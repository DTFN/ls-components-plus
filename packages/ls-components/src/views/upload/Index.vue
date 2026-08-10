<script setup lang="ts">
import type { UploadItemType } from '@cpo/_types'
import type { UploadProps } from 'element-plus'
import axios from 'axios'
import { ElMessageBox } from 'element-plus'

const action = ref('http://192.168.1.33:8080/api/v1/upload/file')
const headers = ref({
  Authorization: 'Bearer 536002a2-2084-4ad3-9167-8ffa0e6dde1d',
})
const item1: Ref<UploadItemType> = ref({
  isCover: false,
  limitFile: ['png', 'docx'],
  limitSize: 50,
  tipContent: '上傳文件不超過50m',
})

const item2: Ref<any> = ref({
  httpRequestFunc(formData: any, uploadProcessObj: any) {
    return axios.post('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership', formData, uploadProcessObj)
  },
  limitFile: ['pdf', 'jpg'],
})

const itemCompress: Ref<UploadItemType> = ref({
  compress: true,
  compressThreshold: 500,
  compressMaxWidth: 4000,
  compressMaxHeight: 4000,
  compressQuality: 0.8,
  limitFile: ['jpg', 'png'],
  limitSize: 10,
  tipContent: '图片超过 500KB 或尺寸超过 4000px 将自动压缩',
})

const logoImg = new URL('@/assets/logo.png', import.meta.url).href
const defImg = new URL('@/assets/default_head.png', import.meta.url).href
const fileList = ref<any[]>([
  {
    name: 'food.jpeg',
    url: defImg,
  },
])

function testFunc() {
  fileList.value = []
}

function httpResponseFunc(res: any) {
  const {
    data: { code, data },
  } = res
  console.log('httpResponseFunc', code, data)
}

const ruleFormRef: Ref<any> = ref()
const ruleForm = ref({
  fileId: '',
})
const rules = ref({
  fileId: [
    {
      required: true,
      message: '请上传文件',
      trigger: 'change',
    },
  ],
})

function submitForm() {
  ruleFormRef.value.validate((valid: boolean) => {
    if (valid) {
      console.log('submit!')
    }
    else {
      console.log('error submit!!')

      return false
    }
  })
}

function uploadErrorFunc<T>(msg: T) {
  console.log(msg)
}

function formValidateFunc() {
  ruleForm.value.fileId = '11111'
  ruleFormRef.value.validateField('fileId')
}

const fileList2: any = ref([])

function onChange2(file: any) {
  console.log('onChange2', file)
  // fileList2.value.push({
  //   name: file.name,
  //   url: file.blob
  // });
}

const uploadRef = ref()
const fileList3 = ref([])

function onSuccess() {
  fileList3.value = []
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile: any) => {
  return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
    () => true,
    () => false,
  )
}

function onPreview(file: any) {
  console.log(file)
}

function onSuccessFunc(response: any, file: any) {
  const { data, code } = response || {}
  console.log('onSuccessFunc', response, file)

  if (code === 200) {
    fileList2.value.push({
      name: data.originalName,
      url: data.fileUrl,
      uid: file.uid,
      id: data.id,
      raw: file.raw,
      blob: file.blob,
    })
  }
}

const fileList4: any = ref([])

function onHandleCropper(file: any, index: number) {
  console.log('onHandleCropper', file, index)
}
</script>

<template>
  <div>
    <LSUpload
      ref="uploadRef"
      :action="action"
      :on-success="onSuccess"
      :file-list="fileList3"
      :limit="2"
      multiple
      :before-remove="beforeRemove"
      :auto-upload="false"
      :item="{
        isCover: false,
        limitAllFail: false,
        limitSize: 50,
        limitFile: ['rar', 'zip'],
      }"
    ></LSUpload>

    <br />

    <LSUpload
      :action="action"
      :item="item1"
      :file-list="fileList2"
      :headers="headers"
      :before-remove="beforeRemove"
      :on-success="onSuccessFunc"
      @on-change-func="onChange2"
    ></LSUpload>

    <br />

    <LSUpload
      :action="action"
      :auto-upload="false"
      :item="item2"
      :on-preview="onPreview"
      @http-response-func="httpResponseFunc"
    ></LSUpload>

    <br />

    <LSUpload :action="action" :item="item2"></LSUpload>

    <br />

    <LSUpload
      :action="action"
      list-type="picture-card"
      :item="itemCompress"
      :auto-upload="false"
      @http-response-func="httpResponseFunc"
    ></LSUpload>

    <br />

    <LSUpload :action="action" :drag="true"></LSUpload>

    <br />

    <LSUpload :action="action" :drag="true" :auto-upload="false" :item="{ isCover: false }"></LSUpload>

    <br />

    <LSUpload
      :limit="3"
      list-type="picture-card"
      :action="action"
      :auto-upload="false"
      :headers="headers"
      :file-list="fileList4"
      :item="{ isCover: false, limitSize: 50 }"
      :custom-file="true"
      :has-cropper="true"
      @on-handle-cropper="onHandleCropper"
    >
    </LSUpload>

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

    <LSButton @click="testFunc">
      Test
    </LSButton>

    <br />
    <LSUpload list-type="picture-card" :action="action" :drag="true" :auto-upload="false" :item="{ isCover: false }">
    </LSUpload>

    <br />
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px">
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
            formRuleFunc: () => rules.fileId[0],
            formValidateFunc,
          }"
          @upload-error-func="uploadErrorFunc"
        >
          <template #trigger>
            <LSButton class="ls-upload-btn-com ls-upload-btn-default">
              上传
            </LSButton>
          </template>
          <template #tip>
            <div class="ls-tip">
              上传文件大小能超过10M
            </div>
          </template>
        </LSUpload>
      </el-form-item>
      <el-form-item>
        <LSButton type="primary" @click="submitForm()">
          提交
        </LSButton>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped></style>

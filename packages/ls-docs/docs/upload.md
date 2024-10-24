---
outline: deep
---

# Upload 上传

::: warning 基于el-upload二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 普通覆盖

<br />
<ClientOnly>
  <LSUpload :action="action"></LSUpload>
</ClientOnly>

```js
import { ref } from 'vue';
const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
```

```html
<LSUpload :action="action"></LSUpload>
```

### 2. 普通非覆盖

<br />
<ClientOnly>
  <LSUpload :action="action" :item="item1"></LSUpload>
</ClientOnly>

```js
import { ref } from 'vue';
const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
const item1 = ref({
  isCover: false
});
```

```html
<LSUpload :action="action" :item="item1"></LSUpload>
```

### 3. 限制上传文件格式和大小

<br />
<ClientOnly>
  <LSUpload :action="action" :item="item2"></LSUpload>
</ClientOnly>

```js
import { ref } from 'vue';
const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
const item2 = ref({
  limitFile: ['png', 'docx']
});
```

```html
<LSUpload :action="action" :item="item2"></LSUpload>
```

### 4.手动上传

<br />
<ClientOnly>
  <LSUpload action="#" :auto-upload="false" :item="item3" @http-response-func="httpResponseFunc"></LSUpload>
</ClientOnly>

```js
import { ref } from 'vue';
import axios from 'axios';
const item3 = ref({
  httpRequestFunc: function (formData, uploadProcessObj) {
    return axios.post('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership', formData, uploadProcessObj);
  }
});
function httpResponseFunc(res) {
  const {
    data: { code, data }
  } = res;
  console.log('httpResponseFunc', code, data);
}
```

```html
<LSUpload action="#" :auto-upload="false" :item="item3" @http-response-func="httpResponseFunc"></LSUpload>
```

### 5.支持拖拽上传

<br />
<ClientOnly>
  <LSUpload :action="action" :drag="true"></LSUpload>
</ClientOnly>

```js
const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
```

```html
<LSUpload :action="action" :drag="true"></LSUpload>
```

### 6.图片上传

<br />

<ClientOnly>
  <LSUpload list-type="picture-card" :action="action"> </LSUpload>
</ClientOnly>

```js
const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
```

```html
<LSUpload list-type="picture-card" :action="action"> </LSUpload>
```

### 7.表单验证

<br />
<!-- <LSForm
  ref="ruleFormRef"
  :form-data="formData"
  :form-items="formItems"
  :show-buttons="true"
  :show-reset="false"
  confirm-text="提交"
  @submit="submitForm"
>
  <template #fileId>
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
  </template>
</LSForm> -->

<ClientOnly>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleFormRef" label-width="100px" class="demo-ruleForm">
    <el-form-item label="文件上传：" prop="fileId">
      <LSUpload
        :action="action"
        :item="{
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
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
import axios from 'axios';
const ruleFormRef = ref();
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
  ruleFormRef.value.validate(valid => {
    if (valid) {
      alert('submit!');
    } else {
      console.log('error submit!!');
      return false;
    }
  });
}
function uploadErrorFunc(msg) {
  console.log(msg);
}
function formValidateFunc() {
  ruleForm.value.fileId = '11111';
  ruleFormRef.value.validateField('fileId');
}
```

```html
<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleFormRef" label-width="100px" class="demo-ruleForm">
  <el-form-item label="文件上传：" prop="fileId">
    <LSUpload
      :action="action"
      :item="{
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
```

:::

### 8.文本预览

<br />

<ClientOnly>
  <LSUpload :action="action" :item="item4"></LSUpload>
</ClientOnly>

```js
const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
const item4 = ref({
  textPreview: ['pdf', 'xlsx']
});
```

```html
<LSUpload :action="action" :item="item4"></LSUpload>
```

## API

### 1. Attributes，需以item为json格式传值，保留了el-upload属性和方法

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods，通过emit抛出的可使用方法

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { ElForm, ElFormItem } from 'element-plus';
  import { tableColumn, tableMethodColumn } from '../constant';

  const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
  const item1 = ref({
    isCover: false,
  })
  const item2 = ref({
    limitFile: ['png', 'docx'],
    limitSize: 5
  })
  const item3 = ref({
    httpRequestFunc: function (formData, uploadProcessObj) {
      return axios.post('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership', formData, uploadProcessObj);
    }
  })
  const item4 = ref({
    textPreview: ['pdf', 'xlsx'],
  })
  function httpResponseFunc(res) {
    const {
      data: { code, data }
    } = res;
    console.log('httpResponseFunc', code, data);
  }

  const ruleFormRef = ref();
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
    ruleFormRef.value.validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  function uploadErrorFunc(msg) {
    console.log(msg);
  }
  function formValidateFunc() {
    ruleForm.value.fileId = '11111';
    ruleFormRef.value.validateField('fileId');
  }
  // const formData = ref({
  //   fileId: ''
  // })
  // const formItems = ref([{
  //   type: 'slot',
  //   label: '文件上传',
  //   prop: 'fileId',
  //   rules: [
  //     {
  //       required: true,
  //       message: '请上传文件',
  //       trigger: 'change'
  //     }
  //   ]
  // }])
  // function formValidateFunc() {
  //   formData.value.fileId = '11111';
  //   ruleFormRef.value.FormRef.validateField('fileId');
  // }
  // function uploadErrorFunc(msg) {
  //   console.log(msg);
  // }
  // function submitForm() {
  //   ruleFormRef.value.validate().then((res) => {
  //     console.log(res)
  //   });
  // }

  const tableData = ref([
    {
      name: 'isCover',
      desc: '是否覆盖上传，为true时，multiple不能设置true',
      type: 'boolean',
      value: true
    },
    {
      name: 'limitFile',
      desc: '文件格式限制',
      type: 'array',
      value: '-'
    },
    {
      name: 'limitFileMsg',
      desc: '文件格式限制提示',
      type: 'string',
      value: '-'
    },
    {
      name: 'limitSize',
      desc: '文件大小限制，默认2M, 以M为单位',
      type: 'number',
      value: '-'
    },
    {
      name: 'limitSizeMsg',
      desc: '文件大小限制提示',
      type: 'string',
      value: '-'
    },
    {
      name: 'limitNumMsg',
      desc: 'multiple为true时，文件个数限制提示',
      type: 'string',
      value: '-'
    },
    {
      name: 'httpRequestFunc',
      desc: '覆盖默认上传方法，传入接口调用方法，常用于手动上传',
      type: 'function',
      value: '-'
    },
    {
      name: 'formRuleFunc',
      desc: '表单规则方法，传递json数据',
      type: 'function',
      value: '-'
    },
    {
      name: 'formValidateFunc',
      desc: '表单验证回调方法',
      type: 'function',
      value: '-'
    },
    {
      name: 'isToast',
      desc: '异常场景是否弹出toast提示',
      type: 'boolean',
      value: true
    },
    {
      name: 'emptyFileMsg',
      desc: '上传空文件提示信息',
      type: 'string',
      value: '-'
    },
    {
      name: 'textPreview',
      desc: '点击上传文本文件是否支持预览，支持格式：docx、pdf、xlsx',
      type: 'array',
      value: '-'
    }
  ])

  const tableData2 = ref([
    {
      name: 'on-change-func',
      desc: '文件更新上传回调方法，增加blob返回数据',
      type: 'function',
      value: 'file'
    },
    {
      name: 'http-response-func',
      desc: '覆盖上传方法回调函数，返回值为接口调用结果，常用于手动上传，配合httpRequestFunc使用',
      type: 'function',
      value: 'data'
    },
    {
      name: 'upload-error-func',
      desc: '获取上传前置报错信息，处理form表单验证等问题',
      type: 'function',
      value: 'msg'
    }
  ])
</script>

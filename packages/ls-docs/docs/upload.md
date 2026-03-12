---
outline: deep
---

# Upload 上传

::: warning 基于el-upload二次封装，保留原属性和方法，提供更多自定义选项和验证功能。
:::

## 目录

- [功能介绍](#功能介绍)
- [使用方式](#使用方式)
  - [普通覆盖上传](#普通覆盖上传)
  - [普通非覆盖上传](#普通非覆盖上传)
  - [限制上传文件格式和大小](#限制上传文件格式和大小)
  - [手动上传](#手动上传)
  - [拖拽上传](#拖拽上传)
  - [图片上传](#图片上传)
  - [表单验证](#表单验证)
  - [用户头像模式](#用户头像模式)
  - [自定义上传按钮](#自定义上传按钮)
  - [带数量限制的上传](#带数量限制的上传)
  - [带删除确认的上传](#带删除确认的上传)
  - [带背景图片的上传](#带背景图片的上传)
  - [多文件上传带预览](#多文件上传带预览)
  - [带进度条的上传](#带进度条的上传)
  - [自定义文件列表项](#自定义文件列表项)
  - [与其他组件的集成](#与其他组件的集成)
- [API](#api)
  - [Attributes](#attributes)
  - [Events](#events)
  - [Slots](#slots)

## 功能介绍

LSUpload 组件是对 Element Plus Upload 组件的二次封装，提供了以下增强功能：

- 支持文件格式和大小的限制
- 支持覆盖上传和非覆盖上传模式
- 支持手动上传和自动上传
- 支持拖拽上传
- 支持图片上传和预览
- 支持表单验证集成
- 支持用户头像模式
- 支持自定义上传按钮
- 支持带数量限制的上传
- 支持详细的错误提示和回调

## 使用方式

### 普通覆盖上传

<br />
<ClientOnly>
  <LSUpload :action="action"></LSUpload>
</ClientOnly>

```js
import { ref } from 'vue';
const action = ref('http://192.168.1.33:3001/upload');
```

```html
<LSUpload :action="action"></LSUpload>
```

### 普通非覆盖上传

<br />
<ClientOnly>
  <LSUpload :action="action" :item="item1"></LSUpload>
</ClientOnly>

```js
import { ref } from 'vue';
const action = ref('http://192.168.1.33:3001/upload');
const item1 = ref({
  isCover: false
});
```

```html
<LSUpload :action="action" :item="item1"></LSUpload>
```

### 限制上传文件格式和大小

<br />
<ClientOnly>
  <LSUpload :action="action" :item="item2"></LSUpload>
</ClientOnly>

```js
import { ref } from 'vue';
const action = ref('http://192.168.1.33:3001/upload');
const item2 = ref({
  limitFile: ['png', 'docx']
});
```

```html
<LSUpload :action="action" :item="item2"></LSUpload>
```

### 手动上传

<br />
<ClientOnly>
  <LSUpload action="#" :auto-upload="false" :item="item3" @http-response-func="httpResponseFunc"></LSUpload>
</ClientOnly>

```js
import { ref } from 'vue';
import axios from 'axios';
const item3 = ref({
  httpRequestFunc: function (formData, uploadProcessObj) {
    return axios.post('http://192.168.1.33:3001/upload', formData, uploadProcessObj);
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

### 拖拽上传

<br />
<ClientOnly>
  <LSUpload :action="action" :drag="true"></LSUpload>
</ClientOnly>

```js
const action = ref('http://192.168.1.33:3001/upload');
```

```html
<LSUpload :action="action" :drag="true"></LSUpload>
```

### 图片上传

<br />

<ClientOnly>
  <LSUpload list-type="picture-card" :action="action"> </LSUpload>
</ClientOnly>

```js
const action = ref('http://192.168.1.33:3001/upload');
```

```html
<LSUpload list-type="picture-card" :action="action"> </LSUpload>
```

### 表单验证

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

### 用户头像模式

<br />
<ClientOnly>
<LSUpload list-type="picture-card" :action="action" :item="item5" v-model:file-list="fileList">
  <template #tip>
    <div>12312312</div>  
  </template>
</LSUpload>
</ClientOnly>

````js
const action = ref('http://192.168.1.33:3001/upload');
const fileList = ref([{ name: '', url: '' }]);

```html
<LSUpload list-type="picture-card" :action="action" :item="{ profile: true }" v-model:file-list="fileList"> </LSUpload>
````

### 自定义上传按钮

<ClientOnly>
  <LSUpload :action="action">
    <template #trigger>
      <LSButton type="primary" icon="Upload">自定义上传按钮</LSButton>
    </template>
  </LSUpload>
</ClientOnly>

```html
<LSUpload :action="action">
  <template #trigger>
    <LSButton type="primary" icon="Upload">自定义上传按钮</LSButton>
  </template>
</LSUpload>
```

### 带数量限制的上传

<ClientOnly>
  <LSUpload :action="action" :limit="3" multiple :item="item6"></LSUpload>
</ClientOnly>

```js
const item6 = ref({
  hideBtnReachLimit: true,
  limitNumMsg: '最多只能上传3个文件'
});
```

```html
<LSUpload :action="action" :limit="3" multiple :item="item6"></LSUpload>
```

### 带删除确认的上传

<ClientOnly>
  <LSUpload :action="action" multiple @on-remove="handleRemove"></LSUpload>
</ClientOnly>

```js
function handleRemove(file, fileList) {
  return new Promise((resolve, reject) => {
    if (confirm('确定要删除这个文件吗？')) {
      resolve();
    } else {
      reject();
    }
  });
}
```

```html
<LSUpload :action="action" multiple @on-remove="handleRemove"></LSUpload>
```

### 带背景图片的上传

<ClientOnly>
  <LSUpload :action="action" :item="item7"></LSUpload>
</ClientOnly>

```js
const item7 = ref({
  bgImage:
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20gradient%20background%20with%20upload%20icon&image_size=square'
});
```

```html
<LSUpload :action="action" :item="item7"></LSUpload>
```

### 多文件上传带预览

<ClientOnly>
  <LSUpload :action="action" multiple list-type="picture-card" :item="item8"></LSUpload>
</ClientOnly>

```js
const item8 = ref({
  hideBtnReachLimit: true,
  limitNumMsg: '最多只能上传5个文件'
});
```

```html
<LSUpload :action="action" multiple list-type="picture-card" :limit="5" :item="item8"></LSUpload>
```

### 带进度条的上传

<ClientOnly>
  <LSUpload :action="action" :show-file-list="true" :item="item9"></LSUpload>
</ClientOnly>

```js
const item9 = ref({
  httpRequestFunc: function (formData, uploadProcessObj) {
    return axios.post('http://192.168.1.33:3001/upload', formData, {
      ...uploadProcessObj,
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log('上传进度:', percentCompleted);
      }
    });
  }
});
```

```html
<LSUpload :action="action" :show-file-list="true" :item="item9"></LSUpload>
```

### 自定义文件列表项

<ClientOnly>
  <LSUpload :action="action" multiple :item="item10">
    <template #file="{ file }">
      <div class="custom-file-item">
        <span>{{ file.name }}</span>
        <el-button size="small" type="danger" @click.stop="handleCustomRemove(file)">
          删除
        </el-button>
      </div>
    </template>
  </LSUpload>
</ClientOnly>

```js
const item10 = ref({});
function handleCustomRemove(file) {
  const index = fileList.value.findIndex(item => item.uid === file.uid);
  if (index !== -1) {
    fileList.value.splice(index, 1);
  }
}
```

```html
<LSUpload :action="action" multiple :item="item10">
  <template #file="{ file }">
    <div class="custom-file-item">
      <span>{{ file.name }}</span>
      <el-button size="small" type="danger" @click.stop="handleCustomRemove(file)"> 删除 </el-button>
    </div>
  </template>
</LSUpload>
```

### 与其他组件的集成

<ClientOnly>
  <el-card shadow="hover" style="width: 400px">
    <template #header>
      <div class="card-header">
        <span>文件上传示例</span>
      </div>
    </template>
    <LSUpload :action="action" :item="item11">
      <template #trigger>
        <el-button type="primary" icon="el-icon-upload">
          选择文件
        </el-button>
      </template>
      <template #tip>
        <el-alert
          title="提示"
          type="info"
          :closable="false"
          show-icon
        >
          请上传PDF、Word或Excel文件
        </el-alert>
      </template>
    </LSUpload>
  </el-card>
</ClientOnly>

```js
const item11 = ref({
  limitFile: ['pdf', 'docx', 'xlsx'],
  limitFileMsg: '只能上传PDF、Word或Excel文件',
  limitSize: 5,
  limitSizeMsg: '文件大小不能超过5MB'
});
```

```html
<el-card shadow="hover" style="width: 400px">
  <template #header>
    <div class="card-header">
      <span>文件上传示例</span>
    </div>
  </template>
  <LSUpload :action="action" :item="item11">
    <template #trigger>
      <el-button type="primary" icon="el-icon-upload"> 选择文件 </el-button>
    </template>
    <template #tip>
      <el-alert title="提示" type="info" :closable="false" show-icon> 请上传PDF、Word或Excel文件 </el-alert>
    </template>
  </LSUpload>
</el-card>
```

### 拖拽上传带背景图片

<ClientOnly>
  <LSUpload :action="action" :drag="true" :item="item12"></LSUpload>
</ClientOnly>

```js
const item12 = ref({
  bgImage:
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=light%20blue%20background%20with%20drag%20and%20drop%20area&image_size=landscape_16_9',
  tipContent: '点击或拖拽文件到此处上传'
});
```

```html
<LSUpload :action="action" :drag="true" :item="item12"></LSUpload>
```

### 图片上传带背景

<ClientOnly>
  <LSUpload :action="action" list-type="picture-card" :item="item13"></LSUpload>
</ClientOnly>

```js
const item13 = ref({
  bgImage:
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=gradient%20purple%20background%20for%20image%20upload&image_size=square',
  profile: true,
  defProfile:
    'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=default%20user%20avatar%20placeholder&image_size=square'
});
```

```html
<LSUpload :action="action" list-type="picture-card" :item="item13"></LSUpload>
```

### 多文件上传带进度条

<ClientOnly>
  <LSUpload :action="action" multiple :show-file-list="true" :item="item14"></LSUpload>
</ClientOnly>

```js
const item14 = ref({
  limitFile: ['jpg', 'png', 'gif'],
  limitFileMsg: '只能上传图片文件',
  limitSize: 2,
  limitSizeMsg: '文件大小不能超过2MB',
  limitNumMsg: '最多只能上传3个文件',
  httpRequestFunc: function (formData, uploadProcessObj) {
    return axios.post('http://192.168.1.33:3001/upload', formData, {
      ...uploadProcessObj,
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log('上传进度:', percentCompleted);
      }
    });
  }
});
```

```html
<LSUpload :action="action" multiple :limit="3" :show-file-list="true" :item="item14"></LSUpload>
```

### 自定义文件预览

<ClientOnly>
  <LSUpload :action="action" list-type="picture" :item="item15">
    <template #file="{ file }">
      <div class="custom-file-preview">
        <img :src="file.url" alt="预览图片" class="preview-img" />
        <div class="preview-info">
          <span>{{ file.name }}</span>
          <span>{{ (file.size / 1024).toFixed(2) }}KB</span>
        </div>
        <el-button size="small" type="danger" @click.stop="handleRemove(file)">
          删除
        </el-button>
      </div>
    </template>
  </LSUpload>
</ClientOnly>

```js
const item15 = ref({
  limitFile: ['jpg', 'png'],
  limitFileMsg: '只能上传图片文件'
});
```

```html
<LSUpload :action="action" list-type="picture" :item="item15">
  <template #file="{ file }">
    <div class="custom-file-preview">
      <img :src="file.url" alt="预览图片" class="preview-img" />
      <div class="preview-info">
        <span>{{ file.name }}</span>
        <span>{{ (file.size / 1024).toFixed(2) }}KB</span>
      </div>
      <el-button size="small" type="danger" @click.stop="handleRemove(file)">
        删除
      </el-button>
    </div>
  </template>
</LSUpload>

<style scoped>
.custom-file-preview {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f5f7fa;
}

.preview-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.preview-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.preview-info span {
  font-size: 14px;
  color: #606266;
}
</style>
```

### 自动上传与手动上传切换

<ClientOnly>
  <div class="upload-mode-toggle">
    <el-switch v-model="autoUpload" @change="handleUploadModeChange">
      {{ autoUpload ? '自动上传' : '手动上传' }}
    </el-switch>
    <LSUpload 
      :action="action" 
      :auto-upload="autoUpload" 
      :item="item16"
      ref="uploadRef"
    >
      <template #trigger>
        <LSButton type="primary" :icon="Upload">
          {{ autoUpload ? '选择文件' : '选择文件(手动上传)' }}
        </LSButton>
      </template>
      <template #tip>
        <div class="ls-tip">
          {{ autoUpload ? '文件将自动上传' : '选择文件后需要点击上传按钮' }}
        </div>
      </template>
    </LSUpload>
    <LSButton 
      v-if="!autoUpload" 
      type="success" 
      :icon="Check" 
      @click="handleSubmitUpload"
      style="margin-left: 10px;"
    >
      上传
    </LSButton>
  </div>
</ClientOnly>

```js
import { ref } from 'vue';
import { Upload, Check } from '@element-plus/icons-vue';

const autoUpload = ref(true);
const uploadRef = ref(null);
const item16 = ref({
  limitFile: ['pdf', 'docx', 'xlsx'],
  limitFileMsg: '只能上传PDF、Word或Excel文件',
  limitSize: 5,
  limitSizeMsg: '文件大小不能超过5MB'
});

function handleUploadModeChange() {
  console.log('上传模式切换为:', autoUpload.value ? '自动上传' : '手动上传');
}

function handleSubmitUpload() {
  if (uploadRef.value) {
    uploadRef.value.submit();
    console.log('手动触发上传');
  }
}
```

```html
<div class="upload-mode-toggle">
  <el-switch v-model="autoUpload" @change="handleUploadModeChange">
    {{ autoUpload ? '自动上传' : '手动上传' }}
  </el-switch>
  <LSUpload 
    :action="action" 
    :auto-upload="autoUpload" 
    :item="item16"
    ref="uploadRef"
  >
    <template #trigger>
      <LSButton type="primary" :icon="Upload">
        {{ autoUpload ? '选择文件' : '选择文件(手动上传)' }}
      </LSButton>
    </template>
    <template #tip>
      <div class="ls-tip">
        {{ autoUpload ? '文件将自动上传' : '选择文件后需要点击上传按钮' }}
      </div>
    </template>
  </LSUpload>
  <LSButton 
    v-if="!autoUpload" 
    type="success" 
    :icon="Check" 
    @click="handleSubmitUpload"
    style="margin-left: 10px;"
  >
    上传
  </LSButton>
</div>

<style scoped>
.upload-mode-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
```

## API

### Attributes，需以item为UploadItemType格式传值，保留了el-upload属性和方法

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 属性详细说明

| 属性名            | 类型     | 默认值 | 说明                            | 使用场景                       | 注意事项                       |
| ----------------- | -------- | ------ | ------------------------------- | ------------------------------ | ------------------------------ |
| isCover           | boolean  | true   | 是否覆盖上传                    | 控制是否覆盖已上传的文件       | 为true时，multiple不能设置true |
| limitFile         | array    | []     | 文件格式限制                    | 限制上传文件的格式             | 例如 ['png', 'docx']           |
| limitFileMsg      | string   | -      | 文件格式限制提示                | 自定义文件格式错误提示信息     | -                              |
| limitSize         | number   | 2      | 文件大小限制                    | 限制上传文件的大小             | 以MB为单位                     |
| limitUnit         | string   | MB     | 文件大小限制单位                | 自定义文件大小限制的单位       | 支持 GB/MB/KB                  |
| limitSizeMsg      | string   | -      | 文件大小限制提示                | 自定义文件大小错误提示信息     | -                              |
| limitNumMsg       | string   | -      | 文件个数限制提示                | 自定义文件个数错误提示信息     | multiple为true时生效           |
| limitAllFail      | boolean  | false  | 是否限制所有文件上传失败        | 控制达到限制时是否阻止所有上传 | multiple为true时生效           |
| httpRequestFunc   | function | -      | 覆盖默认上传方法                | 自定义上传逻辑                 | 常用于手动上传，需要返回Promise |
| formRuleFunc      | function | -      | 表单规则方法                    | 传递表单验证规则               | 用于表单验证集成               |
| formValidateFunc  | function | -      | 表单验证回调方法                | 触发表单验证                   | 用于表单验证集成               |
| isToast           | boolean  | true   | 异常场景是否弹出toast提示       | 控制是否显示错误提示           | -                              |
| emptyFileMsg      | string   | -      | 上传空文件提示信息              | 自定义空文件错误提示信息       | -                              |
| profile           | boolean  | false  | 用户头像模式                    | 启用头像上传模式               | 启用后会自动处理头像预览和替换 |
| defProfile        | string   | -      | 默认展示的头像图片              | 设置默认头像                   | profile为true时生效            |
| hideCoverBtn      | boolean  | false  | 覆盖上传后是否隐藏上传按钮      | 控制上传后是否隐藏按钮         | 适用图片模式                   |
| tipContent        | string   | -      | tip提示                         | 自定义提示信息                 | -                              |
| hideBtnReachLimit | boolean  | false  | 达到limit限制时是否隐藏上传按钮 | 控制达到限制时是否隐藏按钮     | 适用图片模式                   |
| bgImage           | string   | -      | 上传区域背景图片                | 自定义上传区域的背景           | 可用于美化上传界面             |
| beforeUpload      | function | -      | 上传前的钩子函数                | 上传前的验证和处理             | 返回false可阻止上传            |
| onRemove          | function | -      | 文件删除前的钩子函数            | 删除文件前的确认和处理         | 返回false可阻止删除            |

### Events

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

#### 事件详细说明

| 事件名             | 说明             | 参数        | 使用场景                         |
| ------------------ | ---------------- | ----------- | -------------------------------- |
| upload-error-func  | 上传错误回调     | msg         | 获取上传过程中的错误信息，用于错误处理 |
| on-change-func     | 文件更新上传回调 | file        | 文件更新时触发，增加blob返回数据，用于文件预览 |
| http-response-func | 覆盖上传方法回调 | data        | 手动上传时获取接口调用结果，用于处理上传结果 |
| on-handle-cropper  | 图片裁剪回调     | file, index | 图片裁剪时触发，用于处理裁剪后的图片 |
| success            | 上传成功回调     | response, file, fileList | 上传成功时触发，用于处理成功逻辑 |
| error              | 上传失败回调     | error, file, fileList | 上传失败时触发，用于处理失败逻辑 |
| remove             | 文件移除回调     | file, fileList | 文件被移除时触发，用于处理移除逻辑 |

### Slots

| 插槽名  | 说明               | 使用场景                 | 注意事项                       |
| ------- | ------------------ | ------------------------ | ------------------------------ |
| trigger | 触发上传的元素     | 自定义上传按钮           | 常用于替换默认的上传按钮样式   |
| default | 上传按钮旁边的元素 | 自定义上传按钮旁边的内容 | 可用于添加额外的说明文字       |
| tip     | 上传提示信息       | 自定义上传提示           | 可用于添加详细的上传规则说明   |
| file    | 文件列表项         | 自定义文件列表项的内容   | 可用于自定义文件的显示样式和操作 |

### 方法

| 方法名    | 说明               | 参数        | 使用场景                 |
| --------- | ------------------ | ----------- | ------------------------ |
| submit    | 手动触发上传       | -           | 用于手动上传模式         |
| clearFiles | 清空已选择的文件   | -           | 用于重置上传组件         |
| abort     | 取消上传           | file        | 用于取消正在上传的文件   |
| handleStart | 开始上传           | file        | 用于控制上传流程         |
| handleRemove | 移除文件           | file, fileList | 用于手动移除文件         |

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { ElForm, ElFormItem } from 'element-plus';
  import { tableColumn, tableMethodColumn } from '../constant';

  const action = ref('http://192.168.1.33:3001/upload');
  const item1 = ref({
    isCover: false,
  })
  const item2 = ref({
    limitFile: ['png', 'docx'],
    limitSize: 5
  })
  const item3 = ref({
    httpRequestFunc: function (formData, uploadProcessObj) {
      return axios.post('http://192.168.1.33:3001/upload', formData, uploadProcessObj);
    }
  })
  const item4 = ref({
    textPreview: ['pdf', 'xlsx'],
  })
  const item5 = ref({ profile: true })
const item6 = ref({
  hideBtnReachLimit: true,
  limitNumMsg: '最多只能上传3个文件'
});
const item7 = ref({
  bgImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=blue%20gradient%20background%20with%20upload%20icon&image_size=square'
});
const item8 = ref({
  hideBtnReachLimit: true,
  limitNumMsg: '最多只能上传5个文件'
});
const item9 = ref({
  httpRequestFunc: function (formData, uploadProcessObj) {
    return axios.post('http://192.168.1.33:3001/upload', formData, {
      ...uploadProcessObj,
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log('上传进度:', percentCompleted);
      }
    });
  }
});
const item10 = ref({});
const item11 = ref({
  limitFile: ['pdf', 'docx', 'xlsx'],
  limitFileMsg: '只能上传PDF、Word或Excel文件',
  limitSize: 5,
  limitSizeMsg: '文件大小不能超过5MB'
});
const item12 = ref({
  bgImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=light%20blue%20background%20with%20drag%20and%20drop%20area&image_size=landscape_16_9',
  tipContent: '点击或拖拽文件到此处上传'
});
const item13 = ref({
  bgImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=gradient%20purple%20background%20for%20image%20upload&image_size=square',
  profile: true,
  defProfile: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=default%20user%20avatar%20placeholder&image_size=square'
});
const item14 = ref({
  limitFile: ['jpg', 'png', 'gif'],
  limitFileMsg: '只能上传图片文件',
  limitSize: 2,
  limitSizeMsg: '文件大小不能超过2MB',
  limitNumMsg: '最多只能上传3个文件',
  httpRequestFunc: function (formData, uploadProcessObj) {
    return axios.post('http://192.168.1.33:3001/upload', formData, {
      ...uploadProcessObj,
      onUploadProgress: function (progressEvent) {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        console.log('上传进度:', percentCompleted);
      }
    });
  }
});
const item15 = ref({
  limitFile: ['jpg', 'png'],
  limitFileMsg: '只能上传图片文件'
});
const autoUpload = ref(true);
const uploadRef = ref(null);
const item16 = ref({
  limitFile: ['pdf', 'docx', 'xlsx'],
  limitFileMsg: '只能上传PDF、Word或Excel文件',
  limitSize: 5,
  limitSizeMsg: '文件大小不能超过5MB'
});

function handleSubmitUpload() {
  if (uploadRef.value) {
    uploadRef.value.submit();
    console.log('手动触发上传');
  }
}

function handleUploadModeChange() {
  console.log('上传模式切换为:', autoUpload.value ? '自动上传' : '手动上传');
}
function httpResponseFunc(res) {
  const {
    data: { code, data }
  } = res;
  console.log('httpResponseFunc', code, data);
}
function handleRemove(file, fileList) {
  return new Promise((resolve, reject) => {
    if (confirm('确定要删除这个文件吗？')) {
      resolve();
    } else {
      reject();
    }
  });
}
function handleCustomRemove(file) {
  const index = fileList.value.findIndex(item => item.uid === file.uid);
  if (index !== -1) {
    fileList.value.splice(index, 1);
  }
}
const fileList = ref([
  {name:'', url: ''}
])

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
      desc: '文件大小限制，默认2MB, 以MB为单位',
      type: 'number',
      value: '-'
    },
    {
      name: 'limitUnit',
      desc: '文件大小限制单位, 默认为MB，支持类型 GB/MB/KB',
      type: 'string',
      value: 'MB'
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
      name: 'limitAllFail',
      desc: '是否限制所有文件上传失败，multiple为true时生效',
      type: 'boolean',
      value: false
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
    // v1.0.34移除
    // {
    //   name: 'textPreview',
    //   desc: '点击上传文本文件是否支持预览，支持格式：docx、pdf、xlsx、pdfNative，pdfNative：为打开浏览器预览pdf文件',
    //   type: 'array',
    //   value: '-'
    // },
    {
      name: 'profile',
      desc: '用户头像模式',
      type: 'boolean',
      value: false
    },
    {
      name: 'defProfile',
      desc: '用户头像模式时，默认展示图片样式',
      type: 'string',
      value: '-'
    },
    {
      name: 'hideCoverBtn',
      desc: '覆盖模式，上传图片后是否隐藏上传按钮，适用图片模式',
      type: 'boolean',
      value: false
    },
    {
      name: 'tipContent',
      desc: 'tip文案',
      type: 'string',
      value: '-'
    },
    {
      name: 'hideBtnReachLimit',
      desc: '达到限制数量后是否隐藏上传按钮，适用图片模式',
      type: 'boolean',
      value: false
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

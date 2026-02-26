---
outline: deep
---

# Editor 富文本

::: warning 基于[wangeditor](https://www.wangeditor.com/)二次封装。<br />
自定义样式请参考：[官方自定义样式](https://www.wangeditor.com/v5/content.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F)
:::

## 目录

- [功能介绍](#功能介绍)
- [使用方式](#使用方式)
  - [基础用法](#基础用法)
  - [自定义配置](#自定义配置)
  - [内容获取](#内容获取)
- [API](#api)
  - [Attributes](#attributes)
  - [Exposes](#exposes)

## 功能介绍

LSEditor 组件是对 wangEditor 的二次封装，提供了以下功能：

- 支持富文本编辑，包括文本格式化、列表、链接等
- 支持图片上传，可配置上传服务器地址和参数
- 支持自定义编辑器配置和工具栏
- 提供简洁的 API 接口，方便获取和设置编辑器内容

## 使用方式

::: tip 需安装依赖 [@wangeditor/editor](https://www.npmjs.com/package/@wangeditor/editor) 和 [@wangeditor/editor-for-vue(5.1.12)](https://www.npmjs.com/package/@wangeditor/editor-for-vue)。
:::

### 基础用法

<br />
<ClientOnly>
<LSEditor ref="lsEditorRef" :valueHtml="valueHtml" :upload-server="uploadServer" :upload-token="uploadToken" :uploadImgSize="1" height="400px" @handle-created="handleCreated" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const uploadServer = ref('http://192.168.1.161:8080/fss/upload');
const uploadToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi57O757uf566h55CG5ZGYIiwiZW5jcnlwdGVkUHdkIjoiJDJhJDEwJGIzYXZkYk9OWkdreElPUWF6by9GNHVzUk1pNEZ4QjlwT3lzNWJNaW8yMmdvNVNyMDNaRElPIiwidXNlclR5cGUiOiJST0xFX0FETUlOIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlBFUl9VU0VSX01HVCJ9LHsiYXV0aG9yaXR5IjoiUEVSX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfRVFVSVBfTUdUIn0seyJhdXRob3JpdHkiOiJQRVJfT1ZFUl9WSUVXIn0seyJhdXRob3JpdHkiOiJQRVJfUkVNT1RFX0dVSURBTkNFIn0seyJhdXRob3JpdHkiOiJQRVJfT05MSU5FX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfSU5GT19WSUVXIn1dLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcyODg3MDU4MiwiZXhwIjoxNzMxNDYyNTgyfQ.oflBeBsWuCLifqP9u43eRducrJeQz7JR0IVjTITqTwM';
const valueHtml = ref(`<div>测试内容</div>`);

// 初始化完成
function handleCreated(editor) {
  const uploadImgConfig = editor.getConfig().MENU_CONF.uploadImage;
  // 图片上传异常处理
  uploadImgConfig.onError = file => {
    const isLt2M = file.size / 1024 / 1024 <= 1;
    if (!isLt2M) {
      ElMessage.error('上传图片大小不能超过 1M!');
    } else {
      ElMessage.error(`${file.name}上传失败，请刷新页面后重试~`);
    }
  };
}
```

```html
<LSEditor
  ref="lsEditorRef"
  :upload-server="uploadServer"
  :upload-token="uploadToken"
  height="400px"
  @handle-created="handleCreated"
/>
```

:::

### 自定义配置

以下例子为上传图片的自定义配置，更多自定义配置参考[wangeditor](https://www.wangeditor.com/)

::: details 点我查看代码

```js
// 如上传接口返回格式如下，则无需配置：
// {
//     "data": 图片 src ，必须
// }
// 否则需单独配置插入图片
const editorConfig = {
  MENU_CONF: {
    uploadImage: {
      // 自定义插入图片
      customInsert(res, insertFn) {
        // res 即服务端的返回结果 从 res 中找到 url alt href ，然后插入图片
        insertFn(url, alt, href);
      }
    }
  }
};
```

```html
<LSEditor ref="lsEditorRef" :editor-config="editorConfig" height="400px" />
```

:::

### 内容获取

判断是否为空可使用 [isEmpty](https://www.wangeditor.com/v5/API.html#isempty) 方法

<br />

<ClientOnly>
<LSButton type="primary" @click="getContent"> 内容获取 </LSButton>

<div>文本： {{ content }}</div>

<div>HTML: {{ contentHtml }}</div>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const lsEditorRef = ref();

const content = ref('');
const contentHtml = ref('');

function getContent() {
  const editor = lsEditorRef.value.editorRef;
  content.value = editor.getText();
  contentHtml.value = editor.getHtml();
}
```

```html
<LSButton type="primary" @click="getContent"> 内容获取 </LSButton>
<div>文本： {{ content }}</div>
<div>HTML: {{ contentHtml }}</div>
```

:::

### 自定义工具栏

<br />
<ClientOnly>
<LSEditor ref="lsEditorRef4" :toolbar-config="toolbarConfig" height="400px" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const lsEditorRef4 = ref();

// 自定义工具栏配置
const toolbarConfig = {
  toolbarKeys: [
    'bold',
    'italic',
    'underline',
    'through', // 加粗、斜体、下划线、删除线
    '|', // 分割线
    'fontSize',
    'fontFamily',
    'textColor',
    'bgColor', // 字体大小、字体、文字颜色、背景颜色
    '|',
    'bulletedList',
    'numberedList',
    'todo', // 无序列表、有序列表、待办
    '|',
    'indent',
    'outdent', // 缩进、出缩进
    '|',
    'justifyLeft',
    'justifyCenter',
    'justifyRight',
    'justifyJustify', // 左对齐、居中对齐、右对齐、两端对齐
    '|',
    'insertLink',
    'insertImage', // 插入链接、插入图片
    '|',
    'code',
    'codeBlock', // 行内代码、代码块
    '|',
    'undo',
    'redo' // 撤销、重做
  ]
};
```

```html
<LSEditor ref="lsEditorRef4" :toolbar-config="toolbarConfig" height="400px" />
```

:::

### 只读模式

<br />
<ClientOnly>
<LSEditor ref="lsEditorRef5" :value-html="readOnlyContent" mode="simple" height="400px" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const lsEditorRef5 = ref();

const readOnlyContent = ref(`
<div>
  <h1>只读模式示例</h1>
  <p>这是一段只读的富文本内容，用户无法编辑。</p>
  <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
  <p><strong>加粗文本</strong> 和 <em>斜体文本</em> 都能正常显示。</p>
</div>
`);
```

```html
<LSEditor ref="lsEditorRef5" :value-html="readOnlyContent" mode="simple" height="400px" />
```

:::

### 事件监听

<br />
<ClientOnly>
<LSEditor ref="lsEditorRef6" @handle-change="handleChange" height="400px" />

<div>内容变更次数： {{ changeCount }}</div>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const lsEditorRef6 = ref();
const changeCount = ref(0);

// 监听内容变更
function handleChange(editor) {
  changeCount.value++;
  console.log('内容变更:', editor.getHtml());
}
```

```html
<LSEditor ref="lsEditorRef6" @handle-change="handleChange" height="400px" />
<div>内容变更次数： {{ changeCount }}</div>
```

:::

## API

### Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableExposesColumn } from '../constant';
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

const lsEditorRef = ref();
const uploadServer = ref('http://192.168.1.161:8080/fss/upload');
const uploadToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi57O757uf566h55CG5ZGYIiwiZW5jcnlwdGVkUHdkIjoiJDJhJDEwJGIzYXZkYk9OWkdreElPUWF6by9GNHVzUk1pNEZ4QjlwT3lzNWJNaW8yMmdvNVNyMDNaRElPIiwidXNlclR5cGUiOiJST0xFX0FETUlOIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlBFUl9VU0VSX01HVCJ9LHsiYXV0aG9yaXR5IjoiUEVSX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfRVFVSVBfTUdUIn0seyJhdXRob3JpdHkiOiJQRVJfT1ZFUl9WSUVXIn0seyJhdXRob3JpdHkiOiJQRVJfUkVNT1RFX0dVSURBTkNFIn0seyJhdXRob3JpdHkiOiJQRVJfT05MSU5FX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfSU5GT19WSUVXIn1dLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcyODg3MDU4MiwiZXhwIjoxNzMxNDYyNTgyfQ.oflBeBsWuCLifqP9u43eRducrJeQz7JR0IVjTITqTwM';

const valueHtml = ref(`<div>测试内容</div>`)
const content = ref('');
const contentHtml = ref('');

// 自定义工具栏配置
const toolbarConfig = {
  toolbarKeys: [
    'bold', 'italic', 'underline', 'through', // 加粗、斜体、下划线、删除线
    '|', // 分割线
    'fontSize', 'fontFamily', 'textColor', 'bgColor', // 字体大小、字体、文字颜色、背景颜色
    '|',
    'bulletedList', 'numberedList', 'todo', // 无序列表、有序列表、待办
    '|',
    'indent', 'outdent', // 缩进、出缩进
    '|',
    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyJustify', // 左对齐、居中对齐、右对齐、两端对齐
    '|',
    'insertLink', 'insertImage', // 插入链接、插入图片
    '|',
    'code', 'codeBlock', // 行内代码、代码块
    '|',
    'undo', 'redo' // 撤销、重做
  ]
};

// 只读模式内容
const readOnlyContent = ref(`
<div>
  <h1>只读模式示例</h1>
  <p>这是一段只读的富文本内容，用户无法编辑。</p>
  <ul>
    <li>项目 1</li>
    <li>项目 2</li>
    <li>项目 3</li>
  </ul>
  <p><strong>加粗文本</strong> 和 <em>斜体文本</em> 都能正常显示。</p>
</div>
`);

// 编辑器引用
const lsEditorRef4 = ref();
const lsEditorRef5 = ref();
const lsEditorRef6 = ref();

// 事件监听
const changeCount = ref(0);

// 如上传接口返回格式如下，则无需配置：
// {
//     "data": 图片 src ，必须
// }
// 否则需单独配置插入图片
const editorConfig = {
  MENU_CONF: {
    uploadImage: {
      // 自定义插入图片
      customInsert(res, insertFn) {
        // res 即服务端的返回结果 从 res 中找到 url alt href ，然后插入图片
      }
    }
  }
}

function getContent() {
  const editor = lsEditorRef.value.editorRef;
  content.value = editor.getText();
  contentHtml.value = editor.getHtml()
}

function handleCreated(editor) {
  const uploadImgConfig = editor.getConfig().MENU_CONF.uploadImage;
  uploadImgConfig.onError = (file) => {
    const isLt2M = file.size / 1024 / 1024 <= 1;
    if (!isLt2M) {
      ElMessage.error('上传图片大小不能超过 1M!');
    } else {
      ElMessage.error(`${file.name}上传失败，请刷新页面后重试~`);
    }
  };
}

// 监听内容变更
function handleChange(editor) {
  changeCount.value++;
  console.log('内容变更:', editor.getHtml());
}

const tableData = ref([
  {
    name: 'valueHtml',
    desc: '富文本内容，用于回显',
    type: 'string',
    value: '-'
  },
  {
    name: 'height',
    desc: '富文本编辑区域高度',
    type: 'string',
    value: '300px'
  },
  {
    name: 'mode',
    desc: '富文本展示模式',
    type: 'string',
    value: 'default'
  },
  {
    name: 'toolbarConfig',
    desc: '富文本工具栏配置，同wangeditor一致',
    type: 'json',
    value: '{}'
  },
  {
    name: 'editorConfig',
    desc: '富文本编辑器配置，同wangeditor一致',
    type: 'json',
    value: '{}'
  },
  {
    name: 'uploadServer',
    desc: '上传图片服务器地址',
    type: 'string',
    value: '-'
  },
  {
    name: 'uploadToken',
    desc: '上传图片所需token，如接口不需要则不传',
    type: 'string',
    value: '-'
  },
  {
    name: 'uploadFieldName',
    desc: '上传图片所需参数名',
    type: 'string',
    value: 'file'
  },
  {
    name: 'uploadHeaders',
    desc: '图片上传请求头参数',
    type: 'json',
    value: 'null'
  },
  {
    name: 'uploadImgSize',
    desc: '图片上传大小限制',
    type: 'number',
    value: '2'
  },
  {
    name: 'uploadImgSizeUnit',
    desc: '图片上传大小限制单位，GB/MB/KB',
    type: 'string',
    value: 'MB'
  },
  {
    name: 'containerDom',
    desc: '可视区域dom，默认使用window',
    type: 'string',
    value: 'null'
  }
])

const tableData2 = ref([
  {
    name: 'editorRef',
    desc: '富文本实例对象',
    type: 'ref',
    value: '-'
  }
])
</script>

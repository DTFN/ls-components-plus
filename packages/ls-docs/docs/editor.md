---
outline: deep
---

# Editor 富文本

::: warning 基于[wangeditor](https://www.wangeditor.com/)二次封装。<br /
自定义样式请参考：[官方自定义样式](https://www.wangeditor.com/v5/content.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F)
:::

## 使用方式

::: tip 需安装依赖 [@wangeditor/editor](https://www.npmjs.com/package/@wangeditor/editor) 和 [@wangeditor/editor-for-vue(5.1.12)](https://www.npmjs.com/package/@wangeditor/editor-for-vue)。
:::

### 1. 基础用法

<br />
<ClientOnly>
<LSEditor ref="lsEditorRef" :valueHtml="valueHtml" :upload-server="uploadServer" :upload-token="uploadToken" height="400px" />
</ClientOnly>

```js
import { ref } from 'vue';
const uploadServer = ref('http://192.168.1.161:8080/fss/upload');
const uploadToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi57O757uf566h55CG5ZGYIiwiZW5jcnlwdGVkUHdkIjoiJDJhJDEwJGIzYXZkYk9OWkdreElPUWF6by9GNHVzUk1pNEZ4QjlwT3lzNWJNaW8yMmdvNVNyMDNaRElPIiwidXNlclR5cGUiOiJST0xFX0FETUlOIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlBFUl9VU0VSX01HVCJ9LHsiYXV0aG9yaXR5IjoiUEVSX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfRVFVSVBfTUdUIn0seyJhdXRob3JpdHkiOiJQRVJfT1ZFUl9WSUVXIn0seyJhdXRob3JpdHkiOiJQRVJfUkVNT1RFX0dVSURBTkNFIn0seyJhdXRob3JpdHkiOiJQRVJfT05MSU5FX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfSU5GT19WSUVXIn1dLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcyODg3MDU4MiwiZXhwIjoxNzMxNDYyNTgyfQ.oflBeBsWuCLifqP9u43eRducrJeQz7JR0IVjTITqTwM';
const valueHtml = ref(`<div>测试内容</div>`);
```

```html
<LSEditor ref="lsEditorRef" :upload-server="uploadServer" :upload-token="uploadToken" height="400px" />
```

### 2. 自定义配置，以下例子为上传图片，更多自定义配置参考[wangeditor](https://www.wangeditor.com/)

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

### 3. 内容获取， 判断是否为空 [isEmpty](https://www.wangeditor.com/v5/API.html#isempty) 方法

<br />

<LSButton type="primary" @click="getContent"> 内容获取 </LSButton>

<div>文本： {{ content }}</div>

<div>HTML: {{ contentHtml }}</div>

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

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableExposesColumn } from '../constant';
import { ref } from 'vue';
const lsEditorRef = ref();
const uploadServer = ref('http://192.168.1.161:8080/fss/upload');
const uploadToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoi57O757uf566h55CG5ZGYIiwiZW5jcnlwdGVkUHdkIjoiJDJhJDEwJGIzYXZkYk9OWkdreElPUWF6by9GNHVzUk1pNEZ4QjlwT3lzNWJNaW8yMmdvNVNyMDNaRElPIiwidXNlclR5cGUiOiJST0xFX0FETUlOIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlBFUl9VU0VSX01HVCJ9LHsiYXV0aG9yaXR5IjoiUEVSX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfRVFVSVBfTUdUIn0seyJhdXRob3JpdHkiOiJQRVJfT1ZFUl9WSUVXIn0seyJhdXRob3JpdHkiOiJQRVJfUkVNT1RFX0dVSURBTkNFIn0seyJhdXRob3JpdHkiOiJQRVJfT05MSU5FX0xNIn0seyJhdXRob3JpdHkiOiJQRVJfSU5GT19WSUVXIn1dLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcyODg3MDU4MiwiZXhwIjoxNzMxNDYyNTgyfQ.oflBeBsWuCLifqP9u43eRducrJeQz7JR0IVjTITqTwM';

const valueHtml = ref(`<div>测试内容</div>`)
const content = ref('');
const contentHtml = ref('');

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
}

function getContent() {
  const editor = lsEditorRef.value.editorRef;
  content.value = editor.getText();
  contentHtml.value = editor.getHtml()
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

---
outline: deep
---

# Editor 富文本

::: warning 基于[wangeditor](https://www.wangeditor.com/)二次封装。
:::

## 使用方式

### 1. 基础用法

<br />

<LSEditor ref="lsEditorRef" :upload-server="uploadServer" :editor-config="editorConfig" height="300px" />

```js
import { ref } from 'vue';
const uploadServer = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
// 如上传接口返回格式如下，则无需配置：
// {
//     "errno": 0, // 注意：值是数字，不能是字符串
//     "data": {
//         "url": "xxx", // 图片 src ，必须
//         "alt": "yyy", // 图片描述文字，非必须
//         "href": "zzz" // 图片的链接，非必须
//     }
// }
// 否则需单独配置插入图片
const editorConfig = {
  MENU_CONF: {
    uploadImage: {
      // 自定义插入图片
      customInsert(res, insertFn) {
        // TS 语法
        // customInsert(res, insertFn) {                  // JS 语法
        // res 即服务端的返回结果

        // 从 res 中找到 url alt href ，然后插入图片
        insertFn(url, alt, href);
      }
    }
  }
};
```

```html
<LSEditor ref="lsEditorRef" :upload-server="uploadServer" :editor-config="editorConfig" height="300px" />
```

### 2. 内容获取

<br />

<LSButton type="primary" @click="getContent"> 内容获取 </LSButton>

<div>文本： {{ content }}</div>

<div>HTML: {{ contentHtml }}</div>

```js
import { ref } from 'vue';
const lsEditorRef = ref();
const uploadServer = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
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

<script setup>
import { ref } from 'vue';
const lsEditorRef = ref();
const uploadServer = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
const content = ref('');
const contentHtml = ref('');
// 如上传接口返回格式如下，则无需配置： 
// {
//     "errno": 0, // 注意：值是数字，不能是字符串
//     "data": {
//         "url": "xxx", // 图片 src ，必须
//         "alt": "yyy", // 图片描述文字，非必须
//         "href": "zzz" // 图片的链接，非必须
//     }
// }
// 否则需单独配置插入图片
const editorConfig = {
  MENU_CONF: {
    uploadImage: {
      // 自定义插入图片
      customInsert(res, insertFn) {  // TS 语法
      // customInsert(res, insertFn) {                  // JS 语法
          // res 即服务端的返回结果

          // 从 res 中找到 url alt href ，然后插入图片
          insertFn(url, alt, href)
      },
    }
  }
}

function getContent() {
  const editor = lsEditorRef.value.editorRef;
  content.value = editor.getText();
  contentHtml.value = editor.getHtml()
}
</script>

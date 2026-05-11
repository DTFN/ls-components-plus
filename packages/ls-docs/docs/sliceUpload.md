---
outline: deep
---

# SliceUpload 分片上传

::: tip
`LSSliceUpload` 基于 `LSUpload` 封装，适合大文件上传场景。组件负责切片、并发上传、失败重试和进度展示，文件选择与校验能力继续沿用 `LSUpload`。
:::

## 基础演示

<ClientOnly>
  <LSSliceUpload
    ref="sliceUploadRef"
    :auto-upload="false"
    :chunk-size="chunkSize"
    :init-request-num="initRequestNum"
    :max-error-num="maxErrorNum"
    :chunk-upload-request="chunkUpload"
    :merge-request="mergeUpload"
    :item="{ limitSize: 12, limitFile: ['png', 'jpg', 'pdf', 'txt'] }"
    @on-upload-success="onUploadSuccess"
    @on-upload-error="onUploadError"
    @on-change-func="onChangeFunc"
  />
  <LSButton style="margin-top: 8px;" @click="resetSliceUpload">
    重置分片上传
  </LSButton>
</ClientOnly>

## 使用方式

```vue
<script setup>
import axios from 'axios'
import { ref } from 'vue'

const sliceUploadRef = ref()
const chunkSize = ref(2 * 1024 * 1024)
const initRequestNum = ref(3)
const maxErrorNum = ref(3)

function chunkUpload(params, config) {
  return axios.post('/api/upload/chunk', params.formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    ...config
  })
}

function mergeUpload(params) {
  return axios.post('/api/upload/merge', params)
}

function onUploadSuccess(data) {
  console.log('上传成功', data)
}

function onUploadError(data) {
  console.log('上传失败', data)
}

function resetSliceUpload() {
  sliceUploadRef.value?.reset()
}
</script>

<template>
  <LSSliceUpload
    ref="sliceUploadRef"
    :auto-upload="false"
    :chunk-size="chunkSize"
    :init-request-num="initRequestNum"
    :max-error-num="maxErrorNum"
    :chunk-upload-request="chunkUpload"
    :merge-request="mergeUpload"
    :item="{ limitSize: 50, limitFile: ['png', 'jpg', 'pdf', 'txt'] }"
    @on-upload-success="onUploadSuccess"
    @on-upload-error="onUploadError"
  />
</template>
```

## 请求参数

### chunkUploadRequest

`chunkUploadRequest` 会在每个分片上传时调用，函数签名为：

```ts
function chunkUploadRequest(params, config): Promise<any>
```

`params` 默认包含以下字段：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| formData | FormData | 当前分片上传表单，已包含 `file`、`chunk`、`chunkTotal`、`fileHash`、`fileName`、`fileSize` |
| chunk | number | 当前分片序号，从 1 开始 |
| chunkTotal | number | 分片总数 |
| fileHash | string | 文件标识，默认由 `file.name`、`file.size`、`file.lastModified` 生成 |
| fileName | string | 原始文件名 |
| fileSize | number | 原始文件大小，单位为 byte |

如果传入 `chunkUploadRequestParams`，组件会把自定义参数与上述字段合并后传给 `chunkUploadRequest`。

### mergeRequest

全部分片上传成功后，如果传入了 `mergeRequest`，组件会调用它通知服务端合并文件：

```ts
function mergeRequest(params): Promise<any>
```

`params` 默认包含 `fileHash`、`fileName`、`chunkTotal`，并会合并 `mergeRequestParams`。

## API

### Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 透传属性

`LSSliceUpload` 内部使用 `LSUpload` 完成文件选择，除分片上传专属属性外，`LSUpload` 支持的 `item`、`limit`、`multiple`、`drag`、`list-type`、`auto-upload`、`file-list` 等属性都可以继续传入。

### Events

<ApiIntro :tableColumn="tableMethodColumn" :tableData="eventData" />

### Slots

| 插槽名 | 说明 |
| --- | --- |
| trigger | 自定义上传触发元素，透传给内部 `LSUpload` |
| default | 上传触发区域旁的默认内容，透传给内部 `LSUpload` |
| tip | 上传提示内容，透传给内部 `LSUpload` |
| file | 自定义文件列表项，参数为 `{ file, index }` |

### Exposes

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| reset | function | 重置分片上传状态、进度、失败记录和当前文件 |
| uploadRef | ComponentRef | 内部 `LSUpload` 实例，可继续访问 `uploadRef.uploadRef` 调用 `el-upload` 原生方法 |

## 上传流程

1. 选择文件后，内部 `LSUpload` 触发自定义 `http-request`。
2. 组件按 `chunkSize` 对文件做 `Blob.slice` 分片。
3. 根据 `initRequestNum` 发起并发分片请求。
4. 每个分片成功后更新进度；失败分片会重新进入队列，直到超过 `maxErrorNum`。
5. 全部分片上传成功后，调用 `mergeRequest`；未传 `mergeRequest` 时直接返回分片结果。
6. 上传成功触发 `on-upload-success`，失败触发 `on-upload-error`。

## 注意事项

- `chunkUploadRequest` 是必填能力，生产环境需要传入真实接口请求函数。
- `action` 主要透传给内部 `LSUpload`，分片请求实际由 `chunkUploadRequest` 接管。
- 默认分片大小为 2MB，可根据服务端限制和网络情况调整 `chunkSize`。
- `chunkUploadRequestConfig` 未传入时，组件会默认注入 `AbortController.signal`，达到失败上限且 `cancelUploadInLimit` 为 `true` 时会取消剩余请求。
- `fileHash` 不是加密哈希，只是前端生成的文件标识；如需秒传、断点续传或强一致校验，建议由业务侧补充真实 hash。

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { tableColumn, tableMethodColumn } from '../constant';

const sliceUploadRef = ref();
const chunkSize = ref(2 * 1024 * 1024);
const initRequestNum = ref(3);
const maxErrorNum = ref(3);

function chunkUpload(params, config) {
  return axios.post('http://192.168.1.33:8080/api/v1/upload/chunk', params.formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    ...config,
  });
}

function mergeUpload(params) {
  return axios.post('http://192.168.1.33:8080/api/v1/upload/merge', params);
}

function resetSliceUpload() {
  sliceUploadRef.value?.reset();
}

function onUploadSuccess(data) {
  console.log('onUploadSuccess', data);
}

function onUploadError(data) {
  console.log('onUploadError', data);
}

function onChangeFunc(file) {
  console.log('onChangeFunc', file);
}

const tableData = ref([
  {
    name: 'action',
    desc: '上传地址，透传给内部 LSUpload；分片上传中实际请求由 chunkUploadRequest 接管',
    type: 'string',
    value: '-'
  },
  {
    name: 'chunkSize',
    desc: '单个分片大小，单位为 byte',
    type: 'number',
    value: '2 * 1024 * 1024'
  },
  {
    name: 'chunkUploadRequest',
    desc: '分片上传请求函数，调用时传入 (params, config)',
    type: 'function',
    value: '-'
  },
  {
    name: 'chunkUploadRequestParams',
    desc: '分片上传自定义参数，会与当前分片信息合并',
    type: 'object',
    value: 'null'
  },
  {
    name: 'chunkUploadRequestConfig',
    desc: '分片上传请求配置；未传时默认注入 { signal }',
    type: 'object',
    value: 'null'
  },
  {
    name: 'mergeRequest',
    desc: '所有分片上传成功后的合并请求函数',
    type: 'function',
    value: 'null'
  },
  {
    name: 'mergeRequestParams',
    desc: '合并请求自定义参数，会与 fileHash、fileName、chunkTotal 合并',
    type: 'object',
    value: 'null'
  },
  {
    name: 'initRequestNum',
    desc: '初始化并发上传的分片数量',
    type: 'number',
    value: '3'
  },
  {
    name: 'maxErrorNum',
    desc: '最大异常请求次数，达到后进入失败状态',
    type: 'number',
    value: '3'
  },
  {
    name: 'cancelUploadInLimit',
    desc: '达到最大异常请求次数后是否中止剩余上传请求',
    type: 'boolean',
    value: 'true'
  }
]);

const eventData = ref([
  {
    name: 'on-upload-success',
    desc: '所有分片上传并合并成功后触发',
    type: 'function',
    value: 'data'
  },
  {
    name: 'on-upload-error',
    desc: '上传失败时触发，返回失败分片、文件标识或合并失败信息',
    type: 'function',
    value: 'data'
  },
  {
    name: 'on-change-func',
    desc: '内部 LSUpload 文件变更事件，透传原 LSUpload 行为',
    type: 'function',
    value: 'file'
  }
]);
</script>

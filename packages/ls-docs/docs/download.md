---
outline: deep
---

# Download 下载

::: warning 支持分片下载，进度条样式使用了el-progress组件。
:::

## 使用方式

<LSDownloadFile
  ref="downloadFileRef"
  :record-id="3"
  :chunk-total="chunkTotal"
  :init-requst-num="initRequstNum"
  :chunk-data-request="chunkDownload"
  :max-error-num="maxErrorNum"
  @on-download-success="onDownloadSuccess"
  @on-download-error="onDownloadError"
/>
<br />
<LSButton type="primary" @click="downloadFunc">下载</LSButton>

```js
import { ref } from 'vue';

const downloadFileRef = ref();
const chunkTotal = ref(3);
const initRequstNum = ref(2);
const maxErrorNum = ref(2);

// 分片下载接口
function chunkDownload() {
}

function downloadFunc() {
  downloadFileRef.value.start();
}

function onDownloadSuccess(data) {
  console.log(data);
}
function onDownloadError(data) {
  console.log(data);
}
```
```html
<LSDownloadFile
  ref="downloadFileRef"
  :record-id="3"
  :chunk-total="chunkTotal"
  :init-requst-num="initRequstNum"
  :chunk-data-request="chunkDownload"
  :max-error-num="maxErrorNum"
  @on-download-success="onDownloadSuccess"
  @on-download-error="onDownloadError"
/>
<br />
<LSButton type="primary" @click="downloadFunc">下载</LSButton>
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods，通过emit抛出的可使用方法

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

### 3. Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData3" />

<script setup>
import { tableColumn, tableMethodColumn, tableExposesColumn } from '../constant';
import { ref } from 'vue';

const downloadFileRef = ref();
const chunkTotal = ref(3);
const initRequstNum = ref(2);
const maxErrorNum = ref(2);

function chunkDownload() {
  return new Promise((resolve) => {
    resolve({})
  })
}

function downloadFunc() {
  downloadFileRef.value.start();
}

function onDownloadSuccess(data) {
  console.log(data);
}
function onDownloadError(data) {
  console.log(data);
}

const tableData = ref([
  {
    name: 'recordId',
    desc: '当前文件所在记录的id',
    type: 'string / number',
    value: '-'
  },
  {
    name: 'chunkTotal',
    desc: '分片总数，默认为1',
    type: 'number',
    value: '1'
  },
  {
    name: 'chunkDataRequest',
    desc: '分片数据请求函数',
    type: 'Function',
    value: '-'
  },
  {
    name: 'chunkDataRequestParams',
    desc: '分片数据请求函数参数',
    type: 'object',
    value: '-'
  },
  {
    name: 'initRequstNum',
    desc: '初始化请求分片数',
    type: 'number',
    value: '10'
  },
  {
    name: 'maxErrorNum',
    desc: '最大错误请求次数',
    type: 'number',
    value: '6'
  },
  {
    name: 'cancelUploadInLimit',
    desc: '请求异常时是否取消上传',
    type: 'boolean',
    value: 'true'
  }
])

const tableData2 = ref([
  {
    name: 'onDownloadSuccess',
    desc: '请求成功回调',
    type: 'function',
    value: 'data'
  },
  {
    name:'onDownloadError',
    desc: '请求失败回调',
    type: 'function',
    value: 'data'
  }
])

const tableData3 = ref([
  {
    name: 'start',
    desc: '开始下载',
    type: 'function',
    value: '-'
  }
])
</script>

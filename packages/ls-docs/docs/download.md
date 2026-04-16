---
outline: deep
---

# Download 下载

::: warning 支持分片下载，进度条样式使用了el-progress组件。 <br />
请在 axios 配置中配置 signal，以支持中断接口请求功能。
:::

## 使用方式

### 1. 基本分片下载

<ClientOnly>
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
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue'

const downloadFileRef = ref()
const chunkTotal = ref(3)
const initRequstNum = ref(2)
const maxErrorNum = ref(2)

// 分片下载接口
function chunkDownload(params, config) {
  return new Promise((resolve) => {
    // 模拟分片下载
    setTimeout(() => {
      resolve({ data: `chunk ${params.chunk} data` })
    }, 1000)
  })
}

function downloadFunc() {
  downloadFileRef.value.start()
}

function onDownloadSuccess(data) {
  console.log('下载成功:', data)
  // 处理下载完成的数据
}

function onDownloadError(data) {
  console.log('下载失败:', data)
  // 处理下载错误
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

:::

### 2. 带自定义请求参数的下载

<ClientOnly>
<LSDownloadFile
  ref="downloadFileRef2"
  :record-id="5"
  :chunk-total="chunkTotal2"
  :init-requst-num="initRequstNum2"
  :chunk-data-request="chunkDownloadWithParams"
  :chunk-data-request-params="requestParams"
  :max-error-num="maxErrorNum2"
  @on-download-success="onDownloadSuccess2"
  @on-download-error="onDownloadError2"
/>
<br />
<LSButton type="primary" @click="downloadFunc2">带参数下载</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
const downloadFileRef2 = ref()
const chunkTotal2 = ref(5)
const initRequstNum2 = ref(3)
const maxErrorNum2 = ref(3)
const requestParams = { token: 'your-token', userId: 123 }

// 带自定义参数的分片下载
function chunkDownloadWithParams(params, config) {
  console.log('请求参数:', params)
  console.log('请求配置:', config)

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `chunk ${params.chunk} data`, params })
    }, 800)
  })
}

function downloadFunc2() {
  downloadFileRef2.value.start()
}

function onDownloadSuccess2(data) {
  console.log('带参数下载成功:', data)
}

function onDownloadError2(data) {
  console.log('带参数下载失败:', data)
}
```

```html
<LSDownloadFile
  ref="downloadFileRef2"
  :record-id="5"
  :chunk-total="chunkTotal2"
  :init-requst-num="initRequstNum2"
  :chunk-data-request="chunkDownloadWithParams"
  :chunk-data-request-params="requestParams"
  :max-error-num="maxErrorNum2"
  @on-download-success="onDownloadSuccess2"
  @on-download-error="onDownloadError2"
/>
<br />
<LSButton type="primary" @click="downloadFunc2">带参数下载</LSButton>
```

:::

### 3. 带错误处理的下载

<ClientOnly>
<LSDownloadFile
  ref="downloadFileRef3"
  :record-id="7"
  :chunk-total="chunkTotal3"
  :init-requst-num="initRequstNum3"
  :chunk-data-request="chunkDownloadWithError"
  :max-error-num="maxErrorNum3"
  @on-download-success="onDownloadSuccess3"
  @on-download-error="onDownloadError3"
/>
<br />
<LSButton type="primary" @click="downloadFunc3">带错误处理下载</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
const downloadFileRef3 = ref()
const chunkTotal3 = ref(4)
const initRequstNum3 = ref(2)
const maxErrorNum3 = ref(2)

// 带错误处理的分片下载
function chunkDownloadWithError(params, config) {
  return new Promise((resolve, reject) => {
    // 模拟偶尔失败的情况
    if (params.chunk === 2) {
      setTimeout(() => {
        reject(new Error(`Chunk ${params.chunk} failed`))
      }, 500)
    }
    else {
      setTimeout(() => {
        resolve({ data: `chunk ${params.chunk} data` })
      }, 800)
    }
  })
}

function downloadFunc3() {
  downloadFileRef3.value.start()
}

function onDownloadSuccess3(data) {
  console.log('带错误处理下载成功:', data)
}

function onDownloadError3(data) {
  console.log('带错误处理下载失败:', data)
  // 可以在这里实现重试逻辑
}
```

```html
<LSDownloadFile
  ref="downloadFileRef3"
  :record-id="7"
  :chunk-total="chunkTotal3"
  :init-requst-num="initRequstNum3"
  :chunk-data-request="chunkDownloadWithError"
  :max-error-num="maxErrorNum3"
  @on-download-success="onDownloadSuccess3"
  @on-download-error="onDownloadError3"
/>
<br />
<LSButton type="primary" @click="downloadFunc3">带错误处理下载</LSButton>
```

:::

### 4. 大文件分块下载

<ClientOnly>
<LSDownloadFile
  ref="downloadFileRef4"
  :record-id="10"
  :chunk-total="chunkTotal4"
  :init-requst-num="initRequstNum4"
  :chunk-data-request="chunkDownloadLargeFile"
  :max-error-num="maxErrorNum4"
  :cancel-upload-in-limit="true"
  @on-download-success="onDownloadSuccess4"
  @on-download-error="onDownloadError4"
/>
<br />
<LSButton type="primary" @click="downloadFunc4">大文件下载</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
const downloadFileRef4 = ref()
const chunkTotal4 = ref(10)
const initRequstNum4 = ref(5)
const maxErrorNum4 = ref(3)

// 大文件分片下载
function chunkDownloadLargeFile(params, config) {
  return new Promise((resolve) => {
    // 模拟大文件分片下载
    setTimeout(() => {
      resolve({
        multipartFile: `large-file-chunk-${params.chunk}`,
        length: 1024 * 1024 // 模拟1MB分片
      })
    }, 500)
  })
}

function downloadFunc4() {
  downloadFileRef4.value.start()
}

function onDownloadSuccess4(data) {
  console.log('大文件下载成功:', data.length, '个分片')
  // 这里可以实现分片合并逻辑
}

function onDownloadError4(data) {
  console.log('大文件下载失败:', data)
}
```

```html
<LSDownloadFile
  ref="downloadFileRef4"
  :record-id="10"
  :chunk-total="chunkTotal4"
  :init-requst-num="initRequstNum4"
  :chunk-data-request="chunkDownloadLargeFile"
  :max-error-num="maxErrorNum4"
  :cancel-upload-in-limit="true"
  @on-download-success="onDownloadSuccess4"
  @on-download-error="onDownloadError4"
/>
<br />
<LSButton type="primary" @click="downloadFunc4">大文件下载</LSButton>
```

:::

### 5. 带进度条样式定制的下载

<ClientOnly>
<LSDownloadFile
  ref="downloadFileRef5"
  :record-id="15"
  :chunk-total="chunkTotal5"
  :init-requst-num="initRequstNum5"
  :chunk-data-request="chunkDownloadStyled"
  :max-error-num="maxErrorNum5"
  :stroke-width="20"
  :striped="true"
  :striped-flow="true"
  status="success"
  @on-download-success="onDownloadSuccess5"
  @on-download-error="onDownloadError5"
/>
<br />
<LSButton type="primary" @click="downloadFunc5">样式定制下载</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
const downloadFileRef5 = ref()
const chunkTotal5 = ref(4)
const initRequstNum5 = ref(2)
const maxErrorNum5 = ref(2)

// 分片下载接口
function chunkDownloadStyled(params, config) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `chunk ${params.chunk} data` })
    }, 800)
  })
}

function downloadFunc5() {
  downloadFileRef5.value.start()
}

function onDownloadSuccess5(data) {
  console.log('样式定制下载成功:', data)
}

function onDownloadError5(data) {
  console.log('样式定制下载失败:', data)
}
```

```html
<LSDownloadFile
  ref="downloadFileRef5"
  :record-id="15"
  :chunk-total="chunkTotal5"
  :init-requst-num="initRequstNum5"
  :chunk-data-request="chunkDownloadStyled"
  :max-error-num="maxErrorNum5"
  :stroke-width="20"
  :striped="true"
  :striped-flow="true"
  status="success"
  @on-download-success="onDownloadSuccess5"
  @on-download-error="onDownloadError5"
/>
<br />
<LSButton type="primary" @click="downloadFunc5">样式定制下载</LSButton>
```

:::

## 分片下载工作原理

### 1. 基本流程

1. **初始化阶段**：通过 `start()` 方法启动下载流程，初始化分片队列
2. **分片请求阶段**：并发请求多个分片数据，支持配置初始并发数
3. **错误处理阶段**：自动重试失败的分片，支持配置最大错误次数
4. **完成阶段**：所有分片下载完成后，触发 `onDownloadSuccess` 事件
5. **异常阶段**：错误次数超过限制时，触发 `onDownloadError` 事件

### 2. 核心机制

- **并发控制**：通过 `initRequstNum` 控制初始并发请求数
- **错误重试**：自动重试失败的分片，直到达到 `maxErrorNum` 限制
- **请求中断**：支持通过 `signal` 中断正在进行的请求
- **进度计算**：根据成功下载的分片数自动计算下载进度

## 完整使用示例

### 实际项目中的完整下载流程

```vue
<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'

const downloadFileRef = ref()
const fileId = ref('file-123')
const chunkTotal = ref(5)
const userToken = ref('your-auth-token')
const isDownloading = ref(false)
const taskId = ref('')

// 初始化分片下载任务
async function initDownloadTask() {
  try {
    const response = await axios.get(`/api/download/init/${fileId.value}`, {
      headers: { Authorization: `Bearer ${userToken.value}` }
    })
    taskId.value = response.data.taskId
    chunkTotal.value = response.data.chunkTotal

    return true
  }
  catch (error) {
    console.error('初始化下载任务失败:', error)

    return false
  }
}

// 分片下载实现
function chunkDownload(params, config) {
  return axios.get(`/api/download/chunk/${fileId.value}/${params.chunk}`, {
    headers: { Authorization: `Bearer ${userToken.value}` },
    params: { taskId: taskId.value, ...params },
    responseType: 'blob',
    signal: config.signal
  })
}

// 完成下载任务
async function completeDownloadTask() {
  try {
    await axios.get(`/api/download/complete/${fileId.value}/${taskId.value}`, {
      headers: { Authorization: `Bearer ${userToken.value}` }
    })
  }
  catch (error) {
    console.error('完成下载任务失败:', error)
  }
}

// 开始下载
async function startDownload() {
  const initSuccess = await initDownloadTask()

  if (initSuccess) {
    isDownloading.value = true
    downloadFileRef.value.start()
  }
}

// 取消下载
function cancelDownload() {
  // 这里可以实现取消逻辑
  isDownloading.value = false
}

// 处理下载成功
async function handleDownloadSuccess(data) {
  console.log('下载成功:', data)
  await completeDownloadTask()

  // 处理下载的数据（例如合并分片、保存文件等）
  processDownloadedData(data)

  isDownloading.value = false
}

// 处理下载失败
function handleDownloadError(data) {
  console.error('下载失败:', data)
  isDownloading.value = false
  // 可以在这里显示错误提示
}

// 处理下载的数据
function processDownloadedData(data) {
  // 实现分片合并和文件保存逻辑
  console.log('处理下载的数据:', data.length, '个分片')
  // 例如：合并二进制数据、创建Blob对象、下载文件等
}
</script>

<template>
  <div>
    <LSDownloadFile
      ref="downloadFileRef"
      :record-id="fileId"
      :chunk-total="chunkTotal"
      :init-requst-num="3"
      :chunk-data-request="chunkDownload"
      :chunk-data-request-params="{ token: userToken }"
      :max-error-num="3"
      :cancel-upload-in-limit="true"
      @on-download-success="handleDownloadSuccess"
      @on-download-error="handleDownloadError"
    />
    <br />
    <LSButton type="primary" @click="startDownload">
      开始下载
    </LSButton>
    <LSButton :disabled="!isDownloading" @click="cancelDownload">
      取消下载
    </LSButton>
  </div>
</template>
```

## 常见问题及解决方案

### 1. 下载速度慢

**解决方案**：

- 增加 `initRequstNum` 值，提高并发请求数
- 优化服务器端分片处理逻辑
- 确保网络连接稳定

### 2. 下载失败频繁

**解决方案**：

- 增加 `maxErrorNum` 值，提高错误重试次数
- 检查网络连接稳定性
- 优化服务器端错误处理
- 考虑实现断点续传功能

### 3. 内存占用高

**解决方案**：

- 适当减少 `initRequstNum` 值，降低并发数
- 考虑实现分片缓存机制
- 对于超大文件，考虑使用流式处理

### 4. 进度条显示不准确

**解决方案**：

- 确保 `chunkTotal` 值设置正确
- 检查分片请求的成功回调是否正确触发
- 考虑在服务器端返回更精确的进度信息

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Events

<ApiIntro :tableColumn="eventTableColumn" :tableData="tableData2" />

### 3. Exposes

<ApiIntro :tableColumn="exposesTableColumn" :tableData="tableData3" />

## 最佳实践

### 1. 分片大小选择

- **小文件**（< 10MB）：使用较少的分片数（1-3个）
- **中等文件**（10MB - 100MB）：使用5-10个分片
- **大文件**（> 100MB）：使用10-20个分片
- **超大文件**（> 1GB）：考虑使用更多分片和流式处理

### 2. 并发数配置

- 根据服务器性能和网络状况调整 `initRequstNum`
- 一般建议值：3-5个并发请求
- 避免设置过高导致服务器压力过大

### 3. 错误处理策略

- 设置合理的 `maxErrorNum` 值（建议：3-5）
- 实现适当的重试机制
- 对于关键文件，考虑实现断点续传

### 4. 安全考虑

- 确保下载接口有适当的认证机制
- 对于敏感文件，考虑使用加密传输
- 实现下载频率限制，防止滥用

### 5. 用户体验优化

- 提供清晰的下载进度指示
- 实现下载状态反馈
- 支持下载暂停/取消功能
- 对于大文件，提供预估下载时间

<script setup>
import { tableColumn, tableMethodColumn, tableExposesColumn } from '../constant';
import { ref } from 'vue';

const downloadFileRef = ref();
const chunkTotal = ref(3);
const initRequstNum = ref(2);
const maxErrorNum = ref(2);

const downloadFileRef2 = ref();
const chunkTotal2 = ref(5);
const initRequstNum2 = ref(3);
const maxErrorNum2 = ref(3);
const requestParams = { token: 'your-token', userId: 123 };

const downloadFileRef3 = ref();
const chunkTotal3 = ref(4);
const initRequstNum3 = ref(2);
const maxErrorNum3 = ref(2);

const downloadFileRef4 = ref();
const chunkTotal4 = ref(10);
const initRequstNum4 = ref(5);
const maxErrorNum4 = ref(3);

const downloadFileRef5 = ref();
const chunkTotal5 = ref(4);
const initRequstNum5 = ref(2);
const maxErrorNum5 = ref(2);

function chunkDownload(params, config) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `chunk ${params.chunk} data` });
    }, 1000);
  });
}

function downloadFunc() {
  downloadFileRef.value.start();
}

function onDownloadSuccess(data) {
  console.log('下载成功:', data);
}

function onDownloadError(data) {
  console.log('下载失败:', data);
}

function chunkDownloadWithParams(params, config) {
  console.log('请求参数:', params);
  console.log('请求配置:', config);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `chunk ${params.chunk} data`, params });
    }, 800);
  });
}

function downloadFunc2() {
  downloadFileRef2.value.start();
}

function onDownloadSuccess2(data) {
  console.log('带参数下载成功:', data);
}

function onDownloadError2(data) {
  console.log('带参数下载失败:', data);
}

function chunkDownloadWithError(params, config) {
  return new Promise((resolve, reject) => {
    if (params.chunk === 2) {
      setTimeout(() => {
        reject(new Error(`Chunk ${params.chunk} failed`));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({ data: `chunk ${params.chunk} data` });
      }, 800);
    }
  });
}

function downloadFunc3() {
  downloadFileRef3.value.start();
}

function onDownloadSuccess3(data) {
  console.log('带错误处理下载成功:', data);
}

function onDownloadError3(data) {
  console.log('带错误处理下载失败:', data);
}

function chunkDownloadLargeFile(params, config) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        multipartFile: `large-file-chunk-${params.chunk}`,
        length: 1024 * 1024
      });
    }, 500);
  });
}

function downloadFunc4() {
  downloadFileRef4.value.start();
}

function onDownloadSuccess4(data) {
  console.log('大文件下载成功:', data.length, '个分片');
}

function onDownloadError4(data) {
  console.log('大文件下载失败:', data);
}

function chunkDownloadStyled(params, config) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: `chunk ${params.chunk} data` });
    }, 800);
  });
}

function downloadFunc5() {
  downloadFileRef5.value.start();
}

function onDownloadSuccess5(data) {
  console.log('样式定制下载成功:', data);
}

function onDownloadError5(data) {
  console.log('样式定制下载失败:', data);
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
    desc: '分片总数',
    type: 'number',
    value: '0'
  },
  {
    name: 'chunkDataRequest',
    desc: '分片数据请求函数，请求参数（params：接口所需参数，config：配置类参数，例如{signal}默认已添加signal）',
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
    name: 'chunkDataRequestConfig',
    desc: '分片数据请求函数配置',
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
    desc: '请求异常时是否取消下载',
    type: 'boolean',
    value: 'true'
  }
]);

const eventTableColumn = ref([
  {
    prop: 'name',
    label: '事件名'
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'params',
    label: '参数'
  }
]);

const tableData2 = ref([
  {
    name: 'onDownloadSuccess',
    desc: '请求成功回调',
    params: 'data: 下载的分片数据数组'
  },
  {
    name: 'onDownloadError',
    desc: '请求失败回调',
    params: 'data: 错误信息'
  }
]);

const exposesTableColumn = ref([
  {
    prop: 'name',
    label: '方法名'
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'params',
    label: '参数'
  }
]);

const tableData3 = ref([
  {
    name: 'start',
    desc: '开始下载',
    params: '-'
  }
]);
</script>

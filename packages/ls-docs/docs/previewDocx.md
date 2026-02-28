---
outline: deep
---

# PreviewDocx 文档预览

::: warning 基于docx-preview二次封装，用于预览.docx格式文档。
:::

## 使用方式

### 1. 基础使用

<br />
<ClientOnly>
<LSPreviewDocx v-model="previewVisible1" :source="source1" :on-close="() => { previewVisible1 = false; }" />
<LSButton @click="loadDocxFile">点击预览DOCX文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible1 = ref(false);
const source1 = ref(null);

function loadDocxFile() {
  // 模拟加载DOCX文件
  // 实际使用中，你需要通过FileReader或fetch获取ArrayBuffer格式的文件数据
  // 这里仅做示例，实际使用时需要替换为真实的文件加载逻辑
  previewVisible1.value = true;
}
```

```html
<LSPreviewDocx v-model="previewVisible1" :source="source1" :on-close="() => { previewVisible1 = false; }" />
<LSButton @click="loadDocxFile">点击预览DOCX文档</LSButton>
```

:::

### 2. 带水印的文档预览

<br />
<ClientOnly>
<LSPreviewDocx v-model="previewVisible2" :source="source1" :show-watermark="true" :watermark-option="watermarkOption" :on-close="() => { previewVisible2 = false; }" />
<LSButton @click="loadDocxFileWithWatermark">点击预览带水印DOCX文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible2 = ref(false);
const source1 = ref(null);
const watermarkOption = ref({
  content: '临港集团',
  fontSize: 16,
  color: 'rgba(0, 0, 0, 0.1)'
});

function loadDocxFileWithWatermark() {
  // 模拟加载DOCX文件
  previewVisible2.value = true;
}
```

```html
<LSPreviewDocx
  v-model="previewVisible2"
  :source="source1"
  :show-watermark="true"
  :watermark-option="watermarkOption"
  :on-close="() => { previewVisible2 = false; }"
/>
<LSButton @click="loadDocxFileWithWatermark">点击预览带水印DOCX文档</LSButton>
```

:::

### 3. 带下载功能的文档预览

<br />
<ClientOnly>
<LSPreviewDocx v-model="previewVisible3" :source="source1" has-download @on-download="handleDocxDownload" :on-close="() => { previewVisible3 = false; }" />
<LSButton @click="loadDocxFileWithDownload">点击预览带下载功能DOCX文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible3 = ref(false);
const source1 = ref(null);

function loadDocxFileWithDownload() {
  // 模拟加载DOCX文件
  previewVisible3.value = true;
}

function handleDocxDownload(data) {
  console.log('下载DOCX文档:', data);
  // 这里可以实现自定义的下载逻辑
}
```

```html
<LSPreviewDocx
  v-model="previewVisible3"
  :source="source1"
  has-download
  @on-download="handleDocxDownload"
  :on-close="() => { previewVisible3 = false; }"
/>
<LSButton @click="loadDocxFileWithDownload">点击预览带下载功能DOCX文档</LSButton>
```

:::

### 4. 自定义控制栏

<br />
<ClientOnly>
<LSPreviewDocx v-model="previewVisible4" :source="source1" :on-close="() => { previewVisible4 = false; }">
  <template #extra>
    <div class="custom-controls">
      <LSButton type="primary" size="small" @click="previewVisible4 = false">关闭预览</LSButton>
      <LSButton size="small" @click="handleDocxDownload">下载文档</LSButton>
    </div>
  </template>
</LSPreviewDocx>
<LSButton @click="loadDocxFileWithCustomControls">点击预览自定义控制栏DOCX文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible4 = ref(false);
const source1 = ref(null);

function loadDocxFileWithCustomControls() {
  // 模拟加载DOCX文件
  previewVisible4.value = true;
}

function handleDocxDownload(data) {
  console.log('下载DOCX文档:', data);
}
```

```html
<LSPreviewDocx v-model="previewVisible4" :source="source1" :on-close="() => { previewVisible4 = false; }">
  <template #extra>
    <div class="custom-controls">
      <LSButton type="primary" size="small" @click="previewVisible4 = false">关闭预览</LSButton>
      <LSButton size="small" @click="handleDocxDownload">下载文档</LSButton>
    </div>
  </template>
</LSPreviewDocx>
<LSButton @click="loadDocxFileWithCustomControls">点击预览自定义控制栏DOCX文档</LSButton>
```

```scss
.custom-controls {
  position: absolute;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  gap: 10px;
}
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Events

<ApiIntro :tableColumn="tableMethodColumn" :tableData="eventsTableData" />

### 3. Slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="slotTableData" />

<script setup>
import { ref } from 'vue';
import { tableColumn, tableMethodColumn, tableSlotColumn } from '../constant';

// 示例1
const previewVisible1 = ref(false);
const source1 = ref(null);

// 示例2
const previewVisible2 = ref(false);
const watermarkOption = ref({
  content: '临港集团',
  fontSize: 16,
  color: 'rgba(0, 0, 0, 0.1)'
});

// 示例3
const previewVisible3 = ref(false);

// 示例4
const previewVisible4 = ref(false);

// 加载本地DOCX文件
async function loadLocalDocxFile() {
  try {
    const response = await fetch('/files/测试.docx');
    if (!response.ok) {
      throw new Error('文件加载失败');
    }
    const arrayBuffer = await response.arrayBuffer();
    return arrayBuffer;
  } catch (error) {
    console.error('加载DOCX文件出错:', error);
    return null;
  }
}

async function loadDocxFile() {
  // 加载本地DOCX文件
  source1.value = await loadLocalDocxFile();
  if (source1.value) {
    previewVisible1.value = true;
  }
}

async function loadDocxFileWithWatermark() {
  // 加载本地DOCX文件
  source1.value = await loadLocalDocxFile();
  if (source1.value) {
    previewVisible2.value = true;
  }
}

async function loadDocxFileWithDownload() {
  // 加载本地DOCX文件
  source1.value = await loadLocalDocxFile();
  if (source1.value) {
    previewVisible3.value = true;
  }
}

async function loadDocxFileWithCustomControls() {
  // 加载本地DOCX文件
  source1.value = await loadLocalDocxFile();
  if (source1.value) {
    previewVisible4.value = true;
  }
}

function handleDocxDownload(data) {
 alert('下载DOCX文档:', data);
}

// 属性
const tableData = ref([
  {
    name: 'previewVisible/v-model:preview-visible',
    desc: '是否显示预览',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'source',
    desc: 'DOCX文件源，必须是ArrayBuffer格式',
    type: 'ArrayBuffer',
    value: '-'
  },
  {
    name: 'showWatermark',
    desc: '是否显示水印',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'watermarkOption',
    desc: '水印配置，具体配置参考el-watermark',
    type: 'object',
    value: '{}'
  },
  {
    name: 'hideOnClickModal',
    desc: '点击遮罩层是否关闭预览',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'hasDownload',
    desc: '是否显示下载按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'downloadLoading',
    desc: '下载中状态',
    type: 'boolean',
    value: 'false'
  }
]);

// 事件
const eventsTableData = ref([
  {
    name: 'loadComplete',
    desc: '文档加载完成事件',
    type: 'function',
    value: '-'
  },
  {
    name: 'loadError',
    desc: '文档加载失败事件',
    type: 'function',
    value: '-'
  },
  {
    name: 'onDownload',
    desc: '文档下载事件',
    type: 'function',
    value: 'downloadData'
  }
]);

// 插槽
const slotTableData = ref([
  {
    name: 'extra',
    desc: '自定义额外内容插槽',
  }
]);
</script>

<style scoped>
.custom-controls {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10000;
  display: flex;
  gap: 10px;
}

/* 优化预览界面显示效果 */
:deep(.ls-preview) {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  z-index: 9999 !important;
  width: 100% !important;
  height: 100% !important;
  overflow: auto !important;
  background-color: rgb(0 0 0 / 70%) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.ls-preview .ls-xlsx) {
  position: relative !important;
  height: 96% !important;
  width: 96% !important;
}

:deep(.ls-preview .ls-docx) {
  position: relative !important;
  height: 96% !important;
  width: 96% !important;
}

:deep(.ls-preview .ls-pdf) {
  position: relative !important;
  height: 96% !important;
  width: 96% !important;
}
</style>

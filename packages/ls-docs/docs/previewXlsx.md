---
outline: deep
---

# PreviewXlsx Excel预览

::: warning 基于LuckyExcel二次封装，用于预览.xlsx格式文档。

v1.0.34之后使用新的预览组件（LSPreviewXlsx)不在需要特殊配置且不需要传type参数。
<Br />
v1.0.34以前版本请参考以下使用方式
如果只需要图片预览，在配置文件添加
optimizeDeps: {
exclude: ['pdfjs-dist', 'luckyexcel']
}，build中添加external: ['pdfjs-dist', 'luckyexcel']，不需要哪个依赖排除哪个即可
:::

::: tip 需安装依赖 [luckyexcel](https://www.npmjs.com/package/luckyexcel)。
:::

## 功能介绍

LSPreviewXlsx 组件是基于 LuckyExcel 二次封装的 Excel 预览组件，提供了以下增强功能：

- 支持本地和在线 Excel 文件预览
- 支持多工作表浏览

### 使用前需要引入lucksheet依赖资源，目前支持两种引入方式

#### 1. 在index.html文件中引入资源

```html
<link
  rel="stylesheet"
  href="https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/css/pluginsCss.css"
/>
<link rel="stylesheet" href="https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/plugins.css" />
<link rel="stylesheet" href="https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/css/luckysheet.css" />
<link
  rel="stylesheet"
  href="https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/assets/iconfont/iconfont.css"
/>
<script src="https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/plugins/js/plugin.js" async></script>
<script src="https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet/luckysheet.umd.js" async></script>
```

#### 2. 将资源文件夹放在public文件夹下

::: warning [资源下载](https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet.zip)
下载完成后解压到public文件夹下

:::

## 使用方式

### 1. 基础使用

<br />
<ClientOnly>
<LSPreviewXlsx v-model="previewVisible1" :source="source1" :on-close="() => { previewVisible1 = false; }" />
<LSButton @click="loadXlsxFile">点击预览Excel文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible1 = ref(false);
const source1 = ref(null);

// 加载本地Excel文件
async function loadLocalXlsxFile() {
  try {
    const response = await axios.get(location.origin + '/files/222.xlsx', { responseType: 'arraybuffer' });
    const file = new File([new Blob([response.data], { type: 'text/plain' })], '222.xlsx', { type: 'text/plain' });
    return file;
  } catch (error) {
    console.error('加载Excel文件出错:', error);
    return null;
  }
}

async function loadXlsxFile() {
  // 加载本地Excel文件
  source1.value = await loadLocalXlsxFile();
  if (source1.value) {
    previewVisible1.value = true;
  }
}
```

```html
<LSPreviewXlsx v-model="previewVisible1" :source="source1" :on-close="() => { previewVisible1 = false; }" />
<LSButton @click="loadXlsxFile">点击预览Excel文档</LSButton>
```

:::

### 2. 带水印的Excel预览

<br />
<ClientOnly>
<LSPreviewXlsx v-model="previewVisible2" :source="source1" :show-watermark="true" :watermark-option="watermarkOption" :on-close="() => { previewVisible2 = false; }" />
<LSButton @click="loadXlsxFileWithWatermark">点击预览带水印Excel文档</LSButton>
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

async function loadXlsxFileWithWatermark() {
  // 加载本地Excel文件
  source1.value = await loadLocalXlsxFile();
  if (source1.value) {
    previewVisible2.value = true;
  }
}
```

```html
<LSPreviewXlsx
  v-model="previewVisible2"
  :source="source1"
  :show-watermark="true"
  :watermark-option="watermarkOption"
  :on-close="() => { previewVisible2 = false; }"
/>
<LSButton @click="loadXlsxFileWithWatermark">点击预览带水印Excel文档</LSButton>
```

:::

### 3. 带下载功能的Excel预览

<br />
<ClientOnly>
<LSPreviewXlsx v-model="previewVisible3" :source="source1" has-download @on-download="handleXlsxDownload" :on-close="() => { previewVisible3 = false; }" />
<LSButton @click="loadXlsxFileWithDownload">点击预览带下载功能Excel文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible3 = ref(false);
const source1 = ref(null);

async function loadXlsxFileWithDownload() {
  // 加载本地Excel文件
  source1.value = await loadLocalXlsxFile();
  if (source1.value) {
    previewVisible3.value = true;
  }
}

function handleXlsxDownload(data) {
  console.log('下载Excel文档:', data);
  // 这里可以实现自定义的下载逻辑
}
```

```html
<LSPreviewXlsx
  v-model="previewVisible3"
  :source="source1"
  has-download
  @on-download="handleXlsxDownload"
  :on-close="() => { previewVisible3 = false; }"
/>
<LSButton @click="loadXlsxFileWithDownload">点击预览带下载功能Excel文档</LSButton>
```

:::

### 4. 自定义控制栏

<br />
<ClientOnly>
<LSPreviewXlsx v-model="previewVisible5" :source="source1" :on-close="() => { previewVisible5 = false; }">
  <template #extra>
    <div class="custom-controls">
      <LSButton type="primary" size="small" @click="previewVisible5 = false">关闭预览</LSButton>
      <LSButton size="small" @click="handleXlsxDownload">下载文档</LSButton>
    </div>
  </template>
</LSPreviewXlsx>
<LSButton @click="loadXlsxFileWithCustomControls">点击预览自定义控制栏Excel文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible5 = ref(false);
const source1 = ref(null);

async function loadXlsxFileWithCustomControls() {
  // 加载本地Excel文件
  source1.value = await loadLocalXlsxFile();
  if (source1.value) {
    previewVisible5.value = true;
  }
}

function handleXlsxDownload(data) {
  console.log('下载Excel文档:', data);
}
```

```html
<LSPreviewXlsx v-model="previewVisible5" :source="source1" :on-close="() => { previewVisible5 = false; }">
  <template #extra>
    <div class="custom-controls">
      <LSButton type="primary" size="small" @click="previewVisible5 = false">关闭预览</LSButton>
      <LSButton size="small" @click="handleXlsxDownload">下载文档</LSButton>
    </div>
  </template>
</LSPreviewXlsx>
<LSButton @click="loadXlsxFileWithCustomControls">点击预览自定义控制栏Excel文档</LSButton>
```

```scss
.custom-controls {
  position: fixed;
  top: 20px;
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
import axios from 'axios';

// 加载本地Excel文件
async function loadLocalXlsxFile() {
  try {
    const response = await fetch('/files/222.xlsx');
    if (!response.ok) {
      throw new Error('文件加载失败');
    }
    const blob = await response.blob();
    const file = new File([blob], '222.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    return file;
  } catch (error) {
    console.error('加载Excel文件出错:', error);
    return null;
  }
}

// 示例1
const previewVisible1 = ref(false);
const source1 = ref(null);

async function loadXlsxFile() {
  // 加载本地Excel文件
  source1.value = await loadLocalXlsxFile();
  if (source1.value) {
    previewVisible1.value = true;
  }
}

// 示例2
const previewVisible2 = ref(false);
const watermarkOption = ref({
  content: '临港集团',
  fontSize: 16,
  color: 'rgba(0, 0, 0, 0.1)'
});

async function loadXlsxFileWithWatermark() {
  // 加载本地Excel文件
  source1.value = await loadLocalXlsxFile();
  if (source1.value) {
    previewVisible2.value = true;
  }
}

// 示例3
const previewVisible3 = ref(false);

async function loadXlsxFileWithDownload() {
  // 加载本地Excel文件
  source1.value = await loadLocalXlsxFile();
  if (source1.value) {
    previewVisible3.value = true;
  }
}



// 示例5
const previewVisible5 = ref(false);

async function loadXlsxFileWithCustomControls() {
  // 加载本地Excel文件
  source1.value = await loadLocalXlsxFile();
  if (source1.value) {
    previewVisible5.value = true;
  }
}

function handleXlsxDownload(data) {
  alert('下载Excel文档:', data);
}

// 属性
const tableData = ref([
  {
    name: 'modelValue/v-model',
    desc: '是否显示预览',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'source',
    desc: 'Excel文件源，必须是File对象',
    type: 'File',
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
  },
]);

// 事件
const eventsTableData = ref([
  {
    name: 'loadComplete',
    desc: 'Excel加载完成事件',
    type: 'function',
    value: '-'
  },
  {
    name: 'loadError',
    desc: 'Excel加载失败事件',
    type: 'function',
    value: '-'
  },
  {
    name: 'onDownload',
    desc: 'Excel下载事件',
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

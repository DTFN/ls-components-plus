---
outline: deep
---

# PreviewPdf PDF预览

::: warning 基于pdfjs-dist二次封装，用于预览.pdf格式文档。

v1.0.34之后使用新的预览组件（LSPreviewPdf)不在需要特殊配置且不需要传type参数。
<Br />
v1.0.34以前版本请参考以下使用方式
如果只需要图片预览，在配置文件添加
optimizeDeps: {
exclude: ['pdfjs-dist', 'luckyexcel']
}，build中添加external: ['pdfjs-dist', 'luckyexcel']，不需要哪个依赖排除哪个即可
:::

::: tip 需安装依赖 [pdfjs-dist](https://www.npmjs.com/package/pdfjs-dist) 版本为4.8.69。

[字体下载](/cmaps.zip)，下载完成后解压到public文件夹下
:::

## 功能介绍

LSPreviewPdf 组件是基于 pdfjs-dist 二次封装的 PDF 预览组件，提供了以下增强功能：

- 支持本地和在线 PDF 文件预览
- 支持多页 PDF 文档浏览
- 支持页面缩放、旋转等操作
- 支持自定义页面大小和缩放比例
- 支持全屏模式预览
- 支持快捷键操作（上一页、下一页、缩放等）
- 支持自定义字体和字符映射
- 支持打印功能
- 支持下载功能
- 支持加载状态显示

## 使用方式

### 1. 基础使用

<br />
<ClientOnly>
<LSPreviewPdf v-model="previewVisible1" :source="pdfSource1" :c-map-url-path="cMapUrlPath" :on-close="() => { previewVisible1 = false; }" />
<LSButton @click="previewVisible1 = true">点击预览PDF文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible1 = ref(false);
const pdfSource1 = ref('/files/食物辑要.八卷.明.穆世锡撰.明万历四十二年娄东穆氏原刊本.黑白版.pdf');
const cMapUrlPath = ref('https://unpkg.com/pdfjs-dist@3.4.120/cmaps/');
```

```html
<LSPreviewPdf
  v-model="previewVisible1"
  :source="pdfSource1"
  :c-map-url-path="cMapUrlPath"
  :on-close="() => { previewVisible1 = false; }"
/>
<LSButton @click="previewVisible1 = true">点击预览PDF文档</LSButton>
```

:::

### 2. 带水印的PDF预览

<br />
<ClientOnly>
<LSPreviewPdf v-model="previewVisible2" :source="pdfSource1" :c-map-url-path="cMapUrlPath" :show-watermark="true" :watermark-option="watermarkOption" :on-close="() => { previewVisible2 = false; }" />
<LSButton @click="previewVisible2 = true">点击预览带水印PDF文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible2 = ref(false);
const pdfSource1 = ref('/files/食物辑要.八卷.明.穆世锡撰.明万历四十二年娄东穆氏原刊本.黑白版.pdf');
const cMapUrlPath = ref('https://unpkg.com/pdfjs-dist@3.4.120/cmaps/');
const watermarkOption = ref({
  content: '临港集团',
  fontSize: 16,
  color: 'rgba(0, 0, 0, 0.1)'
});
```

```html
<LSPreviewPdf
  v-model="previewVisible2"
  :source="pdfSource1"
  :c-map-url-path="cMapUrlPath"
  :show-watermark="true"
  :watermark-option="watermarkOption"
  :on-close="() => { previewVisible2 = false; }"
/>
<LSButton @click="previewVisible2 = true">点击预览带水印PDF文档</LSButton>
```

:::

### 3. 带下载功能的PDF预览

<br />
<ClientOnly>
<LSPreviewPdf v-model="previewVisible3" :source="pdfSource1" :c-map-url-path="cMapUrlPath" has-download @on-download="handlePdfDownload" :on-close="() => { previewVisible3 = false; }" />
<LSButton @click="previewVisible3 = true">点击预览带下载功能PDF文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible3 = ref(false);
const pdfSource1 = ref('/files/食物辑要.八卷.明.穆世锡撰.明万历四十二年娄东穆氏原刊本.黑白版.pdf');
const cMapUrlPath = ref('https://unpkg.com/pdfjs-dist@3.4.120/cmaps/');

function handlePdfDownload(data) {
  console.log('下载PDF文档:', data);
  // 这里可以实现自定义的下载逻辑
}
```

```html
<LSPreviewPdf
  v-model="previewVisible3"
  :source="pdfSource1"
  :c-map-url-path="cMapUrlPath"
  has-download
  @on-download="handlePdfDownload"
  :on-close="() => { previewVisible3 = false; }"
/>
<LSButton @click="previewVisible3 = true">点击预览带下载功能PDF文档</LSButton>
```

:::

### 4. 初始加载全部页面

<br />
<ClientOnly>
<LSPreviewPdf v-model="previewVisible4" :source="pdfSource1" :c-map-url-path="cMapUrlPath" :init-no-pagination="true" :on-close="() => { previewVisible4 = false; }" />
<LSButton @click="previewVisible4 = true">初始加载全部页面</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible4 = ref(false);
const pdfSource1 = ref('/files/食物辑要.八卷.明.穆世锡撰.明万历四十二年娄东穆氏原刊本.黑白版.pdf');
const cMapUrlPath = ref('https://unpkg.com/pdfjs-dist@3.4.120/cmaps/');
```

```html
<LSPreviewPdf
  v-model="previewVisible4"
  :source="pdfSource1"
  :c-map-url-path="cMapUrlPath"
  init-no-pagination
  :on-close="() => { previewVisible4 = false; }"
/>
<LSButton @click="previewVisible4 = true">点击预览不分页PDF文档</LSButton>
```

:::

### 5. 自定义控制栏

<br />
<ClientOnly>
<LSPreviewPdf v-model="previewVisible5" :source="pdfSource1" :c-map-url-path="cMapUrlPath" :on-close="() => { previewVisible5 = false; }">
  <template #extra>
    <div class="custom-controls">
      <LSButton type="primary" size="small" @click="previewVisible5 = false">关闭预览</LSButton>
      <LSButton size="small" @click="handlePdfDownload">下载文档</LSButton>
    </div>
  </template>
</LSPreviewPdf>
<LSButton @click="previewVisible5 = true">点击预览自定义控制栏PDF文档</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible5 = ref(false);
const pdfSource1 = ref('/files/食物辑要.八卷.明.穆世锡撰.明万历四十二年娄东穆氏原刊本.黑白版.pdf');
const cMapUrlPath = ref('https://unpkg.com/pdfjs-dist@3.4.120/cmaps/');

function handlePdfDownload(data) {
  console.log('下载PDF文档:', data);
}
```

```html
<LSPreviewPdf
  v-model="previewVisible5"
  :source="pdfSource1"
  :c-map-url-path="cMapUrlPath"
  :on-close="() => { previewVisible5 = false; }"
>
  <template #extra>
    <div class="custom-controls">
      <LSButton type="primary" size="small" @click="previewVisible5 = false">关闭预览</LSButton>
      <LSButton size="small" @click="handlePdfDownload">下载文档</LSButton>
    </div>
  </template>
</LSPreviewPdf>
<LSButton @click="previewVisible5 = true">点击预览自定义控制栏PDF文档</LSButton>
```

```scss
.custom-controls {
  position: fixed;
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
const pdfSource1 = ref('/files/食物辑要.八卷.明.穆世锡撰.明万历四十二年娄东穆氏原刊本.黑白版.pdf');
const cMapUrlPath = ref('https://unpkg.com/pdfjs-dist@3.4.120/cmaps/');

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

// 示例5
const previewVisible5 = ref(false);

function handlePdfDownload(data) {
  alert('下载PDF文档:', data);
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
    desc: 'PDF文件源，支持URL地址',
    type: 'string',
    value: '-'
  },
  {
    name: 'cMapUrlPath',
    desc: 'PDF.js cMap文件路径，用于正确显示中文等特殊字符',
    type: 'string',
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
    name: 'downloadTxt',
    desc: '下载按钮文案',
    type: 'string',
    value: '下载'
  },
  {
    name: 'downloadLoading',
    desc: '下载中状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'initNoPagination',
    desc: '初始是否不分页展示',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'showSize',
    desc: '是否显示缩放控制',
    type: 'boolean',
    value: 'true'
  }
]);

// 事件
const eventsTableData = ref([
  {
    name: 'loadComplete',
    desc: 'PDF加载完成事件',
    type: 'function',
    value: '-'
  },
  {
    name: 'loadError',
    desc: 'PDF加载失败事件',
    type: 'function',
    value: '-'
  },
  {
    name: 'onDownload',
    desc: 'PDF下载事件',
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

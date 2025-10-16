---
outline: deep
---

# Preview 预览

::: warning 支持图片（image）、文档（docx）、表格（xlsx）、pdf类型文件预览。

v1.0.34之后使用新的预览组件（LSPreviewImage、LSPreviewDocx、LSPreviewPdf、LSPreviewXlsx)不在需要特殊配置且不需要传type参数。
<br />
v1.0.34以前版本请参考以下使用方式
如果只需要图片预览，在配置文件添加
optimizeDeps: {
exclude: ['pdfjs-dist', 'luckyexcel']
}，build中添加external: ['pdfjs-dist', 'luckyexcel']，不需要哪个依赖排除哪个即可
:::

## 使用方式

### 1. 图片预览

<br />

<LSButton type="primary" @click="openViewerImg">图片预览</LSButton>

<ClientOnly>
  <LSPreviewImage v-model="showViewer" :on-close="closeViewer" :source="source" />
</ClientOnly>

```js
import { ref } from 'vue';

const source = ref([
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
]);
const showViewer = ref(false);

function closeViewer() {
  showViewer.value = false;
}
function openViewerImg() {
  showViewer.value = true;
}
```

```html
<LSButton type="primary" @click="openViewerImg">图片预览</LSButton>
<LSPreviewImage v-model="showViewer" :on-close="closeViewer" :source="source" />
```

### 2. Docx预览

<br />
<LSButton type="primary" @click="openViewerDocx">Docx预览</LSButton>
<ClientOnly>
  <LSPreviewDocx v-model="showViewer2" :on-close="closeViewer2" :source="source2" />
</ClientOnly>

```js
import { ref } from 'vue';
import axios from 'axios';
import docx from '/files/测试.docx?url';

const source2 = ref();
const showViewer2 = ref(false);

function closeViewer2() {
  showViewer2.value = false;
}
function openViewerDocx() {
  axios.get(location.origin + docx, { responseType: 'arraybuffer' }).then(data => {
    source2.value = data.data;
    showViewer2.value = true;
  });
}
```

```html
<LSButton type="primary" @click="openViewerDocx">Docx预览</LSButton>
<LSPreviewDocx v-model="showViewer2" :on-close="closeViewer2" :source="source2" />
```

### 3. Pdf预览

::: tip 需安装依赖 [pdfjs-dist](https://www.npmjs.com/package/pdfjs-dist) 版本为4.8.69。

[字体下载](/cmaps.zip)，下载完成后解压到public文件夹下
:::

<br />
<LSButton type="primary" @click="openViewerPdf">Pdf预览</LSButton>
<ClientOnly>
  <LSPreviewPdf v-model="showViewer3" :on-close="closeViewer3" :source="source3" :c-map-url-path="'\/cmaps\/'" />
</ClientOnly>

```js
import { ref } from 'vue';
import pdf from '/files/食物辑要.八卷.明.穆世锡撰.明万历四十二年娄东穆氏原刊本.黑白版.pdf';

const source3 = ref();
const showViewer3 = ref(false);

function closeViewer3() {
  showViewer3.value = false;
}
function openViewerPdf() {
  source3.value = pdf;
  showViewer3.value = true;
}
```

```html
<LSButton type="primary" @click="openViewerPdf">Pdf预览</LSButton>
<LSPreviewPdf v-model="showViewer3" :on-close="closeViewer3" :source="source3" :c-map-url-path="'\/cmaps\/'" />
```

### 4. Xlsx预览，使用前需要引入lucksheet依赖资源，目前支持两种引入方式。

::: tip 需安装依赖 [luckyexcel](https://www.npmjs.com/package/luckyexcel)。
:::

#### 4.1 在index.html文件中引入资源

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

#### 4.2 将资源文件夹放在public文件夹下

::: warning [资源下载](https://front-development.oss-cn-beijing.aliyuncs.com/front-dev/luckysheet.zip)
下载完成后解压到public文件夹下

:::

<LSButton type="primary" @click="openViewerXlsx">Xlsx预览</LSButton>
<ClientOnly>
<LSPreviewXlsx v-model="showViewer4" :on-close="closeViewer4" :source="source4" />
</ClientOnly>

```js
import { ref } from 'vue';
import xlsx from '/files/222.xlsx?url';

const source4 = ref();
const showViewer4 = ref(false);
function closeViewer4() {
  showViewer4.value = false;
}
function openViewerXlsx() {
  axios.get(location.origin + xlsx, { responseType: 'arraybuffer' }).then(data => {
    source4.value = new File([new Blob([data.data], { type: 'text/plain' })], '222.xlsx', { type: 'text/plain' });
    showViewer4.value = true;
  });
}
```

```html
<LSButton type="primary" @click="openViewerXlsx">Xlsx预览</LSButton>
<LSPreviewXlsx v-model="showViewer4" :on-close="closeViewer4" :source="source4" />
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods，以属性方式传入

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

### 3. slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="tableData3" />

<script setup>
import { tableColumn, tableMethodColumn, tableSlotColumn } from '../constant';
import { ref } from 'vue';
import axios from 'axios';
import docx from '/files/测试.docx?url';
import pdf from '/files/食物辑要.八卷.明.穆世锡撰.明万历四十二年娄东穆氏原刊本.黑白版.pdf';
import xlsx from '/files/222.xlsx?url';

const source = ref([
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
]);
const showViewer = ref(false);

function closeViewer() {
  showViewer.value = false;
}
function openViewerImg() {
  showViewer.value = true;
}

const source2 = ref();
const showViewer2 = ref(false);
function closeViewer2() {
  showViewer2.value = false;
}
function openViewerDocx() {
  axios.get(location.origin + docx, { responseType: 'arraybuffer' }).then(data => {
    source2.value = data.data;
    showViewer2.value = true;
  });
}

const source3 = ref();
const showViewer3 = ref(false);
function closeViewer3() {
  showViewer3.value = false;
}
function openViewerPdf() {
  source3.value = pdf;
  showViewer3.value = true;
}

const source4 = ref();
const showViewer4 = ref(false);
function closeViewer4() {
  showViewer4.value = false;
}
function openViewerXlsx() {
 axios.get(location.origin + xlsx, { responseType: 'arraybuffer' }).then(data => {
    source4.value = new File([new Blob([data.data], { type: 'text/plain' })], '222.xlsx', { type: 'text/plain' });
    showViewer4.value = true;
  });
}

const tableData = ref([
  {
    name: 'model-value / v-mode',
    desc: '是否显示',
    type: 'boolean',
    value: '-'
  },
  {
    name: 'type',
    desc: '预览类型: 支持 image / docx / pdf / xlsx（1.0.34之后该参数作废）',
    type: 'string',
    value: '-'
  },
  {
    name: 'source',
    desc: '预览资源, image时类型为array，docx时类型为arraybuffer，pdf时类型为string，xlsx时类型为File',
    type: 'array / arraybuffer / File / string',
    value: '-'
  },
  {
    name: 'needLoading',
    desc: '是否需要loading',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'loadingOption',
    desc: 'loading配置, 参考ElLoading配置',
    type: 'object',
    value: '{ text: "Loading", background: "rgba(0, 0, 0, 0.3)" }'
  },
  {
    name: 'hasDownload',
    desc: '是否需要下载按钮，当前仅image支持',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'downloadData',
    desc: '下载按钮返回数据，当前仅image支持',
    type: 'object',
    value: '{}'
  },
  {
    name: 'hasPagination',
    desc: '是否需要分页，当前仅xlsx支持，超过20m且常规表格（简单表格数据，无图，无合并单元格等）支持',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'c-map-url-path',
    desc: 'pdf子图资源路径，即cmaps.zip解压到public的路径(1.7.10+)',
    type:'string',
    value: '-'
  },
  {
    name:'hide-on-click-modal',
    desc:'点击遮罩层是否隐藏，pdf、docx、image组件支持',
    type:'boolean',
    value:'false'
  },
  {
    name: 'init-no-pagination',
    desc: '初始化时是否不展示分页，仅PDF',
    type: 'boolean',
    value: 'false'
  }
]);

const tableData2 = ref([
  {
    name: 'on-close',
    desc: '关闭时触发',
    type: 'function',
    value: '-'
  },
  {
    name: 'download',
    desc: '下载回调方法, 当前仅image支持',
    type: 'function',
    value: 'data'
  }
])

const tableData3 = ref([
  {
    name: 'viewer',
    desc: '插槽，同el-image，仅image支持'
  }
])

</script>

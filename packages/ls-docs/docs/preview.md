---
outline: deep
---

# Preview 预览

::: warning 支持图片、docx、xlsx、pdf类型文件预览。
:::

## 使用方式

### 1. 图片预览

<br />

<LSButton type="primary" @click="openViewerImg">图片预览</LSButton>

<LSPreview v-model="showViewer" :on-close="closeViewer" type="image" :source="source" />

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
<LSPreview v-model="showViewer" :on-close="closeViewer" type="image" :source="source" />
```

### 2. Docx预览

<br />
<LSButton type="primary" @click="openViewerDocx">Docx预览</LSButton>
<LSPreview v-model="showViewer2" :on-close="closeViewer2" type="docx" :source="source2" />

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
<LSPreview v-model="showViewer2" :on-close="closeViewer2" type="docx" :source="source2" />
```

### 3. Pdf预览

<br />
<LSButton type="primary" @click="openViewerPdf">Pdf预览</LSButton>
<LSPreview v-model="showViewer3" :on-close="closeViewer3" type="pdf" :source="source3" />

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
<LSPreview v-model="showViewer3" :on-close="closeViewer3" type="pdf" :source="source3" />
```

### 4. Xlsx预览，使用前需要引入lucksheet依赖资源，目前支持两种引入方式。

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
<LSPreview v-model="showViewer4" :on-close="closeViewer4" type="xlsx" :source="source4" />

<script setup>
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

</script>

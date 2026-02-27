---
outline: deep
---

# PreviewImage 图片预览

::: warning 基于el-image-viewer二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 基础使用

<br />
<ClientOnly>
<LSPreviewImage v-model="previewVisible1" :source="source1" :on-close="() => { previewVisible1 = false; }" />
<LSButton @click="previewVisible1 = true">点击预览单张图片</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible1 = ref(false);
const source1 = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
```

```html
<LSPreviewImage v-model="previewVisible1" :source="source1" :on-close="() => { previewVisible1 = false; }" />
<LSButton @click="previewVisible1 = true">点击预览单张图片</LSButton>
```

:::

### 2. 多张图片预览

<br />
<ClientOnly>
<LSPreviewImage v-model="previewVisible2" :source="source2" :on-close="() => { previewVisible2 = false; }" />
<LSButton @click="previewVisible2 = true">点击预览多张图片</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible2 = ref(false);
const source2 = ref([
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
  'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
]);
```

```html
<LSPreviewImage v-model="previewVisible2" :source="source2" :on-close="() => { previewVisible2 = false; }" />
<LSButton @click="previewVisible2 = true">点击预览多张图片</LSButton>
```

:::

### 3. 带水印的图片预览

<br />
<ClientOnly>
<LSPreviewImage v-model="previewVisible3" :source="source1" :show-watermark="true" :watermark-option="watermarkOption" :on-close="() => { previewVisible3 = false; }" />
<LSButton @click="previewVisible3 = true">点击预览带水印图片</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible3 = ref(false);
const source1 = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');
const watermarkOption = ref({
  content: '临港集团',
  fontSize: 16,
  color: 'rgba(255, 255, 255, 0.3)'
});
```

```html
<LSPreviewImage
  v-model="previewVisible3"
  :source="source1"
  :show-watermark="true"
  :watermark-option="watermarkOption"
  :on-close="() => { previewVisible3 = false; }"
/>
<LSButton @click="previewVisible3 = true">点击预览带水印图片</LSButton>
```

:::

### 4. 自定义预览控制栏

<br />
<ClientOnly>
<LSPreviewImage v-model="previewVisible4" :source="source2" :on-close="() => { previewVisible4 = false; }">
  <template #viewer>
    <div class="custom-viewer">
      <LSButton type="primary" size="small" @click="previewVisible4 = false">关闭预览</LSButton>
    </div>
  </template>
</LSPreviewImage>
<LSButton @click="previewVisible4 = true">点击预览自定义控制栏</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible4 = ref(false);
const source2 = ref([
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
  'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
]);
```

```html
<LSPreviewImage v-model="previewVisible4" :source="source2" :on-close="() => { previewVisible4 = false; }">
  <template #viewer>
    <div class="custom-viewer">
      <LSButton type="primary" size="small" @click="previewVisible4 = false">关闭预览</LSButton>
    </div>
  </template>
</LSPreviewImage>
<LSButton @click="previewVisible4 = true">点击预览自定义控制栏</LSButton>
```

```scss
.custom-viewer {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
}
```

:::

### 5. 带下载功能的图片预览

<br />
<ClientOnly>
<LSPreviewImage v-model="previewVisible5" :source="source1" @on-download="handleDownload" :on-close="() => { previewVisible5 = false; }" has-download download-data="{ url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' }" />
<LSButton @click="previewVisible5 = true">点击预览带下载功能</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible5 = ref(false);
const source1 = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');

function handleDownload() {
  alert('下载图片');
  // 这里可以实现自定义的下载逻辑
}
```

```html
<LSPreviewImage
  v-model="previewVisible5"
  :source="source1"
  @on-download="handleDownload"
  :on-close="() => { previewVisible5 = false; }"
  has-download
  download-data="{ url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' }"
/>
<LSButton @click="previewVisible5 = true">点击预览带下载功能</LSButton>
```

:::

### 6. 模拟2s加载状态

<br />
<ClientOnly>
<LSPreviewImage v-model="previewVisible6" :source="source6" :need-loading="true" :on-close="() => { previewVisible6 = false; }" />
<LSButton @click="handlePreview6">点击预览带加载状态</LSButton>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const previewVisible6 = ref(false);
const source6 = ref('');

const handlePreview6 = () => {
  previewVisible6.value = true;
  // 图片打开后会自动显示2s的加载状态
  setTimeout(() => {
    source6.value = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';
  }, 2000);
};
```

```html
<LSPreviewImage v-model="previewVisible6" :source="source6" :need-loading="true" :on-close="() => { previewVisible6 = false; }" />
<LSButton @click="handlePreview6">点击预览带加载状态</LSButton>
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Events

<ApiIntro :tableColumn="tableMethodColumn" :tableData="eventsTableData" />

### 3. Slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="slotTableData" />

### 4. Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="exposesTableData" />

<script setup>
import { ref } from 'vue';
import { tableColumn, tableMethodColumn, tableSlotColumn, tableExposesColumn } from '../constant';

// 示例1
const previewVisible1 = ref(false);
const source1 = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');

// 示例2
const previewVisible2 = ref(false);
const source2 = ref([
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
  'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
]);

// 示例3
const previewVisible3 = ref(false);
const watermarkOption = ref({
  content: '临港集团',
  fontSize: 16,
  color: 'rgba(255, 255, 255, 0.3)'
});

// 示例4
const previewVisible4 = ref(false);

// 示例5
const previewVisible5 = ref(false);

function handleDownload() {
  alert('下载图片');
}

// 示例6
const previewVisible6 = ref(false);
const source6 = ref('');

const handlePreview6 = () => {
  previewVisible6.value = true;
  // 图片打开后会自动显示2s的加载状态
  setTimeout(() => {
    source6.value = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  }, 2000)
};

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
    desc: '图片源，支持字符串或数组',
    type: 'string / array',
    value: '-'
  },
  {
    name: 'zoomSize',
    desc: '缩放尺寸',
    type: 'number / string',
    value: '1.5'
  },
  {
    name: 'needLoading',
    desc: '是否需要加载状态',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'loadingOption',
    desc: '加载状态配置',
    type: 'object',
    value: '{ text: "Loading", background: "rgba(0, 0, 0, 0.3)" }'
  },
  {
    name: 'hasDownload',
    desc: '是否显示下载按钮',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'downloadData',
    desc: '下载数据',
    type: 'object',
    value: '{}'
  },
  {
    name: 'hideOnClickModal',
    desc: '点击遮罩层是否关闭预览',
    type: 'boolean',
    value: 'false'
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
  }
]);

// 事件
const eventsTableData = ref([
  {
    name: 'loadComplete',
    desc: '图片加载完成事件',
    type: 'function',
    value: '-'
  },
  {
    name: 'loadError',
    desc: '图片加载失败事件',
    type: 'function',
    value: '-'
  },
  {
    name: 'onDownload',
    desc: '图片下载事件',
    type: 'function',
    value: 'downloadData'
  }
]);

// 插槽
const slotTableData = ref([
  {
    name: 'viewer',
    desc: '自定义预览内容插槽，图片组件内层区域',
  },
  {
    name: 'viewer',
    desc: '自定义预览内容插槽，图片组件外层区域',
  },
  {
    name: 'default',
    desc: '默认插槽',
  }
]);

// 暴露的方法
const exposesTableData = ref([
  {
    name: 'setActiveItem',
    desc: '手动切换图片',
    type: 'function',
    value: 'index'
  }
]);
</script>

<style scoped>
.custom-viewer {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
}
</style>

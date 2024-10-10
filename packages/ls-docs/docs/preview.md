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

<script setup>
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
</script>

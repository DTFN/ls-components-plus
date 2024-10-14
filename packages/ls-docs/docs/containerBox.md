---
outline: deep
---

# ContainerBox 适配容器

::: warning 根据分辨率适配，适用于大屏。
:::

## 使用方式

<LSContainerBox :width="320" :height="750"><div class="content">容器测试</div></LSContainerBox>

<br /> <br />

```html
<LSContainerBox :width="320" :height="750"><div class="content">容器测试</div></LSContainerBox>
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

<script setup>
import { tableColumn } from './constant';
import { ref } from 'vue';

const tableData = ref([
  {
    name: 'width',
    desc: '容器初始分辨率宽度',
    type: 'number',
    value: 1920
  },
  {
    name: 'height',
    desc: '容器初始分辨率高度',
    type: 'number',
    value: 1080
  }
])
</script>

<style scoped lang="scss">
.content {
  position: absolute;
  width: 100%;
  top: 45%;
  transform: translateY(-50%);
  text-align: center;
  color: blue;
  font-size: 32px;
  font-weight: blod;
}
</style>

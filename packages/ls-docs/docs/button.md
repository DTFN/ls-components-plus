---
outline: deep
---

# Button 按钮

::: warning 结合 el-button 和 icon 组件封装了常用方式。
:::

## 使用方式

### 1. 单按钮，保留原有el-button属性和方法

<br />

<LSButton :icon="Edit"></LSButton>
<LSButton :loading="true">按钮1</LSButton>
<LSButton icon-name="mingcute:look-left-fill" :icon-type="1" icon-color="red" icon-width="30" icon-height="30"></LSButton>
<LSButton icon-name="iconoir:fish" :icon-type="1" icon-color="blue" :icon-width="30" :icon-height="30">按钮2</LSButton>
<LSButton>
<SvgIconDataIcv color="red" /> 测试
</LSButton>

```ts
import { Edit } from '@element-plus/icons-vue';
import SvgIconDataIcv from '/public/data_icv.svg';
```

```html
<LSButton :icon="Edit"></LSButton>
<LSButton :loading="true">按钮1</LSButton>
<LSButton icon-name="mingcute:look-left-fill" :icon-type="1" icon-color="red" icon-width="30" icon-height="30"></LSButton>
<LSButton icon-name="iconoir:fish" :icon-type="1" icon-color="blue" :icon-width="30" :icon-height="30">按钮2</LSButton>
<LSButton> <SvgIconDataIcv color="red" /> 测试 </LSButton>
```

### 2. 按钮组，保留原有el-button-group属性和方法

<br />

<LSButtonGroup type="primary" :separator="1" :separator-color="separatorColor" :separator-size="12">
  <LSButton :icon="Edit" link>按钮3</LSButton>
  <LSButton :icon-name="iconName" :icon-type="1" link>按钮4</LSButton>
  <LSButton link>按钮5</LSButton>
</LSButtonGroup>

<LSButtonGroup type="primary" :separator="2" :separator-color="'green'" :separator-size="16">
  <LSButton :icon="Edit" link>按钮6</LSButton>
  <LSButton :icon-name="iconName" :icon-type="1" link>按钮7</LSButton>
</LSButtonGroup>

```html
<LSButtonGroup type="primary" :separator="1" :separator-color="separatorColor" :separator-size="12">
  <LSButton :icon="Edit" link>按钮3</LSButton>
  <LSButton :icon-name="iconName" :icon-type="1" link>按钮4</LSButton>
  <LSButton link>按钮5</LSButton>
</LSButtonGroup>

<LSButtonGroup type="primary" :separator="2" :separator-color="'green'" :separator-size="16">
  <LSButton :icon="Edit" link>按钮6</LSButton>
  <LSButton :icon-name="iconName" :icon-type="1" link>按钮7</LSButton>
</LSButtonGroup>
```

## Button API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="tableData2" />

## ButtonGroup API

### 1. Attributes

### 2. slots

<script setup>
  import { ref } from 'vue';
  import { Edit } from '@element-plus/icons-vue'
  import SvgIconDataIcv from '/public/data_icv.svg';
  import { tableColumn, tableSlotColumn } from './constant';

  const tableData = ref([]);
  const tableData2 = ref([]);
</script>

---
outline: deep
---

# Button 按钮

::: warning 结合 el-button 和 icon 组件封装了常用方式。
:::

## 使用方式

### 1. 单按钮，保留原有el-button所有属性和方法

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

### 2. 按钮组

<br />

## API

### 1. Attributes

### 2. slots

<script setup>
  import { ref } from 'vue';
  import { Edit } from '@element-plus/icons-vue'
  import SvgIconDataIcv from '/public/data_icv.svg';
</script>

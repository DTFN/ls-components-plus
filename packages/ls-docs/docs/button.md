---
outline: deep
---

# Button 按钮

::: warning 结合 el-button、el-button-group 组件进行二次封装。
:::

## 使用方式

### 1. 单按钮，保留原有el-button属性和方法

<br />

<LSButton :icon="Edit"></LSButton>
<LSButton :loading="true">按钮1</LSButton>
<LSButton :icon-config="{ type: 1, name: 'iconoir:fish', color: 'blue', width: 20, height: 20 }">按钮2</LSButton>
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
<LSButton :icon-config="{ type: 1, name: 'iconoir:fish', color: 'blue', width: 20, height: 20 }">按钮2</LSButton>
<LSButton> <SvgIconDataIcv color="red" /> 测试 </LSButton>
```

### 2. 按钮组，保留原有el-button-group属性和方法

<br />

<LSButtonGroup type="primary" separator="|" separator-color="red" :separator-size="12">
  <LSButton :icon="Edit" link>按钮3</LSButton>
  <LSButton :icon-config="{ type: 1, name:'iconoir:fish' }" link>按钮4</LSButton>
  <LSButton link>按钮5</LSButton>
</LSButtonGroup>

<LSButtonGroup type="primary" separator="#" separator-color="green" :separator-size="16">
  <LSButton :icon="Edit" link>按钮6</LSButton>
  <LSButton :icon-config="{ type: 1, name:'iconoir:fish' , color: 'blue', width: 20, height: 20 }" link>按钮7</LSButton>
</LSButtonGroup>

```html
<LSButtonGroup type="primary" separator="|" separator-color="red" :separator-size="12">
  <LSButton :icon="Edit" link>按钮3</LSButton>
  <LSButton :icon-config="{ type: 1, name:'iconoir:fish' }" link>按钮4</LSButton>
  <LSButton link>按钮5</LSButton>
</LSButtonGroup>

<LSButtonGroup type="primary" separator="#" separator-color="green" :separator-size="16">
  <LSButton :icon="Edit" link>按钮6</LSButton>
  <LSButton :icon-config="{ type: 1, name:'iconoir:fish', color: 'blue', width: 20, height: 20 }" link>按钮7</LSButton>
</LSButtonGroup>
```

## Button API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

## ButtonGroup API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

<script setup>
  import { ref } from 'vue';
  import { Edit } from '@element-plus/icons-vue'
  import SvgIconDataIcv from '/public/data_icv.svg';
  import { tableColumn } from '../constant';

  const tableData = ref([
    {
      name: 'iconConfig',
      desc: '图标配置，具体配置参考LSIcon',
      type: 'json',
      value: '-'
    },
  ]);
  const tableData2 = ref([
    {
      name: 'separator',
      desc: '按钮之间分割符号',
      type: 'string',
      value: '-'
    },
    {
      name: 'separatorColor',
      desc: '按钮之间分割符号颜色',
      type: 'string',
      value: '#333'
    },
    {
      name: 'separatorSize',
      desc: '按钮之间分割符号大小',
      type: 'string / number',
      value: '12'
    }
  ]);
</script>

---
outline: deep
---

# Print 打印

::: warning 基于[vue3-print-nb](https://www.npmjs.com/package/vue3-print-nb)二次封装。
:::

## 使用方式

### 1. 普通打印

<br />

<div id="printDom">普通打印内容</div>

<LSPrint content="禁止普通打印内容" btn-txt="普通打印" :can-print="canPrint" :icon-config="{ name: 'Printer' }" type="primary" :print-obj="{ id: '#printDom', }" />

### 2. 内嵌打印

<br />

<LSPrint content="禁止内嵌打印内容" btn-txt="内嵌打印" :can-print="canPrint" :icon-config="{ name: 'Printer', color: 'red' }" type="primary">
 <LSButton>
  内嵌打印内容
 </LSButton>
</LSPrint>

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

<script setup>
import { tableColumn } from './constant';
import { ref } from 'vue';

const canPrint = ref(true);


const tableData = ref([
  {
    name: 'printObj',
    desc: '打印对象参数配置',
    type: 'object',
    value: '{}'
  }
])
</script>

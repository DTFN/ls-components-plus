---
outline: deep
---

# Print 打印

::: warning 基于[vue3-print-nb](https://www.npmjs.com/package/vue3-print-nb)二次封装。
:::

## 使用方式

### 1. 普通打印

<br />

<LSPrint content="正在测试打印功能" btn-txt="普通打印" :can-print="canPrint" icon-name="Printer" type="primary" />

### 2. 内嵌打印

<br />

<LSPrint content="正在测试打印功能" btn-txt="内嵌打印" :can-print="canPrint" icon-name="Printer" type="primary">
  测试打印功能
</LSPrint>

```js
import { ref } from 'vue';
const canPrint = ref(true);
```

```html
<LSPrint content="正在测试打印功能" btn-txt="内嵌打印" :can-print="canPrint" icon-name="Printer" type="primary">
  测试打印功能
</LSPrint>
```

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

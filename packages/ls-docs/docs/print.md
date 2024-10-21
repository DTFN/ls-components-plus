---
outline: deep
---

# Print 打印

::: warning 基于[vue3-print-nb](https://www.npmjs.com/package/vue3-print-nb)二次封装。
:::

## 使用方式

#### 下载依赖 vue3-print-nb, 注册依赖 app.directive('print', print);

### 1. 普通打印

<br />

<div id="printDom">普通打印内容</div>

<LSPrint content="禁止普通打印内容" btn-txt="普通打印" :can-print="canPrint" :icon-config="{ name: 'Printer' }" type="primary" :print-obj="{ id: '#printDom', }" />

```js
import { ref } from 'vue';
const canPrint = ref(true);
```

```html
<div id="printDom">普通打印内容</div>

<LSPrint
  content="禁止普通打印内容"
  btn-txt="普通打印"
  :can-print="canPrint"
  :icon-config="{ name: 'Printer' }"
  type="primary"
  :print-obj="{ id: '#printDom', }"
/>
```

### 2. 内嵌打印

<br />

<LSPrint content="禁止内嵌打印内容" btn-txt="内嵌打印" :can-print="canPrint" :icon-config="{ name: 'Printer', color: 'red' }" type="primary">
 <div>
  内嵌打印内容
 </div>
</LSPrint>

```js
import { ref } from 'vue';
const canPrint = ref(true);
```

```html
<LSPrint
  content="禁止内嵌打印内容"
  btn-txt="内嵌打印"
  :can-print="canPrint"
  :icon-config="{ name: 'Printer', color: 'red' }"
  type="primary"
>
  <div>内嵌打印内容</div>
</LSPrint>
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 printObj 常用参数为id，其他参数请参考[官网api](https://www.npmjs.com/package/vue3-print-nb)

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

### 2. Slot

<ApiIntro :tableColumn="tableSlotColumn" :tableData="tableData3" />

<script setup>
import { tableColumn, tableSlotColumn } from '../constant';
import { ref } from 'vue';

const canPrint = ref(true);


const tableData = ref([
  {
    name: 'printObj',
    desc: '打印对象参数配置',
    type: 'object',
    value: '{}'
  },
  {
    name: 'iconConfig',
    desc: '按钮文案前图标配置，具体配置参考LSIcon',
    type: 'json',
    value: '{}'
  },
  {
    name: 'btnTxt',
    desc: '按钮文案',
    type:'string',
    value: '打印'
  },
  {
    name: 'content',
    desc: '打印按钮禁止使用时，鼠标移入提示文案',
    type:'string',
    value: ''
  },
  {
    name: 'canPrint',
    desc: '是否允许打印',
    type:'boolean',
    value: 'true'
  }
])

const tableData2 = ref([
  {
    name: 'id',
    desc: '打印区域id，适用普通打印',
    type: 'string',
    value: ''
  }
])

const tableData3 = ref([
  {
    name: 'default',
    desc: '添加默认插槽',
  }
])
</script>

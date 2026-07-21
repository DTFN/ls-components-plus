---
outline: deep
---

# Print 打印

::: warning 基于[vue3-print-nb](https://www.npmjs.com/package/vue3-print-nb)二次封装。
:::

## 使用方式

:::tip 下载依赖 [vue3-print-nb](https://www.npmjs.com/package/vue3-print-nb), 并注册依赖指令 app.directive('print', print);
:::

### 1. 普通打印

<br />

<div id="printDom">普通打印内容</div>
<ClientOnly>
<LSPrint content="禁止普通打印内容" btn-txt="普通打印" :can-print="canPrint" :icon-config="{ name: 'Printer' }" type="primary" :print-obj="{ id: '#printDom', }" />
</ClientOnly>

```js
import { ref } from 'vue'

const canPrint = ref(true)
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
<ClientOnly>
<LSPrint content="禁止内嵌打印内容" btn-txt="内嵌打印" :can-print="canPrint" :icon-config="{ name: 'Printer', color: 'red' }" type="primary">
 <div>
  内嵌打印内容
 </div>
</LSPrint>
</ClientOnly>

```js
import { ref } from 'vue'

const canPrint = ref(true)
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

### 3. 指定区域打印

<br />
<div id="printArea" style="padding: 16px; margin-bottom: 12px; background: #f5f7fa; border: 1px dashed #c0c4cc; border-radius: 6px;">
  <h3 style="margin-top: 0;">指定区域内容</h3>
  <p>该区域通过 id="printArea" 被 LSPrint 组件指定打印。</p>
  <el-tag>标签 A</el-tag>
  <el-tag type="success">标签 B</el-tag>
</div>
<ClientOnly>
<LSPrint
  :print-obj="{ id: '#printArea', popTitle: '打印测试' }"
  content="正在打印指定区域"
  btn-txt="打印指定区域"
  :can-print="true"
  :icon-config="{ name: 'Printer' }"
  type="primary"
/>
</ClientOnly>

```html
<div id="printArea" style="padding: 16px; background: #f5f7fa; border: 1px dashed #c0c4cc; border-radius: 6px;">
  <h3>指定区域内容</h3>
  <p>该区域通过 id="printArea" 被 LSPrint 组件指定打印。</p>
  <el-tag>标签 A</el-tag>
  <el-tag type="success">标签 B</el-tag>
</div>

<LSPrint
  :print-obj="{ id: '#printArea', popTitle: '打印测试' }"
  content="正在打印指定区域"
  btn-txt="打印指定区域"
  :can-print="true"
  :icon-config="{ name: 'Printer' }"
  type="primary"
/>
```

### 4. 禁用打印

<br />
<ClientOnly>
<LSPrint
  content="当前状态禁止打印"
  btn-txt="禁止打印"
  :can-print="false"
  :icon-config="{ name: 'Printer', color: 'red' }"
  type="primary"
/>
</ClientOnly>

```html
<LSPrint
  content="当前状态禁止打印"
  btn-txt="禁止打印"
  :can-print="false"
  :icon-config="{ name: 'Printer', color: 'red' }"
  type="primary"
/>
```

### 5. 动态控制打印权限

<br />
<ClientOnly>
<el-switch v-model="canPrint" active-text="允许打印" inactive-text="禁止打印" />
<br /><br />
<LSPrint
  content="通过开关动态控制是否允许打印"
  btn-txt="动态控制打印"
  :can-print="canPrint"
  :icon-config="{ name: 'Printer' }"
  type="primary"
/>
</ClientOnly>

```js
import { ref } from 'vue'

const canPrint = ref(true)
```

```html
<el-switch v-model="canPrint" active-text="允许打印" inactive-text="禁止打印" />

<LSPrint
  content="通过开关动态控制是否允许打印"
  btn-txt="动态控制打印"
  :can-print="canPrint"
  :icon-config="{ name: 'Printer' }"
  type="primary"
/>
```

### 6. 自定义按钮样式

<br />
<ClientOnly>
<LSPrint content="自定义按钮样式" btn-txt="打印" :can-print="true" :icon-config="{ name: 'Printer' }" type="success" />
<LSPrint content="自定义按钮样式" btn-txt="打印" :can-print="true" :icon-config="{ name: 'Printer' }" type="warning" />
<LSPrint content="自定义按钮样式" btn-txt="打印" :can-print="true" :icon-config="{ name: 'Printer' }" type="danger" />
</ClientOnly>

```html
<LSPrint content="自定义按钮样式" btn-txt="打印" :can-print="true" :icon-config="{ name: 'Printer' }" type="success" />
<LSPrint content="自定义按钮样式" btn-txt="打印" :can-print="true" :icon-config="{ name: 'Printer' }" type="warning" />
<LSPrint content="自定义按钮样式" btn-txt="打印" :can-print="true" :icon-config="{ name: 'Printer' }" type="danger" />
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

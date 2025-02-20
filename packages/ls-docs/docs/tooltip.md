---
outline: deep
---

# Tooltip 弹出提示

::: warning 基于el-tooltip二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 单行
<br />

<LSTooltip width="200" :content="tooltipContent" placement="right">
  <div class="tooltip-test">{{ tooltipContent }}</div>
</LSTooltip>

::: details 点我查看代码
```js
import { ref } from 'vue';
const tooltipContent = ref('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试');

```
```html
<LSTooltip width="200" :content="tooltipContent" placement="right" :font-size="18">
  <div class="tooltip-test">{{ tooltipContent }}</div>
</LSTooltip>
```
```scss
.tooltip-test {
  width: 100%;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```
:::

### 2. 多行
<br />

<LSTooltip width="200" :content="tooltipContent" placement="right" :line-clamp="3" :font-size="18">
  <div class="tooltip-test2">{{ tooltipContent }}</div>
</LSTooltip>

::: details 点我查看代码
```js
import { ref } from 'vue';
const tooltipContent = ref('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试');

```
```html
<LSTooltip width="200" :content="tooltipContent" placement="right" :line-clamp="3" :font-size="18">
  <div class="tooltip-test2">{{ tooltipContent }}</div>
</LSTooltip>
```
```scss
.tooltip-test2 {
  width: 100%;
  font-size: 18px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```
:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

<script setup>
import { tableColumn } from '../constant';
import { ref } from 'vue';

const tooltipContent = ref('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试');

const tableData = ref([
  {
    name: 'width',
    desc: '文案内容展示宽度，只支持内容在一行的场景',
    type: 'number / string',
    value: '100%'
  },
  {
    name: 'fontSize',
    desc: '文案内容字体大小，必传',
    type: 'number',
    value: 'null'
  },
  {
    name: 'lineClamp',
    desc: '大于1为多行隐藏展示，必须与样式中的多行隐藏一致',
    type: 'number',
    value: 1
  },
  {
    name: 'lineHeight',
    desc: '文本内容的行高，多行隐藏时必传',
    type: 'number',
    value: 'null'
  }
])
</script>

<style>
.tooltip-test {
  width: 100%;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tooltip-test2 {
  width: 100%;
  font-size: 18px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>


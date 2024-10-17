---
outline: deep
---

# List 列表

::: warning 基于LSForm 和 LSTable 组件组合 加上 useTableListHook 封装的列表组件
:::

## 使用方式

### 1. 基础用法

<br>

::: details 点我查看代码

```js

```

```html

```

:::

## API

### LSForm

### 1. Attributes

<ApiIntro :tableColumn="tableColumn"  :tableData="attrTableData" />

### 2. Events

<ApiIntro :tableColumn="tableMethodColumn"  :tableData="eventsTableData" />

### 3. Slots

<ApiIntro :tableColumn="tableSlotColumn"  :tableData="slotTableData" />

### 4. Exposes

<ApiIntro :tableColumn="tableExposesColumn"  :tableData="exposesTableData" />

<script setup>
import { tableColumn,tableMethodColumn,tableSlotColumn,tableExposesColumn } from '../constant';
import { ref } from 'vue';

// 属性
const attrTableData=[
  {
    name: 'listApi',
    desc: '列表接口请求方法，返回一个Promise',
    type: 'Function',
    value: '-'
  },
   {
    name: 'delApi',
    desc: '删除接口请求方法，返回一个Promise',
    type: 'Function',
    value: '-'
  },
   {
    name: 'switchApi',
    desc: '开关切换接口请求方法，返回一个Promise',
    type: 'Function',
    value: '-'
  },
  {
    name: 'formData',
    desc: '表单数据',
    type: 'object',
    value: '-'
  },
  {
    name: 'formItems',
    desc: '表单控件配置',
    type: 'array',
    value: '[]'
  },
  {
    name: 'formAttrs',
    desc: '表单配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'tableColumn',
    desc: '表格列数据',
    type: 'array',
    value: '[]'
  },
  {
    name: 'tableAttrs',
    desc: '表格配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'tableListeners',
    desc: '表格事件',
    type: 'object',
    value: '-'
  },
  {
    name: 'showOperate',
    desc: '是否显示操作按钮展示区域',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'showAdd',
    desc: '是否显示添加按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'addBtnText',
    desc: '添加按钮文字',
    type: 'string',
    value: '添加'
  },
  {
    name: 'showTableSwitch',
    desc: '是否显示表格开关切换',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'switchProp',
    desc: '表格开关切换字段名',
    type: 'string',
    value: 'status'
  },
  {
    name: 'showTableOperate',
    desc: '是否显示表格操作列',
    type: 'boolean',
    value: 'true'
  },
]

// 事件
const eventsTableData=[
  {
    name: '-',
    desc: '-',
    type: '-',
    value: '-'
  },
]

// 插槽
const slotTableData=[
  {
    name: '-',
    desc: '-',
  },
]

// Exposes
const exposesTableData=[
  {
    name: '-',
    desc: '-',
    type: '-',
    value: '-'
  },
]
</script>

<style>
</style>

---
outline: deep
---

# Icon 图标

::: warning 基于Element Plus Icon、iconify、img、svg 提供三种图标使用方式。
:::

## 使用方式

### 1. [Element Plus Icon](https://element-plus.org/zh-CN/component/icon.html)

::: tip 需安装依赖 [@element-plus/icons-vue](https://element-plus.org/zh-CN/component/icon.html)。
并注册需要用到的icon图标，注册方式请查看ei-icon文档
:::
<LSIcon name="Notification" color="red" size="20" />

```html
<LSIcon name="Notification" color="red" size="20" />
```

### 2. [iconify](https://icon-sets.iconify.design/?category=General)

::: tip 需安装依赖 [@iconify/vue](https://www.npmjs.com/package/@iconify/vue)。
:::
<LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />

```html
<LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />
```

### 3. img

<br />

<LSIcon :type="2" name="img" width="100" height="100" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />

```html
<LSIcon :type="2" name="img" width="100" height="100" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
```

### 4. svg

<br />

<LSIcon :type="2" :name="svgIcon" width="30" height="30" color="yellow" />

```ts
import svgIcon from '/public/vue.svg';
```

```html
<LSIcon :type="2" :name="svgIcon" width="30" height="30" color="yellow" />
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Slot

<ApiIntro :tableColumn="tableSlotColumn" :tableData="tableData2" />

<script setup>
import svgIcon from '/public/vue.svg';
import { ref } from 'vue';
import { tableColumn, tableSlotColumn } from '../constant'

const tableData = ref([
  {
    name: 'type',
    desc: '图标类型， 默认el-icon，1：iconify，2：img',
    type: 'string / number',
    value: '-'
  },
  {
    name: 'name',
    desc: '图标名称',
    type: 'string / object',
    value: '-'
  },
  {
    name: 'color',
    desc: '图标颜色',
    type: 'string',
    value: '-'
  },
  {
    name: 'width',
    desc: '图标宽度，适用于iconify和svg',
    type: 'string / number',
    value: 16
  },
  {
    name: 'height',
    desc: '图标高度，适用于iconify和svg',
    type: 'string / number',
    value: 16
  },
  {
    name: 'size',
    desc: '图标大小，适用于el-icon',
    type: 'string / number',
    value: 16
  },
  {
    name: 'src',
    desc: 'img图片地址，type为2的时候使用',
    type: 'string',
    value: '-'
  }
])

const tableData2 = ref([
  {
    name: 'default',
    desc: '添加默认插槽',
  }
])
</script>

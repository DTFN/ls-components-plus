---
outline: deep
---

# Icon 图标

::: warning 基于Element Plus Icon、iconify、svg 提供三种图标使用方式。
:::

## 使用方式

<script setup>
  import svgIcon from '/public/vue.svg';
  import { ref } from 'vue';

  const tableColumn = ref([
    {
      prop: 'name',
      label: '属性名',
      width: 160
    },
    {
      prop: 'desc',
      label: '说明',
    },
    {
      prop: 'type',
      label: 'Type',
      width: 160
    },
    {
      prop: 'value',
      label: '默认值'
    }
  ]);
  const tableData = ref([
    {
      name: 'type',
      desc: '图标类型， 默认el-icon，1：iconify，2：svg',
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
      value: '-'
    },
    {
      name: 'height',
      desc: '图标高度，适用于iconify和svg',
      type: 'string / number',
      value: '-'
    },
    {
      name: 'size',
      desc: '图标大小，适用于el-icon',
      type: 'string / number',
      value: '-'
    }
  ])
</script>

### 1. [Element Plus Icon](https://element-plus.org/zh-CN/component/icon.html)

<LSIcon name="Notification" color="red" size="20" />
```html
<LSIcon name="Notification" color="red" size="20" />
```

### 2. [iconify](https://icon-sets.iconify.design/?category=General)

<LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />
```html
<LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />
```

### 3. svg

<LSIcon :type="2" :name="svgIcon" width="30" height="30" color="yellow" />
```html
<LSIcon :type="2" :name="svgIcon" width="30" height="30" color="yellow" />
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

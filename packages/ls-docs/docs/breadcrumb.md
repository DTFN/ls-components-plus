---
outline: deep
---

# Breadcrumb 面包屑

::: warning 基于el-breadcrumb二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 根据vue-router自动渲染面包屑， 需要在router数据结构上添加meta配置bcList数据，例如：

```js
[
  {
    path: '/button',
    name: 'Button',
    meta: {
      key: '1',
      title: 'Button 按钮',
      bcList: [
        {
          title: 'Button 按钮',
          name: 'Button',
          link: 'https://www.baidu.com'
        }
      ]
    }
  }
];
```

### 2. 自定义面包屑

<br />

<LSBreadcrumb :define-list="defineBCList" />

```js
import { ref } from 'vue';

const defineBCList = ref([
  {
    title: '产品管理'
  },
  {
    title: '产品详情',
    name: 'Button',
    query: {}
  },
  {
    title: '物模型草稿'
  }
]);
```

```html
<LSBreadcrumb :define-list="defineBCList" />
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 defineList

::: warning 默认路由meta中bcList配置参数与之一致
:::

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

<script setup>
import { ref } from 'vue';
import { tableColumn } from '../constant';

const defineBCList = ref([
  {
    title: '产品管理'
  },
  {
    title: '产品详情',
    name: 'Button',
    query:{}
  },
  {
    title: '物模型草稿'
  }
]);

const tableData = ref([
  {
    name: 'defineList',
    desc: '自定义面包屑数据',
    type: 'array',
    value: '-'
  },
])

const tableData2 = ref([
  {
    name: 'title',
    desc: '面包屑名称',
    type: 'string',
    value: '-'
  },
  {
    name: 'name',
    desc: '跳转的路由名称',
    type: 'string',
    value: '-'
  },
  {
    name: 'query',
    desc: '跳转的路由参数',
    type: 'string',
    value: '-'
  },
  {
    name: 'link',
    desc: '外链地址',
    type: 'string',
    value: '-'
  }
])
</script>

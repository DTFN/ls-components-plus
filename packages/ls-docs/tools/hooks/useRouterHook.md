---
outline: deep
---

# useRouterHook

::: warning vue-router相关公共方法，按各自需求使用。
:::

## 使用方式

```js
import { useRouterHook } from '@lingshugroup/web-plus';

const { route, router, jumpRouteCom, getRouteQuery, getMenusByAuth } = useRouterHook();
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableMethodColumn } from '../../constant';
import { ref } from 'vue';

const tableData = ref([
  {
    name: 'route',
    desc: 'vue-router中的route对象',
    type: 'object',
    value: '-'
  },
  {
    name: 'router',
    desc: 'vue-router中的router对象',
    type: 'object',
    value: '-'
  }
]);

const tableData2 = ref([
  {
    name: 'jumpRouteCom',
    desc: '通用路由跳转，参数：1.routeData 路由跳转参数 2.type 跳转类型 默认为name， 1：path',
    type: 'function',
    value: '-'
  },
  {
    name: 'getRouteQuery',
    desc: '获取路由query参数',
    type: 'function',
    value: 'query'
  },
  {
    name: 'getMenusByAuth',
    desc: '根据权限返回菜单列表，  menuConfigList: 菜单配置列表, routesModule: 路由模块, routePath: 路由路径, permissionList: 权限列表，内部存放code码',
    type: 'function',
    value: 'menus'
  }
])
</script>

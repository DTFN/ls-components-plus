---
outline: deep
---

# useTableListHook

::: warning table加载数据公共方法，按各自需求使用。
:::

## 使用方式

```js
import { useTableListHook } from '@lingshugroup/web-plus/hooks';
import { onMounted, ref } from 'vue';

const {
  loading,
  pageSize,
  pageSizes,
  currentPage,
  tableData,
  total,
  handleCurrentPageChange,
  handleSizeChange,
  handleReset,
  loadData
} = useTableListHook(requestFn, requestParams, noAuto);

// 当前页字段 currentPage
// noAuto 为true时初始不自动加载数据
```

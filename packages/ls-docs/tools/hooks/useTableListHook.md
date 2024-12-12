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
} = useTableListHook(requestFn, requestParams, {
  currentPageProp: 1,
  pageSizeProp: 10,
  isDelayLoader: false,
  delayLoaderTime: 300,
  isFullDose: false,
  hasPanigation: true,
  autoFetch: true
});

// currentPageProp?: number; // 当前页码 默认1
// pageSizeProp?: number; // 每页条数 默认10
// isDelayLoader?: boolean; // 是否使用延迟加载器 默认false
// delayLoaderTime?: number; // 延迟加载时间 默认300
// isFullDose?: boolean; // 是否全量数据 默认false
// hasPanigation?: boolean; // 是否有分页 默认true
// autoFetch?: boolean; // 是否自动获取数据 默认true
// dealData?: Function; // 处理返回数据的方法
// dealParams?: Function; // 处理请求参数的方法
// callbackAfter?: (res: any, data: any) => void | undefined; // 请求完成后的回调
```

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

### 1. Params

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 config

<ApiIntro :tableColumn="tableColumn" :tableData="configTableData" />

### 2. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

### 2. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData3" />


<script setup>
import { tableColumn, tableMethodColumn } from '../../constant';
import { ref } from 'vue';

const tableData = ref([
  {
    name: 'requestFn',
    desc: '接口请求函数',
    type: 'function',
    value: '-'
  },
  {
    name: 'requestParams',
    desc: '接口请求参数',
    type: 'object',
    value: '-'
  },
  {
    name:'config',
    desc:'相关配置',
    type: 'object',
    value: '-'
  }
]);

const configTableData = ref([
  {
    name: 'currentPageProp',
    desc: '当前页码',
    type: 'number',
    value: '1'
  },
  {
    name: 'pageSizeProp',
    desc: '每页条数',
    type: 'number',
    value: '10'
  },
  {
    name:'isDelayLoader',
    desc:'是否使用延迟加载器',
    type: 'boolean',
    value: 'false'
  },
  {
    name:'delayLoaderTime',
    desc:'延迟加载时间(毫秒)',
    type: 'number',
    value: '300'
  },
  {
    name:'isFullDose',
    desc:'是否全量数据',
    type: 'boolean',
    value: 'false'
  },
  {
    name:'hasPanigation',
    desc:'是否有分页',
    type: 'boolean',
    value: 'true'
  },
  {
    name:'autoFetch',
    desc:'是否页面加载时自动获取数据',
    type: 'boolean',
    value: 'true'
  },
  {
    name:'dealData',
    desc:'处理返回数据的方法((res: any) => {total: number,data: any})',
    type: 'Function',
    value: '-'
  },
  {
    name:'dealParams',
    desc:'相关配置((params: any) => any)',
    type: 'Function',
    value: '-'
  },
  {
    name:'callbackAfter',
    desc:'请求完成后的回调((res: any, data: any) => void | undefined)',
    type: 'object',
    value: '-'
  }
]);

const tableData2 = ref([
   {
    name: 'isFirst',
    desc: '是否是首次加载',
    type: 'boolean',
    value: '-'
  },
  {
    name: 'loading',
    desc: '请求接口中',
    type: 'boolean',
    value: '-'
  },
  {
    name: 'pageSize',
    desc: '每页个数',
    type: 'number',
    value: '-'
  },
  {
    name: 'currentPage',
    desc: '当前页',
    type: 'number',
    value: '-'
  },
  {
    name: 'tableData',
    desc: '表格数据',
    type: 'Array',
    value: '-'
  },
  {
    name: 'total',
    desc: '表格数据总数',
    type: 'number',
    value: '-'
  },
]);

const tableData3 = ref([
  {
    name: 'handleCurrentPageChange',
    desc: '切换页数，参数：page(number):切换页数，isFetch(boolean)：是否需要请求接口',
    type: 'function',
    value: '-'
  },
  {
    name: 'handleSizeChange',
    desc: '切换每页显示数量，参数：size(number):显示页数量',
    type: 'function',
    value: '-'
  },
  {
    name: 'handleReset',
    desc: '重置时，当前页设置第一页，然后请求接口',
    type: 'function',
    value: '-'
  },
  {
    name: 'loadData',
    desc: '请求接口函数，参数：showLoading(boolean)：是否显示loading,firstLoad(boolean):是否首次请求',
    type: 'function',
    value: '-'
  },
])
</script>

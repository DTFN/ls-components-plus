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
  errorMsg,
  searchParams,
  selectedRows,
  handleCurrentPageChange,
  handleSizeChange,
  handleReset,
  loadData,
  refresh,
  clearData,
  clearSelectedRows,
  search,
  resetSearch,
  setSearchParams,
  abort
} = useTableListHook(requestFn, requestParams, {
  currentPageProp: 1,
  pageSizeProp: 10,
  pageSizes: [10, 20, 50, 100],
  isDelayLoader: false,
  delayLoaderTime: 300,
  isFullDose: false,
  hasPagination: true,
  autoFetch: true,
  defaultSearchParams: {}
});
```

### 基础配置说明

| 配置项              | 类型       | 默认值            | 说明                       |
| ------------------- | ---------- | ----------------- | -------------------------- |
| currentPageProp     | `number`   | 1                 | 当前页码                   |
| pageSizeProp        | `number`   | 10                | 每页条数                   |
| pageSizes           | `number[]` | [10, 20, 50, 100] | 每页条数选项               |
| isDelayLoader       | `boolean`  | false             | 是否使用延迟加载器         |
| delayLoaderTime     | `number`   | 300               | 延迟加载时间(ms)           |
| isFullDose          | `boolean`  | false             | 是否全量数据（前端分页）   |
| hasPagination       | `boolean`  | true              | 是否有分页                 |
| autoFetch           | `boolean`  | true              | 是否页面加载时自动获取数据 |
| dealData            | `Function` | -                 | 处理返回数据的方法         |
| dealParams          | `Function` | -                 | 处理请求参数的方法         |
| callbackAfter       | `Function` | -                 | 请求完成后的回调           |
| defaultSearchParams | `object`   | {}                | 默认搜索参数               |

### 搜索功能

```js
// 设置搜索参数并搜索
search({ keyword: 'test', status: 1 });

// 仅更新搜索参数，不立即搜索
setSearchParams({ category: 'news' });

// 重置搜索参数并重新加载
resetSearch();
```

### 请求取消

```js
// 取消当前请求
abort();
```

### 数据刷新

```js
// 刷新当前页数据
await refresh();

// 清空列表数据
clearData();
```

### 完整示例

<br />
<ClientOnly>
<div class="demo-list-box">
  <p style="margin:0 0 10px;font-size:13px;color:#909399">LSList 组件示例 - 用户列表管理</p>
  <LSList
    :listApi="demoListApi"
    :formItems="demoFormItems"
    :tableColumn="demoTableColumn"
    :showAdd="false"
    :showForm="false"
    :showTableOperate="true"
    :tableOperateColumn="demoOperateColumn"
    :listHookConfig="demoListHookConfig"
    @tableEditFn="handleDemoEdit"
    @tableDelFn="handleDemoDelete"
  />
</div>
</ClientOnly>

::: details 点我查看完整代码

```vue
<template>
  <LSList
    :listApi="listApi"
    :formItems="formItems"
    :tableColumn="tableColumn"
    :showAdd="false"
    :showForm="false"
    :showTableOperate="true"
    :tableOperateColumn="operateColumn"
    @tableEditFn="handleEdit"
    @tableDelFn="handleDelete"
  />
</template>

<script setup lang="ts">
import { useTableListHook } from '@lingshugroup/web-plus/hooks';

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
} = useTableListHook(
  listApi,
  {},
  {
    currentPageProp: 1,
    pageSizeProp: 10,
    autoFetch: true
  }
);

// 列表 API
async function listApi(params: any) {
  const mockData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `用户${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 2 === 0 ? 1 : 0,
    createTime: new Date().toISOString().split('T')[0]
  }));

  const { currentPage = 1, pageSize = 10 } = params;
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return {
    records: mockData.slice(start, end),
    total: mockData.length
  };
}

// 表单项配置
const formItems = [{ prop: 'name', label: '用户名', component: 'input' }];

// 表格列配置
const tableColumn = [
  { prop: 'id', label: 'ID', width: 80 },
  { prop: 'name', label: '用户名' },
  { prop: 'email', label: '邮箱' },
  { prop: 'status', label: '状态', type: 'tag' },
  { prop: 'createTime', label: '创建时间' }
];

// 操作列配置
const operateColumn = {
  fixed: 'right',
  width: 150,
  buttons: [
    { text: '编辑', type: 'primary', emit: 'tableEditFn' },
    { text: '删除', type: 'danger', emit: 'tableDelFn' }
  ]
};

function handleEdit(row: any) {
  console.log('编辑', row);
}

function handleDelete(row: any) {
  console.log('删除', row);
}
</script>
```

:::

## API

### 1. Params

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 config

<ApiIntro :tableColumn="tableColumn" :tableData="configTableData" />

### 2. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

### 3. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData3" />

### 4. Types

```ts
// 请求函数类型
type RequestFn<T = any> = (params?: any) => Promise<T>;

// 数据处理函数类型
type DealDataFn<T = any> = (res: any) => { data: T[]; total?: number };

// 参数处理函数类型
type DealParamsFn = (params: any) => any;

// 请求完成回调类型
type CallbackAfterFn<T = any> = (res: any, context: { tableData: T[]; total: number }) => void;

// 配置选项接口
interface UseTableListOptions {
  currentPageProp?: number;
  pageSizeProp?: number;
  pageSizes?: number[];
  isDelayLoader?: boolean;
  delayLoaderTime?: number;
  isFullDose?: boolean;
  hasPagination?: boolean;
  autoFetch?: boolean;
  dealData?: DealDataFn;
  dealParams?: DealParamsFn;
  callbackAfter?: CallbackAfterFn;
  defaultSearchParams?: Record<string, any>;
}
```

<script setup>
import { tableColumn, tableMethodColumn } from '../../constant';
import { ref, reactive } from 'vue';

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
    name: 'pageSizes',
    desc: '每页条数选项数组',
    type: 'number[]',
    value: '[10, 20, 50, 100]'
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
    desc:'是否全量数据（前端分页）',
    type: 'boolean',
    value: 'false'
  },
  {
    name:'hasPagination',
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
    desc:'处理返回数据的方法，返回 { data, total }',
    type: 'Function',
    value: '-'
  },
  {
    name:'dealParams',
    desc:'处理请求参数的方法',
    type: 'Function',
    value: '-'
  },
  {
    name:'callbackAfter',
    desc:'请求完成后的回调函数',
    type: 'Function',
    value: '-'
  },
  {
    name:'defaultSearchParams',
    desc:'默认搜索参数对象',
    type: 'object',
    value: '{}'
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
    name: 'pageSizes',
    desc: '每页条数选项数组',
    type: 'number[]',
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
  {
    name: 'errorMsg',
    desc: '错误信息',
    type: 'string',
    value: '-'
  },
  {
    name: 'searchParams',
    desc: '搜索参数对象',
    type: 'object',
    value: '-'
  },
  {
    name: 'selectedRows',
    desc: '选中的行数据',
    type: 'Array',
    value: '-'
  }
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
  {
    name: 'refresh',
    desc: '刷新当前页数据，等同于 loadData()',
    type: 'function',
    value: '-'
  },
  {
    name: 'clearData',
    desc: '清空列表数据、重置总数和错误信息',
    type: 'function',
    value: '-'
  },
  {
    name: 'clearSelectedRows',
    desc: '清空选中的行数据',
    type: 'function',
    value: '-'
  },
  {
    name: 'search',
    desc: '搜索方法，参数：params(object):搜索参数，resetPage(boolean):是否重置页码',
    type: 'function',
    value: '-'
  },
  {
    name: 'resetSearch',
    desc: '重置搜索参数为默认值，并重新加载数据',
    type: 'function',
    value: '-'
  },
  {
    name: 'setSearchParams',
    desc: '设置搜索参数，参数：params(object):搜索参数对象',
    type: 'function',
    value: '-'
  },
  {
    name: 'abort',
    desc: '取消当前正在进行的请求',
    type: 'function',
    value: '-'
  }
]);

const demoCurrentPage = ref(1);
const demoPageSize = ref(10);
const demoTotal = ref(50);

async function demoListApi(params) {
  const mockData = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `用户${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: i % 2 === 0 ? 1 : 0,
    createTime: new Date().toISOString().split('T')[0]
  }));

  const { currentPage = 1, pageSize = 10, name } = params;
  let filteredData = mockData;

  if (name) {
    filteredData = mockData.filter(item => item.name.includes(name));
  }

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  demoCurrentPage.value = currentPage;
  demoPageSize.value = pageSize;
  demoTotal.value = filteredData.length;

  return {
    records: filteredData.slice(start, end),
    total: filteredData.length
  };
}

const demoFormItems = [{ prop: 'name', label: '用户名', component: 'input', placeholder: '请输入用户名' }];

const demoTableColumn = [
  { prop: 'id', label: 'ID', width: 80 },
  { prop: 'name', label: '用户名' },
  { prop: 'email', label: '邮箱' },
  { prop: 'status', label: '状态', type: 'tag' },
  { prop: 'createTime', label: '创建时间' }
];

const demoOperateColumn = {
  fixed: 'right',
  width: 150,
  buttons: [
    { text: '编辑', type: 'primary', emit: 'tableEditFn' },
    { text: '删除', type: 'danger', emit: 'tableDelFn' }
  ]
};

const demoListHookConfig = reactive({
  currentPageProp: 1,
  pageSizeProp: 10,
  pageSizes: [10, 20, 50],
  autoFetch: true
});

function handleRefresh() {
  window.ElMessage.success('刷新成功');
}

function handleReset() {
  window.ElMessage.info('重置搜索条件');
}

function handleSearch() {
  window.ElMessage.success('执行搜索');
}

function handleDemoEdit(row) {
  window.ElMessage.success(`编辑用户: ${row.name}`);
}

function handleDemoDelete(row) {
  window.ElMessage.warning(`删除用户: ${row.name}`);
}
</script>

<style scoped>
.demo-list-box {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 15px;
  margin-top: 10px;
}

.demo-operate {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>

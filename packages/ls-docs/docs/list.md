---
outline: deep
---

# List 列表

::: warning 基于LSForm 和 LSTable 组件组合 加上 useTableListHook 封装的列表组件
:::

## 使用方式

### 1. 基础用法

<br>
<ClientOnly>
<LSList
  :list-api="listApi"
  :form-data="formData"
  :form-items="formItems"
  :table-column="tableColumn_1"
  :show-table-switch="true"
  :show-table-edit="true"
  :disabled-table-del="(row: any) => row.name === '测试1'"
  :disabled-table-switch="(row: any) => row.name === '测试1'"
  :deal-data="dealData"
>
</LSList>
</ClientOnly>

::: details 点我查看代码

```js
const formData = ref({
  name: undefined,
  type: undefined
});

const formItems = [
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  }
];

const tableColumn = [
  {
    label: '名称',
    prop: 'name'
  },
  {
    label: '类型',
    prop: 'type'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  }
];

function listApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        [
          {
            id: 1,
            name: '测试1',
            type: '1',
            createTime: '2022-01-01',
            status: 1
          },
          {
            id: 2,
            name: '测试2',
            type: '1',
            createTime: '2022-01-01',
            status: 0
          }
        ]
      );
    }, 1000);
  });
}

function dealData(res: any) {
  const list = res || [];
  // 如需动态化每行二次提示语，需按以下处理数据：
  // (res || []).map((item: any) => {
    // item.popconfirmTxt = `确定删除该记录：${item.name}？`;
    // return item;
  // })
  return {
    data: list,
    total: list.length
  };
}
```

```html
<LSList
  :list-api="listApi"
  :form-data="formData"
  :form-items="formItems"
  :table-column="tableColumn"
  :show-table-switch="true"
  :show-table-edit="true"
  :disabled-table-del="(row: any) => row.name === '测试1'"
  :disabled-table-switch="(row: any) => row.name === '测试1'"
  :deal-data="dealData"
>
</LSList>
```

:::

## API

### LSList

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

const formData = ref({
  name: undefined,
  type: undefined
});

const formItems = [
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  }
];

const tableColumn_1 = [
  {
    label: '名称',
    prop: 'name'
  },
  {
    label: '类型',
    prop: 'type'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  }
];

function listApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        [
          {
            id: 1,
            name: '测试1',
            type: '1',
            createTime: '2022-01-01',
            status: 1
          },
          {
            id: 2,
            name: '测试2',
            type: '1',
            createTime: '2022-01-01',
            status: 0
          }
        ]
      );
    }, 1000);
  });
}

function dealData(res) {
  const list = res || [];
  return {
    data: list,
    total: list.length
  };
}

// 属性
const attrTableData=[
  {
    name: 'listApi',
    desc: '列表接口请求方法，返回一个Promise',
    type: 'Function',
    value: '-'
  },
  {
    name: 'dealParams',
    desc: '处理列表接口参数，返回参数',
    type: 'Function',
    value: '-'
  },
  {
    name: 'dealData',
    desc: '处理列表返回数据方法,return {data: [], total: 0}，如需每行二次提示语动态化，请再数据返回值增加popconfirmTxt',
    type: 'Function',
    value: '-'
  },
  {
    name: 'listHookConfig',
    desc: '列表请求配置，支持currentPageProp(当前页码)、pageSizeProp(每页条数)、isDelayLoader(是否使用延迟加载器)、delayLoaderTime(延迟加载时间)、isFullDose(是否全量数据)、hasPanigation(是否有分页)、autoFetch(是否自动获取数据)、dealData(处理返回数据的方法)、dealParams(处理请求参数的方法)、callbackAfter(请求完成后的回调)',
    type: 'object',
    value: '{currentPageProp: 1, pageSizeProp: 10, isDelayLoader: false, delayLoaderTime: 300, isFullDose: false, hasPanigation: true, autoFetch: true, dealData?: Function, dealParams?: Function, callbackAfter?: Function}'
  },
  {
    name: 'delApi',
    desc: '删除接口请求方法，返回一个Promise',
    type: 'Function',
    value: '-'
  },
  {
    name: 'dealDelParams',
    desc: '处理删除接口参数，返回参数',
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
    name: 'dealSwitchParams',
    desc: '处理开关接口参数，返回参数',
    type: 'Function',
    value: '-'
  },
  {
    name: 'showForm',
    desc: '是否显示表单',
    type: 'boolean',
    value: 'true' 
  },
  {
    name: 'formClass',
    desc: '表单样式',
    type: 'string',
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
    name: 'queryFn',
    desc: '查询事件（覆盖默认事件）',
    type: 'Function',
    value: '-'
  },
  {
    name: 'tableColumn',
    desc: '表格列数据',
    type: 'array',
    value: '[]'
  },
   {
    name: 'tableRowKey',
    desc: '表格接口相关默认获取值字段',
    type: 'string',
    value: 'id'
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
    name: 'showOperateDivider',
    desc: '操作按钮区域是否显示分割线',
    type: 'boolean',
    value: 'true'
  },
   {
    name: 'operateClass',
    desc: '操作按钮展示区域样式',
    type: 'string',
    value: '-'
  },
  {
    name: 'showAdd',
    desc: '是否显示添加按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'disabledAddBtn',
    desc: '添加按钮是否禁用',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'addBtnText',
    desc: '添加按钮文字',
    type: 'string',
    value: '添加'
  },
  {
    name: 'addBtnAttrs',
    desc: '添加按钮配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'addFn',
    desc: '添加按钮点击事件（覆盖默认事件）',
    type: 'Function',
    value: '-'
  },
  {
    name: 'showTableSwitch',
    desc: '是否显示表格开关切换',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'switchProp',
    desc: '表格开关切换值获取字段名',
    type: 'string',
    value: 'status'
  },
  {
    name: 'tableSwitchColumn',
    desc: '表格开关切换列配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'disabledTableSwitch',
    desc: '表格开关切换是否禁用',
    type: 'boolean/Function',
    value: 'false'
  },
  {
    name: 'showTableOperate',
    desc: '是否显示表格操作列',
    type: 'boolean',
    value: 'true'
  },
   {
    name: 'tableOperateColumn',
    desc: '表格操作列配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'tableDetailFn',
    desc: '表格查看按钮点击事件（覆盖默认事件）',
    type: 'Function',
    value: '-'
  },
   {
    name: 'tableEditFn',
    desc: '表格编辑按钮点击事件（覆盖默认事件）',
    type: 'Function',
    value: '-'
  },
  {
    name: 'showTableDetail',
    desc: '表格查看按钮是否展示',
    type: 'boolean/Function',
    value: 'true'
  },
  {
    name: 'disabledTableDetail',
    desc: '表格查看按钮是否禁用',
    type: 'boolean/Function',
    value: 'false'
  },
  {
    name: 'showTableEdit',
    desc: '表格编辑按钮是否展示',
    type: 'boolean/Function',
    value: 'true'
  },
  {
    name: 'disabledTableEdit',
    desc: '表格编辑按钮是否禁用',
    type: 'boolean/Function',
    value: 'false'
  },
  {
    name: 'showTableDel',
    desc: '表格删按钮是否展示',
    type: 'boolean/Function',
    value: 'true'
  },
  {
    name: 'disabledTableDel',
    desc: '表格删除按钮是否禁用',
    type: 'boolean/Function',
    value: 'false'
  },
  {
    name: 'addRoutePath',
    desc: '添加页面路由地址',
    type: 'string',
    value: '默认: 当前页路由地址/add'
  },
   {
    name: 'detailRoutePath',
    desc: '详情页面路由地址',
    type: 'string',
    value: '默认: 当前页路由地址/detail/:id'
  },
   {
    name: 'editRoutePath',
    desc: '编辑页面路由地址',
    type: 'string',
    value: '默认: 当前页路由地址/edit/:id'
  },
  {
    name: 'tableDetailText',
    desc: '表格查看按钮文案',
    type: 'string',
    value: '查看'
  },
  {
    name: 'tableEditText',
    desc: '表格编辑按钮文案',
    type: 'string',
    value: '编辑'
  },
  {
    name: 'tableDelText',
    desc: '表格删除按钮文案',
    type: 'string',
    value: '删除'
  },
  {
    name: 'showSkeleton',
    desc: '是否显示骨架屏',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'skeletonAttrs',
    desc: '骨架屏配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'popconfirmTxt',
    desc: 'popconfirm提示语',
    type: 'string',
    value: '-'
  }
]

// 事件
const eventsTableData=[
  {
    name: 'submitForm',
    desc: '表单查询事件',
    type: 'Function',
    value: 'object：表单数据'
  },
  {
    name: 'handleLoading',
    desc: '加载中',
    type: 'Function',
    value: 'boolean'
  },
  {
    name: 'handleCurrentPage',
    desc: '当前页',
    type: 'Function',
    value: 'number'
  },
  {
    name: 'handlePageSize',
    desc: '每页条数',
    type: 'Function',
    value: 'number'
  }
]

// 插槽
const slotTableData=[
  {
    name: 'form-append',
    desc: '表单新增后置内容，LSForm组件其它插槽不支持，LSTable插槽支持',
  },
  {
    name: 'operate',
    desc: '页面操作区域自定义内容',
  },
  {
    name: 'operate-prepend',
    desc: '页面操作区域前置添加内容',
  },
  {
    name: 'operate-append',
    desc: '页面操作区域后置添加内容',
  },
  {
    name: 'table-operate-prepend',
    desc: '表格操作列区域前置添加内容,插入内容如有v-if判断用el-space组件包裹',
  },
  {
    name: 'table-operate-append',
    desc: '表格操作列区域后置添加内容，插入内容如有v-if判断用el-space组件包裹',
  },
  {
    name: 'table-append',
    desc: '表格后置新增列区域',
  },
  {
    name: '原插槽名称加上 -form-slot',
    desc: 'LSForm组件插槽',
  },
  {
    name: '原插槽名称加上 -table-slot',
    desc: 'LSTable组件插槽',
  },
]

// Exposes
const exposesTableData=[
  {
    name: 'loadData',
    desc: '表单查询事件',
    type: 'Function',
    value: 'showLoading：是否显示加载，默认true，firstLoad: 是否首次加载,默认false'
  },
  {
    name: 'handleReset',
    desc: '表单重置事件',
    type: 'Function',
    value: '-'
  },
  {
    name: 'setCurrentPage',
    desc: '设置当前页',
    type: 'Function',
    value: 'number'
  },
  {
    name: 'setPageSize',
    desc: '设置每页条数',
    type: 'Function',
    value: 'number'
  },
  {
    name: 'isFirst',
    desc: '是否首次加载',
    type: 'boolean',
    value: '-'
  },
  {
    name: 'loading',
    desc: '加载中',
    type: 'boolean',
    value: '-'
  },
  {
    name: 'currentPage',
    desc: '当前页',
    type: 'number',
    value: '-'
  },
  {
    name: 'pageSize',
    desc: '每页条数',
    type: 'number',
    value: '-'
  },
  {
    name: 'total',
    desc: '表格数据总数量',
    type: 'number',
    value: '-'
  },
  {
    name: 'FormRef',
    desc: '表单组件实例',
    type: 'Ref',
    value: '-'
  },
  {
    name: 'TableRef',
    desc: '表格组件实例',
    type: 'Ref',
    value: '-'
  }
]
</script>

<style>
</style>

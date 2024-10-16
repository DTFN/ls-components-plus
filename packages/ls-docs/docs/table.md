---
outline: deep
---

# Table 表格

::: warning 基于el-table二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 基础表格

<br>
<LSTable
  :show-pagination="false"
  :table-column="column_1"
  :table-data="data_1"
>
  <template #tag="{ row, index }">
    <el-tag :type="row.status">
      {{ index }}
    </el-tag>
  </template>
  <template #tag-header="{ column }">
    <div>
      <LSIcon name="CollectionTag" color="#409EFF" size="20" />
      {{ column.label }}
    </div>
  </template>
</LSTable>

::: details 点我查看代码

```js
const column_1 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '地址',
    prop: 'address'
  },
  {
    label: '日期',
    prop: 'date',
    minWidth: 200,
    type: 'date',
    dateTemplate: 'YYYY年MM月DD日 HH时mm分ss秒'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'status',
    value: {
      primary: {
        type: 'primary',
        label: '默认'
      },
      success: {
        type: 'success',
        label: '成功'
      },
      info: {
        type: 'info',
        label: '提示'
      },
      warning: {
        type: 'warning',
        label: '警告'
      },
      danger: {
        type: 'danger',
        label: '失败'
      }
    }
  },
  {
    label: '积分',
    prop: 'value',
    type: 'number'
  },
  {
    label: '标签',
    prop: 'tag',
    type: 'slot',
    headerSlot: true
  }
];

const data_1 = [
  {
    name: '张三',
    address: '上海市',
    date: '2024-10-16 10:28:11',
    status: 'primary',
    value: 100
  },
  {
    name: '李四',
    address: '北京市',
    date: '2024-10-16 10:28:11',
    status: 'success',
    value: 100
  },
  {
    name: '王五',
    address: '深圳市',
    date: '2024-10-16 10:28:11',
    status: 'info',
    value: 88
  },
  {
    name: '赵六',
    address: '广州市',
    date: '2024-10-16 10:28:11',
    status: 'warning',
    value: 80
  },
  {
    name: '刘七',
    address: '成都市',
    date: '2024-10-16 10:28:11',
    status: 'danger',
    value: -10
  }
];
```

```html
<LSTable :show-pagination="false" :table-column="column_1" :table-data="data_1">
  <template #tag="{ row, index }">
    <el-tag :type="row.status"> {{ index }} </el-tag>
  </template>
  <template #tag-header="{ column }">
    <div>
      <LSIcon name="CollectionTag" color="#409EFF" size="20" />
      {{ column.label }}
    </div>
  </template>
</LSTable>
```

:::

### 2. 单选表格

<br/>
<LSTable
  v-model:current-page="currentPage"
  v-model:page-size="pageSize"
  :show-radio="true"
  :table-column="column_2"
  :table-data="data_2"
  :total="total"
  :current-row="currentRow"
  @current-change="handleCurrentChange"
>
</LSTable>

:::details 点我查看代码

```js
function getData() {
  let list = [];
  for (let i = 0; i < 100; i++) {
    list.push({
      id: i,
      code1: '字段1----' + i,
      code2: '字段2----' + i,
      code3: '字段3----' + i
    });
  }
  return list;
}
const data = ref(getData());
const column_2 = [
  {
    label: '字段1',
    prop: 'code1'
  },
  {
    label: '字段2',
    prop: 'code2'
  },
  {
    label: '字段3',
    prop: 'code3'
  }
];
const currentPage = ref(1);
const pageSize = ref(10);
const total = data.value.length;
const data_2 = computed(() => data.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value));
const currentRow = ref(null);

function handleCurrentChange(row) {
  if (row) {
    currentRow.value = row;
  }
}
```

```html
<LSTable
  v-model:current-page="currentPage"
  v-model:page-size="pageSize"
  :show-radio="true"
  :table-column="column_2"
  :table-data="data_2"
  :total="total"
  :current-row="currentRow"
  @current-change="handleCurrentChange"
>
</LSTable>
```

:::

### 3. 多选表格

<br/>
<LSTable
  v-model:current-page="currentPage_1"
  v-model:page-size="pageSize_1"
  v-model:selection="selection"
  :show-select="true"
  :table-column="column_2"
  :table-data="data_3"
  :total="total"
  >
</LSTable>
  
:::details 点我查看代码

```js
function getData() {
  let list = [];
  for (let i = 0; i < 100; i++) {
    list.push({
      id: i,
      code1: '字段1----' + i,
      code2: '字段2----' + i,
      code3: '字段3----' + i
    });
  }
  return list;
}
const data = ref(getData());
const column_2 = [
  {
    label: '字段1',
    prop: 'code1'
  },
  {
    label: '字段2',
    prop: 'code2'
  },
  {
    label: '字段3',
    prop: 'code3'
  }
];
const currentPage_1 = ref(1);
const pageSize_1 = ref(10);
const data_3 = computed(() =>
  data.value.slice((currentPage_1.value - 1) * pageSize_1.value, currentPage_1.value * pageSize_1.value)
);
const selection = ref([
  {
    id: 2,
    code1: '字段1----2',
    code2: '字段2----2',
    code3: '字段3----2'
  }
]);
```

```html
<LSTable
  v-model:current-page="currentPage_1"
  v-model:page-size="pageSize_1"
  v-model:selection="selection"
  :show-select="true"
  :table-column="column_2"
  :table-data="data_3"
  :total="total"
>
</LSTable>
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn"  :tableData="attrTableData" />

#### 1.1 TableColumn

<ApiIntro :tableColumn="tableColumn"  :tableData="columnTableData" />

### 2. Events

<ApiIntro :tableColumn="tableMethodColumn"  :tableData="eventsTableData" />

### 3. Slots

<ApiIntro :tableColumn="tableSlotColumn"  :tableData="slotTableData" />

### 4. Exposes

<ApiIntro :tableColumn="tableExposesColumn"  :tableData="exposesTableData" />

<script setup>
import { ElTag } from 'element-plus';
import { tableColumn,tableMethodColumn,tableSlotColumn,tableExposesColumn } from '../constant';
import { ref, computed } from 'vue';

// 示例1
const column_1=[
  {
    label:'姓名',
    prop:'name'
  },
  {
    label:'地址',
    prop:'address'
  },
  {
    label:'日期',
    prop:'date',
    minWidth:200,
    type:'date',
    dateTemplate:'YYYY年MM月DD日 HH时mm分ss秒'
  },
  {
    label:'状态',
    prop:'status',
    type:'status',
    value:{
      primary:{
        type:'primary',
        label:'默认'
      },
      success:{
        type:'success',
        label:'成功'
      },
      info:{
        type:'info',
        label:'提示'
      },
      warning:{
        type:'warning',
        label:'警告'
      },
      danger:{
        type:'danger',
        label:'失败'
      }
    }
  },
  {
   label:'积分',
   prop:'value',
   type:'number'
  },
  {
    label:'标签',
    prop:'tag',
    type:'slot',
    headerSlot:true
  }
]

const data_1=[
  {
    name:'张三',
    address:'上海市',
    date:'2024-10-16 10:28:11',
    status:'primary',
    value:100
  },
  {
    name:'李四',
    address:'北京市',
    date:'2024-10-16 10:28:11',
    status:'success',
    value:100
  },
  {
    name:'王五',
    address:'深圳市',
    date:'2024-10-16 10:28:11',
    status:'info',
    value:88
  },
  {
    name:'赵六',
    address:'广州市',
    date:'2024-10-16 10:28:11',
    status:'warning',
    value:80
  },
  {
    name:'刘七',
    address:'成都市',
    date:'2024-10-16 10:28:11',
    status:'danger',
    value:-10
  }
]

// 示例2
function getData() {
  let list = [];
  for (let i = 0; i < 100; i++) {
    list.push({
      id: i,
      code1: '字段1----' + i,
      code2: '字段2----' + i,
      code3: '字段3----' + i
    });
  }
  return list;
}
const data = ref(getData());

const column_2=[
  {
    label: '字段1',
    prop: 'code1'
  },
  {
    label: '字段2',
    prop: 'code2',
  },
  {
    label: '字段3',
    prop: 'code3',
  }
]

const currentPage = ref(1);
const pageSize = ref(10);
const total = data.value.length;
const data_2 = computed(() => data.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value));
const currentRow = ref(null);

function handleCurrentChange(row) {
  if (row) {
    currentRow.value = row;
  }
}

const currentPage_1 = ref(1);
const pageSize_1 = ref(10);
const data_3 = computed(() => data.value.slice((currentPage_1.value - 1) * pageSize_1.value, currentPage_1.value * pageSize_1.value));
const selection = ref([
  {
    id: 2,
    code1: '字段1----2',
    code2: '字段2----2',
    code3: '字段3----2'
  }
]);

// 属性
const attrTableData=[
  {
    name: 'tableColumn',
    desc: '列数据',
    type: 'array',
    value: '[]'
  },
  {
    name: 'tableData',
    desc: '表数据',
    type: 'array',
    value: '[]'
  },
  {
    name: 'loading',
    desc: '加载',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'showPagination',
    desc: '是否展示分页',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'paginationClass',
    desc: '分页控件的className',
    type: 'string',
    value: '-'
  },
  {
    name: 'total',
    desc: '总页数',
    type: 'number',
    value: '0'
  },
  {
    name: 'currentPage/v-model:current-page',
    desc: '当前页数',
    type: 'number',
    value: '1'
  },
  {
    name: 'pageSize/v-model:page-size',
    desc: '每页显示条目个数',
    type: 'number',
    value: '10'
  },
  {
    name: 'pageSizes',
    desc: '每页显示个数选择器的选项设置',
    type: 'array',
    value: '[10, 20, 30, 40, 50, 100]'
  },
  {
    name: 'paginationOptions',
    desc: '分页控件其余的配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'showTableIndex',
    desc: '否展示 Index',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'tableIndexfixed',
    desc: 'Index 是否固定左边',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'tableIndexLabel',
    desc: 'Index 显示的标题',
    type: 'string',
    value: '序号'
  },
  {
    name: 'indexColumnOptions',
    desc: 'Index Column 其余的配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'showRadio',
    desc: '是否单选',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'radioColumnOptions',
    desc: '单选 Column 其余的配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'showRadioLabel',
    desc: '是否展示单选的标题',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'radioProp',
    desc: '单选对应值的字段名',
    type: 'string',
    value: 'id'
  },
  {
    name: 'currentRow',
    desc: '单选选中的当前列',
    type: 'object',
    value: '-'
  },
  {
    name: 'showSelect',
    desc: '是否多选',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'selectColumnOptions',
    desc: '多选 Column 其余的配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'selection/v-model:selection',
    desc: '多选选中的列数据',
    type: 'array',
    value: '[]'
  },
  {
    name: 'showExpand',
    desc: '是否展示展开行',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'expandColumnOptions',
    desc: '展开行 Column 其余的配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'showEmpty',
    desc: '是否显示空状态',
    type: 'boolean',
    value: 'true'
  },
]

// column数据
const columnTableData=[
  {
    name: 'type',
    desc: '列数据内容展示类型',
    type: 'date/status/number/slot',
    value: '-'
  },
  {
    name: 'dateTemplate',
    desc: 'type 为 date 时，日期格式化',
    type: 'string',
    value: 'YYYY-MM-DD HH:mm:ss'
  },
  {
    name: 'value',
    desc: `type 为 value 时，{[key]: {type:['','success','warning','info','primary','danger'],label:'展示文字内容'},default:{label:'默认展示文字内容'}}`,
    type: 'object',
    value: '-'
  },
  {
    name: 'isSuc',
    desc: 'type 为 number 时，> 0 是否展示 success  状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'headerSlot',
    desc: '是否使用自定义表头插槽，slotName: [prop]-header',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'filterIconSlot',
    desc: '是否使用自定义 filter 图标插槽，slotName: [prop]-filter-icon',
    type: 'boolean',
    value: 'false'
  },
]

// 事件
const eventsTableData=[
  {
    name: 'size-change',
    desc: 'page-size 改变时触发',
    type: 'Function',
    value: 'number'
  },
  {
    name: 'current-page-change',
    desc: 'current-page 改变时触发',
    type: 'Function',
    value: 'number'
  }
]

// 插槽
const slotTableData=[
  {
    name: 'default',
    desc: '后置自定义内容',
  },
  {
    name: 'prepend',
    desc: '前置自定义内容',
  },
  {
    name: 'append',
    desc: '插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。',
  },
  {
    name: 'empty',
    desc: '当数据为空时自定义的内容',
  }
]

// Exposes
const exposesTableData=[
  {
    name: 'TableRef',
    desc: 'el-table 组件的实例',
    type: '-',
    value: '-'
  }
]
</script>

<style>
.vp-doc ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.vp-doc li + li{
  margin-top: 0;
}
</style>

---
outline: deep
---

# Table 表格

::: warning 基于el-table二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 基础表格

<br>
<ClientOnly>
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
</ClientOnly>

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
<ClientOnly>
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
</ClientOnly>

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
<ClientOnly>
<LSTable
  v-model:current-page="currentPage_1"
  v-model:page-size="pageSize_1"
  v-model:selection="selection"
  :show-select="true"
  :table-column="column_2"
  :table-data="data_3"
  :total="total"
  :select-column-options="selectColumnOptions"
  >
</LSTable>
</ClientOnly>
  
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
  :select-column-options="{
    reserveSelection: true
  }"
>
</LSTable>
```

:::

### 4. 带分页的表格

<ClientOnly>
<LSTable
  v-model:current-page="currentPage4"
  v-model:page-size="pageSize4"
  :table-column="column_4"
  :table-data="data_4"
  :total="total4"
  :page-sizes="[5, 10, 20, 50]"
  :pagination-options="{ layout: 'total, sizes, prev, pager, next, jumper' }"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
function getData4() {
  let list = [];
  for (let i = 0; i < 50; i++) {
    list.push({
      id: i,
      name: '用户' + i,
      age: 18 + i % 20,
      address: '地址' + i
    });
  }
  return list;
}
const data4 = ref(getData4());
const column_4 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];
const currentPage4 = ref(1);
const pageSize4 = ref(10);
const total4 = data4.value.length;
const data_4 = computed(() => data4.value.slice((currentPage4.value - 1) * pageSize4.value, currentPage4.value * pageSize4.value));
```

```html
<LSTable
  v-model:current-page="currentPage4"
  v-model:page-size="pageSize4"
  :table-column="column_4"
  :table-data="data_4"
  :total="total4"
  :page-sizes="[5, 10, 20, 50]"
  :pagination-options="{ layout: 'total, sizes, prev, pager, next, jumper' }"
>
</LSTable>
```

:::

### 5. 带排序的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_5"
  :table-data="data_5"
  @sort-change="handleSortChange"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_5 = ref([
  { name: '张三', age: 25, score: 88 },
  { name: '李四', age: 30, score: 95 },
  { name: '王五', age: 22, score: 76 },
  { name: '赵六', age: 28, score: 92 },
  { name: '刘七', age: 35, score: 84 }
]);

const column_5 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age',
    sortable: true
  },
  {
    label: '分数',
    prop: 'score',
    sortable: true,
    type: 'number'
  }
];

function handleSortChange({ column, prop, order }) {
  console.log('排序变化:', { column, prop, order });
  // 这里可以根据排序字段和顺序对数据进行排序
  if (prop && order) {
    data_5.value.sort((a, b) => {
      if (order === 'ascending') {
        return a[prop] > b[prop] ? 1 : -1;
      } else {
        return a[prop] < b[prop] ? 1 : -1;
      }
    });
  }
}
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_5"
  :table-data="data_5"
  @sort-change="handleSortChange"
>
</LSTable>
```

:::

### 6. 带筛选的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_6"
  :table-data="data_6"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_6 = ref([
  { name: '张三', age: 25, gender: '男', department: '技术部' },
  { name: '李四', age: 30, gender: '女', department: '市场部' },
  { name: '王五', age: 22, gender: '男', department: '技术部' },
  { name: '赵六', age: 28, gender: '女', department: '财务部' },
  { name: '刘七', age: 35, gender: '男', department: '技术部' }
]);

const column_6 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '性别',
    prop: 'gender',
    filters: [
      { text: '男', value: '男' },
      { text: '女', value: '女' }
    ],
    filterMultiple: false,
    filterMethod: (value, row) => row.gender === value
  },
  {
    label: '部门',
    prop: 'department',
    filters: [
      { text: '技术部', value: '技术部' },
      { text: '市场部', value: '市场部' },
      { text: '财务部', value: '财务部' }
    ],
    filterMethod: (value, row) => row.department === value
  }
];
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_6"
  :table-data="data_6"
>
</LSTable>
```

:::

### 7. 带展开行的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :show-expand="true"
  :table-column="column_7"
  :table-data="data_7"
>
  <template #default="{ row }">1231231231
    <div>
      <h4>详细信息</h4>
      <p>姓名: {{ row }}</p>
    </div>
  </template>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_7 = ref([
  {
    name: '张三',
    age: 25,
    address: '上海市浦东新区',
    email: 'zhangsan@example.com'
  },
  {
    name: '李四',
    age: 30,
    address: '北京市朝阳区',
    email: 'lisi@example.com'
  },
  {
    name: '王五',
    age: 22,
    address: '深圳市南山区',
    email: 'wangwu@example.com'
  }
]);

const column_7 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];
```

```html
<LSTable
  :show-pagination="false"
  :show-expand="true"
  :table-column="column_7"
  :table-data="data_7"
>
  <template #default="{ row }">
    <div>
      <h4>详细信息</h4>
      <p>姓名: {{ row.name }}</p>
      <p>年龄: {{ row.age }}</p>
      <p>地址: {{ row.address }}</p>
      <p>邮箱: {{ row.email }}</p>
    </div>
  </template>
</LSTable>
```

:::

### 8. 带合计行的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_8"
  :table-data="data_8"
  show-summary
  :summary-method="getSummaries"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_8 = ref([
  { name: '商品1', price: 100, quantity: 2, amount: 200 },
  { name: '商品2', price: 50, quantity: 5, amount: 250 },
  { name: '商品3', price: 80, quantity: 3, amount: 240 },
  { name: '商品4', price: 120, quantity: 1, amount: 120 }
]);

const column_8 = [
  {
    label: '商品名称',
    prop: 'name'
  },
  {
    label: '单价',
    prop: 'price',
    type: 'number'
  },
  {
    label: '数量',
    prop: 'quantity',
    type: 'number'
  },
  {
    label: '金额',
    prop: 'amount',
    type: 'number'
  }
];

function getSummaries(param) {
  const { columns, data } = param;
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计';
      return;
    }
    const values = data.map(item => Number(item[column.property]));
    const validValues = values.filter(value => !isNaN(value));
    if (validValues.length) {
      sums[index] = validValues.reduce((prev, curr) => {
        const value = Number(curr);
        if (!isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0);
      sums[index] += ' 元';
    } else {
      sums[index] = '';
    }
  });
  return sums;
}
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_8"
  :table-data="data_8"
  show-summary
  :summary-method="getSummaries"
>
</LSTable>
```

:::

### 9. 带固定列的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_9"
  :table-data="data_9"
  style="width: 100%"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_9 = ref([
  {
    id: 1,
    name: '张三',
    age: 25,
    address: '上海市浦东新区',
    email: 'zhangsan@example.com',
    phone: '13800138000',
    department: '技术部',
    position: '前端工程师',
    salary: 15000
  },
  {
    id: 2,
    name: '李四',
    age: 30,
    address: '北京市朝阳区',
    email: 'lisi@example.com',
    phone: '13900139000',
    department: '市场部',
    position: '市场经理',
    salary: 12000
  },
  {
    id: 3,
    name: '王五',
    age: 22,
    address: '深圳市南山区',
    email: 'wangwu@example.com',
    phone: '13700137000',
    department: '技术部',
    position: '后端工程师',
    salary: 16000
  }
]);

const column_9 = [
  {
    label: 'ID',
    prop: 'id',
    width: 80,
    fixed: 'left'
  },
  {
    label: '姓名',
    prop: 'name',
    width: 120,
    fixed: 'left'
  },
  {
    label: '年龄',
    prop: 'age',
    width: 80
  },
  {
    label: '地址',
    prop: 'address',
    minWidth: 200
  },
  {
    label: '邮箱',
    prop: 'email',
    minWidth: 200
  },
  {
    label: '电话',
    prop: 'phone',
    width: 150
  },
  {
    label: '部门',
    prop: 'department',
    width: 120
  },
  {
    label: '职位',
    prop: 'position',
    width: 150
  },
  {
    label: '薪资',
    prop: 'salary',
    width: 100,
    type: 'number',
    fixed: 'right'
  }
];
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_9"
  :table-data="data_9"
  style="width: 100%"
>
</LSTable>
```

:::

### 10. 响应式表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_10"
  :table-data="data_10"
  :table-attrs="{ border: true }"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_10 = ref([
  { name: '张三', age: 25, gender: '男', address: '上海市' },
  { name: '李四', age: 30, gender: '女', address: '北京市' },
  { name: '王五', age: 22, gender: '男', address: '深圳市' }
]);

const column_10 = [
  {
    label: '姓名',
    prop: 'name',
    responsive: ['xs', 'sm', 'md', 'lg', 'xl']
  },
  {
    label: '年龄',
    prop: 'age',
    responsive: ['sm', 'md', 'lg', 'xl']
  },
  {
    label: '性别',
    prop: 'gender',
    responsive: ['md', 'lg', 'xl']
  },
  {
    label: '地址',
    prop: 'address',
    responsive: ['lg', 'xl']
  }
];
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_10"
  :table-data="data_10"
  :table-attrs="{ border: true }"
>
</LSTable>
```

:::

### 11. 自定义列模板的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_11"
  :table-data="data_11"
>
  <template #action="{ row }">
    <el-space size="small">
      <el-button type="primary" size="small" link>查看</el-button>
      <el-button type="warning" size="small" link>编辑</el-button>
      <el-button type="danger" size="small" link>删除</el-button>
    </el-space>
  </template>
  <template #status="{ row }">
    <el-switch v-model="row.status" active-text="启用" inactive-text="禁用" />
  </template>
  <template #avatar="{ row }">
    <el-avatar :size="40">
      {{ row.name.charAt(0) }}
    </el-avatar>
  </template>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_11 = ref([
  { id: 1, name: '张三', status: true },
  { id: 2, name: '李四', status: false },
  { id: 3, name: '王五', status: true }
]);

const column_11 = [
  {
    label: '头像',
    prop: 'avatar',
    type: 'slot',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'slot',
    width: 120
  },
  {
    label: '操作',
    prop: 'action',
    type: 'slot',
    width: 180
  }
];
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_11"
  :table-data="data_11"
>
  <template #action="{ row }">
    <el-space size="small">
      <el-button type="primary" size="small" link>查看</el-button>
      <el-button type="warning" size="small" link>编辑</el-button>
      <el-button type="danger" size="small" link>删除</el-button>
    </el-space>
  </template>
  <template #status="{ row }">
    <el-switch v-model="row.status" active-text="启用" inactive-text="禁用" />
  </template>
  <template #avatar="{ row }">
    <el-avatar :size="40">
      {{ row.name.charAt(0) }}
    </el-avatar>
  </template>
</LSTable>
```

:::

### 12. 带加载状态的表格

<ClientOnly>
<LSTable
  :loading="loading"
  :show-pagination="false"
  :table-column="column_12"
  :table-data="data_12"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const loading = ref(true);
const data_12 = ref([
  { name: '张三', age: 25, address: '上海市' },
  { name: '李四', age: 30, address: '北京市' },
  { name: '王五', age: 22, address: '深圳市' }
]);

const column_12 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

// 模拟加载数据
setTimeout(() => {
  loading.value = false;
}, 2000);
```

```html
<LSTable
  :loading="loading"
  :show-pagination="false"
  :table-column="column_12"
  :table-data="data_12"
>
</LSTable>
```

:::

### 13. 带自定义空状态的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_13"
  :table-data="data_13"
  :empty-label="'暂无用户数据，请添加'"
>
  <template #empty>
    <div style="text-align: center; padding: 40px 0;">
      <el-icon style="font-size: 48px; color: #909399;">
        <UserFilled />
      </el-icon>
      <p style="margin-top: 16px; color: #909399;">暂无用户数据</p>
      <el-button type="primary" style="margin-top: 16px;">添加用户</el-button>
    </div>
  </template>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
import { UserFilled } from '@element-plus/icons-vue';

const data_13 = ref([]);

const column_13 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_13"
  :table-data="data_13"
  :empty-label="'暂无用户数据，请添加'"
>
  <template #empty>
    <div style="text-align: center; padding: 40px 0;">
      <el-icon style="font-size: 48px; color: #909399;">
        <UserFilled />
      </el-icon>
      <p style="margin-top: 16px; color: #909399;">暂无用户数据</p>
      <el-button type="primary" style="margin-top: 16px;">添加用户</el-button>
    </div>
  </template>
</LSTable>
```

:::

### 14. 带行样式和单元格样式的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_14"
  :table-data="data_14"
  :row-class-name="rowClassName"
  :cell-class-name="cellClassName"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_14 = ref([
  { name: '张三', age: 25, score: 88 },
  { name: '李四', age: 30, score: 95 },
  { name: '王五', age: 22, score: 76 },
  { name: '赵六', age: 28, score: 65 }
]);

const column_14 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '分数',
    prop: 'score',
    type: 'number'
  }
];

function rowClassName({ row, rowIndex }) {
  return row.score < 70 ? 'row-low-score' : '';
}

function cellClassName({ row, column, rowIndex, columnIndex }) {
  if (column.prop === 'score') {
    return row.score >= 90 ? 'cell-high-score' : row.score < 70 ? 'cell-low-score' : '';
  }
  return '';
}
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_14"
  :table-data="data_14"
  :row-class-name="rowClassName"
  :cell-class-name="cellClassName"
>
</LSTable>

<style scoped>
.row-low-score {
  background-color: #fef0f0;
}
.cell-high-score {
  color: #67c23a;
  font-weight: bold;
}
.cell-low-score {
  color: #f56c6c;
  font-weight: bold;
}
</style>
```

:::

### 15. 带合并单元格的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_15"
  :table-data="data_15"
  :span-method="arraySpanMethod"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_15 = ref([
  { id: 1, name: '张三', department: '技术部', position: '前端工程师' },
  { id: 2, name: '李四', department: '技术部', position: '后端工程师' },
  { id: 3, name: '王五', department: '技术部', position: '测试工程师' },
  { id: 4, name: '赵六', department: '市场部', position: '市场经理' },
  { id: 5, name: '刘七', department: '市场部', position: '销售顾问' }
]);

const column_15 = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '部门',
    prop: 'department'
  },
  {
    label: '职位',
    prop: 'position'
  }
];

function arraySpanMethod({ row, column, rowIndex, columnIndex }) {
  if (columnIndex === 2) {
    if (rowIndex === 0 || rowIndex === 1 || rowIndex === 2) {
      return [3, 1];
    } else if (rowIndex === 3 || rowIndex === 4) {
      return [2, 1];
    }
  }
}
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_15"
  :table-data="data_15"
  :span-method="arraySpanMethod"
>
</LSTable>
```

:::

### 16. 带行点击事件的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_16"
  :table-data="data_16"
  @row-click="handleRowClick"
  @row-dblclick="handleRowDblClick"
  :row-style="{ cursor: 'pointer' }"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_16 = ref([
  { id: 1, name: '张三', age: 25, address: '上海市' },
  { id: 2, name: '李四', age: 30, address: '北京市' },
  { id: 3, name: '王五', age: 22, address: '深圳市' }
]);

const column_16 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

function handleRowClick(row, column, event) {
  console.log('行点击:', row);
  alert(`点击了 ${row.name} 的行`);
}

function handleRowDblClick(row, column, event) {
  console.log('行双击:', row);
  alert(`双击了 ${row.name} 的行`);
}
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_16"
  :table-data="data_16"
  @row-click="handleRowClick"
  @row-dblclick="handleRowDblClick"
  :row-style="{ cursor: 'pointer' }"
>
</LSTable>
```

:::

### 17. 带表头分组的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_17"
  :table-data="data_17"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_17 = ref([
  {
    name: '张三',
    personal: { age: 25, gender: '男' },
    contact: { email: 'zhangsan@example.com', phone: '13800138000' }
  },
  {
    name: '李四',
    personal: { age: 30, gender: '女' },
    contact: { email: 'lisi@example.com', phone: '13900139000' }
  }
]);

const column_17 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '个人信息',
    children: [
      {
        label: '年龄',
        prop: 'personal.age'
      },
      {
        label: '性别',
        prop: 'personal.gender'
      }
    ]
  },
  {
    label: '联系方式',
    children: [
      {
        label: '邮箱',
        prop: 'contact.email'
      },
      {
        label: '电话',
        prop: 'contact.phone'
      }
    ]
  }
];
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_17"
  :table-data="data_17"
>
</LSTable>
```

:::

### 18. 带固定表头的表格

<ClientOnly>
<div style="height: 300px; overflow: auto;">
  <LSTable
    :show-pagination="false"
    :table-column="column_18"
    :table-data="data_18"
    :max-height="300"
  >
  </LSTable>
</div>
</ClientOnly>

:::details 点我查看代码

```js
const data_18 = ref([]);
for (let i = 0; i < 20; i++) {
  data_18.value.push({
    id: i + 1,
    name: '用户' + (i + 1),
    age: 18 + i % 20,
    address: '地址' + (i + 1)
  });
}

const column_18 = [
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name',
    width: 120
  },
  {
    label: '年龄',
    prop: 'age',
    width: 80
  },
  {
    label: '地址',
    prop: 'address',
    minWidth: 200
  }
];
```

```html
<div style="height: 300px; overflow: auto;">
  <LSTable
    :show-pagination="false"
    :table-column="column_18"
    :table-data="data_18"
    :max-height="300"
  >
  </LSTable>
</div>
```

:::

### 19. 带表格属性配置的表格

<ClientOnly>
<LSTable
  :show-pagination="false"
  :table-column="column_19"
  :table-data="data_19"
  :table-attrs="tableAttrs"
>
</LSTable>
</ClientOnly>

:::details 点我查看代码

```js
const data_19 = ref([
  { id: 1, name: '张三', age: 25, address: '上海市' },
  { id: 2, name: '李四', age: 30, address: '北京市' },
  { id: 3, name: '王五', age: 22, address: '深圳市' }
]);

const column_19 = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

const tableAttrs = ref({
  border: true,
  stripe: true,
  highlightCurrentRow: true,
  showHeader: true,
  tableLayout: 'fixed'
});
```

```html
<LSTable
  :show-pagination="false"
  :table-column="column_19"
  :table-data="data_19"
  :table-attrs="tableAttrs"
>
</LSTable>
```

:::

### 20. 带导出功能的表格

<ClientOnly>
<el-card shadow="hover">
  <template #header>
    <div class="card-header">
      <span>用户列表</span>
      <el-button type="primary" @click="handleExport">导出数据</el-button>
    </div>
  </template>
  <LSTable
    ref="tableRef"
    :show-pagination="false"
    :table-column="column_20"
    :table-data="data_20"
  >
  </LSTable>
</el-card>
</ClientOnly>

:::details 点我查看代码

```js
const tableRef = ref(null);
const data_20 = ref([
  { id: 1, name: '张三', age: 25, address: '上海市' },
  { id: 2, name: '李四', age: 30, address: '北京市' },
  { id: 3, name: '王五', age: 22, address: '深圳市' }
]);

const column_20 = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

function handleExport() {
  // 这里可以实现导出逻辑
  console.log('导出数据:', data_20.value);
  alert('导出功能已触发');
  // 实际项目中可以使用 xlsx 库等实现导出
}
```

```html
<el-card shadow="hover">
  <template #header>
    <div class="card-header">
      <span>用户列表</span>
      <el-button type="primary" @click="handleExport">导出数据</el-button>
    </div>
  </template>
  <LSTable
    ref="tableRef"
    :show-pagination="false"
    :table-column="column_20"
    :table-data="data_20"
  >
  </LSTable>
</el-card>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
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
import { ElTag, ElButton, ElSpace, ElSwitch, ElAvatar, ElIcon, ElCard } from 'element-plus';
import { UserFilled } from '@element-plus/icons-vue';
import { tableColumn,tableMethodColumn,tableSlotColumn,tableExposesColumn } from '../constant';
import { ref, computed, watch} from 'vue';

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
    date:'',
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
const selectColumnOptions={
  reserveSelection:true
}

watch(
  () => selection.value,
  newVal => {
    console.log('watch---选中数据', newVal);
  }
);

// 示例4：带分页的表格
function getData4() {
  let list = [];
  for (let i = 0; i < 50; i++) {
    list.push({
      id: i,
      name: '用户' + i,
      age: 18 + i % 20,
      address: '地址' + i
    });
  }
  return list;
}
const data4 = ref(getData4());
const column_4 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];
const currentPage4 = ref(1);
const pageSize4 = ref(10);
const total4 = data4.value.length;
const data_4 = computed(() => data4.value.slice((currentPage4.value - 1) * pageSize4.value, currentPage4.value * pageSize4.value));

// 示例5：带排序的表格
const data_5 = ref([
  { name: '张三', age: 25, score: 88 },
  { name: '李四', age: 30, score: 95 },
  { name: '王五', age: 22, score: 76 },
  { name: '赵六', age: 28, score: 92 },
  { name: '刘七', age: 35, score: 84 }
]);

const column_5 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age',
    sortable: true
  },
  {
    label: '分数',
    prop: 'score',
    sortable: true,
    type: 'number'
  }
];

function handleSortChange({ column, prop, order }) {
  console.log('排序变化:', { column, prop, order });
  if (prop && order) {
    data_5.value.sort((a, b) => {
      if (order === 'ascending') {
        return a[prop] > b[prop] ? 1 : -1;
      } else {
        return a[prop] < b[prop] ? 1 : -1;
      }
    });
  }
}

// 示例6：带筛选的表格
const data_6 = ref([
  { name: '张三', age: 25, gender: '男', department: '技术部' },
  { name: '李四', age: 30, gender: '女', department: '市场部' },
  { name: '王五', age: 22, gender: '男', department: '技术部' },
  { name: '赵六', age: 28, gender: '女', department: '财务部' },
  { name: '刘七', age: 35, gender: '男', department: '技术部' }
]);

const column_6 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '性别',
    prop: 'gender',
    filters: [
      { text: '男', value: '男' },
      { text: '女', value: '女' }
    ],
    filterMultiple: false,
    filterMethod: (value, row) => row.gender === value
  },
  {
    label: '部门',
    prop: 'department',
    filters: [
      { text: '技术部', value: '技术部' },
      { text: '市场部', value: '市场部' },
      { text: '财务部', value: '财务部' }
    ],
    filterMethod: (value, row) => row.department === value
  }
];

// 示例7：带展开行的表格
const data_7 = ref([
  {
    name: '张三',
    age: 25,
    address: '上海市浦东新区',
    email: 'zhangsan@example.com'
  },
  {
    name: '李四',
    age: 30,
    address: '北京市朝阳区',
    email: 'lisi@example.com'
  },
  {
    name: '王五',
    age: 22,
    address: '深圳市南山区',
    email: 'wangwu@example.com'
  }
]);

const column_7 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

// 示例8：带合计行的表格
const data_8 = ref([
  { name: '商品1', price: 100, quantity: 2, amount: 200 },
  { name: '商品2', price: 50, quantity: 5, amount: 250 },
  { name: '商品3', price: 80, quantity: 3, amount: 240 },
  { name: '商品4', price: 120, quantity: 1, amount: 120 }
]);

const column_8 = [
  {
    label: '商品名称',
    prop: 'name'
  },
  {
    label: '单价',
    prop: 'price',
    type: 'number'
  },
  {
    label: '数量',
    prop: 'quantity',
    type: 'number'
  },
  {
    label: '金额',
    prop: 'amount',
    type: 'number'
  }
];

function getSummaries(param) {
  const { columns, data } = param;
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = '合计';
      return;
    }
    const values = data.map(item => Number(item[column.property]));
    const validValues = values.filter(value => !isNaN(value));
    if (validValues.length) {
      sums[index] = validValues.reduce((prev, curr) => {
        const value = Number(curr);
        if (!isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0);
      sums[index] += ' 元';
    } else {
      sums[index] = '';
    }
  });
  return sums;
}

// 示例9：带固定列的表格
const data_9 = ref([
  {
    id: 1,
    name: '张三',
    age: 25,
    address: '上海市浦东新区',
    email: 'zhangsan@example.com',
    phone: '13800138000',
    department: '技术部',
    position: '前端工程师',
    salary: 15000
  },
  {
    id: 2,
    name: '李四',
    age: 30,
    address: '北京市朝阳区',
    email: 'lisi@example.com',
    phone: '13900139000',
    department: '市场部',
    position: '市场经理',
    salary: 12000
  },
  {
    id: 3,
    name: '王五',
    age: 22,
    address: '深圳市南山区',
    email: 'wangwu@example.com',
    phone: '13700137000',
    department: '技术部',
    position: '后端工程师',
    salary: 16000
  }
]);

const column_9 = [
  {
    label: 'ID',
    prop: 'id',
    width: 80,
    fixed: 'left'
  },
  {
    label: '姓名',
    prop: 'name',
    width: 120,
    fixed: 'left'
  },
  {
    label: '年龄',
    prop: 'age',
    width: 80
  },
  {
    label: '地址',
    prop: 'address',
    minWidth: 200
  },
  {
    label: '邮箱',
    prop: 'email',
    minWidth: 200
  },
  {
    label: '电话',
    prop: 'phone',
    width: 150
  },
  {
    label: '部门',
    prop: 'department',
    width: 120
  },
  {
    label: '职位',
    prop: 'position',
    width: 150
  },
  {
    label: '薪资',
    prop: 'salary',
    width: 100,
    type: 'number',
    fixed: 'right'
  }
];

// 示例10：响应式表格
const data_10 = ref([
  { name: '张三', age: 25, gender: '男', address: '上海市' },
  { name: '李四', age: 30, gender: '女', address: '北京市' },
  { name: '王五', age: 22, gender: '男', address: '深圳市' }
]);

const column_10 = [
  {
    label: '姓名',
    prop: 'name',
    responsive: ['xs', 'sm', 'md', 'lg', 'xl']
  },
  {
    label: '年龄',
    prop: 'age',
    responsive: ['sm', 'md', 'lg', 'xl']
  },
  {
    label: '性别',
    prop: 'gender',
    responsive: ['md', 'lg', 'xl']
  },
  {
    label: '地址',
    prop: 'address',
    responsive: ['lg', 'xl']
  }
];

// 示例11：自定义列模板的表格
const data_11 = ref([
  { id: 1, name: '张三', status: true },
  { id: 2, name: '李四', status: false },
  { id: 3, name: '王五', status: true }
]);

const column_11 = [
  {
    label: '头像',
    prop: 'avatar',
    type: 'slot',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '状态',
    prop: 'status',
    type: 'slot',
    width: 120
  },
  {
    label: '操作',
    prop: 'action',
    type: 'slot',
    width: 180
  }
];

// 示例12：带加载状态的表格
const loading = ref(true);
const data_12 = ref([
  { name: '张三', age: 25, address: '上海市' },
  { name: '李四', age: 30, address: '北京市' },
  { name: '王五', age: 22, address: '深圳市' }
]);

const column_12 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

// 模拟加载数据
setTimeout(() => {
  loading.value = false;
}, 2000);

// 示例13：带自定义空状态的表格
const data_13 = ref([]);

const column_13 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

// 示例14：带行样式和单元格样式的表格
const data_14 = ref([
  { name: '张三', age: 25, score: 88 },
  { name: '李四', age: 30, score: 95 },
  { name: '王五', age: 22, score: 76 },
  { name: '赵六', age: 28, score: 65 }
]);

const column_14 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '分数',
    prop: 'score',
    type: 'number'
  }
];

function rowClassName({ row, rowIndex }) {
  return row.score < 70 ? 'row-low-score' : '';
}

function cellClassName({ row, column, rowIndex, columnIndex }) {
  if (column.prop === 'score') {
    return row.score >= 90 ? 'cell-high-score' : row.score < 70 ? 'cell-low-score' : '';
  }
  return '';
}

// 示例15：带合并单元格的表格
const data_15 = ref([
  { id: 1, name: '张三', department: '技术部', position: '前端工程师' },
  { id: 2, name: '李四', department: '技术部', position: '后端工程师' },
  { id: 3, name: '王五', department: '技术部', position: '测试工程师' },
  { id: 4, name: '赵六', department: '市场部', position: '市场经理' },
  { id: 5, name: '刘七', department: '市场部', position: '销售顾问' }
]);

const column_15 = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '部门',
    prop: 'department'
  },
  {
    label: '职位',
    prop: 'position'
  }
];

function arraySpanMethod({ row, column, rowIndex, columnIndex }) {
  if (columnIndex === 2) {
    if (rowIndex === 0 || rowIndex === 1 || rowIndex === 2) {
      return [3, 1];
    } else if (rowIndex === 3 || rowIndex === 4) {
      return [2, 1];
    }
  }
}

// 示例16：带行点击事件的表格
const data_16 = ref([
  { id: 1, name: '张三', age: 25, address: '上海市' },
  { id: 2, name: '李四', age: 30, address: '北京市' },
  { id: 3, name: '王五', age: 22, address: '深圳市' }
]);

const column_16 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

function handleRowClick(row, column, event) {
  console.log('行点击:', row);
  alert(`点击了 ${row.name} 的行`);
}

function handleRowDblClick(row, column, event) {
  console.log('行双击:', row);
  alert(`双击了 ${row.name} 的行`);
}

// 示例17：带表头分组的表格
const data_17 = ref([
  {
    name: '张三',
    personal: { age: 25, gender: '男' },
    contact: { email: 'zhangsan@example.com', phone: '13800138000' }
  },
  {
    name: '李四',
    personal: { age: 30, gender: '女' },
    contact: { email: 'lisi@example.com', phone: '13900139000' }
  }
]);

const column_17 = [
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '个人信息',
    children: [
      {
        label: '年龄',
        prop: 'personal.age'
      },
      {
        label: '性别',
        prop: 'personal.gender'
      }
    ]
  },
  {
    label: '联系方式',
    children: [
      {
        label: '邮箱',
        prop: 'contact.email'
      },
      {
        label: '电话',
        prop: 'contact.phone'
      }
    ]
  }
];

// 示例18：带固定表头的表格
const data_18 = ref([]);
for (let i = 0; i < 20; i++) {
  data_18.value.push({
    id: i + 1,
    name: '用户' + (i + 1),
    age: 18 + i % 20,
    address: '地址' + (i + 1)
  });
}

const column_18 = [
  {
    label: 'ID',
    prop: 'id',
    width: 80
  },
  {
    label: '姓名',
    prop: 'name',
    width: 120
  },
  {
    label: '年龄',
    prop: 'age',
    width: 80
  },
  {
    label: '地址',
    prop: 'address',
    minWidth: 200
  }
];

// 示例19：带表格属性配置的表格
const data_19 = ref([
  { id: 1, name: '张三', age: 25, address: '上海市' },
  { id: 2, name: '李四', age: 30, address: '北京市' },
  { id: 3, name: '王五', age: 22, address: '深圳市' }
]);

const column_19 = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

const tableAttrs = ref({
  border: true,
  stripe: true,
  highlightCurrentRow: true,
  showHeader: true,
  tableLayout: 'fixed'
});

// 示例20：带导出功能的表格
const tableRef = ref(null);
const data_20 = ref([
  { id: 1, name: '张三', age: 25, address: '上海市' },
  { id: 2, name: '李四', age: 30, address: '北京市' },
  { id: 3, name: '王五', age: 22, address: '深圳市' }
]);

const column_20 = [
  {
    label: 'ID',
    prop: 'id'
  },
  {
    label: '姓名',
    prop: 'name'
  },
  {
    label: '年龄',
    prop: 'age'
  },
  {
    label: '地址',
    prop: 'address'
  }
];

function handleExport() {
  // 这里可以实现导出逻辑
  console.log('导出数据:', data_20.value);
  alert('导出功能已触发');
  // 实际项目中可以使用 xlsx 库等实现导出
}

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
    desc: '是否多选（为true 时 reserve-selection 默认 true）',
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
  {
    name: 'labelEmpty',
    desc: '空字段内容占位符',
    type: 'string',
    value: '--'
  },
  {
    name: 'labelEmptyClass',
    desc: '空字段内容占位符的样式',
    type: 'string',
    value: '--'
  },
  {
    name: 'emptyLabel',
    desc: '空状态时展示文本',
    type: 'string',
    value: '暂无数据'
  },
  {
    name: 'tableIndexInPage',
    desc: 'Index 是否单页累加',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'tableIndexStart',
    desc: 'Index 是否从0开始',
    type: 'boolean',
    value: 'false'
  }
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
    desc: `type 为 status 时，{[key]: {type:['','success','warning','info','primary','danger'],label:'展示文字内容'},default:{label:'默认展示文字内容'}}`,
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
  {
    name: 'className',
    desc: 'type 为 status 时，状态文本的样式',
    type: 'string',
    value: '-'
  },
  {
    name: 'statusStyle',
    desc: '状态文本样式，default: 默认样式，dot: 展示圆点，follow: 文字颜色跟随圆点颜色',
    type: 'object',
    value: 'default'
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

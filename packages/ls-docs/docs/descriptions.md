---
outline: deep
---

# Descriptions 描述

::: warning 基于el-descriptions二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 两栏模式

<br />
<LSDescriptions label-bg-color="blue" label-color="#fff" :list="list1" label-width="120px"></LSDescriptions>

```js
import { ref } from 'vue';
const iconColor = ref('red');
const list1 = ref([
  {
    iconConfig: { type: 1, name: 'iconoir:fish', color: iconColor },
    label: '养殖品种',
    value: '舟山鲈鱼'
  },
  {
    iconConfig: { type: 1, name: 'game-icons:whale-tail' },
    label: '尾数范围',
    value: '56024 - 93366 尾'
  },
  {
    iconConfig: { name: 'Edit' },
    label: '批次数量',
    value: '5'
  }
]);
```

```html
<LSDescriptions label-bg-color="blue" label-color="#fff" :list="list1" label-width="200px"></LSDescriptions>
```

### 2. 四栏模式

<br />
<LSDescriptions :list="list2" :column="2"></LSDescriptions>

```js
const list2 = ref([
  {
    label: '捕捞编号',
    value: 'F20240613003'
  },
  {
    label: '销售订单号',
    value: 'XSDD00000001010'
  },
  {
    label: '鱼种',
    value: '舟山鲈鱼'
  },
  {
    label: '捕捞规格',
    value: '--'
  },
  {
    label: '责任人',
    value: null
  },
  {
    label: '捕捞量(斤)',
    value: 12
  },
  {
    label: '桶数量',
    value: 1
  },
  {
    label: '我方人员',
    value: ''
  },
  {
    label: '客户人员',
    value: ''
  },
  {
    label: '司机姓名',
    value: ''
  },
  {
    label: '车牌号',
    value: ''
  },
  {
    label: '备注',
    value: ''
  }
]);
```

```html
<LSDescriptions :list="list2" :column="2"></LSDescriptions>
```

### 3. 带日期格式化的描述列表

<br />
<LSDescriptions :list="list3"></LSDescriptions>

```js
const list3 = ref([
  {
    label: '创建时间',
    type: 'date',
    value: new Date('2024-06-13T10:30:00')
  },
  {
    label: '更新时间',
    type: 'date',
    value: new Date('2024-06-14T15:45:00'),
    format: 'YYYY/MM/DD'
  },
  {
    label: '截止时间',
    type: 'date',
    value: new Date('2024-06-30T23:59:59'),
    format: 'MM-DD HH:mm'
  }
]);
```

```html
<LSDescriptions :list="list3"></LSDescriptions>
```

### 4. 带选择框类型的描述列表

<br />
<LSDescriptions :list="list4"></LSDescriptions>

```js
const list4 = ref([
  {
    label: '订单状态',
    type: 'select',
    value: '1',
    propMap: {
      0: { label: '待处理' },
      1: { label: '处理中' },
      2: { label: '已完成' },
      3: { label: '已取消' }
    }
  },
  {
    label: '支付方式',
    type: 'select',
    value: '2',
    propMap: {
      1: { label: '微信支付' },
      2: { label: '支付宝' },
      3: { label: '银行卡' }
    }
  },
  {
    label: '配送方式',
    type: 'select',
    value: '3',
    propMap: {
      1: { label: '快递' },
      2: { label: '自提' },
      3: { label: '上门配送' }
    }
  }
]);
```

```html
<LSDescriptions :list="list4"></LSDescriptions>
```

### 5. 带自定义插槽的描述列表

<br />
<LSDescriptions :list="list5">
  <template #customSlot>
    <el-button type="primary" size="small">查看详情</el-button>
  </template>
  <template #statusSlot>
    <el-tag type="success">已完成</el-tag>
  </template>
</LSDescriptions>

```js
const list5 = ref([
  {
    label: '订单号',
    value: 'ORD20240613001'
  },
  {
    label: '订单状态',
    type: 'slot',
    slotName: 'statusSlot'
  },
  {
    label: '操作',
    type: 'slot',
    slotName: 'customSlot'
  }
]);
```

```html
<LSDescriptions :list="list5">
  <template #customSlot>
    <el-button type="primary" size="small">查看详情</el-button>
  </template>
  <template #statusSlot>
    <el-tag type="success">已完成</el-tag>
  </template>
</LSDescriptions>
```

### 6. 带不同样式的描述列表

<br />
<LSDescriptions label-bg-color="green" label-color="#fff" :list="list6"></LSDescriptions>

```js
const list6 = ref([
  {
    iconConfig: { type: 1, name: 'material-symbols:check-circle', color: '#4CAF50' },
    label: '状态',
    value: '正常'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:warning', color: '#FF9800' },
    label: '警告',
    value: '无'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:error', color: '#F44336' },
    label: '错误',
    value: '无'
  }
]);
```

```html
<LSDescriptions label-bg-color="green" label-color="#fff" :list="list6"></LSDescriptions>
```

### 7. 响应式布局的描述列表

<br />
<LSDescriptions :list="list7" :column="{ xs: 1, sm: 2, md: 3, lg: 4 }"></LSDescriptions>

```js
const list7 = ref([
  { label: '属性1', value: '值1' },
  { label: '属性2', value: '值2' },
  { label: '属性3', value: '值3' },
  { label: '属性4', value: '值4' },
  { label: '属性5', value: '值5' },
  { label: '属性6', value: '值6' },
  { label: '属性7', value: '值7' },
  { label: '属性8', value: '值8' }
]);
```

```html
<LSDescriptions :list="list7" :column="{ xs: 1, sm: 2, md: 3, lg: 4 }"></LSDescriptions>
```

### 8. 带不同图标配置的描述列表

<br />
<LSDescriptions :list="list8"></LSDescriptions>

```js
const list8 = ref([
  {
    iconConfig: { type: 1, name: 'material-symbols:home', color: '#2196F3' },
    label: '首页',
    value: '主页地址'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:person', color: '#4CAF50' },
    label: '个人中心',
    value: '用户信息'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:settings', color: '#FF9800' },
    label: '设置',
    value: '系统配置'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:help', color: '#9C27B0' },
    label: '帮助',
    value: '帮助文档'
  }
]);
```

```html
<LSDescriptions :list="list8"></LSDescriptions>
```

### 9. 与其他组件的集成示例

<br />
<el-card shadow="hover" style="width: 100%; margin-bottom: 20px;">
  <template #header>
    <div class="card-header">
      <span>用户信息卡片</span>
    </div>
  </template>
  <LSDescriptions :list="list9" :column="2" label-bg-color="#f0f9ff" label-color="#1890ff">
    <template #status>
      <el-tag type="success">活跃</el-tag>
    </template>
    <template #action>
      <el-button type="primary" size="small">编辑</el-button>
      <el-button size="small">删除</el-button>
    </template>
  </LSDescriptions>
</el-card>

```js
const list9 = ref([
  {
    iconConfig: { type: 1, name: 'material-symbols:person', color: '#1890ff' },
    label: '用户名',
    value: 'admin'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:alternate-email', color: '#1890ff' },
    label: '邮箱',
    value: 'admin@example.com'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:phone', color: '#1890ff' },
    label: '电话',
    value: '13800138000'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:calendar-today', color: '#1890ff' },
    label: '注册时间',
    type: 'date',
    value: new Date('2024-01-01')
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:label', color: '#1890ff' },
    label: '状态',
    type: 'slot',
    slotName: 'status'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:edit', color: '#1890ff' },
    label: '操作',
    type: 'slot',
    slotName: 'action'
  }
]);
```

```html
<el-card shadow="hover" style="width: 100%; margin-bottom: 20px;">
  <template #header>
    <div class="card-header">
      <span>用户信息卡片</span>
    </div>
  </template>
  <LSDescriptions :list="list9" :column="2" label-bg-color="#f0f9ff" label-color="#1890ff">
    <template #status>
      <el-tag type="success">活跃</el-tag>
    </template>
    <template #action>
      <el-button type="primary" size="small">编辑</el-button>
      <el-button size="small">删除</el-button>
    </template>
  </LSDescriptions>
</el-card>
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 list 配置项

<ApiIntro :tableColumn="tableColumn" :tableData="tableData1" />

### 2. Slots

<ApiIntro :tableColumn="tableSlotColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableSlotColumn } from '../constant';
import { ref } from 'vue';
import { ElButton, ElTag, ElCard } from 'element-plus';

const iconColor = ref('red');
const list1 = ref([
  {
    iconConfig: { type: 1, name: 'iconoir:fish', color: iconColor },
    label: '养殖品种',
    value: '舟山鲈鱼'
  },
  {
    iconConfig: { type: 1, name: 'game-icons:whale-tail'},
    label: '尾数范围',
    value: '56024 - 93366 尾'
  },
  {
    iconConfig: { name: 'Edit'},
    label: '批次数量',
    value: '5'
  }
]);

const list2 = ref([
  {
    label: '捕捞编号',
    value: 'F20240613003'
  },
  {
    label: '销售订单号',
    value: 'XSDD00000001010'
  },
  {
    label: '鱼种',
    value: '舟山鲈鱼'
  },
  {
    label: '捕捞规格',
    value: '--'
  },
  {
    label: '责任人',
    value: null
  },
  {
    label: '捕捞量(斤)',
    value: 12
  },
  {
    label: '桶数量',
    value: 1
  },
  {
    label: '我方人员',
    value: ''
  },
  {
    label: '客户人员',
    value: ''
  },
  {
    label: '司机姓名',
    value: ''
  },
  {
    label: '车牌号',
    value: ''
  },
  {
    label: '备注',
    value: ''
  }
]);

const list3 = ref([
  {
    label: '创建时间',
    type: 'date',
    value: new Date('2024-06-13T10:30:00')
  },
  {
    label: '更新时间',
    type: 'date',
    value: new Date('2024-06-14T15:45:00'),
    format: 'YYYY/MM/DD'
  },
  {
    label: '截止时间',
    type: 'date',
    value: new Date('2024-06-30T23:59:59'),
    format: 'MM-DD HH:mm'
  }
]);

const list4 = ref([
  {
    label: '订单状态',
    type: 'select',
    value: '1',
    propMap: {
      '0': { label: '待处理' },
      '1': { label: '处理中' },
      '2': { label: '已完成' },
      '3': { label: '已取消' }
    }
  },
  {
    label: '支付方式',
    type: 'select',
    value: '2',
    propMap: {
      '1': { label: '微信支付' },
      '2': { label: '支付宝' },
      '3': { label: '银行卡' }
    }
  },
  {
    label: '配送方式',
    type: 'select',
    value: '3',
    propMap: {
      '1': { label: '快递' },
      '2': { label: '自提' },
      '3': { label: '上门配送' }
    }
  }
]);

const list5 = ref([
  {
    label: '订单号',
    value: 'ORD20240613001'
  },
  {
    label: '订单状态',
    type: 'slot',
    slotName: 'statusSlot'
  },
  {
    label: '操作',
    type: 'slot',
    slotName: 'customSlot'
  }
]);

const list6 = ref([
  {
    iconConfig: { type: 1, name: 'material-symbols:check-circle', color: '#4CAF50' },
    label: '状态',
    value: '正常'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:warning', color: '#FF9800' },
    label: '警告',
    value: '无'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:error', color: '#F44336' },
    label: '错误',
    value: '无'
  }
]);

const list7 = ref([
  { label: '属性1', value: '值1' },
  { label: '属性2', value: '值2' },
  { label: '属性3', value: '值3' },
  { label: '属性4', value: '值4' },
  { label: '属性5', value: '值5' },
  { label: '属性6', value: '值6' },
  { label: '属性7', value: '值7' },
  { label: '属性8', value: '值8' }
]);

const list8 = ref([
  {
    iconConfig: { type: 1, name: 'material-symbols:home', color: '#2196F3' },
    label: '首页',
    value: '主页地址'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:person', color: '#4CAF50' },
    label: '个人中心',
    value: '用户信息'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:settings', color: '#FF9800' },
    label: '设置',
    value: '系统配置'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:help', color: '#9C27B0' },
    label: '帮助',
    value: '帮助文档'
  }
]);

const list9 = ref([
  {
    iconConfig: { type: 1, name: 'material-symbols:person', color: '#1890ff' },
    label: '用户名',
    value: 'admin'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:alternate-email', color: '#1890ff' },
    label: '邮箱',
    value: 'admin@example.com'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:phone', color: '#1890ff' },
    label: '电话',
    value: '13800138000'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:calendar-today', color: '#1890ff' },
    label: '注册时间',
    type: 'date',
    value: new Date('2024-01-01')
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:label', color: '#1890ff' },
    label: '状态',
    type: 'slot',
    slotName: 'status'
  },
  {
    iconConfig: { type: 1, name: 'material-symbols:edit', color: '#1890ff' },
    label: '操作',
    type: 'slot',
    slotName: 'action'
  }
]);

const tableData = ref([
  {
    name: 'labelColor',
    desc: 'label字体颜色',
    type: 'string',
    value: '-'
  },
  {
    name: 'labelBgColor',
    desc: 'label背景颜色',
    type: 'string',
    value: '#e2edff'
  },
  {
    name: 'labelWidth',
    desc: 'label宽度设置，需带单位例如px，rem',
    type: 'string',
    value: '-'
  },
  {
    name: 'list',
    desc: '数据列表',
    type: 'DescriptionsListType',
    value: '-'
  },
  {
    name: 'column',
    desc: '列数，支持响应式配置',
    type: 'number / object',
    value: '3'
  },
  {
    name: 'size',
    desc: '尺寸',
    type: 'string',
    value: 'default'
  },
  {
    name: 'border',
    desc: '是否显示边框',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'align',
    desc: '对齐方式',
    type: 'string',
    value: 'left'
  },
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-'
  },
  {
    name: 'extra',
    desc: '额外内容',
    type: 'string',
    value: '-'
  }
])

const tableData1 = ref([
  {
    name: 'type',
    desc: '数据类型，默认文本格式，支持 date：日期格式，select：单复选，slot：自定义例如table',
    type: 'string',
    value: '-'
  },
  {
    name: 'iconConfig',
    desc: '图标配置，具体配置参考LSIcon',
    type: 'IconConfigType',
    value: '{}'
  },
  {
    name: 'label',
    desc: '左侧label名称',
    type: 'string',
    value: '-'
  },
  {
    name: 'value',
    desc: '右侧内容值',
    type: 'string / number / boolean / object',
    value: '-'
  },
  {
    name: 'hide',
    desc: '是否隐藏整行数据',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'format',
    desc: '格式化函数，用于type=date类型',
    type: 'string',
    value: 'YYYY-MM-DD HH:mm:ss'
  },
  {
    name: 'propMap',
    desc: '用于type=select的数据映射，格式为{value:label}',
    type: 'object',
    value: '{}'
  },
  {
    name: 'slotName',
    desc: '用于type=slot的插槽名称',
    type: 'string',
    value: '-'
  },
  {
    name: 'span',
    desc: '占列数',
    type: 'number',
    value: '1'
  },
  {
    name: 'labelClass',
    desc: 'label自定义类名',
    type: 'string',
    value: '-'
  },
  {
    name: 'valueClass',
    desc: 'value自定义类名',
    type: 'string',
    value: '-'
  }
])

const tableData2 = ref([
  {
    name: '[slotName]',
    desc: 'type=slot, 可配置插槽',
  }
])
</script>

<style>
.ls-descriptions table {
  display: table;
}
.ls-descriptions table td {
  background-color: #fff;
}
</style>

---
outline: deep
---

# Descriptions 描述

::: warning 基于el-descriptions二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 两栏模式

<br />
<LSDescriptions label-bg-color="blue" label-color="#fff" :list="list1"></LSDescriptions>

```js
import { ref } from 'vue';
const iconColor = ref('red');
const list1 = ref([
  {
    iconColor,
    iconType: 1,
    iconName: 'iconoir:fish',
    label: '养殖品种',
    value: '舟山鲈鱼'
  },
  {
    iconType: 1,
    iconName: 'game-icons:whale-tail',
    label: '尾数范围',
    value: '56024 - 93366 尾'
  },
  {
    iconName: 'Edit',
    label: '批次数量',
    value: '5'
  }
]);
```

```html
<LSDescriptions label-bg-color="blue" label-color="#fff" :list="list1"></LSDescriptions>
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

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 list 配置项

<ApiIntro :tableColumn="tableColumn" :tableData="tableData1" />

<script setup>
import { tableColumn } from './constant';
import { ref } from 'vue';
const iconColor = ref('red');
const list1 = ref([
  {
    iconColor,
    iconType: 1,
    iconName: 'iconoir:fish',
    label: '养殖品种',
    value: '舟山鲈鱼'
  },
  {
    iconType: 1,
    iconName: 'game-icons:whale-tail',
    label: '尾数范围',
    value: '56024 - 93366 尾'
  },
  {
    iconName: 'Edit',
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
    name: 'list',
    desc: '数据列表',
    type: 'array',
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
    name: 'iconType',
    desc: '图标类型， 默认el-icon，1：iconify，2：svg',
    type: 'string / number',
    value: '-'
  },
  {
    name: 'iconName',
    desc: '图标名称，展示在label左侧',
    type: 'string',
    value: '-'
  },
  {
    name: 'iconColor',
    desc: '图标颜色',
    type: 'string',
    value: '-'
  },
  {
    name: 'iconWidth',
    desc: '图标宽度，适用iconify',
    type: 'string / number',
    value: '-'
  },
  {
    name: 'iconHeight',
    desc: '图标高度，适用iconify',
    type: 'string / number',
    value: '-'
  },
  {
    name: 'iconSize',
    desc: '图标大小，适用el-icon',
    type: 'string / number',
    value: '-'
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

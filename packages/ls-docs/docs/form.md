---
outline: deep
---

# Form 表单

::: warning 基于el-form二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 基础表单

<br>
<div>
<el-switch v-model="read"></el-switch>
<span>只读</span>
</div>
<LSForm
 class="demo-form_1"
 v-model:form-data="formData_1"
 :form-items="formItems_1"
 :read="read"
 @submit="submitFn"
>
  <template #type-append>
    <div>（支持多选）</div>
  </template>
</LSForm>

::: details 点我查看代码

```js
const formData_1 = ref({
  name: undefined,
  type: undefined,
  count: undefined,
  date: undefined,
  datetime: undefined,
  city: [],
  open: false,
  remark: undefined
});
const formItems_1 = [
  {
    type: 'input',
    label: '活动名称',
    prop: 'name',
    rules: {
      required: true,
      message: '请输入活动名称',
      trigger: 'blur'
    }
  },
  {
    type: 'select',
    label: '活动类型',
    prop: 'type',
    rules: {
      required: true,
      message: '请选择活动类型',
      trigger: 'blur'
    },
    attrs: {
      multiple: true
    },
    options: [
      {
        label: '体育',
        value: 1
      },
      {
        label: '唱歌',
        value: 2
      },
      {
        label: '美食',
        value: 3
      },
      {
        label: '摄影',
        value: 4
      }
    ]
  },
  {
    type: 'number',
    label: '活动人数',
    prop: 'count',
    rules: {
      required: true,
      message: '请输入活动人数',
      trigger: 'blur'
    },
    attrs: {
      max: 10
    },
    tooltip: '最多人数10人'
  },
  {
    type: 'date',
    label: '活动日期',
    prop: 'date',
    rules: {
      required: true,
      message: '请选择活动日期',
      trigger: 'blur'
    }
  },
  {
    type: 'date',
    label: '活动时间',
    prop: 'datetime',
    rules: {
      required: true,
      message: '请选择活动日期',
      trigger: 'blur'
    },
    attrs: {
      type: 'datetime'
    }
  },
  {
    type: 'cascader',
    label: '活动城市',
    prop: 'city',
    rules: {
      required: true,
      message: '请选择活动城市',
      trigger: 'blur'
    },
    options: [
      {
        value: 'shanghai',
        label: '上海',
        children: [
          {
            value: 'pdxq',
            label: '浦东新区'
          },
          {
            value: 'hp',
            label: '黄浦区'
          },
          {
            value: 'xh',
            label: '徐汇区'
          }
        ]
      },
      {
        value: 'sichuan',
        label: '四川',
        children: [
          {
            value: 'chengdu',
            label: '成都市'
          },
          {
            value: 'leshan',
            label: '乐山市'
          }
        ]
      }
    ]
  },
  {
    type: 'inputNumberRange',
    label: '活动人数范围',
    prop: 'numberRange'
  },
  {
    type: 'switch',
    label: '是否开启',
    prop: 'open'
  },
  {
    type: 'textarea',
    label: '备注',
    prop: 'remark'
  }
];
```

```html
<LSForm v-model:form-data="formData_1" :form-items="formItems_1" @submit="submitFn">
  <template #type-append>
    <div>（支持多选）</div>
  </template>
</LSForm>
```

:::

### 2. 嵌套表单

<br>
<LSForm v-model:form-data="formData_2" :form-items="formItems_2" @submit="submitFn">
  <template #item_1-slot>
    <div>
      <div v-for="(item, index) in formData_2.item_1" :key="index" class="item-center mb-24">
        <LSFormItem
          v-for="(fItem, i) in item_1_form"
          :key="i + '-' + index"
          v-bind="fItem"
          class="mr-24"
          v-model="formData_2.item_1[index][fItem.prop]"
          :prop="['item_1', index, fItem.prop]"
        ></LSFormItem>
        <el-button type="danger" class="ml-12" @click="removeItem_1(index)">删除</el-button>
      </div>
      <el-button type="primary" class="mt-12" @click="addItem_1">添加</el-button>
    </div>
  </template>

<template #item_2>
<el-form-item label="第二段：" prop="item_2">

<div>
<div v-for="(item, index) in formData_2.item_2" :key="index" class="item-center mb-24">
<LSFormItem
            v-for="(fItem, i) in item_2_form"
            :key="i + '-' + index"
            v-bind="fItem"
            class="mr-24"
            v-model="formData_2.item_2[index][fItem.prop]"
            :prop="['item_2', index, fItem.prop]"
          ></LSFormItem>
<el-button type="danger" class="ml-12" @click="removeItem_2(index)">删除</el-button>
</div>
<el-button type="primary" class="mt-12" @click="addItem_2">添加</el-button>
</div>
</el-form-item>
</template>
</LSForm>

::: details 点我查看代码

```js
const formData_2 = ref({
  label: '嵌套表单',
  item_1: [
    {
      name: undefined,
      age: undefined
    }
  ],
  item_2: [
    {
      type: undefined,
      open: false
    }
  ]
});

const formItems_2 = [
  {
    type: 'label',
    label: '标题',
    prop: 'label'
  },
  {
    type: 'itemSlot',
    label: '第一段',
    prop: 'item_1'
  },
  {
    type: 'slot',
    label: '第二段',
    prop: 'item_2'
  }
];

const item_1_form = [
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    required: true
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  }
];

const item_2_form = [
  {
    type: 'select',
    label: '类型',
    prop: 'type',
    rules: {
      required: true,
      message: '请选择活动类型',
      trigger: 'blur'
    },
    options: [
      {
        label: '选项1',
        value: 1
      }
    ]
  },
  {
    type: 'switch',
    label: '开启',
    prop: 'open'
  }
];

function addItem_1() {
  formData_2.value.item_1.push({
    name: undefined,
    age: undefined
  });
}

function addItem_2() {
  formData_2.value.item_2.push({
    type: undefined,
    open: false
  });
}

function removeItem_1(index) {
  formData_2.value.item_1.splice(index, 1);
}

function removeItem_2(index) {
  formData_2.value.item_2.splice(index, 1);
}
```

```html
<LSForm v-model:form-data="formData_2" :form-items="formItems_2">
  <template #item_1-slot>
    <div>
      <div v-for="(item, index) in formData_2.item_1" :key="index" class="item-center mb-24">
        <LSFormItem
          v-for="(fItem, i) in item_1_form"
          :key="i + '-' + index"
          v-bind="fItem"
          class="mr-24"
          v-model="formData_2.item_1[index][fItem.prop]"
          :prop="['item_1', index, fItem.prop]"
        ></LSFormItem>
        <el-button type="danger" class="ml-12" @click="removeItem_1(index)">删除</el-button>
      </div>
      <el-button type="primary" class="mt-12" @click="addItem_1">添加</el-button>
    </div>
  </template>

  <template #item_2>
    <el-form-item label="第二段：" prop="item_2">
      <div>
        <div v-for="(item, index) in formData_2.item_2" :key="index" class="item-center mb-24">
          <LSFormItem
            v-for="(fItem, i) in item_2_form"
            :key="i + '-' + index"
            v-bind="fItem"
            class="mr-24"
            v-model="formData_2.item_2[index][fItem.prop]"
            :prop="['item_2', index, fItem.prop]"
          ></LSFormItem>
          <el-button type="danger" class="ml-12" @click="removeItem_2(index)">删除</el-button>
        </div>
        <el-button type="primary" class="mt-12" @click="addItem_2">添加</el-button>
      </div>
    </el-form-item>
  </template>
</LSForm>
```

:::

## API

### LSForm

### 1. Attributes

<ApiIntro :tableColumn="tableColumn"  :tableData="attrTableData" />

### 2. Events

<ApiIntro :tableColumn="tableMethodColumn"  :tableData="eventsTableData" />

### 3. Slots

<ApiIntro :tableColumn="tableSlotColumn"  :tableData="slotTableData" />

### 4. Exposes

<ApiIntro :tableColumn="tableExposesColumn"  :tableData="exposesTableData" />

### LSFormItem

### 1. Attributes

<ApiIntro :tableColumn="tableColumn"  :tableData="attrTableData_1" />

#### 1.1 FormItemType

<ApiIntro :tableColumn="formItemTypeColumn"  :tableData="formItemTypeData" />

### 2. Slots

<ApiIntro :tableColumn="tableSlotColumn"  :tableData="slotTableData_1" />

### 3. Exposes

<ApiIntro :tableColumn="tableExposesColumn"  :tableData="exposesTableData_1" />

<script setup>
import { ElFormItem,ElButton,ElSwitch } from 'element-plus';
import { tableColumn,tableMethodColumn,tableSlotColumn,tableExposesColumn } from '../constant';
import { ref } from 'vue';

const read=ref(false)

const formData_1 = ref({
  name: undefined,
  type: undefined,
  type1: undefined,
  type2: undefined,
  count: undefined,
  date: undefined,
  datetime: undefined,
  city: [],
  open: false,
  remark: undefined,
})

const formItems_1 = [
  {
    type: 'input',
    label: '活动名称',
    prop: 'name',
    rules: {
      required: true,
      message: '请输入活动名称',
      trigger: 'blur',
    },
  },
  {
    type: 'select',
    label: '活动类型',
    prop: 'type',
    rules: {
      required: true,
      message: '请选择活动类型',
      trigger: 'blur',
    },
    attrs: {
      multiple: true,
    },
    options: [
      {
        label: '体育',
        value: 1,
      },
      {
        label: '唱歌',
        value: 2,
      },
      {
        label: '美食',
        value: 3,
      },
      {
        label: '摄影',
        value: 4,
      },
    ],
  },
  {
    type: 'radio',
    label: '活动类型',
    prop: 'type1',
    rules: {
      required: true,
      message: '请选择活动类型',
      trigger: 'blur',
    },
    attrs: {
      multiple: true,
    },
    options: [
      {
        label: '体育',
        value: 1,
      },
      {
        label: '唱歌',
        value: 2,
      },
      {
        label: '美食',
        value: 3,
      },
      {
        label: '摄影',
        value: 4,
      },
    ],
  },
  {
    type: 'checkbox',
    label: '活动类型',
    prop: 'type2',
    rules: {
      required: true,
      message: '请选择活动类型',
      trigger: 'blur',
    },
    attrs: {
      multiple: true,
    },
    options: [
      {
        label: '体育',
        value: 1,
      },
      {
        label: '唱歌',
        value: 2,
      },
      {
        label: '美食',
        value: 3,
      },
      {
        label: '摄影',
        value: 4,
      },
    ],
  },
  {
    type: 'number',
    label: '活动人数',
    prop: 'count',
    rules: {
      required: true,
      message: '请输入活动人数',
      trigger: 'blur',
    },
    attrs: {
      max: 10,
    },
    tooltip: '最多人数10人',
  },
  {
    type: 'date',
    label: '活动日期',
    prop: 'date',
    dateFormat:'YYYY-MM-DD',
    rules: {
      required: true,
      message: '请选择活动日期',
      trigger: 'blur',
    },
  },
  {
    type: 'date',
    label: '活动时间',
    prop: 'datetime',
    rules: {
      required: true,
      message: '请选择活动日期',
      trigger: 'blur',
    },
    attrs: {
      type: 'datetime',
    },
  },
  {
    type: 'cascader',
    label: '活动城市',
    prop: 'city',
    rules: {
      required: true,
      message: '请选择活动城市',
      trigger: 'blur',
    },
    options: [
      {
        value: 'shanghai',
        label: '上海',
        children: [
          {
            value: 'pdxq',
            label: '浦东新区',
          },
          {
            value: 'hp',
            label: '黄浦区',
          },
          {
            value: 'xh',
            label: '徐汇区',
          },
        ],
      },
      {
        value: 'sichuan',
        label: '四川',
        children: [
          {
            value: 'chengdu',
            label: '成都市',
          },
          {
            value: 'leshan',
            label: '乐山市',
          },
        ],
      },
    ],
  },
  {
    type: 'inputNumberRange',
    label: '活动人数范围',
    prop: 'numberRange'
  },
  {
    type: 'switch',
    label: '是否开启',
    prop: 'open',
  },
  {
    type: 'textarea',
    label: '备注',
    prop: 'remark',
  },
]

function submitFn(val){
  console.log('submit success!', val);
}

const formData_2 = ref({
  label: '嵌套表单',
  item_1: [
    {
      name: undefined,
      age: undefined
    }
  ],
  item_2: [
    {
      type: undefined,
      open: false
    }
  ]
});

const formItems_2 = [
  {
    type: 'label',
    label: '标题',
    prop: 'label'
  },
  {
    type: 'itemSlot',
    label: '第一段',
    prop: 'item_1'
  },
  {
    type: 'slot',
    label: '第二段',
    prop: 'item_2'
  }
];

const item_1_form = [
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    required: true
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  }
];

const item_2_form = [
  {
    type: 'select',
    label: '类型',
    prop: 'type',
    rules: {
      required: true,
      message: '请选择活动类型',
      trigger: 'blur'
    },
    options: [
      {
        label: '选项1',
        value: 1
      }
    ]
  },
  {
    type: 'switch',
    label: '开启',
    prop: 'open'
  }
];

function addItem_1() {
  formData_2.value.item_1.push({
    name: undefined,
    age: undefined
  });
}

function addItem_2() {
  formData_2.value.item_2.push({
    type: undefined,
    open: false
  });
}

function removeItem_1(index) {
  formData_2.value.item_1.splice(index, 1);
}

function removeItem_2(index) {
  formData_2.value.item_2.splice(index, 1);
}

// 属性
const attrTableData=[
  {
    name: 'formData/v-model:form-data',
    desc: '表单数据对象',
    type: 'object',
    value: '-'
  },
  {
    name: 'formItems',
    desc: 'formItem 配置数据',
    type: 'array',
    value: '[]'
  },
  {
    name: 'column',
    desc: '列数',
    type: 'number',
    value: '1'
  },
  {
    name: 'loading',
    desc: '加载',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'showBtnLoading',
    desc: '是否展示confirm按钮加载状态',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'read',
    desc: '是否只读',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'showButtons',
    desc: '是否展示confirm和reset按钮',
   type: 'boolean',
    value: 'true'
  },
  {
    name: 'buttonsClass',
    desc: '展示confirm和reset按钮区域的样式',
   type: 'string',
    value: '-'
  },
  {
    name: 'showReset',
    desc: '是否显示重置按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'confirmText',
    desc: 'confirm 文案',
    type: 'string',
    value: '确认'
  },
  {
    name: 'confirmClassName',
    desc: 'confirm 按钮 className',
    type: 'string',
    value: '-'
  },
  {
    name: 'colon',
    desc: '冒号显示与否',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'labelWidth',
    desc: `标签的长度，例如 '50px'`,
    type: 'string/number',
    value: 'auto'
  },
  {
    name: 'labelEmpty',
    desc: '空字段内容占位符',
    type: 'string',
    value: '--'
  },
  {
    name: 'hasDefReadStyle',
    desc: '表单详情默认样式，锦鲤适用',
    type: 'boolean',
    value: false
  }
]

// 事件
const eventsTableData=[
  {
    name: 'submit',
    desc: '提交验证时触发，成功返回表单数据对象',
    type: 'Function',
    value: '表单数据对象'
  },
  {
    name: 'reset',
    desc: '重置时触发',
    type: 'Function',
    value: '表单数据对象'
  },
  {
    name: 'onChange',
    desc: '表单select/radio切换时触发',
    type: 'Function',
    value: 'value: 选中值, prop：form中的prop名'
  }
]

// 插槽
const slotTableData=[
  {
    name: 'default',
    desc: '后置自定义内容',
  },
]

// Exposes
const exposesTableData=[
  {
    name: 'FormRef',
    desc: 'el-form 组件的实例',
    type: '-',
    value: '-'
  },
  {
    name: 'validate',
    desc: '对整个表单的内容进行验证。 返回 Promise',
    type: '-',
    value: '-'
  },
  {
    name: 'submitForm',
    desc: '表单提交',
    type: '-',
    value: '-'
  }
]

// 属性
const attrTableData_1=[
  {
    name: 'value/v-model:value',
    desc: '绑定值',
    type: 'any',
    value: '-'
  },
  {
    name: 'isValue',
    desc: '是否绑定到modelValue',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'type',
    desc: '控件类型',
    type: 'FormItemType',
    value: '-'
  },
  {
    name: 'label',
    desc: '显示的标题',
    type: 'string',
    value: '-'
  },
  {
    name: 'prop',
    desc: '字段名称 对应列内容的字段名',
    type: 'string/string[]',
    value: '-'
  },
  {
    name: 'rules',
    desc: '表单验证规则',
    type: 'object',
    value: '-'
  },
  {
    name: 'className',
    desc: 'FormItem 样式',
    type: 'string',
    value: '-'
  },
  {
    name: 'labelClass',
    desc: 'FormItem Label 样式',
    type: 'string',
    value: '-'
  },
  {
    name: 'tooltip',
    desc: '提示文本',
    type: 'string',
    value: '-'
  },
  {
    name: 'options',
    desc: 'select/cascader 控件选项值',
    type: 'array',
    value: '[]'
  },
  {
    name: 'attrs',
    desc: '控件配置项',
    type: 'object',
    value: '-'
  },
  {
    name: 'listeners',
    desc: '控件事件',
    type: 'object',
    value: '-'
  },
  {
    name: 'colon',
    desc: '是否展示冒号',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'read',
    desc: '是否只读',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'disabled',
    desc: '是否禁用',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'labelEmpty',
    desc: '空字段内容占位符',
    type: 'string',
    value: '--'
  },
  {
    name: 'labelNumber',
    desc: 'type为Label时，文本内容是否是数字',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'dateFormat',
    desc: 'type为date时，文本内容日期时间格式',
    type: 'string',
    value: 'YYYY-MM-DD HH:mm:ss'
  },
  {
    name: 'formatReadValue',
    desc: '只读模式时处理显示文本的方法',
    type: 'Function',
    value: '-'
  },
  {
    name: 'rangeSeparator',
    desc: 'type是inputRange和inputNumberRange时取值范围时的分隔符',
    type: 'string',
    value: '~'
  },
  {
    name: 'rangeProps',
    desc: 'type是inputRange和inputNumberRange时的前后字段名',
    type: 'string[]',
    value: `['start', 'end']`
  },
]

const formItemTypeColumn=[
  {
    prop: 'name',
    label: '值',
  },
  {
    prop: 'desc',
    label: '说明'
  },
]

const formItemTypeData=[
  {
    name:'label',
    desc:'文本显示'
  },
  {
    name:'input',
    desc:'输入框（el-input）'
  },
  {
    name:'textarea',
    desc:'文本域（el-input）'
  },
  {
    name:'number',
    desc:'数字输入（el-input-number）'
  },
  {
    name:'radio',
    desc:'单选框（el-radio）'
  },
  {
    name:'checkbox',
    desc:'复选框（el-checkbox）'
  },
  {
    name:'select',
    desc:'下拉选择框（el-select）'
  },
  {
    name:'date',
    desc:'日期（el-date-picker）'
  },
  {
    name:'cascader',
    desc:'级联（el-cascader）'
  },
  {
    name:'multipleCascader',
    desc:'多选级联（el-cascader）'
  },
  {
    name:'switch',
    desc:'开关（el-switch）'
  },
  {
    name:'inputRange',
    desc:'取值范围'
  },
  {
    name:'inputNumberRange',
    desc:'数字取值范围'
  },
  {
    name:'slot',
    desc:'自定义内容（建议使用LSFormItem插入）'
  },
  {
    name:'itemSlot',
    desc:'el-form-item 内自定义内容'
  },
  {
    name:'扩展type',
    desc:'支持扩展，二次封装，<LSForm>{{扩展插槽，插槽名是新增type}}</LSForm>'
  }
]

// 插槽
const slotTableData_1=[
  {
    name: '[prop]',
    desc: '自定义内容,插槽名 跟 prop 一致，返回slotRow、value和updateModelValue方法',
  },
  {
    name: '[prop]-prepend',
    desc: '前置自定义内容，返回slotRow',
  },
  {
    name: '[prop]-append',
    desc: '后置自定义内容，返回slotRow',
  },
  {
    name: '[prop]-slot',
    desc: 'type是itemSlot时，FormItem内自定义内容，返回slotRow、value和updateModelValue方法',
  },
  {
    name: '[prop]-read-slot',
    desc: 'read时，展示文本内容的自定义内容，返回slotRow和value',
  },
  {
    name: '[type]-read-slot',
    desc: 'read时，展示文本内容的自定义内容，返回slotRow和value',
  },
  {
    name: '[prop]-label-icon/tooltip-icon',
    desc: 'label 右侧图标,tooltip时展示',
  },
]

// Exposes
const exposesTableData_1=[
  {
    name: 'FormItemRef',
    desc: 'el-form-item 组件的实例',
    type: '-',
    value: '-'
  },
]
</script>

<style>
.demo-form_1{
  width: 500px;
}
.item-center{
  display: flex;
  align-items: center;
}
</style>

---
outline: deep
---

# Form 表单

::: warning
LSForm 是基于 Element Plus Form 组件进行二次封装的表单组件，提供了统一的配置化表单解决方案，支持多种表单控件类型、验证规则、多列布局和自定义插槽。
:::

## 使用方式

### 1. 基础使用

配置 `formData` 和 `formItems` 即可快速生成表单：

```js
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: ''
})

const formItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    attrs: { 'show-password': true }
  }
])

function handleSubmit(form) {
  console.log('表单提交:', form)
}
```

```html
<LSForm
  :form-data="formData"
  :form-items="formItems"
  @submit="handleSubmit"
/>
```

### 2. 表单验证案例

展示表单验证的使用方法，包括必填字段、正则表达式验证等。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="validationFormData"
      :form-items="validationFormItems"
      confirm-text="提交"
      @submit="handleValidationSubmit"
    />
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const validationFormData = ref({
  email: '',
  phone: '',
  website: '',
  age: undefined
})

const validationFormItems = ref([
  {
    type: 'input',
    label: '邮箱',
    prop: 'email',
    rules: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
    ]
  },
  {
    type: 'input',
    label: '手机号',
    prop: 'phone',
    rules: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式', trigger: 'blur' }
    ]
  },
  {
    type: 'input',
    label: '网站',
    prop: 'website',
    rules: [
      { type: 'url', message: '请输入正确的网址格式', trigger: 'blur' }
    ]
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age',
    rules: [
      { required: true, message: '请输入年龄', trigger: 'blur' },
      { min: 18, max: 100, message: '年龄必须在18-100之间', trigger: 'blur' }
    ]
  }
])

function handleValidationSubmit(form) {
  console.log('验证表单提交:', form)
}
```

```html
<LSForm
  :form-data="validationFormData"
  :form-items="validationFormItems"
  confirm-text="提交"
  @submit="handleValidationSubmit"
/>
```

### 3. 禁用表单案例

展示如何禁用整个表单或单个表单项。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="disabledFormData"
      :form-items="disabledFormItems"
      :disabled="true"
      confirm-text="提交"
    />
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const disabledFormData = ref({
  name: '张三',
  gender: 'male',
  status: true
})

const disabledFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name'
  },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    type: 'switch',
    label: '状态',
    prop: 'status'
  }
])
```

```html
<LSForm
  :form-data="disabledFormData"
  :form-items="disabledFormItems"
  :disabled="true"
  confirm-text="提交"
/>
```

### 4. 自定义按钮案例

展示如何自定义表单按钮，包括修改按钮文本、样式和位置。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="customButtonFormData"
      :form-items="customButtonFormItems"
      confirm-text="保存"
      reset-text="取消"
      :buttons-left="true"
      confirm-class-name="el-button--success"
      buttons-class="custom-buttons"
    />
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const customButtonFormData = ref({
  name: '',
  description: ''
})

const customButtonFormItems = ref([
  {
    type: 'input',
    label: '名称',
    prop: 'name',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }]
  },
  {
    type: 'textarea',
    label: '描述',
    prop: 'description'
  }
])
```

```html
<LSForm
  :form-data="customButtonFormData"
  :form-items="customButtonFormItems"
  confirm-text="保存"
  reset-text="取消"
  :buttons-left="true"
  confirm-class-name="el-button--success"
  buttons-class="custom-buttons"
/>
```

### 5. 表单布局案例

展示不同的表单布局方式，包括多列布局和行内布局。

<ClientOnly>
  <div class="demo-container">
    <h4>2列布局</h4>
    <LSForm
      :form-data="layoutFormData"
      :form-items="layoutFormItems"
      :column="2"
      confirm-text="提交"
    />
    
    <h4 style="margin-top: 24px;">行内布局</h4>
    <LSForm
      :form-data="inlineFormData"
      :form-items="inlineFormItems"
      confirm-text="查询"
      :buttons-left="true"
      inline
    />
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

// 多列布局数据
const layoutFormData = ref({
  name: '',
  age: undefined,
  gender: '',
  email: '',
  phone: '',
  address: ''
})

const layoutFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email'
  },
  {
    type: 'input',
    label: '手机号',
    prop: 'phone'
  },
  {
    type: 'input',
    label: '地址',
    prop: 'address'
  }
])

// 行内布局数据
const inlineFormData = ref({
  keyword: '',
  category: '',
  status: ''
})

const inlineFormItems = ref([
  {
    type: 'input',
    label: '关键词',
    prop: 'keyword',
    attrs: { placeholder: '请输入关键词' }
  },
  {
    type: 'select',
    label: '分类',
    prop: 'category',
    options: [
      { label: '全部', value: '' },
      { label: '产品', value: 'product' },
      { label: '服务', value: 'service' }
    ]
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    options: [
      { label: '全部', value: '' },
      { label: '启用', value: 'active' },
      { label: '禁用', value: 'inactive' }
    ]
  }
])
```

```html
<!-- 2列布局 -->
<LSForm
  :form-data="layoutFormData"
  :form-items="layoutFormItems"
  :column="2"
  confirm-text="提交"
/>

<!-- 行内布局 -->
<LSForm
  :form-data="inlineFormData"
  :form-items="inlineFormItems"
  confirm-text="查询"
  :buttons-left="true"
  inline
/>
```

### 6. 动态表单项案例

展示如何动态添加和删除表单项。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="dynamicFormData"
      :form-items="dynamicFormItems"
      confirm-text="保存"
    >
      <template #dynamic-fields>
        <div>
          <div v-for="(field, index) in dynamicFormData.fields" :key="index" class="dynamic-field">
            <el-input
              v-model="field.name"
              placeholder="字段名称"
              style="width: 200px; margin-right: 10px;"
            />
            <el-select
              v-model="field.type"
              placeholder="字段类型"
              style="width: 150px; margin-right: 10px;"
            >
              <el-option label="文本" value="input" />
              <el-option label="数字" value="number" />
              <el-option label="选择" value="select" />
            </el-select>
            <el-button
              type="danger"
              @click="removeField(index)"
              style="margin-right: 10px;"
            >
              删除
            </el-button>
          </div>
          <el-button type="primary" @click="addField" style="margin-top: 10px;">
            添加字段
          </el-button>
        </div>
      </template>
    </LSForm>
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const dynamicFormData = ref({
  formName: '',
  fields: [
    { name: '', type: 'input' }
  ]
})

const dynamicFormItems = ref([
  {
    type: 'input',
    label: '表单名称',
    prop: 'formName',
    rules: [{ required: true, message: '请输入表单名称', trigger: 'blur' }]
  },
  {
    type: 'slot',
    label: '动态字段',
    prop: 'dynamic-fields',
    isRow: true
  }
])

function addField() {
  dynamicFormData.value.fields.push({ name: '', type: 'input' })
}

function removeField(index) {
  dynamicFormData.value.fields.splice(index, 1)
}
```

```html
<LSForm
  :form-data="dynamicFormData"
  :form-items="dynamicFormItems"
  confirm-text="保存"
>
  <template #dynamic-fields>
    <div>
      <div v-for="(field, index) in dynamicFormData.fields" :key="index" class="dynamic-field">
        <el-input
          v-model="field.name"
          placeholder="字段名称"
          style="width: 200px; margin-right: 10px;"
        />
        <el-select
          v-model="field.type"
          placeholder="字段类型"
          style="width: 150px; margin-right: 10px;"
        >
          <el-option label="文本" value="input" />
          <el-option label="数字" value="number" />
          <el-option label="选择" value="select" />
        </el-select>
        <el-button
          type="danger"
          @click="removeField(index)"
          style="margin-right: 10px;"
        >
          删除
        </el-button>
      </div>
      <el-button type="primary" @click="addField" style="margin-top: 10px;">
        添加字段
      </el-button>
    </div>
  </template>
</LSForm>
```

### 7. 各种表单项类型案例

展示各种类型的表单项使用方法。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="allTypesFormData"
      :form-items="allTypesFormItems"
      :column="2"
      confirm-text="提交"
    />
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const allTypesFormData = ref({
  input: '',
  textarea: '',
  number: undefined,
  radio: 'option1',
  checkbox: ['option1', 'option3'],
  select: '',
  date: '',
  datetimerange: [],
  timePicker: '',
  timeSelect: '',
  cascader: [],
  switch: false
})

const allTypesFormItems = ref([
  {
    type: 'input',
    label: '文本输入',
    prop: 'input',
    attrs: { placeholder: '请输入文本' }
  },
  {
    type: 'textarea',
    label: '文本域',
    prop: 'textarea',
    attrs: { placeholder: '请输入多行文本', rows: 3 }
  },
  {
    type: 'number',
    label: '数字输入',
    prop: 'number',
    attrs: { placeholder: '请输入数字' }
  },
  {
    type: 'radio',
    label: '单选框',
    prop: 'radio',
    options: [
      { label: '选项1', value: 'option1' },
      { label: '选项2', value: 'option2' }
    ]
  },
  {
    type: 'checkbox',
    label: '复选框',
    prop: 'checkbox',
    options: [
      { label: '选项1', value: 'option1' },
      { label: '选项2', value: 'option2' },
      { label: '选项3', value: 'option3' }
    ]
  },
  {
    type: 'select',
    label: '下拉选择',
    prop: 'select',
    options: [
      { label: '请选择', value: '' },
      { label: '选项1', value: 'option1' },
      { label: '选项2', value: 'option2' }
    ],
    attrs: { placeholder: '请选择' }
  },
  {
    type: 'date',
    label: '日期选择',
    prop: 'date',
    attrs: { type: 'date', placeholder: '请选择日期' }
  },
  {
    type: 'datetimerange',
    label: '日期时间范围',
    prop: 'datetimerange',
    attrs: { 'range-separator': '至', 'start-placeholder': '开始日期', 'end-placeholder': '结束日期' }
  },
  {
    type: 'timePicker',
    label: '时间选择器',
    prop: 'timePicker',
    attrs: { placeholder: '请选择时间' }
  },
  {
    type: 'timeSelect',
    label: '时间选择',
    prop: 'timeSelect',
    attrs: { placeholder: '请选择时间' }
  },
  {
    type: 'cascader',
    label: '级联选择',
    prop: 'cascader',
    options: [
      {
        value: 'zhinan',
        label: '指南',
        children: [
          { value: 'shejiyuanze', label: '设计原则' },
          { value: 'daohang', label: '导航' }
        ]
      },
      {
        value: 'zujian',
        label: '组件',
        children: [
          { value: 'basic', label: '基础' },
          { value: 'form', label: '表单' }
        ]
      }
    ],
    attrs: { placeholder: '请选择' }
  },
  {
    type: 'switch',
    label: '开关',
    prop: 'switch'
  }
])
```

```html
<LSForm
  :form-data="allTypesFormData"
  :form-items="allTypesFormItems"
  :column="2"
  confirm-text="提交"
/>
```

### 8. 高级表单验证案例

展示如何使用自定义验证规则和复杂的验证逻辑。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="advancedValidationFormData"
      :form-items="advancedValidationFormItems"
      confirm-text="提交"
      @submit="handleAdvancedValidationSubmit"
    />
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const advancedValidationFormData = ref({
  password: '',
  confirmPassword: '',
  username: '',
  idCard: ''
})

const advancedValidationFormItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '用户名长度应在3-20个字符之间', trigger: 'blur' }
    ]
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    attrs: { 'show-password': true },
    rules: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
      { 
        validator: (rule, value, callback) => {
          if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value)) {
            callback(new Error('密码必须包含大小写字母和数字'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input',
    label: '确认密码',
    prop: 'confirmPassword',
    attrs: { 'show-password': true },
    rules: [
      { required: true, message: '请确认密码', trigger: 'blur' },
      { 
        validator: (rule, value, callback) => {
          if (value !== advancedValidationFormData.value.password) {
            callback(new Error('两次输入的密码不一致'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input',
    label: '身份证号',
    prop: 'idCard',
    rules: [
      { required: true, message: '请输入身份证号', trigger: 'blur' },
      { 
        validator: (rule, value, callback) => {
          const reg = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/
          if (!reg.test(value)) {
            callback(new Error('请输入正确的身份证号'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  }
])

function handleAdvancedValidationSubmit(form) {
  console.log('高级验证表单提交:', form)
}
```

```html
<LSForm
  :form-data="advancedValidationFormData"
  :form-items="advancedValidationFormItems"
  confirm-text="提交"
  @submit="handleAdvancedValidationSubmit"
/>
```

### 9. 只读模式案例

展示表单的只读模式，适用于查看详情页面。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="readOnlyFormData"
      :form-items="readOnlyFormItems"
      :read="true"
      :has-def-read-style="true"
      show-buttons="false"
    />
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const readOnlyFormData = ref({
  name: '张三',
  age: 25,
  gender: 'male',
  email: 'zhangsan@example.com',
  phone: '13800138000',
  address: '北京市朝阳区',
  status: true,
  createTime: '2024-01-01 10:00:00'
})

const readOnlyFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name'
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email'
  },
  {
    type: 'input',
    label: '手机号',
    prop: 'phone'
  },
  {
    type: 'input',
    label: '地址',
    prop: 'address'
  },
  {
    type: 'switch',
    label: '状态',
    prop: 'status'
  },
  {
    type: 'date',
    label: '创建时间',
    prop: 'createTime'
  }
])
```

```html
<LSForm
  :form-data="readOnlyFormData"
  :form-items="readOnlyFormItems"
  :read="true"
  :has-def-read-style="true"
  show-buttons="false"
/>
```

### 10. 表单事件案例

展示如何使用表单的各种事件。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="eventFormData"
      :form-items="eventFormItems"
      confirm-text="提交"
      @submit="handleEventSubmit"
      @reset="handleEventReset"
      @update:form-data="handleFormDataUpdate"
      @on-change="handleFieldChange"
      @change-form-data="handleFormDataChange"
    />
    <div style="margin-top: 20px;">
      <h4>事件日志：</h4>
      <div class="event-log" v-for="(log, index) in eventLogs" :key="index">
        {{ log }}
      </div>
    </div>
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const eventFormData = ref({
  name: '',
  age: undefined,
  email: ''
})

const eventFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email',
    rules: [{ type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }]
  }
])

const eventLogs = ref([])

function addLog(message) {
  eventLogs.value.unshift(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLogs.value.length > 10) {
    eventLogs.value.pop()
  }
}

function handleEventSubmit(form) {
  addLog(`表单提交: ${JSON.stringify(form)}`)
}

function handleEventReset(form) {
  addLog('表单重置')
}

function handleFormDataUpdate(formData) {
  addLog(`表单数据更新: ${JSON.stringify(formData)}`)
}

function handleFieldChange(value, prop, index) {
  addLog(`字段变化 - ${prop}: ${value}`)
}

function handleFormDataChange(value, prop, form) {
  addLog(`表单数据变化 - ${prop}: ${value}`)
}
```

```html
<LSForm
  :form-data="eventFormData"
  :form-items="eventFormItems"
  confirm-text="提交"
  @submit="handleEventSubmit"
  @reset="handleEventReset"
  @update:form-data="handleFormDataUpdate"
  @on-change="handleFieldChange"
  @change-form-data="handleFormDataChange"
/>
```

### 11. 自定义插槽案例

展示如何使用自定义插槽来自定义表单项。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="slotFormData"
      :form-items="slotFormItems"
      confirm-text="提交"
    >
      <template #custom-slot="{ slotRow, value, updateFormData }">
        <div class="custom-slot">
          <el-slider
            :model-value="value"
            :min="0"
            :max="100"
            @change="(val) => updateFormData('customValue', val)"
          />
          <span style="margin-left: 10px;">{{ value }}%</span>
        </div>
      </template>
      <template #buttons-prepend>
        <el-button type="info">自定义前置按钮</el-button>
      </template>
      <template #buttons-append>
        <el-button type="warning">自定义后置按钮</el-button>
      </template>
    </LSForm>
  </div>
</ClientOnly>

```js
import { ref } from 'vue'

const slotFormData = ref({
  name: '',
  customValue: 50
})

const slotFormItems = ref([
  {
    type: 'input',
    label: '名称',
    prop: 'name',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }]
  },
  {
    type: 'slot',
    label: '自定义滑块',
    prop: 'custom-slot',
    isRow: true
  }
])
```

```html
<LSForm
  :form-data="slotFormData"
  :form-items="slotFormItems"
  confirm-text="提交"
>
  <template #custom-slot="{ slotRow, value, updateFormData }">
    <div class="custom-slot">
      <el-slider
        :model-value="value"
        :min="0"
        :max="100"
        @change="(val) => updateFormData('customValue', val)"
      />
      <span style="margin-left: 10px;">{{ value }}%</span>
    </div>
  </template>
  <template #buttons-prepend>
    <el-button type="info">自定义前置按钮</el-button>
  </template>
  <template #buttons-append>
    <el-button type="warning">自定义后置按钮</el-button>
  </template>
</LSForm>
```

## API 文档

### 1. 属性

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| formData | 表单数据对象 | Object | {} |
| formItems | 表单项配置数组 | Array | [] |
| column | 表单列数 | Number | 1 |
| loading | 加载状态 | Boolean | false |
| showBtnLoading | 显示按钮加载状态 | Boolean | true |
| read | 只读模式 | Boolean | false |
| disabled | 禁用状态 | Boolean | false |
| showButtons | 是否显示按钮 | Boolean | true |
| buttonsClass | 按钮容器类名 | String | "" |
| buttonsLeft | 按钮左对齐 | Boolean | false |
| showReset | 是否显示重置按钮 | Boolean | true |
| showSubmit | 是否显示提交按钮 | Boolean | true |
| confirmText | 确认按钮文本 | String | "确认" |
| resetText | 重置按钮文本 | String | "重置" |
| confirmClassName | 确认按钮类名 | String | "" |
| colon | 标签后是否加冒号 | Boolean | false |
| labelEmpty | 空值显示文本 | String | "--" |
| hasDefReadStyle | 是否使用默认只读样式 | Boolean | false |
| hideColumn | 是否隐藏列 | Boolean | false |

### 2. 事件

| 事件名 | 描述 | 类型 | 回调参数 |
| --- | --- | --- | --- |
| submit | 表单提交事件 | Function | (form: any) => void |
| reset | 表单重置事件 | Function | (form: any) => void |
| update:form-data | 表单数据更新事件 | Function | (formData: any) => void |
| onChange | 表单项值变化事件 | Function | (value: any, prop: string, index?: number) => void |
| changeFormData | 表单数据变化事件 | Function | (value: any, prop: any, form: any) => void |

### 3. 表单项配置

| 属性名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 表单项类型 | String | - |
| label | 表单项标签 | String | "" |
| prop | 表单项字段名 | String/Array | "" |
| rules | 验证规则 | Object | {} |
| className | 表单项类名 | String | "" |
| labelClass | 标签类名 | String | "" |
| tooltip | 提示信息 | String | "" |
| options | 选项数据（select/radio/checkbox） | Array | [] |
| trim | 是否自动去除首尾空格 | Boolean | true |
| attrs | 额外属性 | Object | {} |
| listeners | 事件监听器 | Object | {} |
| disabled | 禁用状态 | Boolean | false |
| read | 只读模式 | Boolean | false |
| labelEmpty | 空值显示文本 | String | "--" |
| dateFormat | 日期格式 | String | "YYYY-MM-DD HH:mm:ss" |
| formatReadValue | 只读模式下的格式化函数 | Function | - |
| rangeSeparator | 范围选择器分隔符 | String | "~" |
| rangeProps | 范围选择器的字段名 | Array | ["start", "end"] |
| radioType | 单选框类型 | String | "" |
| isRow | 是否占满整行 | Boolean | false |
| selectAll | 是否显示全选（checkbox） | Boolean | true |
| slotKey | 插槽键名 | String | "" |

### 4. 表单项类型

| 类型 | 描述 |
| --- | --- |
| input | 文本输入框 |
| textarea | 文本域 |
| number | 数字输入框 |
| radio | 单选框 |
| checkbox | 复选框 |
| select | 下拉选择框 |
| date | 日期选择器 |
| datetimerange | 日期时间范围选择器 |
| timePicker | 时间选择器 |
| timeSelect | 时间选择 |
| cascader | 级联选择器 |
| multipleCascader | 多选级联选择器 |
| switch | 开关 |
| inputRange | 输入范围 |
| inputNumberRange | 数字输入范围 |
| slot | 自定义插槽 |
| itemSlot | 表单项插槽 |

<script setup>
import { ref } from 'vue'

// 示例1：基础表单
const basicFormData = ref({
  username: '',
  password: ''
})

const basicFormItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    attrs: {
      'show-password': true
    },
    rules: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      }
    ]
  }
])

function handleBasicSubmit(form) {
  console.log('基础表单提交:', form)
}

// 示例2：表单验证案例
const validationFormData = ref({
  email: '',
  phone: '',
  website: '',
  age: undefined
})

const validationFormItems = ref([
  {
    type: 'input',
    label: '邮箱',
    prop: 'email',
    rules: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
    ]
  },
  {
    type: 'input',
    label: '手机号',
    prop: 'phone',
    rules: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式', trigger: 'blur' }
    ]
  },
  {
    type: 'input',
    label: '网站',
    prop: 'website',
    rules: [
      { type: 'url', message: '请输入正确的网址格式', trigger: 'blur' }
    ]
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age',
    rules: [
      { required: true, message: '请输入年龄', trigger: 'blur' },
      { min: 18, max: 100, message: '年龄必须在18-100之间', trigger: 'blur' }
    ]
  }
])

function handleValidationSubmit(form) {
  console.log('验证表单提交:', form)
}

// 示例3：禁用表单案例
const disabledFormData = ref({
  name: '张三',
  gender: 'male',
  status: true
})

const disabledFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name'
  },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    type: 'switch',
    label: '状态',
    prop: 'status'
  }
])

// 示例4：自定义按钮案例
const customButtonFormData = ref({
  name: '',
  description: ''
})

const customButtonFormItems = ref([
  {
    type: 'input',
    label: '名称',
    prop: 'name',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }]
  },
  {
    type: 'textarea',
    label: '描述',
    prop: 'description'
  }
])

// 示例5：表单布局案例
const layoutFormData = ref({
  name: '',
  age: undefined,
  gender: '',
  email: '',
  phone: '',
  address: ''
})

const layoutFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email'
  },
  {
    type: 'input',
    label: '手机号',
    prop: 'phone'
  },
  {
    type: 'input',
    label: '地址',
    prop: 'address'
  }
])

const inlineFormData = ref({
  keyword: '',
  category: '',
  status: ''
})

const inlineFormItems = ref([
  {
    type: 'input',
    label: '关键词',
    prop: 'keyword',
    attrs: { placeholder: '请输入关键词' }
  },
  {
    type: 'select',
    label: '分类',
    prop: 'category',
    options: [
      { label: '全部', value: '' },
      { label: '产品', value: 'product' },
      { label: '服务', value: 'service' }
    ]
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    options: [
      { label: '全部', value: '' },
      { label: '启用', value: 'active' },
      { label: '禁用', value: 'inactive' }
    ]
  }
])

// 示例6：动态表单项案例
const dynamicFormData = ref({
  formName: '',
  fields: [
    { name: '', type: 'input' }
  ]
})

const dynamicFormItems = ref([
  {
    type: 'input',
    label: '表单名称',
    prop: 'formName',
    rules: [{ required: true, message: '请输入表单名称', trigger: 'blur' }]
  },
  {
    type: 'slot',
    label: '动态字段',
    prop: 'dynamic-fields',
    isRow: true
  }
])

function addField() {
  dynamicFormData.value.fields.push({ name: '', type: 'input' })
}

function removeField(index) {
  dynamicFormData.value.fields.splice(index, 1)
}

// 示例7：各种表单项类型案例
const allTypesFormData = ref({
  input: '',
  textarea: '',
  number: undefined,
  radio: 'option1',
  checkbox: ['option1', 'option3'],
  select: '',
  date: '',
  datetimerange: [],
  timePicker: '',
  timeSelect: '',
  cascader: [],
  switch: false
})

const allTypesFormItems = ref([
  {
    type: 'input',
    label: '文本输入',
    prop: 'input',
    attrs: { placeholder: '请输入文本' }
  },
  {
    type: 'textarea',
    label: '文本域',
    prop: 'textarea',
    attrs: { placeholder: '请输入多行文本', rows: 3 }
  },
  {
    type: 'number',
    label: '数字输入',
    prop: 'number',
    attrs: { placeholder: '请输入数字' }
  },
  {
    type: 'radio',
    label: '单选框',
    prop: 'radio',
    options: [
      { label: '选项1', value: 'option1' },
      { label: '选项2', value: 'option2' }
    ]
  },
  {
    type: 'checkbox',
    label: '复选框',
    prop: 'checkbox',
    options: [
      { label: '选项1', value: 'option1' },
      { label: '选项2', value: 'option2' },
      { label: '选项3', value: 'option3' }
    ]
  },
  {
    type: 'select',
    label: '下拉选择',
    prop: 'select',
    options: [
      { label: '请选择', value: '' },
      { label: '选项1', value: 'option1' },
      { label: '选项2', value: 'option2' }
    ],
    attrs: { placeholder: '请选择' }
  },
  {
    type: 'date',
    label: '日期选择',
    prop: 'date',
    attrs: { type: 'date', placeholder: '请选择日期' }
  },
  {
    type: 'datetimerange',
    label: '日期时间范围',
    prop: 'datetimerange',
    attrs: { 'range-separator': '至', 'start-placeholder': '开始日期', 'end-placeholder': '结束日期' }
  },
  {
    type: 'timePicker',
    label: '时间选择器',
    prop: 'timePicker',
    attrs: { placeholder: '请选择时间' }
  },
  {
    type: 'timeSelect',
    label: '时间选择',
    prop: 'timeSelect',
    attrs: { placeholder: '请选择时间' }
  },
  {
    type: 'cascader',
    label: '级联选择',
    prop: 'cascader',
    options: [
      {
        value: 'zhinan',
        label: '指南',
        children: [
          { value: 'shejiyuanze', label: '设计原则' },
          { value: 'daohang', label: '导航' }
        ]
      },
      {
        value: 'zujian',
        label: '组件',
        children: [
          { value: 'basic', label: '基础' },
          { value: 'form', label: '表单' }
        ]
      }
    ],
    attrs: { placeholder: '请选择' }
  },
  {
    type: 'switch',
    label: '开关',
    prop: 'switch'
  }
])

// 示例8：高级表单验证案例
const advancedValidationFormData = ref({
  password: '',
  confirmPassword: '',
  username: '',
  idCard: ''
})

const advancedValidationFormItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '用户名长度应在3-20个字符之间', trigger: 'blur' }
    ]
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    attrs: { 'show-password': true },
    rules: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
      { 
        validator: (rule, value, callback) => {
          if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value)) {
            callback(new Error('密码必须包含大小写字母和数字'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input',
    label: '确认密码',
    prop: 'confirmPassword',
    attrs: { 'show-password': true },
    rules: [
      { required: true, message: '请确认密码', trigger: 'blur' },
      { 
        validator: (rule, value, callback) => {
          if (value !== advancedValidationFormData.value.password) {
            callback(new Error('两次输入的密码不一致'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  },
  {
    type: 'input',
    label: '身份证号',
    prop: 'idCard',
    rules: [
      { required: true, message: '请输入身份证号', trigger: 'blur' },
      { 
        validator: (rule, value, callback) => {
          const reg = /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/
          if (!reg.test(value)) {
            callback(new Error('请输入正确的身份证号'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  }
])

function handleAdvancedValidationSubmit(form) {
  console.log('高级验证表单提交:', form)
}

// 示例9：只读模式案例
const readOnlyFormData = ref({
  name: '张三',
  age: 25,
  gender: 'male',
  email: 'zhangsan@example.com',
  phone: '13800138000',
  address: '北京市朝阳区',
  status: true,
  createTime: '2024-01-01 10:00:00'
})

const readOnlyFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name'
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email'
  },
  {
    type: 'input',
    label: '手机号',
    prop: 'phone'
  },
  {
    type: 'input',
    label: '地址',
    prop: 'address'
  },
  {
    type: 'switch',
    label: '状态',
    prop: 'status'
  },
  {
    type: 'date',
    label: '创建时间',
    prop: 'createTime'
  }
])

// 示例10：表单事件案例
const eventFormData = ref({
  name: '',
  age: undefined,
  email: ''
})

const eventFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  },
  {
    type: 'number',
    label: '年龄',
    prop: 'age'
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email',
    rules: [{ type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }]
  }
])

const eventLogs = ref([])

function addLog(message) {
  eventLogs.value.unshift(`${new Date().toLocaleTimeString()}: ${message}`)
  if (eventLogs.value.length > 10) {
    eventLogs.value.pop()
  }
}

function handleEventSubmit(form) {
  addLog(`表单提交: ${JSON.stringify(form)}`)
}

function handleEventReset(form) {
  addLog('表单重置')
}

function handleFormDataUpdate(formData) {
  addLog(`表单数据更新: ${JSON.stringify(formData)}`)
}

function handleFieldChange(value, prop, index) {
  addLog(`字段变化 - ${prop}: ${value}`)
}

function handleFormDataChange(value, prop, form) {
  addLog(`表单数据变化 - ${prop}: ${value}`)
}

// 示例11：自定义插槽案例
const slotFormData = ref({
  name: '',
  customValue: 50
})

const slotFormItems = ref([
  {
    type: 'input',
    label: '名称',
    prop: 'name',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }]
  },
  {
    type: 'slot',
    label: '自定义滑块',
    prop: 'custom-slot',
    isRow: true
  }
])

// API 数据
import { tableColumn, tableMethodColumn, tableSlotColumn } from '../constant'

// 属性数据
const attrTableData = [
  {
    name: 'formData',
    desc: '表单数据对象',
    type: 'Object',
    value: '{}'
  },
  {
    name: 'formItems',
    desc: '表单项配置数组',
    type: 'Array',
    value: '[]'
  },
  {
    name: 'column',
    desc: '表单列数',
    type: 'Number',
    value: '1'
  },
  {
    name: 'loading',
    desc: '加载状态',
    type: 'Boolean',
    value: 'false'
  },
  {
    name: 'showBtnLoading',
    desc: '显示按钮加载状态',
    type: 'Boolean',
    value: 'true'
  },
  {
    name: 'read',
    desc: '只读模式',
    type: 'Boolean',
    value: 'false'
  },
  {
    name: 'disabled',
    desc: '禁用状态',
    type: 'Boolean',
    value: 'false'
  },
  {
    name: 'showButtons',
    desc: '是否显示按钮',
    type: 'Boolean',
    value: 'true'
  },
  {
    name: 'buttonsClass',
    desc: '按钮容器类名',
    type: 'String',
    value: '""'
  },
  {
    name: 'buttonsLeft',
    desc: '按钮左对齐',
    type: 'Boolean',
    value: 'false'
  },
  {
    name: 'showReset',
    desc: '是否显示重置按钮',
    type: 'Boolean',
    value: 'true'
  },
  {
    name: 'showSubmit',
    desc: '是否显示提交按钮',
    type: 'Boolean',
    value: 'true'
  },
  {
    name: 'confirmText',
    desc: '确认按钮文本',
    type: 'String',
    value: '"确认"'
  },
  {
    name: 'resetText',
    desc: '重置按钮文本',
    type: 'String',
    value: '"重置"'
  },
  {
    name: 'confirmClassName',
    desc: '确认按钮类名',
    type: 'String',
    value: '""'
  },
  {
    name: 'colon',
    desc: '标签后是否加冒号',
    type: 'Boolean',
    value: 'false'
  },
  {
    name: 'labelEmpty',
    desc: '空值显示文本',
    type: 'String',
    value: '"--"'
  },
  {
    name: 'hasDefReadStyle',
    desc: '是否使用默认只读样式',
    type: 'Boolean',
    value: 'false'
  },
  {
    name: 'hideColumn',
    desc: '是否隐藏列',
    type: 'Boolean',
    value: 'false'
  }
]

// 事件数据
const eventsTableData = [
  {
    name: 'submit',
    desc: '表单提交事件',
    type: 'Function',
    value: '(form: any) => void'
  },
  {
    name: 'reset',
    desc: '表单重置事件',
    type: 'Function',
    value: '(form: any) => void'
  },
  {
    name: 'update:form-data',
    desc: '表单数据更新事件',
    type: 'Function',
    value: '(formData: any) => void'
  },
  {
    name: 'onChange',
    desc: '表单项值变化事件',
    type: 'Function',
    value: '(value: any, prop: string, index?: number) => void'
  },
  {
    name: 'changeFormData',
    desc: '表单数据变化事件',
    type: 'Function',
    value: '(value: any, prop: any, form: any) => void'
  }
]
</script>

<style scoped>
.demo-container {
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #fff;
}
.event-log {
  margin: 5px 0;
  padding: 5px;
  background-color: #f5f5f5;
  border-radius: 4px;
  font-size: 14px;
}
.custom-slot {
  display: flex;
  align-items: center;
}
</style>
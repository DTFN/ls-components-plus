---
outline: deep
---

# Form 表单

::: warning LSForm 是基于 Element Plus Form 组件进行二次封装的表单组件，提供了统一的配置化表单解决方案，支持多种表单控件类型、验证规则、多列布局和自定义插槽。
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
      :show-buttons="false"
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
  :show-buttons="false"
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

### 12. 上传组件案例

展示如何在表单中使用LSUpload上传组件，通过插槽方式实现。

<ClientOnly>
  <div class="demo-container">
    <LSForm
      :form-data="uploadFormData"
      :form-items="uploadFormItems"
      confirm-text="提交"
    >
      <template #avatar-slot-slot="{ value, updateFormData }">
        <LSUpload
          v-model="uploadFormData.avatar"
          action="https://jsonplaceholder.typicode.com/posts/"
          :item="{ isCover: false, limit: 1 }"
          list-type="picture-card"
        >
          <template #trigger>
            <div v-if="value" class="upload-preview">
              <img :src="value" alt="avatar" class="avatar" />
            </div>
            <LSButton v-else type="primary">上传头像</LSButton>
          </template>
        </LSUpload>
      </template>
      <template #images-slot="{ value, updateFormData }">
        <LSUpload
          v-model="uploadFormData.images"
          action="https://jsonplaceholder.typicode.com/posts/"
          :item="{ isCover: false, limit: 5 }"
          list-type="picture-card"
          multiple
        />
      </template>
      <template #files-slot="{ value, updateFormData }">
        <LSUpload
          v-model="uploadFormData.files"
          action="https://jsonplaceholder.typicode.com/posts/"
          :item="{ isCover: false, limit: 3 }"
          multiple
        >
          <template #trigger>
            <LSButton type="primary">点击上传文件</LSButton>
          </template>
        </LSUpload>
      </template>
    </LSForm>
  </div>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue'

const uploadFormData = ref({
  username: '',
  avatar: '',
  images: [],
  files: []
})

const uploadFormItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    attrs: { placeholder: '请输入用户名' }
  },
  {
    type: 'itemSlot',
    label: '头像上传',
    prop: 'avatar-slot',
  },
  {
    type: 'slot',
    label: '图片上传',
    prop: 'images-slot',
  },
  {
    type: 'slot',
    label: '文件上传',
    prop: 'files-slot',
  }
])
```

```html
<LSForm
  :form-data="uploadFormData"
  :form-items="uploadFormItems"
  confirm-text="提交"
>
  <template #avatar-slot-slot="{ value, updateFormData }">
    <LSUpload
      v-model="uploadFormData.avatar"
      action="https://jsonplaceholder.typicode.com/posts/"
      :item="{ isCover: false, limit: 1 }"
      list-type="picture-card"
    >
      <template #trigger>
        <div v-if="value" class="upload-preview">
          <img :src="value" alt="avatar" class="avatar" />
        </div>
        <LSButton v-else type="primary">上传头像</LSButton>
      </template>
    </LSUpload>
  </template>
  <template #images-slot="{ value, updateFormData }">
    <LSUpload
      v-model="uploadFormData.images"
      action="https://jsonplaceholder.typicode.com/posts/"
      :item="{ isCover: false, limit: 5 }"
      list-type="picture-card"
      multiple
    />
  </template>
  <template #files-slot="{ value, updateFormData }">
    <LSUpload
      v-model="uploadFormData.files"
      action="https://jsonplaceholder.typicode.com/posts/"
      :item="{ isCover: false, limit: 3 }"
      multiple
    >
      <template #trigger>
        <LSButton type="primary">点击上传文件</LSButton>
      </template>
    </LSUpload>
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
import { ref } from 'vue'
import { ElInput, ElOption, ElSelect, ElButton, ElSlider } from 'element-plus'

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

// 上传组件案例
const uploadFormData = ref({
  username: '',
  avatar: '',
  images: [],
  files: []
})

const uploadFormItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    attrs: { placeholder: '请输入用户名' }
  },
  {
    type: 'itemSlot',
    label: '头像上传',
    prop: 'avatar-slot',
  },
  {
    type: 'slot',
    label: '图片上传',
    prop: 'images-slot',
  },
  {
    type: 'slot',
    label: '文件上传',
    prop: 'files-slot',
  }
])

// API 数据
import { tableColumn, tableMethodColumn, tableSlotColumn, tableExposesColumn } from '../constant'

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

// 插槽
const slotTableData=[
  {
    name: 'default',
    desc: '后置自定义内容',
  },
  {
    name: 'buttons-prepend',
    desc: '按钮前置自定义内容',
  },
  {
    name: 'buttons-append',
    desc: '按钮后置自定义内容'
  }
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
    name: 'value/v-model',
    desc: '绑定值',
    type: 'any',
    value: '-'
  },
  {
    name: 'isValue',
    desc: '使用value时须设置true',
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
    name: 'trim',
    desc: 'textarea 是否去除首尾空格（只对textarea有效）',
    type: 'boolean',
    value: 'true'
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
  {
    name: 'isRow',
    desc: '是否为一行',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'selectAll',
    desc: 'select 多选时是否支持全选',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'index',
    desc: '索引(onChange 方法中使用)',
    type: 'number',
    value: '0'
  },
  {
    name: 'slotKey',
    desc: '插槽key(覆盖插槽名中的prop)',
    type: 'string',
    value: ''
  },
  {
    name: 'levelMatch',
    desc: '级联控件是否匹配层级（value 是否匹配 options 的层级）',
    type: 'boolean', 
    value: 'false'
  },
  {
    name: 'manualValidate',
    desc: '是否手动验证（解决值变动未触发验证的情况下）',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'hideColumn',
    desc: '隐藏某一列，锦鲤适用',
    type: 'boolean',
    value: false
  }
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
    name:'datetimerange',
    desc:'日期范围（el-date-picker）'
  },
  {
    name:'timePicker',
    desc:'时间（el-time-picker）'
  },
  {
    name:'timeSelect',
    desc:'时间选择（el-time-select）'
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
    desc: '自定义内容,插槽名 跟 prop 一致，返回slotRow、value和updateModelValue(value)（LSForm配置中type是slot时是updateFormData(prop, value)）方法',
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
    desc: 'type是itemSlot时，FormItem内自定义内容，返回slotRow、value和updateModelValue(value)方法',
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
  {
    name: '[prop]-input-prefix',
    desc: 'type为input/inputRange/inputNumberRange时，input 前置自定义内容,也可在attrs.prefixStr(prefix会出现警告所以改成prefixStr)中配置文本内容（优先级低于于插槽）',
  },
  {
      name: '[prop]-input-suffix',
      desc: 'type为input/inputRange/inputNumberRange时，input 后置自定义内容,也可在attrs.suffix中配置文本内容（优先级低于于插槽）',
  },
  {
    name: '[prop]-input-prepend',
    desc: 'type为input/inputRange时，input 前置自定义内容,也可在attrs.prepend中配置文本内容（优先级低于于插槽）',
  },
  {
    name: '[prop]-input-append',
    desc: 'type为input/inputRange时，input 后置自定义内容,也可在attrs.append中配置文本内容（优先级低于于插槽）',
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

<style scoped>
.demo-form_1{
  width: 500px;
}
.item-center{
  display: flex;
  align-items: center;
}
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
---
outline: deep
---

# LSForm 表单

LSForm 基于 Element Plus 的 `el-form` 封装，通过配置化的 `form-items` 数组快速生成表单，支持 18 种控件类型、多列布局、只读 / 禁用模式、自定义验证规则及丰富的插槽扩展，可与 Element Plus Form 的大部分属性透传使用。

::: warning
基于 el-form 二次封装，保留原属性和方法。
:::

::: tip
LSForm 内部使用 `el-config-provider` 注入中文语言包，表单相关文案为中文。
:::

## form-items 配置速查

| 字段              | 说明                                                                                         | 示例                                         |
| ----------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `type`            | 控件类型，见下方类型说明                                                                     | `'input'`、`'select'`、`'date'`              |
| `label`           | 标签文案                                                                                     | `'用户名'`                                   |
| `prop`            | 对应 formData 字段名，支持嵌套路径                                                           | `'username'`、`'user.name'`                  |
| `rules`           | 验证规则（透传 el-form-item）                                                                | `[{ required: true, message: '请输入' }]`    |
| `options`         | select / radio / checkbox / cascader 的选项列表                                              | `[{ label: '男', value: 'male' }]`           |
| `attrs`           | 透传给控件的额外属性；`inputRange`/`inputNumberRange` 须用嵌套对象，key 与 `rangeProps` 一致 | `{ placeholder: '请输入', clearable: true }` |
| `listeners`       | 透传给控件的原生事件；`inputRange`/`inputNumberRange` 同样须嵌套，key 与 `rangeProps` 对应   | `{ focus: () => {} }`                        |
| `isRow`           | 多列布局时是否占满整行                                                                       | `true`                                       |
| `disabled`        | 单独禁用此表单项                                                                             | `true`                                       |
| `read`            | 单独将此表单项设为只读                                                                       | `true`                                       |
| `tooltip`         | label 右侧气泡提示文案                                                                       | `'最多100字'`                                |
| `className`       | 自定义表单项根元素 class                                                                     | `'my-form-item'`                             |
| `labelClass`      | 自定义 label 的 class                                                                        | `'bold-label'`                               |
| `dateFormat`      | `type: 'date'` 只读时的格式（dayjs）                                                         | `'YYYY-MM-DD'`                               |
| `rangeSeparator`  | `inputRange` / `inputNumberRange` 两个输入框之间的分隔符（编辑态和只读态均显示）             | `'~'`                                        |
| `rangeProps`      | `inputRange` / `inputNumberRange` 两端值写入 `formData[prop]` 时的字段名                     | `['start', 'end']`                           |
| `radioType`       | `type: 'radio'` 的样式类型                                                                   | `'button'`                                   |
| `selectAll`       | `type: 'select'` 多选时是否支持全选                                                          | `true`                                       |
| `slotKey`         | 覆盖插槽名中的 prop                                                                          | `'custom-key'`                               |
| `levelMatch`      | 级联控件 value 是否按层级匹配 options                                                        | `true`                                       |
| `manualValidate`  | 是否手动触发验证                                                                             | `true`                                       |
| `formatReadValue` | 只读时自定义显示文本的函数                                                                   | `(val) => val + '元'`                        |
| `hideColumn`      | 是否隐藏该表单项                                                                             | `true`                                       |

---

## 使用示例

### 1. 基础表单

配置 `form-data` 和 `form-items` 即可渲染一张基础表单。提交时会先通过 `el-form` 内置验证，验证通过后 emit `submit` 事件并传入当前表单数据对象。

<br>
<ClientOnly>
<LSForm
  :form-data="basicFormData"
  :form-items="basicFormItems"
  confirm-text="提交"
  @submit="(form) => ElMessage.success('提交成功：' + JSON.stringify(form))"
/>
</ClientOnly>

::: details 点我查看代码

```js
const basicFormData = ref({
  username: '',
  password: ''
})

const basicFormItems = ref([
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
    attrs: { 'show-password': true },
    rules: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }
])
```

```html
<LSForm :form-data="basicFormData" :form-items="basicFormItems" confirm-text="提交" @submit="handleSubmit" />
```

:::

---

### 2. 表单验证

`rules` 字段透传给 `el-form-item`，支持 Element Plus 的所有验证规则类型，包括 `required`、`type`、`pattern`、`min/max`，以及通过 `validator` 函数实现自定义验证逻辑。

<br>
<ClientOnly>
<LSForm
  :form-data="validationFormData"
  :form-items="validationFormItems"
  confirm-text="提交"
  @submit="(form) => ElMessage.success('验证通过！')"
/>
</ClientOnly>

::: details 点我查看代码

```js
const validationFormData = ref({
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
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
    label: '密码',
    prop: 'password',
    attrs: { 'show-password': true },
    rules: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
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
          if (value !== validationFormData.value.password) {
            callback(new Error('两次输入的密码不一致'))
          }
          else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  }
])
```

```html
<LSForm :form-data="validationFormData" :form-items="validationFormItems" confirm-text="提交" @submit="handleSubmit" />
```

:::

---

### 3. 控件类型总览

在一个表单中同时展示常用内置控件类型：`input`、`textarea`、`number`、`radio`、`checkbox`、`select`、`date`、`datetimerange`、`timePicker`、`timeSelect`、`cascader`、`switch`。其余类型（`label`、`inputRange`、`inputNumberRange`、`multipleCascader`、`slot`、`itemSlot`）详见后续各专项示例。

<br>
<ClientOnly>
<LSForm
  :form-data="allTypesFormData"
  :form-items="allTypesFormItems"
  :column="2"
  confirm-text="提交"
  @submit="(form) => ElMessage.success('提交：' + JSON.stringify(form))"
/>
</ClientOnly>

::: details 点我查看代码

```js
const allTypesFormData = ref({
  input: '',
  textarea: '',
  number: undefined,
  radio: 'option1',
  checkbox: ['option1'],
  select: '',
  date: '',
  datetimerange: [],
  timePicker: '',
  timeSelect: '',
  cascader: [],
  switchVal: false
})

const allTypesFormItems = ref([
  {
    type: 'input',
    label: '文本输入',
    prop: 'input',
    attrs: { placeholder: '请输入文本' }
  },
  {
    type: 'number',
    label: '数字输入',
    prop: 'number',
    attrs: { placeholder: '请输入数字' }
  },
  {
    type: 'textarea',
    label: '文本域',
    prop: 'textarea',
    attrs: { placeholder: '请输入多行文本', rows: 3 },
    isRow: true
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
      { label: '选项A', value: 'a' },
      { label: '选项B', value: 'b' },
      { label: '选项C', value: 'c' }
    ]
  },
  {
    type: 'date',
    label: '日期',
    prop: 'date',
    attrs: { placeholder: '请选择日期' }
  },
  {
    type: 'datetimerange',
    label: '日期范围',
    prop: 'datetimerange',
    attrs: { 'range-separator': '至', 'start-placeholder': '开始', 'end-placeholder': '结束' }
  },
  {
    type: 'timePicker',
    label: '时间选择器',
    prop: 'timePicker',
    attrs: { placeholder: '请选择时间' }
  },
  {
    type: 'timeSelect',
    label: '时间',
    prop: 'timeSelect',
    attrs: { placeholder: '请选择时间' }
  },
  {
    type: 'cascader',
    label: '级联选择',
    prop: 'cascader',
    options: [
      {
        value: 'tech',
        label: '技术',
        children: [
          { value: 'frontend', label: '前端' },
          { value: 'backend', label: '后端' }
        ]
      },
      {
        value: 'design',
        label: '设计',
        children: [
          { value: 'ui', label: 'UI设计' },
          { value: 'ux', label: 'UX设计' }
        ]
      }
    ]
  },
  {
    type: 'switch',
    label: '开关',
    prop: 'switchVal'
  }
])
```

```html
<LSForm :form-data="allTypesFormData" :form-items="allTypesFormItems" :column="2" confirm-text="提交" />
```

:::

---

### 4. 多列布局

通过 `column` 属性指定表单列数，内部使用 `el-row` / `el-col` 布局。单个表单项设置 `isRow: true` 时，该项独占整行（`span=24`）。

<br>
<ClientOnly>
<div>
  <p style="margin:6px 0;font-size:13px;color:#606266">① 2列布局</p>
  <LSForm
    :form-data="layoutFormData"
    :form-items="layoutFormItems"
    :column="2"
    confirm-text="提交"
    @submit="(form) => ElMessage.success('2列布局提交：' + JSON.stringify(form))"
  />
  <p style="margin:16px 0 6px;font-size:13px;color:#606266">② 3列布局</p>
  <LSForm
    :form-data="layout3FormData"
    :form-items="layout3FormItems"
    :column="3"
    confirm-text="提交"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
// 2列布局
const layoutFormData = ref({
  name: '',
  age: undefined,
  gender: '',
  email: '',
  phone: '',
  address: ''
})

const layoutFormItems = ref([
  { type: 'input', label: '姓名', prop: 'name', rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }] },
  { type: 'number', label: '年龄', prop: 'age' },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }]
  },
  { type: 'input', label: '邮箱', prop: 'email' },
  { type: 'input', label: '手机号', prop: 'phone' },
  // isRow: true —— 独占整行
  { type: 'input', label: '地址', prop: 'address', isRow: true }
])
```

```html
<!-- 2列布局 -->
<LSForm :form-data="layoutFormData" :form-items="layoutFormItems" :column="2" confirm-text="提交" />
```

:::

---

### 5. 行内布局（inline）

透传 `inline` 属性给 `el-form` 即可开启行内布局，常用于搜索筛选场景。行内模式下按钮区域自动左对齐。

<br>
<ClientOnly>
<LSForm
  :form-data="inlineFormData"
  :form-items="inlineFormItems"
  confirm-text="搜索"
  reset-text="重置"
  inline
  @submit="(form) => ElMessage.success('搜索条件：' + JSON.stringify(form))"
/>
</ClientOnly>

::: details 点我查看代码

```js
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
<LSForm :form-data="inlineFormData" :form-items="inlineFormItems" confirm-text="搜索" inline @submit="handleSearch" />
```

:::

---

### 6. 禁用与只读

**禁用**：`disabled` 为 `true` 时整个表单禁止操作，也可在单个 `form-items` 配置项中设置 `disabled: true` 仅禁用该项。

**只读**：`read` 为 `true` 时表单项以文本形式展示值，不可编辑。结合 `has-def-read-style` 可为只读表单添加表格风格边框样式（适合详情页）。

<br>
<ClientOnly>
<div>
  <p style="margin:6px 0;font-size:13px;color:#606266">① 禁用模式（disabled）</p>
  <LSForm
    :form-data="disabledFormData"
    :form-items="disabledFormItems"
    :disabled="true"
    confirm-text="提交"
  />
  <p style="margin:16px 0 6px;font-size:13px;color:#606266">② 只读模式（read + has-def-read-style）</p>
  <LSForm
    :form-data="readFormData"
    :form-items="readFormItems"
    :column="2"
    :read="true"
    :has-def-read-style="true"
    :show-buttons="false"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
// 禁用模式
const disabledFormData = ref({
  name: '张三',
  gender: 'male',
  status: true
})

const disabledFormItems = ref([
  { type: 'input', label: '姓名', prop: 'name' },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }]
  },
  { type: 'switch', label: '状态', prop: 'status' }
])

// 只读模式（详情页）
const readFormData = ref({
  name: '张三',
  age: 25,
  gender: 'male',
  email: 'zhangsan@example.com',
  status: true,
  birthday: '2000-01-01'
})

const readFormItems = ref([
  { type: 'input', label: '姓名', prop: 'name' },
  { type: 'number', label: '年龄', prop: 'age' },
  {
    type: 'select',
    label: '性别',
    prop: 'gender',
    options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }]
  },
  { type: 'input', label: '邮箱', prop: 'email' },
  { type: 'switch', label: '状态', prop: 'status' },
  { type: 'date', label: '生日', prop: 'birthday', dateFormat: 'YYYY年MM月DD日' }
])
```

```html
<!-- 禁用 -->
<LSForm :form-data="formData" :form-items="formItems" :disabled="true" />

<!-- 只读 + 表格风格边框 -->
<LSForm
  :form-data="readFormData"
  :form-items="readFormItems"
  :column="2"
  :read="true"
  :has-def-read-style="true"
  :show-buttons="false"
/>
```

:::

---

### 7. 按钮区域定制

通过 `confirm-text`、`reset-text` 修改按钮文案；`buttons-left` 控制按钮左对齐；`show-reset` / `show-submit` 控制显隐；`confirm-class-name` 为确认按钮追加 class；`buttons-class` 为按钮区域容器追加 class；`show-buttons` 为 `false` 时完全隐藏按钮区域。`#buttons-prepend` / `#buttons-append` 插槽可在按钮前后插入自定义内容。

<br>
<ClientOnly>
<div>
  <p style="margin:6px 0;font-size:13px;color:#606266">① 自定义文案 + 左对齐</p>
  <LSForm
    :form-data="btnFormData"
    :form-items="btnFormItems"
    confirm-text="保 存"
    reset-text="取 消"
    :buttons-left="true"
    confirm-class-name="el-button--success"
    @submit="(form) => ElMessage.success('保存成功')"
  />
  <p style="margin:16px 0 6px;font-size:13px;color:#606266">② 前置 / 后置按钮插槽</p>
  <LSForm
    :form-data="btnFormData"
    :form-items="btnFormItems"
    confirm-text="提交"
    :show-reset="false"
  >
    <template #buttons-prepend>
      <el-button type="info" @click="ElMessage.info('草稿已保存')">存草稿</el-button>
    </template>
    <template #buttons-append>
      <el-button type="warning" @click="ElMessage.warning('已取消')">取消</el-button>
    </template>
  </LSForm>
</div>
</ClientOnly>

::: details 点我查看代码

```js
const btnFormData = ref({ name: '', description: '' })

const btnFormItems = ref([
  {
    type: 'input',
    label: '名称',
    prop: 'name',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }]
  },
  { type: 'textarea', label: '描述', prop: 'description' }
])
```

```html
<!-- 自定义文案 + 左对齐 -->
<LSForm
  :form-data="formData"
  :form-items="formItems"
  confirm-text="保 存"
  reset-text="取 消"
  :buttons-left="true"
  confirm-class-name="el-button--success"
/>

<!-- 前置 / 后置按钮插槽 -->
<LSForm :form-data="formData" :form-items="formItems" confirm-text="提交" :show-reset="false">
  <template #buttons-prepend>
    <el-button type="info">存草稿</el-button>
  </template>
  <template #buttons-append>
    <el-button type="warning">取消</el-button>
  </template>
</LSForm>
```

:::

---

### 8. 单选按钮样式（radioType）

`type: 'radio'` 时，配置 `radioType: 'button'` 可将单选框渲染为按钮样式（`el-radio-button`）。

<br>
<ClientOnly>
<LSForm
  :form-data="radioFormData"
  :form-items="radioFormItems"
  :show-buttons="false"
/>
</ClientOnly>

::: details 点我查看代码

```js
const radioFormData = ref({ gender: 'male', type: 'A' })

const radioFormItems = ref([
  {
    type: 'radio',
    label: '性别（默认）',
    prop: 'gender',
    options: [
      { label: '男', value: 'male' },
      { label: '女', value: 'female' }
    ]
  },
  {
    type: 'radio',
    label: '类型（按钮样式）',
    prop: 'type',
    radioType: 'button', // 渲染为 el-radio-button
    options: [
      { label: 'A 类', value: 'A' },
      { label: 'B 类', value: 'B' },
      { label: 'C 类', value: 'C' }
    ]
  }
])
```

```html
<LSForm :form-data="formData" :form-items="formItems" :show-buttons="false" />
```

:::

---

### 9. 多选下拉全选（selectAll）

`type: 'select'` 且 `attrs.multiple: true` 时，默认在下拉顶部展示"全部"全选复选框（`selectAll` 默认为 `true`），设为 `false` 可关闭。

<br>
<ClientOnly>
<LSForm
  :form-data="selectAllFormData"
  :form-items="selectAllFormItems"
  :show-buttons="false"
/>
</ClientOnly>

::: details 点我查看代码

```js
const selectAllFormData = ref({ tags: [], tags2: [] })

const selectAllFormItems = ref([
  {
    type: 'select',
    label: '标签（支持全选）',
    prop: 'tags',
    options: [
      { label: 'Vue', value: 'vue' },
      { label: 'React', value: 'react' },
      { label: 'TypeScript', value: 'ts' },
      { label: 'Node.js', value: 'node' }
    ],
    attrs: { multiple: true },
    selectAll: true // 默认值，显示全选复选框
  },
  {
    type: 'select',
    label: '标签（关闭全选）',
    prop: 'tags2',
    options: [
      { label: 'Vue', value: 'vue' },
      { label: 'React', value: 'react' },
      { label: 'TypeScript', value: 'ts' }
    ],
    attrs: { multiple: true },
    selectAll: false
  }
])
```

```html
<LSForm :form-data="formData" :form-items="formItems" :show-buttons="false" />
```

:::

---

### 10. 取值范围（inputRange / inputNumberRange）

`inputRange` 和 `inputNumberRange` 渲染两个并排的输入框，值以**嵌套对象**的形式写回 `formData[prop]`，嵌套对象的 key 由 `rangeProps` 指定（默认 `['start', 'end']`）。因此 `formData` 中对应字段的初始值应为对象或 `null`/`undefined`，而非平铺在根级别。编辑态和只读态两个输入框之间均显示 `rangeSeparator`（默认 `'~'`）。

**数据流说明：**

- 读取：`range_1 = formData[prop][rangeProps[0]]`，`range_2 = formData[prop][rangeProps[1]]`
- 写回：`formData[prop] = { [rangeProps[0]]: val1, [rangeProps[1]]: val2 }`

> **attrs / listeners 结构说明**：`attrs` 和 `listeners` 均须使用与 `rangeProps` 对应的嵌套结构，分别给两端控件传参。例如 `rangeProps: ['start', 'end']` 时，`attrs: { start: { min: 0 }, end: { min: 0 } }`。

<br>
<ClientOnly>
<LSForm
  :form-data="rangeFormData"
  :form-items="rangeFormItems"
  confirm-text="查询"
  @submit="(form) => ElMessage.success(JSON.stringify(form))"
/>
</ClientOnly>

::: details 点我查看代码

```js
const rangeFormData = ref({
  // 值存储为 { start, end } 嵌套对象，key 由 rangeProps 决定
  price: null,
  age: null
})

const rangeFormItems = ref([
  {
    type: 'inputNumberRange',
    label: '价格范围',
    prop: 'price',
    // 默认 rangeProps: ['start', 'end']
    // 提交后 formData.price = { start: val1, end: val2 }
    rangeSeparator: '至',
    // attrs 的 key 必须与 rangeProps 对应，分别传给两端控件
    attrs: {
      start: { min: 0, max: 99999 },
      end: { min: 0, max: 99999 }
    }
  },
  {
    type: 'inputRange',
    label: '年龄范围',
    prop: 'age',
    rangeProps: ['min', 'max'], // 自定义字段名
    // 提交后 formData.age = { min: val1, max: val2 }
    // attrs 的 key 需与 rangeProps 保持一致
    attrs: {
      min: { placeholder: '最小值' },
      max: { placeholder: '最大值' }
    }
  }
])
```

```html
<LSForm :form-data="rangeFormData" :form-items="rangeFormItems" confirm-text="查询" />
```

> **注意**：提交后的值结构为 `{ price: { start, end }, age: { min, max } }`，若后端需要平铺字段，在 `@submit` 回调中手动展开即可。

:::

---

### 11. 自定义插槽（type: slot）

`type: 'slot'` 完全由外部插槽渲染控件内容，**插槽名与 `prop` 一致**，作用域为 `{ slotRow, value, updateFormData }`。需要手动调用 `updateFormData(prop, value)` 更新表单数据。适合放置复杂的自定义控件。

<br>
<ClientOnly>
<LSForm
  :form-data="slotFormData"
  :form-items="slotFormItems"
  confirm-text="提交"
  @submit="(form) => ElMessage.success(JSON.stringify(form))"
>
  <template #progress="{ value, updateFormData }">
    <div style="display:flex;align-items:center;gap:12px;width:100%">
      <el-slider
        :model-value="value"
        :min="0"
        :max="100"
        style="flex:1"
        @input="(val) => updateFormData('progress', val)"
      />
      <span style="min-width:40px;color:#606266">{{ value ?? 0 }}%</span>
    </div>
  </template>
</LSForm>
</ClientOnly>

::: details 点我查看代码

```js
const slotFormData = ref({
  name: '',
  progress: 30
})

const slotFormItems = ref([
  {
    type: 'input',
    label: '项目名称',
    prop: 'name',
    rules: [{ required: true, message: '请输入项目名称', trigger: 'blur' }]
  },
  {
    type: 'slot', // 插槽名 = prop = 'progress'
    label: '完成进度',
    prop: 'progress',
    isRow: true
  }
])
```

```html
<LSForm :form-data="slotFormData" :form-items="slotFormItems" confirm-text="提交">
  <!-- 插槽名 = prop，作用域 { slotRow, value, updateFormData } -->
  <template #progress="{ value, updateFormData }">
    <div style="display: flex; align-items: center; gap: 12px; width: 100%">
      <el-slider :model-value="value" @input="(val) => updateFormData('progress', val)" style="flex: 1" />
      <span>{{ value ?? 0 }}%</span>
    </div>
  </template>
</LSForm>
```

:::

---

### 12. FormItem 内插槽（type: itemSlot）

`type: 'itemSlot'` 在 `el-form-item` 内部使用插槽渲染，**插槽名为 `${prop}-slot`**，作用域为 `{ slotRow, value, updateModelValue }`。与 `slot` 的区别在于：`itemSlot` 仍会渲染外层 `el-form-item`（含 label 和验证提示），`slot` 则完全脱离 `el-form-item`。

<br>
<ClientOnly>
<LSForm
  :form-data="itemSlotFormData"
  :form-items="itemSlotFormItems"
  confirm-text="提交"
  @submit="(form) => ElMessage.success(JSON.stringify(form))"
>
  <template #score-slot="{ value, updateModelValue }">
    <el-rate :model-value="value" @change="updateModelValue" />
  </template>
</LSForm>
</ClientOnly>

::: details 点我查看代码

```js
const itemSlotFormData = ref({
  title: '',
  score: 3
})

const itemSlotFormItems = ref([
  {
    type: 'input',
    label: '评测名称',
    prop: 'title',
    rules: [{ required: true, message: '请输入评测名称', trigger: 'blur' }]
  },
  {
    type: 'itemSlot', // 插槽名 = `${prop}-slot` = 'score-slot'
    label: '评分',
    prop: 'score'
  }
])
```

```html
<LSForm :form-data="itemSlotFormData" :form-items="itemSlotFormItems" confirm-text="提交">
  <!-- 插槽名 = ${prop}-slot，作用域 { slotRow, value, updateModelValue } -->
  <template #score-slot="{ value, updateModelValue }">
    <el-rate :model-value="value" @change="updateModelValue" />
  </template>
</LSForm>
```

:::

---

### 13. Input 前后缀插槽

`type: 'input'` 支持通过插槽或 `attrs` 配置前缀、后缀、前置、后置内容：

| 方式            | 插槽名                   | attrs 字段  | 说明                  |
| --------------- | ------------------------ | ----------- | --------------------- |
| 前缀（prefix）  | `#${prop}-input-prefix`  | `prefixStr` | 控件内部左侧图标/文字 |
| 后缀（suffix）  | `#${prop}-input-suffix`  | `suffix`    | 控件内部右侧图标/文字 |
| 前置（prepend） | `#${prop}-input-prepend` | `prepend`   | 控件外部左侧文字块    |
| 后置（append）  | `#${prop}-input-append`  | `append`    | 控件外部右侧文字块    |

<br>
<ClientOnly>
<LSForm
  :form-data="affixFormData"
  :form-items="affixFormItems"
  :show-buttons="false"
>
  <template #amount-input-prefix>
    <el-icon><Coin /></el-icon>
  </template>
  <template #search-input-suffix>
    <el-icon style="cursor:pointer" @click="ElMessage.info('搜索')"><Search /></el-icon>
  </template>
</LSForm>
</ClientOnly>

::: details 点我查看代码

```js
const affixFormData = ref({
  website: '',
  amount: '',
  unit: '',
  search: ''
})

const affixFormItems = ref([
  {
    type: 'input',
    label: '网站地址（前置）',
    prop: 'website',
    attrs: { prepend: 'https://', placeholder: '请输入域名' }
  },
  {
    type: 'input',
    label: '金额（前缀插槽）',
    prop: 'amount',
    attrs: { placeholder: '请输入金额' }
    // 对应 #amount-input-prefix 插槽
  },
  {
    type: 'input',
    label: '单位（后缀文字）',
    prop: 'unit',
    attrs: { suffix: 'kg', placeholder: '请输入重量' }
  },
  {
    type: 'input',
    label: '搜索（后缀插槽）',
    prop: 'search',
    attrs: { placeholder: '请输入关键词' }
    // 对应 #search-input-suffix 插槽
  }
])
```

```html
<LSForm :form-data="formData" :form-items="formItems" :show-buttons="false">
  <!-- 前缀插槽：插槽名 = ${prop}-input-prefix -->
  <template #amount-input-prefix>
    <el-icon><Coin /></el-icon>
  </template>
  <!-- 后缀插槽：插槽名 = ${prop}-input-suffix -->
  <template #search-input-suffix>
    <el-icon style="cursor: pointer" @click="handleSearch"><search /></el-icon>
  </template>
</LSForm>
```

:::

---

### 14. Label 提示（tooltip）

在 `form-items` 配置项中设置 `tooltip` 字段，label 右侧会出现气泡提示图标。可通过 `#tooltip-icon`（全局，优先级更高）或 `#${prop}-label-icon`（指定字段）插槽替换默认图标。

<br>
<ClientOnly>
<LSForm
  :form-data="tooltipFormData"
  :form-items="tooltipFormItems"
  :show-buttons="false"
/>
</ClientOnly>

::: details 点我查看代码

```js
const tooltipFormData = ref({ username: '', password: '' })

const tooltipFormItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    tooltip: '3-20个字符，支持字母、数字和下划线'
  },
  {
    type: 'input',
    label: '密码',
    prop: 'password',
    tooltip: '密码须包含大小写字母和数字，长度不少于8位',
    attrs: { 'show-password': true }
  }
])
```

```html
<LSForm :form-data="formData" :form-items="formItems" :show-buttons="false" />
```

:::

---

### 15. 事件监听

`@submit` / `@reset` 监听提交与重置；`@on-change` 监听单个表单项值变化，参数为 `(value, prop, index)`；`@change-form-data` 在通过内部 `updateFormData` 写回字段时触发，参数为 `(value, prop, form)`。（当前实现未 emit `update:form-data`，与 v-model 文档需以代码为准。）

<br>
<ClientOnly>
<div>
  <LSForm
    :form-data="eventFormData"
    :form-items="eventFormItems"
    confirm-text="提交"
    @submit="(form) => addEventLog('submit: ' + JSON.stringify(form))"
    @reset="() => addEventLog('reset')"
    @on-change="(val, prop) => addEventLog(`onChange: ${prop} = ${val}`)"
    @change-form-data="(val, prop) => addEventLog(`changeFormData: ${prop} = ${val}`)"
  />
  <div style="margin-top:12px;font-size:13px;color:#606266">事件日志（最新在前）：</div>
  <div v-for="(log, i) in eventLogs" :key="i" style="padding:4px 8px;margin:4px 0;font-size:12px;background:#f5f5f5;border-radius:4px;color:#303133">{{ log }}</div>
</div>
</ClientOnly>

::: details 点我查看代码

```js
const eventFormData = ref({ name: '', status: '' })

const eventFormItems = ref([
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  },
  {
    type: 'select',
    label: '状态',
    prop: 'status',
    options: [
      { label: '启用', value: 'active' },
      { label: '禁用', value: 'inactive' }
    ]
  }
])

const eventLogs = ref([])

function addEventLog(msg) {
  eventLogs.value.unshift(`${new Date().toLocaleTimeString()}  ${msg}`)
  if (eventLogs.value.length > 6)
    eventLogs.value.pop()
}
```

```html
<LSForm
  :form-data="eventFormData"
  :form-items="eventFormItems"
  confirm-text="提交"
  @submit="(form) => console.log('submit', form)"
  @reset="() => console.log('reset')"
  @on-change="(val, prop, index) => console.log('onChange', prop, val)"
  @change-form-data="(val, prop, form) => console.log('changeFormData', prop, val)"
/>
```

:::

---

### 16. Expose 方法调用

通过 `ref` 可获取 LSForm 实例，调用 `validate()`、`submitForm()`、`resetForm()` 等方法，或通过 `FormRef` 访问底层 `el-form` 实例。

<br>
<ClientOnly>
<div>
  <div style="margin-bottom:10px;display:flex;flex-wrap:wrap;gap:8px">
    <el-button size="small" type="primary" @click="exposeFormRef?.submitForm(exposeFormRef?.FormRef)">submitForm（触发提交）</el-button>
    <el-button size="small" @click="exposeFormRef?.resetForm(exposeFormRef?.FormRef)">resetForm（重置）</el-button>
    <el-button size="small" @click="exposeFormRef?.validate().then(() => ElMessage.success('验证通过')).catch(() => ElMessage.error('验证失败'))">validate（仅验证）</el-button>
    <el-button size="small" @click="exposeFormRef?.FormRef?.clearValidate()">clearValidate（清除验证）</el-button>
  </div>
  <LSForm
    ref="exposeFormRef"
    :form-data="exposeFormData"
    :form-items="exposeFormItems"
    confirm-text="提交"
    :show-buttons="false"
    @submit="(form) => ElMessage.success('提交成功：' + JSON.stringify(form))"
  />
</div>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue'

const formRef = ref()

const formData = ref({ username: '', email: '' })

const formItems = ref([
  {
    type: 'input',
    label: '用户名',
    prop: 'username',
    rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email',
    rules: [{ type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }]
  }
])

// 仅验证，不触发 submit 事件
async function handleValidate() {
  try {
    const form = await formRef.value.validate()
    console.log('验证通过，表单数据：', form)
  }
  catch (fields) {
    console.warn('验证失败：', fields)
  }
}

// 手动触发提交（内部验证 + emit submit）
function handleSubmit() {
  formRef.value.submitForm(formRef.value.FormRef)
}

// 重置
function handleReset() {
  formRef.value.resetForm(formRef.value.FormRef)
}

// 调用底层 el-form 方法
function handleClearValidate() {
  formRef.value.FormRef.clearValidate()
}
```

```html
<el-button @click="handleSubmit">submitForm</el-button>
<el-button @click="handleReset">resetForm</el-button>
<el-button @click="handleValidate">validate</el-button>
<el-button @click="handleClearValidate">clearValidate</el-button>

<LSForm
  ref="formRef"
  :form-data="formData"
  :form-items="formItems"
  confirm-text="提交"
  :show-buttons="false"
  @submit="handleFormSubmit"
/>
```

:::

---

### 17. 扩展 type（以 title 为例）

当 `form-items` 中的 `type` 不属于内置类型时，LSForm 会将其作为**扩展 type**，渲染对应插槽（**插槽名 = `type` 值**），作用域为 `{ slotRow, value, updateFormData }`。常用于在表单内插入分组标题、分割线等纯展示内容。

以 `type: 'title'` 为例，可在表单中插入带样式的分组标题，将多个字段在视觉上划分为不同区块：

<br>
<ClientOnly>
<LSForm
  :form-data="extendFormData"
  :form-items="extendFormItems"
  :column="2"
  confirm-text="提交"
  @submit="(form) => ElMessage.success('提交：' + JSON.stringify(form))"
>
  <!-- 插槽名 = type 值 'title'，所有 type: 'title' 的项共用此插槽，通过 slotRow.label 区分文案 -->
  <template #title="{ slotRow }">
    <div style="width:100%;padding:8px 0 4px;margin-bottom:4px;font-size:14px;font-weight:600;color:#303133;border-bottom:2px solid #409EFF;display:flex;align-items:center;gap:6px">
      <span style="display:inline-block;width:3px;height:14px;background:#409EFF;border-radius:2px"></span>
      {{ slotRow.label }}
    </div>
  </template>
</LSForm>
</ClientOnly>

::: details 点我查看代码

```js
const extendFormData = ref({
  name: '',
  idCard: '',
  phone: '',
  email: '',
  province: '',
  city: '',
  address: ''
})

const extendFormItems = ref([
  // type: 'title' 为扩展类型，不绑定任何字段，prop 仅作 key 用
  {
    type: 'title',
    label: '基本信息',
    prop: 'title-basic',
    isRow: true // 独占整行
  },
  {
    type: 'input',
    label: '姓名',
    prop: 'name',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  },
  {
    type: 'input',
    label: '身份证号',
    prop: 'idCard'
  },
  {
    type: 'title',
    label: '联系方式',
    prop: 'title-contact',
    isRow: true
  },
  {
    type: 'input',
    label: '手机号',
    prop: 'phone',
    rules: [{ pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }]
  },
  {
    type: 'input',
    label: '邮箱',
    prop: 'email',
    rules: [{ type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }]
  },
  {
    type: 'title',
    label: '地址信息',
    prop: 'title-address',
    isRow: true
  },
  { type: 'input', label: '省份', prop: 'province' },
  { type: 'input', label: '城市', prop: 'city' },
  { type: 'input', label: '详细地址', prop: 'address', isRow: true }
])
```

```html
<LSForm :form-data="extendFormData" :form-items="extendFormItems" :column="2" confirm-text="提交">
  <!--
    插槽名 = type 值（'title'）
    所有 type: 'title' 的项共用此插槽
    通过 slotRow.label 区分各分组标题文案
  -->
  <template #title="{ slotRow }">
    <div
      style="
        width: 100%;
        padding: 8px 0 4px;
        font-size: 14px;
        font-weight: 600;
        color: #303133;
        border-bottom: 2px solid #409eff;
      "
    >
      <span
        style="
          display: inline-block;
          width: 3px;
          height: 14px;
          background: #409eff;
          border-radius: 2px;
          vertical-align: middle;
          margin-right: 6px;
        "
      ></span>
      {{ slotRow.label }}
    </div>
  </template>
</LSForm>
```

:::

> **提示**：扩展 type 的所有同 `type` 值的配置项共用同一个插槽，通过 `slotRow`（即该配置项对象本身）的任意字段来区分渲染内容。如需让每项有完全独立的插槽，请改用 `type: 'slot'`（插槽名 = `prop`）。

---

### 18. 纯文本展示（type: label）

`type: 'label'` 将字段渲染为纯文本（不可编辑），常用于详情展示或混合表单场景。配合 `labelNumber: true` 可对数字值做样式处理（负数自动红色）；空值显示 `labelEmpty`（默认 `'--'`）。

<br>
<ClientOnly>
<LSForm
  :form-data="labelTypeFormData"
  :form-items="labelTypeFormItems"
  :column="2"
  :show-buttons="false"
/>
</ClientOnly>

::: details 点我查看代码

```js
const labelTypeFormData = ref({
  name: '张三',
  score: 98,
  balance: -500,
  empty: ''
})

const labelTypeFormItems = ref([
  {
    type: 'label',
    label: '姓名',
    prop: 'name'
  },
  {
    type: 'label',
    label: '分数',
    prop: 'score',
    labelNumber: true // 按数字渲染，负数红色
  },
  {
    type: 'label',
    label: '余额（负数红色）',
    prop: 'balance',
    labelNumber: true
  },
  {
    type: 'label',
    label: '备注（空值）',
    prop: 'empty',
    labelEmpty: '暂无' // 自定义空值占位文案，默认 '--'
  }
])
```

```html
<LSForm :form-data="formData" :form-items="formItems" :column="2" :show-buttons="false" />
```

:::

---

## 基础用法

通过 `form-data` 配置表单绑定数据对象、`form-items` 配置表单项数组即可渲染表单。`form-items` 中每项的 `type` 决定控件类型，`prop` 对应 `form-data` 中的字段名（支持 lodash `set/get` 嵌套路径，如 `user.name`）。

除 LSForm 自有属性外，**[Element Plus Form](https://element-plus.org/zh-CN/component/form) 的属性均可透传**，例如：`inline`、`label-position`、`label-width`、`size`、`scroll-to-error` 等。

> **LSForm 内置默认行为**
>
> - `label-position` 默认 `left`（左对齐）
> - `label-width` 默认 `auto`
> - `require-asterisk-position` 默认 `right`（必填星号在 label 右侧）
> - `read: true` 时自动隐藏必填星号（`hide-required-asterisk: true`）
> - `null` / `undefined` 均视为空值（通过 `el-config-provider` 注入）
> - 内部注入中文语言包，日期 / 时间等组件的文案均为中文

---

## 控件类型说明

LSForm 通过 `form-items[].type` 内置以下控件：

| 类型值             | 控件                             | 说明                                                                                                                                    |
| ------------------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `label`            | 纯文本                           | 仅展示值，不可编辑；`labelNumber: true` 时负数红色；空值显示 `labelEmpty`                                                               |
| `input`            | `el-input`                       | 文本输入，支持 prefix / suffix / prepend / append                                                                                       |
| `textarea`         | `el-input` (textarea)            | 多行文本；默认 `trim: true`、`rows: 4`、`show-word-limit`、`maxlength: 100`（`trim: false` 时无 maxlength 限制；均可通过 `attrs` 覆盖） |
| `number`           | `el-input-number`                | 数字输入，默认 min=0、max=99999999                                                                                                      |
| `radio`            | `el-radio-group`                 | 单选框；`radioType: 'button'` 切换为按钮样式                                                                                            |
| `checkbox`         | `el-checkbox-group`              | 多选框                                                                                                                                  |
| `select`           | `el-select`                      | 下拉选择；`attrs.multiple: true` 开启多选，多选时默认显示全选；`attrs: { filterable: true, 'allow-create': true }` 可输入创建新选项     |
| `date`             | `el-date-picker`                 | 日期选择；通过 `attrs.type` 可切换为 `'datetime'`、`'month'`、`'year'` 等模式                                                           |
| `datetimerange`    | `el-date-picker`                 | 日期范围选择（内部固定 `type="daterange"`）；如需日期时间范围，请用 `type: 'date'` + `attrs: { type: 'datetimerange' }`                 |
| `timePicker`       | `el-time-picker`                 | 时间选择器                                                                                                                              |
| `timeSelect`       | `el-time-select`                 | 时间下拉选择                                                                                                                            |
| `cascader`         | `el-cascader`                    | 级联选择；只读时支持通过 `attrs['show-all-levels']` 控制是否显示完整路径                                                                |
| `multipleCascader` | `el-cascader`                    | 多选级联（自动注入 `props.multiple: true`）                                                                                             |
| `switch`           | `el-switch`                      | 开关；只读时显示"是"/"否"                                                                                                               |
| `inputRange`       | 双 `el-input`                    | 文本取值范围；值以 `{ [rangeProps[0]]: v1, [rangeProps[1]]: v2 }` 形式写回 `formData[prop]`                                             |
| `inputNumberRange` | 双 `el-input-number`             | 数字取值范围；值写回规则同 `inputRange`                                                                                                 |
| `slot`             | 自定义插槽（脱离 el-form-item）  | 插槽名 = `prop`，作用域 `{ slotRow, value, updateFormData }`                                                                            |
| `itemSlot`         | 自定义插槽（在 el-form-item 内） | 插槽名 = `${prop}-slot`，作用域 `{ slotRow, value, updateModelValue }`                                                                  |
| 扩展 type          | 自定义扩展                       | 插槽名 = `type`，作用域 `{ slotRow, value, updateFormData }`                                                                            |

---

## LSForm 属性（Props）

| 属性名               | 说明                                             | 类型      | 默认值   |
| -------------------- | ------------------------------------------------ | --------- | -------- |
| **formData**         | 表单数据对象；必填                               | `Object`  | `{}`     |
| **formItems**        | 表单项配置数组；必填                             | `Array`   | `[]`     |
| **column**           | 表单列数，大于 1 时启用多列布局                  | `number`  | `1`      |
| **loading**          | 加载状态，为 true 时禁用表单并显示按钮 loading   | `boolean` | `false`  |
| **showBtnLoading**   | loading 时是否在按钮上显示 loading 图标          | `boolean` | `true`   |
| **read**             | 只读模式，表单项以纯文本展示                     | `boolean` | `false`  |
| **disabled**         | 禁用整个表单（含所有控件）                       | `boolean` | `false`  |
| **showButtons**      | 是否显示底部按钮区域                             | `boolean` | `true`   |
| **buttonsClass**     | 按钮容器根元素追加的 class                       | `string`  | `''`     |
| **buttonsLeft**      | 按钮是否左对齐（默认跟随 label 对齐）            | `boolean` | `false`  |
| **showReset**        | 是否显示重置按钮                                 | `boolean` | `true`   |
| **showSubmit**       | 是否显示提交按钮                                 | `boolean` | `true`   |
| **confirmText**      | 提交按钮文案                                     | `string`  | `'确认'` |
| **resetText**        | 重置按钮文案                                     | `string`  | `'重置'` |
| **confirmClassName** | 提交按钮追加的 class                             | `string`  | `''`     |
| **colon**            | label 后是否追加冒号                             | `boolean` | `false`  |
| **labelEmpty**       | 只读模式下空值的占位文案                         | `string`  | `'--'`   |
| **hasDefReadStyle**  | 是否为只读表单添加表格风格边框样式（详情页适用） | `boolean` | `false`  |

> 说明：`types` 中 LSForm 还声明了根级 `hideColumn`，但当前 `Form.vue` 布局只读取 **form-items 单项**上的 `hideColumn`，根级属性未参与渲染。隐藏列请在对应 `form-items` 项上配置（见上文速查表与 LSFormItem 属性表）。

透传属性：Element Plus Form 的所有属性均可透传，如 `inline`、`label-position`、`label-width`、`size`、`scroll-to-error`、`validate-on-rule-change` 等。

---

## LSForm 事件（Events）

| 事件名（模板写法）   | 说明                                                                                 | 回调参数                                                         |
| -------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| **submit**           | 表单验证通过后触发                                                                   | `(form: object)`                                                 |
| **reset**            | 点击重置按钮后触发                                                                   | `(form: object)`                                                 |
| **on-change**        | 任意表单项值变化时触发（input change / select change 等）；内部 emit 名为 `onChange` | `(value: any, prop: string, index?: number)`                     |
| **change-form-data** | 通过 `updateFormData` 更新字段时触发；内部 emit 名为 `changeFormData`                | `(value: any, prop: string \| number \| string[], form: object)` |

> 说明：`defineEmits` 中虽声明了 `update:form-data`，但 `Form.vue` **未**在数据变更时 `emit('update:form-data', …)`。双向绑定请直接维护传入的 `form-data` 对象引用，或监听 `change-form-data`。

---

## LSForm 插槽（Slots）

| 插槽名              | 说明                                         | 作用域参数                           |
| ------------------- | -------------------------------------------- | ------------------------------------ |
| **default**         | 在配置列之后、按钮区域之前插入自定义内容     | —                                    |
| **buttons-prepend** | 按钮区域前置自定义内容                       | —                                    |
| **buttons-append**  | 按钮区域后置自定义内容                       | —                                    |
| **#{prop}**         | `type: 'slot'` 时的控件内容，插槽名 = `prop` | `{ slotRow, value, updateFormData }` |
| **#{type}**         | 扩展 type 时的插槽，插槽名 = `type` 值       | `{ slotRow, value, updateFormData }` |

> 注意：FormItem 的内部插槽（前后缀、只读自定义等）写在 LSForm 中会自动透传。

---

## LSForm 暴露（Expose）

通过 `ref` 可访问以下方法和属性：

| 名称           | 说明                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------- |
| **FormRef**    | 底层 `el-form` 的实例，可调用 `clearValidate`、`scrollToField`、`validateField` 等所有 Element Plus Form 方法 |
| **validate**   | 对整个表单进行验证，返回 `Promise`（resolve 表单数据 / reject 错误字段）                                      |
| **submitForm** | 触发表单提交（包含验证，验证通过 emit `submit`），参数为 `FormRef`                                            |
| **resetForm**  | 重置表单字段值及验证状态，emit `reset` 事件，参数为 `FormRef`                                                 |

---

## LSFormItem 属性（Props）

即 `form-items` 数组中每一项的配置字段，会透传给 `LSFormItem`：

| 字段                | 说明                                                                                                                                                                                                | 类型                   | 默认值                  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------- |
| **type**            | 控件类型，见上方类型说明                                                                                                                                                                            | `FormItemType`         | —                       |
| **label**           | 标签文案                                                                                                                                                                                            | `string`               | `''`                    |
| **prop**            | 对应 formData 字段名，支持路径如 `user.name`                                                                                                                                                        | `string \| string[]`   | `''`                    |
| **rules**           | 验证规则（透传 el-form-item）                                                                                                                                                                       | `object \| object[]`   | —                       |
| **options**         | select / radio / checkbox / cascader 的选项列表：`[{ label, value, disabled? }]`                                                                                                                    | `array`                | `[]`                    |
| **attrs**           | 透传给控件的额外属性（如 placeholder、clearable、multiple 等）；对于 `inputRange` / `inputNumberRange`，须为嵌套对象，key 与 `rangeProps` 对应，如 `{ start: { min:0 }, end: { min:0 } }`           | `object`               | `{}`                    |
| **listeners**       | 透传给控件的原生事件对象；对于 `inputRange` / `inputNumberRange`，须为嵌套对象，key 与 `rangeProps` 对应，如 `{ start: { blur: fn }, end: { blur: fn } }`                                           | `object`               | `{}`                    |
| **disabled**        | 单独禁用此表单项                                                                                                                                                                                    | `boolean`              | `false`                 |
| **read**            | 单独将此表单项设为只读                                                                                                                                                                              | `boolean`              | `false`                 |
| **isRow**           | 多列布局时是否占满整行（span=24）                                                                                                                                                                   | `boolean`              | `false`                 |
| **className**       | 表单项根元素追加的 class                                                                                                                                                                            | `string`               | `''`                    |
| **labelClass**      | label 文案的 class                                                                                                                                                                                  | `string`               | `''`                    |
| **labelIconClass**  | tooltip 图标的 class                                                                                                                                                                                | `string`               | `''`                    |
| **tooltip**         | label 右侧气泡提示文案                                                                                                                                                                              | `string`               | `''`                    |
| **colon**           | label 后是否加冒号（优先级高于 LSForm 的 colon）                                                                                                                                                    | `boolean`              | `false`                 |
| **labelEmpty**      | 只读或 label 类型时的空值占位文案                                                                                                                                                                   | `string`               | `'--'`                  |
| **labelNumber**     | `type: 'label'` 时是否按数字渲染（负数红色）                                                                                                                                                        | `boolean`              | `false`                 |
| **dateFormat**      | `type: 'date' \| 'datetimerange'` 只读时的显示格式（dayjs）                                                                                                                                         | `string`               | `'YYYY-MM-DD HH:mm:ss'` |
| **formatReadValue** | 只读时自定义处理显示文本的函数，优先级最高                                                                                                                                                          | `(val: any) => string` | —                       |
| **radioType**       | `type: 'radio'` 时的样式：`'button'` 渲染为 el-radio-button                                                                                                                                         | `string`               | `''`                    |
| **selectAll**       | `type: 'select'` 多选时是否在顶部显示全选复选框                                                                                                                                                     | `boolean`              | `true`                  |
| **trim**            | `type: 'textarea'` 时是否使用 `v-model.trim` 并带默认 `maxlength: 100`；为 `false` 时改为普通 `v-model` 且无默认 maxlength（见控件类型说明）。`type: 'input'` 在实现中**始终** `trim`，不受此项控制 | `boolean`              | `true`                  |
| **rangeSeparator**  | `inputRange` / `inputNumberRange` 两个输入框之间的分隔符（编辑态和只读态均显示）                                                                                                                    | `string`               | `'~'`                   |
| **rangeProps**      | `inputRange` / `inputNumberRange` 中，值写入 `formData[prop]` 对象时使用的前后字段名                                                                                                                | `string[]`             | `['start', 'end']`      |
| **levelMatch**      | 级联控件 value 是否按层级匹配 options（多级路径 value）                                                                                                                                             | `boolean`              | `false`                 |
| **manualValidate**  | 是否在值变动时手动触发 el-form-item 验证                                                                                                                                                            | `boolean`              | `false`                 |
| **index**           | 表单项索引，onChange 事件参数中使用                                                                                                                                                                 | `number`               | `0`                     |
| **slotKey**         | 覆盖插槽名中的 prop（插槽名将变为 slotKey）                                                                                                                                                         | `string`               | `''`                    |
| **value**           | 独立使用时的绑定值，需配合 `isValue: true`                                                                                                                                                          | `any`                  | —                       |
| **isValue**         | 使用 `value` prop 时须设为 `true`                                                                                                                                                                   | `boolean`              | `false`                 |
| **hideColumn**      | 是否隐藏该表单项                                                                                                                                                                                    | `boolean`              | `false`                 |

---

## LSFormItem 插槽

LSFormItem 插槽均写在 LSForm 上，组件会自动透传：

| 插槽名                      | 说明                                                                                                                                                                                                                   | 作用域参数                                        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **#\[prop\]**               | `type: 'slot'` 时，控件完整内容（无 el-form-item 外壳）                                                                                                                                                                | `{ slotRow, value, updateFormData(prop, value) }` |
| **#\[prop\]-slot**          | `type: 'itemSlot'` 时，el-form-item 内部内容                                                                                                                                                                           | `{ slotRow, value, updateModelValue(value) }`     |
| **#\[prop\]-prepend**       | 控件前置自定义内容                                                                                                                                                                                                     | `{ slotRow }`                                     |
| **#\[prop\]-append**        | 控件后置自定义内容                                                                                                                                                                                                     | `{ slotRow }`                                     |
| **#\[prop\]-read-slot**     | 只读时自定义显示内容（按字段 prop 匹配，优先级更高）；`value` 为**已格式化的显示文本**（非原始值）                                                                                                                     | `{ slotRow, value }`                              |
| **#\[type\]-read-slot**     | 只读时自定义显示内容（按控件 type 匹配，低于 prop-read-slot）；`value` 为**已格式化的显示文本**                                                                                                                        | `{ slotRow, value }`                              |
| **#tooltip-icon**           | 全局 tooltip 图标插槽（**优先级高于** `#[prop]-label-icon`，所有字段共享同一图标样式时使用）                                                                                                                           | `{ slotRow }`                                     |
| **#\[prop\]-label-icon**    | 指定字段的 tooltip 图标插槽（需设置 `tooltip`，优先级低于 `#tooltip-icon`）                                                                                                                                            | `{ slotRow }`                                     |
| **#\[prop\]-input-prefix**  | `type: 'input'` / `'number'` / `'inputRange'` / `'inputNumberRange'` 前缀插槽（控件内左侧）；也可用 `attrs.prefixStr` 配置文本（插槽优先级更高）；`inputRange`/`inputNumberRange` 时仅作用于**第二个输入框（截止端）** | `{ slotRow }`                                     |
| **#\[prop\]-input-suffix**  | `type: 'input'` / `'number'` / `'inputRange'` / `'inputNumberRange'` 后缀插槽（控件内右侧）；也可用 `attrs.suffix` 配置文本；`inputRange`/`inputNumberRange` 时仅作用于**第二个输入框**                                | `{ slotRow }`                                     |
| **#\[prop\]-input-prepend** | `type: 'input'` / `'inputRange'` 前置插槽（控件外左侧块）；也可用 `attrs.prepend` 配置文本；`inputRange` 时仅作用于**第二个输入框**                                                                                    | `{ slotRow }`                                     |
| **#\[prop\]-input-append**  | `type: 'input'` / `'inputRange'` 后置插槽（控件外右侧块）；也可用 `attrs.append` 配置文本；`inputRange` 时仅作用于**第二个输入框**                                                                                     | `{ slotRow }`                                     |

---

## LSFormItem 暴露（Expose）

| 名称            | 说明                                                                                |
| --------------- | ----------------------------------------------------------------------------------- |
| **FormItemRef** | 底层 `el-form-item` 的实例，可调用 `validate`、`resetField`、`clearValidate` 等方法 |

<script setup>
import { ref } from 'vue';
import { ElMessage, ElButton, ElSlider, ElRate, ElIcon } from 'element-plus';
import { Coin, Search } from '@element-plus/icons-vue';

// 1. 基础表单
const basicFormData = ref({ username: '', password: '' });
const basicFormItems = ref([
  {
    type: 'input', label: '用户名', prop: 'username',
    rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
  },
  {
    type: 'input', label: '密码', prop: 'password',
    attrs: { 'show-password': true },
    rules: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }
]);

// 2. 表单验证
const validationFormData = ref({ email: '', phone: '', password: '', confirmPassword: '' });
const validationFormItems = ref([
  {
    type: 'input', label: '邮箱', prop: 'email',
    rules: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
    ]
  },
  {
    type: 'input', label: '手机号', prop: 'phone',
    rules: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号格式', trigger: 'blur' }
    ]
  },
  {
    type: 'input', label: '密码', prop: 'password',
    attrs: { 'show-password': true },
    rules: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
    ]
  },
  {
    type: 'input', label: '确认密码', prop: 'confirmPassword',
    attrs: { 'show-password': true },
    rules: [
      { required: true, message: '请确认密码', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          if (value !== validationFormData.value.password) {
            callback(new Error('两次输入的密码不一致'));
          } else {
            callback();
          }
        },
        trigger: 'blur'
      }
    ]
  }
]);

// 3. 控件类型总览
const allTypesFormData = ref({
  input: '', textarea: '', number: undefined,
  radio: 'option1', checkbox: ['option1'], select: '',
  date: '', datetimerange: [], timePicker: '', timeSelect: '',
  cascader: [], switchVal: false
});
const allTypesFormItems = ref([
  { type: 'input',    label: '文本输入', prop: 'input',    attrs: { placeholder: '请输入文本' } },
  { type: 'number',   label: '数字输入', prop: 'number',   attrs: { placeholder: '请输入数字' } },
  { type: 'textarea', label: '文本域',   prop: 'textarea', attrs: { placeholder: '请输入多行文本', rows: 3 }, isRow: true },
  {
    type: 'radio', label: '单选框', prop: 'radio',
    options: [{ label: '选项1', value: 'option1' }, { label: '选项2', value: 'option2' }]
  },
  {
    type: 'checkbox', label: '复选框', prop: 'checkbox',
    options: [
      { label: '选项1', value: 'option1' },
      { label: '选项2', value: 'option2' },
      { label: '选项3', value: 'option3' }
    ]
  },
  {
    type: 'select', label: '下拉选择', prop: 'select',
    options: [
      { label: '选项A', value: 'a' },
      { label: '选项B', value: 'b' },
      { label: '选项C', value: 'c' }
    ]
  },
  { type: 'date',          label: '日期',       prop: 'date',          attrs: { placeholder: '请选择日期' } },
  { type: 'datetimerange', label: '日期范围',   prop: 'datetimerange', attrs: { 'range-separator': '至', 'start-placeholder': '开始', 'end-placeholder': '结束' } },
  { type: 'timePicker',    label: '时间选择器', prop: 'timePicker',    attrs: { placeholder: '请选择时间' } },
  { type: 'timeSelect',    label: '时间',       prop: 'timeSelect',    attrs: { placeholder: '请选择时间' } },
  {
    type: 'cascader', label: '级联选择', prop: 'cascader',
    options: [
      { value: 'tech',   label: '技术',   children: [{ value: 'frontend', label: '前端' }, { value: 'backend', label: '后端' }] },
      { value: 'design', label: '设计',   children: [{ value: 'ui', label: 'UI设计' }, { value: 'ux', label: 'UX设计' }] }
    ]
  },
  { type: 'switch', label: '开关', prop: 'switchVal' }
]);

// 4. 多列布局
const layoutFormData = ref({ name: '', age: undefined, gender: '', email: '', phone: '', address: '' });
const layoutFormItems = ref([
  { type: 'input',  label: '姓名', prop: 'name',   rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }] },
  { type: 'number', label: '年龄', prop: 'age' },
  { type: 'select', label: '性别', prop: 'gender', options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }] },
  { type: 'input',  label: '邮箱',   prop: 'email' },
  { type: 'input',  label: '手机号', prop: 'phone' },
  { type: 'input',  label: '地址',   prop: 'address', isRow: true }
]);

const layout3FormData = ref({ name: '', dept: '', role: '', email: '', phone: '' });
const layout3FormItems = ref([
  { type: 'input',  label: '姓名', prop: 'name', rules: [{ required: true, message: '请输入', trigger: 'blur' }] },
  { type: 'input',  label: '部门', prop: 'dept' },
  { type: 'select', label: '角色', prop: 'role', options: [{ label: '管理员', value: 'admin' }, { label: '普通用户', value: 'user' }] },
  { type: 'input',  label: '邮箱',   prop: 'email' },
  { type: 'input',  label: '手机号', prop: 'phone' }
]);

// 5. 行内布局
const inlineFormData = ref({ keyword: '', category: '', status: '' });
const inlineFormItems = ref([
  { type: 'input',  label: '关键词', prop: 'keyword', attrs: { placeholder: '请输入关键词' } },
  {
    type: 'select', label: '分类', prop: 'category',
    options: [{ label: '全部', value: '' }, { label: '产品', value: 'product' }, { label: '服务', value: 'service' }]
  },
  {
    type: 'select', label: '状态', prop: 'status',
    options: [{ label: '全部', value: '' }, { label: '启用', value: 'active' }, { label: '禁用', value: 'inactive' }]
  }
]);

// 6. 禁用与只读
const disabledFormData = ref({ name: '张三', gender: 'male', status: true });
const disabledFormItems = ref([
  { type: 'input',  label: '姓名', prop: 'name' },
  { type: 'select', label: '性别', prop: 'gender', options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }] },
  { type: 'switch', label: '状态', prop: 'status' }
]);

const readFormData = ref({
  name: '张三', age: 25, gender: 'male',
  email: 'zhangsan@example.com', status: true, birthday: '2000-01-01'
});
const readFormItems = ref([
  { type: 'input',  label: '姓名', prop: 'name' },
  { type: 'number', label: '年龄', prop: 'age' },
  { type: 'select', label: '性别', prop: 'gender', options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }] },
  { type: 'input',  label: '邮箱', prop: 'email' },
  { type: 'switch', label: '状态', prop: 'status' },
  { type: 'date',   label: '生日', prop: 'birthday', dateFormat: 'YYYY年MM月DD日' }
]);

// 7. 按钮定制
const btnFormData = ref({ name: '', description: '' });
const btnFormItems = ref([
  { type: 'input',    label: '名称', prop: 'name', rules: [{ required: true, message: '请输入名称', trigger: 'blur' }] },
  { type: 'textarea', label: '描述', prop: 'description' }
]);

// 8. radio 按钮样式
const radioFormData = ref({ gender: 'male', type: 'A' });
const radioFormItems = ref([
  {
    type: 'radio', label: '性别（默认）', prop: 'gender',
    options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }]
  },
  {
    type: 'radio', label: '类型（按钮样式）', prop: 'type',
    radioType: 'button',
    options: [{ label: 'A 类', value: 'A' }, { label: 'B 类', value: 'B' }, { label: 'C 类', value: 'C' }]
  }
]);

// 9. select 全选
const selectAllFormData = ref({ tags: [], tags2: [] });
const selectAllFormItems = ref([
  {
    type: 'select', label: '标签（支持全选）', prop: 'tags',
    options: [
      { label: 'Vue', value: 'vue' }, { label: 'React', value: 'react' },
      { label: 'TypeScript', value: 'ts' }, { label: 'Node.js', value: 'node' }
    ],
    attrs: { multiple: true }, selectAll: true
  },
  {
    type: 'select', label: '标签（关闭全选）', prop: 'tags2',
    options: [
      { label: 'Vue', value: 'vue' }, { label: 'React', value: 'react' }, { label: 'TypeScript', value: 'ts' }
    ],
    attrs: { multiple: true }, selectAll: false
  }
]);

// 10. 取值范围
const rangeFormData = ref({ price: null, age: null });
const rangeFormItems = ref([
  {
    type: 'inputNumberRange', label: '价格范围', prop: 'price',
    rangeSeparator: '至',
    attrs: {
      start: { min: 0, max: 99999 },
      end:   { min: 0, max: 99999 }
    }
  },
  {
    type: 'inputRange', label: '年龄范围', prop: 'age',
    rangeProps: ['min', 'max'],
    attrs: {
      min: { placeholder: '最小值' },
      max: { placeholder: '最大值' }
    }
  }
]);

// 11. slot 插槽
const slotFormData = ref({ name: '', progress: 30 });
const slotFormItems = ref([
  {
    type: 'input', label: '项目名称', prop: 'name',
    rules: [{ required: true, message: '请输入项目名称', trigger: 'blur' }]
  },
  { type: 'slot', label: '完成进度', prop: 'progress', isRow: true }
]);

// 12. itemSlot 插槽
const itemSlotFormData = ref({ title: '', score: 3 });
const itemSlotFormItems = ref([
  {
    type: 'input', label: '评测名称', prop: 'title',
    rules: [{ required: true, message: '请输入评测名称', trigger: 'blur' }]
  },
  { type: 'itemSlot', label: '评分', prop: 'score' }
]);

// 13. input 前后缀
const affixFormData = ref({ website: '', amount: '', unit: '', search: '' });
const affixFormItems = ref([
  { type: 'input', label: '网站地址（前置）', prop: 'website', attrs: { prepend: 'https://', placeholder: '请输入域名' } },
  { type: 'input', label: '金额（前缀插槽）', prop: 'amount', attrs: { placeholder: '请输入金额' } },
  { type: 'input', label: '单位（后缀文字）', prop: 'unit', attrs: { suffix: 'kg', placeholder: '请输入重量' } },
  { type: 'input', label: '搜索（后缀插槽）', prop: 'search', attrs: { placeholder: '请输入关键词' } }
]);

// 14. tooltip
const tooltipFormData = ref({ username: '', password: '' });
const tooltipFormItems = ref([
  { type: 'input', label: '用户名', prop: 'username', tooltip: '3-20个字符，支持字母、数字和下划线' },
  { type: 'input', label: '密码',   prop: 'password', tooltip: '密码须包含大小写字母和数字，长度不少于8位', attrs: { 'show-password': true } }
]);

// 15. 事件
const eventFormData = ref({ name: '', status: '' });
const eventFormItems = ref([
  {
    type: 'input', label: '姓名', prop: 'name',
    rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }]
  },
  {
    type: 'select', label: '状态', prop: 'status',
    options: [{ label: '启用', value: 'active' }, { label: '禁用', value: 'inactive' }]
  }
]);
const eventLogs = ref([]);
function addEventLog(msg) {
  eventLogs.value.unshift(`${new Date().toLocaleTimeString()}  ${msg}`);
  if (eventLogs.value.length > 6) eventLogs.value.pop();
}

// 16. Expose
const exposeFormRef = ref();
const exposeFormData = ref({ username: '', email: '' });
const exposeFormItems = ref([
  {
    type: 'input', label: '用户名', prop: 'username',
    rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
  },
  {
    type: 'input', label: '邮箱', prop: 'email',
    rules: [{ type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }]
  }
]);

// 17. 扩展 type（title 分组标题）
const extendFormData = ref({
  name: '', idCard: '', phone: '', email: '', province: '', city: '', address: ''
});
const extendFormItems = ref([
  { type: 'title', label: '基本信息',   prop: 'title-basic',   isRow: true },
  { type: 'input', label: '姓名',       prop: 'name',          rules: [{ required: true, message: '请输入姓名', trigger: 'blur' }] },
  { type: 'input', label: '身份证号',   prop: 'idCard' },
  { type: 'title', label: '联系方式',   prop: 'title-contact', isRow: true },
  { type: 'input', label: '手机号',     prop: 'phone',         rules: [{ pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }] },
  { type: 'input', label: '邮箱',       prop: 'email',         rules: [{ type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }] },
  { type: 'title', label: '地址信息',   prop: 'title-address', isRow: true },
  { type: 'input', label: '省份',       prop: 'province' },
  { type: 'input', label: '城市',       prop: 'city' },
  { type: 'input', label: '详细地址',   prop: 'address',       isRow: true }
]);

// 18. type: label
const labelTypeFormData = ref({ name: '张三', score: 98, balance: -500, empty: '' });
const labelTypeFormItems = ref([
  { type: 'label', label: '姓名',         prop: 'name' },
  { type: 'label', label: '分数',         prop: 'score',   labelNumber: true },
  { type: 'label', label: '余额（负数红色）', prop: 'balance', labelNumber: true },
  { type: 'label', label: '备注（空值）',  prop: 'empty',   labelEmpty: '暂无' }
]);
</script>

<style>
.vp-doc .el-form table {
  display: table;
  margin: 0;
}
.vp-doc .el-form tr,
.vp-doc .el-form tr:nth-child(2n) {
  background-color: transparent;
  border-top: none;
}
.vp-doc .el-form th,
.vp-doc .el-form td {
  border: none;
}
</style>

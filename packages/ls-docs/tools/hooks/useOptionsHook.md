---
outline: deep
---

# useOptionsHook

::: warning 根据请求数据，获取下拉框数据。支持缓存、防抖远程搜索、多字段组合等功能。
:::

## 使用方式

### 基础用法

```js
import { useOptionsHook } from '@lingshugroup/web-plus/hooks'
import { onMounted } from 'vue'

const { getSelOptions } = useOptionsHook()

function optionApi() {
  return new Promise((resolve) => {
    const optionData = [
      {
        id: '1',
        name1: '数据',
        name2: '测试',
        value1: 'data',
        value2: 'test'
      }
    ]

    return resolve(optionData)
  })
}

onMounted(async () => {
  const data = await getSelOptions(optionApi, ['name1', 'name2'], ['id', 'value1', 'value2'])
  console.log(data)
})
```

### 带缓存用法

```js
import { useOptionsHook } from '@lingshugroup/web-plus/hooks'
import { onMounted } from 'vue'

const { getSelOptions, clearCache } = useOptionsHook({
  cacheKey: 'userOptions',
  cacheTime: 60000
})

onMounted(async () => {
  const data = await getSelOptions(userApi)
  // 60秒内再次调用会直接返回缓存数据
})

// 需要时手动清除缓存
clearCache('userOptions')
```

### 远程搜索用法

```js
import { useOptionsHook } from '@lingshugroup/web-plus/hooks'
import { ref } from 'vue'

const { remoteSearchSelOptions, selData, loading } = useOptionsHook({
  debounceTime: 500
})

const keyword = ref('')

async function handleSearch(query) {
  keyword.value = query
  await remoteSearchSelOptions(searchApi, { status: 1 }, keyword.value)
}
```

### 根据 value 获取 label

```js
import { useOptionsHook } from '@lingshugroup/web-plus/hooks'
import { onMounted } from 'vue'

const { getSelOptions, getLabelByValue } = useOptionsHook()

onMounted(async () => {
  await getSelOptions(optionApi)
  const label = getLabelByValue('1')
  console.log(label)
})
```

### 过滤选项用法

```js
import { useOptionsHook } from '@lingshugroup/web-plus/hooks'
import { onMounted } from 'vue'

const { getSelOptions, filterOptions } = useOptionsHook()

onMounted(async () => {
  await getSelOptions(optionApi)
  const filtered = filterOptions(['1', '2', '3'])
  console.log(filtered)
})
```

### 同步获取选项

```js
import { useOptionsHook } from '@lingshugroup/web-plus/hooks'
import { onMounted } from 'vue'

const { getSelOptions, getOptionsSync } = useOptionsHook()

onMounted(async () => {
  await getSelOptions(optionApi)
  const syncData = getOptionsSync()
  console.log(syncData)
})
```

### 清除缓存

```js
import { useOptionsHook } from '@lingshugroup/web-plus/hooks'

const { clearCache } = useOptionsHook()

function handleClearSpecificCache() {
  clearCache('userOptions')
}

function handleClearAllCache() {
  clearCache()
}
```

### 完整示例

<br />
<ClientOnly>
<div class="demo-form-box">
  <p style="margin:0 0 10px;font-size:13px;color:#909399">LSForm + useOptionsHook 完整示例</p>
  <LSForm
    ref="demoFormRef"
    :form-data="demoFormData"
    :form-items="demoFormItems"
    :loading="demoLoading"
    :column="2"
    confirm-text="提交"
    @submit="handleDemoSubmit"
    @reset="handleDemoReset"
  />
</div>
</ClientOnly>

::: details 点我查看完整代码

```vue
<script setup>
import { useOptionsHook } from '@lingshugroup/web-plus/hooks'
import { reactive, ref } from 'vue'

const { getSelOptions } = useOptionsHook()

const formRef = ref(null)
const formData = reactive({
  username: '',
  realName: '',
  role: '',
  department: '',
  status: ''
})

const optionsData = ref({
  role: [],
  status: [],
  department: []
})

async function loadOptions() {
  const roleApi = () =>
    Promise.resolve([
      { id: '1', roleName: '管理员' },
      { id: '2', roleName: '编辑' },
      { id: '3', roleName: '访客' }
    ])

  const statusApi = () =>
    Promise.resolve([
      { id: '1', statusName: '启用' },
      { id: '0', statusName: '禁用' }
    ])

  const deptApi = () =>
    Promise.resolve([
      { id: 'dept1', deptName: '技术部' },
      { id: 'dept2', deptName: '运营部' }
    ])

  const roleResult = await getSelOptions(roleApi, ['roleName'], ['id'])
  optionsData.value.role = roleResult.options

  const statusResult = await getSelOptions(statusApi, ['statusName'], ['id'])
  optionsData.value.status = statusResult.options

  const deptResult = await getSelOptions(deptApi, ['deptName'], ['id'])
  optionsData.value.department = deptResult.options
}

const formItems = [
  { type: 'input', prop: 'username', label: '用户名', placeholder: '请输入用户名' },
  { type: 'input', prop: 'realName', label: '真实姓名', placeholder: '请输入真实姓名' },
  { type: 'select', prop: 'role', label: '角色', placeholder: '请选择角色', options: [] },
  { type: 'select', prop: 'department', label: '部门', placeholder: '请选择部门', options: [] },
  { type: 'select', prop: 'status', label: '状态', placeholder: '请选择状态', options: [] }
]

function handleSubmit(form) {
  console.log('表单提交', form)
}

function handleReset() {
  console.log('表单重置')
}

loadOptions()
</script>

<template>
  <LSForm
    ref="formRef"
    :form-data="formData"
    :form-items="formItems"
    :options-data="optionsData"
    :column="2"
    confirm-text="提交"
    @submit="handleSubmit"
    @reset="handleReset"
  />
</template>
```

:::

## 功能特性

- **缓存机制**：支持全局缓存池，相同 cacheKey 在有效期内直接返回缓存数据
- **防抖搜索**：内置防抖远程搜索，避免频繁请求接口
- **额外字段**：支持将接口返回的指定字段复制到选项中
- **分页兼容**：自动兼容分页（result.records）和非分页格式
- **禁用支持**：自动识别接口数据中的 disabled 字段

## 配置选项

<ApiIntro :tableColumn="tableColumn" :tableData="configTableData" />

## API

### 1. Params

<ApiIntro :tableColumn="tableColumn" :tableData="paramsTableData" />

### 2. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="attributesTableData" />

### 3. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="methodsTableData" />

### 4. SelDataType

| 属性      | 类型                                                    | 说明                                  |
| --------- | ------------------------------------------------------- | ------------------------------------- |
| allOption | `OptionType[]`                                          | 全部选项（包含"全部"选项 + 实际选项） |
| options   | `OptionType[]`                                          | 实际选项列表                          |
| maps      | `Record<string, { label: string; [key: string]: any }>` | 以 value 为 key 的映射表，可快速查找  |

### 5. OptionType

| 属性          | 类型               | 说明                              |
| ------------- | ------------------ | --------------------------------- |
| label         | `string`           | 选项显示文本                      |
| value         | `string \| number` | 选项值                            |
| disabled      | `boolean`          | 是否禁用（可选）                  |
| [key: string] | `any`              | 额外字段（通过 extraFields 配置） |

<script setup>
import { tableColumn, tableMethodColumn } from '../../constant';
import { ref, reactive, onMounted } from 'vue';
import { useOptionsHook } from '@lingshugroup/web-plus/hooks';

const { getSelOptions } = useOptionsHook();

function optionApi() {
  return new Promise(resolve => {
    const optionData = [
      {
        id: '1',
        name1: '数据',
        name2: '测试',
        value1: 'data',
        value2: 'test'
      }
    ];
    return resolve(optionData);
  });
}

onMounted(async () => {
  const data = await getSelOptions(optionApi, ['name1', 'name2'], ['id', 'value1', 'value2']);
  console.log(data);
});

const configTableData = ref([
  {
    name: 'cacheKey',
    desc: '缓存 key，相同 key 会缓存结果',
    type: 'string',
    value: '-'
  },
  {
    name: 'cacheTime',
    desc: '缓存有效期(ms)，默认 0 不缓存',
    type: 'number',
    value: '0'
  },
  {
    name: 'debounceTime',
    desc: '防抖延迟(ms)，用于远程搜索，默认 300',
    type: 'number',
    value: '300'
  }
]);

const paramsTableData = ref([
  {
    name: 'apiFunc',
    desc: '请求接口函数，接收可选参数，返回 Promise',
    type: '(params?: any) => Promise<any>',
    value: '-'
  },
  {
    name: 'labelKey',
    desc: '标签字段数组，多个字段以 - 拼接',
    type: 'string[]',
    value: "['name']"
  },
  {
    name: 'valueKey',
    desc: '值字段数组，多个字段以 - 拼接',
    type: 'string[]',
    value: "['id']"
  },
  {
    name: 'params',
    desc: '请求参数，传入后会深拷贝再传给接口',
    type: 'object',
    value: '-'
  },
  {
    name: 'allOption',
    desc: '全部选项前置数据，默认 [{ label: "全部", value: "" }]',
    type: 'OptionType[]',
    value: "[{ label: '全部', value: '' }]"
  },
  {
    name: 'extraFields',
    desc: '额外字段数组，指定接口数据中需要复制到选项的字段名',
    type: 'string[]',
    value: '[]'
  }
]);

const attributesTableData = ref([
  {
    name: 'selData',
    desc: '选项数据对象，包含 allOption、options、maps',
    type: 'SelDataType',
    value: '{ allOption: [], options: [], maps: {} }'
  },
  {
    name: 'loading',
    desc: '请求加载状态',
    type: 'Ref<boolean>',
    value: 'false'
  }
]);

const methodsTableData = ref([
  {
    name: 'getSelOptions',
    desc: '根据请求数据获取下拉框选项，支持缓存。参数：apiFunc / labelKey / valueKey / params / allOption / extraFields',
    type: '(apiFunc, labelKey?, valueKey?, params?, allOption?, extraFields?) => Promise<SelDataType>',
    value: '{ allOption, options, maps }'
  },
  {
    name: 'remoteSearchSelOptions',
    desc: '带防抖的远程搜索，参数：apiFunc / params / keyword / labelKey / valueKey / extraFields',
    type: '(apiFunc, params, keyword, labelKey?, valueKey?, extraFields?) => Promise<OptionType[]>',
    value: 'OptionType[]'
  },
  {
    name: 'getOptionsSync',
    desc: '同步获取当前选项数据（不发起请求，从已有数据获取）',
    type: '() => SelDataType',
    value: '{ allOption, options, maps }'
  },
  {
    name: 'getLabelByValue',
    desc: '根据 value 获取对应的 label，未找到则返回原始值字符串',
    type: '(value: string | number) => string',
    value: 'string'
  },
  {
    name: 'filterOptions',
    desc: '根据 value 数组过滤选项，返回匹配的选项列表',
    type: '(values: (string | number)[]) => OptionType[]',
    value: 'OptionType[]'
  },
  {
    name: 'clearCache',
    desc: '清除缓存，传入 key 清除指定缓存，不传则清除全部缓存',
    type: '(key?: string) => void',
    value: '-'
  }
]);

const demoFormRef = ref(null);
const demoLoading = ref(false);

const demoFormData = reactive({
  username: '',
  realName: '',
  email: '',
  phone: '',
  role: '',
  department: '',
  city: '',
  status: ''
});

const demoFormItems = [
  { type: 'input', prop: 'username', label: '用户名', placeholder: '请输入用户名', rules: [{ required: true, message: '请输入用户名' }] },
  { type: 'input', prop: 'realName', label: '真实姓名', placeholder: '请输入真实姓名' },
  { type: 'input', prop: 'email', label: '邮箱', placeholder: '请输入邮箱' },
  { type: 'input', prop: 'phone', label: '手机号', placeholder: '请输入手机号' },
  {
    type: 'select',
    prop: 'role',
    label: '角色',
    placeholder: '请选择角色',
    options: [
      { label: '超级管理员', value: '1', disabled: true },
      { label: '系统管理员', value: '2' },
      { label: '运营专员', value: '3' },
      { label: '财务专员', value: '4' },
      { label: '普通用户', value: '5' }
    ]
  },
  {
    type: 'select',
    prop: 'department',
    label: '部门',
    placeholder: '请选择部门',
    options: [
      { label: '技术研发部', value: 'dept1' },
      { label: '产品运营部', value: 'dept2' },
      { label: '市场营销部', value: 'dept3' },
      { label: '财务审计部', value: 'dept4' },
      { label: '人力资源部', value: 'dept5' }
    ]
  },
  {
    type: 'select',
    prop: 'city',
    label: '城市',
    placeholder: '请选择城市',
    options: [
      { label: '北京', value: 'bj' },
      { label: '上海', value: 'sh' },
      { label: '广州', value: 'gz' },
      { label: '深圳', value: 'sz' },
      { label: '成都', value: 'cd' },
      { label: '武汉', value: 'wh' }
    ]
  },
  {
    type: 'select',
    prop: 'status',
    label: '状态',
    placeholder: '请选择状态',
    options: [
      { label: '启用', value: '1' },
      { label: '禁用', value: '0' }
    ]
  }
];

function handleDemoSubmit(form) {
  window.ElMessage.success(`表单提交成功: ${JSON.stringify(form)}`);
}

function handleDemoReset() {
  window.ElMessage.info('表单已重置');
}
</script>

<style scoped>
.demo-form-box {
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 15px;
  margin-top: 10px;
}
</style>

```

```

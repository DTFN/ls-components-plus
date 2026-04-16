---
outline: deep
---

# Confirm 确认框

::: warning 基于ElMessageBox二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 普通确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick1">普通确认框</LSButton>
<LSConfirm
  v-model="visible"
  :title="title"
  :message="message"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue'

const visible = ref(false)
const title = ref('标题')
const message = ref('内容')

function handleClick1() {
  visible.value = true
}

function onConfirm(data) {
  console.log('确认点击', data.value)
}

function onCancel() {
  console.log('取消点击')
}
```

```html
<LSButton type="primary" @click="handleClick1">普通确认框</LSButton>
<LSConfirm v-model="visible" :title="title" :message="message" @on-confirm="onConfirm" @on-cancel="onCancel">
</LSConfirm>
```

:::

### 2. 可拖拽且内容为html确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick2">可拖拽且内容为html确认框</LSButton>
<LSConfirm
  v-model="visible2"
  :title="title"
  :message="message2"
  draggable
  useHtml
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible2 = ref(false)
const message2 = ref('<span style="color: red;">内容 2</span> <br/> <span style="color: green;">内容 222222</span>')

function handleClick2() {
  visible2.value = true
}
```

```html
<LSButton type="primary" @click="handleClick2">可拖拽且内容为html确认框</LSButton>
<LSConfirm
  v-model="visible2"
  :title="title"
  :message="message2"
  draggable
  useHtml
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 3. 带异步请求的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick3">带异步请求的确认框</LSButton>
<LSConfirm
  v-model="visible3"
  :title="title"
  :message="message3"
  :request-api="requestApi"
  @on-confirm="onConfirm3"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
import axios from 'axios'

const visible3 = ref(false)
const message3 = ref('点击确定后，请求数据')
const requestApi = () => axios.get('https://jsonplaceholder.typicode.com/posts/1')

function handleClick3() {
  visible3.value = true
}

function onConfirm3(data) {
  message3.value = '请求数据完成'
  console.log('请求结果', data.value)
}
```

```html
<LSButton type="primary" @click="handleClick3">带异步请求的确认框</LSButton>
<LSConfirm
  v-model="visible3"
  :title="title"
  :message="message3"
  :request-api="requestApi"
  @on-confirm="onConfirm3"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 4. 不同类型的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick4('success')">成功确认框</LSButton>
<LSButton type="info" @click="handleClick4('info')">信息确认框</LSButton>
<LSButton type="warning" @click="handleClick4('warning')">警告确认框</LSButton>
<LSButton type="danger" @click="handleClick4('error')">错误确认框</LSButton>
<LSConfirm
  v-model="visible4"
  :title="title4"
  :message="message4"
  :type="type4"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible4 = ref(false)
const title4 = ref('')
const message4 = ref('')
const type4 = ref('')

function handleClick4(type) {
  type4.value = type

  switch (type) {
    case 'success':
      title4.value = '成功提示'
      message4.value = '操作成功！'
      break
    case 'info':
      title4.value = '信息提示'
      message4.value = '这是一条信息提示。'
      break
    case 'warning':
      title4.value = '警告提示'
      message4.value = '请确认您的操作！'
      break
    case 'error':
      title4.value = '错误提示'
      message4.value = '操作失败，请重试！'
      break
  }

  visible4.value = true
}
```

```html
<LSButton type="primary" @click="handleClick4('success')">成功确认框</LSButton>
<LSButton type="info" @click="handleClick4('info')">信息确认框</LSButton>
<LSButton type="warning" @click="handleClick4('warning')">警告确认框</LSButton>
<LSButton type="danger" @click="handleClick4('error')">错误确认框</LSButton>
<LSConfirm
  v-model="visible4"
  :title="title4"
  :message="message4"
  :type="type4"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 5. 自定义按钮文本的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick5">自定义按钮文本</LSButton>
<LSConfirm
  v-model="visible5"
  :title="title"
  :message="message"
  confirm-btn-txt="同意"
  cancel-btn-txt="拒绝"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible5 = ref(false)

function handleClick5() {
  visible5.value = true
}
```

```html
<LSButton type="primary" @click="handleClick5">自定义按钮文本</LSButton>
<LSConfirm
  v-model="visible5"
  :title="title"
  :message="message"
  confirm-btn-txt="同意"
  cancel-btn-txt="拒绝"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 6. 居中显示的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick6">居中显示确认框</LSButton>
<LSConfirm
  v-model="visible6"
  :title="title"
  :message="message"
  center
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible6 = ref(false)

function handleClick6() {
  visible6.value = true
}
```

```html
<LSButton type="primary" @click="handleClick6">居中显示确认框</LSButton>
<LSConfirm v-model="visible6" :title="title" :message="message" center @on-confirm="onConfirm" @on-cancel="onCancel">
</LSConfirm>
```

:::

### 7. 带自定义图标的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick7">自定义图标确认框</LSButton>
<LSConfirm
  v-model="visible7"
  :title="title"
  :message="message"
  :icon="customIcon"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
import { QuestionFilled } from '@element-plus/icons-vue'
import { markRaw } from 'vue'

const visible7 = ref(false)
const customIcon = markRaw(QuestionFilled)

function handleClick7() {
  visible7.value = true
}
```

```html
<LSButton type="primary" @click="handleClick7">自定义图标确认框</LSButton>
<LSConfirm
  v-model="visible7"
  :title="title"
  :message="message"
  :icon="customIcon"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 8. 禁用关闭按钮的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick8">禁用关闭按钮</LSButton>
<LSConfirm
  v-model="visible8"
  :title="title"
  :message="message"
  :show-close="false"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible8 = ref(false)

function handleClick8() {
  visible8.value = true
}
```

```html
<LSButton type="primary" @click="handleClick8">禁用关闭按钮</LSButton>
<LSConfirm
  v-model="visible8"
  :title="title"
  :message="message"
  :show-close="false"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 9. 点击蒙层可关闭的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick9">点击蒙层可关闭</LSButton>
<LSConfirm
  v-model="visible9"
  :title="title"
  :message="message"
  :close-on-click-modal="true"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible9 = ref(false)

function handleClick9() {
  visible9.value = true
}
```

```html
<LSButton type="primary" @click="handleClick9">点击蒙层可关闭</LSButton>
<LSConfirm
  v-model="visible9"
  :title="title"
  :message="message"
  :close-on-click-modal="true"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 10. 带请求参数的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick10">带请求参数</LSButton>
<LSConfirm
  v-model="visible10"
  :title="title"
  :message="message10"
  :request-api="requestApiWithParams"
  :request-params="requestParams"
  @on-confirm="onConfirm10"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible10 = ref(false)
const message10 = ref('点击确定后，带参数请求数据')
const requestParams = { id: 123, name: '测试' }

function requestApiWithParams(params) {
  console.log('请求参数:', params)

  return axios.get('https://jsonplaceholder.typicode.com/posts/1', { params })
}

function handleClick10() {
  visible10.value = true
}

function onConfirm10(data) {
  message10.value = '请求数据完成'
  console.log('请求结果:', data.value)
}
```

```html
<LSButton type="primary" @click="handleClick10">带请求参数</LSButton>
<LSConfirm
  v-model="visible10"
  :title="title"
  :message="message10"
  :request-api="requestApiWithParams"
  :request-params="requestParams"
  @on-confirm="onConfirm10"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 11. 仅显示确认按钮的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick11">仅显示确认按钮</LSButton>
<LSConfirm
  v-model="visible11"
  :title="title"
  :message="message"
  :show-cancel-btn="false"
  @on-confirm="onConfirm"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible11 = ref(false)

function handleClick11() {
  visible11.value = true
}
```

```html
<LSButton type="primary" @click="handleClick11">仅显示确认按钮</LSButton>
<LSConfirm v-model="visible11" :title="title" :message="message" :show-cancel-btn="false" @on-confirm="onConfirm">
</LSConfirm>
```

:::

### 12. 按ESC键可关闭的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick12">按ESC键可关闭</LSButton>
<LSConfirm
  v-model="visible12"
  :title="title"
  :message="message"
  :close-on-press-escape="true"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible12 = ref(false)

function handleClick12() {
  visible12.value = true
}
```

```html
<LSButton type="primary" @click="handleClick12">按ESC键可关闭</LSButton>
<LSConfirm
  v-model="visible12"
  :title="title"
  :message="message"
  :close-on-press-escape="true"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 13. 带自定义关闭图标的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick13">自定义关闭图标</LSButton>
<LSConfirm
  v-model="visible13"
  :title="title"
  :message="message"
  :close-icon="closeIcon"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
import { CloseCircleFilled } from '@element-plus/icons-vue'

const visible13 = ref(false)
const closeIcon = markRaw(CloseCircleFilled)

function handleClick13() {
  visible13.value = true
}
```

```html
<LSButton type="primary" @click="handleClick13">自定义关闭图标</LSButton>
<LSConfirm
  v-model="visible13"
  :title="title"
  :message="message"
  :close-icon="closeIcon"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
```

:::

### 14. 带自定义类名的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick14">自定义样式</LSButton>
<LSConfirm
  v-model="visible14"
  :title="title"
  :message="message"
  custom-class="custom-confirm"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible14 = ref(false)

function handleClick14() {
  visible14.value = true
}
```

```html
<LSButton type="primary" @click="handleClick14">自定义样式</LSButton>
<LSConfirm
  v-model="visible14"
  :title="title"
  :message="message"
  custom-class="custom-confirm"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>

<style scoped>
  :deep(.custom-confirm) {
    .el-message-box__title {
      color: #409eff;
    }

    .el-message-box__message {
      font-size: 16px;
    }

    .el-button--primary {
      background-color: #67c23a;
      border-color: #67c23a;
    }
  }
</style>
```

:::

### 15. 动态更新消息内容的确认框

<ClientOnly>
<LSButton type="primary" @click="handleClick15">动态更新内容</LSButton>
<LSConfirm
  v-model="visible15"
  :title="title"
  :message="message15"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
</ClientOnly>

::: details 点我查看代码

```js
const visible15 = ref(false)
const message15 = ref('初始消息内容')

function handleClick15() {
  message15.value = '初始消息内容'
  visible15.value = true

  // 2秒后更新消息内容
  setTimeout(() => {
    message15.value = '消息内容已更新'
  }, 2000)
}
```

```html
<LSButton type="primary" @click="handleClick15">动态更新内容</LSButton>
<LSConfirm v-model="visible15" :title="title" :message="message15" @on-confirm="onConfirm" @on-cancel="onCancel">
</LSConfirm>
```

:::

## 确认框配置详解

### 1. 基本配置

```js
const confirmConfig = {
  // 控制确认框显示/隐藏
  visible: false,

  // 确认框标题
  title: '确认操作',

  // 确认框内容
  message: '您确定要执行此操作吗？',

  // 确认框类型
  type: 'warning', // success / info / warning / error

  // 确认按钮文本
  confirmBtnTxt: '确定',

  // 取消按钮文本
  cancelBtnTxt: '取消'
}
```

### 2. 行为配置

```js
const behaviorConfig = {
  // 是否显示取消按钮
  showCancelBtn: true,

  // 是否显示确认按钮
  showConfirmBtn: true,

  // 是否显示关闭按钮
  showClose: true,

  // 是否居中显示
  center: false,

  // 是否可拖拽
  draggable: false,

  // 是否使用HTML内容
  useHtml: false,

  // 点击蒙层是否关闭
  closeOnClickModal: false,

  // 按ESC是否关闭
  closeOnPressEscape: false
}
```

### 3. 异步请求配置

```js
const asyncConfig = {
  // 异步请求函数
  requestApi: async (params) => {
    // 执行异步操作
    const response = await axios.post('/api/action', params)

    return response.data
  },

  // 请求参数
  requestParams: {
    id: 123,
    action: 'delete'
  }
}
```

### 4. 样式配置

```js
const styleConfig = {
  // 自定义类名
  customClass: 'my-confirm',

  // 挂载目标
  appendTo: 'body',

  // 自定义图标
  icon: customIcon,

  // 自定义关闭图标
  closeIcon
}
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Events

<ApiIntro :tableColumn="eventTableColumn" :tableData="tableData2" />

## 使用说明

### 1. 基本使用

LSConfirm 组件基于 Element Plus 的 ElMessageBox 进行封装，提供了更便捷的使用方式：

```html
<template>
  <LSButton @click="showConfirm">显示确认框</LSButton>
  <LSConfirm
    v-model="visible"
    title="确认操作"
    message="您确定要删除这条数据吗？"
    @on-confirm="handleConfirm"
    @on-cancel="handleCancel"
  />
</template>

<script setup>
  import { ref } from 'vue'

  const visible = ref(false)

  function showConfirm() {
    visible.value = true
  }

  function handleConfirm(data) {
    console.log('用户确认了操作', data.value)
    // 执行确认后的逻辑
  }

  function handleCancel() {
    console.log('用户取消了操作')
    // 执行取消后的逻辑
  }
</script>
```

### 2. 异步操作

当需要在确认后执行异步操作（如API请求）时，可以使用 `requestApi` 属性：

```html
<LSConfirm
  v-model="visible"
  title="提交数据"
  message="确定要提交这些数据吗？"
  :request-api="submitData"
  :request-params="formData"
  @on-confirm="handleConfirm"
/>

<script setup>
  import axios from 'axios'

  const submitData = async (params) => {
    // 执行API请求
    const response = await axios.post('/api/submit', params)
    return response.data
  }

  function handleConfirm(data) {
    console.log('提交成功', data.value)
    // 处理成功后的逻辑
  }
</script>
```

### 3. 自定义内容

当需要显示富文本内容时，可以使用 `useHtml` 属性：

```html
<LSConfirm v-model="visible" title="提示信息" :message="htmlContent" useHtml />

<script setup>
  const htmlContent = '<div>这是<b>加粗文本</b>和<i>斜体文本</i></div>'
</script>
```

### 4. 动态更新内容

如果需要在确认框显示后动态更新内容，可以直接修改 `message` 属性：

```html
<LSConfirm v-model="visible" title="处理中" :message="message" />

<script setup>
  import { ref } from 'vue'

  const message = ref('正在处理，请稍候...')
  const visible = ref(false)

  function showConfirm() {
    visible.value = true

    // 模拟异步操作
    setTimeout(() => {
      message.value = '处理完成！'
    }, 2000)
  }
</script>
```

### 5. 实际应用场景

#### 5.1 删除确认

```html
<template>
  <LSButton type="danger" @click="deleteItem(item.id)">删除</LSButton>
  <LSConfirm
    v-model="deleteVisible"
    title="删除确认"
    :message="deleteMessage"
    type="error"
    confirm-btn-txt="删除"
    cancel-btn-txt="取消"
    @on-confirm="handleDeleteConfirm"
  />
</template>

<script setup>
  import { ref, computed } from 'vue'

  const deleteVisible = ref(false)
  const deleteId = ref(null)
  const deleteMessage = computed(() => {
    return `您确定要删除ID为${deleteId.value}的项目吗？此操作不可恢复。`
  })

  function deleteItem(id) {
    deleteId.value = id
    deleteVisible.value = true
  }

  function handleDeleteConfirm() {
    // 执行删除操作
    console.log('删除项目', deleteId.value)
    // 调用删除API
  }
</script>
```

#### 5.2 表单提交确认

```html
<template>
  <LSButton type="primary" @click="submitForm">提交表单</LSButton>
  <LSConfirm
    v-model="submitVisible"
    title="提交确认"
    :message="submitMessage"
    type="warning"
    :request-api="submitFormData"
    :request-params="formData"
    @on-confirm="handleSubmitConfirm"
  />
</template>

<script setup>
  import { ref, computed } from 'vue'
  import axios from 'axios'

  const submitVisible = ref(false)
  const formData = ref({
    name: '',
    email: '',
  })

  const submitMessage = computed(() => {
    return `确定要提交以下信息吗？\n姓名：${formData.value.name}\n邮箱：${formData.value.email}`
  })

  function submitForm() {
    // 表单验证
    if (!formData.value.name || !formData.value.email) {
      return
    }
    submitVisible.value = true
  }

  const submitFormData = async (params) => {
    const response = await axios.post('/api/form/submit', params)
    return response.data
  }

  function handleSubmitConfirm(data) {
    console.log('表单提交成功', data.value)
    // 处理成功逻辑
  }
</script>
```

#### 5.3 批量操作确认

```html
<template>
  <LSButton type="primary" @click="batchDelete" :disabled="selectedIds.length === 0">批量删除</LSButton>
  <LSConfirm
    v-model="batchVisible"
    title="批量操作确认"
    :message="batchMessage"
    type="error"
    confirm-btn-txt="确定删除"
    cancel-btn-txt="取消"
    :request-api="batchDeleteData"
    :request-params="{ ids: selectedIds }"
    @on-confirm="handleBatchConfirm"
  />
</template>

<script setup>
  import { ref, computed } from 'vue'
  import axios from 'axios'

  const selectedIds = ref([])
  const batchVisible = ref(false)

  const batchMessage = computed(() => {
    return `您确定要删除选中的${selectedIds.value.length}个项目吗？此操作不可恢复。`
  })

  function batchDelete() {
    if (selectedIds.value.length === 0) return
    batchVisible.value = true
  }

  const batchDeleteData = async (params) => {
    const response = await axios.post('/api/batch/delete', params)
    return response.data
  }

  function handleBatchConfirm(data) {
    console.log('批量删除成功', data.value)
    // 刷新列表
    selectedIds.value = []
  }
</script>
```

## 最佳实践

### 1. 确认框管理

建议将确认框的状态和逻辑集中管理，便于维护：

```js
// composables/useConfirm.js
import { ref } from 'vue'
// 在组件中使用
import { useConfirm as useConfirmHook } from '@/composables/useConfirm'

export function useConfirm() {
  const visible = ref(false)
  const config = ref({
    title: '确认操作',
    message: '您确定要执行此操作吗？',
    type: 'warning'
  })

  function show(options) {
    Object.assign(config.value, options)
    visible.value = true
  }

  function hide() {
    visible.value = false
  }

  return {
    visible,
    config,
    show,
    hide
  }
}

const { visible, config, show } = useConfirmHook()

function deleteItem(id) {
  show({
    title: '删除确认',
    message: `您确定要删除ID为${id}的项目吗？`,
    type: 'error'
  })
}
```

### 2. 异步操作处理

处理异步操作时，建议添加加载状态和错误处理：

```html
<LSConfirm
  v-model="visible"
  :title="config.title"
  :message="config.message"
  :request-api="asyncAction"
  @on-confirm="handleSuccess"
  @on-cancel="handleCancel"
/>

<script setup>
  import { ref } from 'vue'
  import axios from 'axios'

  const config = ref({
    title: '提交数据',
    message: '确定要提交吗？',
  })

  const asyncAction = async (params) => {
    try {
      const response = await axios.post('/api/submit', params)
      return response.data
    } catch (error) {
      console.error('请求失败:', error)
      throw error // 抛出错误，让组件捕获
    }
  }

  function handleSuccess(data) {
    config.value.message = '提交成功！'
    console.log('成功:', data.value)
  }

  function handleCancel() {
    console.log('取消操作')
  }
</script>
```

### 3. 样式定制

通过自定义类名和CSS变量，可以定制确认框的样式：

```html
<LSConfirm v-model="visible" title="自定义样式" message="这是一个自定义样式的确认框" custom-class="custom-confirm" />

<style scoped>
  :deep(.custom-confirm) {
    .el-message-box__title {
      color: #409eff;
    }

    .el-message-box__message {
      font-size: 16px;
    }

    .el-button--primary {
      background-color: #67c23a;
      border-color: #67c23a;
    }
  }
</style>
```

<script setup>
import { tableColumn, tableMethodColumn } from '../constant';
import { ref, markRaw } from 'vue';
import axios from 'axios';
import { QuestionFilled, CircleCloseFilled } from '@element-plus/icons-vue';

const visible = ref(false);
const title = ref('标题');
const message = ref('内容');

const visible2 = ref(false);
const message2 = ref('<span style="color: red;">内容 2</span> <br/> <span style="color: green;">内容 222222</span>');

const visible3 = ref(false);
const message3 = ref('点击确定后，请求数据');
const requestApi = () => axios.get('https://jsonplaceholder.typicode.com/posts/1');

const visible4 = ref(false);
const title4 = ref('');
const message4 = ref('');
const type4 = ref('');

const visible5 = ref(false);
const visible6 = ref(false);
const visible7 = ref(false);
const customIcon = markRaw(QuestionFilled);
const visible8 = ref(false);
const visible9 = ref(false);

const visible10 = ref(false);
const message10 = ref('点击确定后，带参数请求数据');
const requestParams = { id: 123, name: '测试' };

const visible11 = ref(false);
const visible12 = ref(false);
const visible13 = ref(false);
const visible14 = ref(false);
const visible15 = ref(false);
const message15 = ref('初始消息内容');

const closeIcon = markRaw(CircleCloseFilled);

function handleClick1() {
  visible.value = true;
}

function handleClick2() {
  visible2.value = true;
}

function handleClick3() {
  visible3.value = true;
}

function handleClick4(type) {
  type4.value = type;

  switch (type) {
    case 'success':
      title4.value = '成功提示';
      message4.value = '操作成功！';
      break;
    case 'info':
      title4.value = '信息提示';
      message4.value = '这是一条信息提示。';
      break;
    case 'warning':
      title4.value = '警告提示';
      message4.value = '请确认您的操作！';
      break;
    case 'error':
      title4.value = '错误提示';
      message4.value = '操作失败，请重试！';
      break;
  }

  visible4.value = true;
}

function handleClick5() {
  visible5.value = true;
}

function handleClick6() {
  visible6.value = true;
}

function handleClick7() {
  visible7.value = true;
}

function handleClick8() {
  visible8.value = true;
}

function handleClick9() {
  visible9.value = true;
}

function handleClick10() {
  visible10.value = true;
}

function handleClick11() {
  visible11.value = true;
}

function handleClick12() {
  visible12.value = true;
}

function handleClick13() {
  visible13.value = true;
}

function handleClick14() {
  visible14.value = true;
}

function handleClick15() {
  message15.value = '初始消息内容';
  visible15.value = true;

  // 2秒后更新消息内容
  setTimeout(() => {
    message15.value = '消息内容已更新';
  }, 2000);
}

function onConfirm(data) {
  console.log('确认点击', data.value);
}

function onCancel() {
  console.log('取消点击');
}

function onConfirm3(data) {
  message3.value = '请求数据完成';
  console.log('请求结果', data.value);
}

function onConfirm10(data) {
  message10.value = '请求数据完成';
  console.log('请求结果', data.value);
}

const requestApiWithParams = (params) => {
  console.log('请求参数:', params);
  return axios.get('https://jsonplaceholder.typicode.com/posts/1', { params });
};

const tableData = ref([
  {
    name: 'model-value / v-model',
    desc: '是否显示',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-'
  },
  {
    name: 'type',
    desc: '类型: 支持 success / info / warning / error',
    type: 'string',
    value: '-'
  },
  {
    name: 'message',
    desc: '内容',
    type: 'string',
    value: '-'
  },
  {
    name: 'confirmBtnTxt',
    desc: '确认按钮文案',
    type: 'string',
    value: '确定'
  },
  {
    name: 'cancelBtnTxt',
    desc: '取消按钮文案',
    type: 'string',
    value: '取消'
  },
  {
    name: 'showCancelBtn',
    desc: '是否显示取消按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'showConfirmBtn',
    desc: '是否显示确认按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'center',
    desc: '是否居中',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'draggable',
    desc: '是否可拖拽',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'useHtml',
    desc: '是否使用html，为true时，message可以是html字符串',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'showClose',
    desc: '是否显示关闭按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'customClass',
    desc: '自定义类名',
    type: 'string',
    value: '-'
  },
  {
    name: 'closeOnClickModal',
    desc: '点击蒙层是否允许关闭',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'closeOnPressEscape',
    desc: '是否可以通过按下 ESC 关闭',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'appendTo',
    desc: '挂载的目标节点',
    type: 'string / HTMLElement',
    value: 'body'
  },
  {
    name: 'requestApi',
    desc: '异步请求接口',
    type: 'Function',
    value: '-'
  },
  {
    name: 'requestParams',
    desc: '异步请求参数',
    type: 'Object',
    value: '{}'
  },
  {
    name: 'icon',
    desc: '自定义图标',
    type: 'Object',
    value: '-'
  },
  {
    name: 'closeIcon',
    desc: '自定义关闭图标',
    type: 'Object',
    value: '-'
  }
]);

const eventTableColumn = ref([
  {
    prop: 'name',
    label: '事件名'
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'params',
    label: '参数'
  }
]);

const tableData2 = ref([
  {
    name: 'onConfirm',
    desc: '点击确认时触发',
    params: 'data: 请求接口返回的数据'
  },
  {
    name: 'onCancel',
    desc: '点击取消时触发',
    params: '-'
  }
]);
</script>

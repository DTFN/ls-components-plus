---
outline: deep
---

# Dialog 对话框

::: warning 基于el-dialog二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 基础用法

<br />
<LSButton type="primary" @click="visible = true">基础用法</LSButton>

<LSDialog v-model="visible" :loading="loading" title="基础用法Title" @on-confirm="onConfirm"> <div>基础用法</div> </LSDialog>

::: details 点我查看代码

```js
import { ref } from 'vue';

const visible = ref(false);
const loading = ref(false);

const onConfirm = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    visible.value = false;
  }, 2000);
};
```

```
<LSButton type="primary" @click="visible = true">基础用法</LSButton>

<LSDialog
  v-model="visible"
  :loading="loading"
  title="基础用法Title"
  @on-confirm="onConfirm"
>
  <div>基础用法</div>
</LSDialog>
```

:::

### 2. 自定义按钮

<br />

<LSButton type="primary" @click="visible2 = true">自定义按钮</LSButton>

<LSDialog v-model="visible2" :loading="loading" title="自定义按钮Title" :btn-confirm-config="btnConfirmConfig" @on-confirm="onConfirm"> <div>自定义按钮</div> </LSDialog>

::: details 点我查看代码

```js
const visible2 = ref(false);
const loading = ref(false);

const btnConfirmConfig = ref({
  plain: true,
  type: 'warning',
  iconConfig: {
    name: 'Edit'
  }
});

const onConfirm = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    visible.value = false;
  }, 2000);
};
```

```html
<LSButton type="primary" @click="visible2 = true">自定义按钮</LSButton>

<LSDialog
  v-model="visible2"
  :loading="loading"
  title="自定义按钮Title"
  :btn-confirm-config="btnConfirmConfig"
  @on-confirm="onConfirm"
>
  <div>自定义按钮</div>
</LSDialog>
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods，通过emit抛出的可使用方法

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableMethodColumn } from '../constant';
import { ref } from 'vue';

const visible = ref(false);
const loading = ref(false);

const onConfirm = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    visible.value = false;
  }, 2000);
}

const visible2 = ref(false);
const btnConfirmConfig = ref({
  plain: true,
  type: 'warning',
  iconConfig: {
    name: 'Edit'
  }
});

const tableData = ref([
  {
    name: 'hasFooter',
    desc: '是否显示底部按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'hasCancelBtn',
    desc: '是否显示取消按钮',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'loading',
    desc: '是否为加载状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'btnCancelConfig',
    desc: '取消按钮配置，具体配置参考LSButton',
    type: 'object',
    value: `{txt: '取消'}`
  },
  {
    name: 'btnConfirmConfig',
    desc: '确认按钮配置，具体配置参考LSButton',
    type: 'object',
    value: `{txt: '确认', type: 'primary'}`
  }
])

const tableData2 = ref([
  {
    name: 'onCancel',
    desc: '点击取消时触发',
    type: 'function',
    value: '-'
  },
  {
    name: 'onConfirm',
    desc: '点击确认时触发',
    type: 'function',
    value: '-'
  }
])
</script>

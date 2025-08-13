---
outline: deep
---

# Auth 权限指令

::: warning 适用于操作按钮的权限控制，支持其他条件配置。
:::

## 使用方式

假设权限列表配置为： ['a', 'b', 'c'];

### 1. 权限code控制

<br />
<!-- <LSButton v-auth="{ code: 'c' }">test1</LSButton> -->

<!-- <LSButton v-auth="{ code: 'd' }">test2</LSButton> -->

```html
<LSButton v-auth="{ code: 'c' }">test1</LSButton>

<LSButton v-auth="{ code: 'd' }">test2</LSButton>
```

### 2. 其他条件配置

<br />
<!-- <LSButton v-auth="{ code: 'c', show: isShow }">test1</LSButton> -->

<!-- <LSButton v-auth="{ code: 'c', show: !isShow }">test2</LSButton> -->

```js
import { ref } from 'vue';
const isShow = ref(false);
```

```html
<LSButton v-auth="{ code: 'c', show: isShow }">test1</LSButton> <LSButton v-auth="{ code: 'c', show: !isShow }">test2</LSButton>
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

<script setup>
import { tableColumn } from '../../constant';
import { ref } from 'vue'; 
const isShow = ref(false);

const tableData = ref([
  {
    name: 'code',
    desc: '权限code',
    type: 'string',
    default: '-',
  },
  {
    name: 'show',
    desc: '其他条件判断配置',
    type: 'boolean',
    default: '-',
  }
])
</script>

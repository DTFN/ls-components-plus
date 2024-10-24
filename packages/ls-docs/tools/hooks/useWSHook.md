---
outline: deep
---

# useWSHook

::: warning websocket相关公共方法，按各自需求使用。
:::

## 使用方式

```js
import { useWSHook } from '@lingshugroup/web-plus';
import { onMounted, ref } from 'vue';

const { createWebSocket, wsOpen, wsClose, wsData, wsSend } = useWSHook();
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableMethodData" />

<script setup>
import { tableColumn, tableMethodColumn } from '../../constant';
import { useWSHook } from '@lingshugroup/web-plus/hooks';
import { onMounted, ref } from 'vue';

const { createWebSocket, wsOpen, wsClose, wsData, wsSend } = useWSHook();

const tableData = ref([
  {
    name: 'wsData',
    desc: 'websocket返回数据',
    type: 'json',
    value: '{}'
  }
])

const tableMethodData = ref([
  {
    name: 'createWebSocket',
    desc: '创建websocket, 参数: 1.请求地址 2.回调函数',
    type: 'function',
    value: '-'
  },
  {
    name: 'wsOpen',
    desc: 'websocket打开方法',
    type: 'function',
    value: '-'
  },
  {
    name: 'wsClose',
    desc: 'websocket关闭方法',
    type: 'function',
    value: '-'
  },
  {
    name: 'wsSend',
    desc: 'websocket发送方法',
    type: 'function',
    value: '-'
  }
])
</script>

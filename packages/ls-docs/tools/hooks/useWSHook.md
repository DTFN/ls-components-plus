---
outline: deep
---

# useWSHook

::: warning websocket相关公共方法，按各自需求使用。
该 Hook 基于 @vueuse/core 的 useWebSocket 实现。
:::

## 使用方式

```js
import { useWSHook } from '@lingshugroup/web-plus/hooks';

const { createWebSocket, wsOpen, wsClose, wsData, wsSend } = useWSHook();

// 创建 WebSocket 连接
createWebSocket('ws://localhost:8080/ws', () => {
  console.log('收到消息:', wsData.value);
});
```

## 功能特性

- **自动重连**：连接断开后自动尝试重连
- **心跳检测**：内置心跳保活机制，过滤 `pong` 响应
- **手动控制**：支持手动打开、关闭、发送消息

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableMethodData" />

### 3. createWebSocket 参数

<ApiIntro :tableColumn="tableColumn" :tableData="createParamsData" />

## 完整示例

```vue
<template>
  <div>
    <el-button @click="connect">连接</el-button>
    <el-button @click="disconnect">断开</el-button>
    <el-button @click="sendMessage">发送消息</el-button>
    
    <div>状态: {{ status }}</div>
    <div>收到的消息: {{ wsData }}</div>
  </div>
</template>

<script setup>
import { useWSHook } from '@lingshugroup/web-plus/hooks';
import { ref, computed } from 'vue';

const { 
  createWebSocket,  // 创建连接
  wsOpen,           // 打开连接
  wsClose,          // 关闭连接
  wsData,           // 接收的数据
  wsSend            // 发送消息
} = useWSHook();

// 连接状态
const status = computed(() => wsData.value ? '已连接' : '未连接');

// 连接 WebSocket
const connect = () => {
  createWebSocket('ws://localhost:8080/ws', () => {
    console.log('收到消息:', wsData.value);
  });
};

// 断开连接
const disconnect = () => {
  wsClose.value?.();
};

// 发送消息
const sendMessage = () => {
  wsSend.value?.(JSON.stringify({ type: 'ping', data: 'Hello' }));
};
</script>
```

## 内部配置

该 Hook 内部使用的配置：

| 配置项 | 值 | 说明 |
|--------|-----|------|
| immediate | false | 不立即连接，需手动调用创建 |
| heartbeat | true | 开启心跳保活 |
| autoReconnect | true | 连接断开时自动重连 |
| autoClose | false | 不自动关闭连接 |

<script setup>
import { tableColumn, tableMethodColumn } from '../../constant';
import { useWSHook } from '@lingshugroup/web-plus/hooks';
import { ref } from 'vue';

const { wsData } = useWSHook();

const tableData = ref([
  {
    name: 'wsData',
    desc: 'WebSocket 接收到的消息数据',
    type: 'ref<any>',
    value: '-'
  }
])

const tableMethodData = ref([
  {
    name: 'createWebSocket',
    desc: '创建 WebSocket 连接，参数：1.wsPath(WebSocket地址) 2.callback(消息回调函数)',
    type: 'function',
    value: '-'
  },
  {
    name: 'wsOpen',
    desc: 'WebSocket 打开方法，用于手动触发连接',
    type: 'ref<function>',
    value: '-'
  },
  {
    name: 'wsClose',
    desc: 'WebSocket 关闭方法，用于手动断开连接',
    type: 'ref<function>',
    value: '-'
  },
  {
    name: 'wsSend',
    desc: 'WebSocket 发送方法，用于向服务器发送消息',
    type: 'ref<function>',
    value: '-'
  }
])

const createParamsData = ref([
  {
    name: 'wsPath',
    desc: 'WebSocket 服务地址',
    type: 'string',
    value: '-'
  },
  {
    name: 'callback',
    desc: '消息回调函数，当收到消息时触发',
    type: 'function',
    value: '-'
  }
])
</script>

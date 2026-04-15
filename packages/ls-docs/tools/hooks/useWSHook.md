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

const { createWebSocket, sendMessage, wsData, status } = useWSHook();

// 创建连接
createWebSocket('ws://localhost:8080/ws', (data) => {
  console.log('收到消息:', data);
});
```

## 功能特性

- **自动重连**：连接断开后自动尝试重连（默认最多 5 次）
- **心跳保活**：内置心跳机制，保持连接活跃
- **消息历史**：自动记录所有收到的消息
- **状态管理**：提供详细的连接状态
- **回调监听**：支持连接/断开/错误/消息回调
- **JSON 解析**：自动解析 JSON 格式消息

## 配置选项

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| path | `string` | - | WebSocket 地址 |
| autoConnect | `boolean` | `false` | 是否自动连接 |
| heartbeatInterval | `number` | `30000` | 心跳间隔(ms) |
| autoReconnect | `boolean` | `true` | 是否自动重连 |
| maxReconnectAttempts | `number` | `5` | 最大重连次数 |
| reconnectInterval | `number` | `3000` | 重连间隔(ms) |
| onOpen | `() => void` | - | 连接成功回调 |
| onClose | `() => void` | - | 连接关闭回调 |
| onError | `(e) => void` | - | 错误回调 |
| onMessage | `(data) => void` | - | 消息回调 |

## 返回值

### 状态

| 属性 | 类型 | 说明 |
|------|------|------|
| status | `Ref<'connecting' \| 'open' \| 'close' \| 'error' \| 'reconnecting'>` | 连接状态 |
| wsData | `Ref<any>` | 最新收到的消息 |
| messageList | `Ref<any[]>` | 消息历史列表 |
| isConnecting | `Ref<boolean>` | 是否正在连接 |
| isConnected | `Ref<boolean>` | 是否已连接 |

### 方法

| 方法 | 说明 |
|------|------|
| createWebSocket(path, callback?) | 创建 WebSocket 连接 |
| sendMessage(data) | 发送消息 |
| reconnect() | 主动重新连接 |
| heartbeat() | 主动发送心跳 |
| clearMessages() | 清空消息历史 |
| getOptions() | 获取当前配置 |
| updateOptions(options) | 更新配置 |

### 回调

| 回调 | 说明 |
|------|------|
| onOpen | 连接成功回调 |
| onClose | 连接关闭回调 |
| onError | 错误回调 |
| onMessage | 消息回调 |

## 完整示例

### 基础用法

```vue
<template>
  <div>
    <el-button @click="connect">连接</el-button>
    <el-button @click="disconnect">断开</el-button>
    <el-button @click="send">发送消息</el-button>
    <el-button @click="clear">清空消息</el-button>

    <div>状态: {{ status }}</div>
    <div>最新消息: {{ wsData }}</div>
    <div>消息历史: {{ messageList }}</div>
  </div>
</template>

<script setup>
import { useWSHook } from '@lingshugroup/web-plus/hooks';

const { 
  status,
  wsData,
  messageList,
  isConnected,
  createWebSocket,
  close,
  sendMessage,
  heartbeat,
  clearMessages
} = useWSHook();

// 创建连接
connect();
function connect() {
  createWebSocket('ws://localhost:8080/ws', (data) => {
    console.log('收到:', data);
  });
}

// 断开连接
function disconnect() {
  close.value?.();
}

// 发送消息
function send() {
  sendMessage({ type: 'ping', data: 'hello' });
}

// 主动心跳
function sendHeartbeat() {
  heartbeat();
}

// 清空消息
function clear() {
  clearMessages();
}
</script>
```

### 使用回调配置

```js
import { useWSHook } from '@lingshugroup/web-plus/hooks';

const { 
  status,
  wsData,
  createWebSocket,
  reconnect
} = useWSHook({
  heartbeatInterval: 30000,    // 心跳间隔 30 秒
  autoReconnect: true,          // 自动重连
  maxReconnectAttempts: 3,      // 最多重连 3 次
  reconnectInterval: 5000,      // 重连间隔 5 秒
  onOpen: () => {
    console.log('连接成功');
  },
  onClose: () => {
    console.log('连接已关闭');
  },
  onError: (e) => {
    console.error('连接错误:', e);
  },
  onMessage: (data) => {
    console.log('收到消息:', data);
  }
});

// 创建连接
createWebSocket('ws://localhost:8080/ws');
```

### 实时消息列表

```vue
<template>
  <div>
    <div class="status">
      状态: <span :class="statusClass">{{ status }}</span>
    </div>
    
    <div class="message-list">
      <div v-for="(msg, index) in messageList" :key="index" class="message-item">
        <span class="time">{{ formatTime(msg.timestamp) }}</span>
        <span class="data">{{ JSON.stringify(msg.data) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWSHook } from '@lingshugroup/web-plus/hooks';
import { computed } from 'vue';

const { status, messageList, createWebSocket } = useWSHook();

const statusClass = computed(() => ({
  connecting: 'text-blue',
  open: 'text-green',
  close: 'text-gray',
  error: 'text-red',
  reconnecting: 'text-yellow'
}));

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString();
};

// 连接
createWebSocket('ws://localhost:8080/ws');
</script>

<style scoped>
.text-green { color: green; }
.text-red { color: red; }
.text-blue { color: blue; }
.text-yellow { color: orange; }
.text-gray { color: gray; }
</style>
```

### 自动重连示例

```js
import { useWSHook } from '@lingshugroup/web-plus/hooks';

const { 
  status,
  createWebSocket,
  reconnect
} = useWSHook({
  autoReconnect: true,
  maxReconnectAttempts: 5,
  reconnectInterval: 3000,
  onOpen: () => console.log('已连接'),
  onClose: () => console.log('连接断开')
});

// 创建连接
createWebSocket('ws://localhost:8080/ws');

// 监听状态变化
watch(status, (newStatus) => {
  if (newStatus === 'reconnecting') {
    console.log('正在尝试重连...');
  }
  if (newStatus === 'close') {
    console.log('连接已关闭，停止重连');
  }
});
```

<script setup>
import { tableColumn, tableMethodColumn } from '../../constant';
import { useWSHook } from '@lingshugroup/web-plus/hooks';
import { ref, computed } from 'vue';

const { status, wsData, messageList, isConnecting, isConnected } = useWSHook();

const tableData = computed(() => [
  {
    name: 'status',
    desc: '连接状态：connecting(连接中)/open(已连接)/close(已关闭)/error(错误)/reconnecting(重连中)',
    type: 'Ref<string>',
    value: status.value
  },
  {
    name: 'wsData',
    desc: '最新收到的消息数据',
    type: 'Ref<any>',
    value: '-'
  },
  {
    name: 'messageList',
    desc: '消息历史列表，每条消息包含 data 和 timestamp',
    type: 'Ref<any[]>',
    value: '-'
  },
  {
    name: 'isConnecting',
    desc: '是否正在连接',
    type: 'Ref<boolean>',
    value: isConnecting.value.toString()
  },
  {
    name: 'isConnected',
    desc: '是否已连接',
    type: 'Ref<boolean>',
    value: isConnected.value.toString()
  }
]);

const tableMethodData = ref([
  {
    name: 'createWebSocket',
    desc: '创建 WebSocket 连接，参数：1.path(WebSocket地址) 2.callback(消息回调函数，可选)',
    type: 'function',
    value: '-'
  },
  {
    name: 'sendMessage',
    desc: '发送消息，参数：data(消息内容，object或string)，自动转为JSON字符串',
    type: 'function',
    value: '-'
  },
  {
    name: 'reconnect',
    desc: '主动重新连接，调用前需先 createWebSocket',
    type: 'function',
    value: '-'
  },
  {
    name: 'heartbeat',
    desc: '主动发送心跳，用于保持连接活跃',
    type: 'function',
    value: '-'
  },
  {
    name: 'clearMessages',
    desc: '清空消息历史列表和最新消息',
    type: 'function',
    value: '-'
  },
  {
    name: 'getOptions',
    desc: '获取当前配置选项',
    type: 'function',
    value: '-'
  },
  {
    name: 'updateOptions',
    desc: '更新配置选项，参数：options(部分配置对象)',
    type: 'function',
    value: '-'
  },
  {
    name: 'open',
    desc: '打开连接（由 createWebSocket 返回）',
    type: 'Ref<function>',
    value: '-'
  },
  {
    name: 'close',
    desc: '关闭连接（由 createWebSocket 返回）',
    type: 'Ref<function>',
    value: '-'
  },
  {
    name: 'send',
    desc: '发送消息（由 createWebSocket 返回）',
    type: 'Ref<function>',
    value: '-'
  }
]);

const createParamsData = ref([
  {
    name: 'path',
    desc: 'WebSocket 服务地址',
    type: 'string',
    value: '-'
  },
  {
    name: 'callback',
    desc: '消息回调函数，收到消息时触发',
    type: 'function',
    value: '-'
  }
]);
</script>

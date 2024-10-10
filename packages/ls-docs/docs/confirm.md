---
outline: deep
---

# Confirm 确认框

::: warning 基于ElMessageBox二次封装，保留原属性和方法。
:::

## 使用方式

### 1. 普通确认框

<br />
<LSButton type="primary" @click="handleClick1">普通确认框</LSButton>
<LSConfirm
  v-model="visible"
  :title="title"
  :message="message"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
 
```js
import { ref } from 'vue';
const visible = ref(false);
const title = ref('标题');
const message = ref('内容');

function handleClick1() {
visible.value = true;
}
function onConfirm(data) {
console.log(data.value);
}
function onCancel() {
console.log('取消');
}

````
```html
<LSButton type="primary" @click="handleClick1">普通确认框</LSButton>
<LSConfirm
  v-model="visible"
  :title="title"
  :message="message"
  @on-confirm="onConfirm"
  @on-cancel="onCancel"
>
</LSConfirm>
````

### 2. 可拖拽且内容为html确认框

<br />
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

```js
const visible2 = ref(false);
const message2 = ref('<span style="color: red;">内容 2</span> <br/> <span style="color: green;">内容 222222</span>');

function handleClick1() {
  visible.value = true;
}
function handleClick2() {
  visible2.value = true;
}
function onConfirm(data) {
  console.log(data.value);
}
function onCancel() {
  console.log('取消');
}
```

```html
<LSButton type="primary" @click="handleClick2">可拖拽且内容为html确认框</LSButton>
<LSConfirm v-model="visible2" :title="title" :message="message2" draggable useHtml @on-confirm="onConfirm" @on-cancel="onCancel">
</LSConfirm>
```

### 3. 带异步请求的确认框

<br />
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

```js
import { ref } from 'vue';
import axios from 'axios';
const visible3 = ref(false);
const message3 = ref('点击确定后，请求数据');
const requestApi = () => axios.get('https://jsonplaceholder.typicode.com/posts/1');
function onCancel() {
  console.log('取消');
}
function handleClick3() {
  visible3.value = true;
}
function onConfirm3(data) {
  message3.value = '请求数据完成';
  console.log(data.value);
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

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

<script setup>
import { tableColumn } from './constant';
import { ref } from 'vue';
import axios from 'axios';
const visible = ref(false);
const title = ref('标题');
const message = ref('内容');

const visible2 = ref(false);
const message2 = ref('<span style="color: red;">内容 2</span> <br/> <span style="color: green;">内容 222222</span>');

const visible3 = ref(false);
const message3 = ref('点击确定后，请求数据');
const requestApi = () => axios.get('https://jsonplaceholder.typicode.com/posts/1');

function handleClick1() {
  visible.value = true;
}
function handleClick2() {
  visible2.value = true;
}
function onConfirm(data) {
  console.log(data.value);
}
function onCancel() {
  console.log('取消');
}
function handleClick3() {
  visible3.value = true;
}
function onConfirm3(data) {
  message3.value = '请求数据完成'
  console.log(data.value);
}

const tableData = ref([
  {
    name: 'title',
    desc: '标题',
    type: 'string',
    value: '-'
  },
  {
    name: 'type',
    desc: '类型: 支持 success | info | warning | error',
    type: 'string',
    value: '-'
  }
])
</script>

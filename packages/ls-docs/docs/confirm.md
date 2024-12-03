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

### 2. Methods，通过emit抛出的可使用方法

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableMethodColumn } from '../constant';
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
    name: 'model-value / v-mode',
    desc: '是否显示',
    type: 'boolean',
    value: '-'
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
    desc: '内容,',
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
    desc:'取消按钮文案',
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
    type: 'Promise',
    value: '-'
  },
  {
    name: 'requestParams',
    desc: '异步请求参数',
    type: 'json',
    value: '{}'
  }
]);

const tableData2 = ref([
  {
    name: 'onConfirm',
    desc: '点击确认时触发, 参数data为请求接口返回的数据',
    type: 'function',
    value: 'data'
  },
  {
    name: 'onCancel',
    desc: '点击取消时触发',
    type: 'function',
    value: '-'
  }
]);
</script>

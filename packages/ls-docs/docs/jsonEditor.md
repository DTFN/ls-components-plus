---
outline: deep
---

# jsonEditor 编辑器

::: warning 基于[vue3-ts-jsoneditor](https://www.npmjs.com/package/vue3-ts-jsoneditor)二次封装。
:::

## 使用方式

### 1. 预览模式

<br />

<LSJsonEditor mode="text" :json-value="jsonValue" height="300" />

```js
import { ref } from 'vue';

const jsonValue = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: { a: 'b', c: 'd' },
  string: 'Hello World'
});
```

```html
<LSJsonEditor mode="text" :json-value="jsonValue" height="300" />
```

### 2. 编辑模式

<br />

<LSJsonEditor ref="jsonEditorRef" :read-only="false" :json-value="jsonValue" height="300" />

```js
import { ref } from 'vue';
const jsonValue = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: { a: 'b', c: 'd' },
  string: 'Hello World'
});
```

```html
<LSJsonEditor ref="jsonEditorRef" :read-only="false" :json-value="jsonValue" height="300" />
```

### 3. 获取编辑后的json数据

<br />

<LSButton type="primary" @click="getJson">获取json数据</LSButton>

<LSConfirm v-model="visible" title="json数据" :message="editorJsonData"></LSConfirm>

```js
import { ref } from 'vue';
const jsonEditorRef = ref();
const jsonValue = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: { a: 'b', c: 'd' },
  string: 'Hello World'
});
const visible = ref(false);
const editorJsonData = ref({});
function getJson() {
  editorJsonData.value = jsonEditorRef.value.getJsonValue();
  visible.value = true;
}
```

```html
<LSButton type="primary" @click="getJson">获取json数据</LSButton>

<LSJsonEditor ref="jsonEditorRef" :read-only="false" :json-value="jsonValue" height="300" />

<LSConfirm v-model="visible" title="json数据" :message="editorJsonData"></LSConfirm>
```

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableExposesColumn } from '../constant'
import { ref } from 'vue';

const jsonEditorRef = ref();

const jsonValue = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: { a: 'b', c: 'd' },
  string: 'Hello World'
});

const visible = ref(false);
const editorJsonData = ref({});
function getJson() {
  editorJsonData.value = jsonEditorRef.value.getJsonValue();
  visible.value = true;
}


const tableData = ref([
  {
    name: 'jsonValue',
    desc: '需要展示的json数据',
    type: 'json',
    value: '-'
  },
  {
    name: 'mode',
    desc: '默认展示模式，可选项：text、tree，编辑模式只能为tree',
    type: 'string',
    value: 'text'
  },
  {
    name: 'readOnly',
    desc: '是否为预览模式，否则为编辑模式',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'height',
    desc: '编辑器高度',
    type: 'string',
    value: '600'
  }
]);

const tableData2 = ref([
  {
    name: 'getJsonValue',
    desc: '获取编辑后的json数据',
    type: 'function',
    value: '-'
  }
])
</script>

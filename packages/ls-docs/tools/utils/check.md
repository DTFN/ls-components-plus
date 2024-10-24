---
outline: deep
---

# lsCheck

::: warning 常用判断方法，判断字符或对象是否符合要求，按各自需求使用。
:::

## 使用方式

```js
import { lsCheck } from '@lingshugroup/web-plus/utils';
import { onMounted, ref } from 'vue';

const {
  isArray,
  isNull,
  isBoolean,
  isObject,
  isPromise,
  isString,
  isNumber,
  isRegExp,
  isDate,
  isHex,
  isRgb,
  isRgba,
  isColor,
  isUndefined,
  isFunction,
  isEmptyObject,
  isExist,
  isWindow,
  isComponentInstance,
  isFirefox,
  isArrayBuffer,
  isFile,
  isValidJSON
} = lsCheck;
```

## API

### 1. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableMethodData" />

<script setup>
import { tableMethodColumn } from '../../constant';
import { onMounted, ref } from 'vue';

const tableMethodData = ref([
  {
    name: 'isArray',
    desc: '判断是否是数组',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isNull',
    desc: '判断是否是null',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isBoolean',
    desc: '判断是否是布尔值',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isObject',
    desc: '判断是否是对象',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isPromise',
    desc: '判断是否是promise',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isString',
    desc: '判断是否是字符串',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isNumber',
    desc: '判断是否是数字',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isRegExp',
    desc: '判断是否是正则表达式',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isDate',
    desc: '判断是否是日期',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isHex',
    desc: '判断是否是十六进制',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isRgb',
    desc: '判断是否是rgb',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isRgba',
    desc: '判断是否是rgba',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isColor',
    desc: '判断是否是颜色',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isUndefined',
    desc: '判断是否是undefined',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isFunction',
    desc: '判断是否是函数',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isEmptyObject',
    desc: '判断是否是空对象',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isExist',
    desc: '判断对象是否存在',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isWindow',
    desc: '判断是否是window对象',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isComponentInstance',
    desc: '判断是否是组件实例',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isFirefox',
    desc: '判断是否是火狐浏览器',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isArrayBuffer',
    desc: '判断是否是ArrayBuffer对象',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isFile',
    desc: '判断是否是文件对象',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'isValidJSON',
    desc: '判断是否是有效的JSON字符串',
    type: 'function',
    value: 'boolean',
  }
]);
</script>

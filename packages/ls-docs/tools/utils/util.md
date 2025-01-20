---
outline: deep
---

# lsUtil

::: warning 常用工具方法。
:::

## 使用方式

```js
import { lsUtil } from '@lingshugroup/web-plus/utils';
import { onMounted, ref } from 'vue';

const {
  isEmpty,
  exportFile,
  getExtension,
  loadJs,
  removeJs,
  loadCss,
  removeCss,
  getRandomHexColor,
  numberFixed,
  isValidJSON,
  mergeBuffer,
  fileToBuffer
} = lsUtil;

```

## API

### 1. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableMethodData" />

<script setup>
import { tableMethodColumn } from '../../constant';
import { onMounted, ref } from 'vue';

const tableMethodData = ref([
  {
    name: 'isEmpty',
    desc: '判断是否是空（0也算空）',
    type: 'function',
    value: 'boolean',
  },
  {
    name: 'exportFile',
    desc: '导出文件，点击直接下载文件，传入值（blob: Blob，fileName: string）',
    type: 'function',
    value: '-',
  },
  {
    name: 'getExtension',
    desc: '获取文件名后缀，传入（fileName: string）',
    type: 'function',
    value: '-',
  },
  {
    name: 'loadJs',
    desc: '动态加载js文件，传入（list: Array<{id:"",src:""}>）',
    type: 'function',
    value: '-',
  },
  {
    name: 'removeJs',
    desc: '移除js文件，传入（list: Array<{id:""}>）',
    type: 'function',
    value: '-',
  },
  {
    name: 'loadCss',
    desc: '动态加载css文件，传入（list: Array<{id:"",src:""}>）',
    type: 'function',
    value: '-',
  },
  {
    name: 'removeCss',
    desc: '移除css文件，传入（list: Array<{id:""}>）',
    type: 'function',
    value: '-',
  },
  {
    name: 'getRandomHexColor',
    desc: '获取随机16进制颜色',
    type: 'function',
    value: '-',
  },
  {
    name: 'numberFixed',
    desc: '保留n位小数，传入（num: number, len: number | 1）',
    type: 'function',
    value: '-',
  },
  {
    name: 'isValidJSON',
    desc: '判断是否是json字符串，传入（str: string）',
    type: 'function',
    value: '-',
  },
  {
    name: 'mergeBuffer',
    desc: '合并buffer，传入（list: Array<Buffer>）',
    type: 'function',
    value: '-',
  },
  {
    name: 'fileToBuffer',
    desc: '文件base64转buffer，传入（base64: string）',
    type: 'function',
    value: '-',
  }
]);
</script>

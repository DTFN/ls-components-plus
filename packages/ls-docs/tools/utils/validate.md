---
outline: deep
---

# lsValidate

::: warning 常用验证方法，用于表单扩展校验，按各自需求使用。
:::

## 使用方式

```js
import { lsValidate } from '@lingshugroup/web-plus';
import { onMounted, ref } from 'vue';

const {
  validatorIntRange,
  validatorNumberRange,
  validatorNumberFloat2Range,
  validatorNumberInt,
  validatorNumberFloat2,
  validatorJson,
  validatorString01,
  validatorString02,
  validateArray,
  validatorAccount
} = lsValidate;
```

## API

### 1. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableMethodData" />

<script setup>
import { tableMethodColumn } from '../../constant';
import { onMounted, ref } from 'vue';

const tableMethodData = ref([
  {
    name: 'validatorNumberRange',
    desc: '数字范围校验，最多一位小数，支持最大值和最小值，参数：1.rule：required 是否必填，msg：未填写时的提示，msg2：不符合规则时的提示 2.value：max 最大值，min 最小值',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorNumberFloat2Range',
    desc: '数字范围校验，最多两位小数，支持最大值和最小值，参数：1.rule：required 是否必填，msg：未填写时的提示，msg2：不符合规则时的提示 2.value：max 最大值，min 最小值',
    type: 'function',
    value: '-',
  }
]);

</script>

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
  validatorInt,
  validatorNumber,
  validatorNumberFloat2,
  validatorJson,
  validatorWord1,
  validatorWord2,
  validateArray,
  validatorAccount
} = lsValidate;

// form组件mode参数
const formModel = ref({
  numberRange: {
    min: 3,
    max: 5
  }
});
// form组件rules参数
const formRules = ref([
  { validator: validatorIntRange, required: true, msg: '请输入数字', msg2: '请输入正整数', trigger: 'blur' }
]);
```

## API

### 1. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableMethodData" />

<script setup>
import { tableMethodColumn } from '../../constant';
import { onMounted, ref } from 'vue';

const tableMethodData = ref([
  {
    name: 'validatorIntRange',
    desc: '数字范围校验，只能是正整数，支持最大值和最小值，参数：1.rule：required是否必填，msg未填写时的提示，msg2不符合规则时的提示 2.value：max最大值，min最小值',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorNumberRange',
    desc: '数字范围校验，最多一位小数，支持最大值和最小值，参数：1.rule：required是否必填，msg未填写时的提示，msg2不符合规则时的提示 2.value：max最大值，min最小值',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorNumberFloat2Range',
    desc: '数字范围校验，最多两位小数，支持最大值和最小值，参数：1.rule：required是否必填，msg未填写时的提示，msg2不符合规则时的提示 2.value：max 最大值，min最小值',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorInt',
    desc: '数字正整数校验，参数：1.rule：required是否必填，msg未填写时的提示，maxVal最大值',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorNumber',
    desc: '数字校验最多一位小数，参数：1.rule：required是否必填，msg未填写时的提示，maxVal最大值',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorNumberFloat2',
    desc: '数字校验最多两位小数校验，参数：1.rule：required是否必填，msg未填写时的提示，maxVal最大值',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorJson',
    desc: 'json校验，参数：1.rule：required是否必填，msg未填写时的提示',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorWord1',
    desc: '字符校验，匹配数字、字母或横杠（-），参数：1.rule：required是否必填，msg未填写时的提示',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorWord2',
    desc: '字符校验，匹配数字、字母、横杠（-）或下划线（_），参数：1.rule：required是否必填，msg未填写时的提示',
    type: 'function',
    value: '-',
  },
  {
    name: 'validateArray',
    desc: '数组校验，参数：1.rule：required是否必填，msg未填写时的提示',
    type: 'function',
    value: '-',
  },
  {
    name: 'validatorAccount',
    desc: '邮箱或手机号校验，参数：1.rule：required是否必填，msg未填写时的提示',
    type: 'function',
    value: '-',
  }
]);

</script>

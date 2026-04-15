---
outline: deep
---

# useOptionHook

::: warning 根据请求数据，获取下拉框数据。
:::

## 使用方式

```js
import { useOptionHook } from '@lingshugroup/web-plus/hooks';
import { onMounted, ref } from 'vue';

const { getSelOption } = useOptionHook();

function optionApi() {
  return new Promise(resolve => {
    const optionData = [
      {
        id: '1',
        name1: '数据',
        name2: '测试',
        value1: 'data',
        value2: 'test'
      }
    ];
    return resolve(optionData);
  });
}

onMounted(async () => {
  const data = await getSelOption(optionApi, ['name1', 'name2'], ['id', 'value1', 'value2']);
  console.log(data);
});
```

## API

### 1. methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData" />

<script setup>
import { useOptionHook } from '@lingshugroup/web-plus/hooks';
import { tableMethodColumn } from '../../constant';
import { ref, onMounted } from 'vue';
const { getSelOption } = useOptionHook();
function optionApi() {
  return new Promise(resolve => {
    const optionData = [
      {
        id: '1',
        name1: '数据',
        name2: '测试',
        value1: 'data',
        value2: 'test'
      }
    ];
    return resolve(optionData);
  });
}

onMounted(async () => {
  const data = await getSelOption(optionApi, ['name1', 'name2'], ['id', 'value1', 'value2']);
  console.log(data);
});

const tableData = ref([
  {
    name: 'getSelOption',
    desc: `根据请求数据，获取下拉框数据，参数：1.请求接口方法 2.labelKey对应label为数组，默认为['name']  3.valueKey对应value为数组，默认为['id'] 3.params请求参数 4.展示全部所传数组值，默认[{ label: '全部', value: '' }]`,
    type: 'Promise',
    value: '{ allOption, options, maps }'
  }
])

</script>

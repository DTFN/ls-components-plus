---
outline: deep
---

# useOptionHook

::: warning 根据请求数据，获取下拉框数据。
:::

## 使用方式

```js
import { useOptionHook } from '@lingshugroup/web-plus';
import { onMounted, ref } from 'vue';

const { getSelOption, remoteSearchSelOption } = useOptionHook();
```

## API

### 1. methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData" />

<script setup>
import { tableMethodColumn } from '../../constant';
import { ref } from 'vue';

const tableData = ref([
  {
    name: 'getSelOption',
    desc: '根据请求数据，获取下拉框数据，参数：1.请求接口方法 2.请求参数 3.全部数组值',
    type: 'Promise',
    value: '{ allOption, options, maps }'
  },
  {
    name: 'remoteSearchSelOption',
    desc: '远程获取下拉框数据，支持搜索，参数：1.请求接口方法 2.请求参数 3.选中id 4.选中值 5.搜索关键字',
    type: 'Promise',
    value: '[]'
  }
])

</script>

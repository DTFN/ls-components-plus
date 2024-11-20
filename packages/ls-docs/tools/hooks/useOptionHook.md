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

const { getSelOption, remoteSearchSelOption } = useOptionHook();

function mockData() {
  return new Promise(resolve => {
    resolve([
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 2,
        name: 'test2'
      }
    ]);
  });
}

onMounted(async () => {
  const { allOption, options, maps } = await getSelOption(
    mockData,
    {
      labelKey: 'name',
      valueKey: 'id'
    },
    [
      {
        label: '全部',
        value: ''
      }
    ]
  );
  console.log(allOption, options, maps);
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

function mockData() {
  return new Promise((resolve) => {
    resolve(
      [
        {
            id: 1,
            name: 'test1',        
        },
        {
            id: 2,
            name: 'test2'
        } 
      ]
    )
  })
}

onMounted(async () => {
  const { allOption, options, maps } = await getSelOption(mockData);
  console.log(allOption, options, maps);
})

const tableData = ref([
  {
    name: 'getSelOption',
    desc: `根据请求数据，获取下拉框数据，参数：1.请求接口方法 2.请求参数，其中labelKey，valueKey对应label和value，默认为id，name 3.展示全部所传数组值，默认[{ label: '全部', value: '' }]`,
    type: 'Promise',
    value: '{ allOption, options, maps }'
  },
  {
    name: 'remoteSearchSelOption',
    desc: '远程获取下拉框数据，支持搜索，参数：1.请求接口方法 2.请求参数，其中labelKey，valueKey对应label和value，默认为id，name 3.选中id 4.选中值 5.搜索关键字',
    type: 'Promise',
    value: '[]'
  }
])

</script>

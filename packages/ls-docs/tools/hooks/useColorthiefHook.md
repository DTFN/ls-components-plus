---
outline: deep
---

# useColorthiefHook

::: warning 根据icon图片获取相对应的背景色。
:::

## 使用方式

icon: <img :src="imageUrl" :style="{ width: '60px', height: '20px', display: 'block' }" >

bgColor: <span :style="{ backgroundColor: bgColor, width: '60px', height: '60px', display: 'block' }"></span>

```js
import { useColorthiefHook } from '@lingshugroup/web-plus';
import { onMounted, ref } from 'vue';

import imageUrl from '/logo.png';

const { getColorthief } = useColorthiefHook();

const bgColor = ref();

onMounted(async () => {
  const data = await getColorthief(imageUrl);
  bgColor.value = data.bgColor;
});
```

```html
icon: <img :src="imageUrl" :style="{ width: '60px', height: '20px', display: 'block' }" />

bgColor: <span :style="{ backgroundColor: bgColor, width: '60px', height: '60px', display: 'block' }"></span>
```

## API

### 1. Methods

<ApiIntro :tableColumn="tableMethodColumn" :tableData="tableData" />

<script setup>
import { tableColumn, tableMethodColumn } from '../../constant';
import { useColorthiefHook } from '../../../ls-components/lib/hooks';
import { onMounted, ref } from 'vue';

import imageUrl from '/logo.png';

const { getColorthief } = useColorthiefHook();

const bgColor = ref();

onMounted(async () => {  
  const data = await getColorthief(imageUrl);
  bgColor.value = data.bgColor;
})

const tableData = ref([
  {
    name: 'getColorthief',
    desc: '根据icon图片获取相对应的背景色，参数为图片地址',
    type: 'Promise',
    value: '{ bgColor }'
  }
]);
</script>

---
outline: deep
---

# FlowBox 流式盒子

::: warning 用于简单流程模式的数据展示。
:::

## 使用方式

### 1. 基础类型

<br />

<LSFlowBox :list="list" width="380px" height="360px">
  <template v-for="item in list" #[item.slotName] :key="item.slotName">
    <div class="flow-box-item">{{ item.slotName }}</div>
  </template>
</LSFlowBox>

::: details 点我查看代码

```js
import { ref } from 'vue';

const list = ref([
  {
    slotName: 'slot1'
  },
  {
    slotName: 'slot2',
    boxPos: 'left',
    boxPosVal: 220,
    linePos: 'left',
    lineLength: 60,
    arrowPos: 'left',
    boxBgColor: 'green'
  },
  {
    slotName: 'slot3',
    boxPos: 'top',
    boxPosVal: 140,
    linePos: 'top',
    lineLength: 60,
    lineColor: 'red',
    arrowPos: 'top'
  },
  {
    slotName: 'slot4',
    boxPos: 'top',
    boxPosVal: 280,
    linePos: 'top',
    lineLength: 60,
    lineColor: 'red'
  }
]);
```

```html
<LSFlowBox :list="list" width="380px" height="360px">
  <template v-for="item in list" #[item.slotName] :key="item.slotName">
    <div class="flow-box-item">{{ item.slotName }}</div>
  </template>
</LSFlowBox>
```

```scss
.flow-box-item {
  width: 160px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
```

:::

### 2. 自定义类型

<br />

<LSFlowBox :list="list" width="380px" height="360px">
  <template v-for="item in list" #[item.slotName] :key="item.slotName">
    <div class="flow-box-item">{{ item.slotName }}</div>
  </template>
  <div class="merge-line">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</LSFlowBox>

::: details 点我查看代码

```js
import { ref } from 'vue';

const list = ref([
  {
    slotName: 'slot1'
  },
  {
    slotName: 'slot2',
    boxPos: 'left',
    boxPosVal: 220,
    linePos: 'left',
    lineLength: 60,
    arrowPos: 'left',
    boxBgColor: 'green'
  },
  {
    slotName: 'slot3',
    boxPos: 'top',
    boxPosVal: 140,
    linePos: 'top',
    lineLength: 60,
    lineColor: 'red',
    arrowPos: 'top'
  },
  {
    slotName: 'slot4',
    boxPos: 'top',
    boxPosVal: 280,
    linePos: 'top',
    lineLength: 60,
    lineColor: 'red'
  }
]);
```

```html
<LSFlowBox :list="list" width="380px" height="360px">
  <template v-for="item in list" #[item.slotName] :key="item.slotName">
    <div class="flow-box-item">{{ item.slotName }}</div>
  </template>
  <div class="merge-line">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</LSFlowBox>
```

```scss
.flow-box-item {
  width: 160px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.merge-line {
  .line {
    position: absolute;
    background-color: orange;
    &:nth-of-type(1) {
      top: 180px;
      left: 160px;
      width: 60px;
      height: 2px;
    }
    &:nth-of-type(2) {
      top: 320px;
      left: 160px;
      width: 60px;
      height: 2px;
    }
    &:nth-of-type(3) {
      top: 180px;
      left: 220px;
      width: 2px;
      height: 70px;
    }
    &:nth-of-type(4) {
      top: 250px;
      left: 220px;
      width: 2px;
      height: 72px;
    }
  }
}
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.1 list

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

### 2. Slot

<ApiIntro :tableColumn="tableSlotColumn" :tableData="tableData3" />

<script setup>
import { tableColumn, tableSlotColumn } from './constant';
import { ref } from 'vue';

const list = ref([
  {
    slotName: 'slot1'
  },
  {
    slotName: 'slot2',
    boxPos: 'left',
    boxPosVal: 220,
    linePos: 'left',
    lineLength: 60,
    arrowPos: 'left',
    boxBgColor: 'green'
  },
  {
    slotName: 'slot3',
    boxPos: 'top',
    boxPosVal: 140,
    linePos: 'top',
    lineLength: 60,
    lineColor: 'red',
    arrowPos: 'top'
  },
  {
    slotName: 'slot4',
    boxPos: 'top',
    boxPosVal: 280,
    linePos: 'top',
    lineLength: 60,
    lineColor: 'red'
  }
])

const tableData = ref([
  {
    name: 'width',
    desc: '外层区域宽度，带单位',
    type: 'string',
    value: '100%'
  },
  {
    name: 'height',
    desc: '外层区域高度，带单位',
    type: 'string',
    value: '100%'
  },
  {
    name: 'list',
    desc: '数据列表，用户展示盒子内容、线路、箭头',
    type: 'array',
    value: '[]'
  }
])

const tableData2 = ref([
  {
    name: 'slotName',
    desc: '插槽名称， 用于盒区域展示内容',
    type: 'string',
    value: '-'
  },
  {
    name: 'boxBgColor',
    desc: '盒子背景色',
    type: 'string',
    value: '-'
  },
  {
    name: 'arrowPos',
    desc: '箭头位置方向, 支持 left / top / right / bottom',
    type: 'string',
    value: '-'
  },
  {
    name: 'linePos',
    desc: '线位置, 支持 top left',
    type: 'string',
    value: '-'
  },
  {
    name: 'lineColor',
    desc: '线颜色',
    type: 'string',
    value: '-'
  },
  {
    name: 'lineLength',
    desc: '线长度',
    type: 'number',
    value: '-'
  },
  {
    name: 'lineWidth',
    desc: '线宽度',
    type: 'number',
    value: '-'
  },
  {
    name: 'boxPos',
    desc: '盒子位置方向, 支持 left / top / right / bottom',
    type: 'string',
    value: '-'
  },
  {
    name: 'boxPosVal',
    desc: '盒子位置值',
    type: 'number',
    value: '-'
  }
]);

const tableData3 = ref([
  {
    name: '-',
    desc: '通过slotName自定义插槽名',
  },
  {
    name: 'default',
    desc: '默认插槽， 适用自定义展示内容',
  }
])

</script>

<style lang="scss" scoped>
.flow-box-item {
  width: 160px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}

.merge-line {
  .line {
    position: absolute;
    background-color: orange;
    &:nth-of-type(1) {
      top: 180px;
      left: 160px;
      width: 60px;
      height: 2px;
    }
    &:nth-of-type(2) {
      top: 320px;
      left: 160px;
      width: 60px;
      height: 2px;
    }
    &:nth-of-type(3) {
      top: 180px;
      left: 220px;
      width: 2px;
      height: 70px;
    }
    &:nth-of-type(4) {
      top: 250px;
      left: 220px;
      width: 2px;
      height: 72px;
    }
  }
}
</style>

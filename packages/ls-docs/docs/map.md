---
outline: deep
---

# Map 地图

::: warning 基于[高德地图](https://www.npmjs.com/package/@amap/amap-jsapi-loader)二次封装。
:::

## 使用方式

<LSMap
  security-code="847006cb1fd3e4d32dd34094f8b95f24"
  map-key="ae35d805016e3178c4a68e8bd616bfb8"
  :center="['121.923553', '30.893751']"
  :show-marker="true"
  :marker-list="markerList"
  :show-marker-dialog="true"
  :marker-dialog-content="markerDialogContent"
  marker-dialog-anchor="top-right"
  :marker-dialog-offset="[0, 20]"
  height="360px"
/>

::: details 点我查看代码

```js
import { ref } from 'vue';
const markerList = ref([
  {
    lnglat: ['121.922823', '30.898127']
  }
]);
const markerDialogContent = ref(`<div class='point-wrap'>
  <div class='title'>已生产区块数</div>
  <div class='value'>100</div>
  <div class='title'>已存证Hash</div>
  <div class='value'>200</div>
  <div class='title'>地点</div>
  <div class='value'>上海</div>
</div>`);
```

```html
<LSMap
  security-code="847006cb1fd3e4d32dd34094f8b95f24"
  map-key="ae35d805016e3178c4a68e8bd616bfb8"
  :center="['121.923553', '30.893751']"
  :show-marker="true"
  :marker-list="markerList"
  :show-marker-dialog="true"
  :marker-dialog-content="markerDialogContent"
  marker-dialog-anchor="top-right"
  :marker-dialog-offset="[0, 20]"
  height="360px"
/>
```

```scss
:deep() .point-wrap {
  position: relative;
  box-sizing: border-box;
  min-width: 129px;
  padding: 24px 16px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #3d3d3d;
  .title {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #3d3d3d;
  }
  .value {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    color: #3d3d3d;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

<script setup>
import { tableColumn } from './constant';
import { ref } from 'vue';

const markerList = ref([
  {
    lnglat: ['121.922823', '30.898127']
  }
])
const markerDialogContent = ref(`<div class='point-wrap'>
  <div class='title'>已生产区块数</div>
  <div class='value'>100</div>
  <div class='title'>已存证Hash</div>
  <div class='value'>200</div>
  <div class='title'>地点</div>
  <div class='value'>上海</div>
</div>`);


const tableData = ref([
  {
    name: 'securityCode',
    desc: '你申请的安全密钥',
    type: 'string',
    value: '-'
  },
  {
    name: 'mapKey',
    desc: '申请好的Web端开发者Key，首次调用 load 时必填',
    type: 'string',
    value: '-'
  },
  {
    name: 'width',
    desc: '地图宽度, 需带单位',
    type: 'string',
    value: '100%'
  },
  {
    name: 'height',
    desc: '地图高度, 需带单位',
    type: 'string',
    value: '300px'
  },
  {
    name: 'searchWord',
    desc: '搜索关键字, 只展示搜索结果的区域，其他区域覆盖不展示',
    type: 'string',
    value: '-'
  },
  {
    name: 'center',
    desc: '初始展示地图区域的中心点',
    type: 'array',
    value: '-'
  },
  {
    name: 'zoom',
    desc: '初始展示地图区域的缩放级别',
    type: 'number',
    value: '14'
  },
  {
    name: 'zooms',
    desc: '地图缩放范围',
    type: 'array',
    value: '[10, 20]'
  },
  {
    name: 'areaColor',
    desc: '地图覆盖区域的颜色',
    type: 'string',
    value: '#9BCFFA'
  }
])
</script>

<style lang="scss" scoped>
:deep() .point-wrap {
  position: relative;
  box-sizing: border-box;
  min-width: 129px;
  padding: 24px 16px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #3d3d3d;
  .title {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #3d3d3d;
  }
  .value {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    color: #3d3d3d;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

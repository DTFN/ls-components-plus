---
outline: deep
---

# Map 地图

::: warning 基于[高德地图](https://www.npmjs.com/package/@amap/amap-jsapi-loader)二次封装。
:::

## 使用方式

<ClientOnly>
  <LSMap security-code="847006cb1fd3e4d32dd34094f8b95f24" map-key="ae35d805016e3178c4a68e8bd616bfb8" :center="['121.923553', '30.893751']" :show-marker="true" :marker-list="markerList" :show-marker-dialog="true" :marker-dialog-content="markerDialogContent" marker-dialog-anchor="top-right" :marker-dialog-offset="[0, 20]" height="360px" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue'

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
</div>`)
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
:deep(.point-wrap) {
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

### 中国地图

<ClientOnly>
<div ref="chinaMapRef" class="china-map-container"></div>
</ClientOnly>

::: details 点我查看代码

```js
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue'

const chinaMapRef = ref(null)
let chartInstance = null

const chinaMapData = [
  { name: '北京', value: 350 },
  { name: '天津', value: 120 },
  { name: '河北', value: 280 },
  { name: '山西', value: 150 },
  { name: '内蒙古', value: 90 },
  { name: '辽宁', value: 220 },
  { name: '吉林', value: 130 },
  { name: '黑龙江', value: 180 },
  { name: '上海', value: 420 },
  { name: '江苏', value: 380 },
  { name: '浙江', value: 360 },
  { name: '安徽', value: 200 },
  { name: '福建', value: 240 },
  { name: '江西', value: 170 },
  { name: '山东', value: 320 },
  { name: '河南', value: 290 },
  { name: '湖北', value: 260 },
  { name: '湖南', value: 230 },
  { name: '广东', value: 450 },
  { name: '广西', value: 160 },
  { name: '海南', value: 80 },
  { name: '重庆', value: 190 },
  { name: '四川', value: 310 },
  { name: '贵州', value: 140 },
  { name: '云南', value: 180 },
  { name: '西藏', value: 30 },
  { name: '陕西', value: 210 },
  { name: '甘肃', value: 100 },
  { name: '青海', value: 50 },
  { name: '宁夏', value: 70 },
  { name: '新疆', value: 90 },
  { name: '台湾', value: 60 },
  { name: '香港', value: 180 },
  { name: '澳门', value: 50 }
]

async function initChinaMap() {
  const response = await fetch('/china.json')
  const chinaJson = await response.json()
  echarts.registerMap('china', chinaJson)

  chartInstance = echarts.init(chinaMapRef.value)

  const option = {
    title: {
      text: '中国地图数据分布',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#1E293B',
        fontSize: 18,
        fontWeight: 600
      }
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(30, 41, 59, 0.95)',
      borderColor: 'transparent',
      borderWidth: 0,
      textStyle: { color: '#F8FAFC', fontSize: 13 },
      formatter(params) {
        if (params.value) {
          return `<div style="padding:4px 8px;">
            <div style="font-weight:600;margin-bottom:4px;">${params.name}</div>
            <div style="color:#94A3B8;">数据量：<span style="color:#F8FAFC;font-weight:500;">${params.value}</span></div>
          </div>`
        }

        return params.name
      }
    },
    visualMap: {
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],
      textStyle: { color: '#64748B' },
      inRange: {
        color: ['#E0F2FE', '#7DD3FC', '#38BDF8', '#0EA5E9', '#0284C7', '#0369A1']
      },
      calculable: true
    },
    geo: {
      map: 'china',
      roam: true,
      zoom: 1.2,
      center: [104, 36],
      label: {
        show: true,
        color: '#475569',
        fontSize: 10
      },
      emphasis: {
        label: {
          show: true,
          color: '#1E293B',
          fontWeight: 600
        },
        itemStyle: {
          areaColor: '#FCD34D',
          shadowBlur: 20,
          shadowColor: 'rgba(252, 211, 77, 0.5)'
        }
      },
      itemStyle: {
        areaColor: '#E2E8F0',
        borderColor: '#94A3B8',
        borderWidth: 0.5
      }
    },
    series: [
      {
        name: '数据分布',
        type: 'map',
        map: 'china',
        geoIndex: 0,
        data: chinaMapData,
        selectedMode: 'single'
      }
    ]
  }

  chartInstance.setOption(option)
}

function handleResize() {
  chartInstance && chartInstance.resize()
}

onMounted(() => {
  initChinaMap()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  chartInstance && chartInstance.dispose()
})
```

```html
<div ref="chinaMapRef" class="china-map-container"></div>
```

```scss
.china-map-container {
  width: 100%;
  height: 500px;
  background-color: #f8fafc;
  border-radius: 8px;
}
```

:::

## API

### 1. Attributes

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

<script setup>
import { tableColumn } from '../constant';
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

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

// 中国地图相关
const chinaMapRef = ref(null);
let chartInstance = null;

const chinaMapData = [
  { name: '北京', value: 350 },
  { name: '天津', value: 120 },
  { name: '河北', value: 280 },
  { name: '山西', value: 150 },
  { name: '内蒙古', value: 90 },
  { name: '辽宁', value: 220 },
  { name: '吉林', value: 130 },
  { name: '黑龙江', value: 180 },
  { name: '上海', value: 420 },
  { name: '江苏', value: 380 },
  { name: '浙江', value: 360 },
  { name: '安徽', value: 200 },
  { name: '福建', value: 240 },
  { name: '江西', value: 170 },
  { name: '山东', value: 320 },
  { name: '河南', value: 290 },
  { name: '湖北', value: 260 },
  { name: '湖南', value: 230 },
  { name: '广东', value: 450 },
  { name: '广西', value: 160 },
  { name: '海南', value: 80 },
  { name: '重庆', value: 190 },
  { name: '四川', value: 310 },
  { name: '贵州', value: 140 },
  { name: '云南', value: 180 },
  { name: '西藏', value: 30 },
  { name: '陕西', value: 210 },
  { name: '甘肃', value: 100 },
  { name: '青海', value: 50 },
  { name: '宁夏', value: 70 },
  { name: '新疆', value: 90 },
  { name: '台湾', value: 60 },
  { name: '香港', value: 180 },
  { name: '澳门', value: 50 }
];

async function initChinaMap() {
  const response = await fetch('/china.json');
  const chinaJson = await response.json();
  echarts.registerMap('china', chinaJson);

  chartInstance = echarts.init(chinaMapRef.value);

  const option = {
    title: {
      text: '中国地图数据分布',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#1E293B',
        fontSize: 18,
        fontWeight: 600
      }
    },
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(30, 41, 59, 0.95)',
      borderColor: 'transparent',
      borderWidth: 0,
      textStyle: { color: '#F8FAFC', fontSize: 13 },
      formatter: function(params) {
        if (params.value) {
          return `<div style="padding:4px 8px;">
            <div style="font-weight:600;margin-bottom:4px;">${params.name}</div>
            <div style="color:#94A3B8;">数据量：<span style="color:#F8FAFC;font-weight:500;">${params.value}</span></div>
          </div>`;
        }
        return params.name;
      }
    },
    visualMap: {
      min: 0,
      max: 500,
      left: 'left',
      top: 'bottom',
      text: ['高', '低'],
      textStyle: { color: '#64748B' },
      inRange: {
        color: ['#E0F2FE', '#7DD3FC', '#38BDF8', '#0EA5E9', '#0284C7', '#0369A1']
      },
      calculable: true
    },
    geo: {
      map: 'china',
      roam: true,
      zoom: 1.2,
      center: [104, 36],
      label: {
        show: true,
        color: '#475569',
        fontSize: 10
      },
      emphasis: {
        label: {
          show: true,
          color: '#1E293B',
          fontWeight: 600
        },
        itemStyle: {
          areaColor: '#FCD34D',
          shadowBlur: 20,
          shadowColor: 'rgba(252, 211, 77, 0.5)'
        }
      },
      itemStyle: {
        areaColor: '#E2E8F0',
        borderColor: '#94A3B8',
        borderWidth: 0.5
      }
    },
    series: [
      {
        name: '数据分布',
        type: 'map',
        map: 'china',
        geoIndex: 0,
        data: chinaMapData,
        selectedMode: 'single'
      }
    ]
  };

  chartInstance.setOption(option);
}

function handleResize() {
  chartInstance && chartInstance.resize();
}

onMounted(() => {
  initChinaMap();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  chartInstance && chartInstance.dispose();
});

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
  },
  {
    name: 'showMarker',
    desc: '是否展示标记点',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'markerList',
    desc: `标记点经纬度列表, 支持多个标记点, 格式为:[{ lnglat: ['121.922823', '30.898127'] }]`,
    type: 'array',
    value: '[]'
  },
  {
    name: 'markerIcon',
    desc: '标记图标',
    type: 'object',
    value: '蓝色小图标'
  },
  {
    name: 'markerIconSize',
    desc: '标记图标大小, 数组形式为[宽度, 高度]',
    type: 'array',
    value: '[19, 32]'
  },
  {
    name: 'showMarkerDialog',
    desc: '鼠标移入标记是否显示弹窗数据',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'markerDialogContent',
    desc: '标记弹窗内容, html格式的字符串',
    type: 'string',
    value: '-'
  },
  {
    name: 'markerDialogAnchor',
    desc: `标记弹窗展示位置， 可选值为: 'top-left'
  / 'top-center'
  / 'top-right'
  / 'middle-left'
  / 'center'
  / 'middle-right'
  / 'bottom-left'
  / 'bottom-center'
  / 'bottom-right'`,
    type: 'MarkerAnchorType',
    value: 'middle-left'
  },
  {
    name: 'markerDialogOffset',
    desc: '标记弹窗偏移量， 数组形式为[水平偏移量, 垂直偏移量]',
    type: 'array',
    value: '[30, 0]'
  }
])
</script>

<style lang="scss" scoped>
:deep(.point-wrap) {
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

.china-map-container {
  width: 100%;
  height: 500px;
  background-color: #F8FAFC;
  border-radius: 8px;
}
</style>

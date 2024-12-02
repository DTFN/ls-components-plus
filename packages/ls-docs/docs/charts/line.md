---
outline: deep
---

# Line 折线图

::: warning 快速创建常用类型的折线图。
:::

## 使用方式

<br />
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="坐标轴：">
    <el-radio-group v-model="formInline.axis" @change="changeChartStyle">
      <el-radio value="x">x轴</el-radio>
      <el-radio value="y">y轴</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="数值展示位置：">
    <el-radio-group v-model="formInline.pos" @change="changeChartStyle">
      <el-radio value="top">上</el-radio>
      <el-radio value="bottom">下</el-radio>
      <el-radio value="left">左</el-radio>
      <el-radio value="right">右</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="主题：">
    <el-select
      v-model="formInline.themeModel"
      @change="changeChartStyle"
      placeholder="请选择主题"
      :style="{ width: '150px' }"
    >
      <el-option v-for="item in themeOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
    </el-select>
  </el-form-item>
</el-form>

### 1. templateSimpleLine

<LSChart template="line" :data="dataSimpleLine" :template-patch="templateAllLine.templateSimpleLine" :custom-option="customOption" />

::: details 点我查看代码

```js
const dataSimpleLine = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [820, 932, 901, 934, 1290, 1330, 1320]
};
const templateAllLine = ref({
  templateSimpleLine: {
    labelPosition: 'top',
    tooltip: 'cross'
  }
});
const customOption = ref({
  xAxis: [
    {
      axisLabel: {
        rotate: 45,
        align: 'center',
        margin: 24,
        interval: 0
      }
    }
  ]
});
```

```html
<LSChart
  template="line"
  :data="dataSimpleLine"
  :template-patch="templateAllLine.templateSimpleLine"
  :custom-option="customOption"
/>
```

:::

### 2. templateMultipleLine

<LSChart template="line" :data="dataMultipleLine" :template-patch="templateAllLine.templateMultipleLine" />

::: details 点我查看代码

```js
const dataMultipleLine = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    {
      name: 'Email',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'name',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'address',
      type: 'line',
      data: [22, 66, 99, 234, 33, 56, 310]
    }
  ]
};
const templateAllLine = ref({
  templateMultipleLine: {
    labelPosition: 'top',
    type: 'multiple',
    smooth: true,
    areaStyle: {},
    tooltip: 'cross',
    legend: ['Email', 'name', 'address'],
    dataZoom: 'horizontal'
  }
});
```

```html
<LSChart template="line" :data="dataMultipleLine" :template-patch="templateAllLine.templateMultipleLine" />
```

:::

### 3. templateLineBar

<LSChart template="line" :data="dataLineBarLine" :template-patch="templateAllLine.templateLineBar" />

::: details 点我查看代码

```js
const temperatureData = [
  {
    propertyValue: '73.55',
    propertyTime: 1726174800000
  },
  {
    propertyValue: '75.72',
    propertyTime: 1726178400000
  },
  {
    propertyValue: '76.77',
    propertyTime: 1726182000000
  },
  {
    propertyValue: '75.68',
    propertyTime: 1726185600000
  },
  {
    propertyValue: '76.13',
    propertyTime: 1726189200000
  },
  {
    propertyValue: '74.85',
    propertyTime: 1726192800000
  },
  {
    propertyValue: '75.95',
    propertyTime: 1726196400000
  },
  {
    propertyValue: '75.80',
    propertyTime: 1726200000000
  },
  {
    propertyValue: '74.35',
    propertyTime: 1726203600000
  },
  {
    propertyValue: '74.33',
    propertyTime: 1726207200000
  },
  {
    propertyValue: '74.02',
    propertyTime: 1726210800000
  },
  {
    propertyValue: '76.27',
    propertyTime: 1726214400000
  }
];
const humidity = [
  {
    propertyValue: '30.67',
    propertyTime: 1726174800000
  },
  {
    propertyValue: '28.82',
    propertyTime: 1726178400000
  },
  {
    propertyValue: '29.82',
    propertyTime: 1726182000000
  },
  {
    propertyValue: '29.25',
    propertyTime: 1726185600000
  },
  {
    propertyValue: '30.52',
    propertyTime: 1726189200000
  },
  {
    propertyValue: '29.65',
    propertyTime: 1726192800000
  },
  {
    propertyValue: '29.70',
    propertyTime: 1726196400000
  },
  {
    propertyValue: '30.18',
    propertyTime: 1726200000000
  },
  {
    propertyValue: '29.47',
    propertyTime: 1726203600000
  },
  {
    propertyValue: '29.33',
    propertyTime: 1726207200000
  },
  {
    propertyValue: '30.58',
    propertyTime: 1726210800000
  },
  {
    propertyValue: '29.13',
    propertyTime: 1726214400000
  }
];
const humidity = [
  {
    propertyValue: '30.67',
    propertyTime: 1726174800000
  },
  {
    propertyValue: '28.82',
    propertyTime: 1726178400000
  },
  {
    propertyValue: '29.82',
    propertyTime: 1726182000000
  },
  {
    propertyValue: '29.25',
    propertyTime: 1726185600000
  },
  {
    propertyValue: '30.52',
    propertyTime: 1726189200000
  },
  {
    propertyValue: '29.65',
    propertyTime: 1726192800000
  },
  {
    propertyValue: '29.70',
    propertyTime: 1726196400000
  },
  {
    propertyValue: '30.18',
    propertyTime: 1726200000000
  },
  {
    propertyValue: '29.47',
    propertyTime: 1726203600000
  },
  {
    propertyValue: '29.33',
    propertyTime: 1726207200000
  },
  {
    propertyValue: '30.58',
    propertyTime: 1726210800000
  },
  {
    propertyValue: '29.13',
    propertyTime: 1726214400000
  }
];
const dataLineBarLine = {
  axisData: temperatureData.map(item => item.propertyTime),
  seriesData: [
    {
      type: 'line',
      data: temperatureData.map(item => item.propertyValue)
    },
    {
      type: 'bar',
      data: humidity.map(item => item.propertyValue)
    }
  ]
};
const templateAllLine = ref({
  templateLineBar: {
    labelPosition: 'top',
    type: 'multiple',
    smooth: true,
    lineBar: true
  }
});
```

```html
<LSChart template="line" :data="dataLineBarLine" :template-patch="templateAllLine.templateLineBar" />
```

:::

### 4. templateDynamicLine

<LSChart template="line" :data="dynamicLine" :template-patch="templateAllLine.templateDynamicLine" width="800" height="400" />

::: details 点我查看代码

```js
const temperatureData = [
  {
    propertyValue: '73.55',
    propertyTime: 1726174800000
  },
  {
    propertyValue: '75.72',
    propertyTime: 1726178400000
  },
  {
    propertyValue: '76.77',
    propertyTime: 1726182000000
  },
  {
    propertyValue: '75.68',
    propertyTime: 1726185600000
  },
  {
    propertyValue: '76.13',
    propertyTime: 1726189200000
  },
  {
    propertyValue: '74.85',
    propertyTime: 1726192800000
  },
  {
    propertyValue: '75.95',
    propertyTime: 1726196400000
  },
  {
    propertyValue: '75.80',
    propertyTime: 1726200000000
  },
  {
    propertyValue: '74.35',
    propertyTime: 1726203600000
  },
  {
    propertyValue: '74.33',
    propertyTime: 1726207200000
  },
  {
    propertyValue: '74.02',
    propertyTime: 1726210800000
  },
  {
    propertyValue: '76.27',
    propertyTime: 1726214400000
  }
];
const dynamicLine = {
  axisData: temperatureData.map(item => item.propertyTime),
  seriesData: [
    {
      type: 'line',
      data: temperatureData.map(item => item.propertyValue)
    }
  ]
};
const templateAllLine = ref({
  templateDynamicLine: {
    labelPosition: 'top',
    type: 'multiple',
    tooltip: 'cross',
    dynamicAxis: true
  }
});
```

```html
<LSChart template="line" :data="dynamicLine" :template-patch="templateAllLine.templateDynamicLine" width="800" height="400" />
```

:::

## API

### 1. Attributes

#### 1.1 templatePatch 公共参数 templatePatch 对应的配置项

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.2 data 公共参数 data 对应的配置项

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

<script setup>
import { tableColumn } from '../../constant';
import { ref } from 'vue';
import { ElForm, ElFormItem, ElRadioGroup, ElRadio, ElSelect, ElOption } from 'element-plus';

const formInline = ref({
  themeModel: 'default',
  axis: 'x',
  pos: 'top'
});
const themeOptions = ref([
  {
    label: '默认',
    value: 'default'
  },
  {
    label: '暗黑',
    value: 'dark'
  }
]);

const customOption = ref({
  xAxis: [
    {
      axisLabel: {
        rotate: 45,
        align: 'center',
        margin: 24
      }
    }
  ]
});

// 折线图
const temperatureData = [
  {
    propertyValue: '73.55',
    propertyTime: 1726174800000
  },
  {
    propertyValue: '75.72',
    propertyTime: 1726178400000
  },
  {
    propertyValue: '76.77',
    propertyTime: 1726182000000
  },
  {
    propertyValue: '75.68',
    propertyTime: 1726185600000
  },
  {
    propertyValue: '76.13',
    propertyTime: 1726189200000
  },
  {
    propertyValue: '74.85',
    propertyTime: 1726192800000
  },
  {
    propertyValue: '75.95',
    propertyTime: 1726196400000
  },
  {
    propertyValue: '75.80',
    propertyTime: 1726200000000
  },
  {
    propertyValue: '74.35',
    propertyTime: 1726203600000
  },
  {
    propertyValue: '74.33',
    propertyTime: 1726207200000
  },
  {
    propertyValue: '74.02',
    propertyTime: 1726210800000
  },
  {
    propertyValue: '76.27',
    propertyTime: 1726214400000
  }
];
const humidity = [
  {
    propertyValue: '30.67',
    propertyTime: 1726174800000
  },
  {
    propertyValue: '28.82',
    propertyTime: 1726178400000
  },
  {
    propertyValue: '29.82',
    propertyTime: 1726182000000
  },
  {
    propertyValue: '29.25',
    propertyTime: 1726185600000
  },
  {
    propertyValue: '30.52',
    propertyTime: 1726189200000
  },
  {
    propertyValue: '29.65',
    propertyTime: 1726192800000
  },
  {
    propertyValue: '29.70',
    propertyTime: 1726196400000
  },
  {
    propertyValue: '30.18',
    propertyTime: 1726200000000
  },
  {
    propertyValue: '29.47',
    propertyTime: 1726203600000
  },
  {
    propertyValue: '29.33',
    propertyTime: 1726207200000
  },
  {
    propertyValue: '30.58',
    propertyTime: 1726210800000
  },
  {
    propertyValue: '29.13',
    propertyTime: 1726214400000
  }
];
const templateAllLine = ref({
  templateSimpleLine: {
    labelPosition: 'top',
    tooltip: 'cross'
  },
  templateMultipleLine: {
    labelPosition: 'top',
    type: 'multiple',
    smooth: true,
    areaStyle: {},
    tooltip: 'cross',
    legend: ['Email', 'name', 'address'],
    dataZoom: 'horizontal'
    // dynamicAxis: true
  },
  templateLineBar: {
    labelPosition: 'top',
    type: 'multiple',
    smooth: true,
    lineBar: true
    // dynamicAxis: true
  },
  templateDynamicLine: {
    labelPosition: 'top',
    type: 'multiple',
    tooltip: 'cross',
    dynamicAxis: true
  }
});

const dataSimpleLine = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [120, 200, 150, 80, 70, 110, 130]
};
const dataMultipleLine = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    {
      name: 'Email',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'name',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'address',
      type: 'line',
      data: [22, 66, 99, 234, 33, 56, 310]
    }
  ]
};
const dataLineBarLine = {
  axisData: temperatureData.map(item => item.propertyTime),
  seriesData: [
    {
      type: 'line',
      data: temperatureData.map(item => item.propertyValue)
    },
    {
      type: 'bar',
      data: humidity.map(item => item.propertyValue)
    }
  ]
};
const dynamicLine = {
  axisData: temperatureData.map(item => item.propertyTime),
  seriesData: [
    {
      type: 'line',
      data: temperatureData.map(item => item.propertyValue)
    }
  ]
};

function changeChartStyle() {
  ['templateSimpleLine', 'templateMultipleLine', 'templateLineBar', 'templateDynamicLine'].forEach((item) => {
    templateAllLine.value[item].theme = formInline.value.themeModel;
    templateAllLine.value[item].axis = formInline.value.axis;
    templateAllLine.value[item].labelPosition = formInline.value.pos;
  });
}

const tableData = ref([
  {
    name: 'type',
    desc: '模板类型，可选项：normal / multiple',
    type: 'string',
    value: '-'
  },
  {
    name: 'axis',
    desc: '基于x或y展示数据, 可选项：x / y',
    type: 'string',
    value: 'x'
  },
  {
    name: 'smooth',
    desc: '是否平滑曲线',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'areaStyle',
    desc: '曲线区域填充样式',
    type: 'json',
    value: '-'
  },
  {
    name: 'tooltip',
    desc: '鼠标移入是否显示数据提示，可选项：line / shadow / cross / none',
    type: 'string',
    value: 'shadow'
  },
  {
    name: 'tooltipFormatter',
    desc: '自定义鼠标移入数据提示样式',
    type: 'function',
    value: '-'
  },
  {
    name: 'legend',
    desc: '显示标志的内容',
    type: 'array',
    value: '-'
  },
  {
    name: 'legendIcon',
    desc: '显示标志的图标形状, 可选项：circle / rect / roundRect / triangle / diamond / pin / arrow',
    type: 'string',
    value: 'rect'
  },
  {
    name: 'theme',
    desc: '主题类型，可选项：default / dark',
    type: 'string',
    value: 'default' 
  },
  {
    name: 'barColorList',
    desc: '自定义柱状色值,根据主题自动适配，也可以自己传值',
    type: 'array',
    value: '[#2285FF, #FF7D00, #00CDDC, #FB466C]'
  },
  {
    name: 'dataZoom',
    desc: '是否支持鼠标缩放, 请同axis方向保持一致，可选项：horizontal / vertical',
    type: 'string',
    value: '-'
  },
  {
    name: 'showBarFont',
    desc: '是否显示柱状数据值',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'labelPosition',
    desc: '柱状数据值显示位置，showBarFont为true时有效，可选项：top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight，（基于negative, waterfall类型存在以下特殊配置：both, insideBoth）',
    type: 'string',
    value: 'inside'
  },
  {
    name: 'dynamicAxis',
    desc: '是否动态计算坐标轴数据，支持 simple / multiBar 类型',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'lineBar',
    desc: '是否支持折线柱状图混合展示',
    type: 'boolean',
    value: 'false'
  }
])

const tableData2 = ref([
  {
    name: 'axisData',
    desc: '对应axis坐标轴数据，若axis为x，那么该数据展示在x轴上',
    type: 'array',
    value: '-' 
  },
  {
    name: 'seriesData',
    desc: '展示区域数据。除了simple是简单数组类型[xxx, xxx]，其余固定模板类型需为数组对象，即[{ name: xxx, data: [] } ]',
    type: 'array',
    value: '-'
  }
])
</script>

<style lang="scss" scoped>
.demo-form-inline {
  position: relative;
  z-index: 99999;
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
}
</style>

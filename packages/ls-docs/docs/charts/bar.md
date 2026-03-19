---
outline: deep
---

# Bar 柱状图

::: warning 快速创建常用类型的柱状图。
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

### 1. templatePatchSimple

<ClientOnly>
<LSChart
  template="bar"
  :data="dataSimple"
  :template-patch="templateAll.templatePatchSimple"
  :custom-option="customOptionSimple"
/>
</ClientOnly>

::: details 点我查看代码

```js
const dataSimple = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [120.1, 200, 150, 80, 70, 110, 0]
}
const templateAll: any = ref({
  templatePatchSimple: {
    labelPosition: 'top',
    showBackground: true,
    showBarFont: false,
    tooltipValueFormatter: (value, dataIndex) => {
      return `${dataIndex} - ${((value || 0) / 100).toFixed(2)} %`;
    },
  }
})
const customOptionSimple = ref({
  xAxis: [
    {
      axisLabel: {
        rotate: 45,
        align: 'center',
        margin: 24
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ]
});
```

```html
<LSChart
  template="bar"
  :data="dataSimple"
  :template-patch="templateAll.templatePatchSimple"
  :custom-option="customOptionSimple"
/>
```

:::

### 2. templatePatchNegative

<ClientOnly>
<LSChart
  template="bar"
  :data="dataNegative"
  :template-patch="templateAll.templatePatchNegative"
/>
</ClientOnly>

::: details 点我查看代码

```js
const dataNegative = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    { name: '收入', data: [320, 302, 341, 374, 390, 450, 420] },
    { name: '支出', data: [-120, -132, -101, -134, -190, -230, 0] }
  ]
};
const templateAll = ref({
  templatePatchNegative: {
    labelPosition: 'both',
    type: 'negative',
    tooltip: 'shadow',
    legend: ['收入', '支出'],
    seriesLabelFormatter: params => {
      return Math.round(params.value) / 100 + '%';
    }
  }
});
```

```html
<LSChart template="bar" :data="dataNegative" :template-patch="templateAll.templatePatchNegative" />
```

:::

### 3. templatePatchWaterfall

<ClientOnly>
<LSChart
  template="bar"
  :data="dataWaterfall"
  :template-patch="templateAll.templatePatchWaterfall"
/>
</ClientOnly>

::: details 点我查看代码

```js
const dataWaterfall = {
  axisData: (function () {
    let list = [];
    for (let i = 1; i <= 11; i++) {
      list.push('11月' + i + '日');
    }
    return list;
  })(),
  seriesData: [
    {
      name: 'temp',
      data: [0, 900, 1245, 1530, 1376, 1376, 0, 1689, 1856, 1495, 1292]
    },
    {
      name: '收入',
      data: [900, 345, 393, '-', '-', 0, 178, 286, '-', '-', '-']
    },
    {
      name: '支出',
      data: ['-', '-', '-', 108, 0, '-', '-', '-', 119, 361, 203]
    }
  ]
};
const templateAll = ref({
  templatePatchWaterfall: {
    type: 'waterfall',
    tooltip: 'shadow',
    labelPosition: 'both',
    legend: ['收入', '支出']
  }
});
```

```html
<LSChart template="bar" :data="dataWaterfall" :template-patch="templateAll.templatePatchWaterfall" />
```

:::

### 4. templatePatchCategory

<ClientOnly>
<LSChart
  template="bar"
  :data="dataCategory"
  :template-patch="templateAll.templatePatchCategory"
/>
</ClientOnly>

::: details 点我查看代码

```js
const dataCategory = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    {
      name: '直接访问',
      data: [320, 302, 301, 334, 0, 330, 320]
    },
    {
      name: '邮件营销',
      data: [120, 132, 101, 0, 90, 230, 210]
    },
    {
      name: '联盟广告',
      data: [220, 182, 191, 234, 290, 0, 310]
    },
    {
      name: '视频广告',
      data: [150, 212, 201, 0, 190, 330, 410]
    }
  ]
};

// 两系列数据（用于案例8）
const dataTwoSeries = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    {
      name: '直接访问',
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '邮件营销',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};
const templateAll = ref({
  templatePatchCategory: {
    type: 'categoryStack',
    tooltip: 'shadow',
    legend: ['直接访问', '邮件营销', '联盟广告', '视频广告']
  }
});
```

```html
<LSChart template="bar" :data="dataCategory" :template-patch="templateAll.templatePatchCategory" />
```

:::

### 5. templatePatchMultiBar

<ClientOnly>
<LSChart template="bar" :data="dataMultiBar" :template-patch="templateAll.templatePatchMultiBar" />
</ClientOnly>

::: details 点我查看代码

```js
const dataMultiBar = {
  axisData: ['2012', '2013', '2014', '2015', '2016'],
  seriesData: [
    {
      name: 'Forest',
      data: [320, 332, 301, 0, 390]
    },
    {
      name: 'Steppe',
      data: [220, 182, 0, 234, 290]
    },
    {
      name: 'Desert',
      data: [150, 232, 201, 154, 0]
    },
    {
      name: 'Wetland',
      data: [98, 0, 101, 99, 40]
    }
  ]
};
const templateAll = ref({
  templatePatchMultiBar: {
    type: 'multiBar',
    tooltip: 'cross',
    dataZoom: 'horizontal',
    labelPosition: 'top',
    legend: ['Forest', 'Steppe', 'Desert', 'Wetland']
  }
});
```

```html
<LSChart template="bar" :data="dataMultiBar" :template-patch="templateAll.templatePatchMultiBar" />
```

:::

### 6. templatePatchHorizontalBar

<ClientOnly>
<LSChart template="bar" :data="dataHorizontalBar" :template-patch="templateAll.templatePatchHorizontalBar" />
</ClientOnly>

::: details 点我查看代码

```js
const dataHorizontalBar = {
  axisData: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  seriesData: [120, 200, 150, 80, 70, 110, 130]
};
const templateAll = ref({
  templatePatchHorizontalBar: {
    axis: 'y',
    labelPosition: 'right',
    showBackground: true,
    showBarFont: true
  }
});
```

```html
<LSChart template="bar" :data="dataHorizontalBar" :template-patch="templateAll.templatePatchHorizontalBar" />
```

:::

### 7. templatePatchCustomColor

<ClientOnly>
<LSChart template="bar" :data="dataSimple" :template-patch="templateAll.templatePatchCustomColor" />
</ClientOnly>

::: details 点我查看代码

```js
const dataSimple = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [120, 200, 150, 80, 70, 110, 130]
};
const templateAll = ref({
  templatePatchCustomColor: {
    labelPosition: 'top',
    showBackground: true,
    barColorList: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#8ACB88']
  }
});
```

```html
<LSChart template="bar" :data="dataSimple" :template-patch="templateAll.templatePatchCustomColor" />
```

:::

### 8. templatePatchDifferentLegendIcon

<ClientOnly>
<LSChart template="bar" :data="dataTwoSeries" :template-patch="templateAll.templatePatchDifferentLegendIcon" />
</ClientOnly>

::: details 点我查看代码

```js
const dataTwoSeries = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    {
      name: '直接访问',
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '邮件营销',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};
const templateAll = ref({
  templatePatchDifferentLegendIcon: {
    type: 'categoryStack',
    tooltip: 'shadow',
    legend: ['直接访问', '邮件营销'],
    legendIcon: 'circle',
    showBarFont: true,
    labelPosition: 'inside'
  }
});
```

```html
<LSChart template="bar" :data="dataTwoSeries" :template-patch="templateAll.templatePatchDifferentLegendIcon" />
```

:::

### 9. templatePatchVerticalDataZoom

<ClientOnly>
<LSChart template="bar" :data="dataMultiBar" :template-patch="templateAll.templatePatchVerticalDataZoom" />
</ClientOnly>

::: details 点我查看代码

```js
const dataMultiBar = {
  axisData: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  seriesData: [
    {
      name: 'Forest',
      data: [320, 332, 301, 334, 390, 330, 320, 350, 380, 400]
    },
    {
      name: 'Steppe',
      data: [220, 182, 191, 234, 290, 330, 310, 280, 250, 220]
    }
  ]
};
const templateAll = ref({
  templatePatchVerticalDataZoom: {
    type: 'multiBar',
    tooltip: 'cross',
    dataZoom: 'vertical',
    labelPosition: 'top',
    legend: ['Forest', 'Steppe']
  }
});
```

```html
<LSChart template="bar" :data="dataMultiBar" :template-patch="templateAll.templatePatchVerticalDataZoom" />
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
import * as echarts from 'echarts';
import { TITLE_STYLE } from './config';

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

const customOptionSimple = ref({
  xAxis: [
    {
      axisLabel: {
        rotate: 45,
        align: 'center',
        margin: 24
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ]
})

// 柱状图
const templateAll = ref({
  templatePatchSimple: {
    labelPosition: 'top',
    showBackground: true,
    showBarFont: false,
    dynamicAxis: true,
    tooltipValueFormatter: (value, dataIndex) => {
      return `${dataIndex} - ${((value || 0) / 100).toFixed(2)} %`;
    },
  },
  templatePatchNegative: {
    labelPosition: 'both',
    type: 'negative',
    tooltip: 'shadow',
    legend: ['收入', '支出'],
    legendIcon: 'circle',
    dynamicAxis: true,
    seriesLabelFormatter: params => {
      return Math.round(params.value) / 100 + '%';
    }
  },
  templatePatchWaterfall: {
    type: 'waterfall',
    tooltip: 'shadow',
    labelPosition: 'both',
    legend: ['收入', '支出'],
    showBarFont: true
  },
  templatePatchCategory: {
    type: 'categoryStack',
    tooltip: 'shadow',
    legend: ['直接访问', '邮件营销', '联盟广告', '视频广告'],
    showBarFont: true
  },
  templatePatchMultiBar: {
    type: 'multiBar',
    tooltip: 'cross',
    dataZoom: 'horizontal',
    labelPosition: 'top',
    legend: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    dynamicAxis: true,
    showBarFont: true
  },
  templatePatchHorizontalBar: {
    axis: 'y',
    labelPosition: 'right',
    showBackground: true,
    showBarFont: true
  },
  templatePatchCustomColor: {
    labelPosition: 'top',
    showBackground: true,
    barColorList: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#8ACB88'],
    showBarFont: true
  },
  templatePatchDifferentLegendIcon: {
    type: 'categoryStack',
    tooltip: 'shadow',
    legend: ['直接访问', '邮件营销'],
    legendIcon: 'circle',
    showBarFont: true,
    labelPosition: 'inside'
  },
  templatePatchVerticalDataZoom: {
    type: 'multiBar',
    tooltip: 'cross',
    dataZoom: 'vertical',
    labelPosition: 'top',
    legend: ['Forest', 'Steppe'],
    showBarFont: true
  }
});

const dataSimple = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [120.1, 120.1, 120.1, 120.1, 120.1, 120.1, null]
};
const dataNegative = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    { name: '收入', data: [320, 302, 341, 374, 390, 450, 420] },
    { name: '支出', data: [-120, -132, -101, -134, -190, -230, 0] }
  ]
};
const dataWaterfall = {
  axisData: (function () {
    let list = [];
    for (let i = 1; i <= 11; i++) {
      list.push('11月' + i + '日');
    }
    return list;
  })(),
  seriesData: [
    {
      name: 'temp',
      data: [0, 900, 1245, 1530, 1376, 1376, 0, 1689, 1856, 1495, 1292]
    },
    {
      name: '收入',
      data: [900, 345, 393, '-', '-', 0, 178, 286, '-', '-', '-']
    },
    {
      name: '支出',
      data: ['-', '-', '-', 108, 0, '-', '-', '-', 119, 361, 203]
    }
  ]
};
const dataCategory = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    {
      name: '直接访问',
      data: [320, 302, 301, 334, 0, 330, 320]
    },
    {
      name: '邮件营销',
      data: [120, 132, 101, 0, 90, 230, 210]
    },
    {
      name: '联盟广告',
      data: [220, 182, 191, 234, 290, 0, 310]
    },
    {
      name: '视频广告',
      data: [150, 212, 201, 0, 190, 330, 410]
    }
  ]
};
const dataMultiBar = {
  axisData: ['2012', '2013', '2014', '2015', '2016'],
  seriesData: [
    {
      name: 'Forest',
      data: [320, 332, 301, 0, 390]
    },
    {
      name: 'Steppe',
      data: [220, 182, 0, 234, 290]
    },
    {
      name: 'Desert',
      data: [150, 232, 201, 154, 0]
    },
    {
      name: 'Wetland',
      data: [98, 0, 101, 99, 40]
    }
  ]
};

// 堆叠柱状图数据
const dataStackedBar = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    {
      name: '直接访问',
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '邮件营销',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
};

// 水平柱状图数据
const dataHorizontalBar = {
  axisData: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  seriesData: [120, 200, 150, 80, 70, 110, 130]
};

// 两系列数据（用于案例8）
const dataTwoSeries = {
  axisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  seriesData: [
    {
      name: '直接访问',
      data: [320, 302, 301, 334, 390, 330, 320]
    },
    {
      name: '邮件营销',
      data: [120, 132, 101, 134, 90, 230, 210]
    }
  ]
};



function changeChartStyle() {
  [
    'templatePatchSimple',
    'templatePatchNegative',
    'templatePatchWaterfall',
    'templatePatchCategory',
    'templatePatchMultiBar',
    'templatePatchCustomColor',
    'templatePatchDifferentLegendIcon'
  ].forEach((item) => {
    templateAll.value[item].theme = formInline.value.themeModel;
    templateAll.value[item].axis = formInline.value.axis;
    templateAll.value[item].labelPosition = formInline.value.pos;
  });
  
  // 保持templatePatchHorizontalBar的水平显示特性
  if (templateAll.value.templatePatchHorizontalBar) {
    templateAll.value.templatePatchHorizontalBar.theme = formInline.value.themeModel;
    templateAll.value.templatePatchHorizontalBar.labelPosition = formInline.value.pos;
    // 不更新axis，保持为'y'以维持水平显示
  }
  
  // 保持templatePatchVerticalDataZoom的垂直缩放特性
  if (templateAll.value.templatePatchVerticalDataZoom) {
    templateAll.value.templatePatchVerticalDataZoom.theme = formInline.value.themeModel;
    templateAll.value.templatePatchVerticalDataZoom.axis = formInline.value.axis;
    templateAll.value.templatePatchVerticalDataZoom.labelPosition = formInline.value.pos;
  }
  
  // 更新customOptionSimple以适应坐标轴变化
  if (formInline.value.axis === 'y') {
    customOptionSimple.value = {
      xAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      yAxis: [
        {
          type: 'category',
          axisLabel: {
            rotate: 0,
            align: 'right',
            margin: 8
          }
        }
      ]
    };
  } else {
    customOptionSimple.value = {
      xAxis: [
        {
          type: 'category',
          axisLabel: {
            rotate: 45,
            align: 'center',
            margin: 24
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ]
    };
  }
}

const tableData = ref([
  {
    name: 'type',
    desc: '模板类型，可选项：simple / multiBar / negative / waterfall / categoryStack',
    type: 'string',
    value: 'simple'
  },
  {
    name: 'axis',
    desc: '基于x或y展示数据, 可选项：x / y',
    type: 'string',
    value: 'x'
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
    desc: '显示标志的图标样式，可选项：circle / rect / roundRect / triangle / diamond / pin / arrow',
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
    name: 'dataZoomColorOut',
    desc: '缩放底部外层颜色',
    type: 'string',
    value: '-'
  },
  {
    name: 'dataZoomColorIn',
    desc: '缩放底部内层颜色',
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
    name: 'tooltipValueFormatter',
    desc: '自定义tooltip值展示内容，示例templatePatchSimple',
    type: 'function',
    value: '-'
  },
  {
    name: 'seriesLabelFormatter',
    desc: '自定义数据label展示内容，示例templatePatchNegative',
    type: 'function',
    value: '-'
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

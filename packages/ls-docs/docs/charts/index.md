---
outline: deep
---

# Chart 介绍

::: warning 基于[echarts](https://echarts.apache.org/zh/option.html#title)二次封装， 目前支持bar、line、pie部分类型快速创建。
:::

::: tip 需安装依赖 [echarts](https://www.npmjs.com/package/echarts)
:::

## 使用方式

### 1. 基础用法

<br />
<ClientOnly>
<LSChart template="bar" :data="dataSimple" width="800" height="400" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const dataSimple = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [120, 200, 150, 80, 70, 110, 130]
};
```

```html
<LSChart template="bar" :data="dataSimple" width="800" height="400" />
```

:::

### 2. 自定义配置

<br />
<ClientOnly>
<LSChart template="line" :data="dataCustom" :template-patch="templateCustom" :custom-option="customOption" width="800" height="400" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const dataCustom = {
  axisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  seriesData: [120, 190, 300, 500, 800, 1200, 1500]
};

const templateCustom = {
  labelPosition: 'top',
  smooth: true,
  areaStyle: {}
};

const customOption = {
  title: {
    text: '自定义配置示例',
    left: 'center'
  },
  xAxis: [
    {
      axisLabel: {
        rotate: 45
      }
    }
  ],
  yAxis: [
    {
      axisLabel: {
        formatter: '{value} 元'
      }
    }
  ]
};
```

```html
<LSChart
  template="line"
  :data="dataCustom"
  :template-patch="templateCustom"
  :custom-option="customOption"
  width="800"
  height="400"
/>
```

:::

### 3. 主题切换

<br />
<ClientOnly>
<el-radio-group v-model="theme" @change="changeTheme">
  <el-radio label="default">默认主题</el-radio>
  <el-radio label="dark">暗黑主题</el-radio>
</el-radio-group>

<LSChart template="pie" :data="dataPie" :template-patch="{ theme: theme }" width="800" height="400" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const theme = ref('default');
const dataPie = {
  seriesData: [
    { value: 1048, name: '图例 A' },
    { value: 735, name: '图例 B' },
    { value: 580, name: '图例 C' },
    { value: 484, name: '图例 D' },
    { value: 300, name: '图例 E' }
  ]
};

// 无需额外的templatePie变量，直接在template-patch中使用theme变量
function changeTheme() {
  // 主题变化时会自动触发组件重新渲染
}
```

```html
<el-radio-group v-model="theme" @change="changeTheme">
  <el-radio label="default">默认主题</el-radio>
  <el-radio label="dark">暗黑主题</el-radio>
</el-radio-group>

<LSChart template="pie" :data="dataPie" :template-patch="{ theme: theme }" width="800" height="400" />
```

:::

### 4. 完全自定义配置

<br />
<ClientOnly>
<LSChart :custom-option="customOptionFull" width="800" height="400" />
</ClientOnly>

::: details 点我查看代码

```js
import { ref } from 'vue';
const customOptionFull = {
  title: {
    text: '完全自定义配置示例',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['销售额', '利润'],
    top: 30
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月'],
      axisLabel: {
        rotate: 45
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '销售额',
      position: 'left'
    },
    {
      type: 'value',
      name: '利润',
      position: 'right'
    }
  ],
  series: [
    {
      name: '销售额',
      type: 'bar',
      data: [1200, 1900, 3000, 5000, 8000, 12000],
      itemStyle: {
        color: '#5470c6'
      }
    },
    {
      name: '利润',
      type: 'line',
      yAxisIndex: 1,
      data: [120, 190, 300, 500, 800, 1200],
      itemStyle: {
        color: '#91cc75'
      },
      smooth: true
    }
  ]
};
```

```html
<LSChart :custom-option="customOptionFull" width="800" height="400" />
```

:::

## API

### 1. Attributes 公共参数

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2. Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData2" />

## 自定义参数

### 1. 自定义x或y轴内容展示，示例见Bar(templatePatchSimple)

```js
const customOption = {
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ]
};
```

```html
<LSChart template="bar" :custom-option="customOption" width="800" height="400" />
```

<script setup>
import { tableColumn, tableExposesColumn } from '../../constant';
import { ref } from 'vue';
import { ElRadioGroup, ElRadio } from 'element-plus';

// 基础用法数据
const dataSimple = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [120, 200, 150, 80, 70, 110, 130]
};

// 自定义配置数据
const dataCustom = {
  axisData: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  seriesData: [120, 190, 300, 500, 800, 1200, 1500]
};

const templateCustom = {
  labelPosition: 'top',
  smooth: true,
  areaStyle: {}
};

const customOption = {
  title: {
    text: '自定义配置示例',
    left: 'center'
  },
  xAxis: [
    {
      axisLabel: {
        rotate: 45
      }
    }
  ],
  yAxis: [
    {
      axisLabel: {
        formatter: '{value} 元'
      }
    }
  ]
};

// 主题切换数据
const theme = ref('default');
const dataPie = {
  seriesData: [
    { value: 1048, name: '图例 A' },
    { value: 735, name: '图例 B' },
    { value: 580, name: '图例 C' },
    { value: 484, name: '图例 D' },
    { value: 300, name: '图例 E' }
  ]
};

function changeTheme() {
  // 主题变化时会自动触发组件重新渲染
}

// 完全自定义配置数据
const customOptionFull = {
  title: {
    text: '完全自定义配置示例',
    left: 'center',
    textStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['销售额', '利润'],
    top: 30
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月'],
      axisLabel: {
        rotate: 45
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '销售额',
      position: 'left'
    },
    {
      type: 'value',
      name: '利润',
      position: 'right'
    }
  ],
  series: [
    {
      name: '销售额',
      type: 'bar',
      data: [1200, 1900, 3000, 5000, 8000, 12000],
      itemStyle: {
        color: '#5470c6'
      }
    },
    {
      name: '利润',
      type: 'line',
      yAxisIndex: 1,
      data: [120, 190, 300, 500, 800, 1200],
      itemStyle: {
        color: '#91cc75'
      },
      smooth: true
    }
  ]
};

const tableData = ref([
  {
    name: 'template',
    desc: '模板类型，可选项：bar / line / pie，不传则完全自定义。选择模板后可以使用对应的templatePatch配置项进行快速配置。',
    type: 'string',
    value: '-'
  },
  {
    name: 'width',
    desc: '图表宽度，单位为像素。如果不设置，图表会自适应容器宽度。',
    type: 'number',
    value: '-'
  },
  {
    name: 'height',
    desc: '图表高度，单位为像素。如果不设置，图表会自适应容器高度。',
    type: 'number',
    value: '-'
  },
  {
    name: 'templatePatch',
    desc: '模板配置项，需template已配置。不同模板类型有不同的配置项，详情请参考各模板的API文档。',
    type: 'object',
    value: '{}'
  },
  {
    name: 'data',
    desc: '图表数据，根据模板类型的不同，数据结构也会有所不同。\n- bar/line模板：{ axisData: [], seriesData: [] }\n- pie模板：{ seriesData: [] }',
    type: 'object',
    value: '{}'
  },
  {
    name: 'customOption',
    desc: '自定义配置项，完全参照echarts配置项。可以覆盖模板的默认配置，实现更灵活的定制。',
    type: 'object',
    value: '{}'
  },
  {
    name: 'loading',
    desc: '是否显示加载状态',
    type: 'boolean',
    value: 'false'
  },
  {
    name: 'loadingText',
    desc: '加载状态的文本',
    type: 'string',
    value: '加载中...'
  }
])

const tableData2 = ref([
  {
    name: 'echartObj',
    desc: 'echarts对象，可以通过此对象调用echarts的原生方法，如setOption、resize等。',
    type: 'object',
    value: '-'
  },
  {
    name: 'setOption',
    desc: '设置图表配置的方法，参数为echarts配置对象。',
    type: 'function',
    value: '(option: object) => void'
  },
  {
    name: 'resize',
    desc: '调整图表大小的方法，当容器大小变化时调用。',
    type: 'function',
    value: '() => void'
  },
  {
    name: 'showLoading',
    desc: '显示加载状态的方法。',
    type: 'function',
    value: '() => void'
  },
  {
    name: 'hideLoading',
    desc: '隐藏加载状态的方法。',
    type: 'function',
    value: '() => void'
  }
])
</script>

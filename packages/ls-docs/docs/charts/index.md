---
outline: deep
---

# Chart 图表

::: warning 基于[echarts](https://echarts.apache.org/zh/option.html#title)二次封装， 目前支持bar、line、pie部分类型快速创建。
:::

::: tip 需安装依赖 [echarts](https://www.npmjs.com/package/echarts)
:::

## 目录

- [功能介绍](#功能介绍)
- [使用方式](#使用方式)
  - [基础用法](#基础用法)
  - [自定义配置](#自定义配置)
  - [主题切换](#主题切换)
- [API](#api)
  - [Attributes 公共参数](#attributes-公共参数)
  - [Exposes](#exposes)

## 功能介绍

LSChart 组件是对 ECharts 的二次封装，提供了以下功能：

- 支持快速创建常用类型的图表，包括柱状图、折线图和饼图
- 支持自定义图表配置，完全兼容 ECharts 配置项
- 支持主题切换，包括默认主题和暗黑主题
- 支持响应式布局，可根据容器大小自动调整
- 提供简洁的 API 接口，方便使用和扩展

## 使用方式

### 基础用法

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

### 自定义配置

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
<LSChart template="line" :data="dataCustom" :template-patch="templateCustom" :custom-option="customOption" width="800" height="400" />
```

:::

### 主题切换

<br />
<ClientOnly>
<el-radio-group v-model="theme" @change="changeTheme">
  <el-radio label="default">默认主题</el-radio>
  <el-radio label="dark">暗黑主题</el-radio>
</el-radio-group>

<LSChart template="pie" :data="dataPie" :template-patch="templatePie" width="800" height="400" />
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

const templatePie = {
  theme: theme.value
};

function changeTheme() {
  templatePie.theme = theme.value;
}
```

```html
<el-radio-group v-model="theme" @change="changeTheme">
  <el-radio label="default">默认主题</el-radio>
  <el-radio label="dark">暗黑主题</el-radio>
</el-radio-group>

<LSChart template="pie" :data="dataPie" :template-patch="templatePie" width="800" height="400" />
```

:::

## API

### Attributes 公共参数

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### Exposes

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
}
```
```html
<LSChart
  template="bar"
  :custom-option="customOption"
  width="800"
  height="400"
/>
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

const templatePie = {
  theme: theme.value
};

function changeTheme() {
  templatePie.theme = theme.value;
}

const tableData = ref([
  {
    name: 'template',
    desc: '模板类型，可选项：bar / line / pie，不传则完全自定义',
    type: 'ChartTemplateType',
    value: '-'
  },
  {
    name: 'width',
    desc: '图表宽度',
    type: 'number',
    value: '-'
  },
  {
    name: 'height',
    desc: '图表高度',
    type: 'number',
    value: '-'
  },
  {
    name: 'templatePatch',
    desc: '模板配置项，需template已配置',
    type: 'ChartTemplatePatchType',
    value: '{}'
  },
  {
    name: 'data',
    desc: '图表数据',
    type: 'ChartDataType',
    value: '{}'
  },
  {
    name: 'customOption',
    desc: '自定义配置项，完全参照echarts配置项',
    type: 'json',
    value: '{}'
  }
])

const tableData2 = ref([{
  name: 'echartObj',
  desc: 'echarts对象',
  type: 'object',
  value: '-'
}])
</script>

---
outline: deep
---

# Chart 图表

::: warning 基于[echarts](https://echarts.apache.org/zh/option.html#title)二次封装， 目前支持bar、line、pie部分类型快速创建。
:::

::: tip 需安装依赖 [echarts](https://www.npmjs.com/package/echarts)
:::

## API

### 1 Attributes 公共参数

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

### 2 Exposes

<ApiIntro :tableColumn="tableExposesColumn" :tableData="tableData2" />

<script setup>
import { tableColumn, tableExposesColumn } from '../../constant';
import { ref } from 'vue';

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

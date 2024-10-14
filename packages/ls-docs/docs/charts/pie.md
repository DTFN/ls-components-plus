---
outline: deep
---

# Pie 饼图

::: warning 快速创建常用类型的饼图。
:::

## 使用方式

<br />
<el-form :inline="true" :model="formInline" class="demo-form-inline">
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

### 1. 案例一

<LSChart template="pie" :data="{ seriesData: seriesDataPie }" :template-patch="templateAllPie.template1" width="800" height="400" :custom-option="customOptionPie" ></LSChart>

::: details 点我查看代码

```js
const seriesDataPie = [
  { value: 1048, name: '图例 A' },
  { value: 735, name: '图例 B' },
  { value: 580, name: '图例 C' },
  { value: 484, name: '图例 D' },
  { value: 300, name: '图例 E' }
];
const templateAllPie = ref({
  template1: {}
});
const customOptionPie = ref({
  series: [
    {
      roseType: 'area'
    }
  ]
});
```

```html
<LSChart
  template="pie"
  :data="{ seriesData: seriesDataPie }"
  :template-patch="templateAllPie.template1"
  width="800"
  height="400"
  :custom-option="customOptionPie"
></LSChart>
```

:::

### 2. 案例二

<LSChart template="pie" :data="{ seriesData: seriesDataPie }" :template-patch="templateAllPie.template2" :custom-option="customOptionPie2" height="400" ></LSChart>

::: details 点我查看代码

```js
const seriesDataPie = [
  { value: 1048, name: '图例 A' },
  { value: 735, name: '图例 B' },
  { value: 580, name: '图例 C' },
  { value: 484, name: '图例 D' },
  { value: 300, name: '图例 E' }
];
const templateAllPie = ref({
  template2: {
    radius: ['45%', '60%']
  }
});
const customOptionPie2 = ref({
  graphic: [
    {
      type: 'text',
      left: 'center', // 水平居中
      // top: 'center', // 垂直居中
      top: '40%',
      style: {
        text: '中心内容', // 显示的文本
        textAlign: 'center',
        fill: '#000', // 文本颜色
        fontSize: 20
      }
    },
    {
      type: 'text',
      left: 'center', // 水平居中
      // top: 'center', // 垂直居中
      top: '50%',
      style: {
        text: '100%', // 显示的文本
        textAlign: 'center',
        fill: '#000', // 文本颜色
        fontSize: 20
      }
    }
  ]
});
```

```html
<LSChart
  template="pie"
  :data="{ seriesData: seriesDataPie }"
  :template-patch="templateAllPie.template2"
  :custom-option="customOptionPie2"
  height="400"
></LSChart>
```

:::

### 3. 案例三

<LSChart template="pie" :data="{ seriesData: seriesDataPie }" :template-patch="templateAllPie.template3" height="400" ></LSChart>

::: details 点我查看代码

```js
const seriesDataPie = [
  { value: 1048, name: '图例 A' },
  { value: 735, name: '图例 B' },
  { value: 580, name: '图例 C' },
  { value: 484, name: '图例 D' },
  { value: 300, name: '图例 E' }
];
const templateAllPie = ref({
  template3: {
    radius: ['10%', '60%'],
    roseType: 'radius'
  }
});
```

```html
<LSChart template="pie" :data="{ seriesData: seriesDataPie }" :template-patch="templateAllPie.template3" height="400"></LSChart>
```

:::

### 4. 案例四

<LSChart template="pie" :data="{ seriesData: seriesDataPie, innerData: innerDataPie }" :template-patch="templateAllPie.template4" :custom-option="{ series: [ { cursor: 'move' } ] }" height="400" ></LSChart>

::: details 点我查看代码

```js
const seriesDataPie = [
  { value: 1048, name: '图例 A' },
  { value: 735, name: '图例 B' },
  { value: 580, name: '图例 C' },
  { value: 484, name: '图例 D' },
  { value: 300, name: '图例 E' }
];
const templateAllPie = ref({
  template4: {
    radius: ['10%', '60%'],
    roseType: 'radius'
  }
});
const innerDataPie = [
  { value: 1548, name: '图例 1' },
  { value: 775, name: '图例 2' },
  { value: 679, name: '图例 3' }
];
```

```html
<LSChart
  template="pie"
  :data="{ seriesData: seriesDataPie, innerData: innerDataPie }"
  :template-patch="templateAllPie.template4"
  :custom-option="{ series: [ { cursor: 'move' } ] }"
  height="400"
></LSChart>
```

:::

## API

### 1. Attributes

#### 1.1 templatePatch 公共参数 templatePatch 对应的配置项

<ApiIntro :tableColumn="tableColumn" :tableData="tableData" />

#### 1.2 data 公共参数 data 对应的配置项

<ApiIntro :tableColumn="tableColumn" :tableData="tableData2" />

<script setup>
import { tableColumn } from '../constant';
import { ref } from 'vue';
import { ElForm, ElFormItem, ElRadioGroup, ElRadio, ElSelect, ElOption } from 'element-plus';

const formInline = ref({
  themeModel: 'default',
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

// 饼图
const customOptionPie = ref({
  series: [
    {
      roseType: 'area'
    }
  ]
});
// 饼图圈内增加内容
const customOptionPie2 = ref({
  graphic: [
    {
      type: 'text',
      left: 'center', // 水平居中
      // top: 'center', // 垂直居中
      top: '40%',
      style: {
        text: '中心内容', // 显示的文本
        textAlign: 'center',
        fill: '#000', // 文本颜色
        fontSize: 20
      }
    },
    {
      type: 'text',
      left: 'center', // 水平居中
      // top: 'center', // 垂直居中
      top: '50%',
      style: {
        text: '100%', // 显示的文本
        textAlign: 'center',
        fill: '#000', // 文本颜色
        fontSize: 20
      }
    }
  ]
});
const templateAllPie = ref({
  template1: {},
  template2: {
    radius: ['45%', '60%']
  },
  template3: {
    radius: ['10%', '60%'],
    roseType: 'radius'
  },
  template4: {
    radius: ['45%', '60%'],
    innerRadius: [0, '35%']
  }
});
const seriesDataPie = [
  { value: 1048, name: '图例 A' },
  { value: 735, name: '图例 B' },
  { value: 580, name: '图例 C' },
  { value: 484, name: '图例 D' },
  { value: 300, name: '图例 E' }
];
const innerDataPie = [
  { value: 1548, name: '图例 1' },
  { value: 775, name: '图例 2' },
  { value: 679, name: '图例 3' }
];
function changeChartStyle() {
  ['template1', 'template2', 'template3', 'template4'].forEach((item) => {
    templateAllPie.value[item].theme = formInline.value.themeModel;
  });
}

const tableData = ref([
  {
    name: 'color',
    desc: '调色盘颜色列表。会依次循环从该列表中取颜色作为系列颜色',
    type: 'array',
    value: '[#2285FF, #FF7D00, #00CDDC, #FB466C, #FFC917, #8CEAFF, #A16FFD, #FD8BFF]'
  },
  {
    name: 'backgroundColor',
    desc: '背景颜色',
    type: 'string',
    value: '-'
  },
  {
    name: 'showTooltip',
    desc: '鼠标移入是否显示数据提示',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'tooltipTrigger',
    desc: '提示框组件触发类型, 可选项：item / axis / none ；item： 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用；axis：坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用；none：不触发',
    type: 'string',
    value: 'item'
  },
  {
    name: 'tooltipFormatter',
    desc: '提示框浮层内容格式器，支持字符串模板和回调函数两种形式',
    type: 'string / function',
    value: '-'
  },
  {
    name: 'legendType',
    desc: `图例组件的类型, 可选项：plain / scroll', plain：普通图例，缺省就是普通图例。 scroll：可滚动翻页的图例，当图例数量较多时可以使用`,
    type: 'string',
    value: 'plain'
  },
  {
    name: 'legendShow',
    desc: '是否显示图例',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'legendOrient',
    desc: '图例的布局朝向, 可选项：horizontal / vertical',
    type: 'string',
    value: 'horizontal'
  },
  {
    name: 'legendLeft',
    desc: '图例组件离容器左侧的距离，默认居中，可选项：auto / left / right / center',
    type: 'string / number',
    value: 'center'
  },
  {
    name: 'legendRight',
    desc: '图例组件离容器右侧的距离，默认自适应, 可选项：auto / number',
    type: 'string / number',
    value: 'auto'
  },
  {
    name: 'legendTop',
    desc: '图例组件离容器上侧的距离，默认自适应, 可选项：auto / number',
    type: 'string / number',
    value: 'auto'
  },
  {
    name: 'legendBottom',
    desc: '图例组件离容器下侧的距离，默认自适应, 可选项：auto / number',
    type: 'string / number',
    value: 'auto'
  },
  {
    name: 'legendTextColor',
    desc: '图例组件的公用文本颜色',
    type: 'string',
    value: '#2C2C2C'
  },
  {
    name: 'radius',
    desc: '饼图的半径，数组的第一项是内半径，第二项是外半径',
    type: 'array',
    value: '[0%, 60%]' 
  },
  {
    name: 'roseType',
    desc: '是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：radius：扇区圆心角展现数据的百分比，半径展现数据的大小；area：所有扇区圆心角相同，仅通过半径展现数据大小',
    type: 'string / boolean',
    value: 'false'
  },
  {
    name: 'percentPrecision',
    desc: '饼图百分比数值的精度，默认保留小数点后两位',
    type: 'number',
    value: '2'
  },
  {
    name: 'lineShow',
    desc: '是否显示视觉引导线',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'lineColor',
    desc: '视觉引导线的颜色',
    type: 'string',
    value: 'rgba(0, 0, 0, 0.2)'
  },
  {
    name: 'length',
    desc: '视觉引导线第一段的长度',
    type: 'number',
    value: '40'
  },
  {
    name: 'length2',
    desc: '视觉引导项第二段的长度',
    type: 'number',
    value: '30'
  },
  {
    name: 'labelShow',
    desc: '饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'labelColor',
    desc: '饼图图形上的文本标签颜色',
    type: 'string',
    value: '#2C2C2C'
  },
  {
    name: 'labelShowPercent',
    desc: '饼图图形上的文本标签，是否展示百分比数据信息',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'labelShowItem',
    desc: '饼图图形上的文本标签，是否展示图例对应颜色块',
    type: 'boolean',
    value: 'true'
  },
  {
    name: 'labelFormatter',
    desc: '标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 换行',
    type: 'string / function',
    value: '-'
  },
  {
    name: 'innerRadius',
    desc: '嵌套环形内饼图的半径',
    type: 'number / string / array',
    value: `[0%, '30%']`
  },
  {
    name: 'innerLabelColor',
    desc: '嵌套环形内饼图图形上的文本标签颜色',
    type: 'string',
    value: '#FFF'
  }
])

const tableData2 = ref([
  {
    name: 'seriesData',
    desc: `饼图数据内容数组，value：数据项值；name：数据项的名称；color：图形的颜色`,
    type: 'array',
    value: '-'
  },
  {
    name: 'innerData',
    desc: `嵌套环形内饼图数据内容数组，value：数据项值；name：数据项的名称；color：图形的颜色`,
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

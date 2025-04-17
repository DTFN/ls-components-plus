<script setup lang="ts">
import { ChartDataType, ChartTemplatePatchType, ChartTemplateType } from '@cpo/_types';

const formInline: any = ref({
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

// 柱状图
const templateAll: Ref<{
  [key: string]: ChartTemplatePatchType;
}> = ref({
  templatePatchSimple: {
    labelPosition: 'top',
    showBackground: true,
    showBarFont: false,
    dynamicAxis: true,
    tooltipValueFormatter: (value, dataIndex) => {
      console.log(value, dataIndex);
      return `${dataIndex} - ${((value || 0) / 100).toFixed(2)} %`;
    }
  },
  templatePatchNegative: {
    labelPosition: 'both',
    type: 'negative',
    tooltip: 'shadow',
    legend: ['收入', '支出'],
    legendIcon: 'circle',
    dynamicAxis: true,
    seriesFormatter: params => {
      return Math.round(params.value) / 100 + '%';
    }
  },
  templatePatchWaterfall: {
    type: 'waterfall',
    tooltip: 'shadow',
    labelPosition: 'both',
    legend: ['收入', '支出']
  },
  templatePatchCategory: {
    type: 'categoryStack',
    tooltip: 'shadow',
    legend: ['直接访问', '邮件营销', '联盟广告', '视频广告']
  },
  templatePatchMultiBar: {
    type: 'multiBar',
    tooltip: 'cross',
    dataZoom: 'horizontal',
    labelPosition: 'top',
    legend: ['Forest', 'Steppe', 'Desert', 'Wetland'],
    dynamicAxis: true
  }
});

// 自定义Y轴展示内容
const customMultiBarOption = {
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ]
};

const dataSimple: ChartDataType = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  // seriesData: [120, 200, 150, 80, 70, 110, 0]
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
    propertyValue: null,
    propertyTime: 1726192800000
  },
  {
    propertyValue: '75.95',
    propertyTime: 1726196400000
  },
  {
    propertyValue: null,
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

const lineData = {
  axisData: [
    '15时',
    '16时',
    '17时',
    '18时',
    '19时',
    '20时',
    '21时',
    '22时',
    '23时',
    '00时',
    '01时',
    '02时',
    '03时',
    '04时',
    '05时',
    '06时',
    '07时',
    '08时',
    '09时',
    '10时',
    '11时',
    '12时',
    '13时',
    '14时'
  ],
  seriesData: [
    7.4, 7.43, 7.38, 7.48, 7.57, 7.3, 7.62, 7.25, 7.55, 7.53, 7.47, 7.48, 7.48, 7.42, 7.43, 7.43, 7.53, 7.5, 7.63, 7.45, 7.43,
    7.63, 7.48, 7.42
  ]
};
const templateAllLine: Ref<{
  [key: string]: ChartTemplatePatchType;
}> = ref({
  templateSimpleLine: {
    labelPosition: 'top',
    tooltip: 'cross',
    tooltipValueFormatter: (value, dataIndex) => {
      console.log(value, dataIndex);
      return `${dataIndex} - ${((value || 0) / 100).toFixed(2)} %`;
    },
    seriesFormatter: params => {
      return Math.round(params.value) / 100 + '%';
    }
  },
  templateMultipleLine: {
    labelPosition: 'top',
    type: 'multiple',
    smooth: true,
    areaStyle: {},
    tooltip: 'cross',
    legend: ['Email', 'name', 'address'],
    legendIcon: 'circle',
    dataZoom: 'horizontal',
    dataZoomColorOut: 'green',
    dataZoomColorIn: 'yellow'
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
  },
  templateDynamicLine2: {
    // labelPosition: 'top',
    // type: 'multiple',
    barColorList: ['#416BE0', '#41CBE0', '#F39423', '#D9755A', '#91cc75', '#fac858', '#ea7ccc', '#9a60b4'],
    dataZoom: 'horizontal',
    showBarFont: false,
    tooltip: 'line',
    dynamicAxis: true,
    legendIcon: 'circle'
  }
});

const customDymLineOption = {
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ]
};

const dataSimpleLine: any = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [0, 200, 150, 80, 70, 110, 130]
};
const dataMultipleLine: any = {
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
const dataLineBarLine: ChartDataType = {
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
const dynamicLine: any = {
  axisData: temperatureData.map(item => item.propertyTime),
  seriesData: [
    {
      type: 'line',
      data: temperatureData.map(item => item.propertyValue),
      itemStyle: {
        color: 'rgba(232, 41, 41, 1)'
      }
    }
  ]
};

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
const templateAllPie: any = ref({
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
  [
    'templatePatchSimple',
    'templatePatchNegative',
    'templatePatchWaterfall',
    'templatePatchCategory',
    'templatePatchMultiBar'
  ].forEach((item: any) => {
    templateAll.value[item].theme = formInline.value.themeModel;
    templateAll.value[item].axis = formInline.value.axis;
    templateAll.value[item].labelPosition = formInline.value.pos;
  });

  ['templateSimpleLine', 'templateMultipleLine', 'templateLineBar', 'templateDynamicLine'].forEach((item: any) => {
    templateAllLine.value[item].theme = formInline.value.themeModel;
    templateAllLine.value[item].axis = formInline.value.axis;
    templateAllLine.value[item].labelPosition = formInline.value.pos;
  });

  ['template1', 'template2', 'template3', 'template4'].forEach((item: any) => {
    templateAllPie.value[item].theme = formInline.value.themeModel;
  });
}

const templateName: Ref<ChartTemplateType> = ref('bar');
</script>

<template>
  <div>
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

    <div style="margin-top: 60px">
      <el-divider content-position="left">柱状图</el-divider>

      <LSChart
        :template="templateName"
        :data="dataSimple"
        :template-patch="templateAll.templatePatchSimple"
        :custom-option="customOption"
        :style="{ marginTop: '16px' }"
      />
      <LSChart
        template="bar"
        :data="dataNegative"
        :template-patch="templateAll.templatePatchNegative"
        :style="{ marginTop: '16px' }"
      />
      <LSChart
        template="bar"
        :data="dataWaterfall"
        :template-patch="templateAll.templatePatchWaterfall"
        :style="{ marginTop: '16px' }"
      />
      <LSChart
        template="bar"
        :data="dataCategory"
        :template-patch="templateAll.templatePatchCategory"
        :style="{ marginTop: '16px' }"
      />
      <LSChart
        template="bar"
        :data="dataMultiBar"
        :template-patch="templateAll.templatePatchMultiBar"
        :custom-option="customMultiBarOption"
        :style="{ marginTop: '16px' }"
      />

      <el-divider content-position="left">折线图</el-divider>

      <LSChart
        template="line"
        :data="dataSimpleLine"
        :template-patch="templateAllLine.templateSimpleLine"
        :custom-option="customOption"
        :style="{ marginTop: '16px' }"
      />
      <LSChart
        template="line"
        :data="dataMultipleLine"
        :template-patch="templateAllLine.templateMultipleLine"
        :style="{ marginTop: '16px' }"
      />

      <LSChart
        template="line"
        :data="dataLineBarLine"
        :template-patch="templateAllLine.templateLineBar"
        :style="{ marginTop: '16px' }"
      />

      <LSChart
        template="line"
        :data="dynamicLine"
        :template-patch="templateAllLine.templateDynamicLine"
        :custom-option="customDymLineOption"
        :style="{ marginTop: '16px' }"
        width="800"
        height="400"
      />

      <LSChart
        :data="dataSimpleLine"
        :template-patch="templateAllLine.templateSimpleLine"
        :custom-option="{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line'
            }
          ]
        }"
        :style="{ marginTop: '16px' }"
        width="800"
        height="400"
      />

      <LSChart
        template="line"
        :data="lineData"
        :template-patch="templateAllLine.templateDynamicLine2"
        :style="{ marginTop: '16px' }"
        height="400"
      />

      <el-divider content-position="left">饼图</el-divider>

      <LSChart
        template="pie"
        :data="{ seriesData: seriesDataPie }"
        :template-patch="templateAllPie.template1"
        :style="{ marginTop: '16px' }"
        width="800"
        height="400"
        :custom-option="customOptionPie"
      ></LSChart>

      <LSChart
        template="pie"
        :data="{ seriesData: seriesDataPie }"
        :template-patch="templateAllPie.template2"
        :custom-option="customOptionPie2"
        :style="{ marginTop: '16px' }"
        height="400"
      ></LSChart>

      <LSChart
        template="pie"
        :data="{ seriesData: seriesDataPie }"
        :template-patch="templateAllPie.template3"
        :style="{ marginTop: '16px' }"
        height="400"
      ></LSChart>

      <LSChart
        template="pie"
        :data="{ seriesData: seriesDataPie, innerData: innerDataPie }"
        :template-patch="templateAllPie.template4"
        :custom-option="{
          series: [
            {
              cursor: 'move'
            }
          ]
        }"
        :style="{ marginTop: '16px' }"
        height="400"
      ></LSChart>
    </div>

    <LSBackTop :target="'.el-main'" :ani-switch="true"> </LSBackTop>
  </div>
</template>

<style lang="scss" scoped>
.demo-form-inline {
  position: fixed;
  top: 60px;
  left: 220px;
  z-index: 99999;
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
}
</style>

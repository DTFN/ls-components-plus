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
    tooltipValueFormatter: (value: any, dataIndex: number) => {
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
    seriesLabelFormatter: (params: any) => {
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
      },
      show: false
    }
  ],
  xAxis: [
    {
      show: false
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
const train = [
  { value: [0, 0], dataSrcType: 'train', threshold: 0.4271 },
  { value: [0.0343, 0.0747], dataSrcType: 'train', threshold: 0.411 },
  { value: [0.0748, 0.1398], dataSrcType: 'train', threshold: 0.4059 },
  { value: [0.1123, 0.2094], dataSrcType: 'train', threshold: 0.4016 },
  { value: [0.152, 0.2758], dataSrcType: 'train', threshold: 0.3982 },
  { value: [0.1908, 0.3434], dataSrcType: 'train', threshold: 0.3962 },
  { value: [0.2386, 0.3969], dataSrcType: 'train', threshold: 0.3941 },
  { value: [0.2847, 0.453], dataSrcType: 'train', threshold: 0.3925 },
  { value: [0.3362, 0.5006], dataSrcType: 'train', threshold: 0.3909 },
  { value: [0.3799, 0.5606], dataSrcType: 'train', threshold: 0.3896 },
  { value: [0.4293, 0.6108], dataSrcType: 'train', threshold: 0.3885 },
  { value: [0.4792, 0.6611], dataSrcType: 'train', threshold: 0.3873 },
  { value: [0.5335, 0.7043], dataSrcType: 'train', threshold: 0.3861 },
  { value: [0.5878, 0.7474], dataSrcType: 'train', threshold: 0.3847 },
  { value: [0.6393, 0.7951], dataSrcType: 'train', threshold: 0.3835 },
  { value: [0.6973, 0.8325], dataSrcType: 'train', threshold: 0.3822 },
  { value: [0.7578, 0.866], dataSrcType: 'train', threshold: 0.3805 },
  { value: [0.8158, 0.9034], dataSrcType: 'train', threshold: 0.3785 },
  { value: [0.8754, 0.9381], dataSrcType: 'train', threshold: 0.3762 },
  { value: [0.9355, 0.9723], dataSrcType: 'train', threshold: 0.373 },
  { value: [0.9996, 1], dataSrcType: 'train', threshold: 0.365 }
];
const validate = [
  { value: [0, 0], dataSrcType: 'validate', threshold: 0.4272 },
  { value: [0.0236, 0.0826], dataSrcType: 'validate', threshold: 0.414 },
  { value: [0.067, 0.1406], dataSrcType: 'validate', threshold: 0.4065 },
  { value: [0.1014, 0.2098], dataSrcType: 'validate', threshold: 0.4031 },
  { value: [0.1395, 0.2746], dataSrcType: 'validate', threshold: 0.4001 },
  { value: [0.1667, 0.3527], dataSrcType: 'validate', threshold: 0.3977 },
  { value: [0.2138, 0.4063], dataSrcType: 'validate', threshold: 0.3955 },
  { value: [0.2554, 0.4665], dataSrcType: 'validate', threshold: 0.394 },
  { value: [0.3025, 0.5201], dataSrcType: 'validate', threshold: 0.3921 },
  { value: [0.3424, 0.5826], dataSrcType: 'validate', threshold: 0.3904 },
  { value: [0.3913, 0.6317], dataSrcType: 'validate', threshold: 0.3892 },
  { value: [0.4348, 0.6897], dataSrcType: 'validate', threshold: 0.388 },
  { value: [0.4982, 0.7232], dataSrcType: 'validate', threshold: 0.3866 },
  { value: [0.5471, 0.7746], dataSrcType: 'validate', threshold: 0.3856 },
  { value: [0.6014, 0.8192], dataSrcType: 'validate', threshold: 0.3841 },
  { value: [0.6739, 0.8415], dataSrcType: 'validate', threshold: 0.3827 },
  { value: [0.7373, 0.875], dataSrcType: 'validate', threshold: 0.3813 },
  { value: [0.8025, 0.9063], dataSrcType: 'validate', threshold: 0.3793 },
  { value: [0.8641, 0.942], dataSrcType: 'validate', threshold: 0.3771 },
  { value: [0.9275, 0.9754], dataSrcType: 'validate', threshold: 0.3735 },
  { value: [0.9982, 1], dataSrcType: 'validate', threshold: 0.3654 }
];
const lineData2 = {
  seriesData: [
    {
      name: 'train',
      data: train,
      type: 'line',
      smooth: true,
      symbolSize: 5,
      areaStyle: true,
      label: {
        show: false
      }
    },
    {
      name: 'validate',
      data: validate,
      type: 'line',
      smooth: true,
      symbolSize: 5,
      areaStyle: true
    }
  ]
};

const templateAllLine: Ref<{
  [key: string]: ChartTemplatePatchType;
}> = ref({
  templateSimpleLine: {
    labelPosition: 'top',
    tooltip: 'cross',
    tooltipValueFormatter: (value: any, dataIndex: number) => {
      console.log(value, dataIndex);
      return `${dataIndex} - ${((value || 0) / 100).toFixed(2)} %`;
    },
    seriesLabelFormatter: (params: any) => {
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
  templateMultipleLine2: {
    labelPosition: 'top',
    type: 'multiple',
    smooth: true,
    areaStyle: {},
    tooltip: 'cross',
    showBarFont: false
    // dataZoom: 'horizontal'
    // dataZoomColorOut: 'green',
    // dataZoomColorIn: 'yellow'
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

const customOptionLine2 = ref({
  title: {
    text: 'Main Title',
    subtext: 'Sub Title',
    // left: 'center',
    // top: 'center',
    textStyle: {
      fontSize: 30
    },
    subtextStyle: {
      fontSize: 20
    }
  },
  legend: {
    data: ['train_TPR']
  },
  xAxis: {
    type: 'value',
    splitNumber: 10,
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: 'TPR,FPR',
    splitNumber: 10
  },
  series: [
    {
      name: `train_TPR`,
      data: [
        [0, 0.9982],
        [0.05, 0.9275],
        [0.1, 0.8641],
        [0.15, 0.8025],
        [0.2, 0.7373],
        [0.25, 0.6739],
        [0.3, 0.6014],
        [0.35, 0.5471],
        [0.4, 0.4982],
        [0.45, 0.4348],
        [0.5, 0.3913],
        [0.55, 0.3424],
        [0.6, 0.3025],
        [0.65, 0.2554],
        [0.7, 0.2138],
        [0.75, 0.1667],
        [0.8, 0.1395],
        [0.85, 0.1014],
        [0.9, 0.067],
        [0.95, 0.0236],
        [1, 0]
      ],
      type: 'line',
      markLine: {
        symbol: ['none', 'none'],
        lineStyle: {
          color: 'red',
          width: 2,
          type: 'dashed'
        },
        data: [
          { type: 'average', name: '平均值' },
          { yAxis: 0.5, name: 'TPR = 0.5' }
        ]
      }
    }
  ]
});

const dataHeatmap = [];
for (let i = 0; i < 7; i++) {
  for (let j = 0; j < 24; j++) {
    dataHeatmap.push([j, i, Math.floor(Math.random() * 100)]);
  }
}
const customOptionLine3 = ref({
  tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: [
      '12a',
      '1a',
      '2a',
      '3a',
      '4a',
      '5a',
      '6a',
      '7a',
      '8a',
      '9a',
      '10a',
      '11a',
      '12p',
      '1p',
      '2p',
      '3p',
      '4p',
      '5p',
      '6p',
      '7p',
      '8p',
      '9p',
      '10p',
      '11p'
    ],
    splitArea: { show: true }
  },
  yAxis: {
    type: 'category',
    data: ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'],
    splitArea: { show: true }
  },
  visualMap: {
    min: 0,
    max: 100,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '5%'
  },
  series: [
    {
      name: '热力值',
      type: 'heatmap',
      data: dataHeatmap,
      label: {
        show: false
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
});

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

      <LSChart
        template="line"
        :data="lineData2"
        :template-patch="templateAllLine.templateMultipleLine2"
        :style="{ marginTop: '16px' }"
        :custom-option="{
          xAxis: [
            {
              type: 'value'
            }
          ]
        }"
        height="400"
      />

      <LSChart :custom-option="customOptionLine2" height="600" />

      <LSChart :custom-option="customOptionLine3" height="600" />

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

<script setup lang="ts">
import * as echarts from 'echarts/core';

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

const templateAll: any = ref({
  templatePatchSimple: {
    labelPosition: 'top',
    showBackground: true,
    showBarFont: false
  },
  templatePatchNegative: {
    labelPosition: 'both',
    type: 'negative',
    tooltip: 'shadow',
    legend: ['收入', '支出']
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
    tooltip: 'shadow',
    dataZoom: 'horizontal',
    labelPosition: 'top',
    legend: ['Forest', 'Steppe', 'Desert', 'Wetland']
  }
});

const dataSimple = {
  axisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  seriesData: [120, 200, 150, 80, 70, 110, 0]
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
const dataDefSeries = {
  axisData: generateData(5e5)
};
const defSeriseOption = {
  series: [
    {
      type: 'bar',
      data: generateData(5e5).valueData,
      large: true
    }
  ]
};
const templatePatchDefSeries = {};

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
}

function generateData(count: number) {
  let baseValue = Math.random() * 1000;
  let time = +new Date(2011, 0, 1);
  let smallBaseValue: number;

  function next(idx: number) {
    smallBaseValue = idx % 30 === 0 ? Math.random() * 700 : smallBaseValue + Math.random() * 500 - 250;
    baseValue += Math.random() * 20 - 10;
    return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000);
  }

  let categoryData = [];
  let valueData = [];
  for (let i = 0; i < count; i++) {
    categoryData.push(echarts.time.format(time, '{yyyy}-{MM}-{dd} {hh}:{mm}:{ss}', true));
    valueData.push(next(i).toFixed(2));
    time += 1000;
  }

  return {
    categoryData: categoryData,
    valueData: valueData
  };
}
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

    <LSChart
      template="bar"
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
      :style="{ marginTop: '16px' }"
    />
    <LSChart
      template="bar"
      :data="dataDefSeries"
      :template-patch="templatePatchDefSeries"
      :custom-option="defSeriseOption"
      :style="{ marginTop: '16px' }"
    ></LSChart>
  </div>
</template>

<style lang="scss" scoped></style>

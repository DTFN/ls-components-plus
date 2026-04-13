<script setup lang="ts" name="LSChart">
/**
 * @summary 图表组件 - 基于 ECharts 的模板化图表封装
 *
 * `LSChart` 目前内置 `line`、`bar`、`pie` 三类模板；可通过 `template + data + templatePatch`
 * 快速生成常用图表，也可仅传 `customOption` 直接渲染自定义 ECharts 配置。
 * 当 `template` 存在时，会先生成模板配置，再叠加 `customOption`；组件会在窗口尺寸变化时自动 `resize`。
 *
 * @attr {'line'|'bar'|'pie'|''} template 图表模板类型；为空时直接使用 `customOption`
 * @attr {ChartDataType} data 模板数据；`bar/line` 常用 `{ axisData, seriesData }`，`pie` 常用 `{ seriesData, innerData? }`
 * @attr {ChartTemplatePatchType} templatePatch 模板补充配置，不同模板读取的字段不同
 * @attr {EChartsOption} customOption 自定义 ECharts 配置；在模板模式下会叠加到模板结果上
 * @attr {number|string} width 图表宽度；传数字时内部会追加 `px`
 * @attr {number|string} height 图表高度；传数字时内部会追加 `px`，默认高度为 `30vh`
 *
 * @slot 无
 *
 * @event 无
 *
 * @example
 * <LSChart template="bar" :data="barData" :template-patch="{ type: 'multiBar', legend: ['A', 'B'] }" />
 *
 * @example
 * <LSChart template="pie" :data="{ seriesData }" :template-patch="{ radius: ['45%', '60%'] }" />
 *
 * @example
 * <LSChart :custom-option="option" height="400" />
 */
import { useNamespace } from '@cpo/_hooks/useNamespace';
import * as echarts from 'echarts/core';
import { LineChart, PieChart, BarChart, GaugeChart, HeatmapChart } from 'echarts/charts';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  ToolboxComponent,
  DataZoomComponent,
  GraphicComponent,
  MarkLineComponent,
  VisualMapComponent,
  TitleComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { lsChartProps } from './types';
import config from './config';

const ns = useNamespace('chart');
const comClass: string = ns.b();

const props = defineProps(lsChartProps);

echarts.use([
  TooltipComponent,
  ToolboxComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  BarChart,
  GaugeChart,
  GraphicComponent,
  MarkLineComponent,
  VisualMapComponent,
  HeatmapChart,
  TitleComponent
]);

const lsChartRef = ref();
const echartObj: Ref<echarts.ECharts | undefined> = ref();
const chartOption: Ref<any> = ref({});

const chartStyle = computed(() => {
  return {
    width: props.width ? `${props.width}px` : '100%',
    height: props.height ? `${props.height}px` : '30vh'
  };
});

watch(
  () => [props.width, props.height, props.template, props.data, props.customOption, props.templatePatch],
  () => {
    setChartOption();
  },
  {
    immediate: true,
    deep: true
  }
);

async function setChartOption() {
  if (props.template) {
    chartOption.value = await config.templateOption({
      template: props.template,
      data: props.data,
      templatePatch: props.templatePatch,
      customOption: props.customOption
    });
  } else {
    chartOption.value = props.customOption;
  }
  if (echartObj.value) {
    echartObj.value.setOption(chartOption.value, {
      notMerge: true
    });
    await nextTick();
    resizeChart();
  } else {
    await nextTick();
    initChart();
    setChartOption();
  }
}

function initChart() {
  echartObj.value = markRaw(echarts.init(lsChartRef.value));
  window.removeEventListener('resize', resizeChart);
  window.addEventListener('resize', resizeChart);
}

function resizeChart() {
  echartObj.value && echartObj.value.resize();
}

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  echartObj.value && echartObj.value.dispose();
});

defineExpose({
  echartObj
});
</script>

<template>
  <div :class="comClass" :style="chartStyle" ref="lsChartRef"></div>
</template>

<style lang="scss" scoped>
:deep(.ls-bar-tooltip-wrap) {
  position: relative;
  box-sizing: border-box;
  min-width: 120px;
  .name {
    margin-bottom: 2px;
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    color: cpo-var.$color-text1;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .serise-name {
    margin-right: 16px;
  }
  .serise-name,
  .value {
    font-size: 12px;
    line-height: 20px;
    color: cpo-var.$color-text2;
  }
  .value {
    font-weight: bold;
  }
  .serise-wrap {
    display: flex;
    align-items: center;
    .content-badge {
      width: 12px;
      height: 10px;
      margin-right: 4px;
      &.circle {
        width: 10px;
        border-radius: 50%;
      }
    }
  }
  &.dark {
    .name,
    .serise-name,
    .value {
      color: cpo-var.$color-light;
    }
  }
}
</style>

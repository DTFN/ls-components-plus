<script setup lang="ts" name="LSChart">
/**
 * @summary 图表组件 - 基于 ECharts 的数据可视化
 *
 * 这是自研库的标准图表组件，基于 ECharts 实现，支持多种图表类型：
 * 折线图、柱状图、饼图、仪表盘、热力图等。提供模板化配置和自定义配置两种方式。
 *
 * @attr {string} template - 图表模板名称
 * @attr {any} data - 图表数据
 * @attr {any} customOption - 自定义图表配置
 * @attr {any} templatePatch - 模板补丁配置
 * @attr {number|string} width - 图表宽度
 * @attr {number|string} height - 图表高度
 *
 * @slot default - 默认插槽，自定义图表内容
 *
 * @event 无
 *
 * @csspart chart - 图表容器
 *
 * @example
 * <!-- 使用模板 -->
 * <LSChart template="line" :data="chartData" />
 *
 * @example
 * <!-- 自定义配置 -->
 * <LSChart :customOption="customChartOption" />
 *
 * @example
 * <!-- 自定义尺寸 -->
 * <LSChart template="bar" :data="chartData" :width="800" :height="400" />
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

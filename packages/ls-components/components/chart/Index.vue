<script setup lang="ts" name="LSChart">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import * as echarts from 'echarts/core';
import { LineChart, PieChart, BarChart, GaugeChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, LegendComponent, ToolboxComponent, DataZoomComponent } from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { lsChartProps } from './types';
import config from './config';

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
  GaugeChart
]);

const ns = useNamespace('chart');
const comClass: string = ns.b();

const props = defineProps(lsChartProps);

const lsChartRef = ref();
const echartObj: Ref<any> = ref();
const chartOption: Ref<any> = ref({});

const chartStyle = computed(() => {
  let style: any = {};
  if (props.width) {
    style['width'] = `${props.width}${typeof props.width === 'number' ? 'px' : ''}`;
  }
  if (props.height) {
    style['height'] = `${props.height}${typeof props.height === 'number' ? 'px' : ''}`;
  }
  return style;
});

watch(
  () => [props.template, props.data, props.customOption, props.templatePatch],
  () => {
    setChartOption();
  },
  {
    immediate: true,
    deep: true
  }
);

function setChartOption() {
  if (props.template) {
    chartOption.value = config.templateOption({
      template: props.template,
      data: props.data,
      templatePatch: props.templatePatch,
      customOption: props.customOption
    });
  } else {
    chartOption.value = props.customOption;
  }
  if (echartObj.value) {
    echartObj.value.setOption(chartOption.value);
  }
}

function initChart() {
  if ((window as any).process.browser) {
    echartObj.value && echartObj.value.dispose();
    echartObj.value = markRaw(echarts.init(lsChartRef.value));
    window.removeEventListener('resize', resizeChart);
    window.addEventListener('resize', resizeChart);
  }
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
:deep() .ls-bar-tooltip-wrap {
  position: relative;
  box-sizing: border-box;
  min-width: 120px;
  .name {
    margin-bottom: 2px;
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    color: $color-text1;
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
  .serise-name,
  .value {
    font-size: 12px;
    line-height: 20px;
    color: $color-text2;
  }
  .value {
    font-weight: bold;
  }
  .serise-wrap {
    display: fle x;
    align-items: center;
    .content-badge {
      width: 12px;
      height: 10px;
      margin-right: 4px;
    }
  }
  &.dark {
    .name,
    .serise-name,
    .value {
      color: $color-light;
    }
  }
}
</style>

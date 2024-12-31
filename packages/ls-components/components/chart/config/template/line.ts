import { formatChartAxis, numberFixed } from '@cpo/_utils/utils';
import {
  BAR_COLOR_MAP,
  BG_COLOR_MAP,
  FONT_COLOR_MAP,
  DEF_THEME,
  // DATA_ZOOM_COLOR,
  TOOLTIP_COLOR_MAP,
  BG_BAR_COLOR_MAP,
  SPLIT_LINE_COLOR
} from '../base';
import { ChartDataType, ChartTemplatePatchType } from '@cpo/_types';
import { ChartMapDataType } from '@cpo/chart/types';

const setTooltipFormat = (data: any, legend: boolean, legendIcon: string | undefined, i: number, defBarColor: Array<string>) => {
  const { name, seriesName, value, color } = data;
  const nameHtml = i == 0 ? `<div class="name">${name}</div>` : '';
  const seriesHtml =
    legend && value !== '-' && seriesName !== 'temp' ? `<span class="serise-name">${legend ? seriesName : ''}</span>` : '';
  const valueHtml = value !== '-' && seriesName !== 'temp' ? `<span class="value">${value || '-'}</span>` : '';
  const badgeHtml =
    value !== '-' && seriesName !== 'temp'
      ? `<div class="content-badge ${legendIcon}" style="background-color: ${typeof color === 'string' ? color : defBarColor};"></div>`
      : '';
  return ` ${nameHtml} <div class="content"> <div class="serise-wrap"> ${badgeHtml} ${seriesHtml} </div> ${valueHtml} </div> `;
};

const setTooltip = (templatePatch: ChartTemplatePatchType) => {
  let { legend, legendIcon, tooltip = 'shadow', theme, tooltipFormatter, barColorList } = templatePatch;
  const defBarColor = barColorList || BAR_COLOR_MAP[theme || DEF_THEME][0];
  tooltipFormatter = tooltipFormatter
    ? tooltipFormatter
    : function (params: any) {
        let formatterHtml = `<div class="ls-bar-tooltip-wrap ${theme}">`;
        params.forEach((item: any, i: number) => {
          formatterHtml += setTooltipFormat(item, Boolean(legend), legendIcon, i, defBarColor);
        });
        return formatterHtml + '</div>';
      };
  return tooltip
    ? {
        trigger: 'axis',
        axisPointer: {
          type: tooltip,
          z: 1,
          label: {
            color: TOOLTIP_COLOR_MAP[theme || DEF_THEME]['color']
          }
        },
        textStyle: {
          color: FONT_COLOR_MAP[theme || DEF_THEME]
        },
        padding: 12,
        backgroundColor: TOOLTIP_COLOR_MAP[theme || DEF_THEME]['bgColor'],
        extraCssText: `box-shadow: ${TOOLTIP_COLOR_MAP[theme || DEF_THEME]['shadowColor']};`,
        formatter: tooltipFormatter
      }
    : null;
};

const setLegend = (templatePatch: ChartTemplatePatchType) => {
  const { legend, legendIcon = 'rect', theme } = templatePatch;
  return {
    type: 'scroll',
    data: legend || [],
    icon: legendIcon,
    itemWidth: 12,
    itemHeight: 10,
    textStyle: {
      color: FONT_COLOR_MAP[theme || DEF_THEME],
      fontSize: 12,
      height: 10,
      rich: {
        a: {
          verticalAlign: 'middle'
        }
      }
    }
  };
};

const setGrid = (templatePatch: ChartTemplatePatchType) => {
  const { dataZoom } = templatePatch;
  const params: any = {
    left: '3%',
    right: '3%',
    top: '12%',
    bottom: '3%',
    containLabel: true
  };
  if (dataZoom === 'vertical') {
    delete params['right'];
  }
  if (dataZoom === 'horizontal') {
    delete params['bottom'];
  }
  return params;
};

const setAxis = (data: ChartDataType, templatePatch: ChartTemplatePatchType, axisType: string) => {
  const { axisData, seriesData } = data as ChartMapDataType;
  const { axis = 'x', theme, lineBar, dynamicAxis, type } = templatePatch;
  let params: any = [
    {
      type: axis == axisType ? 'category' : 'value',
      axisTick: {
        show: false
      },
      axisLine: {
        show: axis == axisType,
        lineStyle: {
          width: 1,
          color: FONT_COLOR_MAP[theme || DEF_THEME]
        }
      },
      axisLabel: {
        margin: 18
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: SPLIT_LINE_COLOR[theme || DEF_THEME]
        }
      },
      data: axis == axisType ? axisData : []
    }
  ];
  if (axis !== axisType) {
    if (lineBar) {
      params =
        axis == 'x'
          ? [
              {
                type: 'value',
                splitLine: {
                  show: false,
                  lineStyle: {
                    color: SPLIT_LINE_COLOR[theme || DEF_THEME]
                  }
                }
              },
              {
                type: 'value',
                splitLine: {
                  lineStyle: {
                    color: SPLIT_LINE_COLOR[theme || DEF_THEME],
                    type: 'dashed',
                    width: 2,
                    dashOffset: 2
                  }
                }
              }
            ]
          : [
              {
                type: 'value'
              }
            ];
    }
    if (dynamicAxis) {
      let mathData: any = [];
      if (type === 'multiple' && (!lineBar || (axis == 'y' && lineBar))) {
        mathData = (seriesData || []).reduce((acc: any, item: any) => acc.concat(item.data), []);
      }
      params.map((item: any, i: number) => {
        if (type === 'multiple') {
          if (lineBar && axis == 'x') {
            mathData = ((seriesData || [])[i]?.data || []).map((item: any) => numberFixed(item));
          }
        } else {
          mathData = (seriesData || []).map((item: any) => numberFixed(item));
        }
        mathData = mathData.filter((item: number) => item > 0);
        const max = Math.max(...mathData);
        const min = Math.min(...mathData);
        const { aInterval, aMax, aMin } = formatChartAxis(max, min);
        item.min = aMin;
        item.max = aMax;
        item.interval = aInterval;
        return item;
      });
    }
  }
  return params;
};

const setDataZoom = (templatePatch: ChartTemplatePatchType) => {
  const { dataZoom, dataZoomColorOut, dataZoomColorIn, theme } = templatePatch;
  return dataZoom
    ? [
        {
          show: true,
          start: 0,
          end: 100,
          orient: dataZoom,
          showDataShadow: true,
          dataBackground: {
            // lineStyle: {
            //   color: 'transparent'
            // },
            areaStyle: {
              color: dataZoomColorIn || '#d2dbee'
            }
          },
          fillerColor: dataZoomColorOut || 'rgba(207, 223, 243, 0.25)',
          // moveHandleStyle: {
          //   opacity: 0
          // },
          // borderColor: null,
          textStyle: {
            color: FONT_COLOR_MAP[theme || DEF_THEME]
          }
        },
        {
          type: 'inside',
          start: 0,
          end: 100,
          orient: dataZoom
        },
        {
          show: false,
          filterMode: 'empty',
          right: 0,
          showDataShadow: true
        }
      ]
    : null;
};

const setSeries = (data: ChartMapDataType, templatePatch: ChartTemplatePatchType) => {
  const { seriesData } = data;
  const {
    type = 'simple',
    showBarFont = true,
    labelPosition = 'inside',
    smooth = true,
    areaStyle = undefined,
    showBackground,
    theme,
    name,
    lineBar,
    axis,
    symbol = 'circle'
  } = templatePatch;
  if (type === 'multiple') {
    return (seriesData || []).map((item: any, i: number) => {
      const params: any = {
        name: item.name,
        type: item.type,
        symbol,
        emphasis: item.emphasis || {
          focus: 'series'
        },
        smooth,
        areaStyle: areaStyle ? areaStyle : null,
        label: {
          show: showBarFont,
          position: labelPosition
        },
        showBackground: showBackground,
        backgroundStyle: {
          color: BG_BAR_COLOR_MAP[theme || DEF_THEME]
        },
        itemStyle: item.itemStyle || {},
        data: item.data || []
      };
      if (lineBar) {
        if (axis !== 'y' && i === 1) {
          params.yAxisIndex = i;
        } else {
          if (params.yAxisIndex) {
            delete params.yAxisIndex;
          }
        }
      }
      return params;
    });
  } else {
    return [
      {
        name,
        label: {
          show: showBarFont,
          position: labelPosition
        },
        showBackground: showBackground,
        backgroundStyle: {
          color: BG_BAR_COLOR_MAP[theme || DEF_THEME]
        },
        data: seriesData || [],
        smooth,
        symbol,
        // 设置填充透明度
        areaStyle: areaStyle ? areaStyle : null,
        type: 'line'
      }
    ];
  }
};

const setOption = (data: ChartDataType, templatePatch: ChartTemplatePatchType) => {
  const { theme, barColorList } = templatePatch;
  const option: any = {
    textStyle: {},
    backgroundColor: BG_COLOR_MAP[theme || DEF_THEME],
    color: barColorList || BAR_COLOR_MAP[theme || DEF_THEME],
    legend: setLegend(templatePatch),
    grid: setGrid(templatePatch),
    xAxis: setAxis(data, templatePatch, 'x'),
    yAxis: setAxis(data, templatePatch, 'y'),
    series: setSeries(data as ChartMapDataType, templatePatch),
    dataZoom: setDataZoom(templatePatch)
  };
  const tooltip = setTooltip(templatePatch);
  if (tooltip) {
    option.tooltip = tooltip;
  }
  return option;
};

// 处理数据方法
export function dealOption(data = {}, templatePatch = {}) {
  return setOption(data, templatePatch);
}

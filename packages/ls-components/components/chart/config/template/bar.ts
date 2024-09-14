import {
  BAR_COLOR_MAP,
  BG_COLOR_MAP,
  FONT_COLOR_MAP,
  SPLIT_LINE_COLOR,
  DEF_THEME,
  DATA_ZOOM_COLOR,
  LABEL_POSITION_MAP,
  BG_BAR_COLOR_MAP,
  TOOLTIP_COLOR_MAP
} from '../base';

const setTooltipFormat = (data: any, legend: any, i: any, defBarColor: any) => {
  const { name, seriesName, value, color } = data;
  const nameHtml = i == 0 ? `<div class="name">${name}</div>` : '';
  const seriesHtml =
    legend && value !== '-' && seriesName !== 'temp' ? `<span class="serise-name">${legend ? seriesName : ''}</span>` : '';
  const valueHtml = value !== '-' && seriesName !== 'temp' ? `<span class="value">${value}</span>` : '';
  const badgeHtml =
    value !== '-' && seriesName !== 'temp'
      ? `<div class="content-badge" style="background-color: ${typeof color === 'string' ? color : defBarColor};"></div>`
      : '';
  return ` ${nameHtml} <div class="content"> <div class="serise-wrap"> ${badgeHtml} ${seriesHtml} </div> ${valueHtml} </div> `;
};

const setTooltip = (templatePatch: any) => {
  let { legend, tooltip = 'shadow', theme = 'default', tooltipFormatter, barColorList } = templatePatch;
  const defBarColor = barColorList || BAR_COLOR_MAP[theme || DEF_THEME][0];
  tooltipFormatter = tooltipFormatter
    ? tooltipFormatter
    : function (params: any) {
        let formatterHtml = `<div class="ls-bar-tooltip-wrap ${theme}">`;
        params.forEach((item: any, i: any) => {
          formatterHtml += setTooltipFormat(item, legend, i, defBarColor);
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

const setLegend = (templatePatch: any) => {
  const { legend, theme } = templatePatch;
  return {
    type: 'scroll',
    data: legend || [],
    icon: 'rect',
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

const setGrid = (templatePatch: any) => {
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

const setAxis = (data: any, templatePatch: any, axisType: any) => {
  const { axisData } = data;
  const { axis = 'x', theme } = templatePatch;
  const params: any = {
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
    }
  };
  axis == axisType && (params.data = axisData);
  return [params];
};

const setDataZoom = (templatePatch: any) => {
  const { dataZoom, theme } = templatePatch;
  return dataZoom
    ? [
        {
          show: true,
          start: 0,
          end: 100,
          orient: dataZoom,
          showDataShadow: true,
          dataBackground: {
            areaStyle: {
              color: DATA_ZOOM_COLOR[theme || DEF_THEME][0]
            }
          },
          fillerColor: DATA_ZOOM_COLOR[theme || DEF_THEME][1],
          borderColor: null,
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
          yAxisIndex: 0,
          filterMode: 'empty',
          right: 0,
          showDataShadow: true
        }
      ]
    : null;
};

const getPos = (axis: any, labelPosition: any, status: any) => {
  const direction = axis === 'x' ? 'top' : 'left';
  let pos = 'inside';
  if (status) {
    pos = LABEL_POSITION_MAP[labelPosition][direction];
  } else {
    pos = LABEL_POSITION_MAP[labelPosition][`-${direction}`];
  }
  return pos;
};

const setSeriesOption = (templatePatch: any, item: any, index: any) => {
  const { type = 'simple', showBarFont = true, labelPosition = 'inside', axis = 'x', showBackground, theme } = templatePatch;
  const option: any = {
    type: 'bar',
    name: item.name,
    label: {
      show: showBarFont,
      position: labelPosition,
      formatter: function (params: any) {
        const val = params.value;
        if (val !== 0) {
          return val;
        } else {
          return '';
        }
      }
    },
    showBackground: showBackground,
    backgroundStyle: {
      color: BG_BAR_COLOR_MAP[theme || DEF_THEME]
    },
    data: item.data || [],
    barCategoryGap: '30%',
    barWidth: type === 'multiBar' ? 'auto' : '40%',
    barGap: '4%'
  };
  if (['negative', 'categoryStack', 'waterfall'].includes(type)) {
    option.stack = 'total';
    if (type === 'negative' && ['both', 'insideBoth'].includes(labelPosition)) {
      option.label.position = getPos(axis, labelPosition, (item.data || []).reduce((p: any, n: any) => p + n) > 0);
    } else if (type === 'categoryStack') {
      index > 0 &&
        (option.itemStyle = {
          borderColor: BG_COLOR_MAP[theme || DEF_THEME],
          borderWidth: 2
        });
    }
  }
  if (type === 'waterfall') {
    option.itemStyle =
      index == 0
        ? {
            borderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        : null;
    option.emphasis =
      index == 0
        ? {
            itemStyle: {
              borderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            }
          }
        : null;
    option.label = item.label || {
      show: index > 0 && showBarFont,
      position: labelPosition,
      formatter: function (params: any) {
        const val = params.value;
        if (val !== 0) {
          return val;
        } else {
          return '';
        }
      }
    };
    if (['both', 'insideBoth'].includes(labelPosition)) {
      option.label.position = getPos(axis, labelPosition, index === 1);
    }
  }
  return option;
};

const setSeries = (data: any, templatePatch: any) => {
  const { seriesData } = data;
  const { type = 'simple', legend = [] } = templatePatch;
  return (type == 'simple' ? [{ name: legend[0], data: seriesData }] : seriesData || []).map((item: any, i: any) => {
    return setSeriesOption(templatePatch, item, i);
  });
};

const setOption = (data: any, templatePatch: any) => {
  const { theme, barColorList } = templatePatch;
  const option: any = {
    textStyle: {},
    backgroundColor: BG_COLOR_MAP[theme || DEF_THEME],
    color: barColorList || BAR_COLOR_MAP[theme || DEF_THEME],
    legend: setLegend(templatePatch),
    grid: setGrid(templatePatch),
    xAxis: setAxis(data, templatePatch, 'x'),
    yAxis: setAxis(data, templatePatch, 'y'),
    series: setSeries(data, templatePatch),
    dataZoom: setDataZoom(templatePatch)
  };

  const tooltip = setTooltip(templatePatch);
  if (tooltip) {
    option.tooltip = tooltip;
  }
  return option;
};

export function dealOption(data = {}, templatePatch = {}) {
  return setOption(data, templatePatch);
}

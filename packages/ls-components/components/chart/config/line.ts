import {
  BAR_COLOR_MAP,
  BG_COLOR_MAP,
  FONT_COLOR_MAP,
  DEF_THEME,
  DATA_ZOOM_COLOR,
  TOOLTIP_COLOR_MAP,
  BG_BAR_COLOR_MAP
} from './base';

const setTooltipFormat = (data: any, legend: any, i: any, defBarColor: any) => {
  const { name, seriesName, value, color } = data;
  const nameHtml = i == 0 ? `<div class="name">${name}</div>` : '';
  const seriesHtml =
    legend && value && value !== '-' && seriesName !== '辅助'
      ? `<span class="serise-name">${legend ? seriesName : ''}</span>`
      : '';
  const valueHtml = value && value !== '-' && seriesName !== '辅助' ? `<span class="value">${value}</span>` : '';
  const badgeHtml =
    value && value !== '-'
      ? `<div class="content-badge" style="background-color: ${typeof color === 'string' ? color : defBarColor};"></div>`
      : '';
  return ` ${nameHtml} <div class="content"> <div class="serise-wrap"> ${badgeHtml} ${seriesHtml} </div> ${valueHtml} </div> `;
};

const setTooltip = (templatePatch: any) => {
  let { legend, tooltip = 'shadow', theme, tooltipFormatter, barColorList } = templatePatch;
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
          z: 1
        },
        textStyle: {
          color: FONT_COLOR_MAP[theme || DEF_THEME]
        },
        padding: 12,
        backgroundColor: TOOLTIP_COLOR_MAP[theme || DEF_THEME]['bgColor'],
        extraCssText: TOOLTIP_COLOR_MAP[theme || DEF_THEME]['shadowColor'],
        formatter: tooltipFormatter
      }
    : null;
};

const setLegend = (templatePatch: any) => {
  const { legend, theme } = templatePatch;
  return {
    data: legend || [],
    icon: 'rect',
    itemWidth: 12,
    itemHeight: 10,
    textStyle: {
      color: FONT_COLOR_MAP[theme || DEF_THEME],
      padding: [3, 0, 0, 0]
    }
  };
};

const setGrid = (templatePatch: any) => {
  const { dataZoom } = templatePatch;
  const params: any = {
    left: '2%',
    right: '2%',
    bottom: '2%',
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
  const { axis = 'x' } = templatePatch;
  const params: any = {
    type: axis == axisType ? 'category' : 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    }
  };
  axis == axisType && (params.data = axisData);
  console.log(params, 'templatePatch');
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

const setSeries = (data: any, templatePatch: any) => {
  const { seriesData } = data;
  const {
    type = 'simple',
    showBarFont = true,
    labelPosition = 'inside',
    smooth = false,
    areaStyle = undefined,
    showBackground,
    theme,
    name
  } = templatePatch;
  if (type === 'multiple') {
    return (seriesData || []).map((item: any) => {
      return {
        name: item.name,
        type: item.type,
        smooth,
        areaStyle: areaStyle ? { ...areaStyle, opacity: 0.2 } : undefined,
        label: {
          show: showBarFont,
          position: labelPosition
        },
        showBackground: showBackground,
        backgroundStyle: {
          color: BG_BAR_COLOR_MAP[theme || DEF_THEME]
        },
        data: item.data || []
      };
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
        // 设置填充透明度
        areaStyle: areaStyle ? { ...areaStyle, opacity: 0.2 } : undefined,
        type: 'line'
      }
    ];
  }
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

// 处理数据方法
function dealOption(data = {}, templatePatch = {}) {
  return setOption(data, templatePatch);
}

export default {
  dealConfig: dealOption
};

/**
 * 饼图模板配置生成器。
 *
 * 支持普通饼图、环形饼图、南丁格尔图与嵌套环形图，常用数据结构为
 * `{ seriesData, innerData? }`，并结合 `templatePatch` 中的 `radius`、`roseType`、
 * `legend*`、`label*`、`innerRadius`、`selectedMode` 等字段生成 ECharts option。
 */
import type { ChartDataType, ChartTemplatePatchType } from '@cpo/_types'
import { BG_COLOR_MAP, DEF_THEME, FONT_COLOR_MAP, SPLIT_LINE_COLOR } from '../base'

/**
 * 构建饼图 tooltip 配置。
 * @param options tooltip 相关配置，如 `showTooltip`、`tooltipTrigger`、`tooltipFormatter`
 */
function setTooltip({ showTooltip: show = true, tooltipTrigger: trigger = 'item', tooltipFormatter: formatter }: any) {
  return {
    show,
    trigger,
    formatter,
  }
}

/**
 * 构建饼图 legend 配置。
 * @param options legend 相关配置，如 `legendType`、`legendShow`、`legendOrient`、`legendLeft`、`legendTop`
 */
function setLegend({
  legendType: type = 'plain',
  legendShow: show = true,
  legendOrient: orient = 'horizontal',
  legendLeft: left = 'center',
  legendRight: right = 'auto',
  legendTop: top = 'auto',
  legendBottom: bottom = 'auto',
  legendTextColor: color = '#2C2C2C',
  legendIcon = 'rect',
}) {
  return {
    type,
    show,
    orient,
    left,
    right,
    top,
    bottom,
    icon: legendIcon,
    itemGap: 20,
    itemWidth: 14,
    itemHeight: 10,
    textStyle: {
      color,
      fontSize: 14,
    },
  }
}

/**
 * 构建饼图 series 配置。
 *
 * 外层数据读取 `seriesData`，内层环形数据读取 `innerData`；支持普通饼图、环形饼图、
 * 南丁格尔图以及嵌套环形图等场景。
 *
 * @param data 饼图数据对象
 * @param options 饼图补充配置，如 `color`、`radius`、`roseType`、`labelShow`、`innerRadius`、`selectedMode`
 */
function setSeries({ seriesData = [], innerData = [] }, {
  color = [],
  radius = [0, '60%'],
  roseType = false,
  percentPrecision = 2,
  lineShow = true,
  lineColor = 'rgba(0, 0, 0, 0.2)',
  length = 40,
  length2 = 30,
  labelShow = true,
  labelColor = '#2C2C2C',
  labelShowPercent = true,
  labelShowItem = true,
  labelFormatter = '',
  innerRadius = [0, '30%'],
  innerLabelColor = '#ffffff',
  selectedMode = '',
}) {
  let data1: any = []

  if (seriesData && seriesData.length) {
    seriesData.forEach((item: any, index: any) => {
      const { value = '', name = '', color: itemColor = '' } = item || {}
      data1.push({
        value,
        name,
        itemStyle: {
          [itemColor && 'color']: itemColor,
        },
        label: {
          rich: {
            b: {
              width: 14,
              height: 10,
              backgroundColor: itemColor || color[index],
              verticalAlign: 'middle',
            },
          },
        },
      })
    })
  }

  let innerSeries = null

  if (innerData && innerData.length) {
    let data2: any = []
    innerData.forEach((item: any) => {
      const { value = '', name = '', color: itemColor = '' } = item || {}
      data2.push({
        value,
        name,
        itemStyle: {
          [itemColor && 'color']: itemColor,
        },
      })
    })
    innerSeries = {
      type: 'pie',
      radius: innerRadius,
      label: {
        color: innerLabelColor,
        fontSize: 12,
        position: 'inner',
      },
      labelLine: {
        show: false,
      },
      data: data2,
    }
  }

  let otherSeries = [innerSeries]

  return [
    {
      type: 'pie',
      data: data1,
      selectedMode,
      radius,
      roseType,
      percentPrecision,
      label: {
        show: labelShow,
        color: labelColor,
        fontSize: 14,
        lineHeight: 20,
        formatter:
          labelFormatter
          || ((params: any) => {
            const { name, percent, value } = params || {}

            return `${labelShowItem ? '{b|}' : ''}  ${name}：${labelShowPercent ? `${percent}%` : value}`
          }),
      },
      labelLine: {
        show: lineShow,
        length,
        length2,
        lineStyle: {
          color: lineColor,
        },
      },
    },
    ...otherSeries,
  ]
}

/**
 * 配置饼图
 * tooltip 提示框组件
 * legend 图例组件
 * series 饼图
 * @returns
 */
function setOption(data: any, {
  color = ['#2285FF', '#FF7D00', '#00CDDC', '#FB466C', '#FFC917', '#8CEAFF', '#A16FFD', '#FD8BFF'],
  theme = DEF_THEME,
  showTooltip,
  tooltipTrigger,
  tooltipFormatter,
  legendType,
  legendShow,
  legendOrient,
  legendLeft,
  legendRight,
  legendTop,
  legendBottom,
  legendTextColor,
  radius,
  roseType,
  percentPrecision,
  lineShow,
  lineColor,
  length,
  length2,
  labelShow,
  labelColor,
  labelShowPercent,
  labelShowItem,
  labelFormatter,
  innerRadius,
  innerLabelColor,
}: any = {}) {
  labelColor = legendTextColor = FONT_COLOR_MAP[theme || DEF_THEME]
  lineColor = SPLIT_LINE_COLOR[theme || DEF_THEME]

  const option: any = {
    tooltip: setTooltip({
      showTooltip,
      tooltipTrigger,
      tooltipFormatter,
    }),
    legend: setLegend({
      legendType,
      legendShow,
      legendOrient,
      legendLeft,
      legendRight,
      legendTop,
      legendBottom,
      legendTextColor,
    }),
    series: setSeries(data, {
      color,
      radius,
      roseType,
      percentPrecision,
      lineShow,
      lineColor,
      length,
      length2,
      labelShow,
      labelColor,
      labelShowPercent,
      labelShowItem,
      labelFormatter,
      innerRadius,
      innerLabelColor,
    }),
  }
  option.color = color
  option.backgroundColor = BG_COLOR_MAP[theme || DEF_THEME]

  return option
}

export const dealOption = (data: ChartDataType, templatePatch: ChartTemplatePatchType) => setOption(data, templatePatch)

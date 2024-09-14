import { BG_COLOR_MAP, DEF_THEME, FONT_COLOR_MAP, SPLIT_LINE_COLOR } from '../base';

/**
 * 提示框组件
 * @param {showTooltip} 是否显示提示框组件
 * @param {tooltipTrigger} 触发类型  item 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用 axis 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用 none 不触发
 * @param {tooltipFormatter} 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
 * @returns
 */
const setTooltip = ({ showTooltip: show = true, tooltipTrigger: trigger = 'item', tooltipFormatter: formatter }: any) => {
  return {
    show,
    trigger,
    formatter
  };
};

/**
 * 图例组件
 * 图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示
 * @param {legendType} 图例的类型 plain:普通图例。缺省就是普通图例 scroll:可滚动翻页的图例。当图例数量较多时可以使用
 * @param {legendShow} 是否显示图例
 * @param {legendOrient} 图例列表的布局朝向 horizontal(水平) vertical(垂直)
 * @param {legendLeft} 图例组件离容器左侧的距离 left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'
 * @param {legendRight} 图例组件离容器右侧的距离 right 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比 默认自适应
 * @param {legendTop} 图例组件离容器上侧的距离 top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
 * @param {legendBottom} 图例组件离容器下侧的距离  bottom 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比 默认自适应
 * @param {legendTextColor} 图例组件文字颜色
 * @returns
 */
const setLegend = ({
  legendType: type = 'plain',
  legendShow: show = true,
  legendOrient: orient = 'horizontal',
  legendLeft: left = 'center',
  legendRight: right = 'auto',
  legendTop: top = 'auto',
  legendBottom: bottom = 'auto',
  legendTextColor: color = '#2C2C2C'
}) => {
  return {
    type,
    show,
    orient,
    left,
    right,
    top,
    bottom,
    icon: 'rect',
    itemGap: 20,
    itemWidth: 14,
    itemHeight: 10,
    textStyle: {
      color,
      fontSize: 14
    }
  };
};

/**
 * 饼图
 * 饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例
 * @param {color} 调色盘颜色列表。如果系列没有设置颜色，则会依次循环从该列表中取颜色作为系列颜色 RGB RGBA 十六进制格式
 * @param {radius} 饼图的半径 number：直接指定外半径值 string：例如，'20%' Array.<number|string>：数组的第一项是内半径，第二项是外半径。每一项遵从上述 number string 的描述
 * @param {roseType} 是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：'radius' 扇区圆心角展现数据的百分比，半径展现数据的大小 'area' 所有扇区圆心角相同，仅通过半径展现数据大小
 * @param {percentPrecision } 饼图百分比数值的精度，默认保留小数点后两位
 * @param {lineShow } 是否显示标签的视觉引导线
 * @param {lineColor} 标签的视觉引导线的颜色
 * @param {length} 视觉引导线第一段的长度
 * @param {length2} 视觉引导项第二段的长度
 * @param {labelShow} 是否显示饼图图形上的文本标签
 * @param {labelColor} 标签文字的颜色
 * @param {labelShowPercent} 是否在标签内容上显示百分比
 * @param {labelShowItem} 是否在标签内容上的颜色图例
 * @param {labelFormatter} 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
 * @param {innerRadius} 嵌套环形内饼图的半径
 * @param {innerLabelColor} 嵌套环形内饼图标签文字的颜色
 * @returnsc
 */
const setSeries = (
  { seriesData = [], innerData = [] },
  {
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
    innerLabelColor = '#ffffff'
  }
) => {
  let data1: any = [];
  if (seriesData && seriesData.length) {
    seriesData.forEach((item: any, index: any) => {
      const { value = '', name = '', color: itemColor = '' } = item || {};
      data1.push({
        value,
        name,
        itemStyle: {
          [itemColor && 'color']: itemColor
        },
        label: {
          rich: {
            b: {
              width: 14,
              height: 10,
              backgroundColor: itemColor || color[index],
              verticalAlign: 'middle'
            }
          }
        }
      });
    });
  }

  let innerSeries = null;
  if (innerData && innerData.length) {
    let data2: any = [];
    innerData.forEach((item: any) => {
      const { value = '', name = '', color: itemColor = '' } = item || {};
      data2.push({
        value,
        name,
        itemStyle: {
          [itemColor && 'color']: itemColor
        }
      });
    });
    innerSeries = {
      type: 'pie',
      radius: innerRadius,
      label: {
        color: innerLabelColor,
        fontSize: 12,
        position: 'inner'
      },
      labelLine: {
        show: false
      },
      data: data2
    };
  }

  let otherSeries = [innerSeries];

  return [
    {
      type: 'pie',
      data: data1,
      radius,
      roseType,
      percentPrecision,
      label: {
        show: labelShow,
        color: labelColor,
        fontSize: 14,
        lineHeight: 20,
        formatter:
          labelFormatter ||
          ((params: any) => {
            const { name, percent, value } = params || {};
            return `${labelShowItem ? '{b|}' : ''}  ${name}：${labelShowPercent ? percent + '%' : value}`;
          })
      },
      labelLine: {
        show: lineShow,
        length,
        length2,
        lineStyle: {
          color: lineColor
        }
      }
    },
    ...otherSeries
  ];
};

/**
 * 配置饼图
 * tooltip 提示框组件
 * legend 图例组件
 * series 饼图
 * @returns
 */
const setOption = (
  data: any,
  {
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
    innerLabelColor
  }: any = {}
) => {
  labelColor = legendTextColor = FONT_COLOR_MAP[theme || DEF_THEME];
  lineColor = SPLIT_LINE_COLOR[theme || DEF_THEME];

  const option: any = {
    tooltip: setTooltip({
      showTooltip,
      tooltipTrigger,
      tooltipFormatter
    }),
    legend: setLegend({
      legendType,
      legendShow,
      legendOrient,
      legendLeft,
      legendRight,
      legendTop,
      legendBottom,
      legendTextColor
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
      innerLabelColor
    })
  };
  option.color = color;
  option.backgroundColor = BG_COLOR_MAP[theme || DEF_THEME];
  return option;
};

export const dealOption = (data: any, templatePatch: any) => setOption(data, templatePatch);

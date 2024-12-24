var a = Object.defineProperty;
var t = (e, p) => a(e, "name", { value: p, configurable: !0 });
import { buildProps as d } from "../../_utils/runtime/index.js";
const l = d({
  template: {
    type: String,
    default: ""
  },
  width: {
    type: [Number, String],
    default: void 0
  },
  height: {
    type: [Number, String],
    default: void 0
  },
  /**
   * 模板参数补充
   * ++++++++++++++++++柱状图参数+++++++++++++++++++
   * 固定模板 simple / multiBar / negative / waterfall / categoryStack / gradient 默认simple
   * type: String
   * 数据显示方式 x / y 默认x
   * axis：String
   * 鼠标移入是否显示提示 line / shadow / cross / none 默认shadow
   * tooltip: String
   * 自定义提示数据样式
   * tooltipFormatter: Function
   * 标志内容
   * legend: Array
   * 主题 default 默认 default
   * theme: String
   * 自定义柱状色值 默认default主题
   * barColorList: Array
   * 是否支持鼠标缩放 horizontal / vertical 对应 axis
   * dataZoom: String
   * 是否显示柱状数据值 true / false 默认true
   * showBarFont: Boolean
   * 柱状数据值显示位置，showBarFont为true时有效 top / left / right / bottom / inside / insideLeft / insideRight / insideTop / insideBottom / insideTopLeft / insideBottomLeft / insideTopRight / insideBottomRight 默认inside
   * labelPosition: String
   * ++++++++++++++++++柱状图参数++++++++++++++++++
   *
   * ++++++++++++++++++折现图参数++++++++++++++++++
   * 是否支持折线柱状图 true / false 默认false
   * lineBar: Boolean
   * 是否支持动态轴线 true / false 默认false
   * dynamicAxis: Boolean
   */
  templatePatch: {
    type: Object,
    default: /* @__PURE__ */ t(() => {
    }, "default")
  },
  /**
   * 数据
   * pie: []
   *
   * ***************柱状图参数*******************
   * 坐标轴的数据
   * axisData: Array
   * 内容区域数据
   * seriesData: Array
   * ***************柱状图参数*******************
   */
  data: {
    type: Object,
    default: /* @__PURE__ */ t(() => {
    }, "default")
  },
  // 自定义配置（优先级别高于模板配置数据）
  customOption: {
    type: Object,
    default: /* @__PURE__ */ t(() => {
    }, "default")
  }
});
export {
  l as lsChartProps
};

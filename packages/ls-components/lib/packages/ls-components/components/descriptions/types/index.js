var r = Object.defineProperty;
var e = (l, t) => r(l, "name", { value: t, configurable: !0 });
import { buildProps as o } from "../../_utils/runtime/index.js";
const f = o({
  // label字体颜色
  labelColor: {
    type: String,
    default: ""
  },
  // label展示区域背景色
  labelBgColor: {
    type: String,
    default: "#e2edff"
  },
  /**
   * 数据
   *  type: 默认文本， date：时间， select：单复选， slot：自定义例如table
   *        icon：label前面展示icon图标
   *            iconType：默认el-icon，iconSize:大小，iconColor:颜色 ； 2：iconify， iconColor:颜色 iconWidth：宽，iconHeight：高
   */
  list: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  }
});
export {
  f as lsDescProp
};

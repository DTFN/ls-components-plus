var o = Object.defineProperty;
var t = (r, e) => o(r, "name", { value: e, configurable: !0 });
import { buildProps as i } from "../../_utils/runtime/index.js";
const d = i({
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "100%"
  },
  /**
   * box列表
   * slotName: 内容区域对应的插槽名称
   * boxBgColor: box背景颜色
   * arrowPos: 箭头位置 top bottom left right
   * linePos: 连线位置 top left 不填会重叠
   * lineColor: 连线颜色
   * lineLength: 连线长度
   * lineWidth: 连线宽度
   * boxPos: box位置  top bottom left right
   * boxPosVal: box距离
   */
  list: {
    type: Array,
    default: /* @__PURE__ */ t(() => [], "default")
  }
});
export {
  d as lsFlowBoxProps
};

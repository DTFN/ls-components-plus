var l = Object.defineProperty;
var e = (t, a) => l(t, "name", { value: a, configurable: !0 });
import { buildProps as d } from "../../_utils/runtime/index.js";
const n = d({
  // 是否展开
  isExpand: {
    type: Boolean,
    default: !0
  },
  // 展示最大高度
  height: {
    type: String,
    default: ""
  },
  // 默认属性结构
  dataProps: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({
      children: "children",
      label: "name",
      class: ""
    }), "default")
  },
  // 需要隐藏节点code的前缀
  hideNodePrefix: {
    type: String,
    default: "I"
  },
  // 支持全选
  isCheckAll: {
    type: Boolean,
    default: !1
  },
  // 展示方式 默认：垂直展示
  direction: {
    type: String,
    default: "v"
  },
  showCheckbox: {
    type: Boolean,
    default: !0
  },
  defaultExpandAll: {
    type: Boolean,
    default: !0
  },
  nodeKey: {
    type: String,
    default: "id"
  },
  isCheckStrictly: {
    type: Boolean,
    default: !1
  },
  treeData: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  },
  defaultCheckedKeys: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  }
}), i = ["handleCheck", "handleChekChange"];
export {
  i as emitNames,
  n as lsTreeProps
};

var r = Object.defineProperty;
var e = (t, o) => r(t, "name", { value: o, configurable: !0 });
import { buildProps as p } from "../../_utils/runtime/index.js";
const a = p({
  // 自定义面包屑内容
  defineList: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  },
  showPos: {
    type: Boolean,
    default: !0
  },
  posTitle: {
    type: String,
    default: "当前位置"
  }
});
export {
  a as lsBreadcrumbProp
};

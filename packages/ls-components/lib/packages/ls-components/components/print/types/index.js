var r = Object.defineProperty;
var t = (e, n) => r(e, "name", { value: n, configurable: !0 });
import { buildProps as o } from "../../_utils/runtime/index.js";
const l = o({
  printObj: {
    type: Object,
    default: /* @__PURE__ */ t(() => ({}), "default")
  },
  // 禁止使用时提示语
  content: {
    type: String,
    default: ""
  },
  // 按钮文案
  btnTxt: {
    type: String,
    default: "打印"
  },
  // 能否打印
  canPrint: {
    type: Boolean,
    default: !0
  }
});
export {
  l as lsPrintProps
};

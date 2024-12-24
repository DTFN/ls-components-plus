var r = Object.defineProperty;
var t = (o, a) => r(o, "name", { value: a, configurable: !0 });
import { buildProps as e } from "../../_utils/runtime/index.js";
const l = e({
  /**
   * 1. header+aside+main
   * 2. header+main
   * 3. aside+header+main
   */
  mode: {
    type: [String, Number],
    default: 1
  },
  headerHeight: {
    type: String,
    default: "60px"
  },
  showFooter: {
    type: Boolean,
    default: !1
  },
  footerHeight: {
    type: String,
    default: "60px"
  },
  asideWidth: {
    type: String,
    default: "200px"
  },
  showLogo: {
    type: Boolean,
    default: !0
  },
  logo: {
    type: String,
    default: ""
  }
}), p = e({
  mode: {
    type: [String, Number],
    default: 1
  },
  title: {
    type: String,
    default: ""
  },
  showLogo: {
    type: Boolean,
    default: !0
  },
  logo: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: "60px"
  },
  showCommand: {
    type: Boolean,
    default: !0
  },
  userName: {
    type: String,
    default: "Admin"
  },
  userIcon: {
    type: String,
    default: ""
  },
  commandList: {
    type: Array,
    default: /* @__PURE__ */ t(() => [], "default")
  }
}), u = ["onCommand", "onDropdownCommand", "onDropdownCommand2"];
export {
  u as lsEmitNames,
  p as lsHeaderProp,
  l as lsLayoutProp
};

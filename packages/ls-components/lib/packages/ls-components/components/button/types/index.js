var p = Object.defineProperty;
var t = (o, e) => p(o, "name", { value: e, configurable: !0 });
import { buildProps as r } from "../../_utils/runtime/index.js";
const i = r({
  // 参考LSIcon配置
  iconConfig: {
    type: Object,
    default: /* @__PURE__ */ t(() => ({}), "default")
  }
}), l = r({
  separator: {
    type: String,
    default: ""
  },
  separatorColor: {
    type: String,
    default: "#333"
  },
  separatorSize: {
    type: [String, Number],
    default: "12"
  }
});
export {
  l as lsBtnGroupProp,
  i as lsBtnProp
};

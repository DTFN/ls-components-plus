var e = Object.defineProperty;
var o = (r, t) => e(r, "name", { value: t, configurable: !0 });
import { buildProps as s } from "../../_utils/runtime/index.js";
const i = s({
  jsonValue: {
    type: [Object, String],
    default: /* @__PURE__ */ o(() => ({}), "default")
  }
});
export {
  i as lsJsonEditorProps
};

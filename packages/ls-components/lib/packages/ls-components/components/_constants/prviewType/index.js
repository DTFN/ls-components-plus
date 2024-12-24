var a = Object.defineProperty;
var e = (o, t) => a(o, "name", { value: t, configurable: !0 });
import { buildProps as r } from "../../_utils/runtime/index.js";
const n = ["close", "switch", "update:source", "loadComplete", "loadError", "download"], u = r({
  source: {},
  zoomSize: {
    type: [Number, String],
    default: 1.5
  },
  needLoading: {
    type: Boolean,
    default: !0
  },
  loadingOption: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({
      text: "Loading",
      background: "rgba(0, 0, 0, 0.3)"
    }), "default")
  },
  hasDownload: {
    type: Boolean,
    default: !1
  },
  downloadData: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  }
});
export {
  u as lsPreviewProp,
  n as previewEmits
};

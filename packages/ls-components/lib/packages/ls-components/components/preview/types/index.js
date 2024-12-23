var n = Object.defineProperty;
var e = (o, r) => n(o, "name", { value: r, configurable: !0 });
import { buildProps as t, definePropType as l, mutable as u } from "../../_utils/runtime/index.js";
const a = ["update:source", "loadComplete", "loadError"], s = t({
  source: {
    type: [l(Array), String],
    default: /* @__PURE__ */ e(() => u([]), "default")
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: !0
  },
  hideOnClickModal: {
    type: Boolean,
    default: !1
  },
  teleported: {
    type: Boolean,
    default: !1
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  onClose: Function,
  zoomSize: {
    type: [Number, String],
    default: 1.5
  }
}), d = ["close", "switch"].concat(a), c = t({
  source: {
    type: [ArrayBuffer, String],
    default: null
  },
  onClose: Function
}), f = t({
  source: {
    type: [File, String],
    default: null
  },
  onClose: Function
}), y = {
  type: {
    type: String,
    require: !0,
    default: ""
  },
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
  }
};
export {
  c as docxProps,
  a as emitNames,
  s as imageViewerProps,
  y as lsPreviewProp,
  d as previewEmits,
  f as xlsxProps
};

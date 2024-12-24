var l = Object.defineProperty;
var e = (t, o) => l(t, "name", { value: o, configurable: !0 });
import { buildProps as a, definePropType as r, mutable as n } from "../../_utils/runtime/index.js";
const u = a({
  source: {
    type: [r(Array), String],
    default: /* @__PURE__ */ e(() => n([]), "default")
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
});
export {
  u as imageViewerProps
};

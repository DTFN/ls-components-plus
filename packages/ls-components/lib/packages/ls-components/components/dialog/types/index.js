var l = Object.defineProperty;
var e = (o, t) => l(o, "name", { value: t, configurable: !0 });
import { buildProps as a } from "../../_utils/runtime/index.js";
const p = a({
  hasFooter: {
    type: Boolean,
    default: !0
  },
  hasCancelBtn: {
    type: Boolean,
    default: !0
  },
  loading: {
    type: Boolean,
    default: !1
  },
  btnCancelConfig: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  btnConfirmConfig: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  contentLoading: {
    type: Boolean,
    default: !1
  },
  openScroll: {
    type: Boolean,
    default: !1
  }
}), r = ["onCancel", "onConfirm"];
export {
  p as lsDialogProp,
  r as lsEmitNames
};

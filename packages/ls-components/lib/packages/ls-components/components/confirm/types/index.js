var a = Object.defineProperty;
var e = (t, l) => a(t, "name", { value: l, configurable: !0 });
import { buildProps as n } from "../../_utils/runtime/index.js";
const u = n({
  title: {
    type: [String, Object],
    default: ""
  },
  type: {
    type: String,
    default: ""
  },
  message: {
    type: [String, Object, HTMLElement],
    default: ""
  },
  confirmBtnTxt: {
    type: String,
    default: "确定"
  },
  cancelBtnTxt: {
    type: String,
    default: "取消"
  },
  showCancelBtn: {
    type: Boolean,
    default: !0
  },
  showConfirmBtn: {
    type: Boolean,
    default: !0
  },
  center: {
    type: Boolean,
    default: !1
  },
  draggable: {
    type: Boolean,
    default: !1
  },
  useHtml: {
    type: Boolean,
    default: !1
  },
  showClose: {
    type: Boolean,
    default: !0
  },
  customClass: {
    type: String,
    default: ""
  },
  closeOnClickModal: {
    type: Boolean,
    default: !1
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !1
  },
  appendTo: {
    type: [String, HTMLElement],
    default: ""
  },
  requestApi: {
    type: [Function, null],
    default: null
  },
  requestParams: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  }
}), f = ["onConfirm", "onCancel"];
export {
  f as emitNames,
  u as lsConfirmProps
};

var o = Object.defineProperty;
var e = (a, l) => o(a, "name", { value: l, configurable: !0 });
import { buildProps as t } from "../../_utils/runtime/index.js";
const n = t({
  formData: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default"),
    required: !0
  },
  formItems: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default"),
    required: !0
  },
  column: {
    type: Number,
    default: 1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  showBtnLoading: {
    type: Boolean,
    default: !0
  },
  read: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  showButtons: {
    type: Boolean,
    default: !0
  },
  buttonsClass: {
    type: String,
    default: ""
  },
  buttonsLeft: {
    type: Boolean,
    default: !1
  },
  showReset: {
    type: Boolean,
    default: !0
  },
  showSubmit: {
    type: Boolean,
    default: !0
  },
  confirmText: {
    type: String,
    default: "确认"
  },
  resetText: {
    type: String,
    default: "重置"
  },
  confirmClassName: {
    type: String,
    default: ""
  },
  colon: {
    type: Boolean,
    default: !1
  },
  labelEmpty: {
    type: String,
    default: "--"
  },
  // 详情样式，锦鲤适用
  hasDefReadStyle: {
    type: Boolean,
    default: !1
  },
  // 隐藏某一列，锦鲤适用
  hideColumn: {
    type: Boolean,
    default: !1
  }
}), d = t({
  isValue: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Number, Boolean, Object, Array]
  },
  type: {
    type: String,
    values: [
      "label",
      "input",
      "textarea",
      "number",
      "radio",
      "checkbox",
      "select",
      "date",
      "datetimerange",
      "timePicker",
      "timeSelect",
      "cascader",
      "multipleCascader",
      "switch",
      "inputRange",
      "inputNumberRange",
      "slot",
      "itemSlot"
    ]
  },
  label: {
    type: String,
    default: ""
  },
  prop: {
    type: [String, Array],
    default: ""
  },
  rules: {
    type: Object,
    default: /* @__PURE__ */ e(() => {
    }, "default")
  },
  className: {
    type: String,
    default: ""
  },
  labelClass: {
    type: String,
    default: ""
  },
  labelIconClass: {
    type: String,
    default: ""
  },
  tooltip: {
    type: String,
    default: ""
  },
  options: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  },
  attrs: {
    type: Object,
    default: /* @__PURE__ */ e(() => {
    }, "default")
  },
  listeners: {
    type: Object,
    default: /* @__PURE__ */ e(() => {
    }, "default")
  },
  colon: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  read: {
    type: Boolean,
    default: !1
  },
  labelEmpty: {
    type: String,
    default: "--"
  },
  labelNumber: {
    type: Boolean,
    default: !1
  },
  dateFormat: {
    type: String,
    default: "YYYY-MM-DD HH:mm:ss"
  },
  formatReadValue: {
    type: Function
  },
  rangeSeparator: {
    type: String,
    default: "~"
  },
  rangeProps: {
    type: Array,
    default: /* @__PURE__ */ e(() => ["start", "end"], "default")
  },
  radioType: {
    type: String,
    default: ""
  },
  isRow: {
    type: Boolean,
    default: !1
  },
  selectAll: {
    type: Boolean,
    default: !0
  },
  index: {
    type: Number,
    default: 0
  },
  slotKey: {
    type: String,
    default: ""
  },
  levelMatch: {
    type: Boolean,
    default: !1
  }
});
export {
  d as lsFormItemProps,
  n as lsFormProps
};

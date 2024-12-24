var d = Object.defineProperty;
var e = (t, l) => d(t, "name", { value: l, configurable: !0 });
import { buildProps as a } from "../../_utils/runtime/index.js";
const u = a({
  valueHtml: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: "300px"
  },
  // 编辑器模式
  mode: {
    type: String,
    default: "default"
  },
  toolbarConfig: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  editorConfig: {
    type: Object,
    default: /* @__PURE__ */ e(() => ({}), "default")
  },
  uploadServer: {
    type: String,
    default: ""
  },
  uploadFieldName: {
    type: String,
    default: "file"
  },
  uploadToken: {
    type: String,
    default: ""
  }
}), i = [
  "handleCreated",
  "handleChange",
  "handleDestroyed",
  "handleFocus",
  "handleBlur",
  "customAlert",
  "customPaste"
];
export {
  i as lsEditorEmits,
  u as lsEditorProps
};

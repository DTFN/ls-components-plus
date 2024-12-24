var s = Object.defineProperty;
var e = (r, o) => s(r, "name", { value: o, configurable: !0 });
import { buildProps as t } from "../../_utils/runtime/index.js";
const u = t({
  menuConfigList: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  },
  needPermission: {
    type: Boolean,
    default: !1
  },
  permissionList: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  },
  hoverColor: {
    type: String,
    default: ""
  }
}), l = t({
  needPermission: {
    type: Boolean,
    default: !0
  },
  permissionList: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  },
  item: {
    type: Object,
    required: !0,
    default: /* @__PURE__ */ e(() => ({}), "default")
  }
}), p = ["onJump"];
export {
  p as lsEmitNames,
  l as lsMenuItemProps,
  u as lsMenuProps
};

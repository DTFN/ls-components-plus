/* empty css                                                                                                                                          */
import { defineComponent as i, useSlots as a, openBlock as e, createElementBlock as h, normalizeClass as p, unref as l, createBlock as n, resolveDynamicComponent as r, withCtx as u, createCommentVNode as s, renderSlot as d } from "vue";
import { Icon as f } from "@iconify/vue";
import { useNamespace as y } from "../../_hooks/useNamespace/index.js";
import { lsIconProps as g } from "../types/index.js";
import { ElIcon as k } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/icon/index/index.js";
const w = i({
  name: "LSIcon"
}), D = /* @__PURE__ */ i({
  ...w,
  props: g,
  setup(C) {
    const t = a(), m = y("icon").b();
    return (o, z) => {
      const c = k;
      return e(), h("div", {
        class: p(l(m))
      }, [
        o.type == 1 && o.name ? (e(), n(l(f), {
          key: 0,
          icon: o.name,
          class: "icon-iconify",
          width: o.width,
          height: o.height,
          color: o.color
        }, null, 8, ["icon", "width", "height", "color"])) : o.type == 2 && o.name ? (e(), n(r(o.name), {
          key: 1,
          class: "icon-svg",
          width: o.width,
          height: o.height,
          fill: o.color,
          src: o.src
        }, null, 8, ["width", "height", "fill", "src"])) : o.name ? (e(), n(c, {
          key: 2,
          size: o.size,
          color: o.color
        }, {
          default: u(() => [
            (e(), n(r(o.name), { color: o.color }, null, 8, ["color"]))
          ]),
          _: 1
        }, 8, ["size", "color"])) : s("", !0),
        l(t).default ? d(o.$slots, "default", { key: 3 }, void 0, !0) : s("", !0)
      ], 2);
    };
  }
});
export {
  D as default
};

var v = Object.defineProperty;
var a = (i, t) => v(i, "name", { value: t, configurable: !0 });
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                               */
/* empty css                                                                                                                                                     */
/* empty css                                                                                                                                               */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                                 */
/* empty css                                                                                                                                                      */
/* empty css                                                                                                                                                      */
/* empty css                                                                                                                                               */
import { defineComponent as L, ref as E, resolveComponent as y, openBlock as e, createBlock as s, createSlots as D, withCtx as n, createElementVNode as l, createVNode as d, unref as c, toDisplayString as p, createCommentVNode as N, createElementBlock as I, Fragment as S, renderList as V, createTextVNode as A } from "vue";
import { lsHeaderProp as B, lsEmitNames as b } from "../../types/index.js";
import U from "../default_head.png/index.js";
import { ElAvatar as z } from "../../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/avatar/index/index.js";
import { ElDropdownItem as F, ElDropdownMenu as H, ElDropdown as M } from "../../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/dropdown/index/index.js";
const P = { class: "el-dropdown-link" }, T = { class: "name" }, no = /* @__PURE__ */ L({
  name: "CommandList",
  inheritAttrs: !1,
  __name: "CommandList",
  props: B,
  emits: b,
  setup(i, { emit: t }) {
    const _ = t, r = E(!1);
    function u() {
      r.value = !r.value;
    }
    a(u, "visibleChange");
    function f(o) {
      _("onDropdownCommand", o);
    }
    return a(f, "dropdownCommand"), (o, j) => {
      const w = z, C = y("LSIcon"), k = F, h = H, g = M;
      return e(), s(g, {
        trigger: "click",
        onVisibleChange: u,
        onCommand: f
      }, D({
        default: n(() => [
          l("span", P, [
            d(w, {
              size: 30,
              src: o.userIcon || c(U),
              alt: ""
            }, null, 8, ["src"]),
            l("div", T, p(o.userName), 1),
            o.commandList.length > 0 ? (e(), s(C, {
              key: 0,
              name: c(r) ? "ArrowUp" : "ArrowDown"
            }, null, 8, ["name"])) : N("", !0)
          ])
        ]),
        _: 2
      }, [
        o.commandList.length > 0 ? {
          name: "dropdown",
          fn: n(() => [
            d(h, null, {
              default: n(() => [
                (e(!0), I(S, null, V(o.commandList, (m) => (e(), s(k, {
                  key: m.key,
                  command: m.key
                }, {
                  default: n(() => [
                    A(p(m.name), 1)
                  ]),
                  _: 2
                }, 1032, ["command"]))), 128))
              ]),
              _: 1
            })
          ]),
          key: "0"
        } : void 0
      ]), 1024);
    };
  }
});
export {
  no as default
};

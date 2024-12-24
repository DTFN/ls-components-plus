var L = Object.defineProperty;
var v = (y, a) => L(y, "name", { value: a, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                                  */
/* empty css                                                                                                                                                       */
import { defineComponent as S, useSlots as V, ref as g, watch as _, nextTick as Y, openBlock as r, createElementBlock as s, normalizeClass as w, unref as t, createVNode as M, mergeProps as D, withCtx as l, renderSlot as i, Fragment as d, renderList as A, createBlock as $, createElementVNode as H, createCommentVNode as h, createTextVNode as f, toDisplayString as m } from "vue";
import I from "../../icon/Index.vue/index.js";
import P from "../../../../../node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min/index.js";
import { lsDescProp as R } from "../types/index.js";
import { useNamespace as T } from "../../_hooks/useNamespace/index.js";
import j from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
import { ElDescriptionsItem as q, ElDescriptions as z } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/descriptions/index/index.js";
const F = { class: "cell-item" }, x = S({
  name: "LSDescriptions"
}), te = /* @__PURE__ */ S({
  ...x,
  props: R,
  setup(y) {
    const a = V(), n = y, N = g({
      column: 1
    }), k = g(), B = T("descriptions").b();
    _(
      () => n.labelColor,
      async (o) => {
        o && p(o, 1);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), _(
      () => n.labelBgColor,
      async (o) => {
        o && p(o, 2);
      },
      {
        deep: !0,
        immediate: !0
      }
    ), _(
      () => n.list,
      () => {
        p(n.labelColor, 2), p(n.labelBgColor, 2);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    async function p(o, b) {
      var u;
      await Y(), (((u = k.value) == null ? void 0 : u.querySelectorAll(".el-descriptions__label")) || []).forEach((e) => {
        b === 1 ? e.style.color = o : b === 2 && (e.style.backgroundColor = o);
      });
    }
    return v(p, "updateLabelStyle"), (o, b) => {
      const C = q, u = z;
      return r(), s("div", {
        ref_key: "lsDescRef",
        ref: k,
        class: w([
          t(B),
          `column-${o.$attrs.column || 1}`,
          o.$attrs.title || o.$attrs.extra || t(a).title || t(a).extra ? "" : "no-header"
        ])
      }, [
        M(u, D(t(j)(t(N), o.$attrs), { border: "" }), {
          title: l(() => [
            i(o.$slots, "title", {}, void 0, !0)
          ]),
          extra: l(() => [
            i(o.$slots, "extra", {}, void 0, !0)
          ]),
          default: l(() => [
            (r(!0), s(d, null, A(o.list, (e, E) => (r(), s(d, { key: E }, [
              e.hide ? h("", !0) : (r(), $(C, {
                key: 0,
                label: e == null ? void 0 : e.label
              }, {
                label: l(() => {
                  var c;
                  return [
                    H("div", F, [
                      (c = e.iconConfig) != null && c.name || t(a).icon ? (r(), $(I, D({
                        key: 0,
                        ref_for: !0
                      }, e.iconConfig), {
                        default: l(() => [
                          i(o.$slots, "icon", {}, void 0, !0)
                        ]),
                        _: 2
                      }, 1040)) : h("", !0),
                      f(" " + m(e == null ? void 0 : e.label), 1)
                    ])
                  ];
                }),
                default: l(() => {
                  var c;
                  return [
                    e.type === "date" ? (r(), s(d, { key: 0 }, [
                      f(m(e.value ? t(P)(e.value).format(e.format || "YYYY-MM-DD HH:mm:ss") : "--"), 1)
                    ], 64)) : e.type === "select" ? (r(), s(d, { key: 1 }, [
                      f(m(((c = e.propMap[e.value]) == null ? void 0 : c.label) || "--"), 1)
                    ], 64)) : e.type == "slot" ? i(o.$slots, e.slotName, {
                      key: 2,
                      data: e == null ? void 0 : e.value
                    }, void 0, !0) : (r(), s(d, { key: 3 }, [
                      f(m((e == null ? void 0 : e.value) || "--"), 1)
                    ], 64))
                  ];
                }),
                _: 2
              }, 1032, ["label"]))
            ], 64))), 128))
          ]),
          _: 3
        }, 16)
      ], 2);
    };
  }
});
export {
  te as default
};

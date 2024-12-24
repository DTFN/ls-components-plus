var _ = Object.defineProperty;
var n = (p, l) => _(p, "name", { value: l, configurable: !0 });
import { defineComponent as y, ref as b, watch as I, resolveComponent as N, openBlock as a, createElementBlock as i, normalizeClass as f, unref as c, normalizeStyle as m, Fragment as V, renderList as R, renderSlot as k, createBlock as X, createCommentVNode as w } from "vue";
import { useNamespace as Y } from "../../_hooks/useNamespace/index.js";
import { lsFlowBoxProps as z } from "../types/index.js";
const W = y({
  name: "LSFlowBox"
}), q = /* @__PURE__ */ y({
  ...W,
  props: z,
  setup(p) {
    const l = Y("flow-box"), x = l.b(), g = l.b("item"), B = l.b("item-line"), C = l.b("item-arrow"), S = b(), d = b({}), u = p;
    I(
      () => u.list,
      (o) => {
        o && o.length > 0 && $();
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function $() {
      d.value = {
        width: `${u.width}`,
        height: `${u.height}`
      };
    }
    n($, "updateFlowBoxStyle");
    function L(o) {
      const t = {}, { boxBgColor: e, boxPos: r, boxPosVal: s } = o;
      return e && (t.backgroundColor = e), r && s && (t[r] = `${s}px`), t;
    }
    n(L, "setItemStyle");
    function P(o) {
      const t = {}, { linePos: e, lineColor: r, lineLength: s, lineWidth: F } = o, h = `${F || 2}px`;
      if (e && s)
        switch (e) {
          case "left":
            t.top = "50%", t.transform = "translateY(-50%)", t.left = `-${s}px`, t.width = `${s}px`, t.height = h;
            break;
          case "top":
            t.left = "50%", t.transform = "translateX(-50%)", t.top = `-${s}px`, t.width = h, t.height = `${s}px`;
            break;
        }
      return r && (t.backgroundColor = r), t;
    }
    n(P, "setItemLineStyle");
    function A(o) {
      const { arrowPos: t } = o;
      let e = "";
      if (t)
        switch (t) {
          case "top":
            e = "ArrowUpBold";
            break;
          case "bottom":
            e = "ArrowDownBold";
            break;
          case "left":
            e = "ArrowLeftBold";
            break;
          case "right":
            e = "ArrowRightBold";
            break;
        }
      return e;
    }
    n(A, "setArrowName");
    function v(o) {
      const { arrowPos: t } = o;
      let e = {};
      switch (t) {
        case "left":
          e.top = "50%", e.transform = "translateY(-50%)", e.left = "-3px";
          break;
        case "right":
          e.top = "50%", e.transform = "translateY(-50%)", e.right = "-3px";
          break;
        case "top":
          e.left = "50%", e.transform = "translateX(-50%)", e.top = "-4px";
          break;
        case "bottom":
          e.left = "50%", e.transform = "translateX(-50%)", e.bottom = "-4px";
          break;
      }
      return e;
    }
    return n(v, "setItemArrowStyle"), (o, t) => {
      const e = N("LSIcon");
      return o.list && o.list.length > 0 ? (a(), i("div", {
        key: 0,
        ref_key: "lsFlowBoxRef",
        ref: S,
        class: f(c(x)),
        style: m(c(d))
      }, [
        (a(!0), i(V, null, R(o.list, (r) => (a(), i("div", {
          key: r.slotName,
          class: f(c(g)),
          style: m(L(r))
        }, [
          k(o.$slots, r.slotName, {}, void 0, !0),
          r.linePos && r.lineLength ? (a(), i("div", {
            key: 0,
            class: f(c(B)),
            style: m(P(r))
          }, [
            r.arrowPos ? (a(), X(e, {
              key: 0,
              class: f(c(C)),
              name: A(r),
              style: m(v(r)),
              color: r.lineColor || "#ccc"
            }, null, 8, ["class", "name", "style", "color"])) : w("", !0)
          ], 6)) : w("", !0)
        ], 6))), 128)),
        k(o.$slots, "default", {}, void 0, !0)
      ], 6)) : w("", !0);
    };
  }
});
export {
  q as default
};

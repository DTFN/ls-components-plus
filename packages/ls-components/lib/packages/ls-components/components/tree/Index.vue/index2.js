var W = Object.defineProperty;
var a = (f, p) => W(f, "name", { value: p, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                              */
import { defineComponent as T, ref as h, computed as S, watch as L, nextTick as x, openBlock as E, createElementBlock as O, normalizeClass as k, unref as c, createBlock as U, isRef as $, withCtx as A, createTextVNode as j, createCommentVNode as F, createVNode as G, normalizeStyle as J, createElementVNode as w, toDisplayString as M } from "vue";
import { useNamespace as Q } from "../../_hooks/useNamespace/index.js";
import { lsTreeProps as X, emitNames as Y } from "../types/index.js";
import { excutePowerTree as Z } from "../../_utils/power/index.js";
import { ElCheckbox as ee } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/checkbox/index/index.js";
import { ElTree as te } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/tree/index/index.js";
const le = T({
  name: "LSTree"
}), fe = /* @__PURE__ */ T({
  ...le,
  props: X,
  emits: Y,
  setup(f, { expose: p, emit: P }) {
    const C = P, s = f, v = Q("tree"), K = v.b(), V = v.b("box"), i = h(), r = h(!1), d = h(!1), m = h([]), B = S(() => s.height ? {
      maxHeight: s.height
    } : {}), y = S(() => s.treeData);
    L(
      () => y.value,
      async (e) => {
        e && e.length > 0 && (r.value = !1, d.value = !1, m.value = D(), q(), await x(), i.value.filter(), N(), I());
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function D() {
      return y.value.reduce((e, t) => (e.push(t.id), t.children && e.push(...g(t.children)), e), []);
    }
    a(D, "getAllNodeKeys");
    function g(e) {
      return e.reduce((t, n) => (t.push(n.id), n.children && t.push(...g(n.children)), t), []);
    }
    a(g, "getAllChildKeys");
    async function q() {
      var t, n;
      await x();
      const e = document.getElementsByClassName("hide-child-node");
      for (let o = 0; o < e.length; o++) {
        const l = e[o].parentNode;
        l.style.opacity = 0, l.style.width = 0, l.style.height = 0, (n = (t = l == null ? void 0 : l.parentNode) == null ? void 0 : t.parentNode) != null && n.previousElementSibling && (l.parentNode.parentNode.previousElementSibling.querySelector(".el-icon").style.opacity = 0, l.parentNode.parentNode.previousElementSibling.querySelector(".el-icon").style.visibility = "hidden");
      }
    }
    a(q, "updateHideStyle");
    function R() {
      d.value = !1, i.value && i.value.setCheckedKeys(r.value ? m.value : []);
    }
    a(R, "handleCheckAllChange");
    function _(e, t) {
      const { permission: n } = t || {};
      if (n != null && n.startsWith(s.hideNodePrefix))
        return !1;
      if (!e) return !0;
      const { label: o } = s.dataProps || {};
      return o ? t[o].indexOf(e) !== -1 : !0;
    }
    a(_, "filterNode");
    function z(e, t) {
      i.value.setCheckedNodes(Z(y.value, e, t)), C("handleCheck", e, t);
    }
    a(z, "handleCheck");
    function H(e, t) {
      N(), C("handleChekChange", e, t);
    }
    a(H, "handleChekChange");
    function N() {
      const e = i.value.getCheckedNodes(!1, !0);
      let t = [];
      e.forEach((n) => {
        const { id: o, parentId: l } = n;
        t.push(o || l);
      }), t.length > 0 ? t.length === m.value.length ? (r.value = !0, d.value = !1) : (r.value = !1, d.value = !0) : (r.value = !1, d.value = !1);
    }
    a(N, "updateAllCheckStatus");
    function I() {
      var e, t;
      if (s.direction == "h") {
        const n = (t = (e = i.value) == null ? void 0 : e.el$) == null ? void 0 : t.getElementsByClassName("el-tree-node");
        for (let o = 0; o < n.length; o++) {
          const l = n[o];
          if (l) {
            const u = l.querySelector(".el-tree-node__content .el-icon");
            u && getComputedStyle(u).visibility === "hidden" && (l.style.display = "inline-block", l.style.verticalAlign = "middle");
          }
        }
      }
    }
    return a(I, "updateStyle"), p({
      lsTreeRef: i
    }), (e, t) => {
      const n = ee, o = te;
      return E(), O("div", {
        class: k(c(K))
      }, [
        e.isCheckAll ? (E(), U(n, {
          key: 0,
          modelValue: c(r),
          "onUpdate:modelValue": t[0] || (t[0] = (l) => $(r) ? r.value = l : null),
          indeterminate: c(d),
          onChange: R
        }, {
          default: A(() => t[1] || (t[1] = [
            j(" 全选 ")
          ])),
          _: 1
        }, 8, ["modelValue", "indeterminate"])) : F("", !0),
        G(o, {
          ref_key: "lsTreeRef",
          ref: i,
          "show-checkbox": e.showCheckbox,
          "default-expand-all": e.defaultExpandAll,
          "node-key": e.nodeKey,
          "check-strictly": e.isCheckStrictly,
          style: J(c(B)),
          class: k([c(V), !e.isExpand && "expand-disabled"]),
          data: e.treeData,
          props: e.dataProps,
          "default-checked-keys": e.defaultCheckedKeys,
          "expand-on-click-node": e.isExpand,
          "filter-node-method": _,
          onCheck: z,
          onCheckChange: H
        }, {
          default: A(({ node: l, data: u }) => {
            var b;
            return [
              w("span", {
                class: k(["custom-tree-node", {
                  "hide-child-node": e.hideNodePrefix && ((b = u.permission) == null ? void 0 : b.startsWith(e.hideNodePrefix))
                }])
              }, [
                w("span", null, M(l.label), 1)
              ], 2)
            ];
          }),
          _: 1
        }, 8, ["show-checkbox", "default-expand-all", "node-key", "check-strictly", "style", "class", "data", "props", "default-checked-keys", "expand-on-click-node"])
      ], 2);
    };
  }
});
export {
  fe as default
};

var D = Object.defineProperty;
var l = (v, d) => D(v, "name", { value: d, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                             */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                         */
/* empty css                                                                                                                                           */
import { defineComponent as h, ref as y, resolveComponent as _, openBlock as o, createElementBlock as r, normalizeClass as H, unref as i, createVNode as m, mergeProps as u, withCtx as n, createBlock as c, normalizeProps as Z, createElementVNode as s, createTextVNode as f, withDirectives as k, Fragment as j, renderList as q, toDisplayString as g, createCommentVNode as G, vShow as J } from "vue";
import { useNamespace as K } from "../../_hooks/useNamespace/index.js";
import { lsBellMessageProps as O, emitNames as Q } from "../types/index.js";
import b from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
import { ElIcon as R } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/icon/index/index.js";
import { ElBadge as U } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/badge/index/index.js";
import { ElTag as W } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/tag/index/index.js";
import { ElButton as X } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/button/index/index.js";
import { ElPopover as Y } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/popover/index/index.js";
import { vLoading as x } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/loading/src/directive/index.js";
const ee = { class: "msg-list-view" }, oe = { class: "top-box" }, te = { class: "content-box" }, ne = ["onClick"], se = ["innerHTML"], le = { class: "mt-8 time" }, re = { class: "dot" }, ie = {
  class: "flex-center ptb-24",
  style: {
    textAlign: "center"
  }
}, ae = {
  key: 0,
  class: "no-more"
}, me = h({
  name: "LSBellMessage"
}), we = /* @__PURE__ */ h({
  ...me,
  props: O,
  emits: Q,
  setup(v, { emit: d }) {
    const p = d, B = y({
      width: 360,
      placement: "bottom-end",
      trigger: "click"
    }), C = y({
      showZero: !1,
      max: 99,
      offset: [3, 2]
    }), N = K("bell-message").b();
    function L() {
      p("readAll");
    }
    l(L, "readAll");
    function M(e) {
      p("readMsg", e);
    }
    l(M, "readMsg");
    function S() {
      p("loadMore");
    }
    return l(S, "loadMore"), (e, a) => {
      const E = _("LSIcon"), T = _("BellFilled"), w = R, A = U, P = _("LSButton"), V = W, F = X, I = Y, $ = x;
      return o(), r("div", {
        class: H(i(N))
      }, [
        m(I, u(i(b)(i(B), e.$attrs), { "popper-class": "ls-bell-message-popover" }), {
          reference: n(() => [
            m(A, u(i(b)(i(C), e.$attrs), {
              class: "icon-message",
              value: Number(e.noticeNum),
              "dot-class": "notice-dot"
            }), {
              default: n(() => [
                e.iconConfig.name ? (o(), c(E, Z(u({ key: 0 }, e.iconConfig)), null, 16)) : (o(), c(w, { key: 1 }, {
                  default: n(() => [
                    m(T)
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }, 16, ["value"])
          ]),
          default: n(() => [
            s("div", ee, [
              s("div", oe, [
                m(P, {
                  class: "pl-12 read_all",
                  link: "",
                  type: e.noticeNum > 0 ? "primary" : "",
                  disabled: e.noticeNum < 1,
                  onClick: L
                }, {
                  default: n(() => a[0] || (a[0] = [
                    f("全部已读")
                  ])),
                  _: 1
                }, 8, ["type", "disabled"])
              ]),
              k((o(), r("div", te, [
                (o(!0), r(j, null, q(e.list, (t, z) => (o(), r("div", {
                  key: z,
                  class: "mlr-6 msg-item",
                  onClick: /* @__PURE__ */ l((de) => M(t.id), "onClick")
                }, [
                  s("h1", null, g(t.title), 1),
                  t.msgType ? (o(), c(V, {
                    key: 0,
                    type: "primary",
                    class: "msg-type"
                  }, {
                    default: n(() => [
                      f(g(t.msgType), 1)
                    ]),
                    _: 2
                  }, 1024)) : G("", !0),
                  s("div", {
                    class: "mt-8 content",
                    innerHTML: t.content
                  }, null, 8, se),
                  s("div", le, g(t.createdTime), 1),
                  k(s("div", re, null, 512), [
                    [J, t.readStatus == 0]
                  ])
                ], 8, ne))), 128)),
                s("div", ie, [
                  e.noMore ? (o(), r("div", ae, "暂无更多")) : (o(), c(F, {
                    key: 1,
                    link: "",
                    type: "primary",
                    loading: e.loading,
                    onClick: S
                  }, {
                    default: n(() => a[1] || (a[1] = [
                      f("加载更多")
                    ])),
                    _: 1
                  }, 8, ["loading"]))
                ])
              ])), [
                [$, e.loading]
              ])
            ])
          ]),
          _: 1
        }, 16)
      ], 2);
    };
  }
});
export {
  we as default
};

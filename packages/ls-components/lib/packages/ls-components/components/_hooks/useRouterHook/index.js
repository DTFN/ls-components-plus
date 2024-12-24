var y = Object.defineProperty;
var s = (r, c) => y(r, "name", { value: c, configurable: !0 });
import { useRouter as R, useRoute as k } from "vue-router";
import { ref as B } from "vue";
function q() {
  const r = R(), c = k(), l = B(c), f = /* @__PURE__ */ s((t, e) => {
    const { name: u, query: n = {}, path: o } = t || {};
    e ? o && r.push({
      path: o,
      query: n
    }) : u && r.push({
      name: u,
      query: n
    });
  }, "jumpRouteCom"), d = /* @__PURE__ */ s(() => c.query, "getRouteQuery");
  function p(t, e, u) {
    t.bcList = u, t.children ? (t.leaf && e.push(t), t.children.forEach((n) => {
      const o = [
        ...u,
        {
          title: t.title,
          name: t.name
        }
      ];
      p(n, e, o);
    })) : e.push(t);
  }
  s(p, "processMenuItems");
  const i = /* @__PURE__ */ s((t) => {
    let e = [];
    return t.forEach((u) => p(u, e, [])), e;
  }, "getRouterConfig");
  function h(t, e, u, n) {
    t.push({
      path: e.path,
      name: e.name,
      component: u[`${n}/${e.cpoPath}.vue`],
      meta: {
        key: e.key,
        title: e.title,
        bcList: (e.bcList || []).concat({
          title: e.title
        })
      }
    });
  }
  return s(h, "addMenu"), {
    route: c,
    router: r,
    currentRouter: l,
    jumpRouteCom: f,
    getRouteQuery: d,
    getMenusByAuth: /* @__PURE__ */ s((t, e, u, n) => {
      const o = [];
      return i(t).forEach((a) => {
        if (n) {
          const m = a.pCode.toString();
          n.includes(m) && h(o, a, e, u);
        } else
          h(o, a, e, u);
      }), o;
    }, "getMenusByAuth")
  };
}
s(q, "useRouterHook");
export {
  q as default
};

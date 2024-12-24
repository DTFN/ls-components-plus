var p = Object.defineProperty;
var s = (e, t) => p(e, "name", { value: t, configurable: !0 });
import { useWebSocket as v } from "../../../../../node_modules/.pnpm/@vueuse_core@12.0.0_typescript@5.5.4/node_modules/@vueuse/core/index/index.js";
import { ref as o } from "vue";
function W() {
  const e = o(), t = o(), n = o(), a = o();
  return {
    createWebSocket: /* @__PURE__ */ s((c, r) => {
      if (!c)
        return;
      const { data: l, open: f, close: i, send: m } = v(c, {
        immediate: !1,
        heartbeat: !0,
        autoReconnect: !0,
        autoClose: !1,
        onMessage() {
          a.value = "{}";
          const { value: u } = l || {};
          u !== "pong" && (a.value = u), r();
        }
      });
      n.value = m, e.value = f, t.value = i;
    }, "createWebSocket"),
    wsOpen: e,
    wsClose: t,
    wsData: a,
    wsSend: n
  };
}
s(W, "useWSHook");
export {
  W as default
};

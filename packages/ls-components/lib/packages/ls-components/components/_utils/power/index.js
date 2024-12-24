var E = Object.defineProperty;
var l = (r, t) => E(r, "name", { value: t, configurable: !0 });
const e = {
  P: "p",
  D: "d"
};
function P(r, t, i) {
  const { parentId: n, permission: f } = t, { checkedKeys: s, checkedNodes: h } = i;
  return !t.children && n !== 0 && a(r, n, f, h, s.includes(t.id)), h;
}
l(P, "excutePowerTree");
function a(r, t, i, n, f) {
  r.forEach((s) => {
    s.id == t ? f ? i.startsWith(e.P) || W(s.children || [], n, i, f) : W(s.children || [], n, i, f) : s.children && s.children.length > 0 && a(s.children, t, i, n, f);
  });
}
l(a, "getCurLevelNodes");
function W(r, t, i, n) {
  const f = i.startsWith(e.P), s = i.startsWith(e.D);
  r.forEach((h) => {
    const { permission: o } = h;
    n ? (s ? o.startsWith(e.P) : o.startsWith(e.P) || o.startsWith(e.D)) && t.push(h) : t.forEach((p, c) => {
      (f && p.id === h.id || s && p.id === h.id && !p.permission.startsWith(e.P)) && t.splice(c, 1);
    });
  });
}
l(W, "setCheckedNodes");
export {
  P as excutePowerTree
};

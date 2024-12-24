var a = Object.defineProperty;
var r = (t, o) => a(t, "name", { value: o, configurable: !0 });
const _ = /* @__PURE__ */ r((t, o) => {
  const e = t.__vccOpts || t;
  for (const [c, s] of o)
    e[c] = s;
  return e;
}, "_export_sfc");
export {
  _ as default
};

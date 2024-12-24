var V = Object.defineProperty;
var n = (e, t) => V(e, "name", { value: t, configurable: !0 });
import { useGlobalConfig as m } from "../useGlobalConfig/index.js";
const l = "ls", N = "is-", r = /* @__PURE__ */ n((e, t, u, o, v) => {
  let $ = `${e}-${t}`;
  return u && ($ += `-${u}`), o && ($ += `__${o}`), v && ($ += `--${v}`), $;
}, "bemConfig"), q = /* @__PURE__ */ n((e) => {
  const t = m(l);
  return {
    namespace: t,
    b: /* @__PURE__ */ n((s = "") => r(t.value, e, s, "", ""), "b"),
    e: /* @__PURE__ */ n((s) => s ? r(t.value, e, "", s, "") : "", "e"),
    m: /* @__PURE__ */ n((s) => s ? r(t.value, e, "", "", s) : "", "m"),
    be: /* @__PURE__ */ n((s, a) => s && a ? r(t.value, e, s, a, "") : "", "be"),
    em: /* @__PURE__ */ n((s, a) => s && a ? r(t.value, e, "", s, a) : "", "em"),
    bm: /* @__PURE__ */ n((s, a) => s && a ? r(t.value, e, s, "", a) : "", "bm"),
    bem: /* @__PURE__ */ n((s, a, c) => s && a && c ? r(t.value, e, s, a, c) : "", "bem"),
    is: /* @__PURE__ */ n((s, ...a) => {
      const c = a.length >= 1 ? a[0] : !0;
      return s && c ? `${N}${s}` : "";
    }, "is"),
    // css module
    cssVar: /* @__PURE__ */ n((s) => {
      const a = {};
      for (const c in s)
        s[c] && (a[`--${t.value}-${c}`] = s[c]);
      return a;
    }, "cssVar"),
    cssVarName: /* @__PURE__ */ n((s) => `--${t.value}-${s}`, "cssVarName"),
    cssVarBlock: /* @__PURE__ */ n((s) => {
      const a = {};
      for (const c in s)
        s[c] && (a[`--${t.value}-${e}-${c}`] = s[c]);
      return a;
    }, "cssVarBlock"),
    cssVarBlockName: /* @__PURE__ */ n((s) => `--${t.value}-${e}-${s}`, "cssVarBlockName")
  };
}, "useNamespace");
export {
  l as defNamespace,
  q as useNamespace
};

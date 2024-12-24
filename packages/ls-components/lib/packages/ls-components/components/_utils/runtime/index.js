var b = Object.defineProperty;
var r = (t, e) => b(t, "name", { value: e, configurable: !0 });
import { warn as w } from "vue";
import { epPropKey as u } from "../types/index.js";
import { isObject as m } from "../check/index.js";
import O from "../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/fromPairs/index.js";
import { hasOwn as d } from "../../../../../node_modules/.pnpm/@vue_shared@3.5.13/node_modules/@vue/shared/dist/shared.esm-bundler/index.js";
const g = /* @__PURE__ */ r((t) => m(t) && !!t[u], "isEpProp"), E = /* @__PURE__ */ r((t) => t, "definePropType"), J = /* @__PURE__ */ r((t) => t, "mutable"), y = /* @__PURE__ */ r((t, e) => {
  if (!m(t) || g(t)) return t;
  const { values: o, required: p, default: n, type: c, validator: l } = t, s = {
    type: c,
    required: !!p,
    validator: o || l ? (f) => {
      let a = !1, i = [];
      if (o && (i = Array.from(o), d(t, "default") && i.push(n), a || (a = i.includes(f))), l && (a || (a = l(f))), !a && i.length > 0) {
        const v = [...new Set(i)].map((P) => JSON.stringify(P)).join(", ");
        w(
          `Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${v}], got value ${JSON.stringify(f)}.`
        );
      }
      return a;
    } : void 0,
    [u]: !0
  };
  return d(t, "default") && (s.default = n), s;
}, "buildProp"), N = /* @__PURE__ */ r((t) => O(Object.entries(t).map(([e, o]) => [e, y(o, e)])), "buildProps");
export {
  y as buildProp,
  N as buildProps,
  E as definePropType,
  g as isEpProp,
  J as mutable
};

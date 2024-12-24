var s = Object.defineProperty;
var t = (e, a) => s(e, "name", { value: a, configurable: !0 });
import m from "../../../../../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge/index.js";
async function p({ template: e, data: a = [], templatePatch: i = {}, customOption: o = {} }) {
  if (e) {
    let n = await (/* @__PURE__ */ Object.assign({ "./template/bar.ts": /* @__PURE__ */ t(() => import("../template/bar/index.js"), "./template/bar.ts"), "./template/line.ts": /* @__PURE__ */ t(() => import("../template/line/index.js"), "./template/line.ts"), "./template/pie.ts": /* @__PURE__ */ t(() => import("../template/pie/index.js"), "./template/pie.ts") }))[`./template/${e}.ts`]();
    const { dealOption: r } = n;
    return m(r(a, i), o);
  }
  return o;
}
t(p, "templateOption");
const u = {
  templateOption: p
};
export {
  u as default,
  p as templateOption
};

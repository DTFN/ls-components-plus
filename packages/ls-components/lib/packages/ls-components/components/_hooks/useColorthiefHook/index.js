var a = Object.defineProperty;
var n = (t, r) => a(t, "name", { value: r, configurable: !0 });
import c from "../../../../../node_modules/.pnpm/colorthief@2.4.0/node_modules/colorthief/dist/color-thief/index.js";
function l() {
  const t = new c();
  return {
    getColorthief: /* @__PURE__ */ n(async (s) => {
      const o = new Image();
      return o.src = s, o.crossOrigin = "Anonymous", new Promise((i) => {
        o.addEventListener("load", async function() {
          const e = await t.getColor(o, 90);
          i({
            bgColor: `rgb(${e[0]}, ${e[1]}, ${e[2]})`
          });
        });
      });
    }, "getColorthief")
  };
}
n(l, "useColorthiefHook");
export {
  l as default
};

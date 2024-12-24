var v = Object.defineProperty;
var r = (n, a) => v(n, "name", { value: a, configurable: !0 });
import { merge as f } from "lodash";
import { ref as m } from "vue";
function b() {
  const n = {
    allOption: [],
    options: [],
    maps: {}
  }, a = /* @__PURE__ */ r(async (l, e, i) => {
    const { labelKey: s = "name", valueKey: u = "id" } = e || {};
    if (l instanceof Function) {
      let t = [];
      if (e) {
        const o = f({}, e);
        delete o.labelKey, delete o.valueKey, t = (await l(o)).records;
      } else
        t = await l();
      n.options = (t || []).map((o) => {
        const c = o[u], p = o[s];
        return n.maps[c] = {
          label: p
        }, {
          value: c,
          label: p
        };
      }), n.allOption = (i || [{ label: "全部", value: "" }]).concat(n.options);
    }
    return n;
  }, "getSelOption");
  return {
    getSelOption: a,
    remoteSearchSelOption: /* @__PURE__ */ r(async (l, e, i, s, u) => {
      const t = m([]);
      if (!u && s) {
        e[i] = s;
        const { options: c } = await a(l, e);
        t.value = c, delete e[i];
      }
      const { options: o } = await a(l, e);
      return t.value = f(t.value, o), t.value;
    }, "remoteSearchSelOption")
  };
}
r(b, "useOptionHook");
export {
  b as default
};

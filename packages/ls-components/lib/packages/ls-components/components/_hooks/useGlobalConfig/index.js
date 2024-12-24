var e = Object.defineProperty;
var r = (o, t) => e(o, "name", { value: t, configurable: !0 });
import { computed as n } from "vue";
function i(o = "") {
  return n(() => o);
}
r(i, "useGlobalConfig");
export {
  i as useGlobalConfig
};

var v = Object.defineProperty;
var a = (i, o) => v(i, "name", { value: o, configurable: !0 });
import { defineComponent as u, ref as n, computed as w, watch as $, nextTick as c, markRaw as C, onMounted as O, onUnmounted as _, openBlock as g, createElementBlock as x, normalizeClass as y, unref as f, normalizeStyle as z } from "vue";
import { useNamespace as k } from "../../_hooks/useNamespace/index.js";
import { lsChartProps as L } from "../types/index.js";
import P from "../config/index/index.js";
import { install as b } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/component/tooltip/install/index.js";
import { install as E } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/component/toolbox/install/index.js";
import { install as R } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/component/dataZoom/install/index.js";
import { install as S } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/component/grid/install/index.js";
import { install as B } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/component/legend/install/index.js";
import { install as M } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/chart/line/install/index.js";
import { install as T } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/chart/pie/install/index.js";
import { installLabelLayout as U } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/label/installLabelLayout/index.js";
import { installUniversalTransition as j } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/animation/universalTransition/index.js";
import { install as N } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/renderer/installCanvasRenderer/index.js";
import { install as q } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/chart/bar/install/index.js";
import { install as A } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/chart/gauge/install/index.js";
import { install as D } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/component/graphic/install/index.js";
import { use as F } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/extension/index.js";
import { init as G } from "../../../../../node_modules/.pnpm/echarts@5.5.1/node_modules/echarts/lib/core/echarts/index.js";
const H = u({
  name: "LSChart"
}), ht = /* @__PURE__ */ u({
  ...H,
  props: L,
  setup(i, { expose: o }) {
    F([
      b,
      E,
      R,
      S,
      B,
      M,
      T,
      U,
      j,
      N,
      q,
      A,
      D
    ]);
    const h = k("chart").b(), t = i, r = n(), e = n(), l = n({}), d = w(() => ({
      width: t.width ? `${t.width}px` : "100%",
      height: t.height ? `${t.height}px` : "30vh"
    }));
    $(
      () => [t.width, t.height, t.template, t.data, t.customOption, t.templatePatch],
      () => {
        m();
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    async function m() {
      t.template ? l.value = await P.templateOption({
        template: t.template,
        data: t.data,
        templatePatch: t.templatePatch,
        customOption: t.customOption
      }) : l.value = t.customOption, e.value ? (e.value.setOption(l.value, {
        notMerge: !0
      }), await c(), s()) : (await c(), p(), m());
    }
    a(m, "setChartOption");
    function p() {
      e.value = C(G(r.value)), window.removeEventListener("resize", s), window.addEventListener("resize", s);
    }
    a(p, "initChart");
    function s() {
      e.value && e.value.resize();
    }
    return a(s, "resizeChart"), O(() => {
      p();
    }), _(() => {
      e.value && e.value.dispose();
    }), o({
      echartObj: e
    }), (J, K) => (g(), x("div", {
      class: y(f(h)),
      style: z(f(d)),
      ref_key: "lsChartRef",
      ref: r
    }, null, 6));
  }
});
export {
  ht as default
};

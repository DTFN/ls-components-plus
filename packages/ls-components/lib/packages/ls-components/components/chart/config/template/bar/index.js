var _ = Object.defineProperty;
var c = (e, t) => _(e, "name", { value: t, configurable: !0 });
import { numberFixed as B, formatChartAxis as M } from "../../../../_utils/utils/index.js";
import { BG_COLOR_MAP as C, DEF_THEME as m, BAR_COLOR_MAP as O, TOOLTIP_COLOR_MAP as h, FONT_COLOR_MAP as g, SPLIT_LINE_COLOR as $, BG_BAR_COLOR_MAP as k, LABEL_POSITION_MAP as y } from "../../base/index.js";
const I = /* @__PURE__ */ c((e, t, o, a, r) => {
  const { name: s, seriesName: i, value: p, color: u } = e, n = a == 0 ? `<div class="name">${s}</div>` : "", l = t && p !== "-" && i !== "temp" ? `<span class="serise-name">${t ? i : ""}</span>` : "", d = p !== "-" && i !== "temp" ? `<span class="value">${p || "-"}</span>` : "", b = p !== "-" && i !== "temp" ? `<div class="content-badge ${o}" style="background-color: ${typeof u == "string" ? u : r};"></div>` : "";
  return ` ${n} <div class="content"> <div class="serise-wrap"> ${b} ${l} </div> ${d} </div> `;
}, "setTooltipFormat"), D = /* @__PURE__ */ c((e) => {
  let { legend: t, legendIcon: o, tooltip: a = "shadow", theme: r = "default", tooltipFormatter: s, barColorList: i } = e;
  const p = i || O[r || m][0];
  return s = s || function(u) {
    let n = `<div class="ls-bar-tooltip-wrap ${r}">`;
    return u.forEach((l, d) => {
      n += I(l, t, o, d, p);
    }), n + "</div>";
  }, a ? {
    trigger: "axis",
    axisPointer: {
      type: a,
      z: 1,
      label: {
        color: h[r || m].color
      }
    },
    textStyle: {
      color: g[r || m]
    },
    padding: 12,
    backgroundColor: h[r || m].bgColor,
    extraCssText: `box-shadow: ${h[r || m].shadowColor};`,
    formatter: s
  } : null;
}, "setTooltip"), R = /* @__PURE__ */ c((e) => {
  const { legend: t, legendIcon: o = "rect", theme: a } = e;
  return {
    type: "scroll",
    data: t || [],
    icon: o,
    itemWidth: 12,
    itemHeight: 10,
    textStyle: {
      color: g[a || m],
      fontSize: 12,
      height: 10,
      rich: {
        a: {
          verticalAlign: "middle"
        }
      }
    }
  };
}, "setLegend"), H = /* @__PURE__ */ c((e) => {
  const { dataZoom: t } = e, o = {
    left: "3%",
    right: "3%",
    top: "12%",
    bottom: "3%",
    containLabel: !0
  };
  return t === "vertical" && delete o.right, t === "horizontal" && delete o.bottom, o;
}, "setGrid"), x = /* @__PURE__ */ c((e, t, o) => {
  const { axisData: a, seriesData: r } = e, { axis: s = "x", theme: i, dynamicAxis: p, type: u = "simple" } = t, n = {
    type: s == o ? "category" : "value",
    axisTick: {
      show: !1
    },
    axisLine: {
      show: s == o,
      lineStyle: {
        width: 1,
        color: g[i || m]
      }
    },
    axisLabel: {
      margin: 18
    },
    splitLine: {
      lineStyle: {
        type: "dashed",
        color: $[i || m]
      }
    }
  };
  if (s == o && (n.data = a), s !== o && p && ["simple", "multiBar"].includes(u)) {
    let l = [];
    u === "simple" ? l = (r || []).map((f) => B(f)) : u === "multiBar" && (l = r.reduce((f, A) => f.concat(A.data), []));
    const d = Math.max(...l), b = Math.min(...l), { aInterval: w, aMax: S, aMin: L } = M(d, b);
    n.min = L, n.max = S, n.interval = w;
  }
  return [n];
}, "setAxis"), T = /* @__PURE__ */ c((e) => {
  const { dataZoom: t, dataZoomColorOut: o, dataZoomColorIn: a, theme: r } = e;
  return t ? [
    {
      show: !0,
      start: 0,
      end: 100,
      orient: t,
      showDataShadow: !0,
      dataBackground: {
        // lineStyle: {
        //   color: 'transparent'
        // },
        areaStyle: {
          color: a || "#d2dbee"
        }
      },
      fillerColor: o || "rgba(207, 223, 243, 0.25)",
      // moveHandleStyle: {
      //   opacity: 0
      // },
      // borderColor: null,
      textStyle: {
        color: g[r || m]
      }
    },
    {
      type: "inside",
      start: 0,
      end: 100,
      orient: t
    },
    {
      show: !1,
      yAxisIndex: 0,
      filterMode: "empty",
      right: 0,
      showDataShadow: !0
    }
  ] : null;
}, "setDataZoom"), v = /* @__PURE__ */ c((e, t, o) => {
  const a = e === "x" ? "top" : "left";
  let r = "inside";
  return o ? r = y[t][a] : r = y[t][`-${a}`], r;
}, "getPos"), E = /* @__PURE__ */ c((e, t, o) => {
  const { type: a = "simple", showBarFont: r = !0, labelPosition: s = "inside", axis: i = "x", showBackground: p, theme: u } = e, n = {
    type: "bar",
    name: t.name,
    label: {
      show: r,
      position: s,
      formatter: /* @__PURE__ */ c(function(l) {
        const d = l.value;
        return d !== 0 ? d : "";
      }, "formatter")
    },
    showBackground: p,
    backgroundStyle: {
      color: k[u || m]
    },
    data: t.data || [],
    barCategoryGap: "30%",
    barWidth: a === "multiBar" ? "auto" : "40%",
    barGap: "4%"
  };
  return ["negative", "categoryStack", "waterfall"].includes(a) && (n.stack = "total", a === "negative" && ["both", "insideBoth"].includes(s) ? n.label.position = v(i, s, (t.data || []).reduce((l, d) => l + d) > 0) : a === "categoryStack" && o > 0 && (n.itemStyle = {
    borderColor: C[u || m],
    borderWidth: 2
  })), a === "waterfall" && (n.itemStyle = o == 0 ? {
    borderColor: "rgba(0,0,0,0)",
    color: "rgba(0,0,0,0)"
  } : null, n.emphasis = o == 0 ? {
    itemStyle: {
      borderColor: "rgba(0,0,0,0)",
      color: "rgba(0,0,0,0)"
    }
  } : null, n.label = t.label || {
    show: o > 0 && r,
    position: s,
    formatter: /* @__PURE__ */ c(function(l) {
      const d = l.value;
      return d !== 0 ? d : "";
    }, "formatter")
  }, ["both", "insideBoth"].includes(s) && (n.label.position = v(i, s, o === 1))), n;
}, "setSeriesOption"), F = /* @__PURE__ */ c((e, t) => {
  const { seriesData: o } = e, { type: a = "simple", legend: r = [] } = t;
  return (a == "simple" ? [{ name: r[0], data: o }] : o || []).map((s, i) => E(t, s, i));
}, "setSeries"), Z = /* @__PURE__ */ c((e, t) => {
  const { theme: o, barColorList: a } = t, r = {
    textStyle: {},
    backgroundColor: C[o || m],
    color: a || O[o || m],
    legend: R(t),
    grid: H(t),
    xAxis: x(e, t, "x"),
    yAxis: x(e, t, "y"),
    series: F(e, t),
    dataZoom: T(t)
  }, s = D(t);
  return s && (r.tooltip = s), r;
}, "setOption");
function P(e = {}, t = {}) {
  return Z(e, t);
}
c(P, "dealOption");
export {
  P as dealOption
};

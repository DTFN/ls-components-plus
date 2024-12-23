var B = Object.defineProperty;
var p = (o, t) => B(o, "name", { value: t, configurable: !0 });
import { numberFixed as C, formatChartAxis as I } from "../../../../_utils/utils/index.js";
import { BG_COLOR_MAP as k, DEF_THEME as l, BAR_COLOR_MAP as _, TOOLTIP_COLOR_MAP as S, FONT_COLOR_MAP as v, BG_BAR_COLOR_MAP as L, SPLIT_LINE_COLOR as w } from "../../base/index.js";
const D = /* @__PURE__ */ p((o, t, e, i, a) => {
  const { name: s, seriesName: n, value: r, color: u } = o, d = i == 0 ? `<div class="name">${s}</div>` : "", y = t && r !== "-" && n !== "temp" ? `<span class="serise-name">${t ? n : ""}</span>` : "", c = r !== "-" && n !== "temp" ? `<span class="value">${r || "-"}</span>` : "", m = r !== "-" && n !== "temp" ? `<div class="content-badge ${e}" style="background-color: ${typeof u == "string" ? u : a};"></div>` : "";
  return ` ${d} <div class="content"> <div class="serise-wrap"> ${m} ${y} </div> ${c} </div> `;
}, "setTooltipFormat"), R = /* @__PURE__ */ p((o) => {
  let { legend: t, legendIcon: e, tooltip: i = "shadow", theme: a, tooltipFormatter: s, barColorList: n } = o;
  const r = n || _[a || l][0];
  return s = s || function(u) {
    let d = `<div class="ls-bar-tooltip-wrap ${a}">`;
    return u.forEach((y, c) => {
      d += D(y, t, e, c, r);
    }), d + "</div>";
  }, i ? {
    trigger: "axis",
    axisPointer: {
      type: i,
      z: 1,
      label: {
        color: S[a || l].color
      }
    },
    textStyle: {
      color: v[a || l]
    },
    padding: 12,
    backgroundColor: S[a || l].bgColor,
    extraCssText: `box-shadow: ${S[a || l].shadowColor};`,
    formatter: s
  } : null;
}, "setTooltip"), H = /* @__PURE__ */ p((o) => {
  const { legend: t, legendIcon: e = "rect", theme: i } = o;
  return {
    type: "scroll",
    data: t || [],
    icon: e,
    itemWidth: 12,
    itemHeight: 10,
    textStyle: {
      color: v[i || l],
      fontSize: 12,
      height: 10,
      rich: {
        a: {
          verticalAlign: "middle"
        }
      }
    }
  };
}, "setLegend"), F = /* @__PURE__ */ p((o) => {
  const { dataZoom: t } = o, e = {
    left: "3%",
    right: "3%",
    top: "12%",
    bottom: "3%",
    containLabel: !0
  };
  return t === "vertical" && delete e.right, t === "horizontal" && delete e.bottom, e;
}, "setGrid"), A = /* @__PURE__ */ p((o, t, e) => {
  const { axisData: i, seriesData: a } = o, { axis: s = "x", theme: n, lineBar: r, dynamicAxis: u, type: d } = t;
  let y = [
    {
      type: s == e ? "category" : "value",
      axisTick: {
        show: !1
      },
      axisLine: {
        show: s == e,
        lineStyle: {
          width: 1,
          color: v[n || l]
        }
      },
      axisLabel: {
        margin: 18
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: w[n || l]
        }
      },
      data: s == e ? i : []
    }
  ];
  if (s !== e && (r && (y = s == "x" ? [
    {
      type: "value",
      splitLine: {
        show: !1,
        lineStyle: {
          color: w[n || l]
        }
      }
    },
    {
      type: "value",
      splitLine: {
        lineStyle: {
          color: w[n || l],
          type: "dashed",
          width: 2,
          dashOffset: 2
        }
      }
    }
  ] : [
    {
      type: "value"
    }
  ]), u)) {
    let c = [];
    d === "multiple" && (!r || s == "y" && r) && (c = a.reduce((m, f) => m.concat(f.data), [])), y.map((m, f) => {
      var O;
      d === "multiple" ? r && s == "x" && (c = (((O = a[f]) == null ? void 0 : O.data) || []).map((g) => C(g))) : c = (a || []).map((g) => C(g)), c = c.filter((g) => g > 0);
      const h = Math.max(...c), b = Math.min(...c), { aInterval: x, aMax: M, aMin: $ } = I(h, b);
      return m.min = $, m.max = M, m.interval = x, m;
    });
  }
  return y;
}, "setAxis"), T = /* @__PURE__ */ p((o) => {
  const { dataZoom: t, dataZoomColorOut: e, dataZoomColorIn: i, theme: a } = o;
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
          color: i || "#d2dbee"
        }
      },
      fillerColor: e || "rgba(207, 223, 243, 0.25)",
      // moveHandleStyle: {
      //   opacity: 0
      // },
      // borderColor: null,
      textStyle: {
        color: v[a || l]
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
      filterMode: "empty",
      right: 0,
      showDataShadow: !0
    }
  ] : null;
}, "setDataZoom"), Z = /* @__PURE__ */ p((o, t) => {
  const { seriesData: e } = o, {
    type: i = "simple",
    showBarFont: a = !0,
    labelPosition: s = "inside",
    smooth: n = !0,
    areaStyle: r = void 0,
    showBackground: u,
    theme: d,
    name: y,
    lineBar: c,
    axis: m,
    symbol: f = "circle"
  } = t;
  return i === "multiple" ? (e || []).map((h, b) => {
    const x = {
      name: h.name,
      type: h.type,
      symbol: f,
      emphasis: h.emphasis || {
        focus: "series"
      },
      smooth: n,
      areaStyle: r || null,
      label: {
        show: a,
        position: s
      },
      showBackground: u,
      backgroundStyle: {
        color: L[d || l]
      },
      itemStyle: h.itemStyle || {},
      data: h.data || []
    };
    return c && (m !== "y" && b === 1 ? x.yAxisIndex = b : x.yAxisIndex && delete x.yAxisIndex), x;
  }) : [
    {
      name: y,
      label: {
        show: a,
        position: s
      },
      showBackground: u,
      backgroundStyle: {
        color: L[d || l]
      },
      data: e || [],
      smooth: n,
      symbol: f,
      // 设置填充透明度
      areaStyle: r || null,
      type: "line"
    }
  ];
}, "setSeries"), E = /* @__PURE__ */ p((o, t) => {
  const { theme: e, barColorList: i } = t, a = {
    textStyle: {},
    backgroundColor: k[e || l],
    color: i || _[e || l],
    legend: H(t),
    grid: F(t),
    xAxis: A(o, t, "x"),
    yAxis: A(o, t, "y"),
    series: Z(o, t),
    dataZoom: T(t)
  }, s = R(t);
  return s && (a.tooltip = s), a;
}, "setOption");
function P(o = {}, t = {}) {
  return E(o, t);
}
p(P, "dealOption");
export {
  P as dealOption
};

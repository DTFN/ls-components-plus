var B = Object.defineProperty;
var c = (t, e) => B(t, "name", { value: e, configurable: !0 });
import { DEF_THEME as m, FONT_COLOR_MAP as R, SPLIT_LINE_COLOR as H, BG_COLOR_MAP as M } from "../../base/index.js";
const P = /* @__PURE__ */ c(({ showTooltip: t = !0, tooltipTrigger: e = "item", tooltipFormatter: o }) => ({
  show: t,
  trigger: e,
  formatter: o
}), "setTooltip"), $ = /* @__PURE__ */ c(({
  legendType: t = "plain",
  legendShow: e = !0,
  legendOrient: o = "horizontal",
  legendLeft: s = "center",
  legendRight: u = "auto",
  legendTop: p = "auto",
  legendBottom: d = "auto",
  legendTextColor: g = "#2C2C2C",
  legendIcon: h = "rect"
}) => ({
  type: t,
  show: e,
  orient: o,
  left: s,
  right: u,
  top: p,
  bottom: d,
  icon: h,
  itemGap: 20,
  itemWidth: 14,
  itemHeight: 10,
  textStyle: {
    color: g,
    fontSize: 14
  }
}), "setLegend"), k = /* @__PURE__ */ c(({ seriesData: t = [], innerData: e = [] }, {
  color: o = [],
  radius: s = [0, "60%"],
  roseType: u = !1,
  percentPrecision: p = 2,
  lineShow: d = !0,
  lineColor: g = "rgba(0, 0, 0, 0.2)",
  length: h = 40,
  length2: S = 30,
  labelShow: O = !0,
  labelColor: b = "#2C2C2C",
  labelShowPercent: L = !0,
  labelShowItem: F = !0,
  labelFormatter: T = "",
  innerRadius: y = [0, "30%"],
  innerLabelColor: E = "#ffffff",
  selectedMode: _ = ""
}) => {
  let f = [];
  t && t.length && t.forEach((l, r) => {
    const { value: n = "", name: a = "", color: i = "" } = l || {};
    f.push({
      value: n,
      name: a,
      itemStyle: {
        [i && "color"]: i
      },
      label: {
        rich: {
          b: {
            width: 14,
            height: 10,
            backgroundColor: i || o[r],
            verticalAlign: "middle"
          }
        }
      }
    });
  });
  let C = null;
  if (e && e.length) {
    let l = [];
    e.forEach((r) => {
      const { value: n = "", name: a = "", color: i = "" } = r || {};
      l.push({
        value: n,
        name: a,
        itemStyle: {
          [i && "color"]: i
        }
      });
    }), C = {
      type: "pie",
      radius: y,
      label: {
        color: E,
        fontSize: 12,
        position: "inner"
      },
      labelLine: {
        show: !1
      },
      data: l
    };
  }
  return [
    {
      type: "pie",
      data: f,
      selectedMode: _,
      radius: s,
      roseType: u,
      percentPrecision: p,
      label: {
        show: O,
        color: b,
        fontSize: 14,
        lineHeight: 20,
        formatter: T || ((l) => {
          const { name: r, percent: n, value: a } = l || {};
          return `${F ? "{b|}" : ""}  ${r}：${L ? n + "%" : a}`;
        })
      },
      labelLine: {
        show: d,
        length: h,
        length2: S,
        lineStyle: {
          color: g
        }
      }
    },
    ...[C]
  ];
}, "setSeries"), x = /* @__PURE__ */ c((t, {
  color: e = ["#2285FF", "#FF7D00", "#00CDDC", "#FB466C", "#FFC917", "#8CEAFF", "#A16FFD", "#FD8BFF"],
  theme: o = m,
  showTooltip: s,
  tooltipTrigger: u,
  tooltipFormatter: p,
  legendType: d,
  legendShow: g,
  legendOrient: h,
  legendLeft: S,
  legendRight: O,
  legendTop: b,
  legendBottom: L,
  legendTextColor: F,
  radius: T,
  roseType: y,
  percentPrecision: E,
  lineShow: _,
  lineColor: f,
  length: C,
  length2: A,
  labelShow: l,
  labelColor: r,
  labelShowPercent: n,
  labelShowItem: a,
  labelFormatter: i,
  innerRadius: v,
  innerLabelColor: z
} = {}) => {
  r = F = R[o || m], f = H[o || m];
  const w = {
    tooltip: P({
      showTooltip: s,
      tooltipTrigger: u,
      tooltipFormatter: p
    }),
    legend: $({
      legendType: d,
      legendShow: g,
      legendOrient: h,
      legendLeft: S,
      legendRight: O,
      legendTop: b,
      legendBottom: L,
      legendTextColor: F
    }),
    series: k(t, {
      color: e,
      radius: T,
      roseType: y,
      percentPrecision: E,
      lineShow: _,
      lineColor: f,
      length: C,
      length2: A,
      labelShow: l,
      labelColor: r,
      labelShowPercent: n,
      labelShowItem: a,
      labelFormatter: i,
      innerRadius: v,
      innerLabelColor: z
    })
  };
  return w.color = e, w.backgroundColor = M[o || m], w;
}, "setOption"), I = /* @__PURE__ */ c((t, e) => x(t, e), "dealOption");
export {
  I as dealOption
};

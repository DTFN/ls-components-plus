var l = Object.defineProperty;
var C = (o, t) => l(o, "name", { value: t, configurable: !0 });
const r = {
  default: {
    fontColor: "#5E5E5E",
    bgColor: "#FFFFFF",
    splitLineColor: "#DCDCDC",
    barColor: ["#1890FF", "#2FC25B", "#FACC14", "#13C2C2", "#F04864", "#8543E0"],
    dataZoomColor: ["rgba(221, 54, 54, 1)", "rgba(11, 109, 238, .5)"],
    barBgColor: "rgba(231, 232, 235, 0.6)",
    toolTip: {
      color: "#FFFFFF",
      bgColor: "#FFFFFF",
      shadowColor: "0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);"
    }
  },
  dark: {
    fontColor: "#FFFFFF",
    bgColor: "#000000",
    splitLineColor: "#5E5E5E",
    barColor: ["#1890FF", "#2FC25B", "#FACC14", "#13C2C2", "#F04864", "#8543E0"],
    dataZoomColor: ["rgba(221, 54, 54, 1)", "rgba(11, 109, 238, .5)"],
    barBgColor: "rgba(255, 255, 255, 0.2)",
    toolTip: {
      color: "#5E5E5E",
      bgColor: "#5E5E5E",
      shadowColor: "0 1px 10px rgba(0, 0, 0, 5%), 0 4px 5px rgba(0, 0, 0, 8%), 0 2px 4px -1px rgba(0, 0, 0, 12%);"
    }
  }
};
let F = "";
const a = {}, i = {}, p = {}, b = {}, s = {}, n = {}, g = /* @__PURE__ */ C(() => {
  Object.keys(r).forEach((o, t) => {
    t === 0 && (F = o), a[o] = r[o].fontColor, i[o] = r[o].splitLineColor, p[o] = r[o].bgColor, b[o] = r[o].barColor, r[o].dataZoomColor, s[o] = r[o].barBgColor, n[o] = r[o].toolTip;
  });
}, "setThemeColor"), O = {
  both: {
    top: "top",
    "-top": "bottom",
    left: "right",
    "-left": "left"
  },
  insideBoth: {
    insideTop: "insideTop",
    "-insideTop": "insideBottom",
    insideLeft: "insideRight",
    "-insideLeft": "insideLeft"
  }
};
g();
export {
  b as BAR_COLOR_MAP,
  s as BG_BAR_COLOR_MAP,
  p as BG_COLOR_MAP,
  F as DEF_THEME,
  a as FONT_COLOR_MAP,
  O as LABEL_POSITION_MAP,
  i as SPLIT_LINE_COLOR,
  n as TOOLTIP_COLOR_MAP
};

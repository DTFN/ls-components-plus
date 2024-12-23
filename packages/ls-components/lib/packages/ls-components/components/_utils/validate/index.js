var N = Object.defineProperty;
var m = (o, r) => N(o, "name", { value: r, configurable: !0 });
import { isValidJSON as x } from "../utils/index.js";
const w = /^[1-9]\d*$/, E = "输入数值必须是正整数！", u = /^(?!0+(\.0+)?$)\d+(\.\d{1})?$/, g = "输入数值必须大于0且只支持一位小数！", $ = /^(?!0+(\.0+)?$)\d+(\.\d{1,2})?$/, q = "输入数值必须大于0且只支持两位小数！", R = /^[A-Za-z0-9\-]+$/, _ = "请输入数字、字母或横杠（-）的组合！", A = /^[A-Za-z0-9\-_]+$/, z = "请输入数字、字母、下划线（_）或横杠（-）的组合！", V = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Z = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/, p = /* @__PURE__ */ m((o, r, e) => {
  const t = w, { max: s, min: n } = r || {}, { msg: i, msg2: f, required: d } = o;
  (!s || !n) && n !== 0 && s !== 0 ? d ? e(new Error(i)) : e() : !t.test(s) || !t.test(n) ? e((s === 0 || n === 0) && f ? new Error(f) : new Error(E)) : Number(n) >= Number(s) ? e(new Error("最小值必须小于最大值")) : e();
}, "validatorIntRange"), j = /* @__PURE__ */ m((o, r, e) => {
  const t = u, { max: s, min: n } = r || {}, { msg: i, msg2: f, required: d } = o;
  (!s || !n) && n !== 0 && s !== 0 ? d ? e(new Error(i)) : e() : !t.test(s) || !t.test(n) ? e((s === 0 || n === 0) && f ? new Error(f) : new Error(g)) : Number(n) >= Number(s) ? e(new Error("最小值必须小于最大值")) : e();
}, "validatorNumberRange"), y = /* @__PURE__ */ m((o, r, e) => {
  const t = $, { max: s, min: n } = r || {}, { msg: i, msg2: f, required: d } = o;
  (!s || !n) && n !== 0 && s !== 0 ? d ? e(new Error(i)) : e() : !t.test(s) || !t.test(n) ? e((s === 0 || n === 0) && f ? new Error(f) : new Error(q)) : Number(n) >= Number(s) ? e(new Error("最小值必须小于最大值")) : e();
}, "validatorNumberFloat2Range"), F = /* @__PURE__ */ m((o, r, e) => {
  const t = $, { msg: s, required: n, maxVal: i } = o;
  r ? t.test(r) ? r > i ? e(new Error(`输入数字不能超过${i}`)) : e() : e(new Error(q)) : n ? e(new Error(s)) : e();
}, "validatorNumberFloat2"), I = /* @__PURE__ */ m((o, r, e) => {
  const t = u, { msg: s, required: n, maxVal: i } = o;
  r ? t.test(r) ? r > i ? e(new Error(`输入数字不能超过${i}`)) : e() : e(new Error(g)) : n ? e(new Error(s)) : e();
}, "validatorNumber"), J = /* @__PURE__ */ m((o, r, e) => {
  const t = w, { msg: s, required: n, maxVal: i } = o;
  r ? t.test(r) ? r > i ? e(new Error(`输入数字不能超过${i}`)) : e() : e(new Error(E)) : n ? e(new Error(s)) : e();
}, "validatorInt"), W = /* @__PURE__ */ m((o, r, e) => {
  const { msg: t, required: s } = o;
  r ? x(r) ? e() : e(new Error("数据格式必须为json格式, 且不能为空json！")) : s ? e(new Error(t)) : e();
}, "validatorJson"), h = /* @__PURE__ */ m((o, r, e) => {
  const t = R, { msg: s, required: n } = o;
  r ? t.test(r) ? e() : e(new Error(_)) : n ? e(new Error(s)) : e();
}, "validatorWord1"), O = /* @__PURE__ */ m((o, r, e) => {
  const t = A, { msg: s, required: n } = o;
  r ? t.test(r) ? e() : e(new Error(z)) : n ? e(new Error(s)) : e();
}, "validatorWord2"), S = /* @__PURE__ */ m((o, r, e) => {
  const t = /^\[(([0-9]+(\.[0-9]+)?|"[^"]*")(, ?)?)*\]$/, { msg: s, required: n } = o;
  r ? t.test(r) ? e() : e(new Error("格式错误，请输入array格式参数")) : n ? e(new Error(s)) : e();
}, "validateArray"), v = /* @__PURE__ */ m((o, r, e) => {
  const { msg: t, required: s } = o;
  r ? !V.test(r) && !Z.test(r) ? e(new Error("邮箱或手机号格式不正确")) : e() : s ? e(new Error(t)) : e();
}, "validatorAccount"), D = {
  validatorIntRange: p,
  validatorNumberRange: j,
  validatorNumberFloat2Range: y,
  validatorNumberFloat2: F,
  validatorInt: J,
  validatorNumber: I,
  validatorJson: W,
  validatorWord1: h,
  validatorWord2: O,
  validateArray: S,
  validatorAccount: v
};
export {
  D as default,
  w as intRule,
  E as intRule_msg,
  u as numbers01,
  g as numbers01_msg,
  $ as numbers02,
  q as numbers02_msg,
  R as string01,
  _ as string01_msg,
  A as string02,
  z as string02_msg,
  S as validateArray,
  v as validatorAccount,
  J as validatorInt,
  p as validatorIntRange,
  W as validatorJson,
  I as validatorNumber,
  F as validatorNumberFloat2,
  y as validatorNumberFloat2Range,
  j as validatorNumberRange,
  h as validatorWord1,
  O as validatorWord2
};

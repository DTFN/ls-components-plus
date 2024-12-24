var e = Object.defineProperty;
var i = (m, r) => e(m, "name", { value: r, configurable: !0 });
import * as f from "@element-plus/icons-vue";
import { LSButtonGroup as p, LSButton as L } from "../../../../button/index.js";
import S from "../../../../descriptions/index.js";
import { LSForm as n, LSFormItem as s } from "../../../../form/index.js";
import c from "../../../../table/index.js";
import a from "../../../../upload/index.js";
import l from "../../../../preview/index.js";
import u from "../../../../menu/index.js";
import P from "../../../../icon/index.js";
import v from "../../../../confirm/index.js";
import B from "../../../../chart/index.js";
import b from "../../../../breadcrumb/index.js";
import d from "../../../../bellMessage/index.js";
import w from "../../../../live/index.js";
import k from "../../../../tree/index.js";
import x from "../../../../print/index.js";
import y from "../../../../containerBox/index.js";
import I from "../../../../backTop/index.js";
import g from "../../../../map/index.js";
import C from "../../../../editor/index.js";
import D from "../../../../dialog/index.js";
import M from "../../../../layout/index.js";
import T from "../../../../list/index.js";
import j from "../../../../preview_image/index.js";
import E from "../../../../preview_docx/index.js";
import F from "../../../../preview_pdf/index.js";
import O from "../../../../preview_xlsx/index.js";
const t = {
  LSButtonGroup: p,
  LSButton: L,
  LSDescriptions: S,
  LSUpload: a,
  LSPreview: l,
  LSForm: n,
  LSFormItem: s,
  LSTable: c,
  LSMenu: u,
  LSIcon: P,
  LSConfirm: v,
  LSChart: B,
  LSBreadcrumb: b,
  LSBellMessage: d,
  LSLive: w,
  LSTree: k,
  LSPrint: x,
  LSContainerBox: y,
  LSBackTop: I,
  LSMap: g,
  LSEditor: C,
  LSDialog: D,
  LSLayout: M,
  LSList: T,
  LSPreviewImage: j,
  LSPreviewDocx: E,
  LSPreviewPdf: F,
  LSPreviewXlsx: O
}, h = /* @__PURE__ */ i((m) => {
  for (const [r, o] of Object.entries(f))
    m.component(r, o);
  for (const r of Object.keys(t)) {
    const o = t[r];
    m.component(o == null ? void 0 : o.name, o);
  }
}, "install"), So = {
  ...t,
  install: h
};
export {
  So as default
};

var Te = Object.defineProperty;
var s = (V, O) => Te(V, "name", { value: O, configurable: !0 });
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                            */
/* empty css                                                                                                                                              */
/* empty css                                                                                                                                            */
import { defineComponent as $e, useSlots as xe, useAttrs as Me, ref as ie, reactive as ne, watch as Y, computed as l, openBlock as r, createElementBlock as m, normalizeClass as B, unref as n, createVNode as oe, mergeProps as Re, createSlots as _e, withCtx as p, Fragment as h, createBlock as F, createElementVNode as D, toDisplayString as N, createTextVNode as T, createCommentVNode as q, renderSlot as I, toRefs as le } from "vue";
import { lsUploadProps as ze, UPLOAD_TYPE_MAP as Be, fileTypeMap as De, UPLOAD_STATUS_MAP as Ne, IMG_SUFFIX_LIST as qe } from "../types/index.js";
import { getVariable as Ie } from "../../_utils/config/index.js";
import { useNamespace as Ve } from "../../_hooks/useNamespace/index.js";
import L from "../../button/Button.vue/index.js";
import ae from "../../icon/Index.vue/index.js";
/* empty css                                                                                                                                           */
/* empty css                                                                                                                                             */
import { ElMessage as $ } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/message/index/index.js";
import { ElAvatar as Oe } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/avatar/index/index.js";
import { ElUpload as je } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/upload/index/index.js";
const Ge = { class: "ls-drag" }, He = { class: "drag-txt ls-color-brand6" }, Ke = {
  key: 0,
  class: "btn-picture-card"
}, We = {
  key: 0,
  class: "ls-tip"
}, ft = /* @__PURE__ */ $e({
  name: "LSUpload",
  inheritAttrs: !1,
  __name: "Index",
  props: ze,
  emits: ["uploadErrorFunc", "onChangeFunc", "httpResponseFunc"],
  setup(V, { expose: O, emit: se }) {
    const x = xe(), y = Me(), re = Ve("upload").b(), f = ie(), d = ie(!1), b = ne({
      isCover: !0,
      accept: "",
      disabled: !1
    }), u = ne({
      uploadFileList: [],
      initUploadStatus: !0,
      showPreview: !1,
      typePreview: "",
      sourcePreview: "",
      iconColor: Ie("colorText1")
    }), i = V, M = se;
    Y(
      () => y["file-list"],
      (e) => {
        u.uploadFileList = e || [];
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    const U = l(() => {
      var e, t;
      return (((e = i == null ? void 0 : i.item) == null ? void 0 : e.isToast) || typeof ((t = i == null ? void 0 : i.item) == null ? void 0 : t.isToast)) === "undefined";
    }), v = l(() => {
      var t;
      const e = (t = i == null ? void 0 : i.item) == null ? void 0 : t.isCover;
      return typeof e > "u" ? !0 : e;
    }), k = l(() => y.multiple), C = l(() => {
      const e = y["auto-upload"];
      return typeof e > "u" ? !0 : e;
    }), ue = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.emptyFileMsg) || "";
    }), j = l(() => y["list-type"]), R = l(() => j.value === Be.picCard), ce = l(() => !j.value || j.value == "text"), P = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.limitFile) || [];
    }), de = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.limitFileMsg) || "";
    }), w = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.limitSize) || 2;
    }), fe = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.limitSizeMsg) || "";
    }), G = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.limitUnit) || "MB";
    }), me = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.limitNumMsg) || "";
    }), J = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.profile) || !1;
    }), A = l(() => y.drag), ve = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.hideCoverBtn) && v.value && u.uploadFileList.length > 0;
    }), S = l(() => y.disabled), H = l(() => {
      const e = R.value ? "图片" : "文件";
      let t = `选择${e}`;
      return d.value ? t = "正在上传..." : v.value && !k.value ? C.value ? u.initUploadStatus ? t = "点击上传" : t = "重新上传" : u.initUploadStatus ? t = `选择${e}` : t = "重新上传" : C.value && (t = "点击上传"), t;
    }), ge = l(() => {
      let e = "不限制上传格式，";
      return R.value && (e = "文件须为图片格式，"), `${e}文件大小不超过${w.value}${G.value}`;
    }), pe = l(() => {
      var e;
      return ((e = i == null ? void 0 : i.item) == null ? void 0 : e.tipContent) || "";
    }), K = l(() => {
      var e;
      return (e = i == null ? void 0 : i.item) == null ? void 0 : e.httpRequestFunc;
    });
    Y(
      [v, K],
      ([e, t]) => {
        b.isCover = e, t && t instanceof Function && (b["http-request"] = Le);
      },
      {
        immediate: !0,
        deep: !0
      }
    ), Y(
      () => P.value,
      (e) => {
        e && e.length > 0 && Fe(e);
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function Fe(e) {
      b.accept = "", e.forEach((t) => {
        const o = De[t] || "";
        o && (b.accept && (b.accept += ","), b.accept += o);
      });
    }
    s(Fe, "updateFileAccept");
    function E(e) {
      const { formRuleFunc: t, formValidateFunc: o } = le(i == null ? void 0 : i.item);
      if (t && t.value instanceof Function && o && o.value instanceof Function) {
        const a = t.value(), { message: c } = a;
        a.message = e, o.value(), a.message = c;
      }
      M("uploadErrorFunc", e);
    }
    s(E, "validateForm");
    function ye(e, t) {
      if (d.value = !1, i.onExceed)
        return i.onExceed(e, t);
      const o = `当前限制选择 ${y.limit} 个文件，本次选择了 ${e.length} 个文件，共选择了 ${e.length + t.length} 个文件` || me.value;
      U.value ? setTimeout(() => {
        $.warning(o);
      }, 200) : E(o);
    }
    s(ye, "onExceedAction");
    function be(e) {
      if (i.beforeUpload) {
        const o = i.beforeUpload(e);
        return o && v.value && !k.value && _(), o;
      }
      const t = W(e, !0);
      return t && C.value && v.value && !k.value && _(), t;
    }
    s(be, "beforeUploadAction");
    function W(e, t) {
      let o = !0;
      const { size: a, name: c } = e, X = P.value.length > 0 && !Q(c);
      let z = !1;
      switch (G.value) {
        case "KB":
          z = a / 1024 > w.value;
          break;
        case "MB":
          z = a / 1024 / 1024 > w.value;
          break;
        default:
          z = a / 1024 / 1024 / 1024 > w.value;
          break;
      }
      if (X) {
        const g = de.value || `上传文件 ${e.name} 只能是 ${P.value.filter((Ee) => Ee).join("，").toLocaleLowerCase()} 格式！`;
        U.value && t ? setTimeout(() => {
          $.error(g);
        }, 200) : E(g), o = !1;
      }
      if (z) {
        const g = fe.value || `上传文件 ${e.name} 大小不能超过 ${w.value}${G.value}！`;
        U.value && t ? setTimeout(() => {
          $.error(g);
        }, 200) : E(g), o = !1;
      }
      if (R.value && !Q(c, qe)) {
        const g = `上传文件 ${e.name} 不是图片格式的文件！`;
        U.value && t ? setTimeout(() => {
          $.error(g);
        }, 200) : E(g), o = !1;
      }
      return o;
    }
    s(W, "validateUploadFile");
    function Q(e, t) {
      let o = [];
      if (P.value.length > 0 ? o = P.value : t && (o = t), o.length <= 0)
        return !0;
      for (let a = 0; a < o.length; a++) {
        const c = (o[a] || "").toLowerCase();
        if (e.toLowerCase().endsWith(c))
          return !0;
      }
      return !1;
    }
    s(Q, "fileTypeMatch");
    function _(e, t) {
      u.uploadFileList.splice(e || 0, t || u.uploadFileList.length - 1);
    }
    s(_, "updateCoverFileList");
    function he(e, t) {
      u.uploadFileList = t;
      const o = e.raw && W(e.raw, !C.value);
      if (o && v.value && !k.value && _(), i.onChange)
        return i.onChange(e, t);
      const { size: a } = e;
      if (a <= 0) {
        Z();
        const c = ue.value || "禁止上传空文件，请检查后重新上传！";
        U.value ? $.error(c) : E(c);
        return;
      }
      e.raw && (!C.value && !o ? Z() : (e.blob = URL.createObjectURL(e.raw) || "", M("onChangeFunc", e)));
    }
    s(he, "onChangeAction");
    function Z() {
      let e = 0;
      u.uploadFileList.length > 1 && (e = u.uploadFileList.length - 1), _(e, 1), M("onChangeFunc", {});
    }
    s(Z, "setChangeRes");
    function ke(e, t, o) {
      d.value = !1, u.initUploadStatus = !1;
      const { formRuleFunc: a, formValidateFunc: c } = le(i == null ? void 0 : i.item);
      if (a && a.value instanceof Function && c && c.value instanceof Function && c.value(), i.onSuccess)
        return i.onSuccess(e, t, o);
    }
    s(ke, "onSuccessAction");
    function Ce(e, t, o) {
      if (d.value = !1, i.onError)
        return i.onError(e, t, o);
    }
    s(Ce, "onErrorAction");
    function Se(e, t) {
      if (u.initUploadStatus = !t.length, u.uploadFileList = u.uploadFileList.filter((o) => o.uid === e.uid || o.name === e.name ? null : o), i.onRemove)
        return i.onRemove(e, t);
    }
    s(Se, "onRemoveAction");
    async function Le(e) {
      const { file: t } = e;
      if (!t)
        return;
      const { size: o } = t;
      if (o <= 0 || !W(t, !1))
        return;
      if (i.httpRequest)
        return i.httpRequest(e);
      const a = new FormData();
      if (a.append("file", t), K.value instanceof Function) {
        d.value = !0;
        let c = {};
        try {
          c = await K.value(a);
        } catch (X) {
          c = X;
        } finally {
          d.value = !1, M("httpResponseFunc", c);
        }
      }
    }
    s(Le, "httpRequestAction");
    function ee() {
      let e = !1;
      for (let t = 0; t < u.uploadFileList.length; t++)
        if (u.uploadFileList[t].status === Ne.ready) {
          e = !0;
          break;
        }
      return e;
    }
    s(ee, "hasReadyFile");
    function te() {
      var e;
      (e = f == null ? void 0 : f.value) == null || e.submit();
    }
    s(te, "comfirmUpload");
    function Ue(e) {
      f == null || f.value.handleRemove(e);
    }
    s(Ue, "removeFile");
    function Pe() {
      u.uploadFileList.forEach((e) => {
        var t;
        if (e)
          try {
            (t = f == null ? void 0 : f.value) == null || t.abort(e), Ue(e);
          } catch {
          }
      });
    }
    s(Pe, "cancelUpload");
    function we(e, t, o) {
      if (d.value = !0, i.onProgress)
        return i.onProgress(e, t, o);
    }
    s(we, "onProgressAction");
    function Ae(e) {
      if (i.onPreview)
        return i.onPreview(e);
    }
    return s(Ae, "onPreviewAction"), O({
      uploadRef: f
    }), (e, t) => {
      const o = Oe, a = je;
      return r(), m("div", {
        class: B([n(re), n(A) ? "ls-upload-drag" : "", n(J) ? "ls-profile" : "", n(ve) ? "hide-cover-btn" : ""])
      }, [
        oe(a, Re({
          ref_key: "uploadRef",
          ref: f
        }, Object.assign(n(b), e.$attrs), {
          "on-exceed": ye,
          "before-upload": be,
          "on-change": he,
          "on-success": ke,
          "on-error": Ce,
          "on-remove": Se,
          "on-progress": we,
          "on-preview": Ae
        }), _e({
          trigger: p(() => [
            n(J) ? e.item.defProfile && n(u).uploadFileList.length < 1 ? (r(), F(o, {
              key: 1,
              size: 60,
              src: e.item.defProfile,
              fit: "contain"
            }, null, 8, ["src"])) : q("", !0) : (r(), m(h, { key: 0 }, [
              n(x).trigger ? I(e.$slots, "trigger", { key: 1 }, void 0, !0) : (r(), m(h, { key: 0 }, [
                n(A) ? (r(), m(h, { key: 0 }, [
                  n(d) ? (r(), F(L, {
                    key: 0,
                    text: "",
                    loading: n(d),
                    disabled: n(S)
                  }, null, 8, ["loading", "disabled"])) : (r(), F(ae, {
                    key: 1,
                    class: "upload-icon",
                    name: "UploadFilled",
                    size: "56",
                    color: "#E7E7E7"
                  })),
                  D("div", Ge, [
                    D("div", He, N(n(H)), 1),
                    n(d) ? q("", !0) : (r(), m(h, { key: 0 }, [
                      t[0] || (t[0] = T("   /   ")),
                      t[1] || (t[1] = D("div", { class: "drag-txt ls-color-text2" }, "拖拽到此区域", -1))
                    ], 64))
                  ])
                ], 64)) : (r(), m(h, { key: 1 }, [
                  n(R) ? (r(), m("div", Ke, [
                    n(d) ? (r(), F(L, {
                      key: 0,
                      text: "",
                      loading: n(d),
                      disabled: n(S)
                    }, null, 8, ["loading", "disabled"])) : (r(), F(ae, {
                      key: 1,
                      class: "upload-btn-plus",
                      name: "Plus",
                      size: 28,
                      color: n(u).iconColor
                    }, null, 8, ["color"])),
                    D("div", null, N(n(H)), 1)
                  ])) : (r(), F(L, {
                    key: 1,
                    plain: "",
                    icon: "upload",
                    loading: n(d),
                    disabled: n(S)
                  }, {
                    default: p(() => [
                      T(N(n(H)), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled"]))
                ], 64))
              ], 64))
            ], 64))
          ]),
          default: p(() => [
            n(x).default ? I(e.$slots, "default", { key: 1 }, void 0, !0) : (r(), m(h, { key: 0 }, [
              !n(C) && (n(ce) || n(A)) ? (r(), m("div", {
                key: 0,
                class: B(["upload-btn-handle", [n(A) ? "drag-css" : "nor-css", !n(v) || n(k) ? "multi-css" : ""]])
              }, [
                n(A) ? (r(), m(h, { key: 1 }, [
                  !n(v) || n(k) ? (r(), F(L, {
                    key: 0,
                    type: "primary",
                    loading: n(d),
                    disabled: n(S),
                    onClick: Pe,
                    class: "ls-upload-btn-com ls-upload-btn-cancel"
                  }, {
                    default: p(() => t[3] || (t[3] = [
                      T("取消上传")
                    ])),
                    _: 1
                  }, 8, ["loading", "disabled"])) : q("", !0),
                  oe(L, {
                    class: B(["start-upload ls-upload-btn-com ls-upload-btn-comfirm", { "is-ready": ee() }]),
                    type: "primary",
                    loading: n(d),
                    disabled: n(S),
                    onClick: te
                  }, {
                    default: p(() => t[4] || (t[4] = [
                      T("开始上传")
                    ])),
                    _: 1
                  }, 8, ["class", "loading", "disabled"])
                ], 64)) : (r(), F(L, {
                  key: 0,
                  type: "primary",
                  class: B(["ls-upload-btn-com ls-upload-btn-comfirm", { "is-ready": ee() }]),
                  loading: n(d),
                  disabled: n(S),
                  onClick: te
                }, {
                  default: p(() => t[2] || (t[2] = [
                    T("开始上传 ")
                  ])),
                  _: 1
                }, 8, ["class", "loading", "disabled"]))
              ], 2)) : q("", !0)
            ], 64))
          ]),
          tip: p(() => [
            n(x).tip ? I(e.$slots, "tip", { key: 1 }, void 0, !0) : (r(), m("div", We, N(n(pe) || n(ge)), 1))
          ]),
          _: 2
        }, [
          n(x).file ? {
            name: "file",
            fn: p(() => [
              I(e.$slots, "file", {}, void 0, !0)
            ]),
            key: "0"
          } : void 0
        ]), 1040)
      ], 2);
    };
  }
});
export {
  ft as default
};

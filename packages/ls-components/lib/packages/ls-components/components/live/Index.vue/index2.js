var P = Object.defineProperty;
var r = (p, m) => P(p, "name", { value: m, configurable: !0 });
import { defineComponent as b, useAttrs as R, ref as o, computed as k, onMounted as B, onUnmounted as F, openBlock as M, createElementBlock as V, normalizeClass as g, unref as d, createElementVNode as x } from "vue";
import { useNamespace as I } from "../../_hooks/useNamespace/index.js";
import f from "../../../../../node_modules/.pnpm/flv.js@1.6.2/node_modules/flv.js/dist/flv/index.js";
import { lsLiveProps as N } from "../types/index.js";
/* empty css                                                                                                                                          */
/* empty css                                                                                                                                           */
/* empty css                                                                                                                                             */
import { ElMessage as T } from "../../../../../node_modules/.pnpm/element-plus@2.8.1_vue@3.5.13_typescript@5.5.4_/node_modules/element-plus/es/components/message/index/index.js";
const z = ["autoplay", "controls", "muted"], O = b({
  name: "LSLive"
}), U = /* @__PURE__ */ b({
  ...O,
  props: N,
  setup(p, { expose: m }) {
    const u = p, h = R(), A = I("live").b(), l = o(""), s = o(0), e = o(null), n = o(), y = o({
      // 是否自动播放
      autoplay: !1,
      // 是否显示控制条
      controls: !0,
      // 是否静音
      muted: !0
    }), v = o(h.autoplay == null ? !0 : h.autoplay), L = k(() => u.type === "flv");
    function E() {
      var t, a, i, S;
      s.value = 0, e.value && ((t = e.value) == null || t.pause(), (a = e.value) == null || a.unload(), (i = e.value) == null || i.detachMediaElement(), (S = e.value) == null || S.destroy(), e.value = null);
    }
    r(E, "destoryPlayer");
    function C() {
      v.value && e.value && L.value && (e.value.on(f.Events.ERROR, () => {
        l.value && c(l.value);
      }), e.value.on(f.Events.STATISTICS_INFO, function(t) {
        const { decodedFrames: a } = t || {};
        if (s.value === 0) {
          s.value = a;
          return;
        }
        s.value != a ? s.value = a : l.value && c(l.value);
      }));
    }
    r(C, "listenPlayer");
    async function c(t) {
      var a, i;
      E(), f.isSupported() && t ? (l.value = t, e.value = f.createPlayer(
        {
          type: u.type,
          // 媒体类型，默认是 flv or mp4,
          isLive: u.isLive,
          // 是否是直播流
          hasAudio: u.hasAudio,
          // 是否有音频
          hasVideo: u.hasVideo,
          // 是否有视频
          url: t
          // 流地址
        },
        {
          autoCleanupSourceBuffer: !0,
          enableWorker: !1,
          enableStashBuffer: !0,
          isLive: u.isLive,
          lazyLoad: !1
        }
      ), e.value && n.value && (e.value.attachMediaElement(n.value), e.value.load(), v.value ? (a = e.value) == null || a.play() : (i = e.value) == null || i.pause(), C())) : T.error("不支持播放视频");
    }
    r(c, "createPlayer");
    function _() {
      document.visibilityState === "visible" ? l.value && L.value && c(l.value) : L.value && E();
    }
    return r(_, "updateVisibilityStatus"), B(() => {
      document.addEventListener("visibilitychange", _), n.value.addEventListener("play", () => {
        v.value = !0;
      }), n.value.addEventListener("pause", () => {
        v.value = !1;
      });
    }), F(() => {
      document.removeEventListener("visibilitychange", _);
    }), m({
      createPlayer: c
    }), (t, a) => (M(), V("div", {
      class: g(d(A))
    }, [
      x("video", {
        autoplay: d(y).autoplay,
        controls: d(y).controls,
        muted: d(y).muted,
        width: "100%",
        class: "ls-video",
        ref_key: "lsLiveRef",
        ref: n
      }, null, 8, z)
    ], 2));
  }
});
export {
  U as default
};

var D = Object.defineProperty;
var s = (u, p) => D(u, "name", { value: p, configurable: !0 });
import { defineComponent as y, ref as d, computed as I, watch as v, nextTick as x, onMounted as P, onUnmounted as W, openBlock as b, createElementBlock as M, unref as f, normalizeClass as O, normalizeStyle as $ } from "vue";
import B from "../../../../../node_modules/.pnpm/@amap_amap-jsapi-loader@1.0.1/node_modules/@amap/amap-jsapi-loader/dist/index/index.js";
import { useNamespace as E } from "../../_hooks/useNamespace/index.js";
import { lsMapProps as K } from "../types/index.js";
import T from "../mark_icon.png/index.js";
const j = ["id"], J = y({
  name: "LSMap"
}), G = /* @__PURE__ */ y({
  ...J,
  props: K,
  setup(u) {
    const C = E("map").b(), e = u, h = d(`lsMapContainer${(/* @__PURE__ */ new Date()).getTime()}`), n = d(null), m = d(null), L = I(() => ({
      width: `${e.width}`,
      height: `${e.height}`
    }));
    v(
      () => e.securityCode,
      (o) => {
        window._AMapSecurityConfig = {
          securityJsCode: o
        };
      },
      {
        immediate: !0,
        deep: !0
      }
    );
    function z() {
      e.mapKey && B.load({
        key: e.mapKey,
        // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",
        // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.DistrictSearch"]
        // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((o) => {
        m.value = o, e.searchWord ? new o.DistrictSearch({ subdistrict: 0, level: "district", extensions: "all" }).search(e.searchWord, function(r, a) {
          k(o, a);
        }) : k(o);
      });
    }
    s(z, "initMap");
    function k(o, t) {
      n.value = new o.Map(h.value, {
        center: e.center,
        zoom: e.zoom,
        zooms: e.zooms,
        expandZoomRange: !0
      }), n.value && _(o, n, t);
    }
    s(k, "createMap");
    function _(o, t, r) {
      var a;
      if (r) {
        const i = [
          new o.LngLat(-360, 90, !0),
          new o.LngLat(-360, -90, !0),
          new o.LngLat(360, -90, !0),
          new o.LngLat(360, 90, !0)
        ], c = ((a = r == null ? void 0 : r.districtList[0]) == null ? void 0 : a.boundaries) || [], l = [i];
        l.push.apply(l, c);
        const g = new o.Polygon({
          pathL: l,
          strokeColor: e.areaColor,
          strokeWeight: 0,
          fillColor: e.areaColor,
          fillOpacity: 1
        });
        g.setPath(l), t.value.add(g);
      }
      e.showMarker && w(o, t);
    }
    s(_, "createArea");
    function S(o) {
      const t = new o.Size(e.markerIconSize[0], e.markerIconSize[1]);
      return new o.Icon({
        size: t,
        //图标尺寸
        image: e.markerIcon || T,
        //Icon 的图像
        imageSize: t
      });
    }
    s(S, "createMarkerIcon");
    function w(o, t) {
      const r = S(o);
      (e.markerList || []).forEach((a) => {
        const i = new o.Marker({
          position: a.lnglat,
          icon: r
        });
        if (e.showMarkerDialog && e.markerDialogContent) {
          const c = new o.InfoWindow({
            isCustom: !0,
            content: e.markerDialogContent,
            anchor: e.markerDialogAnchor,
            offset: new o.Pixel(e.markerDialogOffset[0], e.markerDialogOffset[1])
          });
          i.on("mouseover", () => {
            c.open(t.value, i.getPosition());
          }), i.on("mouseout", () => {
            c.close();
          });
        }
        t.value.add(i);
      });
    }
    return s(w, "addMarker"), v(
      () => e.markerList,
      async () => {
        await x(), m.value && n.value && e.showMarker && w(m.value, n);
      },
      {
        deep: !0
      }
    ), P(() => {
      z();
    }), W(() => {
      n.value && n.value.destroy();
    }), (o, t) => (b(), M("div", {
      id: f(h),
      class: O(f(C)),
      style: $(f(L))
    }, null, 14, j));
  }
});
export {
  G as default
};

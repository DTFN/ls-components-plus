var a = Object.defineProperty;
var e = (t, r) => a(t, "name", { value: r, configurable: !0 });
import { buildProps as l } from "../../_utils/runtime/index.js";
const p = l({
  securityCode: {
    type: String,
    required: !0
  },
  mapKey: {
    type: String,
    required: !0
  },
  width: {
    type: String,
    default: "100%"
  },
  height: {
    type: String,
    default: "300px"
  },
  searchWord: {
    type: String,
    default: ""
  },
  center: {
    type: [Array, null],
    default: /* @__PURE__ */ e(() => null, "default")
  },
  zoom: {
    type: Number,
    default: 14
  },
  zooms: {
    type: Array,
    default: [10, 20]
  },
  // 绘制区域color
  areaColor: {
    type: String,
    default: "#9BCFFA"
  },
  // 是否显示标记
  showMarker: {
    type: Boolean,
    default: !1
  },
  // 标记列表 lnglat array [经度,纬度]
  markerList: {
    type: Array,
    default: /* @__PURE__ */ e(() => [], "default")
  },
  markerIcon: {
    type: Object,
    default: null
  },
  // 标记图标
  markerIconSize: {
    type: Array,
    default: /* @__PURE__ */ e(() => [19, 32], "default")
  },
  // 是否点击marker显示弹窗
  showMarkerDialog: {
    type: Boolean,
    default: !1
  },
  // 弹窗内容 html标签格式 样式自定义
  markerDialogContent: {
    type: String,
    default: ""
  },
  //  'top-left'、'top-center'、'top-right'、'middle-left'、'center'、'middle-right'、'bottom-left'、'bottom-center'、'bottom-right'
  markerDialogAnchor: {
    type: String,
    default: "middle-left"
  },
  markerDialogOffset: {
    type: Array,
    default: /* @__PURE__ */ e(() => [30, 0], "default")
  }
});
export {
  p as lsMapProps
};

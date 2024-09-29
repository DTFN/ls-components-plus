import { buildProps } from '@cpo/_utils/runtime';

export const lsMapProps = buildProps({
  securityCode: {
    type: String,
    required: true
  },
  mapKey: {
    type: String,
    required: true
  },
  searchWord: {
    type: String,
    default: ''
  },
  center: {
    type: Array,
    default: () => []
  },
  zoom: {
    type: Number,
    default: 16
  },
  zooms: {
    type: Number,
    default: [10, 20]
  },
  // 绘制区域color
  areaColor: {
    type: String,
    default: '#9BCFFA'
  },
  // 是否显示标记
  showMarker: {
    type: Boolean,
    default: true
  },
  markerIcon: {
    type: Object,
    default: null
  },
  // 标记图标
  markerIconSize: {
    type: Array,
    default: () => [19, 32]
  },
  // 是否点击marker显示弹窗
  showMarkerDialog: {
    type: Boolean,
    default: false
  },
  // 标记列表 lnglat 坐标位置
  markerList: {
    type: Array<any>,
    default: () => []
  },
  // 弹窗内容 html标签格式 样式自定义
  markerDialogContent: {
    type: Array<any>,
    default: []
  }
});

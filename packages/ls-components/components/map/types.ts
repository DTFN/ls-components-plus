import { buildProps } from '@cpo/_utils/runtime';

type AnchorType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export const lsMapProps = buildProps({
  // 0：高德 1：腾讯
  type: {
    type: Number,
    default: 0
  },
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
    type: [Array, null],
    default: () => null
  },
  zoom: {
    type: Number,
    default: 16
  },
  zooms: {
    type: Array<number>,
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
  // 标记列表 lnglat array [经度,纬度]
  markerList: {
    type: Array<any>,
    default: () => []
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
  // 弹窗内容 html标签格式 样式自定义
  markerDialogContent: {
    type: String,
    default: ''
  },
  //  'top-left'、'top-center'、'top-right'、'middle-left'、'center'、'middle-right'、'bottom-left'、'bottom-center'、'bottom-right'
  markerDialogAnchor: {
    type: String as PropType<AnchorType>,
    default: 'middle-left'
  },
  markerDialogOffset: {
    type: Array,
    default: () => [30, 0]
  }
});

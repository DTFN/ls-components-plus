/**
 * @file 地图组件类型定义
 * @description 定义地图组件的props类型和接口
 */

import { buildProps } from '@cpo/_utils/runtime';
import type { PropType } from 'vue';

/**
 * 标记锚点类型
 * @typedef {'top-left' | 'top-center' | 'top-right' | 'middle-left' | 'center' | 'middle-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'} MarkerAnchorType
 */
export type MarkerAnchorType =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

/**
 * 地图组件props
 * @typedef {Object} lsMapProps
 * @property {string} securityCode - 安全码，必填
 * @property {string} mapKey - 地图key，必填
 * @property {string} width - 地图宽度，默认为'100%'
 * @property {string} height - 地图高度，默认为'300px'
 * @property {string} searchWord - 搜索关键词，默认为''
 * @property {Array|null} center - 中心点坐标，默认为null
 * @property {number} zoom - 缩放级别，默认为14
 * @property {Array<number>} zooms - 缩放范围，默认为[10, 20]
 * @property {string} areaColor - 绘制区域颜色，默认为'#9BCFFA'
 * @property {boolean} showMarker - 是否显示标记，默认为false
 * @property {Array<any>} markerList - 标记列表，默认为[]
 * @property {Object} markerIcon - 标记图标，默认为null
 * @property {Array} markerIconSize - 标记图标大小，默认为[19, 32]
 * @property {boolean} showMarkerDialog - 是否显示标记弹窗，默认为false
 * @property {string} markerDialogContent - 标记弹窗内容，默认为''
 * @property {MarkerAnchorType} markerDialogAnchor - 标记弹窗锚点，默认为'middle-left'
 * @property {Array} markerDialogOffset - 标记弹窗偏移量，默认为[30, 0]
 */
export const lsMapProps = buildProps({
  /** 安全码 */
  securityCode: {
    type: String,
    required: true
  },
  /** 地图key */
  mapKey: {
    type: String,
    required: true
  },
  /** 地图宽度 */
  width: {
    type: String,
    default: '100%'
  },
  /** 地图高度 */
  height: {
    type: String,
    default: '300px'
  },
  /** 搜索关键词 */
  searchWord: {
    type: String,
    default: ''
  },
  /** 中心点坐标 */
  center: {
    type: [Array, null],
    default: () => null
  },
  /** 缩放级别 */
  zoom: {
    type: Number,
    default: 14
  },
  /** 缩放范围 */
  zooms: {
    type: Array<number>,
    default: [10, 20]
  },
  /** 绘制区域颜色 */
  areaColor: {
    type: String,
    default: '#9BCFFA'
  },
  /** 是否显示标记 */
  showMarker: {
    type: Boolean,
    default: false
  },
  /** 标记列表 [经度,纬度] */
  markerList: {
    type: Array<any>,
    default: () => []
  },
  /** 标记图标 */
  markerIcon: {
    type: Object,
    default: null
  },
  /** 标记图标大小 */
  markerIconSize: {
    type: Array,
    default: () => [19, 32]
  },
  /** 是否点击marker显示弹窗 */
  showMarkerDialog: {
    type: Boolean,
    default: false
  },
  /** 弹窗内容 html标签格式 */
  markerDialogContent: {
    type: String,
    default: ''
  },
  /** 弹窗锚点位置 */
  markerDialogAnchor: {
    type: String as PropType<MarkerAnchorType>,
    default: 'middle-left'
  },
  /** 弹窗偏移量 */
  markerDialogOffset: {
    type: Array,
    default: () => [30, 0]
  }
});

/**
 * @file 面包屑组件类型定义
 * @description 定义面包屑组件的props类型和数据结构
 */

import { buildProps } from '@cpo/_utils/runtime';
import type { PropType } from 'vue';

/**
 * 面包屑项类型
 * @typedef {Object} BreadCrumpType
 * @property {string} title - 标题
 * @property {string} [name] - 名称
 * @property {string} [link] - 链接地址
 * @property {any} [query] - 查询参数
 */
export type BreadCrumpType = {
  title: string;
  name?: string;
  link?: string;
  query?: any;
};

/**
 * 面包屑列表类型
 * @typedef {Array<BreadCrumpType>} BreadCrumpListType
 */
export type BreadCrumpListType = BreadCrumpType[];

/**
 * 面包屑组件 props
 * @typedef {Object} lsBreadcrumbProp
 * @property {BreadCrumpListType} defineList - 自定义面包屑数据；未传时默认读取当前路由 `meta.bcList`
 * @property {boolean} showPos - 是否显示当前位置前缀，默认为 true
 * @property {string} posTitle - 当前位置前缀文案，默认为 '当前位置'
 */
export const lsBreadcrumbProp = buildProps({
  /** 自定义面包屑内容 */
  defineList: {
    type: Array as PropType<BreadCrumpListType>,
    default: () => []
  },
  /** 是否显示位置提示 */
  showPos: {
    type: Boolean,
    default: true
  },
  /** 位置提示文字 */
  posTitle: {
    type: String,
    default: '当前位置'
  }
});

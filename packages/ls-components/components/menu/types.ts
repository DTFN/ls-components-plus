/**
 * @file 菜单组件类型定义
 * @description 定义菜单组件的props类型、接口和事件
 */

import { buildProps } from '@cpo/_utils/runtime';
import { IconConfigType } from '@cpo/_types';
import { LocationQueryRaw } from 'vue-router';

/**
 * 菜单基础类型
 * @typedef {Object} MenuBaseType
 * @property {string} title - 菜单标题
 * @property {string} [name] - 菜单名称
 * @property {string} [path] - 菜单路径
 * @property {string} [key] - 菜单key
 * @property {string} [cpoPath] - 组件路径
 * @property {IconConfigType} [iconConfig] - 图标配置
 * @property {boolean} [leaf] - 是否为叶子节点
 * @property {boolean} [hideMenu] - 是否隐藏菜单
 * @property {string} [redirect] - 重定向路径
 * @property {string|number} [pCode] - 父级code
 * @property {string} [iconSlot] - 图标插槽
 * @property {boolean} [defJump] - 是否默认跳转
 * @property {string} [link] - 外部链接
 * @property {Array<MenuBaseType>} [children] - 子菜单
 * @property {String} [icon] - 图标
 * @property {any} [meta] - 元数据
 */
export type MenuBaseType = {
  title: string;
  name?: string;
  path?: string;
  key?: string;
  cpoPath?: string;
  iconConfig?: IconConfigType;
  leaf?: boolean;
  hideMenu?: boolean;
  redirect?: string;
  pCode?: string | number;
  iconSlot?: string;
  defJump?: boolean;
  link?: string;
  children?: Array<MenuBaseType>;
  icon?: String;
  meta?: any;
};

/**
 * 面包屑列表项类型
 * @typedef {Object} BCListItemType
 * @property {string} title - 标题
 * @property {string} [name] - 名称
 */
export type BCListItemType = {
  title: string;
  name?: string;
};

/**
 * 菜单面包屑列表类型
 * @typedef {Object} MenuBCListType
 * @property {Array<BCListItemType>} [bcList] - 面包屑列表
 */
export type MenuBCListType = {
  bcList?: Array<BCListItemType>;
};

/**
 * 配置项类型接口
 * @interface ConfigItemType
 * @extends MenuBaseType
 * @extends MenuBCListType
 */
export interface ConfigItemType extends MenuBaseType, MenuBCListType {}

/**
 * 菜单项类型接口
 * @interface MenuItemType
 * @extends ConfigItemType
 * @property {Array<MenuBaseType>} [children] - 子菜单
 */
export interface MenuItemType extends ConfigItemType {
  children?: Array<MenuBaseType>;
}

/**
 * 跳转参数类型
 * @typedef {Object} JumpParamsType
 * @property {string|symbol} [name] - 路由名称
 * @property {string} [title] - 标题
 * @property {string} [path] - 路径
 * @property {LocationQueryRaw} [query] - 查询参数
 * @property {string} [link] - 外部链接
 */
export type JumpParamsType = {
  name?: string | symbol;
  title?: string;
  path?: string;
  query?: LocationQueryRaw;
  link?: string;
};

/**
 * 分组选项类型
 * @typedef {Object} GroupOptionType
 * @property {number} id - ID
 * @property {number} groupId - 分组ID
 * @property {string} groupName - 分组名称
 */
export type GroupOptionType = {
  id: number;
  groupId: number;
  groupName: string;
};

/**
 * 菜单组件事件名
 * @constant {Array<string>}
 * @property {string} onJump - 跳转事件
 * @property {string} defineSubClick - 子菜单点击事件
 * @property {string} defineChildClick - 子项点击事件
 */
export const lsEmitNames = ['onJump', 'defineSubClick', 'defineChildClick'];

/**
 * 菜单组件props
 * @typedef {Object} lsMenuProps
 * @property {Array<MenuBaseType>} menuConfigList - 菜单配置列表，默认为[]
 * @property {boolean} needPermission - 是否需要权限控制，默认为false
 * @property {Array<string|number>} permissionList - 权限列表，默认为[]
 * @property {string} hoverColor - 悬停颜色，默认为''
 * @property {boolean} isDefineClick - 是否自定义点击事件，默认为false
 * @property {boolean} showTooltip - 是否显示提示，默认为true
 * @property {number} fontSize - 字体大小，默认为14
 */
export const lsMenuProps = buildProps({
  /** 菜单配置列表 */
  menuConfigList: {
    type: Array<MenuBaseType>,
    default: () => []
  },
  /** 是否需要权限控制 */
  needPermission: {
    type: Boolean,
    default: false
  },
  /** 权限列表 */
  permissionList: {
    type: Array<string | number>,
    default: () => []
  },
  /** 悬停颜色 */
  hoverColor: {
    type: String,
    default: ''
  },
  /** 是否自定义点击事件 */
  isDefineClick: {
    type: Boolean,
    default: false
  },
  /** 是否显示提示 */
  showTooltip: {
    type: Boolean,
    default: true
  },
  /** 字体大小 */
  fontSize: {
    type: Number,
    default: 14
  }
});

/**
 * 菜单项组件props
 * @typedef {Object} lsMenuItemProps
 * @property {boolean} needPermission - 是否需要权限控制，默认为true
 * @property {Array<string|number>} permissionList - 权限列表，默认为[]
 * @property {Object} item - 菜单项数据，必填
 * @property {boolean} isDefineClick - 是否自定义点击事件，默认为false
 * @property {boolean} showTooltip - 是否显示提示，默认为false
 */
export const lsMenuItemProps = buildProps({
  /** 是否需要权限控制 */
  needPermission: {
    type: Boolean,
    default: true
  },
  /** 权限列表 */
  permissionList: {
    type: Array<string | number>,
    default: () => []
  },
  /** 菜单项数据 */
  item: {
    type: Object,
    required: true,
    default: () => {
      return {};
    }
  },
  /** 是否自定义点击事件 */
  isDefineClick: {
    type: Boolean,
    default: false
  },
  /** 是否显示提示 */
  showTooltip: {
    type: Boolean,
    default: false
  }
});

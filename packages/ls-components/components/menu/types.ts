/**
 * @file 菜单组件类型定义
 * @description 定义菜单组件的props类型、接口和事件
 */

import { IconConfigType } from '@cpo/_types';
import { buildProps } from '@cpo/_utils/runtime';
import { LocationQueryRaw } from 'vue-router';

/**
 * 菜单配置基础类型
 * @typedef {Object} MenuBaseType
 * @property {string} title - 菜单名称
 * @property {string} [name] - 菜单路由 `name`
 * @property {string} [path] - 菜单路由 `path`
 * @property {string} [key] - 菜单 `key`；作为 `el-menu` 的索引值，需保持唯一
 * @property {string} [cpoPath] - `view` 层组件对应路径，用于动态路由生成
 * @property {IconConfigType} [iconConfig] - 菜单标题前面的图标配置，具体参考 `LSIcon`
 * @property {boolean} [leaf] - 是否为叶子菜单；为 `true` 时其 `children` 不参与菜单渲染
 * @property {boolean} [hideMenu] - 是否隐藏该菜单
 * @property {string} [redirect] - 重定向路径，访问当前菜单时会自动跳转到指定路径
 * @property {string|number} [pCode] - 权限 code，用于权限控制
 * @property {string} [iconSlot] - 菜单左侧图标插槽名，用于自定义图标
 * @property {boolean} [defJump] - 菜单点击自定义处理开关；为 `true` 时触发 `onJump`
 * @property {string} [link] - 外链地址；配置后会在新窗口打开，不走路由跳转
 * @property {Array<MenuBaseType>} [children] - 子菜单配置
 * @property {string} [icon] - 图标名称字符串；与 `iconConfig` 二选一
 * @property {any} [meta] - 路由元信息，可存放自定义数据
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
 * 组件事件名：`onJump` 用于 `defJump` 自定义跳转；`defineSubClick` / `defineChildClick` 用于 `isDefineClick` 模式下的菜单点击回调。
 */
export const lsEmitNames = ['onJump', 'defineSubClick', 'defineChildClick'];

/**
 * 菜单组件 props
 * @typedef {Object} lsMenuProps
 * @property {Array<MenuBaseType>} menuConfigList - 菜单配置列表，默认为 `[]`
 * @property {boolean} needPermission - 是否开启权限控制；为 `true` 时结合 `permissionList` 与菜单项 `pCode` 控制显示，默认为 `false`
 * @property {Array<string|number>} permissionList - 权限列表，内部存放 `pCode` 码，默认为 `[]`
 * @property {string} hoverColor - 菜单 hover 时的文字和图标颜色，默认为 `''`
 * @property {boolean} isDefineClick - 菜单点击是否自定义；为 `true` 时触发 `defineSubClick` 和 `defineChildClick`，默认为 `false`
 * @property {boolean} showTooltip - 鼠标移入菜单项时是否显示 tooltip 提示，默认为 `true`
 * @property {number} fontSize - 菜单字体大小；用于 tooltip 组件，默认为 `14`
 */
export const lsMenuProps = buildProps({
  /** 菜单配置列表 */
  menuConfigList: {
    type: Array<MenuBaseType>,
    default: () => []
  },
  /** 是否开启权限控制；为 `true` 时结合 `permissionList` 与菜单项 `pCode` 控制显示 */
  needPermission: {
    type: Boolean,
    default: false
  },
  /** 权限列表，内部存放 `pCode` 码 */
  permissionList: {
    type: Array<string | number>,
    default: () => []
  },
  /** 菜单 hover 时的文字和图标颜色 */
  hoverColor: {
    type: String,
    default: ''
  },
  /** 菜单点击是否自定义；为 `true` 时触发 `defineSubClick` 和 `defineChildClick` */
  isDefineClick: {
    type: Boolean,
    default: false
  },
  /** 鼠标移入菜单项时是否显示 tooltip 提示 */
  showTooltip: {
    type: Boolean,
    default: true
  },
  /** 菜单字体大小；用于 tooltip 组件 */
  fontSize: {
    type: Number,
    default: 14
  }
});

/**
 * 菜单项组件 props
 * @typedef {Object} lsMenuItemProps
 * @property {boolean} needPermission - 是否开启权限控制；为 `true` 时结合 `permissionList` 与 `item.pCode` 控制显示，默认为 `true`
 * @property {Array<string|number>} permissionList - 权限列表，默认为 `[]`
 * @property {MenuBaseType} item - 当前菜单项配置，必填
 * @property {boolean} isDefineClick - 是否启用自定义点击模式，默认为 `false`
 * @property {boolean} showTooltip - 是否为叶子菜单标题显示 tooltip，默认为 `false`
 */
export const lsMenuItemProps = buildProps({
  /** 是否开启权限控制；为 `true` 时结合 `permissionList` 与 `item.pCode` 控制显示 */
  needPermission: {
    type: Boolean,
    default: true
  },
  /** 权限列表 */
  permissionList: {
    type: Array<string | number>,
    default: () => []
  },
  /** 当前菜单项配置 */
  item: {
    type: Object,
    required: true,
    default: () => {
      return {};
    }
  },
  /** 是否启用自定义点击模式 */
  isDefineClick: {
    type: Boolean,
    default: false
  },
  /** 是否为叶子菜单标题显示 tooltip */
  showTooltip: {
    type: Boolean,
    default: false
  }
});

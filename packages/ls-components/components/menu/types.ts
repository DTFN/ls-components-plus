import { buildProps } from '@cpo/_utils/runtime';
import { LocationQueryRaw } from 'vue-router';

export const menuProps = buildProps({
  // jumpType: 1 跳转 2 打开新页面
  menuConfigList: {
    type: Array<any>,
    default: () => []
  },
  needPermission: {
    type: Boolean,
    default: false
  },
  permissionList: {
    type: Array<string | number>,
    default: () => []
  }
});

export const menuItemProps = buildProps({
  needPermission: {
    type: Boolean,
    default: true
  },
  permissionList: {
    type: Array<string | number>,
    default: () => []
  },
  item: {
    type: Object,
    required: true,
    default: () => {
      return {};
    }
  }
});

interface MenuBaseType {
  title: string;
  name: string;
  path: string;
  key?: string;
  cpoPath?: string;
  icon?: string;
  leaf?: boolean;
  hideMenu?: boolean;
  redirect?: string;
  pCode: string | number;
}

interface BCListItemType {
  title: string;
  name?: string;
}

interface MenuBCListType {
  bcList?: Array<BCListItemType>;
}

export interface ConfigItemType extends MenuBaseType, MenuBCListType {}

export interface MenuItemType extends ConfigItemType {
  children?: Array<MenuBaseType>;
}

export interface MenuItemsType extends ConfigItemType {
  children?: Array<MenuItemType>;
}

export interface MenuItem3Type extends MenuItemsType {
  children?: Array<MenuItemType>;
}

export type JumpParamsType = {
  name?: string | symbol;
  title?: string;
  path?: string;
  query?: LocationQueryRaw;
};

export type GroupOptionType = {
  id: number;
  groupId: number;
  groupName: string;
};

import { buildProps } from '@cpo/_utils/runtime';
import { IconConfigType } from '@cpo/_types';
import { LocationQueryRaw } from 'vue-router';

export type MenuBaseType = {
  title: string;
  name: string;
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
};

export type BCListItemType = {
  title: string;
  name?: string;
};

export type MenuBCListType = {
  bcList?: Array<BCListItemType>;
};

export interface ConfigItemType extends MenuBaseType, MenuBCListType {}

export interface MenuItemType extends ConfigItemType {
  children?: Array<MenuBaseType>;
}

export type JumpParamsType = {
  name?: string | symbol;
  title?: string;
  path?: string;
  query?: LocationQueryRaw;
  link?: string;
};

export type GroupOptionType = {
  id: number;
  groupId: number;
  groupName: string;
};

export const lsEmitNames = ['onJump', 'defineSubClick', 'defineChildClick'];

export const lsMenuProps = buildProps({
  menuConfigList: {
    type: Array<MenuBaseType>,
    default: () => []
  },
  needPermission: {
    type: Boolean,
    default: false
  },
  permissionList: {
    type: Array<string | number>,
    default: () => []
  },
  hoverColor: {
    type: String,
    default: ''
  },
  isDefineClick: {
    type: Boolean,
    default: false
  }
});

export const lsMenuItemProps = buildProps({
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
  },
  isDefineClick: {
    type: Boolean,
    default: false
  }
});

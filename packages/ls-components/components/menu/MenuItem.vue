<script setup lang="ts" name="LSMenuItem">
import LSIcon from '@cpo/icon/Index.vue';
import { lsEmitNames, lsMenuItemProps, MenuBaseType } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';

const { jumpRouteCom } = useRouterHook();

const emits = defineEmits(lsEmitNames);

const props = defineProps(lsMenuItemProps);

const jumpRoute = (index: string, item: MenuBaseType) => {
  if (props.isDefineClick) {
    defineChildClickFunc(index, item);
  } else {
    const { link, defJump } = item || {};
    if (defJump) {
      emits('onJump', item);
    } else {
      if (!link) {
        jumpRouteCom(item);
      } else {
        window.open(link, '_blank');
      }
    }
  }
};

function onJump(item: MenuBaseType) {
  emits('onJump', item);
}

function defineSubClickFunc(index: string, item: MenuBaseType) {
  if (props.isDefineClick) {
    emits('defineSubClick', index, item);
  }
}

function defineChildClickFunc(index: string, item: MenuBaseType) {
  if (props.isDefineClick) {
    emits('defineChildClick', index, item);
  }
}
</script>

<template id="menu-item">
  <template v-if="!needPermission || permissionList.includes(item.pCode)">
    <!-- 单个菜单项 -->
    <div v-if="!item.children || item.leaf" @click.stop>
      <el-menu-item :index="item['key']" :data-index="item['key']" @click="jumpRoute(item['key'], item as MenuBaseType)">
        <LSIcon v-bind="item.iconConfig">
          <template v-if="item.iconSlot" #default>
            <slot :name="item.iconSlot"> </slot>
          </template>
        </LSIcon>
        <template #title>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </div>
    <!-- 子菜单 -->
    <el-sub-menu
      v-else
      :index="item['key']"
      :data-index="item['key']"
      @click="defineSubClickFunc(item['key'], item as MenuBaseType)"
    >
      <template #title>
        <LSIcon v-bind="item.iconConfig">
          <template v-if="item.iconSlot" #default>
            <slot :name="item.iconSlot"> </slot>
          </template>
        </LSIcon>
        <span>{{ item.title }}</span>
      </template>
      <MenuItem
        v-for="child in item.children"
        :key="child['key']"
        :item="child"
        :permission-list="permissionList"
        :need-permission="needPermission"
        :is-define-click="isDefineClick"
        @on-jump="onJump"
        @define-sub-click="defineSubClickFunc"
        @define-child-click="defineChildClickFunc"
      />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>

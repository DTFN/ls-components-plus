<script setup lang="ts" name="LSMenuItem">
import LSIcon from '@cpo/icon/Index.vue';
import { lsEmitNames, lsMenuItemProps } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';

const { jumpRouteCom } = useRouterHook();

const emits = defineEmits(lsEmitNames);

const jumpRoute = (item: any) => {
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
};

defineProps(lsMenuItemProps);
</script>

<template id="menu-item">
  <template v-if="!needPermission || permissionList.includes(item.pCode)">
    <!-- 单个菜单项 -->
    <el-menu-item v-if="!item.children || item.leaf" :index="item['key']" @click="jumpRoute(item)">
      <LSIcon v-bind="item.iconConfig">
        <template v-if="item.iconSlot" #default>
          <slot :name="item.iconSlot"> </slot>
        </template>
      </LSIcon>
      <span>{{ item.title }}</span>
    </el-menu-item>
    <!-- 子菜单 -->
    <el-sub-menu v-else :index="item['key']">
      <template #title>
        <LSIcon v-bind="item.iconConfig" />
        <span>{{ item.title }}</span>
      </template>
      <MenuItem
        v-for="child in item.children"
        :key="child['key']"
        :item="child"
        :permission-list="permissionList"
        :need-permission="needPermission"
      />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts" name="LSMenuItem">
import LSIcon from '@cpo/icon/Index.vue';
import { menuItemProps } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';

const { jumpRouteCom } = useRouterHook();

const jumpRoute = (item: any) => {
  const { jumpType } = item || {};
  if (!jumpType) {
    jumpRouteCom(item);
  } else {
    window.open(item.link, '_blank');
  }
};

defineProps(menuItemProps);
</script>

<template id="menu-item">
  <template v-if="!needPermission || permissionList.includes(item.pCode)">
    <!-- 单个菜单项 -->
    <el-menu-item v-if="!item.children || item.leaf" :index="item['key']" @click="jumpRoute(item)">
      <LSIcon :name="item.icon" color="#FFF" />
      <span>{{ item.title }}</span>
    </el-menu-item>
    <!-- 子菜单 -->
    <el-sub-menu v-else :index="item['key']">
      <template #title>
        <LSIcon :name="item.icon" color="#FFF" />
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

<script setup lang="ts" name="LSMenuItem">
import { menuItemProps } from './types';
import useRouterHook from '@cpo/_hooks/useRouterHook';

const { jumpRouteCom } = useRouterHook();

const jumpRoute = jumpRouteCom;

defineProps(menuItemProps);
</script>

<template id="menu-item">
  <template v-if="!needPermission || permissionList.includes(item.pCode)">
    <!-- 单个菜单项 -->
    <el-menu-item v-if="!item.children || item.leaf" :index="item['key']" @click="jumpRoute(item)">
      <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
      <span>{{ item.title }}</span>
    </el-menu-item>
    <!-- 子菜单 -->
    <el-sub-menu v-else :index="item['key']">
      <template #title>
        <el-icon v-if="item.icon"><component :is="item.icon" /></el-icon>
        <span>{{ item.title }}</span>
      </template>
      <menu-item
        v-for="child in item.children"
        :key="child['key']"
        :item="child"
        :permission-list="permissionList"
        :need-permission="needPermission"
        @jump-route="jumpRoute(child)"
      />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>

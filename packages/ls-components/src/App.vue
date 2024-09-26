<script setup lang="ts">
// import { useRouterHook } from '@cpo/main';
import { useRouterHook } from '../lib/';
import { RouterView } from 'vue-router';
import { MENU_LIST } from './constant/index';

const router = useRouter();

const { getMenusByAuth }: any = useRouterHook();

const routesModule = import.meta.glob('/src/views/**/*.vue');
const menus = getMenusByAuth(MENU_LIST, routesModule, '/src/views');
router.removeRoute('Layout');
router.addRoute({
  name: 'Layout',
  path: '/',
  component: () => import('@/views/Layout.vue'),
  redirect: menus[0].path,
  children: []
});
(menus || []).forEach((item: any) => {
  router.addRoute('Layout', item);
});

router.push({
  path: location.pathname || '/'
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

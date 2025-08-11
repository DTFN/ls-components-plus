<script setup lang="ts">
// @ts-nocheck
import useRouterHook from '@cpo/_hooks/useRouterHook';
import { RouterView } from 'vue-router';
import { MENU_LIST } from './constant/index';
// import { vAuth } from '@lingshugroup/web-plus/directives';

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

// const instance = getCurrentInstance();
// const isShow = ref(false);
// setTimeout(() => {
//   vAuth.permissions = ['a', 'b', 'c'];
//   instance.appContext.app.directive('auth', vAuth);
//   isShow.value = true;
// }, 2000);
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

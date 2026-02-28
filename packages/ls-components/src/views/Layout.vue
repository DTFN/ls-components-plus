<script setup lang="ts">
import logo from '@/assets/logo.png';
import { MENU_LIST } from '@/constant';
import type { BellMessageListType } from '@cpo/_types';

// function jumpRoute(path: string) {
//   if (path && path.trim() !== '') {
//     try {
//       router.push(path);
//     } catch (error) {
//       console.error('Failed to push route:', error);
//     }
//   } else {
//     return;
//   }
// }

const noticeNum = ref(1);
const list: Ref<BellMessageListType> = ref([
  {
    id: '1',
    title: '角色权限变更',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 12:00:00',
    readStatus: 0
  },
  {
    id: '2',
    msgType: '角色权限变更',
    content: '角色权限已变更，将在下次登录后生效！',
    createdTime: '2024-02-01 13:00:00',
    readStatus: 1
  }
]);

const loadMore = () => {
  list.value = list.value.concat(list.value);
};

const readMsg = (id: string) => {
  list.value = list.value.map((item: any) => {
    if (item.id === id) {
      item.readStatus = 1;
    }
    return item;
  });
};

const readAll = () => {
  list.value = list.value.map((item: any) => {
    item.readStatus = 1;
    return item;
  });
  noticeNum.value = 0;
};
</script>

<template>
  <LSLayout header-height="50px" :logo="logo" title="组件案例" :show-command="false">
    <template #aside>
      <LSMenu :menu-config-list="MENU_LIST" style="width: 200px" />
    </template>
    <template #headerRight>
      <LSBellMessage
        :notice-num="noticeNum"
        :list="list"
        :loading="false"
        @read-msg="readMsg"
        @read-all="readAll"
        @load-more="loadMore"
        style="margin-right: 18px"
      />
    </template>
    <template #section>
      <el-config-provider :value-on-clear="undefined" :empty-values="[undefined, null]">
        <LSBreadcrumb />
        <router-view />
      </el-config-provider>
    </template>
  </LSLayout>
</template>

<style scoped>
.main_container {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  .main_header {
    position: relative;
    z-index: 1;
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    height: 60px;
    font-size: 20px;
    line-height: 60px;
    text-align: center;
    box-shadow: 0 2px 8px #f0f1f2;
  }
  .main_content {
    box-sizing: border-box;
    display: flex;
    flex: 1;
    flex-basis: auto;
    flex-direction: row;
    height: calc(100vh - 60px);
    .left_menu {
      width: 180px;
      height: calc(100vh - 60px);
      margin-top: 4px;
    }
    .right_content {
      box-sizing: border-box;
      display: block;
      flex: 1;
      flex-basis: auto;
      padding: 32px 40px;
      overflow: auto;
      background: #f6f7fb;
    }
  }
}
</style>

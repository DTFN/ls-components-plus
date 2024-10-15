<script setup lang="ts">
import { MENU_LIST } from '@/constant';

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
const list: any = ref([
  {
    id: '1',
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
  <section class="main_container">
    <header class="main_header">
      Demo展示
      <LSBellMessage :notice-num="noticeNum" :list="list" @read-msg="readMsg" @read-all="readAll" @load-more="loadMore" />
    </header>
    <section class="main_content">
      <!-- <el-menu :default-active="$route.path" active-text-color="#006eff" class="left_menu" router>
        <el-menu-item v-for="item in dataList" :key="item.id" :index="item.path" @click="jumpRoute(item.path)">
          <span>{{ item.title }}</span>
        </el-menu-item>
      </el-menu> -->

      <LSMenu :menu-config-list="MENU_LIST" style="width: 200px" />
      <section class="right_content">
        <el-config-provider :value-on-clear="undefined" :empty-values="[undefined, null]">
          <LSBreadcrumb />
          <router-view />
        </el-config-provider>
      </section>
    </section>
  </section>
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

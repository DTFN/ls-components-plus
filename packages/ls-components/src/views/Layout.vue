<script setup lang="ts">
const dataList = [
  {
    id: '1',
    title: 'Button 按钮',
    path: '/button'
  },
  {
    id: '2',
    title: 'Upload 上传',
    path: '/upload'
  },
  {
    id: '3',
    title: 'Descriptions 描述',
    path: '/descriptions'
  },
  {
    id: '4',
    title: 'Form 表单',
    path: '/form'
  },
  {
    id: '5',
    title: 'Preview 预览',
    path: '/preview'
  },
  {
    id: '6',
    title: 'Menu 菜单',
    path: '/menu'
  },
  {
    id: '7',
    title: 'Table 表格',
    path: '/table'
  }
];
const router = useRouter();
function jumpRoute(path: string) {
  if (path && path.trim() !== '') {
    try {
      router.push(path);
    } catch (error) {
      console.error('Failed to push route:', error);
    }
  } else {
    return;
  }
}
</script>

<template>
  <section class="main_container">
    <header class="main_header">Demo展示</header>
    <section class="main_content">
      <el-menu :default-active="$route.path" active-text-color="#006eff" class="left_menu" router>
        <el-menu-item v-for="item in dataList" :key="item.id" :index="item.path" @click="jumpRoute(item.path)">
          <span>{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
      <section class="right_content">
        <router-view />
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

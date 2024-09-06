<script setup lang="ts">
const dataList = [
  {
    id: '1',
    title: 'Button',
    path: '/button'
  },
  {
    id: '2',
    title: 'Upload',
    path: '/upload'
  },
  {
    id: '3',
    title: 'Descriptions',
    path: '/descriptions'
  },
  {
    id: '4',
    title: 'Form',
    path: '/form'
  }
];
const router = useRouter();
const selectedKeys: Ref<string> = ref('');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
function jumpRoute(path: string) {
  if (path) {
    try {
      router.push(path);
    } catch (error) {
      console.error('Failed to push route:', error);
    }
  }
}
</script>

<template>
  <section class="main_container">
    <header class="main_header">Demo展示</header>
    <section class="main_content">
      <el-menu :default-active="selectedKeys" class="left_menu" @select="handleSelect">
        <el-menu-item v-for="item in dataList" :key="item.id" :index="item.id" @click="jumpRoute(item.path)">
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

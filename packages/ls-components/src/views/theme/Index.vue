<script setup lang="ts">
import logo from '@/assets/logo.png'

const themes = ['default', 'glass', 'cyber', 'minimal'] as const
const currentTheme = ref('default')
</script>

<template>
  <div class="theme-demo">
    <h2>主题 LSLayout Theme</h2>

    <div class="demo-section">
      <h3>主题切换</h3>
      <p class="desc">
        LSLayout 支持通过 theme 属性切换不同视觉风格：default / glass / cyber / minimal。
      </p>
      <el-radio-group v-model="currentTheme" size="small">
        <el-radio-button v-for="t in themes" :key="t" :value="t">
          {{ t }}
        </el-radio-button>
      </el-radio-group>
    </div>

    <div class="layout-wrap">
      <LSLayout
        :key="currentTheme"
        header-height="50px"
        aside-width="200px"
        :logo="logo"
        title="主题演示"
        :show-command="false"
        :theme="currentTheme"
      >
        <template #aside>
          <div class="fake-menu">
            <div class="fake-menu-item">首页</div>
            <div class="fake-menu-item">表格</div>
            <div class="fake-menu-item">表单</div>
          </div>
        </template>
        <template #section>
          <div class="theme-content">
            <h3>当前主题：{{ currentTheme }}</h3>
            <p>这是 {{ currentTheme }} 主题下的内容区域展示。</p>
            <el-button type="primary">主要按钮</el-button>
            <el-button>默认按钮</el-button>
            <el-button type="success">成功按钮</el-button>
          </div>
        </template>
      </LSLayout>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.theme-demo {
  padding: 24px;
}
h2 {
  margin-bottom: 24px;
  font-size: 22px;
}
.demo-section {
  padding: 20px;
  margin-bottom: 24px;
  background: #ffffff;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  h3 {
    margin-bottom: 12px;
    font-size: 16px;
    color: #303133;
  }
  .desc {
    margin-bottom: 16px;
    font-size: 14px;
    color: #606266;
  }
}
.layout-wrap {
  height: 400px;
  overflow: hidden;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
}
.theme-content {
  padding: 20px;
}
.fake-menu {
  width: 200px;
  padding: 12px;
}
.fake-menu-item {
  padding: 10px 12px;
  margin-bottom: 4px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #f5f7fa;
  }
}
</style>

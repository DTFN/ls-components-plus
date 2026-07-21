<script setup lang="ts">
import logo from '@/assets/logo.png'

const themes = ['default', 'glass', 'cyber', 'minimal'] as const
const currentTheme = ref('default')

const themeDesc: Record<string, string> = {
  default: '经典清爽的后台管理风格，简洁明了，适合大多数企业级应用。',
  glass: '半透明毛玻璃效果，现代高级，适合数据可视化、大屏展示类应用。',
  cyber: '深色科技风格，高对比度蓝紫色调，适合科技类、监控类应用。',
  minimal: '极致简约的浅色风格，大量留白，适合文档类、工具类应用。',
}
</script>

<template>
  <div class="theme-demo">
    <h2>主题系统 LSLayout Theme</h2>

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

    <div class="demo-section">
      <h3>主题预览</h3>
      <p class="desc">
        当前主题：<strong>{{ currentTheme }}</strong> — {{ themeDesc[currentTheme] }}
      </p>
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
              <div class="fake-menu-item">
                首页
              </div>
              <div class="fake-menu-item">
                表格
              </div>
              <div class="fake-menu-item">
                表单
              </div>
              <div class="fake-menu-item">
                图表
              </div>
            </div>
          </template>
          <template #section>
            <div class="theme-content">
              <h3>当前主题：{{ currentTheme }}</h3>
              <p>{{ themeDesc[currentTheme] }}</p>
              <div class="content-actions">
                <el-button type="primary">
                  主要按钮
                </el-button>
                <el-button>默认按钮</el-button>
                <el-button type="success">
                  成功按钮
                </el-button>
                <el-button type="warning">
                  警告按钮
                </el-button>
                <el-button type="danger">
                  危险按钮
                </el-button>
              </div>
              <div class="content-tags">
                <el-tag>默认标签</el-tag>
                <el-tag type="success">
                  成功
                </el-tag>
                <el-tag type="warning">
                  警告
                </el-tag>
                <el-tag type="danger">
                  危险
                </el-tag>
                <el-tag type="info">
                  信息
                </el-tag>
              </div>
            </div>
          </template>
        </LSLayout>
      </div>
    </div>

    <div class="demo-section">
      <h3>各主题效果对比</h3>
      <p class="desc">
        下方依次展示四种主题的效果，方便对比选择。
      </p>
      <div class="theme-list">
        <div v-for="t in themes" :key="t" class="theme-item">
          <h4>{{ t }}</h4>
          <div class="layout-wrap small">
            <LSLayout
              :key="t"
              header-height="36px"
              aside-width="120px"
              title="t"
              :show-command="false"
              :theme="t"
            >
              <template #aside>
                <div class="fake-menu small">
                  <div class="fake-menu-item small">
                    菜单1
                  </div>
                  <div class="fake-menu-item small">
                    菜单2
                  </div>
                </div>
              </template>
              <template #section>
                <div class="theme-content small">
                  <p>{{ t }} 主题内容</p>
                </div>
              </template>
            </LSLayout>
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>CSS 变量自定义</h3>
      <p class="desc">
        如果内置主题不满足需求，可通过 CSS 变量进一步自定义主题色、背景等样式。
      </p>
      <pre class="code-block">:root {
  --ls-theme-primary: #409eff;
  --ls-header-bg: #ffffff;
  --ls-aside-bg: #ffffff;
  --ls-section-bg: #f5f7fa;
  --ls-menu-active-color: #409eff;
  --ls-menu-active-bg: #ecf5ff;
}</pre>
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

  &.small {
    height: 160px;
  }
}
.theme-content {
  padding: 20px;

  &.small {
    padding: 8px;
    font-size: 12px;
  }

  h3 {
    margin: 0 0 8px;
    font-size: 18px;
  }

  p {
    margin: 0 0 16px;
    font-size: 14px;
    color: #606266;
  }
}
.content-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 16px;
}
.content-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.fake-menu {
  width: 200px;
  padding: 12px;

  &.small {
    width: 120px;
    padding: 6px;
  }
}
.fake-menu-item {
  padding: 10px 12px;
  margin-bottom: 4px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  border-radius: 4px;

  &.small {
    padding: 6px 8px;
    font-size: 12px;
  }

  &:hover {
    background: #f5f7fa;
  }
}
.theme-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.theme-item {
  h4 {
    margin-bottom: 8px;
    font-size: 14px;
    color: #303133;
    text-transform: capitalize;
  }
}
.code-block {
  padding: 16px;
  margin: 0;
  font-family: 'Fira Code', Consolas, Monaco, monospace;
  font-size: 13px;
  line-height: 1.6;
  color: #e06c75;
  background: #282c34;
  border-radius: 6px;
}
@media (max-width: 768px) {
  .theme-list {
    grid-template-columns: 1fr;
  }
}
</style>

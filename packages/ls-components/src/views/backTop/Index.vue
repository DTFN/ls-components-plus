<script setup lang="ts">
// BackTop 组件通过 target 指定滚动容器，案例中直接使用页面默认滚动
</script>

<template>
  <div class="back-top-demo">
    <h2>回到顶部 LSBackTop</h2>

    <div class="demo-section">
      <h3>基础用法</h3>
      <p class="desc">
        页面滚动后，右下角会出现回到顶部按钮；点击后平滑滚动到顶部。aniSwitch 默认为 true 开启动画。
      </p>
      <div class="scroll-content">
        <p v-for="i in 60" :key="i">
          这是第 {{ i }} 行占位内容，用于撑出页面滚动条，以测试回到顶部功能。
        </p>
      </div>
    </div>

    <div class="demo-section">
      <h3>关闭动画</h3>
      <p class="desc">
        aniSwitch 设置为 false 时，点击后无过渡动画直接回到顶部。
      </p>
      <div class="scroll-content">
        <p v-for="i in 30" :key="i">
          占位内容 {{ i }}
        </p>
      </div>
    </div>

    <LSBackTop target=".el-main" :ani-switch="true" />
  </div>
</template>

<style lang="scss" scoped>
.back-top-demo {
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
.scroll-content {
  line-height: 2;
  color: #606266;
}
</style>

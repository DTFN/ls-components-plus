<script setup lang="ts">
import { ArrowUp } from '@element-plus/icons-vue'

function handleBackTopClick() {
  console.log('点击了回到顶部按钮')
}
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
        <p v-for="i in 30" :key="i">
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
        <p v-for="i in 20" :key="i">
          占位内容 {{ i }}
        </p>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义位置</h3>
      <p class="desc">
        通过 right 和 bottom 控制按钮距离页面右侧和底部的距离（单位 px）。
      </p>
      <div class="scroll-content">
        <p v-for="i in 20" :key="i">
          自定义位置占位 {{ i }}
        </p>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义显示阈值</h3>
      <p class="desc">
        visibility-height 设置滚动高度达到多少 px 时才显示按钮，默认 200。
      </p>
      <div class="scroll-content">
        <p v-for="i in 25" :key="i">
          阈值占位 {{ i }}
        </p>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义内容</h3>
      <p class="desc">
        通过默认插槽自定义按钮内容，可放置图标和文字组合。
      </p>
      <div class="scroll-content">
        <p v-for="i in 20" :key="i">
          自定义内容占位 {{ i }}
        </p>
      </div>
    </div>

    <div class="demo-section">
      <h3>监听点击事件</h3>
      <p class="desc">
        通过 click 事件监听按钮点击，可在回调中执行额外逻辑。
      </p>
      <div class="scroll-content">
        <p v-for="i in 20" :key="i">
          事件监听占位 {{ i }}
        </p>
      </div>
    </div>

    <!-- 基础用法 -->
    <LSBackTop target=".el-main" :ani-switch="true" />

    <!-- 自定义位置 -->
    <LSBackTop target=".el-main" :right="120" :bottom="120" :ani-switch="true" />

    <!-- 自定义显示阈值 -->
    <LSBackTop target=".el-main" :right="200" :bottom="200" :visibility-height="300" />

    <!-- 自定义内容 -->
    <LSBackTop target=".el-main" :right="280" :bottom="100">
      <div class="custom-backtop">
        <el-icon><ArrowUp /></el-icon>
        <span>顶部</span>
      </div>
    </LSBackTop>

    <!-- 监听点击事件 -->
    <LSBackTop target=".el-main" :right="360" :bottom="150" @click="handleBackTopClick" />
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
.custom-backtop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: #409eff;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #66b1ff;
    transform: translateY(-2px);
  }

  span {
    margin-top: 2px;
    font-size: 12px;
  }
}
</style>

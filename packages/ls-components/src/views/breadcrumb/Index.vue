<script setup lang="ts">
import type { BreadCrumpListType } from '@cpo/_types'

const defineList: Ref<BreadCrumpListType> = ref([
  {
    title: '首页',
    name: 'Button',
  },
  {
    title: '产品中心',
    link: 'https://www.lingshu.net/',
  },
  {
    title: '产品详情',
  },
])

const defineList2: Ref<BreadCrumpListType> = ref([
  {
    title: '系统管理',
    name: 'Table',
  },
  {
    title: '用户列表',
    name: 'List',
  },
  {
    title: '用户详情',
  },
])

const showPos = ref(true)
const posTitle = ref('当前位置')
</script>

<template>
  <div class="breadcrumb-demo">
    <h2>面包屑 LSBreadcrumb</h2>

    <div class="demo-section">
      <h3>自定义面包屑</h3>
      <p class="desc">
        通过 defineList 传入自定义面包屑数据，支持 name 跳转和 link 外链。
      </p>
      <LSBreadcrumb :define-list="defineList" />
    </div>

    <div class="demo-section">
      <h3>隐藏位置前缀</h3>
      <p class="desc">
        设置 showPos 为 false，不展示「当前位置」前缀。
      </p>
      <LSBreadcrumb :define-list="defineList2" :show-pos="false" />
    </div>

    <div class="demo-section">
      <h3>自定义前缀文案</h3>
      <p class="desc">
        通过 posTitle 修改位置前缀文案。
      </p>
      <LSBreadcrumb :define-list="defineList2" pos-title="您所在的位置" />
    </div>

    <div class="demo-section">
      <h3>默认路由面包屑</h3>
      <p class="desc">
        未传入 defineList 时，自动读取当前路由 meta.bcList 渲染。
      </p>
      <LSBreadcrumb />
    </div>

    <div class="demo-section">
      <h3>动态控制</h3>
      <p class="desc">
        通过开关动态控制 showPos 和 posTitle。
      </p>
      <div class="control-bar">
        <el-checkbox v-model="showPos" label="显示位置前缀" />
        <el-input v-model="posTitle" placeholder="前缀文案" style="width: 160px; margin-left: 12px;" />
      </div>
      <LSBreadcrumb :define-list="defineList" :show-pos="showPos" :pos-title="posTitle" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumb-demo {
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
.control-bar {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
</style>

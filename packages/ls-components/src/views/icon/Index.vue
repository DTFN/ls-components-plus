<script setup lang="ts">
import { Edit, HomeFilled, Upload, WarningFilled } from '@element-plus/icons-vue'
import SvgIconCount from '@/assets/count.svg'
import SvgIconDataIcv from '@/assets/data_icv.svg'
import SvgIconVue from '@/assets/vue.svg'

const iconName = ref('iconoir:fish')

setTimeout(() => {
  iconName.value = 'game-icons:whale-tail'
}, 2000)
</script>

<template>
  <div class="icon-demo">
    <h2>图标 LSIcon</h2>

    <div class="demo-section">
      <h3>Element Plus 图标</h3>
      <p class="desc">
        默认模式，直接传入 Element Plus 图标名称或组件对象。
      </p>
      <div class="icon-row">
        <LSIcon name="HomeFilled" color="#409eff" />
        <LSIcon name="Edit" color="#67c23a" />
        <LSIcon :name="HomeFilled" color="#e6a23c" />
        <LSIcon :name="Upload" color="#f56c6c" />
        <LSIcon name="WarningFilled" size="32" color="#909399" />
      </div>
    </div>

    <div class="demo-section">
      <h3>Iconify 图标</h3>
      <p class="desc">
        type="1" 时使用 Iconify 图标库，支持动态切换。
      </p>
      <div class="icon-row">
        <LSIcon :type="1" name="iconoir:fish" width="30" height="30" color="red" />
        <LSIcon :type="1" :name="iconName" width="30" height="30" color="blue" />
        <LSIcon :type="1" name="mingcute:look-left-fill" width="30" height="30" color="green" />
      </div>
    </div>

    <div class="demo-section">
      <h3>SVG / 图片图标</h3>
      <p class="desc">
        type="2" 时传入 SVG 组件或图片地址。
      </p>
      <div class="icon-row">
        <LSIcon :type="2" :name="SvgIconVue" width="30" height="30" color="yellow" />
        <LSIcon :type="2" :name="SvgIconCount" width="30" height="30" color="orange" />
        <LSIcon :type="2" :name="SvgIconDataIcv" width="30" height="30" color="green" />
        <LSIcon :type="2" name="img" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" width="40" height="40" />
      </div>
    </div>

    <div class="demo-section">
      <h3>插槽用法</h3>
      <p class="desc">
        通过默认插槽传入自定义图标内容。
      </p>
      <div class="icon-row">
        <LSIcon width="30" height="30">
          <el-icon size="20">
            <Edit />
          </el-icon>
        </LSIcon>
        <LSIcon width="30" height="30">
          <SvgIconVue />
        </LSIcon>
      </div>
    </div>

    <div class="demo-section">
      <h3>尺寸变化</h3>
      <p class="desc">
        通过 size / width / height 控制图标大小。
      </p>
      <div class="icon-row">
        <LSIcon name="HomeFilled" size="16" color="#409eff" />
        <LSIcon name="HomeFilled" size="24" color="#409eff" />
        <LSIcon name="HomeFilled" size="32" color="#409eff" />
        <LSIcon name="HomeFilled" size="40" color="#409eff" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icon-demo {
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
.icon-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
}
</style>

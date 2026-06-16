<script setup lang="ts">
const tooltipContent = ref('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试End')
const longContent = ref('这是一段非常长的文本内容，用于测试多行省略和工具提示的展示效果。当文本超出指定宽度和行数时，应该显示省略号，并且鼠标悬停时通过 Tooltip 展示完整内容。')
</script>

<template>
  <div class="tooltip-demo">
    <h2>工具提示 LSTooltip</h2>

    <div class="demo-section">
      <h3>单行溢出</h3>
      <p class="desc">
        文本超出指定宽度时显示省略号，并悬浮展示完整内容。
      </p>
      <LSTooltip width="200" :content="tooltipContent" placement="top" :font-size="14">
        <div class="tooltip-test">
          {{ tooltipContent }}
        </div>
      </LSTooltip>
    </div>

    <div class="demo-section">
      <h3>多行溢出</h3>
      <p class="desc">
        line-clamp 大于 1 时，按多行溢出逻辑判断，超出后显示省略号。
      </p>
      <LSTooltip width="300" :content="longContent" placement="bottom" :line-clamp="2" :font-size="14" :line-height="1.5">
        <div class="tooltip-test2">
          {{ longContent }}
        </div>
      </LSTooltip>
    </div>

    <div class="demo-section">
      <h3>不同位置</h3>
      <p class="desc">
        通过 placement 控制 Tooltip 弹出位置。
      </p>
      <div class="placement-row">
        <LSTooltip width="120" content="上方提示" placement="top">
          <el-button size="small">
            top
          </el-button>
        </LSTooltip>
        <LSTooltip width="120" content="下方提示" placement="bottom">
          <el-button size="small">
            bottom
          </el-button>
        </LSTooltip>
        <LSTooltip width="120" content="左侧提示" placement="left">
          <el-button size="small">
            left
          </el-button>
        </LSTooltip>
        <LSTooltip width="120" content="右侧提示" placement="right">
          <el-button size="small">
            right
          </el-button>
        </LSTooltip>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义字体大小</h3>
      <p class="desc">
        通过 font-size 设置展示文案的字体大小。
      </p>
      <LSTooltip width="200" :content="tooltipContent" placement="top" :font-size="18">
        <div class="tooltip-test" style="font-size: 18px;">
          {{ tooltipContent }}
        </div>
      </LSTooltip>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tooltip-demo {
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
.tooltip-test {
  width: 200px;
  font-size: 14px;
}
.tooltip-test2 {
  width: 300px;
  font-size: 14px;
  line-height: 1.5;
}
.placement-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
</style>

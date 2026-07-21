<script setup lang="ts">
const tooltipContent = ref('测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试End')
const longContent = ref('这是一段非常长的文本内容，用于测试多行省略和工具提示的展示效果。当文本超出指定宽度和行数时，应该显示省略号，并且鼠标悬停时通过 Tooltip 展示完整内容。')
const htmlContent = ref('<span style="color: #409eff;">自定义</span> <b>HTML</b> 内容提示')
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
        通过 placement 控制 Tooltip 弹出位置：top / bottom / left / right。
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
      <h3>不同触发方式</h3>
      <p class="desc">
        通过 trigger 控制触发方式：hover（默认）/ click / focus。
      </p>
      <div class="placement-row">
        <LSTooltip width="120" content="悬浮触发提示" placement="top" trigger="hover">
          <el-button size="small">
            hover 悬浮
          </el-button>
        </LSTooltip>
        <LSTooltip width="120" content="点击触发提示" placement="top" trigger="click">
          <el-button size="small">
            click 点击
          </el-button>
        </LSTooltip>
        <LSTooltip width="120" content="聚焦触发提示" placement="top" trigger="focus">
          <div class="focus-box" tabindex="0">
            focus 聚焦
          </div>
        </LSTooltip>
      </div>
    </div>

    <div class="demo-section">
      <h3>自定义字体大小</h3>
      <p class="desc">
        通过 font-size 设置展示文案的字体大小，适应不同视觉场景。
      </p>
      <div class="placement-row">
        <LSTooltip width="200" :content="tooltipContent" placement="top" :font-size="12">
          <div class="tooltip-test" style="font-size: 12px;">
            字号 12px
          </div>
        </LSTooltip>
        <LSTooltip width="200" :content="tooltipContent" placement="top" :font-size="16">
          <div class="tooltip-test" style="font-size: 16px;">
            字号 16px
          </div>
        </LSTooltip>
        <LSTooltip width="200" :content="tooltipContent" placement="top" :font-size="20">
          <div class="tooltip-test" style="font-size: 20px;">
            字号 20px
          </div>
        </LSTooltip>
      </div>
    </div>

    <div class="demo-section">
      <h3>不同主题</h3>
      <p class="desc">
        通过 effect 属性切换 dark / light 两种主题风格。
      </p>
      <div class="placement-row">
        <LSTooltip width="120" content="深色主题提示" placement="top" effect="dark">
          <el-button size="small">
            dark 深色
          </el-button>
        </LSTooltip>
        <LSTooltip width="120" content="浅色主题提示" placement="top" effect="light">
          <el-button size="small">
            light 浅色
          </el-button>
        </LSTooltip>
      </div>
    </div>

    <div class="demo-section">
      <h3>HTML 内容</h3>
      <p class="desc">
        通过 raw-content 属性开启 HTML 解析，content 可传入富文本字符串。
      </p>
      <LSTooltip width="200" :content="htmlContent" placement="top" :font-size="14" raw-content>
        <div class="tooltip-test">
          鼠标悬浮查看 HTML 内容
        </div>
      </LSTooltip>
    </div>

    <div class="demo-section">
      <h3>禁用状态</h3>
      <p class="desc">
        disabled 设为 true 时，即使内容溢出也不会显示 Tooltip 提示。
      </p>
      <LSTooltip width="200" :content="tooltipContent" placement="top" :font-size="14" :disabled="true">
        <div class="tooltip-test">
          {{ tooltipContent }}
        </div>
      </LSTooltip>
    </div>

    <div class="demo-section">
      <h3>延迟显示与隐藏</h3>
      <p class="desc">
        通过 show-after 控制延迟显示（毫秒），hide-after 控制延迟隐藏。
      </p>
      <div class="placement-row">
        <LSTooltip width="160" content="延迟 500ms 显示" placement="top" :show-after="500">
          <el-button size="small">
            延迟显示 500ms
          </el-button>
        </LSTooltip>
        <LSTooltip width="160" content="延迟 1000ms 隐藏" placement="top" :hide-after="1000">
          <el-button size="small">
            延迟隐藏 1000ms
          </el-button>
        </LSTooltip>
      </div>
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tooltip-test2 {
  width: 300px;
  font-size: 14px;
  line-height: 1.5;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.placement-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}
.focus-box {
  padding: 6px 12px;
  font-size: 13px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }
}
</style>

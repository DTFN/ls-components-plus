<script setup lang="ts">
import { useNamespace } from '@cpo/_hooks/useNamespace'
/**
 * @summary 布局组件 - 基于 `el-container` 的页面框架容器
 *
 * `LSLayout` 基于 Element Plus 容器组件封装，提供 3 种后台常用布局模式：
 * `1` 为“顶部导航 + 侧边栏 + 内容区”、`2` 为“顶部导航 + 内容区”、`3` 为“侧边栏 + 顶部导航 + 内容区”。
 * 组件保留 `el-container` 结构写法，并将标题、用户信息、命令列表等头部属性透传给内部 `Header` 组件。
 *
 * 组件自有属性：
 * @attr {string|number} mode 布局模式，可选 `1 / 2 / 3`，默认 `1`
 * @attr {string} headerHeight 头部高度，传值需带单位，默认 `60px`
 * @attr {boolean} showFooter 是否显示底部区域，默认 `false`
 * @attr {string} footerHeight 底部高度，传值需带单位，默认 `60px`
 * @attr {string} asideWidth 侧边栏宽度，传值需带单位，默认 `200px`
 * @attr {boolean} showLogo 是否显示 logo；模式 `1/2` 显示在头部，模式 `3` 显示在侧栏顶部，默认 `true`
 * @attr {string} logo logo 图片地址，默认 `''`
 * @attr {string} customCss 追加到根节点的自定义 class，默认 `''`
 * @attr {string} theme 主题风格类名，可选 `glass` / `cyber` / `minimal`，默认 `''`
 *
 * 常用头部透传属性（通过 `$attrs` 传给内部 `Header`）：
 * @attr {string} title 头部标题
 * @attr {boolean} showCommand 是否显示右侧交互区，默认 `true`
 * @attr {string} userName 用户名，默认 `Admin`
 * @attr {string} userIcon 用户头像地址
 * @attr {Array<{key: string, name: string}>} commandList 顶部交互功能列表
 *
 * @slot header 自定义整个头部；提供时会覆盖默认 `Header`
 * @slot headerLeft 默认头部左侧插槽
 * @slot headerRight 默认头部右侧插槽
 * @slot headerTitle 默认头部中间标题插槽
 * @slot aside 侧边栏插槽；模式 `1/3` 时使用
 * @slot section 主内容区域插槽
 * @slot footer 底部插槽；`showFooter=true` 时使用
 *
 * @event onCommand(key) 点击顶部交互功能后触发，返回 `commandList` 对应项的 `key`
 *
 * @example
 * <LSLayout
 *   header-height="50px"
 *   aside-width="220px"
 *   :logo="logo"
 *   title="Layout 测试"
 *   :command-list="commandList"
 *   @onCommand="onCommand"
 * >
 *   <template #aside>
 *     <LSMenu :menu-config-list="MENU_CONFIG_LIST" class="menu-wrap" style="width: 220px" />
 *   </template>
 *   <template #section>
 *     <div class="ls-main-container">列表区域</div>
 *   </template>
 * </LSLayout>
 */
import { computed, useSlots } from 'vue'
import Header from './components/Header.vue'
import { lsEmitNames, lsLayoutProp } from './types'

defineOptions({
  name: 'LSLayout',
  inheritAttrs: false,
})

const props = defineProps(lsLayoutProp)

const emits = defineEmits(lsEmitNames)

const slots = useSlots()

const ns = useNamespace('layout')
const comClass: string = ns.b()
const containerWrap: string = ns.b('container-wrap')
const containerSection: string = ns.b('container-section')

const containerWrapStyle = computed(() => {
  if (props.showFooter) {
    return {
      height: `calc(100vh - ${props.headerHeight} - ${props.footerHeight})`,
    }
  }

  return {
    height: `calc(100vh - ${props.headerHeight})`,
  }
})

const containerSectionStyle = computed(() => {
  if (props.showFooter) {
    return {
      height: `calc(100vh - ${props.headerHeight} - ${props.footerHeight} - 40px)`,
    }
  }

  return {
    minHeight: `calc(100vh - ${props.headerHeight} - 40px)`,
  }
})

function onDropdownCommand2(val: string) {
  emits('onCommand', val)
}
</script>

<template>
  <div :class="[comClass, customCss, theme ? `theme-${theme}` : '']">
    <el-container v-if="[1, 2].includes(Number(mode))">
      <el-header :height="headerHeight">
        <slot v-if="slots.header" name="header"></slot>
        <Header
          v-else
          v-bind="$attrs"
          :mode="mode"
          :logo="logo"
          :show-logo="showLogo"
          :height="headerHeight"
          @on-dropdown-command2="onDropdownCommand2"
        >
          <template #left>
            <slot name="headerLeft"></slot>
          </template>
          <template v-if="slots.headerTitle" #title>
            <slot name="headerTitle"></slot>
          </template>
          <template #right>
            <slot name="headerRight"></slot>
          </template>
        </Header>
      </el-header>
      <el-container :class="containerWrap" :style="containerWrapStyle">
        <el-aside v-if="mode !== 2" :width="asideWidth">
          <slot name="aside"></slot>
        </el-aside>
        <el-main>
          <section :class="containerSection" :style="containerSectionStyle">
            <slot name="section"></slot>
          </section>
        </el-main>
      </el-container>
      <el-footer v-if="showFooter" :height="footerHeight">
        <slot name="footer"></slot>
      </el-footer>
    </el-container>
    <el-container v-else-if="[3].includes(Number(mode))">
      <el-aside :width="asideWidth" class="ls-layout-aside3">
        <img v-if="showLogo" class="ls-layout-logo" :src="logo" alt="" />
        <slot name="aside"></slot>
      </el-aside>
      <el-container>
        <el-header :height="headerHeight">
          <slot v-if="slots.header" name="header"></slot>
          <Header
            v-else
            v-bind="$attrs"
            :mode="mode"
            :logo="logo"
            :show-logo="showLogo"
            :height="headerHeight"
            @on-dropdown-command2="onDropdownCommand2"
          >
            <template #left>
              <slot name="headerLeft"></slot>
            </template>
            <template v-if="slots.headerTitle" #title>
              <slot name="headerTitle"></slot>
            </template>
            <template #right>
              <slot name="headerRight"></slot>
            </template>
          </Header>
        </el-header>
        <el-main>
          <section :class="containerSection" :style="containerSectionStyle">
            <slot name="section"></slot>
          </section>
        </el-main>
        <el-footer v-if="showFooter" :height="footerHeight">
          <slot name="footer"></slot>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
/* 滚动条优化 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(144 147 153 / 30%);
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: rgb(144 147 153 / 50%);
  }
}
.ls-layout {
  position: relative;
  width: 100%;
  height: 100vh;
  .el-header {
    position: relative;
    z-index: 10;
    padding: 0 24px;
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    transition: all 0.3s ease;
  }
  .el-aside {
    position: relative;
    z-index: 9;
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    background: #ffffff;
    box-shadow: 1px 0 4px rgb(0 21 41 / 8%);
    transition: all 0.3s ease;
    :deep(.el-menu) {
      border-right: none;
    }
  }
  .el-main {
    box-sizing: border-box;
    padding: 20px;
    overflow: hidden auto;
    transition: all 0.3s ease;
  }
  .ls-layout-container-wrap {
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    background-color: #f4f7f9;
  }
  .ls-layout-container-section {
    box-sizing: border-box;
    padding: 24px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgb(0 21 41 / 4%);
    transition: all 0.3s ease;
  }
  .ls-layout-aside3 {
    z-index: 999;
    height: 100vh;
    :deep(.el-dropdown) {
      box-sizing: border-box;
      display: block;
      padding: 24px 0;
      .el-dropdown-link {
        justify-content: center;
      }
    }
    .ls-layout-logo {
      box-sizing: border-box;
      display: block;
      width: 96%;
      padding: 18px 24px;
      margin: auto;
    }
  }
  &.header-gray {
    .el-header {
      background-color: #191a20 !important;
      :deep(div) {
        color: #e5eaf3 !important;
      }
    }
  }
  &.aside-gray {
    .el-aside {
      background-color: #191a20 !important;
      :deep(.el-menu) {
        background-color: #191a20 !important;
        .el-sub-menu__title,
        .el-menu-item {
          color: #bdbdc0 !important;
          &:hover {
            color: #ffffff !important;
            background-color: #191a20 !important;
            span {
              &::before {
                background-color: #ffffff !important;
              }
            }
          }
        }
        .el-menu-item {
          span {
            &::before {
              background-color: #bdbdc0;
            }
          }
          &.is-active {
            color: #ffffff;
            background-color: #000000 !important;
            &::before {
              background-color: #2285ff;
            }
            span {
              &::before {
                background-color: #2285ff;
              }
            }
          }
        }
      }
    }
  }

  /* --- 新增：幻彩毛玻璃风 (Glassmorphism) --- */
  &.theme-glass {
    &::before {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      content: '';
      background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%);
    }
    :deep(.el-container) {
      position: relative;
      z-index: 1;
    }
    .ls-layout-container-wrap {
      background: transparent;
    }
    .el-header {
      background: rgb(255 255 255 / 50%) !important;
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgb(255 255 255 / 40%);
      box-shadow: 0 4px 30px rgb(0 0 0 / 5%);
    }
    .el-aside {
      background: rgb(255 255 255 / 50%) !important;
      backdrop-filter: blur(16px);
      border-right: 1px solid rgb(255 255 255 / 40%);
      box-shadow: 4px 0 30px rgb(0 0 0 / 5%);
      :deep(.el-menu) {
        padding: 10px 8px;
        background-color: transparent !important;
        border-right: none;
        .el-sub-menu__title,
        .el-menu-item {
          height: 44px;
          margin-bottom: 4px;
          line-height: 44px;
          color: #475569 !important;
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          &:hover {
            color: #0f172a !important;
            background-color: rgb(255 255 255 / 60%) !important;
            transform: translateX(4px);
          }
        }
        .el-menu-item.is-active {
          font-weight: 600;
          color: #5e72e4 !important;
          background-color: linear-gradient(90deg, rgb(255 55 55 / 90%) 0%, rgb(255 25 255 / 40%) 100%) !important;
          border-left: 3px solid #5e72e4;
          box-shadow: 0 4px 15px rgb(0 0 0 / 5%);
          &::before {
            display: none;
          }
        }
      }
    }
    .ls-layout-container-section {
      background: rgb(255 255 255 / 60%);
      backdrop-filter: blur(20px);
      border: 1px solid rgb(255 255 255 / 50%);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgb(31 38 135 / 7%);
    }
  }

  /* --- 新增：赛博暗黑风 (Cyber Dark) --- */
  &.theme-cyber {
    background-color: #050505;
    .ls-layout-container-wrap {
      background-color: #050505;
      background-image: linear-gradient(90deg, rgb(255 255 255 / 2%) 1px, transparent 1px);
      background-size: 20px 20px;
    }
    .el-header {
      background-color: #0a0a0a !important;
      border-bottom: 1px solid #1f2937;
      box-shadow: 0 4px 20px rgb(0 0 0 / 80%);
      :deep(div),
      :deep(span) {
        color: #e5e7eb !important;
      }
    }
    .el-aside {
      background-color: #0a0a0a !important;
      border-right: 1px solid #1f2937;
      box-shadow: 4px 0 20px rgb(0 0 0 / 80%);
      :deep(.el-menu) {
        padding: 8px;
        background-color: transparent !important;
        border-right: none;
        .el-sub-menu__title,
        .el-menu-item {
          height: 44px;
          margin-bottom: 4px;
          line-height: 44px;
          color: #9ca3af !important;
          border-radius: 6px;
          transition: all 0.3s ease;
          &:hover {
            color: #00ffcc !important;
            text-shadow: 0 0 8px rgb(0 255 204 / 60%);
            background-color: rgb(0 255 204 / 5%) !important;
            transform: translateX(4px);
          }
        }
        .el-menu-item.is-active {
          color: #00ffcc !important;
          text-shadow: 0 0 8px rgb(0 255 204 / 60%);
          background-color: rgb(0 255 204 / 10%) !important;
          border-left: 3px solid #00ffcc;
          box-shadow: inset 2px 0 10px rgb(0 255 204 / 20%);
          &::before {
            display: none;
          }
        }
      }
    }
    .ls-layout-container-section {
      color: #d1d5db;
      background-color: rgb(10 10 10 / 80%);
      backdrop-filter: blur(8px);
      border: 1px solid #1f2937;
      border-radius: 8px;
      box-shadow: 0 8px 32px rgb(0 0 0 / 50%);
      &:hover {
        border-color: rgb(0 255 204 / 30%);
        box-shadow: 0 0 15px rgb(0 255 204 / 10%);
      }
    }
  }

  /* --- 新增：极简柔和风 (Minimal Soft) --- */
  &.theme-minimal {
    .ls-layout-container-wrap {
      background-color: #fafafa;
    }
    .el-header {
      background-color: #ffffff !important;
      border-bottom: 1px solid #f0f0f0;
      box-shadow: none;
    }
    .el-aside {
      background-color: #ffffff !important;
      border-right: 1px solid #f0f0f0;
      box-shadow: none;
      :deep(.el-menu) {
        padding: 16px 12px;
        background-color: transparent !important;
        border-right: none;
        .el-sub-menu__title,
        .el-menu-item {
          height: 40px;
          margin-bottom: 8px;
          line-height: 40px;
          color: #595959 !important;
          border-radius: 6px;
          transition: all 0.2s ease;
          &:hover {
            color: #262626 !important;
            background-color: #f5f5f5 !important;
          }
        }
        .el-menu-item.is-active {
          font-weight: 500;
          color: #1890ff !important;
          background-color: #e6f7ff !important;
          &::before {
            display: none;
          }
        }
      }
    }
    .ls-layout-container-section {
      background-color: #ffffff;
      border: 1px solid #f0f0f0;
      border-radius: 8px;
      box-shadow: none;
    }
  }
}
</style>

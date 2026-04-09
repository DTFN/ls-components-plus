<script setup lang="ts">
/**
 * @summary 布局组件 - 页面基础布局容器
 *
 * 这是自研库的标准布局组件，提供了完整的页面布局解决方案。
 * 支持顶部导航栏、侧边栏、内容区域、底部页脚的组合布局，
 * 提供多种布局模式和响应式设计，适用于后台管理系统和复杂页面布局。
 *
 * @attr {string} headerHeight - 头部高度，默认为'60px'
 * @attr {string} footerHeight - 底部高度，默认为'40px'
 * @attr {boolean} showFooter - 是否显示底部
 * @attr {any} headerTitle - 头部标题配置
 * @attr {any} headerMenu - 头部菜单配置
 * @attr {any} headerAvatar - 头部头像配置
 * @attr {any[]} headerTags - 头部标签数组
 * @attr {any[]} headerNavs - 头部导航数组
 * @attr {string} layoutMode - 布局模式，默认为'1'
 * @attr {boolean} asideCollapsible - 侧边栏是否可折叠
 * @attr {string} asideWidth - 侧边栏宽度，默认为'200px'
 * @attr {boolean} asideCollapsed - 侧边栏是否已折叠
 * @attr {any[]} asideMenu - 侧边栏菜单数据
 * @attr {any} asideLogo - 侧边栏logo配置
 * @attr {string} designTheme - 设计主题，可选值：glass/neumorphism/minimalism/tech
 * @attr {string} colorTheme - 颜色主题，可选值：default/ocean/sunset/forest/purple/monochrome/candy
 *
 * @slot header-left - 头部左侧插槽
 * @slot header-center - 头部中间插槽
 * @slot header-right - 头部右侧插槽
 * @slot header-logo - 头部logo插槽
 * @slot header-menu - 头部菜单插槽
 * @slot header-title - 头部标题插槽
 * @slot header-tags - 头部标签插槽
 * @slot header-navs - 头部导航插槽
 * @slot header-actions - 头部操作插槽
 * @slot header-avatar - 头部头像插槽
 * @slot aside-logo - 侧边栏logo插槽
 * @slot aside-menu - 侧边栏菜单插槽
 * @slot aside-extra - 侧边栏额外内容插槽
 * @slot footer - 底部插槽
 * @slot default - 默认插槽，内容区域
 *
 * @event onCommand - 下拉命令事件，参数：command (命令值)
 * @event update:asideCollapsed - 更新侧边栏折叠状态，参数：collapsed (是否折叠)
 *
 * @csspart layout - 布局容器
 * @csspart header - 头部区域
 * @csspart aside - 侧边栏区域
 * @csspart main - 内容区域
 * @csspart footer - 底部区域
 *
 * @example
 * <!-- 基础布局 -->
 * <LSLayout
 *   :headerTitle="{ text: '管理系统' }"
 *   :asideMenu="menuData"
 * >
 *   <RouterView />
 * </LSLayout>
 *
 * @example
 * <!-- 带底部布局 -->
 * <LSLayout
 *   :showFooter="true"
 *   :headerTitle="{ text: '管理系统' }"
 *   :asideMenu="menuData"
 * >
 *   <template #footer>
 *     <div>© 2024 Company</div>
 *   </template>
 *   <RouterView />
 * </LSLayout>
 *
 * @example
 * <!-- 可折叠侧边栏 -->
 * <LSLayout
 *   :asideCollapsible="true"
 *   v-model:asideCollapsed="isCollapsed"
 *   :asideMenu="menuData"
 * >
 *   <RouterView />
 * </LSLayout>
 *
 * @example
 * <!-- 自定义头部 -->
 * <LSLayout :asideMenu="menuData">
 *   <template #header-left>
 *     <CustomLogo />
 *   </template>
 *   <template #header-right>
 *     <UserActions />
 *   </template>
 *   <RouterView />
 * </LSLayout>
 */
import { computed, useSlots } from 'vue';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsEmitNames, lsLayoutProp } from './types';
import Header from './components/Header.vue';

defineOptions({
  name: 'LSLayout',
  inheritAttrs: false
});

const props = defineProps(lsLayoutProp);

const emits = defineEmits(lsEmitNames);

const slots = useSlots();

const ns = useNamespace('layout');
const comClass: string = ns.b();
const containerWrap: string = ns.b('container-wrap');
const containerSection: string = ns.b('container-section');

const containerWrapStyle = computed(() => {
  if (props.showFooter) {
    return {
      height: `calc(100vh - ${props.headerHeight} - ${props.footerHeight})`
    };
  }
  return {
    height: `calc(100vh - ${props.headerHeight})`
  };
});

const containerSectionStyle = computed(() => {
  if (props.showFooter) {
    return {
      height: `calc(100vh - ${props.headerHeight} - ${props.footerHeight} - 40px)`
    };
  }
  return {
    minHeight: `calc(100vh - ${props.headerHeight} - 40px)`
  };
});

function onDropdownCommand2(val: string) {
  emits('onCommand', val);
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
        <el-aside v-if="mode != 2" :width="asideWidth">
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

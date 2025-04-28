<script setup lang="ts">
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
      height: `calc(100vh - ${props.headerHeight} - ${props.footerHeight})`
    };
  }
  return {
    minHeight: `calc(100vh - ${props.headerHeight})`
  };
});

function onDropdownCommand2(val: string) {
  emits('onCommand', val);
}
</script>

<template>
  <div :class="[comClass, customCss]">
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
}
::-webkit-scrollbar-thumb {
  background-color: rgb(0 0 0 / 20%);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: rgb(0 0 0 / 30%);
  }
}
.ls-layout {
  position: relative;
  width: 100%;
  height: 100vh;
  .el-header {
    position: relative;
    z-index: 1;
    padding: 0 24px;
    background-color: #ffffff;
    box-shadow: 0 2px 8px 0 rgb(0 0 0 / 10%);
  }
  .el-aside {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    background: #ffffff;
    box-shadow: 2px 0 8px 0 rgb(0 0 0 / 10%);
  }
  .el-main {
    padding: 0;
  }
  .ls-layout-container-wrap {
    box-sizing: border-box;
    background-color: #f6f7fb;
  }
  .ls-layout-container-section {
    box-sizing: border-box;
    padding: 18px;
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
}
</style>

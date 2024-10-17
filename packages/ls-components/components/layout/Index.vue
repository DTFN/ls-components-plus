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
  return {
    height: `calc(100vh - ${props.headerHeight})`
  };
});

const containerSectionStyle = computed(() => {
  return {
    minHeight: `calc(100vh - ${props.headerHeight})`
  };
});

function onCommand(val: string) {
  emits('onCommand', val);
}
</script>

<template>
  <div :class="comClass">
    <el-container>
      <el-header :height="headerHeight">
        <slot v-if="slots.header" name="header"></slot>
        <Header v-else v-bind="$attrs" :height="headerHeight" @on-command="onCommand" />
      </el-header>
      <el-container :class="containerWrap" :style="containerWrapStyle">
        <el-aside :width="asideWidth">
          <slot name="aside"></slot>
        </el-aside>
        <el-main>
          <section :class="containerSection" :style="containerSectionStyle">
            <slot name="section"></slot>
          </section>
        </el-main>
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
    padding: 24px 40px;
  }
}
</style>

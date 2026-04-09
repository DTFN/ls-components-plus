<script setup lang="ts" name="LSBackTop">
/**
 * @summary 返回顶部组件 - 页面滚动返回顶部
 *
 * 这是自研库的标准返回顶部组件，提供一键返回页面顶部的功能。
 * 支持自定义图标、动画效果、位置配置，适用于长页面快速返回顶部场景。
 *
 * @attr {number} right - 距离右侧距离，默认为36
 * @attr {number} bottom - 距离底部距离，默认为60
 * @attr {boolean} aniSwitch - 是否启用动画效果
 *
 * @slot default - 默认插槽，自定义返回顶部内容
 *
 * @csspart back-top - 返回顶部容器
 *
 * @example
 * <!-- 基础用法 -->
 * <LSBackTop />
 *
 * @example
 * <!-- 自定义位置 -->
 * <LSBackTop :right="100" :bottom="100" />
 *
 * @example
 * <!-- 自定义图标 -->
 * <LSBackTop>
 *   <CustomIcon />
 * </LSBackTop>
 */
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsBackTopProps } from './types';
import { merge } from 'lodash-es';

defineOptions({
  name: 'LSBackTop',
  inheritAttrs: false
});

const ns = useNamespace('back-top');
const comClass: string = ns.b();
const optClass: string = ns.b('opt');

const slots = useSlots();

const props = defineProps(lsBackTopProps);

const lsBackTopRef = ref();

const defAttrs: Ref<{
  right: number;
  bottom: number;
}> = ref({
  right: 36,
  bottom: 60
});
const aniClass = ref('');

function onClickFunc(): void {
  if (props.aniSwitch) {
    aniClass.value = 'launch';
    const timer = setTimeout(() => {
      aniClass.value = '';
      lsBackTopRef.value.querySelector('.el-backtop').style.opacity = 0;
      clearTimeout(timer);
    }, 500);
  }
}
</script>

<template>
  <div ref="lsBackTopRef" :class="comClass">
    <el-backtop v-bind="merge(defAttrs, $attrs)" :class="[!slots.default ? 'def-el-backtop' : '', aniClass]" @click="onClickFunc">
      <slot v-if="slots.default"></slot>
      <div v-else :class="optClass">
        <LSIcon :type="1" name="iconoir:rocket" width="46" height="46" />
      </div>
    </el-backtop>
  </div>
</template>

<style lang="scss" scoped>
.ls-back-top {
  position: absolute;
  .ls-back-top-opt {
    position: relative;
    background-color: transparent;
    :deep(.icon-iconify) {
      &:hover {
        width: 49px;
        height: 49px;
      }
    }
  }
  .def-el-backtop {
    background-color: transparent;
    box-shadow: none;
  }
  .launch {
    animation: launch-ani 0.5s ease-in-out 0.1s 1 backwards;
  }
}

@keyframes launch-ani {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-500px);
  }
}
</style>

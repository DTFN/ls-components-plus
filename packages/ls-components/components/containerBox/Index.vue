<script setup lang="ts" name="LSContainerBox">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsContainerBoxProps } from './types';

const ns = useNamespace('container-box');
const comClass: string = ns.b();

const lsContainerBoxRef = ref();

const scale = ref(1);
const props = defineProps(lsContainerBoxProps);

const getScale = () => {
  // 固定16： 9
  const wh = window.innerHeight / props.height;
  const ww = window.innerWidth / props.width;
  scale.value = ww < wh ? ww : wh;
};

const debounce = (fn: Function, delay: number = 500) => {
  const delays = delay;
  let timer: any = null;
  return function (...args: any) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply((window as any).this, args);
      window.clearTimeout(timer);
    }, delays);
  };
};

onMounted(() => {
  getScale();
  window.addEventListener('resize', debounce(getScale));
});
</script>

<template>
  <div :class="comClass" ref="lsContainerBoxRef">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.ls-container-box {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  width: calc(v-bind(width) * 1px);
  height: calc(v-bind(height) * 1px);
  transition: 0.3s;
  transform: scale(v-bind(scale)) translate(-50%, -50%);
  transform-origin: 0 0;
}
</style>

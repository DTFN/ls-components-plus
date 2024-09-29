<script setup lang="ts" name="LSBackTop">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsBackTopProps } from './types';

const ns = useNamespace('back-top');
const comClass: string = ns.b();
const optClass: string = ns.b('opt');

const slots = useSlots();

defineProps(lsBackTopProps);

const lsBackTopRef = ref();

const defAttrs: any = ref({
  right: 36,
  bottom: 60
});
const aniClass = ref('');

function onClickFunc(): void {
  if (!slots.default) {
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
    <el-backtop
      v-bind="Object.assign(defAttrs, $attrs)"
      :class="[!slots.default ? 'def-el-backtop' : '', aniClass]"
      @click="onClickFunc"
    >
      <slot v-if="slots.default"></slot>
      <div v-else :class="optClass">
        <LSIcon :type="1" name="iconoir:rocket" width="40" height="40" />
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
  }
  .def-el-backtop {
    background-color: transparent;
    box-shadow: none;
  }
  .launch {
    animation: launch-ani 0.5s ease-in 0.1s 1 backwards;
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

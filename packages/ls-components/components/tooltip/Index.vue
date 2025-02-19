<script setup lang="ts" name="LSTooltip">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsTooltipProps } from './types';
import { isEmpty } from '@cpo/_utils/utils';

const props = defineProps(lsTooltipProps);

const ns = useNamespace('tooltip');
const comClass: string = ns.b();
const showTip = ref(false);
const lsTooltipRef = ref();

const attrs = useAttrs();

const comStyle = computed(() => {
  const w = props.width;
  let tempW = '100%';
  if ((w.endsWith('%') || w.endsWith('px')) && !isEmpty(parseInt(w))) {
    tempW = w;
  } else if (!isEmpty(Number(w))) {
    tempW = `${w}px`;
  }
  return {
    width: tempW
  };
});

const content = computed(() => {
  return attrs.content || '';
});

function onMouseEnter() {
  updateTooltip();
}

async function updateTooltip() {
  await nextTick();
  if (lsTooltipRef.value) {
    const w1 = lsTooltipRef.value.getBoundingClientRect();
    const w2 = lsTooltipRef.value.querySelector('.temp-content').getBoundingClientRect();
    if (w2.width > w1.width) {
      showTip.value = true;
    } else {
      showTip.value = false;
    }
  }
}
</script>

<template>
  <div ref="lsTooltipRef" :class="comClass" :style="comStyle" @mouseenter="onMouseEnter">
    <div class="temp-content">{{ content }}</div>
    <el-tooltip :disabled="!showTip" v-bind="$attrs">
      <template #default>
        <slot name="default"></slot>
      </template>
      <template #content>
        <slot name="content"></slot>
      </template>
    </el-tooltip>
  </div>
</template>

<style lang="scss" scoped>
.ls-tooltip {
  width: 100%;
  .temp-content {
    position: absolute;
    height: 0;
    visibility: hidden;
  }
}
</style>

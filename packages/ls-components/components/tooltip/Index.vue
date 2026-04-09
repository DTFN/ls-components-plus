<script setup lang="ts" name="LSTooltip">
/**
 * @summary 工具提示组件 - 文本溢出提示
 *
 * 这是自研库的工具提示组件，自动检测文本是否溢出，溢出时显示Tooltip。
 * 支持单行和多行文本溢出检测，可自定义宽度、字体大小等。
 *
 * @attr {number|string} width - 容器宽度
 * @attr {number} fontSize - 字体大小
 * @attr {number} lineHeight - 行高
 * @attr {number} lineClamp - 行数限制
 *
 * @slot default - 默认插槽，提示内容
 *
 * @event 无
 *
 * @csspart tooltip - 提示容器
 *
 * @example
 * <!-- 单行溢出提示 -->
 * <LSTooltip width="200">长文本内容...</LSTooltip>
 *
 * @example
 * <!-- 多行溢出提示 -->
 * <LSTooltip width="300" :lineClamp="3">
 *   多行长文本内容...
 * </LSTooltip>
 */
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
  const w = props.width.toString();
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

const tempContentStyle = computed(() => {
  const style: any =
    props.lineClamp > 1
      ? Object.assign(
          {
            height: 'auto'
          },
          comStyle.value
        )
      : {
          width: 'auto',
          height: 0
        };
  const size = props.fontSize;
  if (size) {
    style.fontSize = `${size}px`;
  }
  const line = props.lineHeight;
  if (line) {
    style.lineHeight = `${line}px`;
  }
  return style;
});

function onMouseEnter() {
  updateTooltip();
}

async function updateTooltip() {
  await nextTick();
  if (lsTooltipRef.value) {
    const w1 = lsTooltipRef.value.getBoundingClientRect();
    const w2 = lsTooltipRef.value.querySelector('.temp-content').getBoundingClientRect();
    if (props.lineClamp <= 1) {
      showTip.value = Boolean(w2.width > w1.width);
    } else {
      showTip.value = Boolean(w2.height > w1.height);
    }
  }
}
</script>

<template>
  <div ref="lsTooltipRef" :class="comClass" :style="comStyle" @mouseenter="onMouseEnter">
    <div class="temp-content" :style="tempContentStyle">{{ content }}</div>
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

<script setup lang="ts" name="LSFlowBox">
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { lsFlowBoxProps } from './types';

const ns = useNamespace('flow-box');
const comClass: string = ns.b();
const itemClass: string = ns.b('item');
const itemLineClass: string = ns.b('item-line');
const itemArrowClass: string = ns.b('item-arrow');

const lsFlowBoxRef = ref();

const flowBoxStyle = ref({});

const props = defineProps(lsFlowBoxProps);

watch(
  () => props.list,
  val => {
    if (val && val.length > 0) {
      updateFlowBoxStyle();
    }
  },
  {
    immediate: true,
    deep: true
  }
);

function updateFlowBoxStyle() {
  flowBoxStyle.value = {
    width: `${props.width}`,
    height: `${props.height}`
  };
}

function setItemStyle(item: any) {
  const styleVal: any = {};
  const { boxBgColor, boxPos, boxPosVal } = item;
  if (boxBgColor) {
    styleVal.backgroundColor = boxBgColor;
  }
  if (boxPos && boxPosVal) {
    styleVal[boxPos] = `${boxPosVal}px`;
  }

  return styleVal;
}

function setItemLineStyle(item: any) {
  const styleVal: any = {};
  const { linePos, lineColor, lineLength, lineWidth } = item;
  const lineW = `${lineWidth || 2}px`;
  if (linePos && lineLength) {
    switch (linePos) {
      case 'left':
        styleVal.top = `50%`;
        styleVal.transform = `translateY(-50%)`;
        styleVal.left = `-${lineLength}px`;
        styleVal.width = `${lineLength}px`;
        styleVal.height = lineW;
        break;
      case 'top':
        styleVal.left = `50%`;
        styleVal.transform = `translateX(-50%)`;
        styleVal.top = `-${lineLength}px`;
        styleVal.width = lineW;
        styleVal.height = `${lineLength}px`;
        break;
      default:
        break;
    }
  }
  if (lineColor) {
    styleVal.backgroundColor = lineColor;
  }
  return styleVal;
}

function setArrowName(item: any) {
  const { arrowPos } = item;
  let name = '';
  if (arrowPos) {
    switch (arrowPos) {
      case 'top':
        name = 'ArrowUpBold';
        break;
      case 'bottom':
        name = 'ArrowDownBold';
        break;
      case 'left':
        name = 'ArrowLeftBold';
        break;
      case 'right':
        name = 'ArrowRightBold';
        break;
      default:
        break;
    }
  }
  return name;
}

function setItemArrowStyle(item: any) {
  const { arrowPos } = item;
  let styleVal: any = {};
  switch (arrowPos) {
    case 'left':
      styleVal.top = `50%`;
      styleVal.transform = `translateY(-50%)`;
      styleVal.left = '-3px';
      break;
    case 'right':
      styleVal.top = `50%`;
      styleVal.transform = `translateY(-50%)`;
      styleVal.right = '-3px';
      break;
    case 'top':
      styleVal.left = `50%`;
      styleVal.transform = `translateX(-50%)`;
      styleVal.top = '-4px';
      break;
    case 'bottom':
      styleVal.left = `50%`;
      styleVal.transform = `translateX(-50%)`;
      styleVal.bottom = '-4px';
      break;
    default:
      break;
  }
  return styleVal;
}
</script>

<template>
  <div ref="lsFlowBoxRef" v-if="list && list.length > 0" :class="comClass" :style="flowBoxStyle">
    <div v-for="item in list" :key="item.slotName" :class="itemClass" :style="setItemStyle(item)">
      <slot :name="item.slotName"></slot>
      <div v-if="item.linePos && item.lineLength" :class="itemLineClass" :style="setItemLineStyle(item)">
        <LSIcon
          v-if="item.arrowPos"
          :class="itemArrowClass"
          :name="setArrowName(item)"
          :style="setItemArrowStyle(item)"
          :color="item.lineColor || '#ccc'"
        />
      </div>
    </div>
    <!-- 特殊合并箭头 -->
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.ls-flow-box {
  position: relative;
  .ls-flow-box-item {
    position: absolute;
    color: #ffffff;
    background-color: $color-brand5;
    border-radius: 6px;
    :deep() div {
      border-radius: 6px;
    }
    .ls-flow-box-item-line {
      position: absolute;
      background-color: $color-border9;
      .ls-flow-box-item-arrow {
        position: absolute;
      }
    }
  }
}
</style>

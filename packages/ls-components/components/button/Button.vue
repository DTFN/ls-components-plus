<script setup lang="ts" name="LSButton">
/**
 * @summary 按钮组件 - 基于 Element Plus 按钮的二次封装
 *
 * 这是自研库的标准按钮组件，提供了丰富的样式类型、尺寸选项和扩展功能。
 * 支持图标、文字、分隔符等多种组合方式，可独立使用或作为按钮组的一部分。
 *
 * @attr {string} type - 按钮类型，透传 `el-button` 的 `type` 配置
 * @attr {string} size - 按钮尺寸（large / default / small）
 * @attr {boolean} plain - 是否使用朴素按钮样式，背景为白色，边框为主题色
 * @attr {boolean} round - 是否使用圆角按钮，圆角半径为 999px
 * @attr {boolean} circle - 是否使用圆形按钮，适用于仅包含图标的场景
 * @attr {boolean} loading - 是否显示加载中状态，显示加载动画并禁用点击
 * @attr {boolean} disabled - 是否禁用按钮，禁用后按钮变灰且无法点击
 * @attr {Component} icon - Element Plus 图标组件；也可结合 `iconConfig` 或 `icon` 插槽自定义图标
 * @attr {boolean} autofocus - 是否自动获取焦点
 * @attr {string} native-type - 原生 button 元素的 type 属性 (button/submit/reset)
 * @attr {object} iconConfig - 图标配置对象，包含图标名称、大小、颜色等属性
 * @attr {string} separator - 分隔符文本，用于按钮组中的分隔线
 * @attr {string} separatorColor - 分隔符颜色，支持 CSS 颜色值
 * @attr {string} separatorSize - 分隔符字体大小，单位为 px
 *
 * @slot - 默认插槽，用于放置按钮文字内容
 * @slot icon - 图标插槽，用于自定义按钮图标，优先级高于 icon 属性
 *
 * @event click - 点击事件，点击按钮时触发
 * @event focus - 获得焦点事件
 * @event blur - 失去焦点事件
 *
 * @csspart button - 按钮主体元素，可用于自定义阴影 DOM 样式
 * @csspart icon - 图标元素
 * @csspart separator - 分隔符元素
 *
 * @example
 * <!-- 基础用法 -->
 * <LSButton type="primary" @click="handleClick">主要按钮</LSButton>
 *
 * <!-- 带图标按钮 -->
 * <LSButton type="success" icon="Check">成功按钮</LSButton>
 *
 * <!-- 加载中状态 -->
 * <LSButton type="primary" :loading="isLoading">提交中</LSButton>
 *
 * <!-- 禁用状态 -->
 * <LSButton type="danger" disabled>危险按钮</LSButton>
 *
 * <!-- 仅图标按钮 -->
 * <LSButton icon="Search" circle></LSButton>
 *
 * <!-- 自定义图标 -->
 * <LSButton type="primary">
 *   <template #icon>
 *     <CustomIcon />
 *   </template>
 *   自定义图标
 * </LSButton>
 *
 * <!-- 作为按钮组的一部分 -->
 * <LSButtonGroup separator="|" separatorColor="#ccc" separatorSize="14">
 *   <LSButton type="text">按钮1</LSButton>
 *   <LSButton type="text">按钮2</LSButton>
 * </LSButtonGroup>
 */

import { ref, computed, inject, useSlots } from 'vue';
import { lsBtnKey } from '@cpo/_constants';
import { lsBtnProp } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import LSIcon from '@cpo/icon/Index.vue';

const slots = useSlots();

defineProps(lsBtnProp);

interface separatorType {
  separator: string;
  separatorColor: string;
  separatorSize: string;
}

const ns = useNamespace('button');
const comClass: string = ns.b();

const lsBtnGroupProp: separatorType = inject(lsBtnKey, undefined)!;

const separator = ref('');
const separatorColor = ref('');
const separatorSize = ref('');

if (lsBtnGroupProp) {
  separator.value = lsBtnGroupProp.separator;
  separatorColor.value = lsBtnGroupProp.separatorColor;
  separatorSize.value = lsBtnGroupProp.separatorSize;
}

const separatorStyle = computed(() => {
  return {
    color: separatorColor.value,
    fontSize: `${separatorSize.value}px`
  };
});
</script>

<template>
  <template v-if="$attrs.icon && !slots.default">
    <el-button v-bind="$attrs" :class="comClass" />
    <div v-if="separator" class="ls-separator" :style="separatorStyle">{{ separator }}</div>
  </template>
  <template v-else>
    <el-button v-bind="$attrs" :class="comClass">
      <LSIcon
        v-if="!$attrs.icon && (iconConfig?.name || slots.icon)"
        :class="[!slots.default ? 'only-icon' : '']"
        v-bind="iconConfig"
      >
        <slot name="icon"></slot>
      </LSIcon>
      <slot v-if="slots.default"></slot>
      <span v-if="separator" class="ls-separator" :style="separatorStyle">{{ separator }}</span>
    </el-button>
  </template>
</template>

<style lang="scss" scoped>
.ls-button {
  .ls-icon {
    margin-right: 6px;
    &.only-icon {
      margin-right: 0;
    }
  }
  .ls-iconify {
    margin-right: 6px;
  }
  .ls-iconify,
  :deep(span) {
    line-height: normal;
    vertical-align: middle;
  }
}
.ls-separator {
  position: relative;
  display: inline-block;
  margin-right: 4px;
  margin-left: 8px;
  overflow: hidden;
  vertical-align: middle;
}
</style>

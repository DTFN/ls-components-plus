<script setup lang="ts">
/**
 * @summary 对话框组件 - 基于 Element Plus `el-dialog` 的二次封装
 *
 * `LSDialog` 在保留 `el-dialog` 常用属性/事件透传能力的基础上，补充了内置底部按钮、
 * 确认按钮 loading、内容滚动区和滚动区 loading 等业务能力。
 * 组件通过 `v-model` 控制显隐；当 `loading=true` 时，内置取消按钮会被禁用，右上角关闭按钮也会被隐藏。
 *
 * 组件自有属性：
 * @attr {boolean} hasFooter 是否显示底部操作区，默认 `true`
 * @attr {boolean} hasCancelBtn 是否显示内置取消按钮，默认 `true`
 * @attr {boolean} hasConfirmBtn 是否显示内置确认按钮，默认 `true`
 * @attr {boolean} loading 确认按钮 loading 状态；同时禁用取消按钮并隐藏关闭图标，默认 `false`
 * @attr {DialogBtnType} btnCancelConfig 取消按钮配置，继承按钮属性并额外支持 `txt`
 * @attr {DialogBtnType} btnConfirmConfig 确认按钮配置，继承按钮属性并额外支持 `txt`
 * @attr {boolean} contentLoading 内容滚动区 loading 状态，通常与 `openScroll` 搭配使用，默认 `false`
 * @attr {boolean} openScroll 是否启用滚动内容区；开启后会自动计算可滚动高度，默认 `false`
 *
 * 常用透传属性（来自 `el-dialog` / `$attrs`）：
 * @attr {boolean} v-model 控制对话框显示/隐藏
 * @attr {string} title 对话框标题
 * @attr {string|number} width 对话框宽度，默认 `50%`
 * @attr {boolean} showHeader 是否显示头部
 * @attr {boolean} showClose 是否显示关闭按钮
 * @attr {boolean} closeOnClickModal 是否允许点击蒙层关闭
 * @attr {boolean} closeOnPressEscape 是否允许按 `ESC` 关闭
 * @attr {number} zIndex 对话框层级，默认 `2000`
 * @attr {boolean} alignCenter 是否垂直居中，默认 `true`
 *
 * @slot default 对话框内容区域
 * @slot header 对话框头部区域
 * @slot footer 对话框底部区域；提供后可完全覆盖默认按钮区
 *
 * @event onCancel 触发关闭流程时触发，如点击内置取消按钮、关闭图标、遮罩或按 `ESC`
 * @event onConfirm 点击内置确认按钮时触发
 *
 * @example
 * <LSDialog v-model="visible" title="对话框标题" width="500px">
 *   <div>这是对话框内容。</div>
 * </LSDialog>
 *
 * @example
 * <LSDialog v-model="visible" title="带 loading 的对话框" :loading="confirmLoading" @on-confirm="handleConfirm">
 *   <div>点击确认后按钮进入 loading 状态。</div>
 * </LSDialog>
 *
 * @example
 * <LSDialog v-model="visible" title="滚动内容" :open-scroll="true" :content-loading="contentLoading">
 *   <div>超长内容...</div>
 * </LSDialog>
 */

import { useNamespace } from '@cpo/_hooks/useNamespace';
import { merge } from 'lodash-es';
import { DialogBtnType, lsDialogProp, lsEmitNames } from './types';

defineOptions({
  name: 'LSDialog',
  inheritAttrs: false
});

const props = defineProps(lsDialogProp);

const emits = defineEmits(lsEmitNames);

const slots: any = useSlots();

const visible = defineModel({
  type: Boolean
});

const ns = useNamespace('dialog');
const comClass: string = ns.b();

const lsDialogRef = ref();

const defAttrs = ref({
  width: '50%',
  closeOnClickModal: false,
  closeOnPressEscape: false,
  zIndex: 2000,
  alignCenter: true
});

const sHeight = ref(0);

watch(
  () => visible?.value,
  val => {
    if (val) {
      props.openScroll && updateHeight();
    }
  },
  {
    immediate: true,
    deep: true
  }
);

const curBtnCancelConfig = computed<DialogBtnType>(() => {
  return merge(
    {
      txt: '取消'
    },
    props.btnCancelConfig
  );
});

const curBtnConfirmConfig = computed<DialogBtnType>(() => {
  return merge(
    {
      type: 'primary',
      txt: '确认'
    },
    props.btnConfirmConfig
  );
});

function handleClose() {
  emits('onCancel');
}

function handleBtnClose() {
  visible.value = false;
}

function handleConfirm() {
  emits('onConfirm');
}

async function updateHeight() {
  await nextTick();
  const h = props.hasFooter ? 108 : 60;
  sHeight.value = parseInt(getComputedStyle(lsDialogRef.value.querySelector('.el-dialog')).height) - h;
}

defineExpose({
  updateHeight,
  lsDialogRef
});
</script>

<template>
  <el-dialog
    ref="lsDialogRef"
    :class="comClass"
    v-model="visible"
    :show-close="!loading"
    v-bind="merge(defAttrs, $attrs)"
    @close="handleClose"
  >
    <el-scrollbar v-if="openScroll" v-bind="merge(defAttrs, $attrs)" :max-height="sHeight" v-loading="contentLoading">
      <slot></slot>
    </el-scrollbar>
    <div v-else class="content-wrap">
      <slot></slot>
    </div>
    <template #header>
      <slot name="header"></slot>
    </template>
    <template v-if="hasFooter" #footer>
      <div class="dialog-footer">
        <slot v-if="slots.footer" name="footer"></slot>
        <LSButton v-if="hasCancelBtn" v-bind="curBtnCancelConfig" :disabled="loading" @click="handleBtnClose">
          {{ curBtnCancelConfig.txt }}
        </LSButton>
        <LSButton v-if="hasConfirmBtn" v-bind="curBtnConfirmConfig" :loading="loading" @click="handleConfirm">
          {{ curBtnConfirmConfig.txt }}
        </LSButton>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss">
.ls-dialog {
  &.el-dialog {
    overflow: hidden;
    .el-dialog__body {
      max-height: 78vh !important;
      overflow: auto;
      .content-wrap {
        padding-bottom: 1px;
      }
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 4px;
      }
      &:hover::-webkit-scrollbar-thumb {
        background-color: rgba(#909399, 0.3);
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(#909399, 0.5);
      }
      &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 4px;
      }
    }
  }
}
</style>

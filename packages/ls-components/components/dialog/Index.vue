<script setup lang="ts">
/**
 * @summary 对话框组件 - 基于 Element Plus Dialog 的二次封装
 *
 * 提供了一套完整的对话框解决方案，支持自定义页头、页脚、加载状态、滚动区域等。
 * 内置了确认/取消按钮配置，支持高度自定义的对话框内容和布局。
 *
 * @attr {boolean} v-model - 双向绑定，控制对话框的显示与隐藏
 * @attr {string} title - 对话框标题
 * @attr {string} width - 对话框宽度，支持 CSS 单位 (默认: 50%)
 * @attr {boolean} hasFooter - 是否显示底部操作栏 (默认: true)
 * @attr {boolean} hasCancelBtn - 是否显示取消按钮 (默认: true)
 * @attr {boolean} hasConfirmBtn - 是否显示确认按钮 (默认: true)
 * @attr {boolean} loading - 是否显示加载状态，显示时禁用关闭按钮 (默认: false)
 * @attr {boolean} openScroll - 是否启用滚动区域，启用后可设置最大高度 (默认: false)
 * @attr {boolean} contentLoading - 内容区域是否处于加载状态，显示加载动画 (默认: false)
 * @attr {boolean} hasFooter - 是否显示底部操作栏 (默认: true)
 * @attr {DialogBtnType} btnCancelConfig - 取消按钮配置对象 { txt: string, type: string, ... }
 * @attr {DialogBtnType} btnConfirmConfig - 确认按钮配置对象 { txt: string, type: string, ... }
 * @attr {boolean} closeOnClickModal - 是否可以通过点击遮罩层关闭对话框 (默认: false)
 * @attr {boolean} closeOnPressEscape - 是否可以通过按下 ESC 键关闭对话框 (默认: false)
 * @attr {number} zIndex - 对话框的 z-index 层级 (默认: 2000)
 * @attr {boolean} alignCenter - 是否居中显示对话框 (默认: true)
 * @attr {boolean} showClose - 是否显示关闭图标 (默认: true)
 * @attr {boolean} draggable - 对话框是否可拖拽 (默认: false)
 * @attr {string} class - 自定义 CSS 类名
 * @attr {string} style - 内联样式
 * @attr {any} otherAttrs - 继承自 Element Plus Dialog 的所有其他属性
 *
 * @slot - 默认插槽，对话框主体内容
 * @slot header - 页头插槽，自定义对话框标题区域
 * @slot footer - 页脚插槽，自定义底部操作栏
 *
 * @event onCancel - 取消事件，点击取消按钮或关闭图标时触发
 * @event onConfirm - 确认事件，点击确认按钮时触发
 * @event close - 对话框关闭事件
 * @event open - 对话框打开事件
 * @event opened - 对话框打开动画完成事件
 * @event closed - 对话框关闭动画完成事件
 *
 * @csspart dialog - 对话框主体容器
 * @csspart header - 页头区域
 * @csspart body - 内容区域
 * @csspart footer - 页脚区域
 * @csspart button-cancel - 取消按钮
 * @csspart button-confirm - 确认按钮
 * @csspart scrollbar - 滚动条容器（当 openScroll 为 true 时）
 *
 * @example
 * <!-- 基础用法 -->
 * <LSDialog v-model="visible" title="提示">
 *   <p>这是一段对话框内容</p>
 * </LSDialog>
 *
 * @example
 * <!-- 带确认/取消按钮 -->
 * <LSDialog
 *   v-model="visible"
 *   title="确认删除"
 *   @onConfirm="handleConfirm"
 *   @onCancel="handleCancel"
 * >
 *   <p>确定要删除该项吗？</p>
 * </LSDialog>
 *
 * @example
 * <!-- 自定义按钮文本 -->
 * <LSDialog
 *   v-model="visible"
 *   title="提交审核"
 *   :btnConfirmConfig="{ txt: '提交', type: 'success' }"
 *   :btnCancelConfig="{ txt: '取消' }"
 * >
 *   <el-form>...</el-form>
 * </LSDialog>
 *
 * @example
 * <!-- 加载状态 -->
 * <LSDialog
 *   v-model="visible"
 *   title="数据加载"
 *   :loading="isLoading"
 * >
 *   <p>正在加载数据...</p>
 * </LSDialog>
 *
 * @example
 * <!-- 滚动区域 -->
 * <LSDialog
 *   v-model="visible"
 *   title="详细内容"
 *   :openScroll="true"
 *   height="60vh"
 * >
 *   <div v-for="i in 100" :key="i">第 {{ i }} 行内容</div>
 * </LSDialog>
 *
 * @example
 * <!-- 自定义页脚 -->
 * <LSDialog v-model="visible" title="自定义操作">
 *   <template #default>
 *     <p>对话框内容</p>
 *   </template>
 *   <template #footer>
 *     <LSButton @click="handleSave">保存草稿</LSButton>
 *     <LSButton type="primary" @click="handlePublish">立即发布</LSButton>
 *   </template>
 * </LSDialog>
 *
 * @example
 * <!-- 内容区域加载中 -->
 * <LSDialog
 *   v-model="visible"
 *   title="数据详情"
 *   :contentLoading="contentLoading"
 * >
 *   <div v-if="!contentLoading">详细内容...</div>
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

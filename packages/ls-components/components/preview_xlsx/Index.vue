<script setup lang="ts" name="LSPreviewXlsx">
/**
 * @summary Excel表格预览组件
 *
 * 用于预览XLSX格式的Excel表格文件，支持水印、下载等功能
 *
 * @attr {boolean} v-model - 控制预览弹窗显示/隐藏
 * @attr {string} title - 预览标题
 * @attr {string|File} source - Excel数据源（URL或File对象）
 * @attr {boolean} hideOnClickModal - 是否允许点击遮罩关闭
 * @attr {boolean} showWatermark - 是否显示水印
 * @attr {object} watermarkOption - 水印配置
 * @attr {boolean} showDownload - 是否显示下载按钮
 * @attr {function} beforeDownload - 下载前回调
 * @attr {string} customClass - 自定义类名
 * @attr {object} modalStyle - 弹窗样式
 * @attr {boolean} showErrorMsg - 是否显示错误信息
 *
 * @slot 无
 *
 * @event loadComplete - 加载完成事件
 * @event loadError - 加载错误事件
 * @event onDownload - 下载事件
 *
 * @csspart preview-xlsx - 预览容器
 *
 * @example
 * <!-- 基础预览 -->
 * <LSPreviewXlsx v-model="visible" :source="xlsxUrl" title="表格预览" />
 *
 * @example
 * <!-- 从文件预览 -->
 * <LSPreviewXlsx
 *   v-model="visible"
 *   :source="excelFile"
 *   :showDownload="true"
 * />
 */
import LSXlsx from './Xlsx.vue';
import { merge } from 'lodash-es';
import usePreviewHook from '@cpo/_hooks/usePreviewHook';
import { lsPreviewProp } from '@cpo/_constants/previewType';

defineOptions({
  name: 'LSPreviewXlsx',
  components: {
    LSXlsx
  },
  inheritAttrs: false
});

const emits = defineEmits<{
  (e: 'loadComplete'): void;
  (e: 'loadError'): void;
  (e: 'onDownload', data: any): void;
}>();

const props = defineProps(lsPreviewProp);

const previewVisible = defineModel({
  type: Boolean
});

const { comClass, defAttrs, closeLoading, watermarkStyle } = usePreviewHook(props, previewVisible);

const loadComplete = () => {
  closeLoading();
  emits('loadComplete');
};

const loadError = () => {
  closeLoading();
  emits('loadError');
};

function onDownload(data: any) {
  emits('onDownload', data);
}
</script>

<template>
  <div v-if="previewVisible" :class="comClass">
    <el-watermark v-if="showWatermark" v-bind="watermarkOption" :style="watermarkStyle">
      <LSXlsx v-bind="merge(defAttrs, $attrs)" @load-complete="loadComplete" @load-error="loadError" @on-download="onDownload" />
    </el-watermark>
    <LSXlsx
      v-else
      v-bind="merge(defAttrs, $attrs)"
      @load-complete="loadComplete"
      @load-error="loadError"
      @on-download="onDownload"
    />
    <div class="ls-preview-extra">
      <slot name="extra"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@forward '@cpo/_style/preview.scss';
</style>

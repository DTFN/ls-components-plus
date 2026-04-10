<script setup lang="ts" name="LSPreviewXlsx">
/**
 * @summary Excel 表格预览组件
 *
 * 用于预览 XLSX 文件，支持水印、下载扩展、大文件分页渲染和额外操作区插槽。
 *
 * @attr {boolean} v-model - 控制预览弹窗显示/隐藏
 * @attr {File|string} source - Excel 数据源（File 对象或 URL 字符串）
 * @attr {Function} onClose - 关闭预览时的回调函数
 * @attr {boolean} showWatermark - 是否显示水印
 * @attr {object} watermarkOption - 水印配置，具体参考 `el-watermark`
 * @attr {boolean} hasDownload - 是否显示下载按钮
 * @attr {object} downloadData - 下载数据，点击下载时通过 `onDownload` 事件传出
 * @attr {boolean} hasPagination - 大文件预览时是否启用分页渲染
 *
 * @slot extra - 自定义额外操作区域
 *
 * @event loadComplete - 文档加载完成事件
 * @event loadError - 文档加载失败事件
 * @event onDownload - 点击下载按钮触发，参数为 `downloadData`
 *
 * @csspart preview-xlsx - 预览容器
 *
 * @example
 * <!-- 基础预览 -->
 * <LSPreviewXlsx
 *   v-model="visible"
 *   :source="xlsxUrl"
 *   :onClose="() => (visible = false)"
 * />
 *
 * @example
 * <!-- 带下载功能 -->
 * <LSPreviewXlsx
 *   v-model="visible"
 *   :source="xlsxUrl"
 *   :onClose="() => (visible = false)"
 *   :hasDownload="true"
 *   :downloadData="{ fileName: '示例表格.xlsx' }"
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

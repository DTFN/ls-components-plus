<script setup lang="ts" name="LSCropper">
/**
 * @summary 图片裁剪组件 - 基于 Vue-Cropper 的二次封装
 *
 * 这是自研库的图片裁剪组件，基于 Vue-Cropper 实现。
 * 支持方形、圆形裁剪，支持实时预览、固定比例、旋转缩放等功能。
 *
 * @attr {string} imgUrl - 图片地址
 * @attr {string} graphicsType - 裁剪形状，square 或 circle
 * @attr {array} autoCropWidth - 裁剪框宽度
 * @attr {array} autoCropHeight - 裁剪框高度
 * @attr {boolean} fixed - 是否固定比例
 * @attr {array} fixedNumber - 固定比例值
 * @attr {boolean} full - 是否显示完整图片
 * @attr {boolean} canMove - 是否可以移动图片
 * @attr {boolean} canMoveBox - 是否可以移动裁剪框
 * @attr {boolean} original - 是否显示原图
 * @attr {boolean} autoCrop - 是否自动裁剪
 * @attr {boolean} centerBox - 裁剪框是否居中
 * @attr {boolean} high - 是否高质量裁剪
 * @attr {boolean} infoTrue - 是否显示真实大小
 * @attr {number} maxImgSize - 图片最大尺寸
 * @attr {boolean} enlarge - 是否放大
 * @attr {boolean} mode - 裁剪模式
 * @attr {number} limitMinSize - 最小裁剪尺寸
 *
 * @slot 无
 *
 * @event onRealTime - 实时预览事件
 * @event onImgMoving - 图片移动事件
 * @event onCropMoving - 裁剪框移动事件
 *
 * @csspart cropper - 裁剪容器
 *
 * @example
 * <!-- 基础裁剪 -->
 * <LSCropper
 *   :imgUrl="imageUrl"
 *   graphicsType="square"
 *   :autoCropWidth="[200, 200]"
 * />
 */
import { VueCropper } from 'vue-cropper';
import 'vue-cropper/dist/index.css';
import { lsEmits, lsProps } from './types';
import { useNamespace } from '@cpo/_hooks/useNamespace';

const ns = useNamespace('cropper');
const comClass: string = ns.b();

const props = defineProps(lsProps);

const emits = defineEmits(lsEmits);
const lsCropperRef = ref();

const previewUrl = ref('');

function realTime(data: any) {
  const imgUrl: any = props.imgUrl;
  if (imgUrl && lsCropperRef.value) {
    lsCropperRef.value.getCropBlob(async (blob: Blob) => {
      drawAndClipImage(blob, data);
    });
  }
}

function drawAndClipImage(blob: Blob, data: any) {
  if (props.graphicsType === 'square') {
    // 若裁剪形状为方形，则不进行二次裁剪，直接返回
    excuteCropData(blob, data);
    return;
  }
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  reader.onload = (e: any) => {
    const src = e.target.result;
    const image = new Image();
    image.src = src;

    image.onload = () => {
      const canvas = document.createElement('canvas');
      const width = image.width;
      const height = image.height;
      canvas.width = width;
      canvas.height = height;
      // 计算圆形图片的圆心及图片半径
      const circle = {
        x: width / 2,
        y: height / 2,
        r: width / 2
      };
      const context: any = canvas.getContext('2d');
      context.clearRect(0, 0, width, height);
      // 在canvas开始绘制前填充白色透明背景并设置透明度，用以清除图片裁剪后透明区域变成黑色的问题
      context.fillStyle = 'rgba(255, 255, 255, 0)';
      context.fillRect(0, 0, width, height);

      // 开始路径画圆，剪切处理
      context.save(); // 保存当前canvas的状态
      context.beginPath();
      context.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false); // 创建弧/曲线(用于创建圆形或部分圆)
      context.clip(); // 从原始画布剪切任意形状和尺寸的区域
      context.drawImage(image, 0, 0);
      context.restore(); // 返回之前保存过的路径状态和属性，恢复状态

      // 将canvas图片转换成 blob数据
      canvas.toBlob((res: any) => {
        // 内部注释参考 getCropBlob方法 else部分
        excuteCropData(res, data);
      });
    };

    image.onerror = err => {
      emits('onCropError', err);
    };
  };
  reader.onerror = err => {
    emits('onCropError', err);
  };
}

function excuteCropData(res: any, data: any) {
  const file = new File([res], props.fileName, { type: res.type });
  previewUrl.value = URL.createObjectURL(res);
  emits('onCropData', { file, url: previewUrl.value, data });
}

defineExpose({
  lsCropperRef
});
</script>

<template>
  <div :class="comClass">
    <VueCropper
      ref="lsCropperRef"
      :class="graphicsType"
      :auto-crop="true"
      :fixed="true"
      :can-move="true"
      :img="imgUrl"
      :limit-min-size="limitMinSize"
      :output-type="outputType"
      :original="false"
      :info-true="true"
      v-bind="$attrs"
      @real-time="realTime"
    ></VueCropper>
    <div v-if="showPreview" class="ls-cropper-preview">
      <img :src="previewUrl" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ls-cropper {
  position: relative;
}
.vue-cropper {
  width: 100%;
  height: 300px;
}
.ls-cropper-preview {
  width: 100%;
  height: 160px;
  padding: 12px;
  margin-top: 24px;
  text-align: center;
  background-color: #f5f5f5;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.circular {
  :deep(.cropper-view-box) {
    border-radius: 50%; // 将裁剪框由方形调整为圆形
  }
  :deep(.cropper-face) {
    background-color: transparent; // 清除裁剪框填充背景色
  }
}
</style>

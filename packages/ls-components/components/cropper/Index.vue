<script setup lang="ts" name="LSCropper">
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
  if (imgUrl) {
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
      :can-move="false"
      :img="imgUrl"
      :limit-min-size="limitMinSize"
      :output-type="outputType"
      :original="true"
      v-bind="$attrs"
      @real-time="realTime"
    ></VueCropper>
    <div v-if="showPreview" class="ls-cropper-preview">
      <img :src="previewUrl" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vue-cropper {
  width: 600px;
  height: 300px;
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

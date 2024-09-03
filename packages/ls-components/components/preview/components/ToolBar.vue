<template>
  <div class="tool-bar">
    <template v-if="props.showZoom">
      <el-icon :size="config.size" :color="config.color" @click="zoomFunc('out')"><ZoomOut /></el-icon>
      <el-icon :size="config.size" :color="config.color" @click="zoomFunc('in')"><ZoomIn /></el-icon>
    </template>
    <LSIcon name="close-circle" :size="config.size" @click="closeFunc"></LSIcon>
  </div>
</template>

<script setup lang="ts" name="ToolBar">
import { debounce } from 'lodash-es';
import { getVariable } from '@cpo/_utils/config';
import type { LSUnionTypeMNS } from '@cpo/_utils/types';
import { isServerRendering } from '@cpo/_utils/dom';

interface configType {
  size: number;
  color: string;
  zoomStep: number;
  zoomSize: number;
}

const config: configType = reactive({
  size: 36,
  color: getVariable('--color-text4'),
  zoomStep: 0.2,
  zoomSize: 1.0
});

const props = defineProps({
  showZoom: {
    type: Boolean,
    default: false
  },
  zoomMax: {
    type: Number,
    default: 2
  },
  zoomMin: {
    type: Number,
    default: 0.4
  }
});

const emits = defineEmits<{
  (e: 'closeFile'): void;
  (e: 'zoomFile', value: LSUnionTypeMNS): void;
}>();

const closeFunc = () => {
  emits('closeFile');
};

const zoomFunc = (type: string) => {
  debounce(() => {
    if (!isServerRendering) {
      if (type === 'out') {
        if (config.zoomSize <= props.zoomMin) {
          return;
        }
        config.zoomSize = Number((Number(config.zoomSize) - Number(config.zoomStep)).toFixed(1));
      } else {
        if (config.zoomSize >= props.zoomMax) {
          return;
        }
        config.zoomSize = Number((Number(config.zoomSize) + Number(config.zoomStep)).toFixed(1));
      }

      emits('zoomFile', {
        zoomSize: config.zoomSize
      });
    }
  }, 200)();
};
</script>

<style lang="scss" scoped>
.tool-bar {
  position: absolute;
  top: 50px;
  right: 46px;
  z-index: 999;
  cursor: pointer;
  .el-icon {
    margin-right: 6px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>

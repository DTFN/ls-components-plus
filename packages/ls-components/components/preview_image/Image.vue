<template>
  <div>
    <teleport to="body" :disabled="!teleported">
      <transition name="viewer-fade" appear>
        <div ref="wrapper" :tabindex="-1" :class="ns.e('wrapper')" :style="{ zIndex: computedZIndex }">
          <div :class="ns.e('mask')" @click.self="hideOnClickModal && hide()" />

          <!-- CLOSE -->
          <span :class="[ns.e('btn'), ns.e('close')]" @click="hide">
            <LSIcon name="Close" :size="24" color="#FFF" />
          </span>

          <!-- ARROW -->
          <template v-if="!isSingle">
            <span :class="[ns.e('btn'), ns.e('prev'), ns.is('disabled', !infinite && isFirst)]" @click="prev">
              <LSIcon name="ArrowLeft" :size="24" color="#FFF" />
            </span>
            <span :class="[ns.e('btn'), ns.e('next'), ns.is('disabled', !infinite && isLast)]" @click="next">
              <LSIcon name="ArrowRight" :size="24" color="#FFF" />
            </span>
          </template>
          <!-- ACTIONS -->
          <div :class="[ns.e('btn'), ns.e('actions')]">
            <div :class="ns.e('actions__inner')">
              <LSIcon name="ZoomOut" :size="24" color="#FFF" @click="handleActions('zoomOut')" />
              <LSIcon name="ZoomIn" :size="24" color="#FFF" @click="handleActions('zoomIn')" />
              <i :class="ns.e('actions__divider')" />
              <LSIcon :name="mode.name" :size="24" color="#FFF" @click="toggleMode" />
              <i :class="ns.e('actions__divider')" />
              <LSIcon name="RefreshLeft" :size="24" color="#FFF" @click="handleActions('anticlockwise')" />
              <LSIcon name="RefreshRight" :size="24" color="#FFF" @click="handleActions('clockwise')" />
            </div>
          </div>
          <!-- CANVAS -->
          <div v-if="source" :class="ns.e('canvas')">
            <template v-if="isArray(source)">
              <img
                v-for="(url, i) in source"
                v-show="i === activeIndex"
                :ref="el => (imgRefs[i] = el as HTMLImageElement)"
                :key="url"
                :src="url"
                :style="imgStyle"
                :class="ns.e('img')"
                @load="handleImgLoad"
                @error="handleImgError"
                @mousedown="handleMouseDown"
              />
            </template>
            <img
              v-else
              :ref="el => (imgRefs[0] = el as HTMLImageElement)"
              :key="source"
              :src="source"
              :style="imgStyle"
              :class="ns.e('img')"
              @load="handleImgLoad"
              @error="handleImgError"
              @mousedown="handleMouseDown"
            />
          </div>
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts" name="LSImage">
import { useEventListener } from '@vueuse/core';
import { throttle } from 'lodash-unified';
import { useNamespace } from '@cpo/_hooks/useNamespace';
import { useZIndex } from '@cpo/_hooks/useZIndex';
import { EVENT_CODE } from '@cpo/_constants';
import { isArray, isFirefox, isNumber, isString } from '@cpo/_utils/check';
import { keysOf } from '@cpo/_utils/types';
import { imageViewerProps } from './types';
import { previewEmits } from '@cpo/_constants/prviewType';
import type { CSSProperties } from 'vue';
import type { ImageViewerAction, ImageViewerMode } from './types';
import LSIcon from '@cpo/icon/Index.vue';
import { merge } from 'lodash-es';

const modes: Record<'CONTAIN' | 'ORIGINAL', ImageViewerMode> = {
  CONTAIN: {
    name: 'FullScreen'
  },
  ORIGINAL: {
    name: 'ScaleToOriginal'
  }
};

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel';

const props = defineProps(imageViewerProps);
const emits = defineEmits(previewEmits);

const ns = useNamespace('image');
const { nextZIndex } = useZIndex();
const wrapper = ref<HTMLDivElement>();
const imgRefs = ref<HTMLImageElement[]>([]);

const scopeEventListener = effectScope();

const loading = ref(true);
const activeIndex = ref(props.initialIndex);
const mode = shallowRef<ImageViewerMode>(modes.CONTAIN);
const transform = reactive({
  scale: 1,
  deg: 0,
  offsetX: 0,
  offsetY: 0,
  enableTransition: false,
  width: 'auto',
  height: 'auto',
  objectFit: 'none'
});
const isSingle = computed(() => {
  const { source } = props;
  return isString(source) || source.length <= 1;
});
const isFirst = computed(() => {
  return activeIndex.value === 0;
});
const isLast = computed(() => {
  return activeIndex.value === props.source.length - 1;
});
const currentImg = computed(() => {
  return props.source[activeIndex.value];
});
const imgStyle = computed(() => {
  const { scale, deg, offsetX, offsetY, enableTransition, width, height, objectFit } = transform;
  let translateX = offsetX / scale;
  let translateY = offsetY / scale;

  switch (deg % 360) {
    case 90:
    case -270:
      [translateX, translateY] = [translateY, -translateX];
      break;
    case 180:
    case -180:
      [translateX, translateY] = [-translateX, -translateY];
      break;
    case 270:
    case -90:
      [translateX, translateY] = [-translateY, translateX];
      break;
  }

  const style: CSSProperties | any = {
    transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
    transition: enableTransition ? 'transform .3s' : ''
  };
  if (mode.value.name === modes.CONTAIN.name) {
    style.maxWidth = style.maxHeight = '100%';
  }
  style.width = width;
  style.height = height;
  style.objectFit = objectFit;
  return style;
});
const computedZIndex = computed(() => {
  return isNumber(props.zIndex) ? props.zIndex : nextZIndex();
});

const closeFunc = () => {
  props.onClose && props.onClose();
  emits('update:source', []);
};

function hide() {
  unregisterEventListener();
  closeFunc();
}

function registerEventListener() {
  const keydownHandler = throttle((e: KeyboardEvent) => {
    switch (e.code) {
      // ESC
      case EVENT_CODE.esc:
        props.closeOnPressEscape && hide();
        break;
      // SPACE
      case EVENT_CODE.space:
        toggleMode();
        break;
      // LEFT_ARROW
      case EVENT_CODE.left:
        prev();
        break;
      // UP_ARROW
      case EVENT_CODE.up:
        handleActions('zoomIn');
        break;
      // RIGHT_ARROW
      case EVENT_CODE.right:
        next();
        break;
      // DOWN_ARROW
      case EVENT_CODE.down:
        handleActions('zoomOut');
        break;
    }
  });
  const mousewheelHandler = throttle((e: WheelEvent | any /* TODO: wheelDelta is deprecated */) => {
    const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
    if (delta > 0) {
      handleActions('zoomIn', {
        zoomRate: 1.2,
        enableTransition: false
      });
    } else {
      handleActions('zoomOut', {
        zoomRate: 1.2,
        enableTransition: false
      });
    }
  });

  scopeEventListener.run(() => {
    useEventListener(document, 'keydown', keydownHandler);
    useEventListener(document, mousewheelEventName, mousewheelHandler);
  });
}
function unregisterEventListener() {
  scopeEventListener.stop();
}
function handleImgLoad() {
  loading.value = false;
  emits('loadComplete');
}
function handleImgError(e: Event) {
  loading.value = false;
  (e.target as HTMLImageElement).alt = 'ls.image.error';
  emits('loadError');
}

function handleMouseDown(e: MouseEvent) {
  if (loading.value || e.button !== 0 || !wrapper.value) return;
  transform.enableTransition = false;

  const { offsetX, offsetY } = transform;
  const startX = e.pageX;
  const startY = e.pageY;

  const dragHandler = throttle((ev: MouseEvent) => {
    transform.offsetX = offsetX + ev.pageX - startX;
    transform.offsetY = offsetY + ev.pageY - startY;
  });
  const removeMousemove = useEventListener(document, 'mousemove', dragHandler);
  useEventListener(document, 'mouseup', () => {
    removeMousemove();
  });

  e.preventDefault();
}

function reset() {
  merge(transform, {
    scale: 1,
    deg: 0,
    offsetX: 0,
    offsetY: 0,
    enableTransition: false,
    width: 'auto',
    height: 'auto',
    objectFit: 'none'
  });
}

function fullScreen() {
  merge(transform, {
    scale: 1,
    deg: 0,
    offsetX: 0,
    offsetY: 0,
    enableTransition: false,
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  });
}

function toggleMode() {
  if (loading.value) return;

  const modeNames = keysOf(modes);
  const modeValues = Object.values(modes);
  const currentMode = mode.value.name;
  const index = modeValues.findIndex(i => i.name === currentMode);
  const nextIndex = (index + 1) % modeNames.length;
  mode.value = modes[modeNames[nextIndex]];
  if (currentMode === modes.CONTAIN.name) {
    fullScreen();
  } else {
    reset();
  }
}

function setActiveItem(index: number) {
  const len = props.source.length;
  activeIndex.value = (index + len) % len;
}
function prev() {
  if (isFirst.value && !props.infinite) return;
  setActiveItem(activeIndex.value - 1);
}

function next() {
  if (isLast.value && !props.infinite) return;
  setActiveItem(activeIndex.value + 1);
}
function handleActions(action: ImageViewerAction, options = {}) {
  if (loading.value) return;
  const { zoomRate, rotateDeg, enableTransition } = {
    zoomRate: 1.4,
    rotateDeg: 90,
    enableTransition: true,
    ...options
  };
  switch (action) {
    case 'zoomOut':
      if (transform.scale > 0.2) {
        transform.scale = Number.parseFloat((transform.scale / zoomRate).toFixed(3));
      }
      break;
    case 'zoomIn':
      if (transform.scale < 7) {
        transform.scale = Number.parseFloat((transform.scale * zoomRate).toFixed(3));
      }
      break;
    case 'clockwise':
      transform.deg += rotateDeg;
      break;
    case 'anticlockwise':
      transform.deg -= rotateDeg;
      break;
  }
  transform.enableTransition = enableTransition;
}

watch(currentImg, () => {
  nextTick(() => {
    const $img = imgRefs.value[0];
    if (!$img?.complete) {
      loading.value = true;
    }
  });
});

watch(activeIndex, val => {
  // reset();
  emits('switch', val);
});

onMounted(() => {
  registerEventListener();
  // add tabindex then wrapper can be focusable via Javascript
  // focus wrapper so arrow key can't cause inner scroll behavior underneath
  wrapper.value?.focus?.();
});

defineExpose({
  /** @description manually switch image */
  setActiveItem
});
</script>

<style lang="scss" scoped>
@mixin op-icon() {
  width: 44px;
  height: 44px;
  font-size: 24px;
  color: #ffffff;
  background-color: #606266;
  border-color: #ffffff;
}
.ls-image__wrapper {
  position: fixed;
  inset: 0;
}
.ls-image__btn {
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  opacity: 0.8;
  .ls-icon {
    font-size: inherit;
    cursor: pointer;
  }
  &.ls-image__close {
    top: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    font-size: 40px;

    @include op-icon;
  }
}
.ls-image__canvas {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
}
.ls-image__actions {
  bottom: 30px;
  left: 50%;
  width: 282px;
  height: 44px;
  padding: 0 23px;
  background-color: #606266;
  border-color: #ffffff;
  border-radius: 22px;
  transform: translateX(-50%);
  .ls-image__actions__inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    font-size: 23px;
    color: #ffffff;
    text-align: justify;
    cursor: default;
    .el-icon {
      cursor: pointer;
    }
  }
}
.ls-image__prev {
  top: 50%;
  left: 40px;
  transform: translateY(-50%);

  @include op-icon;
}
.ls-image__next {
  top: 50%;
  right: 40px;
  text-indent: 2px;
  transform: translateY(-50%);

  @include op-icon;
}
.ls-image__mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.viewer-fade-enter-active {
  animation: viewer-fade-in getcssvar('transition-duration');
}
.viewer-fade-leave-active {
  animation: viewer-fade-out getcssvar('transition-duration');
}

@keyframes viewer-fade-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes viewer-fade-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
}
</style>

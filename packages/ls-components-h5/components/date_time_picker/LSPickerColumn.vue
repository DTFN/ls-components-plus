<script setup lang="ts">
import type { PickerFieldNames, PickerOption } from './types';
import { numericProp } from './types';
import { useEventListener } from '@cpo/_utils/useEventListener';
import { getElementTranslateY, useTouch } from '@cpo/_utils/useTouch';
import { clamp, findIndexOfEnabledOption, makeRequiredProp, preventDefault } from '@cpo/_utils/util';
import { computed, PropType, ref, watch } from 'vue';

const props = defineProps({
  list: {
    type: Array as () => number[],
    default: () => []
  },
  isTime: {
    type: Boolean,
    default: false
  },
  optionHeight: {
    type: Number,
    default: 44
  },
  readonly: {
    type: Boolean,
    default: false
  },
  value: numericProp,
  fields: makeRequiredProp(Object as PropType<Required<PickerFieldNames>>),
  swipeDuration: makeRequiredProp(numericProp),
  visibleOptionNum: makeRequiredProp(numericProp),
  columnsType: {
    type: String,
    default: ''
  }
});

const emits = defineEmits(['change', 'clickOption', 'scrollInto']);

let options: PickerOption[] = props.list.map(item => ({
  text: item.toString(),
  value: item
}));

const DEFAULT_DURATION = 200;

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_TIME` 且 move
// 距离大于 `MOMENTUM_DISTANCE` 时，执行惯性滑动
const MOMENTUM_TIME = 300;
const MOMENTUM_DISTANCE = 15;

const isReadonly = () => props.readonly || !options.length;
const touch = useTouch();

let moving: boolean = false;
let startOffset: number = 0;
let touchStartTime: number = 0;
let momentumOffset: number = 0;
let transitionEndTrigger: null | (() => void);

const rootRef = ref<HTMLElement>();
const wrapperRef = ref<HTMLElement>();
const currentOffset = ref(0);
const currentDuration = ref(0);

const count = () => options.length;

const currentIndex = computed(() => getIndexByOffset(currentOffset.value));

const wrapperStyle = computed(() => ({
  transform: `translate3d(0, ${currentOffset.value + baseOffset()}px, 0)`,
  transitionDuration: `${currentDuration.value}ms`,
  transitionProperty: currentDuration.value ? 'all' : 'none'
}));

watch(
  () => props.list,
  newList => {
    options = [];
    newList.forEach(item => {
      options.push({
        text: item.toString(),
        value: item
      });
    });

    updateOffset();
  },
  { immediate: true }
);

watch(
  () => props.value,
  () => {
    updateOffset();
  },
  { immediate: true }
);

function updateOffset() {
  const index = moving
    ? Math.floor(-currentOffset.value / props.optionHeight)
    : options.findIndex(option => option[props.fields.value] === Number(props.value));
  const enabledIndex = findIndexOfEnabledOption(options, index);
  const offset = -enabledIndex * props.optionHeight;
  if (moving && enabledIndex < index) stopMomentum();
  currentOffset.value = offset;
}

function updateValueByIndex(index: number) {
  let enabledIndex = findIndexOfEnabledOption(options, index);
  const offset = -enabledIndex * props.optionHeight;

  const trigger = () => {
    if (enabledIndex > count() - 1) {
      enabledIndex = findIndexOfEnabledOption(options, index);
    }

    const value = options[enabledIndex]?.[props?.fields?.value];

    if (value !== props.value) {
      emits('change', value);
    }
  };

  // trigger the change event after transitionend when moving
  if (moving && offset !== currentOffset.value) {
    transitionEndTrigger = trigger;
  } else {
    trigger();
  }

  currentOffset.value = offset;
}

function getIndexByOffset(offset: number) {
  return clamp(Math.round(-offset / props.optionHeight), 0, count() - 1);
}

function momentum(distance: number, duration: number) {
  const speed = Math.abs(distance / duration);

  distance = currentOffset.value + (speed / 0.003) * (distance < 0 ? -1 : 1);

  const index = getIndexByOffset(distance);

  currentDuration.value = +props.swipeDuration;
  updateValueByIndex(index);
}

function baseOffset() {
  return (props.optionHeight * (+props.visibleOptionNum - 1)) / 2;
}

function stopMomentum() {
  moving = false;
  currentDuration.value = 0;

  if (transitionEndTrigger) {
    transitionEndTrigger();
    transitionEndTrigger = null;
  }
}

function onTouchStart(event: TouchEvent) {
  if (isReadonly()) {
    return;
  }

  touch.start(event);

  if (moving) {
    const translateY = getElementTranslateY(wrapperRef.value!);
    currentOffset.value = Math.min(0, translateY - baseOffset());
  }

  currentDuration.value = 0;
  startOffset = currentOffset.value;
  touchStartTime = Date.now();
  momentumOffset = startOffset;
  transitionEndTrigger = null;
}

function onTouchMove(event: TouchEvent) {
  if (isReadonly()) {
    return;
  }

  touch.move(event);

  if (touch.isVertical()) {
    moving = true;
    preventDefault(event, true);
  }

  const newOffset = clamp(startOffset + touch.deltaY.value, -(count() * props.optionHeight), props.optionHeight);

  const newIndex = getIndexByOffset(newOffset);

  if (newIndex !== currentIndex.value) {
    emits('scrollInto', options[newIndex]);
  }

  currentOffset.value = newOffset;

  const now = Date.now();

  if (now - touchStartTime > MOMENTUM_TIME) {
    touchStartTime = now;
    momentumOffset = newOffset;
  }
}

function onTouchEnd() {
  if (isReadonly()) {
    return;
  }

  const distance = currentOffset.value - momentumOffset;
  const duration = Date.now() - touchStartTime;
  const startMomentum = duration < MOMENTUM_TIME && Math.abs(distance) > MOMENTUM_DISTANCE;

  if (startMomentum) {
    momentum(distance, duration);

    return;
  }

  const index = getIndexByOffset(currentOffset.value);
  currentDuration.value = DEFAULT_DURATION;
  updateValueByIndex(index);

  setTimeout(() => {
    moving = false;
  }, 0);
}

function initMove() {
  useEventListener('touchmove', onTouchMove, {
    target: rootRef
  });
}

function onClickOption(i: number) {
  if (moving || isReadonly()) {
    return;
  }

  transitionEndTrigger = null;
  currentDuration.value = DEFAULT_DURATION;
  updateValueByIndex(i);
  emits('clickOption', options[i]);
}

initMove();
</script>

<template>
  <div
    v-if="columnsType"
    ref="rootRef"
    class="van-picker-column"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <ul ref="wrapperRef" class="van-picker-column__wrapper" :style="wrapperStyle" @transitionend="stopMomentum">
      <li
        v-for="item in list"
        :key="item"
        role="button"
        tabindex="0"
        class="van-picker-column__item"
        :class="[item === value ? 'van-picker-column__item--selected' : '']"
        :style="{ height: `${optionHeight}px` }"
        @click="onClickOption(item)"
      >
        <div class="van-ellipsis">
          {{ isTime && item < 10 ? `0${item}` : item }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>

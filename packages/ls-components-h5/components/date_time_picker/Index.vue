<script setup lang="ts" name="LSDateTimePicker">
import type { Numeric } from './types';
import dayjs from 'dayjs';
import { Loading } from 'vant';
import { isSameValue, makeArrayProp } from '@cpo/_utils/util';
import { computed, nextTick, Ref, useSlots, watch, ref } from 'vue';
import LSPickerToolbar from './LSPickerToolbar.vue';
import LSPickerColumn from './LSPickerColumn.vue';

const props = defineProps({
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  title: {
    type: String,
    default: '选择时间'
  },
  minDate: {
    type: Date,
    default: () => new Date(new Date().setFullYear(new Date().getFullYear() - 10))
  },
  maxDate: {
    type: Date,
    default: () => new Date(new Date().setFullYear(new Date().getFullYear()))
  },
  optionHeight: {
    type: Number,
    default: 44
  },
  visibleOptionNum: {
    type: Number,
    default: 6
  },
  readonly: {
    type: Boolean,
    default: false
  },
  swipeDuration: {
    type: Number,
    default: 1000
  },
  modelValue: makeArrayProp<Numeric>(),
  columnsType: {
    type: Array as () => string[],
    default: () => ['year', 'month', 'day', 'hour', 'minute', 'second']
  },
  showToolbar: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emits = defineEmits(['confirm', 'cancel', 'change', 'scrollInto', 'clickOption', 'update:modelValue']);

const slots = useSlots();

const fields = ref({ text: 'text', value: 'value', children: 'children' });

const minYear = computed(() => props.minDate.getFullYear());
const maxYear = computed(() => props.maxDate.getFullYear());
const minMonth = computed(() => props.minDate.getMonth() + 1);
const maxMonth = computed(() => props.maxDate.getMonth() + 1);
const minDay = computed(() => props.minDate.getDate());
const maxDay = computed(() => props.maxDate.getDate());
const minHour = computed(() => props.minDate.getHours());
const maxHour = computed(() => props.maxDate.getHours());
const minMinute = computed(() => props.minDate.getMinutes());
const maxMinute = computed(() => props.maxDate.getMinutes());
const minSecond = computed(() => props.minDate.getSeconds());
const maxSecond = computed(() => props.maxDate.getSeconds());

const iYear = Number(props.modelValue[0]);
const iMonth = Number(props.modelValue[1]);
const iDay = Number(props.modelValue[2]);

const selectedValues: any = ref([]);

function initSelectedValues() {
  const year = minYear.value <= iYear && maxYear.value >= iYear ? iYear : minYear.value;
  const month = minMonth.value <= iMonth && maxMonth.value >= iMonth ? iMonth : minMonth.value;
  const day = minDay.value <= iDay && maxDay.value >= iDay ? iDay : minDay.value;
  selectedValues.value = [year, month, day];
}

initSelectedValues();

function setColumnValue(type: string) {
  const startYear = minYear.value;
  const startMonth = minMonth.value;
  const startDay = minDay.value;
  const startHour = minHour.value;
  const startMinute = minMinute.value;

  const endYear = maxYear.value;
  const endMonth = maxMonth.value;
  const endDay = maxDay.value;
  const endHour = maxHour.value;
  const endMinute = maxMinute.value;

  const curYear = Number(selectedValues.value[0]);
  const curMonth = Number(selectedValues.value[1]);
  const curDay = Number(selectedValues.value[2]);
  const curHour = Number(selectedValues.value[3]);
  const curMinute = Number(selectedValues.value[4]);

  const hasColumn = props.columnsType.includes(type);

  switch (type) {
    case 'year':
      if (!hasColumn) {
        return [];
      }

      return Array.from({ length: endYear - startYear + 1 }, (_, i) => startYear + i);

    case 'month':
      if (!hasColumn) {
        return [];
      }

      if (curYear === startYear && curYear === endYear) {
        return Array.from({ length: endMonth - startMonth + 1 }, (_, i) => startMonth + i);
      } else if (curYear === startYear) {
        return Array.from({ length: 12 - startMonth + 1 }, (_, i) => startMonth + i);
      } else if (curYear === endYear) {
        return Array.from({ length: endMonth }, (_, i) => i + 1);
      }

      return Array.from({ length: 12 }, (_, i) => 1 + i);

    case 'day': {
      if (!hasColumn) {
        return [];
      }

      let daysInMonth = dayjs(props.minDate).daysInMonth();

      if (selectedValues.value.length > 0) {
        const year = selectedValues.value[0];
        const month = selectedValues.value[1];
        daysInMonth = dayjs(`${year}-${month}`).daysInMonth();
      }

      if (
        minDay.value &&
        curYear === startYear &&
        curMonth === startMonth &&
        maxDay.value &&
        curYear === endYear &&
        curMonth === endMonth
      ) {
        const maxVal = maxDay.value > daysInMonth ? daysInMonth : maxDay.value;
        const minVal = minDay.value > daysInMonth ? daysInMonth : minDay.value;
        return Array.from({ length: maxVal - minVal + 1 }, (_, i) => minVal + i);
      } else if (minDay.value && curYear === startYear && curMonth === startMonth) {
        return Array.from({ length: daysInMonth - minDay.value + 1 }, (_, i) => dayjs(props.minDate).date() + i);
      } else if (maxDay.value && curYear === endYear && curMonth === endMonth) {
        return Array.from({ length: maxDay.value > daysInMonth ? maxDay.value : daysInMonth }, (_, i) => i + 1);
      }

      return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    }
    case 'hour':
      if (!hasColumn) {
        return [];
      }

      if (minHour.value && curYear === startYear && curMonth === startMonth && curDay === startDay) {
        return Array.from({ length: 24 - minHour.value }, (_, i) => minHour.value + i);
      } else if (maxHour.value && curYear === endYear && curMonth === endMonth && curDay === endDay) {
        return Array.from({ length: maxMinute.value > 0 ? maxHour.value + 1 : maxHour.value }, (_, i) => i);
      }

      return Array.from({ length: 24 }, (_, i) => i);
    case 'minute':
      if (!hasColumn) {
        return [];
      }

      if (minMinute.value && curYear === startYear && curMonth === startMonth && curDay === startDay && curHour === startHour) {
        return Array.from({ length: 60 - minMinute.value }, (_, i) => minMinute.value + i);
      } else if (maxMinute.value && curYear === endYear && curMonth === endMonth && curDay === endDay && curHour === endHour) {
        return Array.from({ length: maxMinute.value + 1 }, (_, i) => i);
      }

      return Array.from({ length: 60 }, (_, i) => i);
    case 'second':
      if (!hasColumn) {
        return [];
      }

      if (
        minSecond.value &&
        curYear === startYear &&
        curMonth === startMonth &&
        curDay === startDay &&
        curHour === startHour &&
        curMinute === startMinute
      ) {
        return Array.from({ length: 60 - minSecond.value }, (_, i) => minSecond.value + i);
      } else if (
        maxSecond.value &&
        curYear === endYear &&
        curMonth === endMonth &&
        curDay === endDay &&
        curHour === endHour &&
        curMinute === endMinute
      ) {
        return Array.from({ length: maxSecond.value + 1 }, (_, i) => i);
      }

      return Array.from({ length: 60 }, (_, i) => i);
    default:
      return [];
  }
}

const years = computed(() => {
  return setColumnValue('year');
});

const months = computed(() => {
  return setColumnValue('month');
});

const days = computed(() => {
  return setColumnValue('day');
});

const hours = computed(() => {
  return setColumnValue('hour');
});

const minutes = computed(() => {
  return setColumnValue('minute');
});

const seconds = computed(() => {
  return setColumnValue('second');
});

const curMonths = computed(() => months.value);
const curDays = computed(() => days.value);
const curHours = computed(() => hours.value);
const curMinutes = computed(() => minutes.value);
const curSeconds = computed(() => seconds.value);

const columnsRef = ref(null) as Ref<HTMLElement | null>;
const columnsHeight = computed(() => {
  return props.optionHeight * props.visibleOptionNum;
});
const maskStyle = computed(() => {
  return {
    backgroundSize: `100% ${(columnsHeight.value - props.optionHeight) / 2}px`
  };
});

const currentList: any = ref([years.value, curMonths.value, curDays.value, curHours.value, curMinutes.value, curSeconds.value]);

watch(
  () => currentList.value,
  val => {
    if (val && val.length > 0) {
      val.forEach((item: any, index: number) => {
        if (item.length && !selectedValues.value[index]) {
          setValue(index, item[0]);
        }
      });
    }
  },
  {
    immediate: true
  }
);

watch(
  selectedValues,
  newValues => {
    [curMonths, curDays, curHours, curMinutes, curSeconds].forEach((list, i) => {
      props.columnsType[i] && updateDiffColumnValue(i + 1, list.value);
    });

    if (!isSameValue(newValues, props.modelValue)) {
      emits('update:modelValue', newValues);
    }
  },
  {
    immediate: true
  }
);

function updateDiffColumnValue(index: number, curList: number[]) {
  if (!isSameValue(currentList.value[index], curList)) {
    let curVal = Number(selectedValues.value[index]);
    let startVal = curList[0];
    let len = curList.length - 1;

    if (startVal > curVal) {
      curVal = startVal;
    } else if (curList[len] < curVal) {
      curVal = curList[len];
    }
    selectedValues.value[index] = curVal;
    currentList.value[index] = curList;
  }
}

function setValue(index: number, value: Numeric) {
  if (selectedValues.value[index] !== value) {
    const newValues = selectedValues.value.slice(0);
    newValues[index] = value;
    selectedValues.value = newValues;
  }
}

function getEventParams() {
  return {
    selectedValues: selectedValues.value.slice(0)
  };
}

function onChange(value: Numeric, columnIndex: number) {
  setValue(columnIndex, value);

  nextTick(() => {
    emits('change', Object.assign({ columnIndex }, getEventParams()));
  });
}

function onClickOption(value: any, columnIndex: number) {
  const params = { columnIndex, currentOption: value };
  emits('clickOption', Object.assign(getEventParams(), params));
  emits('scrollInto', params);
}

function onConfirm() {
  emits('confirm', getEventParams());
}

function onCancel() {
  emits('cancel', getEventParams());
}
</script>

<template>
  <div class="van-picker">
    <template v-if="showToolbar">
      <slot v-if="slots.toolbar" name="toolbar"></slot>
      <LSPickerToolbar
        v-else
        :cancel-text="cancelText"
        :confirm-text="confirmText"
        :title="title"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </template>

    <Loading v-if="loading" class="van-picker__loading" />

    <div v-if="slots['columns-top']" class="van-columns-hint">
      <slot name="columns-top"></slot>
    </div>

    <div ref="columnsRef" class="van-picker__columns" :style="{ height: `${columnsHeight}px` }">
      <LSPickerColumn
        v-for="(item, i) in currentList"
        :key="i"
        :list="item"
        :value="selectedValues[i]"
        :option-height="optionHeight"
        :readonly="readonly"
        :visible-option-num="visibleOptionNum"
        :fields="fields"
        :swipe-duration="swipeDuration"
        :is-time="i >= 1"
        :columns-type="columnsType[i]"
        @change="(value: Numeric) => onChange(value, i)"
        @click-option="(value: Array<number>) => onClickOption(value, i)"
        @scroll-into="
          (item: any) => {
            emits('scrollInto', {
              item,
              i
            });
          }
        "
      />
      <div class="van-picker__mask" :style="maskStyle"></div>
      <div class="van-hairline-unset--top-bottom van-picker__frame" :style="{ height: `${optionHeight}px` }"></div>
    </div>

    <div v-if="slots['columns-bottom']" class="van-columns-hint">
      <slot name="columns-bottom"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.van-columns-hint {
  padding: var(--van-padding-md);
  font-size: var(--van-font-size-md);
  color: var(--van-gray-6);
}
</style>

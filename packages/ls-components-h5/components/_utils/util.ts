import { PropType } from 'vue';
import type { PickerOption } from '../data_time_picker/types';

export function isSameValue(newValue: unknown, oldValue: unknown) {
  return JSON.stringify(newValue) === JSON.stringify(oldValue);
}

export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}

export function findIndexOfEnabledOption(options: PickerOption[], index: number) {
  index = clamp(index, 0, options.length);

  for (let i = index; i < options.length; i++) {
    if (!options[i].disabled) return i;
  }

  for (let i = index - 1; i >= 0; i--) {
    if (!options[i].disabled) return i;
  }

  return 0;
}

export const stopPropagation = (event: Event) => event.stopPropagation();

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

export function makeArrayProp<T>() {
  return {
    type: Array as PropType<T[]>,
    default: () => []
  };
}

export function makeRequiredProp<T>(type: T) {
  return {
    type,
    required: true as const
  };
}

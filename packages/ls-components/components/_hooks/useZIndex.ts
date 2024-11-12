const zIndex = ref(0);

export const useZIndex = () => {
  const initZIndex = ref(2000);
  const curZIndex = computed(() => initZIndex.value + zIndex.value);

  const nextZIndex = () => {
    zIndex.value++;
    return curZIndex.value;
  };

  return {
    initZIndex,
    curZIndex,
    nextZIndex
  };
};

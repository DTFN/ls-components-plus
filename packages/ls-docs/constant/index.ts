import { ref } from 'vue';

export const tableColumn = ref([
  {
    prop: 'name',
    label: '属性名',
    width: 200
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'type',
    label: '类型',
    width: 160
  },
  {
    prop: 'value',
    label: '默认值'
  }
]);

export const tableMethodColumn = ref([
  {
    prop: 'name',
    label: '方法名',
    width: 200
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'type',
    label: '类型',
    width: 160
  },
  {
    prop: 'value',
    label: '返回值'
  }
]);

export const tableSlotColumn = ref([
  {
    prop: 'name',
    label: '插槽名'
  },
  {
    prop: 'desc',
    label: '说明'
  }
]);

export const tableExposesColumn = ref([
  {
    prop: 'name',
    label: '名称',
    width: 200
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'type',
    label: '类型',
    width: 160
  },
  {
    prop: 'value',
    label: '参数类型'
  }
]);

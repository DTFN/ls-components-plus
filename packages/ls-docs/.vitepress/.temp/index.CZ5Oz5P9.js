import { ref } from 'vue';
const tableColumn = ref([
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
const tableMethodColumn = ref([
  {
    prop: 'name',
    label: '方法名',
    width: 220
  },
  {
    prop: 'desc',
    label: '说明'
  },
  {
    prop: 'type',
    label: '类型',
    width: 220
  },
  {
    prop: 'value',
    label: '返回值'
  }
]);
const tableSlotColumn = ref([
  {
    prop: 'name',
    label: '插槽名',
    width: 260
  },
  {
    prop: 'desc',
    label: '说明'
  }
]);
const tableExposesColumn = ref([
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
const tableStyleColumn = ref([
  {
    prop: 'name',
    label: '名称',
    width: 200
  },
  {
    prop: 'desc',
    label: '说明'
  }
]);
export { tableMethodColumn as a, tableExposesColumn as b, tableSlotColumn as c, tableStyleColumn as d, tableColumn as t };

<script setup lang="ts">
const iconColor = ref('red');

const list1 = ref([
  {
    iconColor,
    iconType: 2,
    icon: 'iconoir:fish',
    label: '养殖品种',
    value: '舟山鲈鱼'
  },
  {
    iconType: 2,
    icon: 'game-icons:whale-tail',
    label: '尾数范围',
    value: '56024 - 93366 尾'
  },
  {
    icon: 'Edit',
    label: '批次数量',
    value: '5'
  }
]);

const list2 = ref([
  {
    label: '捕捞编号',
    value: 'F20240613003'
  },
  {
    label: '销售订单号',
    value: 'XSDD00000001010'
  },
  {
    label: '鱼种',
    value: '舟山鲈鱼'
  },
  {
    label: '捕捞规格',
    value: '--'
  },
  {
    label: '责任人',
    value: null
  },
  {
    label: '捕捞量(斤)',
    value: 12
  },
  {
    label: '桶数量',
    value: 1
  },
  {
    label: '我方人员',
    value: ''
  },
  {
    label: '客户人员',
    value: ''
  },
  {
    label: '司机姓名',
    value: ''
  },
  {
    label: '车牌号',
    value: ''
  },
  {
    label: '备注',
    value: ''
  }
]);
</script>

<template>
  <div>
    <LSDescriptions label-bg-color="blue" label-color="#fff" :list="list1"></LSDescriptions>

    <br />

    <LSDescriptions :list="list2" :column="2"></LSDescriptions>
  </div>
</template>

<style lang="scss" scoped></style>

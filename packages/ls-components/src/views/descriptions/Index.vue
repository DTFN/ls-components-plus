<script setup lang="ts">
// label-width 160px的时候存在无法更新的bug element-plus 2.10.6
import { DescriptionsListType } from '@cpo/_types';

const iconColor = ref('red');

const itemLabelWidth = ref('160px');
const list1: Ref<DescriptionsListType> = ref([
  {
    iconConfig: { type: 1, name: 'iconoir:fish', color: iconColor },
    label: '养殖品种',
    value: '舟山鲈鱼',
    labelWidth: itemLabelWidth
  },
  {
    iconConfig: { type: 1, name: 'game-icons:whale-tail' },
    label: '尾数范围',
    value: '56024 - 93366 尾',
    labelWidth: itemLabelWidth
  },
  {
    iconConfig: { name: 'Edit' },
    label: '批次数量',
    value: '5',
    labelWidth: itemLabelWidth
  }
]);

const list2: Ref<DescriptionsListType> = ref([
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
    value: ''
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
    <LSDescriptions label-bg-color="blue" label-color="#fff" :list="list1" label-width="200px"></LSDescriptions>

    <br />

    <LSDescriptions title="测试title" :list="list2" :column="2"></LSDescriptions>

    <br />

    <LSDescriptions :list="list2" :column="5"></LSDescriptions>

    <br />
    <el-descriptions title="测试新属性" border direction="vertical" label-width="200px">
      <el-descriptions-item label="Username" :label-width="itemLabelWidth">kooriookami</el-descriptions-item>
      <el-descriptions-item label="Telephone" :label-width="itemLabelWidth">18100000000</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<style lang="scss" scoped></style>

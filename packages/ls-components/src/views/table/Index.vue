<script setup lang="ts">
// 选中参数列表
const tableColumn = [
  {
    label: '参数名称',
    prop: 'code'
  },
  {
    label: '参数描述',
    prop: 'name'
  },
  {
    label: '默认值',
    prop: 'defaultValue'
  }
];
const tableDataRef = ref([
  {
    id: '1',
    code: 'EquipmentTypeEnum',
    name: '机组类型',
    defaultValue: '0'
  },
  {
    id: '2',
    code: 'EquipmentCategoryEnum',
    name: '机组类别',
    defaultValue: '1'
  },
  {
    id: '3',
    code: 'capacity',
    name: '装机容量(MW)',
    defaultValue: '0'
  },
  {
    id: '4',
    code: 'ratedPower',
    name: '额定功率',
    defaultValue: '0'
  },
  {
    id: '5',
    code: 'ProductTypeEnum',
    name: '产品类型',
    defaultValue: '1'
  },
  {
    id: '6',
    code: 'BoilerTypeEnum',
    name: '锅炉类型',
    defaultValue: '1'
  },
  {
    id: '7',
    code: 'boiler_productionCapacity',
    name: '生产能力',
    defaultValue: '1'
  },
  {
    id: '8',
    code: 'TurbineTypeEnum',
    name: '汽轮机类型',
    defaultValue: '0'
  },
  {
    id: '9',
    code: 'PressureParamsTypeEnum',
    name: '汽轮机压力参数',
    defaultValue: '0'
  },
  {
    id: '10',
    code: 'turbine_ratedPower',
    name: '汽轮机额定功率',
    defaultValue: '1'
  },
  {
    id: '11',
    code: 'EquipmentTypeEnum',
    name: '机组类型1',
    defaultValue: '2'
  },
  {
    id: '12',
    code: 'EquipmentCategoryEnum',
    name: '机组类别1',
    defaultValue: '0'
  },
  {
    id: '13',
    code: 'capacity',
    name: '装机容量(MW)',
    defaultValue: '1'
  }
]);

const tableColumn_1 = [
  {
    label: '字段1',
    prop: 'code1'
  },
  {
    label: '字段2',
    prop: 'code2',
    minWidth: 60
  },
  {
    label: '字段3',
    prop: 'code3',
    width: 140
  }
];

function onRemoveParam(id: string) {
  try {
    const list = tableDataRef.value.filter((item: any) => item.id !== id);
    tableDataRef.value = list;
  } catch (error) {
    console.error('Error removing parameter:', error);
  }
}

function getData() {
  let list = [];
  for (let i = 0; i < 100; i++) {
    list.push({
      id: i,
      code1: '字段1----' + i,
      code2: '字段2----' + i,
      code3: '字段3----' + i
    });
  }
  return list;
}

const TableRef = ref<any>(null);
const currentPage = ref(1);
const pageSize = ref(10);
const data = ref(getData());
const tableData = computed(() => data.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value));
const total = data.value.length;
const currentRow = ref(null);
const selection = ref<any[]>([
  {
    id: 2,
    code1: '字段1----2',
    code2: '字段2----2',
    code3: '字段3----2'
  }
]);

function handleCurrentChange(row: any) {
  console.log('Current row:', row);
  if (row) {
    currentRow.value = row;
  }
}
</script>

<template>
  <div class="common_title">示例 1</div>

  <LSTable
    border
    :show-table-index="true"
    :show-pagination="false"
    :show-radio="false"
    :table-column="tableColumn"
    :table-data="tableDataRef"
  >
    <el-table-column prop="operate" label="操作" width="100px">
      <template #default="{ row }">
        <el-button link type="danger" @click="onRemoveParam(row.id)"> 移除 </el-button>
      </template>
    </el-table-column>
  </LSTable>

  <div class="common_title">示例 2</div>

  <LSTable
    stripe
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :show-radio="true"
    :table-data="tableData"
    :table-column="tableColumn_1"
    :total="total"
    :current-row="currentRow"
    @current-change="handleCurrentChange"
  >
  </LSTable>

  <div class="common_title">示例 3</div>

  <LSTable
    stripe
    ref="TableRef"
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    v-model:selection="selection"
    :show-select="true"
    :table-data="tableData"
    :table-column="tableColumn_1"
    :total="total"
  >
  </LSTable>

  <div class="common_title">示例 4</div>

  <LSTable
    :show-table-index="true"
    :show-pagination="false"
    :show-expand="true"
    :table-column="tableColumn"
    :table-data="tableDataRef"
  >
    <template #expand="{ row }">
      <div style="padding-left: 120px">{{ row.code }}--{{ row.name }}--{{ row.defaultValue }}</div>
    </template>
  </LSTable>
</template>

<style scoped>
.common_title {
  margin: 24px 0 8px;
  font-size: 16px;
  font-weight: 500;
  &:first-child {
    margin-top: 0;
  }
}
</style>

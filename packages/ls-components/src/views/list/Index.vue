<script setup lang="ts">
import { ElDivider } from 'element-plus';
import { h } from 'vue';

const ListRef = ref<any>(null);

const formData = ref({
  name: undefined,
  type: undefined
});

const formItems = [
  {
    type: 'input',
    label: '名称',
    prop: 'name'
  },
  {
    type: 'itemSlot',
    label: '名称111',
    prop: 'slot'
  }
];

const tableColumn = [
  {
    label: '名称',
    prop: 'name',
    minWidth: 120
  },
  {
    label: '类型',
    prop: 'type',
    type: 'status',
    value: {
      A: { type: 'success', label: '类型A' },
      B: { type: '', label: '类型B' }
    },
    minWidth: 120,
    statusStyle: 'follow'
  },
  {
    label: '自定义',
    prop: 'table-slot',
    type: 'slot',
    minWidth: 120
  },
  {
    label: '创建时间',
    prop: 'createTime',
    minWidth: 120
  }
];

// 生成模拟数据
function generateTableData(pageNum: number, pageSize: number) {
  const result = [];
  const startIndex = (pageNum - 1) * pageSize;

  for (let i = 0; i < pageSize; i++) {
    const index = startIndex + i + 1;
    result.push({
      id: index,
      name: `测试数据${index}`,
      type: index % 2 === 0 ? 'A' : 'B',
      createTime: '2024-01-01',
      status: index % 2
    });
  }

  return result;
}

function listApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(generateTableData(ListRef.value?.currentPage, ListRef.value?.pageSize));
    }, 1000);
  });
}

function dealData(res: any) {
  console.log(res);
  const list = res || [];
  return {
    data: list,
    total: 100
  };
}

const b = ref(true);
const spacer = h(ElDivider, { direction: 'vertical' });
</script>

<template>
  <LSList
    ref="ListRef"
    :list-api="listApi"
    :form-data="formData"
    :form-items="formItems"
    :table-column="tableColumn"
    :show-table-switch="false"
    :show-table-edit="true"
    :disabled-table-del="(row: any) => row.name === '测试1'"
    :disabled-table-switch="(row: any) => row.name === '测试1'"
    :deal-data="dealData"
    :table-operate-column="{ minWidth: 200 }"
    :table-attrs="{ showSelect: true }"
    :show-table-operate="true"
    :disabled-add-btn="true"
    :list-hook-config="{ currentPageProp: 1, pageSizeProp: 100, pageSizesProp: [10, 20, 30, 40, 50, 100] }"
  >
    <template #slot-slot-form-slot>
      <div>自定义表单内容</div>
    </template>

    <template #table-slot-table-slot>
      <div>自定义表格内容</div>
    </template>

    <template #table-operate-prepend>
      <el-space :size="0" :spacer="spacer">
        <el-button link type="primary"> 配置 </el-button>

        <el-button v-if="b" link type="primary"> 查看配置 </el-button>

        <el-button link type="primary"> 测试 </el-button>
      </el-space>
    </template>

    <template #table-operate-append>
      <el-space :size="0" :spacer="spacer">
        <el-button link type="primary"> 下架 </el-button>

        <el-button link type="primary"> 提交 </el-button>
      </el-space>
    </template>

    <template #table-append>
      <el-table-column label="新增" width="100">
        <el-button link type="primary"> 新加 </el-button>
      </el-table-column>
    </template>
  </LSList>
</template>

<style scoped lang="scss"></style>

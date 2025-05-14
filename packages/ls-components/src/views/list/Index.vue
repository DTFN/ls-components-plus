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
    prop: 'name',
    attrs: {
      prefixStr: '￥'
    }
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
    prop: 'name'
  },
  {
    label: '类型',
    prop: 'type',
    type: 'status',
    value: {
      A: { type: 'success', label: '类型A' },
      B: { type: '', label: '类型B' }
    },
    statusStyle: 'follow'
  },
  {
    label: '自定义',
    prop: 'table-slot',
    type: 'slot'
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'date'
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
      createTime: 1740000000000 + index * 1000 * 60 * 60 * 24,
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

function dealParams(params: any) {
  return {
    ...params
  };
}

function dealData(res: any) {
  const list = (res || []).map((item: any) => {
    item.popconfirmTxt = `确定删除该记录：${item.name}？`;
    // item.tableDetailText = `${item.name}详情`;
    return item;
  });
  return {
    data: list,
    total: 100
  };
}

const spacer = h(ElDivider, { direction: 'vertical' });

function getTableDelText(row: any) {
  return `删除-${row.name}`;
}

function queryFn(val: any) {
  console.log('queryFn', val);
}

const selection = ref<any[]>([
  {
    id: 2,
    name: '测试数据2',
    type: 'A',
    createTime: '2024-01-01'
  }
]);

watch(
  () => selection.value,
  newVal => {
    console.log('watch---选中数据', newVal);
  },
  {
    immediate: true,
    deep: true
  }
);

function updateSelection(val: any) {
  console.log('updateSelection---选中数据', val);
  selection.value = val;
}
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
    :deal-params="dealParams"
    :table-operate-column="{ minWidth: 200 }"
    :table-attrs="{
      showSelect: true,
      selection,
      rowKey: 'id',
      selectColumnOptions: {
        // reserveSelection: false
        'reserve-selection': true
      },
      // 'show-overflow-tooltip': false
      'show-overflow-tooltip': {
        'popper-class': 'red'
      }
    }"
    :table-listeners="{
      'selection-change': (val: any) => {
        console.log('selection-change', val);
      },
      'update:selection': updateSelection
    }"
    :show-table-operate="true"
    :disabled-add-btn="true"
    :list-hook-config="{ currentPageProp: 1, pageSizeProp: 10, pageSizesProp: [10, 20, 30, 40, 50, 100] }"
    :table-detail-text="`详情`"
    :table-edit-text="(row: any) => `编辑-${row.name}`"
    :table-del-text="getTableDelText"
    :popconfirm-txt="(row: any) => `删除该数据：${row.name}？`"
    :query-fn="queryFn"
    add-btn-text="新增数据"
  >
    <template #buttons-prepend-form-slot>
      <div>按钮区域前置</div>
    </template>

    <template #buttons-append-form-slot>
      <div>按钮区域后置</div>
    </template>

    <template #slot-slot-form-slot>
      <div>自定义表单内容</div>
    </template>

    <template #table-slot-table-slot>
      <div>自定义表格内容</div>
    </template>

    <!-- <template #table-operate-prepend>
      <el-space :size="0" :spacer="spacer">
        <el-button link type="primary"> 配置 </el-button>

        <el-button v-if="b" link type="primary"> 查看配置 </el-button>

        <el-button link type="primary"> 测试 </el-button>
      </el-space>
    </template> -->

    <template #table-operate-append="{ row }">
      <el-space :size="0" :spacer="spacer">
        <el-button v-if="row.status === 1" link type="primary"> 下架 </el-button>

        <el-button link type="primary"> 提交 </el-button>
      </el-space>
    </template>

    <!-- <template #table-append>
      <el-table-column label="新增" width="100">
        <el-button link type="primary"> 新加 </el-button>
      </el-table-column>
    </template> -->
  </LSList>
</template>

<style scoped lang="scss"></style>

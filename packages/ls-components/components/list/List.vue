<script setup lang="ts" name="LSList">
// 公共列表页面
import { h } from 'vue';
import useTableListHook from '@cpo/_hooks/useTableListHook';
import { ElSpace, ElButton, ElSwitch, ElMessage, ElDivider, ElMessageBox } from 'element-plus';
import { lsListProps } from './types';
import LSForm from '@cpo/form/Form.vue';
import LSTable from '@cpo/table/Table.vue';
import useRouterHook from '@cpo/_hooks/useRouterHook';

const { jumpRouteCom, currentRouter } = useRouterHook();

const props: any = defineProps(lsListProps);

const emits = defineEmits<{
  // 表单提交事件
  submitForm: [formData: any];
  // 表单重置事件
  resetForm: [data: any];
  // 删除成功后的回调
  delSuccess: [row: any, res: any];
  // 开关操作成功后的回调
  switchSuccess: [row: any, status: any];
  // 加载状态变化事件
  handleLoading: [loading: boolean];
  // 当前页变化事件
  handleCurrentPage: [currentPage: number];
  // 每页条数变化事件
  handlePageSize: [pageSize: number];
}>();

// 获取插槽
const slots: any = useSlots();

const FormRef = ref();
const TableRef = ref();

// 获取表单插槽
const formSlots = computed(() => {
  return Object.keys(slots).filter(slotName => slotName.toString().endsWith('-form-slot'));
});

// 获取表格插槽
const tableSlots = computed(() => {
  return Object.keys(slots).filter(slotName => slotName.toString().endsWith('-table-slot'));
});

// 获取插槽名称
function getSlotName(slotName: any, isForm: boolean = false) {
  if (slotName) {
    const index = slotName.toString().lastIndexOf(`${isForm ? '-form-slot' : '-table-slot'}`);
    return index !== -1 ? slotName.toString().slice(0, index) : slotName;
  }
  return '';
}

// 表格数据
const {
  isFirst,
  loading,
  tableData,
  total,
  pageSize,
  currentPage,
  handleReset,
  loadData,
  handleCurrentPageChange,
  handleSizeChange
} = useTableListHook(props.listApi, props.formData, {
  dealData: props?.dealData,
  dealParams: props?.dealParams,
  ...props?.listHookConfig
});

watch(loading, newVal => {
  emits('handleLoading', newVal);
});

watch(currentPage, newVal => {
  emits('handleCurrentPage', newVal);
});

watch(pageSize, newVal => {
  emits('handlePageSize', newVal);
});

// 查询
function submitForm(val: any) {
  handleCurrentPageChange(1, false);
  emits('submitForm', val);
  if (props?.queryFn) {
    props.queryFn(val);
  } else {
    loadData();
  }
}

// 重置
function resetForm(val: any) {
  console.warn('resetForm', val);
  emits('resetForm', val);
  if (props?.resetFn) {
    props.resetFn(val);
  } else {
    handleReset();
  }
}

const routePath = computed(() => {
  return currentRouter ? currentRouter.value.path : '';
});

// 添加
function onAdd() {
  if (props?.addFn) {
    props.addFn();
  } else {
    jumpRouteCom(
      {
        path: props?.addRoutePath ? props.addRoutePath : `${routePath.value}/add`
      },
      1
    );
  }
}

// 查看
function onDetail(id: number, row: any) {
  if (props?.tableDetailFn) {
    props.tableDetailFn(row);
  } else {
    jumpRouteCom(
      {
        path: `${props?.detailRoutePath ? props.detailRoutePath : `${routePath.value}/detail`}/${id}`
      },
      1
    );
  }
}

// 编辑
function onEdit(id: number, row: any) {
  if (props?.tableEditFn) {
    props.tableEditFn(row);
  } else {
    jumpRouteCom(
      {
        path: `${props?.editRoutePath ? props.editRoutePath : `${routePath.value}/edit`}/${id}`
      },
      1
    );
  }
}

const delId = ref<number | undefined>(undefined);
const delLoading = ref(false);

// 删除
function onDel(id: any, row: any) {
  delId.value = id;
  if (props?.tableDelFn) {
    props.tableDelFn(row, (loading: boolean) => {
      delLoading.value = loading;
    });
  } else {
    if (props.delApi) {
      delLoading.value = true;

      let params = id;

      if (props?.dealDelParams) {
        params = props.dealDelParams(row);
      }

      props
        .delApi(params)
        .then(() => {
          const msg = getTableDelMessage(row) || `${getTableDelText(row)}成功`;
          ElMessage.success(msg);
          loadData();
          emits('delSuccess', row, true);
        })
        .catch((err: any) => {
          console.warn(err);
        })
        .finally(() => {
          delLoading.value = false;
        });
    }
  }
}

// 启用 停用
const switchId = ref();
const switchLoading = ref(false);

function switchBeforeChange(id: number, status: boolean | number, row: any): Promise<boolean> {
  switchId.value = id;
  const onSwitch = (resolve: (value: boolean | PromiseLike<boolean>) => void, reject: any) => {
    if (props.switchApi) {
      switchLoading.value = true;
      let params = id;
      if (props?.dealSwitchParams) {
        params = props.dealSwitchParams(row);
      }
      props
        .switchApi(params)
        .then(() => {
          loadData(false);
          resolve(true);
          emits('switchSuccess', row, status);
        })
        .catch(() => {
          reject(new Error('Error'));
        })
        .finally(() => {
          switchLoading.value = false;
        });
    } else {
      reject(new Error('Error'));
    }
  };

  return new Promise((resolve, reject) => {
    if (status) {
      ElMessageBox.confirm(`<strong class="text-14px">${props.tableSwitchPopTxt || '请问是否关闭？'}</strong>`, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        customStyle: {
          width: '240px'
        },
        ...props.tableSwitchPopAttrs
      })
        .then(() => {
          onSwitch(resolve, reject);
        })
        .catch(() => {
          reject(new Error('Error'));
        });
    } else {
      onSwitch(resolve, reject);
    }
  });
}

// 表格上的开启开关禁用规则
function disabledTableSwitch(row: any) {
  let disabled: boolean = false;
  if (props?.disabledTableSwitch) {
    if (typeof props.disabledTableSwitch === 'boolean') {
      disabled = props.disabledTableSwitch;
    } else if (typeof props.disabledTableSwitch === 'function') {
      disabled = props.disabledTableSwitch(row);
    }
  }
  return disabled ? true : false;
}

// 表格查看按钮的文案
function getTableDetailText(row: any) {
  if (props?.tableDetailText) {
    if (typeof props.tableDetailText === 'string') {
      return props.tableDetailText;
    } else if (typeof props.tableDetailText === 'function') {
      return props.tableDetailText(row);
    }
  }

  return '查看';
}

// 表格查看按钮的显示规则
function showTableDetail(row: any) {
  let show: boolean = false;
  if (props?.showTableDetail) {
    if (typeof props.showTableDetail === 'boolean') {
      show = props.showTableDetail;
    } else if (typeof props.showTableDetail === 'function') {
      show = props.showTableDetail(row);
    }
  }
  return show ? true : false;
}

// 表格查看按钮的禁用规则
function disabledTableDetail(row: any) {
  let disabled: boolean = false;
  if (props?.disabledTableDetail) {
    if (typeof props.disabledTableDetail === 'boolean') {
      disabled = props.disabledTableDetail;
    } else if (typeof props.disabledTableDetail === 'function') {
      disabled = props.disabledTableDetail(row);
    }
  }
  return disabled ? true : false;
}

// 表格编辑按钮的文案
function getTableEditText(row: any) {
  if (props?.tableEditText) {
    if (typeof props.tableEditText === 'string') {
      return props.tableEditText;
    } else if (typeof props.tableEditText === 'function') {
      return props.tableEditText(row);
    }
  }

  return '编辑';
}

// 表格编辑按钮的显示规则
function showTableEdit(row: any) {
  let show: boolean = false;
  if (props?.showTableEdit) {
    if (typeof props.showTableEdit === 'boolean') {
      show = props.showTableEdit;
    } else if (typeof props.showTableEdit === 'function') {
      show = props.showTableEdit(row);
    }
  }
  return show ? true : false;
}

// 表格编辑按钮的禁用规则
function disabledTableEdit(row: any) {
  let disabled: boolean = false;
  if (props?.disabledTableEdit) {
    if (typeof props.disabledTableEdit === 'boolean') {
      disabled = props.disabledTableEdit;
    } else if (typeof props.disabledTableEdit === 'function') {
      disabled = props.disabledTableEdit(row);
    }
  }
  return disabled ? true : false;
}

// 表格删除按钮的文案
function getTableDelText(row: any) {
  if (props?.tableDelText) {
    if (typeof props.tableDelText === 'string') {
      return props.tableDelText;
    } else if (typeof props.tableDelText === 'function') {
      return props.tableDelText(row);
    }
  }

  return '删除';
}

// 表格删除成功提示文案
function getTableDelMessage(row: any) {
  if (props?.delMessage) {
    if (typeof props.delMessage === 'string') {
      return props.delMessage;
    } else if (typeof props.delMessage === 'function') {
      return props.delMessage(row);
    }
  }

  return '';
}

// 表格删除按钮的显示规则
function showTableDel(row: any) {
  let show: boolean = false;
  if (props?.showTableDel) {
    if (typeof props.showTableDel === 'boolean') {
      show = props.showTableDel;
    } else if (typeof props.showTableDel === 'function') {
      show = props.showTableDel(row);
    }
  }
  return show ? true : false;
}

// 表格删除按钮的禁用规则
function disabledTableDel(row: any) {
  let disabled: boolean = false;
  if (props?.disabledTableDel) {
    if (typeof props.disabledTableDel === 'boolean') {
      disabled = props.disabledTableDel;
    } else if (typeof props.disabledTableDel === 'function') {
      disabled = props.disabledTableDel(row);
    }
  }
  return disabled ? true : false;
}

// 表格删除按钮的弹窗文案
function getPopconfirmTxt(row: any) {
  if (props?.popconfirmTxt) {
    if (typeof props.popconfirmTxt === 'string') {
      return props.popconfirmTxt;
    } else if (typeof props.popconfirmTxt === 'function') {
      return props.popconfirmTxt(row);
    }
  }

  return `是否${getTableDelText(row)}当前行数据？`;
}

// 表格操作列按钮的弹窗文案
function getTableBtnType(key: string, row: any) {
  const val: any = props[key];
  if (val) {
    if (typeof val === 'string') {
      return val;
    } else if (typeof val === 'function') {
      return val(row);
    }
  }

  return '';
}

const spacer = h(ElDivider, { direction: 'vertical' });

// 是否隐藏骨架屏
const hideSkeleton = computed(() => {
  let show = props.showSkeleton;
  if (show) {
    return !isFirst.value;
  }
  return true;
});

defineExpose({
  loadData,
  handleReset,
  setCurrentPage: handleCurrentPageChange,
  setPageSize: handleSizeChange,
  isFirst,
  loading,
  routePath,
  currentPage,
  pageSize,
  total,
  FormRef,
  TableRef
});
</script>

<template>
  <div v-if="hideSkeleton" class="animate_fadeIn transition-all-300 ls-list-wrap">
    <LSForm
      v-if="showForm"
      ref="FormRef"
      class="mb-6px ls-form-cpo"
      label-position="top"
      :class="formClass"
      :show-btn-loading="false"
      :colon="false"
      :inline="true"
      :form-data="formData"
      :form-items="formItems"
      :loading="loading"
      confirm-text="查询"
      v-bind="formAttrs"
      @submit="submitForm"
      @reset="resetForm"
    >
      <template #default="scoope: any">
        <slot name="form-append" v-bind="scoope" />
      </template>

      <template v-for="slotName in formSlots" :key="slotName" #[getSlotName(slotName,true)]="scoope: any">
        <slot :name="slotName" v-bind="scoope" />
      </template>
    </LSForm>

    <template v-if="showOperate">
      <!-- 操作按钮区域 -->
      <slot v-if="$slots.operate" name="operate" />

      <template v-else>
        <el-divider v-if="showOperateDivider" border-style="dashed" />
        <div class="mt-24px flex items-center justify-start" :class="operateClass">
          <slot name="operate-prepend" />

          <el-button v-if="showAdd" type="primary" :disabled="loading || disabledAddBtn" v-bind="addBtnAttrs" @click="onAdd">
            {{ addBtnText }}
          </el-button>

          <slot name="operate-append" />
        </div>
      </template>
    </template>

    <LSTable
      ref="TableRef"
      class="ls-table-cpo"
      :class="[showOperate ? 'mt-16px' : 'mt-24px']"
      :show-overflow-tooltip="true"
      :loading="loading"
      :total="total"
      :table-data="tableData"
      :table-column="tableColumn"
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      v-bind="tableAttrs"
      v-on="tableListeners || {}"
    >
      <!-- 开关列 -->
      <el-table-column v-if="showTableSwitch" :prop="switchProp" label="是否开启" width="100" v-bind="tableSwitchColumn">
        <template #default="{ row }">
          <el-switch
            class="ls-list-table__switch"
            :model-value="row[switchProp] ? 1 : 0"
            :active-value="1"
            :inactive-value="0"
            :loading="switchLoading && row[tableRowKey] === switchId"
            :before-change="() => switchBeforeChange(row[tableRowKey], row[switchProp], row)"
            :disabled="disabledTableSwitch(row)"
            v-bind="tableSwitchAttrs"
          />
        </template>
      </el-table-column>

      <!-- 操作列 -->
      <el-table-column
        v-if="showTableOperate"
        fixed="right"
        prop="operate"
        label="操作"
        :show-overflow-tooltip="false"
        v-bind="tableOperateColumn"
      >
        <template #default="{ row }">
          <div class="flex items-center">
            <el-space :size="0" :spacer="spacer">
              <slot name="table-operate-prepend" :row="row" />

              <el-button
                v-if="showTableDetail(row)"
                :disabled="disabledTableDetail(row)"
                link
                :type="getTableBtnType('tableDetailType', row) || 'primary'"
                @click="onDetail(row[tableRowKey], row)"
                v-bind="tableDetailBtnAttrs"
              >
                {{ row.tableDetailText || getTableDetailText(row) }}
              </el-button>

              <el-button
                v-if="showTableEdit(row)"
                :disabled="disabledTableEdit(row)"
                link
                :type="getTableBtnType('tableEditType', row) || 'primary'"
                @click="onEdit(row[tableRowKey], row)"
                v-bind="tableEditBtnAttrs"
              >
                {{ row.tableEditText || getTableEditText(row) }}
              </el-button>

              <el-popconfirm
                v-if="showTableDel(row)"
                hide-icon
                placement="top"
                width="180"
                confirm-button-text="确认"
                cancel-button-text="取消"
                :title="row.popconfirmTxt || getPopconfirmTxt(row)"
                @confirm="onDel(row[tableRowKey], row)"
                v-bind="tableDelPopAttrs"
              >
                <template #reference>
                  <el-button
                    link
                    :type="getTableBtnType('tableDelType', row) || 'danger'"
                    :disabled="delLoading || disabledTableDel(row)"
                    :loading="delLoading && delId === row[tableRowKey]"
                    v-bind="tableDelBtnAttrs"
                  >
                    {{ delLoading && delId === row[tableRowKey] ? '' : row.tableDelText || getTableDelText(row) }}
                  </el-button>
                </template>
              </el-popconfirm>

              <slot name="table-operate-append" :row="row" />
            </el-space>
          </div>
        </template>
      </el-table-column>

      <slot name="table-append" :table-data="tableData" />

      <!-- 表格插槽 -->
      <template v-for="slotName in tableSlots" :key="slotName" #[getSlotName(slotName,false)]="scoope: any">
        <slot :name="slotName" v-bind="scoope" />
      </template>
    </LSTable>
  </div>
  <el-skeleton v-else :rows="5" animated v-bind="skeletonAttrs" />
</template>

<style scoped lang="scss">
:deep(.el-divider--horizontal) {
  margin: 0;
}
:deep(.mt-16px) {
  margin-top: 16px;
}
:deep(.mt-24px) {
  margin-top: 24px;
}
.ls-table-cpo {
  transition: all 3s ease-out;
}
.mt-16px {
  margin-top: 16px;
}
.mt-24px {
  margin-top: 24px;
}
.mb-6px {
  margin-bottom: 6px;
}
.flex {
  display: flex;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: end;
}
.justify-start {
  justify-content: start;
}
.justify-center {
  justify-content: center;
}
.ls-list-table__switch {
  height: 18px;
}
.transition-all-300 {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  transition-property: all;
}
.animate_fadeIn {
  animation-name: fadein;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

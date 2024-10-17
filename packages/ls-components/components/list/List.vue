<script setup lang="ts" name="LSList">
// 公共列表页面
import useTableListHook from '@cpo/_hooks/useTableListHook';
import { ElMessage, ElDivider, ElMessageBox } from 'element-plus';
import { lsListProps } from './types';
import LSForm from '@cpo/form/Form.vue';
import LSTable from '@cpo/table/Table.vue';

const props = defineProps(lsListProps);

const emits = defineEmits<{
  submitForm: [formData: any];
}>();

/** 表格数据 */
const { isFirst, loading, tableData, total, currentPage, handleCurrentPageChange, handleSizeChange, handleReset, loadData } =
  useTableListHook(props.listApi, props.formData);

// 查询
function submitForm(val: any) {
  console.log('提交', val);
  emits('submitForm', val);
}

// 重置
function resetForm(val: any) {
  console.log('重置', val);
  handleReset();
}

// 添加
function onAdd() {}

// 查看
function onDetail(id: number) {
  console.log('id', id);
}

// 编辑
function onEdit(id: number) {
  console.log('id', id);
}

const delId = ref<number | undefined>(undefined);
const delLoading = ref(false);

// 删除
function onDel(id: any) {
  if (props.delApi) {
    delId.value = id;
    delLoading.value = true;
    props
      .delApi(id)
      .then(() => {
        ElMessage.success('删除成功');
        loadData();
      })
      .catch((err: any) => {
        console.log(err);
      })
      .finally(() => {
        delLoading.value = false;
      });
  }
}

// 启用 停用
const switchId = ref();
const switchLoading = ref(false);

function switchBeforeChange(id: number, status: boolean | number): Promise<boolean> {
  switchId.value = id;
  const onSwitch = (resolve: (value: boolean | PromiseLike<boolean>) => void, reject: any) => {
    if (props.switchApi) {
      switchLoading.value = true;
      props
        .switchApi(id)
        .then(() => {
          loadData(false);
          resolve(true);
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
      ElMessageBox.confirm('<strong class="text-14px">请问是否关闭？</strong>', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        customStyle: {
          width: '240px'
        }
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

const spacer = h(ElDivider, { direction: 'vertical' });

defineExpose({
  loadData
});
</script>

<template>
  <div v-if="!isFirst" class="animate_fadeIn transition-all-300">
    <LSForm
      class="mb-6px"
      label-position="top"
      :show-btn-loading="false"
      :colon="false"
      :inline="true"
      :form-data="formData"
      :form-items="formItems"
      confirm-text="查询"
      v-bind="formAttrs"
      @submit="submitForm"
      @reset="resetForm"
    />

    <template v-if="showOperate">
      <el-divider border-style="dashed" />
      <div class="mt-24px flex items-center justify-start">
        <!-- 操作按钮区域 -->
        <slot name="operate" />

        <el-button v-if="showAdd" type="primary" :disabled="loading" @click="onAdd">
          {{ addBtnText }}
        </el-button>

        <!-- 操作按钮区域 -->
        <slot name="operate-after" />
      </div>
    </template>

    <LSTable
      class="table-cpo"
      :class="showOperate ? 'mt-16px' : 'mt-24px'"
      show-overflow-tooltip
      :loading="loading"
      :total="total"
      :table-data="tableData"
      :table-column="tableColumn"
      :current-page="currentPage"
      v-bind="tableAttrs"
      v-on="tableListeners || {}"
      @size-change="handleSizeChange"
      @current-page-change="handleCurrentPageChange"
    >
      <!-- 开关列 -->
      <el-table-column v-if="showTableSwitch" :prop="switchProp" label="是否开启" width="100">
        <template #default="{ row }">
          <el-switch
            :model-value="row[switchProp] ? 1 : 0"
            :active-value="1"
            :inactive-value="0"
            :loading="switchLoading && row.id === switchId"
            :before-change="() => switchBeforeChange(row.id, row.status)"
          />
        </template>
      </el-table-column>

      <!-- 操作列 -->
      <el-table-column v-if="showTableOperate" fixed="right" prop="operate" label="操作" :show-overflow-tooltip="false">
        <template #default="{ row }">
          <div class="flex items-center">
            <el-space :size="0" :spacer="spacer">
              <el-button link type="primary" @click="onDetail(row.id)">查看</el-button>

              <el-button link type="primary" @click="onEdit(row.id)">编辑</el-button>

              <el-popconfirm
                hide-icon
                placement="top"
                width="180"
                confirm-button-text="确认"
                cancel-button-text="取消"
                :title="`是否删除当前列数据？`"
                @confirm="onDel(row.id)"
              >
                <template #reference>
                  <el-button link type="danger" :disabled="delLoading" :loading="delLoading && delId === row.id">
                    {{ delLoading && delId === row.id ? '' : '删除' }}
                  </el-button>
                </template>
              </el-popconfirm>
            </el-space>
          </div>
        </template>
      </el-table-column>

      <template v-for="(_slotContent, slotName) in $slots" :key="slotName" #[slotName]="{ row }">
        <slot :name="slotName" :row="row" />
      </template>
    </LSTable>
  </div>
  <el-skeleton v-else :rows="5" animated />
</template>

<style scoped lang="scss">
:deep() .el-divider--horizontal {
  margin: 0;
}
.table-cpo {
  transition: all 3s ease-out;
}
:deep() .mt-16px {
  margin-top: 16px;
}
:deep() .mt-24px {
  margin-top: 24px;
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

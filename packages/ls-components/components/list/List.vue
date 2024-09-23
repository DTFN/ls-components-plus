<script setup lang="ts" name="LSList">
// 公共列表页面
import useTableListHook from './_hooks/useTableListHook.ts';

interface TableOperateType {
  fixed?: string;
  width?: string | number;
  showDetail?: boolean;
  showEdit?: boolean;
  showDel?: boolean;
  detailText?: string;
  editText?: string;
  delText?: string;
}

const props = withDefaults(
  defineProps<{
    noAuto?: boolean;
    formData: {
      [key: string]: any;
    };
    formItems: FormItemsType[];
    tableColumn: any[];
    // 列表接口
    listApi?: Function;
    // 删除接口
    delApi?: Function;
    // 启用停用接口
    switchApi?: Function;
    // 是否显示操作按钮展示区域
    showOperate?: boolean;
    // 是否显示添加按钮
    showAdd?: boolean;
    // 添加按钮文字
    addBtnText?: string;
    // 添加页面路由地址
    addPath?: string;
    // 是否显示表格操作的切换按钮
    showTableSwitch?: boolean;
    // 是否显示表格操作按钮
    showTableOperate?: boolean;
    // 表格操作区域配置
    tableOperate?: TableOperateType;
    // 表格上的查看按钮显示规则
    showTableDetail?: Function;
    // 表格上的编辑按钮显示规则
    showTableEdit?: Function;
    // 表格上的删除按钮显示规则
    showTableDel?: Function;
    // 表格上的查看按钮禁用规则
    disabledTableDetail?: Function;
    // 表格上的编辑按钮禁用规则
    disabledTableEdit?: Function;
    // 表格上的删除按钮禁用规则
    disabledTableDel?: Function;
    // 表格上的开启开关禁用规则
    disabledTableSwitch?: Function;
    // table 参数
    tableProps?: {
      [key: string]: any;
    };
    // table 事件
    tableListeners?: {
      [key: string]: Function;
    };
    // 自己处理Submit
    isSubmit?: boolean;
  }>(),
  {
    noAuto: false,
    showOperate: true,
    showAdd: true,
    addBtnText: '添加',
    addPath: 'add',
    showTableSwitch: true,
    showTableOperate: true,
    tableOperate: () => {
      return {
        fixed: 'right',
        width: '180',
        showDetail: true,
        showEdit: true,
        showDel: true,
        detailText: '查看',
        editText: '编辑',
        delText: '删除'
      };
    }
  }
);

const emits = defineEmits<{
  submitForm: [formData: any];
}>();
const { currentRoute, push } = useRouter();
const routePath = computed(() => {
  return currentRoute.value.path;
});
const operate = computed(() => {
  return {
    fixed: 'right',
    width: '180',
    showDetail: true,
    showEdit: true,
    showDel: true,
    detailText: '查看',
    editText: '编辑',
    delText: '删除',
    ...props.tableOperate
  };
});

/** 表格数据 */
const { isFirst, loading, tableData, total, handleCurrentPageChange, handleSizeChange, loadData, handleReset, currentPage } =
  useTableListHook(props.listApi, props.formData, props.noAuto);

// 查询
function submitForm(val: any) {
  console.log('提交', val);
  emits('submitForm', val);
  if (!props.isSubmit) loadData();
}

// 重置
function resetForm(val: any) {
  console.log('重置', val);
  handleReset();
}

// 添加
function onAdd() {
  push(`${routePath.value}/${props.addPath}`);
}

// 查看
function onDetail(id: number) {
  push(`${routePath.value}/detail/${id}`);
}

// 编辑
function onEdit(id: number) {
  push(`${routePath.value}/edit/${id}`);
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

// 是否显示表格上的查看按钮
function showDetail(row: any) {
  let show = operate.value.showDetail;
  if (props.showTableDetail) show = props.showTableDetail(row);
  return show;
}

// 是否显示表格上的编辑按钮
function showEdit(row: any) {
  let show = operate.value.showEdit;
  if (props.showTableEdit) show = props.showTableEdit(row);
  return show;
}

// 是否显示表格上的删除按钮
function showDel(row: any) {
  let show = operate.value.showDel;
  if (props.showTableDel) show = props.showTableDel(row);
  return show;
}

// 是否禁用表格上的查看按钮
function disabledDetail(row: any) {
  let disabled = false;
  if (props.disabledTableDetail) disabled = props.disabledTableDetail(row);
  return disabled;
}

// 是否禁用表格上的编辑按钮
function disabledEdit(row: any) {
  let disabled = false;
  if (props.disabledTableEdit) disabled = props.disabledTableEdit(row);
  return disabled;
}

// 是否禁用表格上的删除按钮
function disabledDel(row: any) {
  let disabled = false;
  if (props.disabledTableDel) disabled = props.disabledTableDel(row);
  return disabled;
}

// 是否禁用表格上的开启开关禁用规则
function disabledSwitch(row: any) {
  let disabled = false;
  if (props.disabledTableSwitch) disabled = props.disabledTableSwitch(row);
  return disabled;
}

// 跳转页面
function toPage(path: string, id: string | number) {
  push(`${routePath.value}/${path}${id ? `/${id}` : ''}`);
}

const spacer = h(ElDivider, { direction: 'vertical' });

defineExpose({
  toPage,
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
      @submit="submitForm"
      @reset="resetForm"
    />
    <template v-if="showOperate">
      <el-divider border-style="dashed" />
      <div mt-24px flex items-center justify-start>
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
      v-bind="tableProps"
      v-on="tableListeners || {}"
      @size-change="handleSizeChange"
      @current-page-change="handleCurrentPageChange"
    >
      <!-- 开关列 -->
      <el-table-column v-if="showTableSwitch" prop="status" label="是否开启" width="100">
        <template #default="{ row }">
          <el-switch
            :model-value="row.status ? 1 : 0"
            :active-value="1"
            :inactive-value="0"
            :loading="switchLoading && row.id === switchId"
            :before-change="() => switchBeforeChange(row.id, row.status)"
            :disabled="disabledSwitch(row)"
          />
        </template>
      </el-table-column>

      <!-- 操作列 -->
      <el-table-column
        v-if="showTableOperate"
        fixed="right"
        prop="operate"
        label="操作"
        :width="operate.width"
        :show-overflow-tooltip="false"
      >
        <template #default="{ row }">
          <span flex items-center>
            <el-space :size="0" :spacer="spacer">
              <slot name="table-operate-head" :row="row" />
              <el-button v-if="showDetail(row)" link type="primary" :disabled="disabledDetail(row)" @click="onDetail(row.id)">{{
                operate.detailText
              }}</el-button>
              <el-button v-if="showEdit(row)" link type="primary" :disabled="disabledEdit(row)" @click="onEdit(row.id)">{{
                operate.editText
              }}</el-button>
              <el-popconfirm
                v-if="showDel(row)"
                hide-icon
                placement="top"
                width="180"
                confirm-button-text="确认"
                cancel-button-text="取消"
                :title="`是否${operate.delText}当前列数据？`"
                @confirm="onDel(row.id)"
              >
                <template #reference>
                  <el-button
                    link
                    type="danger"
                    :disabled="disabledDel(row) || delLoading"
                    :loading="delLoading && delId === row.id"
                    >{{ delLoading && delId === row.id ? '' : operate.delText }}</el-button
                  >
                </template>
              </el-popconfirm>
              <slot name="table-operate" :row="row" />
            </el-space>
          </span>
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
</style>

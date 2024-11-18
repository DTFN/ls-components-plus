<script setup lang="ts" name="LSFormText"></script>

<template>
  <LSForm v-bind="$attrs">
    <template #div-item="{ row }">
      <el-form-item :label="row.label" :prop="row.prop">
        <div>{{ row.label }}</div>
      </el-form-item>
    </template>

    <template v-for="(_slotContent, slotName) in $slots" :key="slotName" #[slotName]="{ row }">
      <slot :name="slotName" :row="{ ...row }" />
    </template>
  </LSForm>
</template>

<style scoped lang="scss">
.form-demo {
  padding: 20px;
}
</style>

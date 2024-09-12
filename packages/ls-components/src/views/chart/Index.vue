<script setup lang="ts">
const formInline = reactive({
  themeModel: 'default',
  axis: 'x',
  pos: 'top'
});
const themeOptions = [
  {
    label: '默认',
    value: 'default'
  },
  {
    label: '暗黑',
    value: 'dark'
  }
];

function changeChartStyle() {
  [
    'templatePatchSimple',
    'templatePatchNegative',
    'templatePatchWaterfall',
    'templatePatchCategory',
    'templatePatchMultiBar'
  ].forEach((item: any) => {
    item.theme = formInline.themeModel;
    item.axis = formInline.axis;
  });
  ['templatePatchSimple', 'templatePatchCategory', 'templatePatchMultiBar'].forEach((item: any) => {
    item.labelPosition = formInline.pos;
  });
}
</script>

<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="坐标轴：">
        <el-radio-group v-model="formInline.axis" @input="changeChartStyle">
          <el-radio label="x">x轴</el-radio>
          <el-radio label="y">y轴</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="数值展示位置：">
        <el-radio-group v-model="formInline.pos" @input="changeChartStyle">
          <el-radio label="top">上</el-radio>
          <el-radio label="bottom">下</el-radio>
          <el-radio label="left">左</el-radio>
          <el-radio label="right">右</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="主题：">
        <el-select v-model="formInline.themeModel" @change="changeChartStyle" placeholder="请选择主题">
          <el-option v-for="item in themeOptions" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped></style>

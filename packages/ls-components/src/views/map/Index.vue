<script setup lang="ts">
const markerList = ref([
  {
    lnglat: ['121.922823', '30.898127']
  }
]);

const markerDialogContent = ref(`<div class='point-wrap'>
  <div class='title'>已生产区块数</div>
  <div class='value'>100</div>
  <div class='title'>已存证Hash</div>
  <div class='value'>200</div>
  <div class='title'>地点</div>
  <div class='value'>上海</div>
</div>`);
</script>

<template>
  <div>
    <LSMap
      security-code="847006cb1fd3e4d32dd34094f8b95f24"
      map-key="ae35d805016e3178c4a68e8bd616bfb8"
      :center="['121.923553', '30.893751']"
      :show-marker="true"
      :marker-list="markerList"
      :show-marker-dialog="true"
      :marker-dialog-content="markerDialogContent"
      marker-dialog-anchor="top-right"
      :marker-dialog-offset="[0, 20]"
    />
  </div>
</template>

<style lang="scss" scoped>
:deep() .point-wrap {
  position: relative;
  box-sizing: border-box;
  min-width: 129px;
  padding: 24px 16px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #3d3d3d;
  .title {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    color: #3d3d3d;
  }
  .value {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
    color: #3d3d3d;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>

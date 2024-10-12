<script setup lang="ts">
const list = ref([
  {
    slotName: 'slot1'
  },
  {
    slotName: 'slot2',
    boxPos: 'left',
    boxPosVal: 220,
    linePos: 'left',
    lineLength: 60,
    arrowPos: 'left',
    boxBgColor: 'green'
  },
  {
    slotName: 'slot3',
    boxPos: 'top',
    boxPosVal: 140,
    linePos: 'top',
    lineLength: 60,
    lineColor: 'red',
    arrowPos: 'top'
  },
  {
    slotName: 'slot4',
    boxPos: 'top',
    boxPosVal: 280,
    linePos: 'top',
    lineLength: 60,
    lineColor: 'red'
  }
]);
</script>

<template>
  <div>
    <LSFlowBox :list="list" width="380px" height="360px">
      <template v-for="item in list" #[item.slotName] :key="item.slotName">
        <div class="flow-box-item">{{ item.slotName }}</div>
      </template>
      <div class="merge-line">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </LSFlowBox>
  </div>
</template>

<style lang="scss" scoped>
.flow-box-item {
  width: 160px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.merge-line {
  .line {
    position: absolute;
    background-color: orange;
    &:nth-of-type(1) {
      top: 180px;
      left: 160px;
      width: 60px;
      height: 2px;
    }
    &:nth-of-type(2) {
      top: 320px;
      left: 160px;
      width: 60px;
      height: 2px;
    }
    &:nth-of-type(3) {
      top: 180px;
      left: 220px;
      width: 2px;
      height: 70px;
    }
    &:nth-of-type(4) {
      top: 250px;
      left: 220px;
      width: 2px;
      height: 72px;
    }
  }
}
</style>

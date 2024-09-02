<script setup lang="ts">
const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
const item1 = ref({
  isCover: false
});
</script>

<template>
  <div>
    <LSUpload :action="action"></LSUpload>

    <br />

    <LSUpload :action="action" :item="item1"></LSUpload>

    <br />

    <LSUpload :action="action" :auto-upload="false"></LSUpload>
  </div>
</template>

<style lang="scss" scoped></style>

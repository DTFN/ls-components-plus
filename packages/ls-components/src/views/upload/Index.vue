<script setup lang="ts">
import axios from 'axios';

const action = ref('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership');
const item1 = ref({
  isCover: false
});

const item2 = ref({
  httpRequestFunc: function (formData: any, uploadProcessObj: any) {
    return axios.post('http://icds-admin.test.sh.energy-blockchain.com/v1/proof/data-ownership', formData, uploadProcessObj);
  }
});
</script>

<template>
  <div>
    <LSUpload :action="action"></LSUpload>

    <br />

    <LSUpload :action="action" :item="item1"></LSUpload>

    <br />

    <LSUpload :action="action" :auto-upload="false" :item="item2"></LSUpload>

    <br />

    <LSUpload :action="action" :item="item2"></LSUpload>

    <br />
  </div>
</template>

<style lang="scss" scoped></style>

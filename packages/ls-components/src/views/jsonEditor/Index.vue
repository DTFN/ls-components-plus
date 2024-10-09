<script setup lang="ts">
const jsonValue = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: { a: 'b', c: 'd' },
  string: 'Hello World'
});
</script>

<template>
  <div>
    <LSJsonEditor mode="text" :json-value="jsonValue" />
  </div>
</template>

<style lang="scss" scoped></style>

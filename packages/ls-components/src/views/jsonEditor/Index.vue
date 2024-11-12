<script setup lang="ts">
const jsonEditorRef = ref();

const jsonValue = ref({
  array: [1, 2, 3],
  boolean: true,
  Null: null,
  number: 123,
  seconds: 0,
  object: { a: 'b', c: 'd' },
  string: 'Hello World'
});

function getJson() {
  console.log(jsonEditorRef.value.getJsonValue());
}
</script>

<template>
  <div>
    <LSJsonEditor ref="jsonEditorRef" mode="text" :read-only="false" :json-value="jsonValue" />

    <br />

    <LSJsonEditor ref="jsonEditor2Ref" mode="text" :json-value="jsonValue" />

    <br />

    <LSButton type="primary" @click="getJson">获取json</LSButton>
  </div>
</template>

<style lang="scss" scoped></style>

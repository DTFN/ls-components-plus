<script setup lang="ts" name="LSJsonEditor">
import { useNamespace } from '@cpo/_hooks/useNamespace'
import { merge } from 'lodash-es'
// https://github.com/bestkolobok/vue3-jsoneditor
import JsonEditor from 'vue3-ts-jsoneditor'
import { lsJsonEditorProps } from './types'

const props = defineProps(lsJsonEditorProps)
const ns = useNamespace('json-editor')
const comClass: string = ns.b()

const attrs = useAttrs()

const defAttrs: any = ref({
  mode: 'text',
  height: 600,
  navigationBar: false,
  readOnly: true,
})

const jsonModel: any = ref({})
const editorCss = ref('')

const bindAttrs = computed(() => {
  const curAttrs = merge(defAttrs.value, attrs)

  if (typeof curAttrs['read-only'] !== 'undefined') {
    curAttrs.readOnly = curAttrs['read-only']
  }

  if (typeof curAttrs['navigation-bar'] !== 'undefined') {
    curAttrs.navigationBar = curAttrs['navigation-bar']
  }

  if (!curAttrs.readOnly) {
    curAttrs.mode = 'tree'
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    editorCss.value = 'editor-status'
  }

  return curAttrs
})

watch(
  () => props.jsonValue,
  (val) => {
    jsonModel.value = val
  },
  {
    immediate: true,
    deep: true,
  },
)

function getJsonValue() {
  return jsonModel.value
}

defineExpose({
  getJsonValue,
})
</script>

<template>
  <div :class="comClass">
    <json-editor v-bind="bindAttrs" v-model="jsonModel" :class="editorCss" />
  </div>
</template>

<style lang="scss" scoped>
.ls-json-editor {
  :deep(.vue-ts-json-editor) {
    .jse-last,
    .jse-search,
    .jse-separator {
      display: none !important;
    }
    .jse-button {
      &:nth-of-type(2) {
        border-right: 1px solid #ffffff !important;
      }
    }
  }
  .editor-status {
    :deep(.jse-first) {
      display: none !important;
    }
    :deep(.jse-button) {
      &:nth-of-type(2) {
        margin-left: calc(0.5 * var(--jse-padding, 10px)) !important;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { isClient, useEventListener, useToggle } from '@vueuse/core';
import { onMounted } from 'vue';
import VPContent from './vp-content.vue';

const [isSidebarOpen, toggleSidebar] = useToggle(false)

useEventListener('keydown', (e) => {
  if (!isClient) return
  if (e.key === 'Escape' && isSidebarOpen.value) {
    toggleSidebar(false)
    document.querySelector<HTMLButtonElement>('.sidebar-button')?.focus()
  }
})

onMounted(async () => {
  if (!isClient) return
  window.addEventListener(
    'click',
    (e) => {
      const link = (e.target as HTMLElement).closest('a')
      if (!link) return

      const { protocol, hostname, pathname, target } = link
      const currentUrl = window.location
      const extMatch = pathname.match(/\.\w+$/)
      // only intercept inbound links
      if (
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        target !== `_blank` &&
        protocol === currentUrl.protocol &&
        hostname === currentUrl.hostname &&
        !(extMatch && extMatch[0] !== '.html')
      ) {
        e.preventDefault()
      }
    },
    { capture: true }
  )

  // unregister sw
  navigator?.serviceWorker?.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
})
</script>

<template>
  <div class="App">
    <VPContent :is-sidebar-open="isSidebarOpen">
      <template #content-top>
        <slot name="content-top" />
      </template>
      <template #content-bottom>
        <slot name="content-bottom" />
      </template>
      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-mid>
        <slot name="aside-mid" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
    </VPContent>
    <Debug />
  </div>
</template>

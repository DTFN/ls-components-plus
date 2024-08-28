<script lang="ts" setup>
defineProps<{
  isHome?: boolean
}>()
</script>

<template>
  <footer class="footer" :class="{ 'is-home': isHome }">
    test copyright
  </footer>
</template>

<style lang="scss">
.dark .footer {
  background-color: var(--el-fill-color-lighter);
}
.footer {
  background-color: #f5f7fa;
  box-sizing: border-box;
  padding: 42px 64px 64px;

  &.is-home {
    background-color: var(--bg-color);
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
  }

  .container {
    box-sizing: border-box;
    width: auto;
  }
}

@media (max-width: 1140px) {
  .footer {
    height: auto;
  }
}

@media (max-width: 1000px) {
  .footer-social {
    display: none;
  }
}

@media (max-width: 768px) {
  .footer {
    .footer-main {
      margin-bottom: 30px;
    }
  }
}
</style>

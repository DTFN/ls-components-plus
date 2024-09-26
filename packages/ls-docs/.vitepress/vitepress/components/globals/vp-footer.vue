<script lang="ts" setup>
defineProps<{
  isHome?: boolean;
}>();
</script>

<template>
  <footer class="footer" :class="{ 'is-home': isHome }">test copyright</footer>
</template>

<style lang="scss">
.dark .footer {
  background-color: var(--el-fill-color-lighter);
}
.footer {
  box-sizing: border-box;
  padding: 42px 64px 64px;
  background-color: #f5f7fa;
  &.is-home {
    max-width: 1200px;
    padding: 40px 0;
    margin: 0 auto;
    background-color: var(--bg-color);
  }
  .container {
    box-sizing: border-box;
    width: auto;
  }
}

@media (width <= 1140px) {
  .footer {
    height: auto;
  }
}

@media (width <= 1000px) {
  .footer-social {
    display: none;
  }
}

@media (width <= 768px) {
  .footer {
    .footer-main {
      margin-bottom: 30px;
    }
  }
}
</style>

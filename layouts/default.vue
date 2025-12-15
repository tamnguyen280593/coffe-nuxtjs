<template>
  <div>
    <AppHeader />
    <main :class="['page-content', { 'page-content-no-top': isHomePage }]">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>


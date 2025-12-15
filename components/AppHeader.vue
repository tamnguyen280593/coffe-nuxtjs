<template>
  <header class="bg-white shadow-[0_2px_10px_rgba(101,67,33,0.1)] sticky top-0 z-[1000] border-b-2 border-cafe-gold">
    <div class="container">
      <div class="flex items-center justify-between py-4 gap-4 relative">
        <NuxtLink to="/" class="text-2xl font-bold text-cafe-brown-light hover:text-cafe-brown-lighter transition-colors duration-300 no-underline">
          {{ config.appName }}
        </NuxtLink>

        <!-- Mobile menu toggle -->
        <button
          class="md:hidden absolute right-0 inline-flex items-center justify-center w-11 h-11 rounded-lg border border-cafe-gold text-cafe-brown bg-white shadow-sm hover:bg-cafe-gold/10 hover:shadow-md transition-all duration-200"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav class="w-full md:w-auto md:static">
          <ul
            class="list-none md:flex md:flex-row md:items-center md:gap-8 md:w-auto md:text-left text-center
                   flex flex-col gap-4 w-full md:w-auto
                   md:static absolute left-0 top-full md:top-auto bg-white md:bg-transparent
                   shadow-lg md:shadow-none border-t border-cafe-gold md:border-0 px-5 py-4 md:p-0
                   transition-all duration-300 ease-in-out
                   md:translate-x-0 md:opacity-100 md:pointer-events-auto"
            :class="isMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : '-translate-x-full opacity-0 pointer-events-none'"
          >
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink 
                :to="item.path" 
                class="text-cafe-brown font-medium transition-colors duration-300 no-underline relative hover:text-cafe-brown-lighter block"
                :class="{ 'text-cafe-brown-lighter': isActive(item.path) }"
                @click="closeMenu"
              >
                {{ item.label }}
                <span 
                  v-if="isActive(item.path)" 
                  class="absolute -bottom-1 left-0 right-0 h-0.5 bg-cafe-brown-lighter"
                ></span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navItems } from '~/constants/navigation'

const route = useRoute()
const config = useRuntimeConfig().public
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (path: string): boolean => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)
</script>


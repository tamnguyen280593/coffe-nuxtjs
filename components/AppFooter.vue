<template>
  <footer class="bg-gradient-to-br from-cafe-brown to-cafe-brown-dark text-white pt-12 pb-4 md:mt-16 mt-0 border-t-[3px] border-cafe-gold">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-8">
        <div>
          <h3 class="text-2xl mb-4 text-cafe-gold font-semibold">{{ config.appName }}</h3>
          <p class="text-cafe-beige-light leading-relaxed">{{ config.description }}</p>
        </div>

        <div>
          <h4 class="text-lg mb-4 text-cafe-gold font-semibold">Links</h4>
          <ul class="list-none p-0">
            <li v-for="item in navItems" :key="item.path" class="mb-2">
              <NuxtLink :to="item.path" class="text-cafe-beige-light no-underline transition-colors duration-300 hover:text-cafe-gold">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg mb-4 text-cafe-gold font-semibold">Liên hệ</h4>
          <ul class="list-none p-0 text-cafe-beige-light">
            <li v-for="item in availableContactItems" :key="item.type" class="mb-3 flex items-center gap-2">
              <span class="text-xl">{{ item.icon }}</span>
              <template v-if="item.href">
                <a :href="`${item.href}:${getContactValue(item)}`" class="text-cafe-beige-light no-underline transition-colors duration-300 hover:text-cafe-gold">
                  {{ getContactValue(item) }}
                </a>
              </template>
              <template v-else>
                {{ getContactValue(item) }}
              </template>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg mb-4 text-cafe-gold font-semibold">Theo dõi chúng tôi</h4>
          <div class="flex flex-col gap-3">
            <a 
              v-for="item in availableSocialItems" 
              :key="item.name"
              :href="getSocialUrl(item)" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-cafe-beige-light no-underline transition-all duration-300 p-2 rounded hover:text-cafe-gold hover:bg-cafe-gold/10 hover:translate-x-1"
              :aria-label="item.ariaLabel"
            >
              <svg 
                class="w-6 h-6 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :d="item.svgPath" />
              </svg>
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>

      <div class="text-center pt-8 border-t border-cafe-gold/30 text-cafe-beige-light">
        <p>&copy; 2023 {{ config.appName }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { navItems } from '~/constants/navigation'
import { contactItems, socialItems, type ContactItem, type SocialItem } from '~/constants/footer'

const config = useRuntimeConfig().public

const getContactValue = (item: ContactItem): string | undefined => {
  const value = config[item.value as keyof typeof config] as string | undefined
  return value || undefined
}

const getSocialUrl = (item: SocialItem): string | undefined => {
  const url = config[item.url as keyof typeof config] as string | undefined
  return url || undefined
}

const availableContactItems = computed(() => {
  return contactItems.filter(item => getContactValue(item))
})

const availableSocialItems = computed(() => {
  return socialItems.filter(item => getSocialUrl(item))
})
</script>


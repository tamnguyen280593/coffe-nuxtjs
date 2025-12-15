<template>
  <section class="py-12 md:py-24 bg-cafe-beige">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-cafe-brown-dark mb-4">
          Thực Đơn Nổi Bật
        </h2>
        <div class="w-20 h-1 bg-cafe-gold mx-auto mb-4"></div>
        <p class="text-gray-700 max-w-2xl mx-auto">
          Khám phá những món đồ uống và món ăn đặc biệt được yêu thích nhất tại quán của chúng tôi
        </p>
      </div>

      <div v-if="items.length > 0" class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="item in items" 
          :key="item.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
        >
          <div class="relative h-48 overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.name" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
            <div class="absolute top-4 right-4 bg-cafe-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
              {{ item.price }}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-cafe-brown-dark mb-2">
              {{ item.name }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-2">
              {{ item.description }}
            </p>
            <div class="flex items-center gap-2 text-cafe-gold">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-sm font-medium">{{ item.rating }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <NuxtLink 
          to="/products" 
          class="inline-block bg-cafe-brown hover:bg-cafe-brown-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Xem toàn bộ thực đơn
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMenu } from '~/composables/useMenu'

const { items, fetchMenu } = useMenu()

await fetchMenu()
</script>
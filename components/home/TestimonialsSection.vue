<template>
  <section class="pt-12 md:pt-24 bg-cafe-beige">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-cafe-brown-dark mb-4">
          Khách Hàng Nói Gì Về Chúng Tôi
        </h2>
        <div class="w-20 h-1 bg-cafe-gold mx-auto mb-4"></div>
        <p class="text-gray-700 max-w-2xl mx-auto">
          Những phản hồi chân thành từ khách hàng đã trải nghiệm dịch vụ của chúng tôi
        </p>
      </div>
      
      <SwiperSlider
        :slides="items"
        :slides-per-view="1"
        :space-between="30"
        :autoplay="{ delay: 5000 }"
        class="max-w-4xl mx-auto"
      >
        <template #slide="{ slide }">
          <div class="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
            <div class="flex justify-center mb-4">
              <div class="flex gap-1">
                <svg 
                  v-for="i in 5" 
                  :key="i"
                  class="w-6 h-6 text-cafe-gold" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-700 text-lg mb-6 leading-relaxed italic">
              "{{ slide.comment }}"
            </p>
            <div class="flex items-center justify-center gap-4">
              <div class="w-16 h-16 rounded-full bg-cafe-gold/20 flex items-center justify-center text-2xl font-bold text-cafe-brown">
                {{ slide.avatar }}
              </div>
              <div class="text-left">
                <div class="font-bold text-cafe-brown-dark">{{ slide.name }}</div>
                <div class="text-gray-600 text-sm">{{ slide.role }}</div>
              </div>
            </div>
          </div>
        </template>
      </SwiperSlider>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTestimonials } from '~/composables/useTestimonials'

const { items, fetchTestimonials } = useTestimonials()

await fetchTestimonials()
</script>


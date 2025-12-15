<template>
  <div class="swiper-container relative" ref="swiperContainerRef">
    <swiper
      :modules="modules"
      :slides-per-view="slidesPerView"
      :space-between="spaceBetween"
      :navigation="navigationConfig"
      :pagination="paginationConfig"
      :loop="loop"
      :autoplay="autoplay"
      :effect="effect"
      class="h-full"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <slot name="slide" :slide="slide" :index="index">
          <div class="w-full h-full">
            <img :src="slide.image" :alt="slide.alt || ''" class="w-full h-full object-cover" />
          </div>
        </slot>
      </swiper-slide>
    </swiper>
    
    <!-- Custom Navigation -->
    <div v-if="showNavigation" class="swiper-navigation">
      <button 
        class="swiper-button-prev-custom absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg class="w-3 h-3 md:w-6 md:h-6 text-cafe-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        class="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1.5 md:p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg class="w-3 h-3 md:w-6 md:h-6 text-cafe-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
    
    <!-- Custom Pagination -->
    <div v-if="showPagination" ref="paginationRef" class="swiper-pagination-custom absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center"></div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface Slide {
  image?: string
  alt?: string
  [key: string]: any
}

interface Props {
  slides: Slide[]
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  loop?: boolean
  autoplay?: boolean | { delay?: number }
  effect?: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  showNavigation?: boolean
  showPagination?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: true,
  effect: 'slide',
  showNavigation: true,
  showPagination: true
})

const modules = [Navigation, Pagination, Autoplay, EffectFade]

const swiperContainerRef = ref<HTMLElement | null>(null)
const paginationRef = ref<HTMLElement | null>(null)

const navigationConfig = computed(() => ({
  nextEl: '.swiper-button-next-custom',
  prevEl: '.swiper-button-prev-custom',
}))

const paginationConfig = computed(() => {
  if (!paginationRef.value) return false
  return {
    el: paginationRef.value,
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
  }
})
</script>

<style scoped>
:deep(.swiper-pagination-custom) {
  display: flex !important;
  gap: 8px;
  justify-content: center !important;
  align-items: center !important;
  width: auto !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
}

:deep(.swiper-pagination-bullet) {
  background: rgba(255, 255, 255, 0.5);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 1;
  margin: 0 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

:deep(.swiper-pagination-bullet:hover) {
  background: rgba(255, 255, 255, 0.8);
  border-color: rgba(255, 255, 255, 1);
  transform: scale(1.2);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

:deep(.swiper-pagination-bullet-active) {
  background: #d4a574;
  width: 32px;
  border-radius: 16px;
  border: 2px solid rgba(255, 255, 255, 0.9);
  transform: scale(1);
  box-shadow: 0 2px 8px rgba(212, 165, 116, 0.5);
}
</style>


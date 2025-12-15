<template>
  <section class="relative h-[600px] md:h-[700px] overflow-hidden">
    <SwiperSlider
      :slides="bannerSlides"
      :autoplay="{ delay: 5000 }"
      effect="fade"
      class="h-full"
    >
      <template #slide="{ slide }">
        <div class="relative w-full h-full">
          <img 
            :src="slide.image" 
            :alt="slide.alt" 
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-center">
            <div class="container text-white">
              <div class="max-w-2xl">
                <h2 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                  {{ slide.title }}
                </h2>
                <p class="text-lg md:text-xl mb-6 text-white/90">
                  {{ slide.description }}
                </p>
                <NuxtLink 
                  :to="slide.ctaLink || '/about'" 
                  class="inline-block bg-cafe-gold hover:bg-cafe-brown-lighter text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {{ slide.ctaText || 'Khám phá ngay' }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </template>
    </SwiperSlider>
  </section>
</template>

<script setup lang="ts">
const bannerSlides = [
  {
    image: '/images/banner/cafe-interior-space.jpg',
    alt: 'Không gian quán cafe ấm cúng với bàn ghế và ánh sáng tự nhiên',
    title: 'Không Gian Cà Phê Hoàn Hảo',
    description: 'Nơi gặp gỡ của những tâm hồn yêu cà phê, không gian ấm cúng và thân thiện cho mọi khoảnh khắc đáng nhớ.',
    ctaText: 'Khám phá ngay',
    ctaLink: '/about'
  },
  {
    image: '/images/banner/coffee-brewing-art.jpg',
    alt: 'Cà phê đang được pha chế với latte art và hạt cà phê chất lượng',
    title: 'Hương Vị Cà Phê Đích Thực',
    description: 'Từ những hạt cà phê được chọn lọc kỹ càng đến từng giọt espresso hoàn hảo, chúng tôi mang đến trải nghiệm cà phê tuyệt vời nhất.',
    ctaText: 'Xem thực đơn',
    ctaLink: '/products'
  },
  {
    image: '/images/banner/cafe-relaxing-ambiance.jpg',
    alt: 'Không gian thư giãn tại quán cafe với mọi người đang làm việc và thư giãn',
    title: 'Nơi Thời Gian Dừng Lại',
    description: 'Tận hưởng không gian yên bình, thư giãn cùng bạn bè và tạo nên những kỷ niệm đẹp bên tách cà phê thơm ngon.',
    ctaText: 'Đặt bàn ngay',
    ctaLink: '/contact'
  }
]
</script>


<template>
  <section class="py-12 md:py-24 bg-white">
    <div class="container">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-cafe-brown-dark mb-4">
          Tại Sao Chọn Chúng Tôi
        </h2>
        <div class="w-20 h-1 bg-cafe-gold mx-auto mb-4"></div>
        <p class="text-gray-700 max-w-2xl mx-auto">
          Những điều đặc biệt làm nên thương hiệu của chúng tôi
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="text-center p-6 rounded-lg hover:bg-cafe-beige transition-colors duration-300"
        >
          <div class="inline-flex items-center justify-center w-16 h-16 bg-cafe-gold/10 rounded-full mb-4">
            <component :is="feature.icon" class="w-8 h-8 text-cafe-gold" />
          </div>
          <h3 class="text-xl font-bold text-cafe-brown-dark mb-3">
            {{ feature.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { BeakerIcon, UserGroupIcon, HomeIcon } from '@heroicons/vue/24/outline'

interface Feature {
  id: number
  title: string
  description: string
  icon: any
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Nguyên Liệu Chất Lượng',
    description: 'Chúng tôi chỉ sử dụng những hạt cà phê được chọn lọc kỹ càng từ các vùng trồng cà phê nổi tiếng, đảm bảo hương vị tuyệt vời nhất.',
    icon: BeakerIcon
  },
  {
    id: 2,
    title: 'Barista Chuyên Nghiệp',
    description: 'Đội ngũ barista giàu kinh nghiệm, được đào tạo bài bản, luôn tận tâm tạo ra những tách cà phê hoàn hảo cho bạn.',
    icon: UserGroupIcon
  },
  {
    id: 3,
    title: 'Không Gian Thoải Mái',
    description: 'Không gian được thiết kế ấm cúng, hiện đại, phù hợp cho làm việc, học tập hay thư giãn cùng bạn bè.',
    icon: HomeIcon
  }
]
</script>


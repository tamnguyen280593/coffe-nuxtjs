<template>
  <section class="py-12 md:py-24 bg-white">
    <div class="container">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img 
            src="/images/about-story.jpg" 
            alt="Câu chuyện của chúng tôi - Barista đang pha chế cà phê với tình yêu và đam mê" 
            class="w-full h-[512px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-cafe-brown-dark mb-4">
            Câu Chuyện Của Chúng Tôi
          </h2>
          <div class="w-20 h-1 bg-cafe-gold mb-6"></div>
          <p class="text-gray-700 mb-4 leading-relaxed">
            Từ niềm đam mê với cà phê và mong muốn tạo ra một không gian ấm cúng, chúng tôi đã xây dựng nên quán cà phê này với tất cả tình yêu và sự tận tâm.
          </p>
          <p class="text-gray-700 mb-6 leading-relaxed">
            Mỗi tách cà phê được pha chế từ những hạt cà phê được chọn lọc kỹ càng, mỗi không gian được thiết kế để mang lại cảm giác thư giãn và thoải mái nhất cho khách hàng.
          </p>
          <div class="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div class="text-3xl font-bold text-cafe-gold mb-2">10+</div>
              <div class="text-gray-600">Năm kinh nghiệm</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-cafe-gold mb-2">50+</div>
              <div class="text-gray-600">Loại đồ uống</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-cafe-gold mb-2">1000+</div>
              <div class="text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-cafe-gold mb-2">5★</div>
              <div class="text-gray-600">Đánh giá trung bình</div>
            </div>
          </div>
          <NuxtLink 
            to="/about" 
            class="inline-block bg-cafe-brown hover:bg-cafe-brown-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Tìm hiểu thêm
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// About section component
</script>


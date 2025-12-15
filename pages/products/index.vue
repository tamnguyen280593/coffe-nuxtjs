<template>
  <section class="bg-white">
    <div class="container py-16 md:py-20">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-sm uppercase tracking-[0.25em] text-cafe-gold mb-3">
          Thực Đơn
        </p>
        <h1 class="text-3xl md:text-4xl font-bold text-cafe-brown-dark mb-4">
          Khám Phá <span class="text-cafe-gold">Thực Đơn Đầy Đủ</span>
        </h1>
        <div class="w-20 h-1 bg-cafe-gold mx-auto mb-4"></div>
        <p class="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Chọn lựa từ hàng chục món đồ uống và món ăn đa dạng, được chế biến từ những nguyên liệu tươi ngon nhất.
        </p>
      </div>

      <!-- Tabs Filter -->
      <div class="mb-10">
        <div class="flex flex-wrap justify-center gap-3 md:gap-4">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="setCategory(category.id)"
            class="px-6 py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300"
            :class="
              selectedCategory === category.id
                ? 'bg-cafe-brown text-white shadow-lg scale-105'
                : 'bg-cafe-cream text-cafe-brown-dark hover:bg-cafe-cream/80 hover:shadow-md'
            "
          >
            {{ category.label }}
          </button>
        </div>
      </div>

      <!-- Products Grid -->
      <div v-if="filteredProducts.length > 0">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div class="relative h-56 overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div class="absolute top-4 right-4 bg-cafe-gold text-white px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                {{ product.price }}
              </div>
              <div
                class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-cafe-brown-dark"
              >
                {{ currentCategoryInfo?.label }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-cafe-brown-dark mb-2 group-hover:text-cafe-gold transition-colors duration-300">
                {{ product.name }}
              </h3>
              <p class="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                {{ product.description }}
              </p>
              <div class="flex items-center gap-2 text-cafe-gold">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span class="text-sm font-medium">{{ product.rating }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-12">
        <p class="text-gray-500 text-lg">Không tìm thấy sản phẩm nào trong danh mục này.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useProducts } from '~/composables/useProducts'

const {
  selectedCategory,
  filteredProducts,
  categories,
  currentCategoryInfo,
  setCategory,
} = useProducts()
</script>

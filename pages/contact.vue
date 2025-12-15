<template>
  <section class="bg-white">
    <div class="container py-16 md:py-20">
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-12">
        <p class="text-sm uppercase tracking-[0.25em] text-cafe-gold mb-3">
          Liên hệ
        </p>
        <h1 class="text-3xl md:text-4xl font-bold text-cafe-brown-dark mb-4">
          Kết Nối Cùng <span class="text-cafe-gold">{{ config.public.appName }}</span>
        </h1>
        <p class="text-gray-700 leading-relaxed">
          Nếu bạn có bất kỳ câu hỏi, góp ý hoặc muốn đặt bàn, hãy để lại thông tin bên dưới.
          Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </div>

      <div class="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-lg border border-cafe-cream/70 p-6 md:p-8">
          <h2 class="text-xl md:text-2xl font-semibold text-cafe-brown-dark mb-1">
            Gửi Lời Nhắn Cho Chúng Tôi
          </h2>
          <p class="text-sm text-gray-600 mb-6">
            Điền đầy đủ thông tin bên dưới để chúng tôi có thể hỗ trợ bạn tốt hơn.
          </p>

          <!-- Success message -->
          <div
            v-if="submitStatus === 'success'"
            class="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 px-4 py-3 text-sm flex items-start gap-2"
          >
            <span class="mt-0.5">✔</span>
            <span>
              Cảm ơn bạn đã liên hệ! Chúng tôi đã nhận được thông tin và sẽ phản hồi trong thời gian sớm nhất.
            </span>
          </div>

          <!-- Error (general) -->
          <div
            v-if="submitStatus === 'error'"
            class="mb-6 rounded-lg border border-red-200 bg-red-50 text-red-800 px-4 py-3 text-sm flex items-start gap-2"
          >
            <span class="mt-0.5">⚠</span>
            <span>
              Vui lòng kiểm tra lại các trường được đánh dấu và thử gửi lại.
            </span>
          </div>

          <form @submit.prevent="() => handleSubmit()" novalidate class="space-y-5">
            <div class="grid md:grid-cols-2 gap-4">
              <!-- Họ và tên -->
              <div>
                <label for="name" class="block text-sm font-medium text-cafe-brown-dark mb-1">
                  Họ và tên <span class="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full rounded-lg border px-3 py-2.5 text-sm md:text-base outline-none transition-colors duration-200"
                  :class="getInputClass('name')"
                  placeholder="Nguyễn Văn A"
                  @blur="touchField('name')"
                />
                <p v-if="errors.name" class="mt-1 text-xs text-red-600">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-cafe-brown-dark mb-1">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="w-full rounded-lg border px-3 py-2.5 text-sm md:text-base outline-none transition-colors duration-200"
                  :class="getInputClass('email')"
                  placeholder="ban@example.com"
                  @blur="touchField('email')"
                />
                <p v-if="errors.email" class="mt-1 text-xs text-red-600">
                  {{ errors.email }}
                </p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              <!-- Số điện thoại -->
              <div>
                <label for="phone" class="block text-sm font-medium text-cafe-brown-dark mb-1">
                  Số điện thoại <span class="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  class="w-full rounded-lg border px-3 py-2.5 text-sm md:text-base outline-none transition-colors duration-200"
                  :class="getInputClass('phone')"
                  placeholder="0901 234 567"
                  @blur="touchField('phone')"
                />
                <p v-if="errors.phone" class="mt-1 text-xs text-red-600">
                  {{ errors.phone }}
                </p>
              </div>

              <!-- Chủ đề -->
              <div>
                <label for="subject" class="block text-sm font-medium text-cafe-brown-dark mb-1">
                  Chủ đề <span class="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="w-full rounded-lg border px-3 py-2.5 text-sm md:text-base outline-none transition-colors duration-200"
                  :class="getInputClass('subject')"
                  placeholder="Ví dụ: Đặt bàn, Góp ý, Hợp tác..."
                  @blur="touchField('subject')"
                />
                <p v-if="errors.subject" class="mt-1 text-xs text-red-600">
                  {{ errors.subject }}
                </p>
              </div>
            </div>

            <!-- Nội dung -->
            <div>
              <label for="message" class="block text-sm font-medium text-cafe-brown-dark mb-1">
                Nội dung <span class="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                class="w-full rounded-lg border px-3 py-2.5 text-sm md:text-base outline-none transition-colors duration-200 resize-y"
                :class="getInputClass('message')"
                placeholder="Chia sẻ với chúng tôi nhu cầu hoặc câu hỏi của bạn..."
                @blur="touchField('message')"
              />
              <p v-if="errors.message" class="mt-1 text-xs text-red-600">
                {{ errors.message }}
              </p>
            </div>

            <!-- Đồng ý điều khoản -->
            <div class="flex items-start gap-2">
              <input
                id="agree"
                v-model="form.agree"
                type="checkbox"
                class="mt-1 h-4 w-4 rounded border-gray-300 text-cafe-brown-dark focus:ring-cafe-brown-dark"
                @blur="touchField('agree')"
              />
              <label for="agree" class="text-xs md:text-sm text-gray-700">
                Tôi đồng ý cho phép {{ config.public.appName }} sử dụng thông tin này để liên hệ và chăm sóc khách hàng.
              </label>
            </div>
            <p v-if="errors.agree" class="mt-1 text-xs text-red-600">
              {{ errors.agree }}
            </p>

            <div class="pt-2 flex items-center gap-4">
              <button
                type="submit"
                class="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-cafe-brown hover:bg-cafe-brown-dark text-white text-sm md:text-base font-semibold transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Gửi thông tin</span>
                <span v-else>Đang gửi...</span>
              </button>
              <p class="text-xs text-gray-500">
                <span class="text-red-500">*</span> Thông tin bắt buộc
              </p>
            </div>
          </form>
        </div>

        <!-- Contact Info + Map -->
        <div class="space-y-6">
          <!-- Info card -->
          <div class="bg-cafe-brown text-white rounded-2xl p-6 md:p-7 shadow-lg">
            <h3 class="text-lg md:text-xl font-semibold mb-3">Thông Tin Liên Hệ</h3>
            <p class="text-cafe-cream-light text-sm mb-5">
              Bạn có thể liên hệ trực tiếp qua thông tin dưới đây hoặc ghé thăm chúng tôi tại quán.
            </p>
            <div class="space-y-3 text-sm md:text-base">
              <div v-if="config.public.address">
                <div class="font-semibold">Địa chỉ</div>
                <div class="text-cafe-cream-light">
                  {{ config.public.address }}
                </div>
              </div>
              <div v-if="config.public.phone">
                <div class="font-semibold mt-3">Số điện thoại</div>
                <a
                  :href="`tel:${config.public.phone}`"
                  class="text-cafe-gold hover:underline"
                >
                  {{ config.public.phone }}
                </a>
              </div>
              <div v-if="config.public.email">
                <div class="font-semibold mt-3">Email</div>
                <a
                  :href="`mailto:${config.public.email}`"
                  class="text-cafe-gold hover:underline break-all"
                >
                  {{ config.public.email }}
                </a>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div v-if="mapUrl" class="bg-white rounded-2xl shadow-lg overflow-hidden border border-cafe-cream/70">
            <div class="p-4 border-b border-cafe-cream/60">
              <h3 class="text-sm md:text-base font-semibold text-cafe-brown-dark">
                Bản Đồ & Vị Trí
              </h3>
              <p class="text-xs text-gray-600 mt-1">
                Vị trí được lấy từ cấu hình môi trường (env) để bạn dễ dàng tìm thấy chúng tôi.
              </p>
            </div>
            <div class="h-64 md:h-72 w-full">
              <iframe
                :src="mapUrl"
                class="w-full h-full border-0"
                style="border:0;"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div v-else class="text-xs text-gray-500">
            Chưa cấu hình bản đồ. Vui lòng thiết lập biến môi trường
            <code class="bg-gray-100 px-1 rounded">MAP_EMBED_URL</code>
            hoặc
            <code class="bg-gray-100 px-1 rounded">ADDRESS</code>
            trong file môi trường để hiển thị bản đồ.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const {
  form,
  errors,
  isSubmitting,
  submitStatus,
  touchField,
  getInputClass,
  handleSubmit,
} = useContactForm()

const { mapUrl } = useContactMap()
</script>



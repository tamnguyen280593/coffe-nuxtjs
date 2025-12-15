<template>
  <section class="bg-white">
    <!-- Hero / Intro -->
    <div class="bg-gradient-to-b from-cafe-cream to-white pt-16 pb-12 md:pt-24 md:pb-20">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-cafe-gold mb-3">
              Về chúng tôi
            </p>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-cafe-brown-dark mb-4 leading-tight">
              Câu Chuyện Đằng Sau
              <span class="text-cafe-gold">Mỗi Tách Cà Phê</span>
            </h1>
            <p class="text-gray-700 leading-relaxed mb-4">
              Từ niềm đam mê với cà phê thủ công cho đến khát khao tạo nên một không gian
              nơi mọi người có thể tạm gác nhịp sống vội vã, quán cà phê của chúng tôi
              ra đời như một góc nhỏ bình yên giữa lòng thành phố.
            </p>
            <p class="text-gray-700 leading-relaxed mb-6">
              Chúng tôi tin rằng một tách cà phê ngon không chỉ đến từ hạt cà phê chất lượng,
              mà còn từ câu chuyện, cảm xúc và những khoảnh khắc được sẻ chia xung quanh nó.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <NuxtLink
                to="/products"
                class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cafe-brown hover:bg-cafe-brown-dark text-white font-semibold transition-colors duration-300"
              >
                Khám phá menu
              </NuxtLink>
              <p class="text-sm text-gray-600 max-w-xs">
                Hãy để chúng tôi kể tiếp câu chuyện bằng hương thơm và hương vị trong từng tách cà phê.
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-cafe-gold/10 blur-2xl"></div>
            <div class="absolute -bottom-8 -right-6 w-32 h-32 rounded-full bg-cafe-brown/10 blur-3xl"></div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border border-cafe-cream/70">
              <img
                src="/images/about-story.jpg"
                alt="Không gian quán cà phê ấm cúng, nơi câu chuyện được bắt đầu"
                class="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Story -->
    <section class="py-12 md:py-20">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-cafe-brown-dark mb-4">
            Câu Chuyện Của Chúng Tôi
          </h2>
          <div class="w-16 h-1 bg-cafe-gold mb-6"></div>
          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Mọi thứ bắt đầu từ những buổi sáng sớm, khi hương cà phê đầu tiên lan tỏa trong căn bếp nhỏ.
              Chúng tôi nhận ra rằng, cà phê không chỉ là một thức uống giúp tỉnh táo, mà còn là chiếc cầu
              nối những cuộc trò chuyện, những mối quan hệ và những cảm xúc chân thành.
            </p>
            <p>
              Từ đó, ý tưởng về một quán cà phê ấm cúng, nơi mọi người có thể thoải mái là chính mình,
              dần được hình thành. Chúng tôi dành nhiều năm để tìm hiểu về hạt cà phê, cách rang xay,
              phương pháp pha chế và cả nghệ thuật bài trí không gian để mỗi góc nhỏ trong quán
              đều mang một câu chuyện riêng.
            </p>
            <p>
              Mỗi chiếc bàn gỗ, mỗi chiếc đèn vàng, mỗi bản nhạc được bật lên đều được lựa chọn
              với một lý do: để khi bạn bước vào, bạn cảm nhận được sự thân thuộc như trở về nhà,
              và khi rời đi, bạn mang theo một chút bình yên trong tâm hồn.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values / Highlights -->
    <section class="py-12 md:py-20 bg-cafe-cream/40">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/about/coffee-beans.jpg"
                alt="Hạt cà phê được chọn lựa kỹ lưỡng - Những hạt cà phê chất lượng cao"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-cafe-brown-dark mb-3">
                Hạt cà phê được chọn lựa kỹ lưỡng
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Chúng tôi làm việc trực tiếp với các nhà rang xay uy tín, ưu tiên hạt cà phê chất lượng cao,
                nguồn gốc rõ ràng, được thu hoạch và sơ chế cẩn thận để giữ trọn hương vị tự nhiên.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/banner/coffee-brewing-art.jpg"
                alt="Nghệ thuật pha chế thủ công - Barista đang pha chế cà phê với latte art"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-cafe-brown-dark mb-3">
                Nghệ thuật pha chế thủ công
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Đội ngũ barista luôn cập nhật xu hướng, thử nghiệm và tinh chỉnh công thức mỗi ngày
                để mỗi tách cà phê đều đạt đến sự cân bằng hoàn hảo giữa hương thơm, độ đậm và hậu vị.
              </p>
            </div>
          </div>
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="relative h-48 overflow-hidden">
              <img
                src="/images/banner/cafe-relaxing-ambiance.jpg"
                alt="Không gian của những kết nối - Không gian quán cafe ấm cúng"
                class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-cafe-brown-dark mb-3">
                Không gian của những kết nối
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Dù bạn đến một mình để làm việc, đọc sách hay cùng bạn bè trò chuyện,
                chúng tôi mong muốn nơi đây luôn là không gian mở để kết nối và sẻ chia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline / Milestones -->
    <section class="py-12 md:py-20">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl md:text-3xl font-bold text-cafe-brown-dark mb-4 text-center">
            Hành Trình Phát Triển
          </h2>
          <div class="w-16 h-1 bg-cafe-gold mx-auto mb-10"></div>
          <div class="space-y-8 relative">
            <div class="absolute left-4 top-0 bottom-0 w-px bg-cafe-cream hidden md:block"></div>

            <div class="relative md:pl-10">
              <div class="hidden md:block absolute left-[6px] top-1 w-3 h-3 rounded-full bg-cafe-gold"></div>
              <p class="text-xs uppercase tracking-[0.25em] text-cafe-gold mb-1">
                2015
              </p>
              <h3 class="text-lg font-semibold text-cafe-brown-dark mb-1">
                Ý tưởng đầu tiên được ươm mầm
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Từ những chuyến đi, những lần ghé thăm các quán cà phê đặc sản, chúng tôi bắt đầu mơ về
                một không gian mang đậm dấu ấn cá nhân nhưng vẫn gần gũi với mọi người.
              </p>
            </div>

            <div class="relative md:pl-10">
              <div class="hidden md:block absolute left-[6px] top-1 w-3 h-3 rounded-full bg-cafe-gold"></div>
              <p class="text-xs uppercase tracking-[0.25em] text-cafe-gold mb-1">
                2018
              </p>
              <h3 class="text-lg font-semibold text-cafe-brown-dark mb-1">
                Cửa hàng đầu tiên mở cửa
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Chúng tôi chào đón những vị khách đầu tiên, lắng nghe góp ý và dần hoàn thiện từ menu,
                phong cách phục vụ cho đến từng chi tiết nhỏ trong không gian.
              </p>
            </div>

            <div class="relative md:pl-10">
              <div class="hidden md:block absolute left-[6px] top-1 w-3 h-3 rounded-full bg-cafe-gold"></div>
              <p class="text-xs uppercase tracking-[0.25em] text-cafe-gold mb-1">
                2022
              </p>
              <h3 class="text-lg font-semibold text-cafe-brown-dark mb-1">
                Hơn 1000 khách hàng thân thiết
              </h3>
              <p class="text-gray-700 leading-relaxed">
                Sự tin tưởng và ủng hộ của khách hàng là động lực để chúng tôi không ngừng nâng cấp trải nghiệm,
                từ dịch vụ tại quán đến đặt hàng online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team / Closing -->
    <section class="py-12 md:py-20 bg-cafe-brown text-white">
      <div class="container">
        <div class="grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-4">
              Đằng Sau Quầy Bar Là Những Con Người
            </h2>
            <div class="w-16 h-1 bg-cafe-gold mb-6"></div>
            <p class="text-cafe-cream-light leading-relaxed mb-4">
              Chúng tôi không chỉ là những barista pha chế cà phê; chúng tôi là những người kể chuyện,
              dùng hương thơm và vị đắng ngọt của cà phê để gửi gắm cảm xúc đến bạn.
            </p>
            <p class="text-cafe-cream-light leading-relaxed mb-6">
              Mỗi thành viên trong đội ngũ đều mang trong mình tình yêu với cà phê, với dịch vụ
              và với những cuộc gặp gỡ mỗi ngày. Nụ cười và sự hài lòng của bạn chính là thành công lớn nhất của chúng tôi.
            </p>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cafe-gold text-cafe-brown-dark font-semibold hover:bg-yellow-400 transition-colors duration-300"
            >
              Kết nối với chúng tôi
            </NuxtLink>
          </div>
          <div class="space-y-4 text-sm text-cafe-cream-light">
            <div class="border border-white/10 rounded-xl p-4 bg-white/5 backdrop-blur">
              <p>
                “Chúng tôi luôn nói với nhau rằng: nếu một ngày bạn bước vào quán với tâm trạng nặng nề
                nhưng khi bước ra bạn thấy nhẹ nhàng hơn, thì hôm đó chúng tôi đã làm đúng.”
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4 text-center text-xs">
              <div class="border border-white/10 rounded-lg py-3 px-2 bg-white/5">
                <div class="text-2xl font-bold text-cafe-gold mb-1">10+</div>
                <div>Barista giàu kinh nghiệm</div>
              </div>
              <div class="border border-white/10 rounded-lg py-3 px-2 bg-white/5">
                <div class="text-2xl font-bold text-cafe-gold mb-1">5★</div>
                <div>Đánh giá từ khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>


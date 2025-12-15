import { useApi } from './useApi'
import { API_ENDPOINTS } from '~/constants/api'

export interface Testimonial {
  comment: string
  name: string
  role: string
  avatar: string
}

const fallbackTestimonials: Testimonial[] = [
  {
    comment: 'Không gian quán rất đẹp và ấm cúng, cà phê thì tuyệt vời! Nhân viên phục vụ rất nhiệt tình và chuyên nghiệp. Đây là nơi lý tưởng để làm việc và thư giãn.',
    name: 'Nguyễn Văn A',
    role: 'Khách hàng thân thiết',
    avatar: 'NA'
  },
  {
    comment: 'Tôi đã thử nhiều quán cà phê nhưng đây là nơi tôi yêu thích nhất. Hương vị cà phê đậm đà, không gian thoải mái và giá cả hợp lý. Chắc chắn sẽ quay lại!',
    name: 'Trần Thị B',
    role: 'Freelancer',
    avatar: 'TB'
  },
  {
    comment: 'Quán có không gian rất đẹp, phù hợp cho các buổi họp mặt bạn bè. Đồ uống đa dạng và ngon, đặc biệt là các món signature của quán. Rất đáng để trải nghiệm!',
    name: 'Lê Văn C',
    role: 'Doanh nhân',
    avatar: 'LC'
  }
]

export const useTestimonials = () => {
  const itemsTestimonials = ref<Testimonial[]>(fallbackTestimonials)

  const fetchTestimonials = async () => {
    try {
      const { data, execute } = useApi<Testimonial[]>(API_ENDPOINTS.TESTIMONIALS, {
        method: 'GET',
        immediate: false,
      })
      
      await execute()
      
      if (data.value && Array.isArray(data.value) && data.value.length) {
        itemsTestimonials.value = data.value
        return
      }
      itemsTestimonials.value = fallbackTestimonials
    } catch (err) {
      itemsTestimonials.value = fallbackTestimonials
    }
  }

  return {
    items: itemsTestimonials,
    fetchTestimonials,
  }
}


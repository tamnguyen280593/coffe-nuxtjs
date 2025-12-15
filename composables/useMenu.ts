import { useApi } from './useApi'
import { API_ENDPOINTS } from '~/constants/api'

export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  rating: string
}

const fallbackMenu: MenuItem[] = [
  {
    id: 1,
    name: 'Espresso Premium',
    description: 'Espresso đậm đà được pha từ hạt cà phê Arabica cao cấp, mang đến hương vị đậm đà và tinh tế.',
    price: '45.000đ',
    image: '/images/products/espresso.jpg',
    rating: '4.9'
  },
  {
    id: 2,
    name: 'Cappuccino Art',
    description: 'Cappuccino với lớp bọt sữa mịn màng và nghệ thuật latte art độc đáo, kèm theo hương vị cà phê thơm ngon.',
    price: '55.000đ',
    image: '/images/products/cappuccino.jpg',
    rating: '4.8'
  },
  {
    id: 3,
    name: 'Latte Premium',
    description: 'Latte với sữa tươi nguyên chất và hương vị cà phê đậm đà, tạo nên thức uống hoàn hảo cho mọi thời điểm.',
    price: '60.000đ',
    image: '/images/products/latte.jpg',
    rating: '4.9'
  }
]

export const useMenu = () => {
  const itemsMenu = ref<MenuItem[]>(fallbackMenu)

  const fetchMenu = async () => {
    try {
      const { data, execute } = useApi<MenuItem[]>(API_ENDPOINTS.MENU, {
        method: 'GET',
        immediate: false,
      })
      
      await execute()
      
      if (data.value && Array.isArray(data.value) && data.value.length) {
        itemsMenu.value = data.value
        return
      }
      itemsMenu.value = fallbackMenu
    } catch (err) {
      itemsMenu.value = fallbackMenu
      return
    }
  }

  return {
    items: itemsMenu,
    fetchMenu,
  }
}


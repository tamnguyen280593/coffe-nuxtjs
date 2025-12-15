import type { Product, ProductCategory, ProductCategoryInfo } from '~/types/product'

/**
 * Danh sách categories với thông tin hiển thị
 */
export const PRODUCT_CATEGORIES: ProductCategoryInfo[] = [
  { id: 'cafe', label: 'Cà Phê' },
  { id: 'banh', label: 'Bánh' },
  { id: 'tra-sua', label: 'Trà Sữa' },
  { id: 'nuoc-ep', label: 'Nước Ép' },
  { id: 'smoothie', label: 'Smoothie' },
]

/**
 * Fallback products data với đầy đủ categories
 */
const fallbackProducts: Product[] = [
  // Cà Phê (6 items)
  {
    id: 1,
    name: 'Espresso Premium',
    description: 'Espresso đậm đà được pha từ hạt cà phê Arabica cao cấp, mang đến hương vị đậm đà và tinh tế.',
    price: '45.000đ',
    image: '/images/products/cafe/espresso.jpg',
    rating: '4.9',
    category: 'cafe',
  },
  {
    id: 2,
    name: 'Cappuccino Art',
    description: 'Cappuccino với lớp bọt sữa mịn màng và nghệ thuật latte art độc đáo, kèm theo hương vị cà phê thơm ngon.',
    price: '55.000đ',
    image: '/images/products/cafe/cappuccino.jpg',
    rating: '4.8',
    category: 'cafe',
  },
  {
    id: 3,
    name: 'Latte Premium',
    description: 'Latte với sữa tươi nguyên chất và hương vị cà phê đậm đà, tạo nên thức uống hoàn hảo cho mọi thời điểm.',
    price: '60.000đ',
    image: '/images/products/cafe/latte.jpg',
    rating: '4.9',
    category: 'cafe',
  },
  {
    id: 4,
    name: 'Americano',
    description: 'Americano với hương vị cà phê đậm đà, pha loãng với nước nóng để tạo nên thức uống thanh mát và tinh tế.',
    price: '50.000đ',
    image: '/images/products/cafe/americano.jpg',
    rating: '4.7',
    category: 'cafe',
  },
  {
    id: 5,
    name: 'Mocha Delight',
    description: 'Mocha kết hợp giữa espresso, sữa nóng và chocolate, tạo nên hương vị ngọt ngào và đậm đà khó quên.',
    price: '65.000đ',
    image: '/images/products/cafe/mocha.jpg',
    rating: '4.8',
    category: 'cafe',
  },
  {
    id: 6,
    name: 'Cold Brew',
    description: 'Cold brew được ủ lạnh trong nhiều giờ, mang đến hương vị mượt mà, ít đắng và tươi mát.',
    price: '55.000đ',
    image: '/images/products/cafe/cold-brew.jpg',
    rating: '4.9',
    category: 'cafe',
  },
  // Bánh (6 items)
  {
    id: 7,
    name: 'Tiramisu',
    description: 'Tiramisu truyền thống với lớp mascarpone mềm mịn, bánh quy cà phê và bột cacao thơm ngon.',
    price: '85.000đ',
    image: '/images/products/banh/tiramisu.jpg',
    rating: '4.9',
    category: 'banh',
  },
  {
    id: 8,
    name: 'Cheesecake New York',
    description: 'Cheesecake New York style với lớp kem phô mai béo ngậy, vị ngọt vừa phải và kết cấu mịn màng.',
    price: '90.000đ',
    image: '/images/products/banh/cheesecake.jpg',
    rating: '4.8',
    category: 'banh',
  },
  {
    id: 9,
    name: 'Croissant Bơ',
    description: 'Croissant bơ Pháp với lớp vỏ giòn tan, bên trong mềm mịn và hương bơ thơm ngon đặc trưng.',
    price: '45.000đ',
    image: '/images/products/banh/croissant.jpg',
    rating: '4.7',
    category: 'banh',
  },
  {
    id: 10,
    name: 'Bánh Mousse Dâu',
    description: 'Bánh mousse dâu tươi với vị chua ngọt thanh mát, lớp kem mousse mềm mịn và dâu tươi tươi ngon.',
    price: '75.000đ',
    image: '/images/products/banh/mousse-dau.jpg',
    rating: '4.8',
    category: 'banh',
  },
  {
    id: 11,
    name: 'Brownie Chocolate',
    description: 'Brownie chocolate đậm đà với vị ngọt vừa phải, kết cấu ẩm mềm và lớp chocolate tan chảy.',
    price: '55.000đ',
    image: '/images/products/banh/brownie.jpg',
    rating: '4.7',
    category: 'banh',
  },
  {
    id: 12,
    name: 'Macaron Mix',
    description: 'Set 6 chiếc macaron với nhiều hương vị khác nhau: vanilla, chocolate, dâu, matcha, caramel và pistachio.',
    price: '120.000đ',
    image: '/images/products/banh/macaron.jpg',
    rating: '4.9',
    category: 'banh',
  },
  // Trà Sữa (6 items)
  {
    id: 13,
    name: 'Trà Sữa Truyền Thống',
    description: 'Trà sữa truyền thống với hương vị đậm đà, thạch dai giòn và độ ngọt vừa phải, phù hợp mọi khẩu vị.',
    price: '45.000đ',
    image: '/images/products/tra-sua/tra-sua-truyen-thong.jpg',
    rating: '4.8',
    category: 'tra-sua',
  },
  {
    id: 14,
    name: 'Trà Sữa Matcha',
    description: 'Trà sữa matcha với hương vị đặc trưng của bột matcha Nhật Bản, thơm ngon và bổ dưỡng.',
    price: '55.000đ',
    image: '/images/products/tra-sua/tra-sua-matcha.jpg',
    rating: '4.9',
    category: 'tra-sua',
  },
  {
    id: 15,
    name: 'Trà Sữa Đào',
    description: 'Trà sữa đào với vị đào tươi mát, thạch đào giòn dai và độ ngọt thanh, giải nhiệt hoàn hảo.',
    price: '50.000đ',
    image: '/images/products/tra-sua/tra-sua-dao.jpg',
    rating: '4.7',
    category: 'tra-sua',
  },
  {
    id: 16,
    name: 'Trà Sữa Dâu Tây',
    description: 'Trà sữa dâu tây với vị chua ngọt tự nhiên, thạch dâu tươi và lớp kem cheese béo ngậy.',
    price: '55.000đ',
    image: '/images/products/tra-sua/tra-sua-dau-tay.jpg',
    rating: '4.8',
    category: 'tra-sua',
  },
  {
    id: 17,
    name: 'Trà Sữa Oolong',
    description: 'Trà sữa oolong với hương vị trà thanh mát, sữa tươi và thạch trân châu đen dai giòn.',
    price: '50.000đ',
    image: '/images/products/tra-sua/tra-sua-oolong.jpg',
    rating: '4.7',
    category: 'tra-sua',
  },
  {
    id: 18,
    name: 'Trà Sữa Caramel',
    description: 'Trà sữa caramel với vị ngọt đậm đà của caramel, lớp kem béo ngậy và thạch trân châu.',
    price: '60.000đ',
    image: '/images/products/tra-sua/tra-sua-caramel.jpg',
    rating: '4.8',
    category: 'tra-sua',
  },
  // Nước Ép (6 items)
  {
    id: 19,
    name: 'Nước Ép Cam Tươi',
    description: 'Nước ép cam tươi 100% nguyên chất, giàu vitamin C, vị chua ngọt tự nhiên và tươi mát.',
    price: '45.000đ',
    image: '/images/products/nuoc-ep/cam-tuoi.jpg',
    rating: '4.9',
    category: 'nuoc-ep',
  },
  {
    id: 20,
    name: 'Nước Ép Dứa',
    description: 'Nước ép dứa tươi với vị ngọt thanh, thơm mát và giàu enzyme tốt cho tiêu hóa.',
    price: '50.000đ',
    image: '/images/products/nuoc-ep/dua.jpg',
    rating: '4.8',
    category: 'nuoc-ep',
  },
  {
    id: 21,
    name: 'Nước Ép Dưa Hấu',
    description: 'Nước ép dưa hấu tươi mát, giải nhiệt hoàn hảo cho ngày hè, vị ngọt thanh tự nhiên.',
    price: '40.000đ',
    image: '/images/products/nuoc-ep/dua-hau.jpg',
    rating: '4.7',
    category: 'nuoc-ep',
  },
  {
    id: 22,
    name: 'Nước Ép Cà Rốt',
    description: 'Nước ép cà rốt tươi với vị ngọt tự nhiên, giàu beta-carotene và vitamin A tốt cho mắt.',
    price: '45.000đ',
    image: '/images/products/nuoc-ep/ca-rot.jpg',
    rating: '4.6',
    category: 'nuoc-ep',
  },
  {
    id: 23,
    name: 'Nước Ép Táo Xanh',
    description: 'Nước ép táo xanh tươi mát, vị chua ngọt thanh, giàu chất xơ và vitamin.',
    price: '50.000đ',
    image: '/images/products/nuoc-ep/tao-xanh.jpg',
    rating: '4.8',
    category: 'nuoc-ep',
  },
  {
    id: 24,
    name: 'Nước Ép Hỗn Hợp',
    description: 'Nước ép hỗn hợp từ nhiều loại trái cây tươi: cam, táo, dứa, cà rốt - giàu dinh dưỡng.',
    price: '55.000đ',
    image: '/images/products/nuoc-ep/hon-hop.jpg',
    rating: '4.9',
    category: 'nuoc-ep',
  },
  // Smoothie (6 items)
  {
    id: 25,
    name: 'Smoothie Dâu Tây',
    description: 'Smoothie dâu tây với sữa chua, dâu tươi và mật ong, vị chua ngọt thanh mát và bổ dưỡng.',
    price: '60.000đ',
    image: '/images/products/smoothie/dau-tay.jpg',
    rating: '4.8',
    category: 'smoothie',
  },
  {
    id: 26,
    name: 'Smoothie Xoài',
    description: 'Smoothie xoài với sữa tươi, xoài chín vàng và đá xay, vị ngọt thơm đặc trưng của xoài.',
    price: '55.000đ',
    image: '/images/products/smoothie/xoai.jpg',
    rating: '4.9',
    category: 'smoothie',
  },
  {
    id: 27,
    name: 'Smoothie Chuối',
    description: 'Smoothie chuối với sữa chua, chuối chín và mật ong, giàu kali và protein, tốt cho sức khỏe.',
    price: '50.000đ',
    image: '/images/products/smoothie/chuoi.jpg',
    rating: '4.7',
    category: 'smoothie',
  },
  {
    id: 28,
    name: 'Smoothie Matcha',
    description: 'Smoothie matcha với sữa tươi, bột matcha và mật ong, hương vị đặc trưng và chống oxy hóa.',
    price: '65.000đ',
    image: '/images/products/smoothie/matcha.jpg',
    rating: '4.8',
    category: 'smoothie',
  },
  {
    id: 29,
    name: 'Smoothie Việt Quất',
    description: 'Smoothie việt quất với sữa chua, việt quất tươi và mật ong, giàu chất chống oxy hóa.',
    price: '65.000đ',
    image: '/images/products/smoothie/viet-quat.jpg',
    rating: '4.9',
    category: 'smoothie',
  },
  {
    id: 30,
    name: 'Smoothie Tropical',
    description: 'Smoothie nhiệt đới với xoài, dứa, chuối và dừa, vị ngọt thơm và tươi mát như gió biển.',
    price: '70.000đ',
    image: '/images/products/smoothie/tropical.jpg',
    rating: '4.8',
    category: 'smoothie',
  },
]

/**
 * Composable để quản lý products với tabs filter
 */
export function useProducts() {
  const products = ref<Product[]>(fallbackProducts)
  const selectedCategory = ref<ProductCategory>('cafe')

  /**
   * Lấy danh sách products theo category
   */
  const getProductsByCategory = (category: ProductCategory): Product[] => {
    return products.value.filter((p) => p.category === category)
  }

  /**
   * Products của category hiện tại
   */
  const filteredProducts = computed(() => {
    return getProductsByCategory(selectedCategory.value)
  })

  /**
   * Chuyển đổi category
   */
  const setCategory = (category: ProductCategory) => {
    selectedCategory.value = category
  }

  /**
   * Lấy thông tin category hiện tại
   */
  const currentCategoryInfo = computed(() => {
    return PRODUCT_CATEGORIES.find((c) => c.id === selectedCategory.value)
  })

  return {
    products,
    selectedCategory,
    filteredProducts,
    categories: PRODUCT_CATEGORIES,
    currentCategoryInfo,
    setCategory,
    getProductsByCategory,
  }
}


export interface NavItem {
  path: string
  label: string
}

export const navItems: NavItem[] = [
  { path: '/', label: 'Trang chủ' },
  { path: '/about', label: 'Giới thiệu' },
  { path: '/products', label: 'Sản phẩm' },
  { path: '/contact', label: 'Liên hệ' }
]


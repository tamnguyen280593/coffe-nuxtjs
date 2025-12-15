/**
 * Product Types
 * Định nghĩa types cho sản phẩm và categories
 */

export type ProductCategory = 'cafe' | 'banh' | 'tra-sua' | 'nuoc-ep' | 'smoothie'

export interface Product {
  id: number
  name: string
  description: string
  price: string
  image: string
  rating: string
  category: ProductCategory
}

export interface ProductCategoryInfo {
  id: ProductCategory
  label: string
  icon?: string
}


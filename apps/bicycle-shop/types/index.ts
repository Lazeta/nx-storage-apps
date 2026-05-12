export interface Product {
  id: string
  name: string
  slug: string
  price: number
  currency: string
  description: string
  images: string[]
  category: string
  inStock: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

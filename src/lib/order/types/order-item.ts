import { ProductEntity } from "@/lib/catalog/types/product"

export type OrderItemEntity = {
  description: string,
  price: number,
  quantity: number,
  product?: ProductEntity | null,
}
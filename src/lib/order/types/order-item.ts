import ProductEntity from "@/lib/catalog/types/product";

export default interface OrderItemEntity {
  description: string,
  price: number,
  quantity: number,
  product?: ProductEntity | null,
}
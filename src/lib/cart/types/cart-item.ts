import { ProductEntity } from "@/lib/catalog/types/product";

export type CartItemEntity = {
  id: number,
  quantity: number,
  product: ProductEntity,
};
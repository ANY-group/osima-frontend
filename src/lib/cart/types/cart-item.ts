import ProductEntity from "@/lib/catalog/types/product";

export default interface CartItemEntity {
  id: number,
  quantity: number,
  product: ProductEntity,
};
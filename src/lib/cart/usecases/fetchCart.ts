import api from "@/lib/utils/api";
import { CartItemEntity } from "../types/cart-item";
import { LocalCartItemEntity } from "../types/local-cart-item";
import { Collection } from "@/lib/types/collection";
import { ProductEntity } from "@/lib/catalog/types/product";

export default async function fetchCart(items: Array<LocalCartItemEntity>): Promise<Array<CartItemEntity>> {

  if (!items.length) {
    return [];
  }

  const res = await api.request('catalog/products?' + new URLSearchParams(
    items.map((item) => ['ids', item.id.toString()]),
  ).toString());

  if (!res.ok) {
    return [];
  }

  const { products }: { products: Collection<ProductEntity> } = await res.json();

  return products.data.map((product) => ({
    id: product.id,
    product: product,
    quantity: Math.min(product.quantity, items.find((item) => item.id == product.id)?.quantity || 1),
  }));
}
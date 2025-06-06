import fetchProductsById from "@/lib/catalog/usecases/fetch-products-by-id";
import LocalCartItemEntity from "../types/local-cart-item";
import CartItemEntity from "../types/cart-item";

export default async function fetchCart(items: Array<LocalCartItemEntity>): Promise<Array<CartItemEntity>> {

  const products = await fetchProductsById(items.map((item) => item.id));

  return products.data.map((product) => ({
    id: product.id,
    product: product,
    quantity: Math.min(product.quantity, items.find((item) => item.id == product.id)?.quantity || 1),
  }));
}
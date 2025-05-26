import { CartItemEntity } from "../types/cart-item";
import { LocalCartItemEntity } from "../types/local-cart-item";

export default async function fetchCart(items: Array<LocalCartItemEntity>): Promise<Array<CartItemEntity>> {
  console.log(items);
  return [];
}
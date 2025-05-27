import { CartItemEntity } from "./cart-item";

export type CartEntity = {
  items: Array<CartItemEntity>,
  phone?: string,
  name?: string,
  email?: string,
};
import { CartItemEntity } from "./cart-item";

export type CartEntity = {
  items: Array<CartItemEntity>,
  phone?: string,
  name?: string,
  email?: string,
  deliveryMethod?: string,
  paymentMethod?: string,
  cityId?: number,
  addressLine1?: string,
  addressLine2?: string,
  postalCode?: string,
};
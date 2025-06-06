import CartItemEntity from "./cart-item";

export default interface CartEntity {
  items: Array<CartItemEntity>,
  phone?: string,
  name?: string,
  email?: string,
  deliveryMethod?: string,
  paymentMethod?: string,
  city?: string,
  addressLine1?: string,
  addressLine2?: string,
  postalCode?: string,
  useCertificate?: boolean,
  comment?: string,
};
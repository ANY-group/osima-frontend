'use client';

import { CartEntity } from "@/lib/cart/types/cart";
import { DeliveryMethodEntity } from "@/lib/cart/types/delivery-method";
import { PaymentMethodEntity } from "@/lib/cart/types/payment-method";
import { ProductEntity } from "@/lib/catalog/types/product";
import { createContext } from "react";

type CartState = {
  cart: CartEntity,
  deliveryMethods: Array<DeliveryMethodEntity>,
  paymentMethods: Array<PaymentMethodEntity>,
  setCartInfo: (key: string, value: string | boolean | number | null | undefined) => void,
  setItemQuantity: (product: ProductEntity, quantity: number) => void,
  getItemQuantity: (product: ProductEntity) => number,
  getTotal: () => number,
  getItemsTotal: () => number,
  getDeliveryCost: () => number,
};

export const CartContext = createContext<CartState>({
  cart: {
    items: [],
  },
  deliveryMethods: [],
  paymentMethods: [],
  setCartInfo: () => { },
  setItemQuantity: () => { },
  getItemQuantity: () => 0,
  getTotal: () => 0,
  getItemsTotal: () => 0,
  getDeliveryCost: () => 0,
});
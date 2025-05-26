'use client';

import { CartEntity } from "@/lib/cart/types/cart";
import { ProductEntity } from "@/lib/catalog/types/product";
import { createContext } from "react";

type CartState = {
  cart: CartEntity,
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
  setItemQuantity: () => { },
  getItemQuantity: () => 0,
  getTotal: () => 0,
  getItemsTotal: () => 0,
  getDeliveryCost: () => 0,
});
'use client';

import { CartEntity } from "@/lib/cart/types/cart";
import { ProductEntity } from "@/lib/catalog/types/product";
import { createContext } from "react";

type CartState = {
  cart: CartEntity,
  setItemQuantity: (product: ProductEntity, quantity: number) => void,
  getItemQuantity: (product: ProductEntity) => number,
};

export const CartContext = createContext<CartState>({
  cart: {
    items: [],
  },
  setItemQuantity: () => { },
  getItemQuantity: () => 0,
});
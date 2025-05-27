'use client';

import { useEffect, useState } from "react";
import { CartContext } from "./cart-context";
import { CartEntity } from "@/lib/cart/types/cart";
import { ProductEntity } from "@/lib/catalog/types/product";
import fetchCart from "@/lib/cart/usecases/fetchCart";
import { LocalCartItemEntity } from "@/lib/cart/types/local-cart-item";

export default function CartProvider({ children }: {
  children: React.ReactNode,
}) {

  const [cart, setCart] = useState<CartEntity>({
    items: [],
  });

  // Read cart from localStorage
  useEffect(() => {
    try {
      const rawCart = JSON.parse(localStorage.getItem('cart') || '{}');
      const localCartItems: Array<LocalCartItemEntity> = rawCart.items;
      fetchCart(localCartItems).then((items) => {
        setCart({
          ...rawCart,
          items: items,
        });
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Store cart in localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify({
      ...cart,
      items: cart.items.map((item): LocalCartItemEntity => ({
        id: item.id,
        quantity: item.quantity,
      })),
    }));
  }, [cart]);

  const findItemIndex = (product: ProductEntity): number => {
    return cart.items.findIndex((item) => item.id == product.id);
  };

  const setItemQuantity = (product: ProductEntity, quantity: number): void => {
    const index = findItemIndex(product);
    const newCart = { ...cart };

    if (index == -1) {
      newCart.items.push({
        id: product.id,
        product: product,
        quantity: Math.min(product.quantity, quantity),
      });
    } else {
      newCart.items[index].quantity = quantity;
    }

    newCart.items = newCart.items.filter((item) => item.quantity > 0);

    setCart(newCart);
  };

  const getItemQuantity = (product: ProductEntity): number => {
    const index = findItemIndex(product);

    return index == -1 ? 0 : cart.items[index].quantity;
  };

  const setCartInfo = (key: string, value: string) => {
    console.log(key, value);
    const newCart = { ...cart, [key]: value };
    setCart(newCart);
  };
  const getItemsTotal = () => cart.items.reduce((acc, item) => item.product.price * item.quantity, 0);
  const getDeliveryCost = () => 0;
  const getTotal = () => getDeliveryCost() + getItemsTotal();

  const value = { cart, setCartInfo, setItemQuantity, getItemQuantity, getTotal, getItemsTotal, getDeliveryCost };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
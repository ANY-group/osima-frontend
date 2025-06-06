'use client';

import { useEffect, useState } from "react";
import { CartContext } from "./cart-context";
import fetchCart from "@/lib/cart/usecases/fetch-cart";
import fetchDeliveryMethods from "@/lib/cart/usecases/fetch-delivery-methods";
import fetchPaymentMethods from "@/lib/cart/usecases/fetch-payment-methods";
import ValidationError from "@/lib/exceptions/validation-error";
import DeliveryMethodEntity from "@/lib/cart/types/delivery-method";
import PaymentMethodEntity from "@/lib/cart/types/payment-method";
import CartEntity from "@/lib/cart/types/cart";
import LocalCartItemEntity from "@/lib/cart/types/local-cart-item";
import ProductEntity from "@/lib/catalog/types/product";

export default function CartProvider({ children }: {
  children: React.ReactNode,
}) {
  const [deliveryMethods, setDeliveryMethods] = useState<Array<DeliveryMethodEntity>>([]);
  const [paymentMethods, setPaymentMethods] = useState<Array<PaymentMethodEntity>>([]);
  const [error, setError] = useState<ValidationError | null>(null);
  const [cart, setCart] = useState<CartEntity>({
    items: [],
  });

  // Read cart from localStorage
  useEffect(() => {
    const rawCart = JSON.parse(localStorage.getItem('cart') || '{}');
    const localCartItems: Array<LocalCartItemEntity> = rawCart.items || [];

    fetchCart(localCartItems).then((items) => {
      setCart({
        ...rawCart,
        items: items,
      });
    });

    updateDeliveryMethods();
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

  useEffect(() => {
    if (getCurrentDeliveryMethod()) {
      updatePaymentMethods();
    }
  }, [cart.deliveryMethod, deliveryMethods]);

  useEffect(() => {
    if (!getCurrentDeliveryMethod() && deliveryMethods.length > 0) {
      setCartInfo('deliveryMethod', deliveryMethods[0].slug);
    }
  }, [deliveryMethods]);

  useEffect(() => {
    if (!getCurrentPaymentMethod() && paymentMethods.length > 0) {
      setCartInfo('paymentMethod', paymentMethods[0].slug);
    }
  }, [paymentMethods]);

  const getCurrentDeliveryMethod = () => deliveryMethods
    .find((deliveryMethod) => deliveryMethod.slug == cart.deliveryMethod);

  const getCurrentPaymentMethod = () => paymentMethods
    .find((paymentMethod) => paymentMethod.slug == cart.paymentMethod);

  const updateDeliveryMethods = () => {
    fetchDeliveryMethods().then((deliveryMethods) => {
      setDeliveryMethods(deliveryMethods);
    });
  };

  const updatePaymentMethods = () => {
    fetchPaymentMethods(getCurrentDeliveryMethod()?.type).then((paymentMethods) => {
      setPaymentMethods(paymentMethods);
    });
  };

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

  const setCartInfo = (key: string, value: string | boolean | number | null | undefined) => {
    const newCart = { ...cart, [key]: value };
    setCart(newCart);
  };

  const getItemsTotal = () => cart.items.reduce((acc, item) => item.product.price * item.quantity, 0);
  const getDeliveryCost = () => 0;
  const getTotal = () => getDeliveryCost() + getItemsTotal();

  const value = {
    cart,
    deliveryMethods,
    getCurrentDeliveryMethod,
    paymentMethods,
    getCurrentPaymentMethod,
    // Error
    error,
    setError,
    // Cart info
    setCartInfo,
    // Cart item
    setItemQuantity,
    getItemQuantity,
    // Helper getters
    getTotal,
    getItemsTotal,
    getDeliveryCost,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
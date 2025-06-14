'use client';

import Badge from "@/app/components/ui/badge";
import { useContext } from "react";
import { CartContext } from "./controllers/cart-context";

export default function CartItemsQuantityBadge() {
  const { cart } = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return <Badge quantity={quantity} />;
}
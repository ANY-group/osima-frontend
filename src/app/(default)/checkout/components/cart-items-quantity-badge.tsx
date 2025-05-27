'use client';

import Badge from "@/app/components/ui/badge";
import { useContext } from "react";
import { CartContext } from "./cart-context";

export default function CartItemsQuantityBadge() {
  const { cart } = useContext(CartContext);
  const quantity = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  return quantity > 0 ? (
    <Badge>
      {quantity}
    </Badge>
  ) : null;
}
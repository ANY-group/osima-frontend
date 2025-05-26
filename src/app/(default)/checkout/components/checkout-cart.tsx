'use client';

import CartInfoTable from "./cart-info-table";
import CartEmpty from "./cart-empty";
import CartItem from "./cart-item";
import { useContext } from "react";
import { CartContext } from "./cart-context";

export default function CheckoutCart() {
  return (
    <div className="md:p-3 lg:px-6 lg:py-4 md:rounded-xl md:bg-secondary-muted">
      <div className="mb-6 rounded-lg bg-white">
        <Cart />
      </div>
      <CartInfoTable />
    </div>
  );
}

const Cart = () => {
  const { cart } = useContext(CartContext);

  if (cart.items.length == 0) {
    return <CartEmpty />
  }

  return (
    <div className="overflow-y-auto">
      {cart.items.map((item, index) => (
        <CartItem
          key={index}
          item={item}
        />
      ))}
    </div>
  );
}
'use client';

import { useContext } from "react";
import { CartContext } from "./controllers/cart-context";
import { formatNumber } from "@/lib/utils/helpers";

export default function CartInfoTable() {
  const { cart, getTotal, getItemsTotal, getDeliveryCost } = useContext(CartContext);

  return (
    <div className={`${cart.items.length == 0 && 'text-secondary'}`}>
      <CartInfoTableRow>
        <span>Всего товаров на сумму:</span>
        <span>{formatNumber(getItemsTotal())} ₸</span>
      </CartInfoTableRow>
      <CartInfoTableRow>
        <span>Доставка:</span>
        <span>{formatNumber(getDeliveryCost())} ₸</span>
      </CartInfoTableRow>
      <CartInfoTableRow>
        <span className="text-xl font-bold">
          Итого:
        </span>
        <span className="text-xl font-bold">
          {formatNumber(getTotal())} ₸
        </span>
      </CartInfoTableRow>
    </div>
  );
}

const CartInfoTableRow = ({ children }: {
  children
  : React.ReactNode,
}) => {
  return (
    <div className="flex items-center justify-between gap-2 text-sm">
      {children}
    </div>
  );
}
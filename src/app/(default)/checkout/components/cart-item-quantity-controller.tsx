'use client';

import MinusIcon from "@/app/components/ui/icons/minus-icon";
import PlusIcon from "@/app/components/ui/icons/plus-icon";
import { ProductEntity } from "@/lib/catalog/types/product";
import { useContext } from "react";
import { CartContext } from "./cart-context";

export default function CartItemQuantityController({ product }: {
  product: ProductEntity,
}) {
  const { getItemQuantity, setItemQuantity } = useContext(CartContext);

  const cnt = getItemQuantity(product);

  return (
    <div className="flex items-center gap-2.5 h-full">
      <button
        className="flex items-center justify-center aspect-square h-full rounded-lg bg-secondary-muted hover:bg-success hover:text-background transition-colors"
        aria-label="Уменьшить количество товара в корзине"
        onClick={() => setItemQuantity(product, cnt - 1)}
      >
        <MinusIcon />
      </button>
      <span className="font-semibold">
        {cnt}
      </span>
      <button
        className="flex items-center justify-center aspect-square h-full rounded-lg bg-secondary-muted hover:bg-success hover:text-background transition-colors"
        aria-label="Увеличить количество товара в корзине"
        onClick={() => setItemQuantity(product, cnt + 1)}
        disabled={cnt >= product.quantity}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
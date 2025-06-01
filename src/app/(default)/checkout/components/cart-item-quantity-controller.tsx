'use client';

import MinusIcon from "@/app/components/ui/icons/minus-icon";
import PlusIcon from "@/app/components/ui/icons/plus-icon";
import { ProductEntity } from "@/lib/catalog/types/product";
import { useContext } from "react";
import { CartContext } from "./controllers/cart-context";

export default function CartItemQuantityController({ product }: {
  product: ProductEntity,
}) {
  const { getItemQuantity, setItemQuantity } = useContext(CartContext);

  const cnt = getItemQuantity(product);

  return (
    <div className="flex items-center gap-2.5 h-full">
      <ControllerButton
        label="Уменьшить количество товара в корзине"
        onClick={() => setItemQuantity(product, cnt - 1)}
      >
        <MinusIcon />
      </ControllerButton>
      <span className="font-semibold">
        {cnt}
      </span>
      <ControllerButton
        label="Увеличить количество товара в корзине"
        onClick={() => setItemQuantity(product, cnt + 1)}
        disabled={cnt >= product.quantity}
      >
        <PlusIcon />
      </ControllerButton>
    </div>
  );
}

const ControllerButton = ({ onClick, label, disabled = false, children }: {
  onClick: () => void,
  label: string,
  disabled?: boolean,
  children: React.ReactNode,
}) => {
  return (
    <button
      className="flex items-center justify-center aspect-square h-full rounded-lg bg-secondary-muted hover:not-disabled:bg-success hover:not-disabled:text-background transition-colors disabled:bg-disabled/20"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
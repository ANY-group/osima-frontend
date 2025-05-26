'use client';

import { CartContext } from "@/app/(default)/checkout/components/cart-context";
import CartItemQuantityController from "@/app/(default)/checkout/components/cart-item-quantity-controller";
import ShoppingBagIcon from "@/app/components/ui/icons/shopping-bag-icon";
import { ProductEntity } from "@/lib/catalog/types/product";
import { useContext, useEffect } from "react";

export default function ProductAddToCartButton({ product }: {
  product: ProductEntity,
}) {
  const { getItemQuantity, setItemQuantity } = useContext(CartContext);

  const cnt = getItemQuantity(product);

  useEffect(() => {
    console.log("Item quantity: " + cnt);
  }, [cnt]);

  if (cnt == 0) {
    return (
      <button
        className="flex-grow flex items-center justify-center gap-2 h-full sm:max-w-3xs rounded-lg bg-success text-sm  text-white"
        onClick={() => setItemQuantity(product, 1)}
        disabled={product.quantity < 1}
      >
        <ShoppingBagIcon />
        {product.quantity > 0 ? 'Добавить в корзину' : 'Нет в наличии'}
      </button>
    );
  }

  return (
    <CartItemQuantityController product={product} />
  );
}

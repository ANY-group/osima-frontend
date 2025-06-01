'use client';

import { CartContext } from "@/app/(default)/checkout/components/controllers/cart-context";
import CartItemQuantityController from "@/app/(default)/checkout/components/cart-item-quantity-controller";
import ShoppingBagIcon from "@/app/components/ui/icons/shopping-bag-icon";
import { ProductEntity } from "@/lib/catalog/types/product";
import { useContext } from "react";

export default function ProductAddToCartButton({ product }: {
  product: ProductEntity,
}) {
  const { getItemQuantity, setItemQuantity } = useContext(CartContext);

  const cnt = getItemQuantity(product);

  if (cnt == 0) {
    return (
      <button
        className="flex-grow flex items-center justify-center gap-2 h-full sm:max-w-3xs rounded-lg bg-success disabled:bg-disabled text-sm  text-white"
        onClick={() => setItemQuantity(product, 1)}
        disabled={!product.inStock}
      >
        <ShoppingBagIcon />
        {product.inStock ? 'Добавить в корзину' : 'Нет в наличии'}
      </button>
    );
  }

  return (
    <CartItemQuantityController product={product} />
  );
}

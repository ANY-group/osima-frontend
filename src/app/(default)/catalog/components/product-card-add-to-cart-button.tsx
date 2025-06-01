'use client';

import ShoppingBagIcon from "@/app/components/ui/icons/shopping-bag-icon";
import { ProductEntity } from "@/lib/catalog/types/product";
import { useContext } from "react";
import { CartContext } from "../../checkout/components/controllers/cart-context";
import CartItemQuantityController from "../../checkout/components/cart-item-quantity-controller";

export default function ProductCardAddToCartButton({ product }: {
  product: ProductEntity,
}) {
  const { setItemQuantity, getItemQuantity } = useContext(CartContext);

  const cnt = getItemQuantity(product);

  if (cnt == 0) {

    return (
      <button
        className="flex items-center justify-center gap-1
        px-2 md:px-3 py-1 md:py-2 md:mx-auto md:w-full
        rounded bg-accent hover:not-disabled:bg-success disabled:bg-transparent disabled:text-secondary
        text-sm font-semibold whitespace-nowrap transition-colors"
        onClick={() => setItemQuantity(product, 1)}
        disabled={!product.inStock}
      >
        {product.inStock && (
          <ShoppingBagIcon />
        )}
        {product.inStock ? 'Добавить' : 'Нет в наличии'}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-center h-9">
      <CartItemQuantityController product={product} />
    </div>
  );

}
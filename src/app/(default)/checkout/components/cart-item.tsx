import TimesAltIcon from "@/app/components/ui/icons/times-alt-icon";
import Image from "next/image";
import Link from "@/app/components/ui/link";
import ProductCashback from "../../catalog/components/product-cashback";
import ProductPrice from "../../catalog/components/product-price";
import HeartIcon from "@/app/components/ui/icons/heart-icon";
import { CartItemEntity } from "@/lib/cart/types/cart-item";
import CartItemQuantityController from "./cart-item-quantity-controller";
import { useContext } from "react";
import { CartContext } from "./controllers/cart-context";

export default function CartItem({
  item,
}: {
  item: CartItemEntity,
}) {
  const { setItemQuantity } = useContext(CartContext);

  return (
    <div className="group flex gap-3 my-6 md:m-6 md:ml-2">
      <div className="relative w-25 h-25 shrink-0 rounded-lg">
        <Image
          src={item.product.image}
          alt={item.product.name}
          width={100}
          height={100}
          className="object-contain h-full rounded-lg"
        />
        <button
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center rounded-lg bg-foreground/40 transition-opacity opacity-0 group-hover:opacity-100 group-focus:opacity-100 text-danger"
          aria-label="Добавить в избранные"
        >
          <HeartIcon />
        </button>
      </div>
      <div className="flex-grow">
        <div className="relative flex max-lg:flex-col items-start justify-between gap-3">
          <Link
            href={`/catalog/${item.product.subcategory.category?.slug || ''}/${item.product.subcategory.slug}/${item.product.slug}`}
            className="max-lg:mr-6"
          >
            <p className="text-sm font-semibold">
              {item.product.subcategory.name}
            </p>
            <p className="mt-2 leading-tight">
              {item.product.name}
            </p>
          </Link>
          <div className="flex items-center gap-2.5 lg:opacity-0 h-8 group-hover:opacity-100 transition-opacity">
            <CartItemQuantityController product={item.product} />
            <button
              className="max-lg:hidden"
              aria-label="Удалить товар из корзины"
              onClick={() => setItemQuantity(item.product, 0)}
            >
              <TimesAltIcon />
            </button>
          </div>
          <button
            className="absolute top-0 right-0 lg:hidden"
            aria-label="Удалить товар из корзины"
            onClick={() => setItemQuantity(item.product, 0)}
          >
            <TimesAltIcon />
          </button>
        </div>
        <div className="flex justify-between mt-3">
          <ProductCashback />
          <ProductPrice price={item.product.price} oldPrice={item.product.oldPrice} alt />
        </div>
      </div>
    </div>
  );
}
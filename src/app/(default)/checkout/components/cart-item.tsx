import MinusIcon from "@/app/components/ui/icons/minus-icon";
import PlusIcon from "@/app/components/ui/icons/plus-icon";
import TimesAltIcon from "@/app/components/ui/icons/times-alt-icon";
import Image from "next/image";
import Link from "next/link";
import ProductCashback from "../../catalog/components/product-cashback";
import ProductPrice from "../../catalog/components/product-price";

export default function CartItem() {
  return (
    <div className="group flex gap-3 my-6 md:m-6 md:ml-2">
      <Image
        src="/images/tmp/product.png"
        alt="Product"
        width={100}
        height={100}
        className="object-contain w-25 h-25 aspect-square"
      />
      <div className="flex-grow">
        <div className="relative flex max-lg:flex-col items-start justify-between gap-3">
          <Link href="/catalog/category/subcategory/product" className="max-lg:mr-6">
            <p className="text-sm font-semibold">
              Увлажняющий крем для лица
            </p>
            <p className="mt-2 leading-tight">
              AESTURA Atobarrier365 hydro soothing cream
            </p>
          </Link>
          <div className="flex items-center gap-2.5 lg:opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="flex items-center justify-center h-8 w-8 rounded-lg bg-secondary-muted"
              aria-label="Уменьшить количество товара в корзине"
            >
              <MinusIcon />
            </button>
            <span className="font-semibold">
              1
            </span>
            <button
              className="flex items-center justify-center h-8 w-8 rounded-lg bg-secondary-muted"
              aria-label="Увеличить количество товара в корзине"
            >
              <PlusIcon />
            </button>
            <button className="max-lg:hidden" aria-label="Удалить товар из корзины">
              <TimesAltIcon />
            </button>
          </div>
          <button className="absolute top-0 right-0 lg:hidden" aria-label="Удалить товар из корзины">
            <TimesAltIcon />
          </button>
        </div>
        <div className="flex justify-between mt-3">
          <ProductCashback />
          <ProductPrice alt />
        </div>
      </div>
    </div>
  );
}
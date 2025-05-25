import Image from "next/image";
import Link from "@/app/components/ui/link";
import ProductPrice from "./product-price";
import StarRating from "./star-rating";
import ProductCashback from "./product-cashback";
import { ProductEntity } from "@/lib/catalog/types/product";
import ShoppingBagIcon from "@/app/components/ui/icons/shopping-bag-icon";

export default function ProductCard({ product }: {
  product: ProductEntity,
}) {
  return (
    <div className="flex flex-col min-w-40 lg:w-58 w-full lg:shrink-0">
      <Link
        href={`/catalog/${product.subcategory.category?.slug || ''}/${product.subcategory.slug}/${product.slug}`}
        className="flex-grow flex flex-col w-full"
      >
        <div className="relative aspect-[169/189] md:aspect-[230/306] bg-primary-muted">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover mix-blend-multiply"
            />
          )}
        </div>
        <div className="flex-grow flex flex-col justify-between gap-2 py-3">
          <div className="flex flex-col gap-2">
            <div className="text-sm font-semibold">
              {product.subcategory.name}
            </div>
            <div className="md:text-lg leading-6">
              {product.name}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <ProductCashback />
            </div>
            <div className="text-sm">
              <ProductPrice price={product.price} oldPrice={product.oldPrice} />
            </div>
            <StarRating />
          </div>
        </div>
      </Link>
      <div className="hidden">
        <button className="flex items-center justify-center gap-1 px-2 py-1 rounded bg-accent text-sm font-semibold whitespace-nowrap mx-auto">
          <ShoppingBagIcon />
          Добавить
        </button>
      </div>
    </div>
  );
}



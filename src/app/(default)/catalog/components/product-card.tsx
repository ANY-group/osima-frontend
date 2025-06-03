import Image from "next/image";
import Link from "@/app/components/ui/link";
import ProductPrice from "./product-price";
import StarRating from "./star-rating";
import ProductCashback from "./product-cashback";
import { ProductEntity } from "@/lib/catalog/types/product";
import ProductCardAddToCartButton from "./product-card-add-to-cart-button";
import ProductCardAddToFavoriteButton from "./product-card-add-to-favorite-button";

export default function ProductCard({ product }: {
  product: ProductEntity,
}) {
  return (
    <div className="relative group flex flex-col md:p-2 w-full h-full rounded-sm md:hover:ring md:hover:shadow-md ring-divider">
      <Link
        href={`/catalog/${product.subcategory.category?.slug || ''}/${product.subcategory.slug}/${product.slug}`}
        className="flex-grow flex flex-col w-full"
      >
        <div className="relative aspect-[169/189] md:aspect-[230/306] bg-primary-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover mix-blend-multiply"
          />
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
      <div className="md:opacity-0 group-hover:opacity-100 transition-opacity">
        <ProductCardAddToCartButton product={product} />
      </div>
      <div className="absolute top-3.5 right-3.5 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        <ProductCardAddToFavoriteButton product={product} />
      </div>
    </div>
  );
}



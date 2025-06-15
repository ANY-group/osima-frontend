import Image from "next/image";
import Link from "@/app/components/ui/link";
import ProductPrice from "./product-price";
import StarRating from "./star-rating";
import ProductCashback from "./product-cashback";
import ProductCardAddToCartButton from "./product-card-add-to-cart-button";
import ProductCardAddToFavoriteButton from "./product-card-add-to-favorite-button";
import ProductEntity from "@/lib/catalog/types/product";

export default function ProductCard({ product }: {
  product: ProductEntity,
}) {
  return (
    <div className="relative group flex flex-col items-center md:p-2 w-full h-full rounded-sm md:hover:ring md:hover:shadow-md ring-divider print:break-inside-avoid-page">
      <Link
        href={`/catalog/${product.subcategory.category?.slug || ''}/${product.subcategory.slug}/${product.slug}`}
        className="flex-grow flex flex-col w-full"
      >
        <div className="relative aspect-[169/189] md:aspect-[230/306]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover mix-blend-multiply bg-background"
          />
        </div>
        <div className="flex-grow flex flex-col justify-between gap-2 py-3">
          <div className="flex flex-col items-center gap-2 text-center">
            <StarRating />
            <div className="text-sm font-semibold">
              {product.subcategory.name}
            </div>
            <div className="md:text-lg leading-6">
              {product.name}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div>
              <ProductCashback />
            </div>
            <div className="text-sm">
              <ProductPrice price={product.price} oldPrice={product.oldPrice} />
            </div>
          </div>
        </div>
      </Link>
      <div className="md:opacity-0 group-hover:opacity-100 transition-opacity print:hidden">
        <ProductCardAddToCartButton product={product} />
      </div>
      <div className="absolute top-0 right-0 md:opacity-0 md:group-hover:opacity-100 transition-opacity print:hidden">
        <ProductCardAddToFavoriteButton product={product} />
      </div>
    </div>
  );
}



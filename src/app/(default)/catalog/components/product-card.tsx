import Image from "next/image";
import Link from "next/link";
import ProductPrice from "./product-price";
import StarRating from "./star-rating";

export default function ProductCard() {
  return (
    <Link
      href="/catalog/uhod-za-licom/tonizaciya/tonik-skin-balancing-pore-reducing-toner-paulas-choice" className="sm:min-w-40 lg:min-w-58"
    >
      <div className="relative w-full aspect-[169/189] md:aspect-[230/306] bg-primary-muted">
        <Image
          src="/images/tmp/product.png"
          alt="Product"
          fill
          className="object-contain mix-blend-multiply"
        />
      </div>
      <div className="flex flex-col gap-2 py-3">
        <div className="text-sm font-semibold">
          Парфюмерная вода
        </div>
        <div className="text-lg leading-6">
          Brazilian Crush Cheirosa 40 Perfume Mist
        </div>
        <div>
          <div className="inline-block px-1.5 py-0.5 bg-accent rounded text-sm font-semibold">
            350 Б
          </div>
        </div>
        <div className="text-sm">
          <ProductPrice />
        </div>
        <StarRating />
      </div>
    </Link>
  );
}



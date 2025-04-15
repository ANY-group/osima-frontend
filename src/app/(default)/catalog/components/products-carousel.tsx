import Image from "next/image";
import Link from "next/link";
import ArrowLeftIcon from "../../../components/ui/icons/arrow-left-icon";
import StarRating from "./star-rating";
import ProductPrice from "./product-price";

export default function ProductsCarousel({ title }: {
  title: String,
}) {
  return (
    <div className="pt-8 md:py-10">
      <div className="layout-container flex items-center justify-between mb-3 md:mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold">
          {title}
        </h3>
        <div className="flex items-center gap-6">
          <Link href="#">
            Смотреть все
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <ScrollController />
            <ScrollController rotate={true} />
          </div>
        </div>
      </div>
      <div className="flex gap-2 md:gap-5 px-4 md:px-5 scrollable-layout-container no-scrollbar">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

const Product = () => {
  return (
    <div className="min-w-40 md:min-w-58">
      <div className="relative w-full h-49 md:h-76 bg-primary-muted">
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
    </div>
  );
}

const ScrollController = ({ rotate = false }: {
  rotate?: boolean,
}) => {
  return (
    <div className={`flex items-center justify-center w-8 h-8 border rounded-full ${rotate && 'rotate-180'}`}>
      <ArrowLeftIcon />
    </div>
  );
}
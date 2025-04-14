import Image from "next/image";
import Link from "next/link";
import StarIcon from "./ui/icons/star-icon";

export default function ProductsCarousel({ title }: {
  title: String,
}) {
  return (
    <div className="py-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-semibold">
          {title}
        </h3>
        <div className="flex">
          <Link href="#">
            Смотреть все
          </Link>
          <div>

          </div>
        </div>
      </div>
      <div className="flex gap-5 overflow-x-auto mr-[calc(-20px-max(0px,100vw-1280px)/2)] 2xl:mr-auto no-scrollbar scroll-smooth">
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
    <div className="min-w-[230px]">
      <div className="relative w-full h-[306px] bg-primary-muted">
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
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span>16 515 C</span>
          <span className="text-text-secondary">
            16 515<span className="line-through"> C</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            <span>
              <StarIcon />
            </span>
            <span>
              <StarIcon />
            </span>
            <span>
              <StarIcon />
            </span>
            <span>
              <StarIcon />
            </span>
            <span className="text-text-secondary">
              <StarIcon />
            </span>
          </div>
          <span className="text-sm">16</span>
        </div>
      </div>
    </div>
  );
}
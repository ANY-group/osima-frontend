import Link from "@/app/components/ui/link";
import ArrowLeftIcon from "../../../components/ui/icons/arrow-left-icon";
import ProductCard from "./product-card";
import { Collection } from "@/lib/types/collection";
import { ProductEntity } from "@/lib/catalog/types/product";

export default function ProductsCarousel({ title, products, link }: {
  title: string,
  products: Collection<ProductEntity>,
  link?: string,
}) {

  return (
    <>
      <div className="layout-container flex items-center justify-between">
        <h3 className="text-xl md:text-3xl font-semibold">
          {title}
        </h3>
        <div className="flex items-center gap-6">
          {link && (
            <Link href={link} className="text-sm">
              Смотреть все
            </Link>
          )}
          <div className="hidden md:flex items-center gap-4">
            <ScrollController />
            <ScrollController rotate={true} />
          </div>
        </div>
      </div>
      <div className="flex gap-2 md:gap-4 px-4 md:px-5 scrollable-layout-container no-scrollbar py-3 md:py-6">
        {products.data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
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
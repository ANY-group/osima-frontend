import Link from "@/app/components/ui/link";
import ArrowLeftIcon from "../../../components/ui/icons/arrow-left-icon";
import ProductCard from "./product-card";
import Collection from "@/lib/types/collection";
import ProductEntity from "@/lib/catalog/types/product";

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
            <Link href={link} className="text-sm hover:underline uppercase">
              Смотреть все
            </Link>
          )}
          <div className="hidden md:flex items-center gap-4">
            <ScrollController />
            <ScrollController rotate={true} />
          </div>
        </div>
      </div>
      <div className="flex gap-1 px-4 md:px-5 layout-container no-scrollbar py-3 md:py-6">
        {products.data.map((product, index) => (
          <div key={index} className="min-w-40 lg:w-58 w-full lg:shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

const ScrollController = ({ disabled = false, rotate = false }: {
  disabled?: boolean,
  rotate?: boolean,
}) => {
  return (
    <button
      className={`flex items-center justify-center w-8 h-8
        bg-primary-muted rounded-lg ${rotate && 'rotate-180'}
        disabled:text-disabled
        `}
      aria-label={`пролистать ${rotate ? 'направо' : 'налево'}`}
      disabled={disabled}
    >
      <ArrowLeftIcon />
    </button>
  );
}
import Link from "@/app/components/ui/link";
import ArrowLeftIcon from "../../../components/ui/icons/arrow-left-icon";
import ProductCard from "./product-card";

export default function ProductsCarousel({ title }: {
  title: string,
}) {
  const products = [...Array(20)];

  return (
    <div className="py-5 md:py-10">
      <div className="layout-container flex items-center justify-between mb-3 md:mb-6">
        <h3 className="text-xl md:text-3xl font-semibold">
          {title}
        </h3>
        <div className="flex items-center gap-6">
          <Link href="/catalog" className="text-sm">
            Смотреть все
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <ScrollController />
            <ScrollController rotate={true} />
          </div>
        </div>
      </div>
      {/* <div className="flex gap-2 md:gap-5 px-4 md:px-5 scrollable-layout-container no-scrollbar">
        {products.map((product, index) => (
          <ProductCard key={index} />
        ))}
      </div> */}
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
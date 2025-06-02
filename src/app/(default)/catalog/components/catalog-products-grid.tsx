import ProductCard from "./product-card";
import { ProductEntity } from "@/lib/catalog/types/product";

export default function CatalogProductsGrid({
  products,
}: {
  products: Array<ProductEntity>,
}) {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-4 gap-y-6 md:gap-y-13 pt-1 pb-10">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
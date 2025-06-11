import ProductEntity from "@/lib/catalog/types/product";
import ProductCard from "./product-card";
import Collection from "@/lib/types/collection";
import LoadMoreButton from "@/app/components/ui/load-more-button";

export default function CatalogProductsGrid({
  products,
  loadMore,
}: {
  products: Collection<ProductEntity>,
  loadMore?: () => void,
}) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-4 gap-y-6 md:gap-y-13 pt-1 pb-10">
        {products.data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {loadMore && products.links.next && (
        <LoadMoreButton onClick={loadMore} />
      )}
    </>
  );
}
import ProductCard from "./product-card";

export default function CatalogProductsGrid() {
  const products = [...Array(7)];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 md:gap-x-5 gap-y-6 md:gap-y-13 pt-1 pb-10">
      {products.map((product, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}
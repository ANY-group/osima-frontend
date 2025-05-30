import fetchCatalog from "@/lib/catalog/usecases/fetch-catalog";
import Catalog from "./catalog";

export default async function CatalogPage({ params }: {
  params: Promise<{
    categorySlug?: string,
    subcategorySlug?: string,
    brandSlug?: string,
  }>,
}) {
  const { categorySlug, subcategorySlug, brandSlug } = await params;

  const { category, subcategory, brand, products, filters } = await fetchCatalog({
    categorySlug,
    subcategorySlug,
    brandSlug,
    loadFilters: true,
  });

  return (
    <Catalog
      category={category}
      subcategory={subcategory}
      brand={brand}
      products={products}
      filters={filters}
    />
  );
}
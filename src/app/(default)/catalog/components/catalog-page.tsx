import fetchCatalog from "@/lib/catalog/usecases/fetch-catalog";
import Catalog from "./catalog";

export default async function CatalogPage({ params, searchParams }: {
  params: Promise<{
    categorySlug?: string,
    subcategorySlug?: string,
    brandSlug?: string,
  }>,
  searchParams: Promise<{ [key: string]: any }>,
}) {
  const { categorySlug, subcategorySlug, brandSlug } = await params;

  const parsedFilters = Object.entries(await searchParams)
    .reduce((acc, [key, value]) => {
      const match = key.match(/^filters\[(.+)]$/);
      if (match) {
        const filterKey = match[1];
        if (!acc.filters) acc.filters = {};
        acc.filters[filterKey] = value;
      }
      return acc;
    }, {} as any);

  const { category, subcategory, brand, products } = await fetchCatalog(
    categorySlug,
    subcategorySlug,
    brandSlug,
    parsedFilters
  );

  return (
    <Catalog
      category={category}
      subcategory={subcategory}
      brand={brand}
      products={products}
    />
  );
}
import fetchCatalog from "@/lib/catalog/usecases/fetch-catalog";
import Catalog from "./catalog";

export default async function CatalogPage({ params }: {
  params: Promise<{
    categorySlug?: string,
    subcategorySlug?: string,
    brandSlug?: string,
  }>,
}) {
  const { categorySlug, subcategorySlug, brandSlug } = (await params);

  const { category, subcategory, brand } = await fetchCatalog(categorySlug, subcategorySlug, brandSlug);

  return (
    <Catalog
      category={category}
      subcategory={subcategory}
      brand={brand}
    />
  );
}
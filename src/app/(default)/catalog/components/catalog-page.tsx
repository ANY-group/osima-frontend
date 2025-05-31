import fetchCatalog from "@/lib/catalog/usecases/fetch-catalog";
import CatalogProvider from "./controllers/catalog-provider";
import Subheader from "@/app/components/subheader";
import BrandDescription from "./brand-description";
import CatalogSubcategories from "./catalog-subcategories";
import fetchCategories from "@/lib/catalog/usecases/fetch-categories";
import CatalogFilters from "./catalog-filters";
import CatalogProductsGrid from "./catalog-products-grid";
import HomePosts from "../../home/components/home-posts";
import SubscribeForm from "@/app/components/subscribe-form";

export default async function CatalogPage({ params, searchParams }: {
  params: Promise<{
    categorySlug?: string,
    subcategorySlug?: string,
    brandSlug?: string,
  }>,
  searchParams: Promise<{
    [key: string]: string,
  }>,
}) {
  const { categorySlug, subcategorySlug, brandSlug } = await params;
  const appliedFilters = await searchParams;
  const q = appliedFilters.q;

  const { category, subcategory, brand, products, filters } = await fetchCatalog({
    categorySlug,
    subcategorySlug,
    brandSlug,
    appliedFilters,
    loadFilters: true,
  });

  return (
    <CatalogProvider
      query={appliedFilters}
      products={products}
      filters={filters}
    >
      <main>
        <section className="sticky md:static top-18 bg-background border-b border-divider z-10">
          <div className="layout-container">
            <Subheader title={subcategory?.name || category?.name || 'Каталог'}>
              <span className="hidden md:inline">товаров {products.meta.total}</span>
            </Subheader>
          </div>
        </section>
        {brand ? (
          <section className="layout-container">
            <BrandDescription brand={brand} />
          </section>
        ) : (
          <section className="layout-container max-md:px-0!">
            <CatalogSubcategories
              categories={category ? category.subcategories : await fetchCategories()}
              slugPrefix={category?.slug}
            />
          </section>
        )}
        <section className="layout-container">
          <CatalogFilters />
        </section>
        {q && (
          <section className="layout-container">
            <p className="text-center text-2xl font-bold my-8">
              По запросу «{q}» найдено 27 товаров
            </p>
          </section>
        )}
        <section className="layout-container">
          <CatalogProductsGrid products={products.data} />
        </section>
        <section className="bg-primary-muted">
          <div className="layout-container">
            <HomePosts />
          </div>
        </section>
        <section>
          <SubscribeForm />
        </section>
      </main>
    </CatalogProvider>
  );
}
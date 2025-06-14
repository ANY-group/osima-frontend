import fetchCatalog from "@/lib/catalog/usecases/fetch-catalog";
import CatalogProvider from "./controllers/catalog-provider";
import CatalogFilters from "./catalog-filters";
import FeaturedPosts from "../../blog/components/featured-posts";
import SubscribeForm from "@/app/components/subscribe-form";
import CatalogSubheader from "./catalog-subheader";
import CatalogBrandInfo from "./catalog-brand-info";
import CatalogProducts from "./catalog-products";
import CatalogSearchTitle from "./catalog-search-title";

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

  const {
    category,
    subcategory,
    brand,
    products,
    filters,
  } = await fetchCatalog({
    categorySlug,
    subcategorySlug,
    brandSlug,
    appliedFilters,
    loadFilters: true,
  });

  return (
    <CatalogProvider
      query={appliedFilters}
      initialData={{
        category,
        subcategory,
        brand,
        products,
        filters,
      }}
    >
      <main>
        <section className="sticky md:static top-17 bg-background border-b border-divider z-10">
          <CatalogSubheader />
        </section>
        <section>
          <CatalogBrandInfo />
        </section>
        <section className="layout-container">
          <CatalogFilters />
        </section>
        <section className="layout-container">
          <CatalogSearchTitle q={q} />
        </section>
        <section className="layout-container mt-6">
          <CatalogProducts />
        </section>
        <section className="bg-primary-muted">
          <div className="layout-container">
            <FeaturedPosts />
          </div>
        </section>
        <section>
          <SubscribeForm />
        </section>
      </main>
    </CatalogProvider>
  );
}
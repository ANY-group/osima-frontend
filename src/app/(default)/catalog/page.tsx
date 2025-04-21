import HomeBlogPosts from "../home/components/home-blog-posts";
import CatalogFilters from "./components/catalog-filters";
import CatalogHeader from "./components/catalog-header";
import CatalogProductsGrid from "./components/catalog-products-grid";
import CatalogSubcategories from "./components/catalog-subcategories";

export default function CatalogPage() {
  return (
    <main>
      <section className="sticky md:static top-18 bg-background border-y md:border-t-0 border-divider z-10">
        <div className="layout-container">
          <CatalogHeader />
        </div>
      </section>
      <section className="layout-container max-md:px-0!">
        <CatalogSubcategories />
      </section>
      <section className="layout-container">
        <CatalogFilters />
      </section>
      <section className="layout-container">
        <CatalogProductsGrid />
      </section>
      <section className="layout-container">
        <HomeBlogPosts />
      </section>
    </main>
  );
}
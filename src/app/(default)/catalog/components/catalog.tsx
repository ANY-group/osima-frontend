import HomeBlogPosts from "../../home/components/home-blog-posts";
import BrandDescription from "./brand-description";
import CatalogFilters from "./catalog-filters";
import CatalogHeader from "./catalog-header";
import CatalogProductsGrid from "./catalog-products-grid";
import CatalogSubcategories from "./catalog-subcategories";

export default function Catalog({ brand = false }: {
  brand?: boolean,
}) {
  return (
    <main>
      <section className="sticky md:static top-18 bg-background border-b border-divider z-10">
        <div className="layout-container">
          <CatalogHeader />
        </div>
      </section>
      {brand && (
        <section className="layout-container">
          <BrandDescription />
        </section>
      )}
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
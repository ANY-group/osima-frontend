import BrandDescription from "./brand-description";
import CatalogFilters from "./catalog-filters";
import Subheader from "../../../components/subheader";
import CatalogProductsGrid from "./catalog-products-grid";
import CatalogSubcategories from "./catalog-subcategories";
import HomePosts from "../../home/components/home-posts";

export default function Catalog({ brand = false }: {
  brand?: boolean,
}) {
  return (
    <main>
      <section className="sticky md:static top-18 bg-background border-b border-divider z-10">
        <div className="layout-container">
          <Subheader title="Уход за лицом">
            <span className="hidden md:inline">товаров 12</span>
          </Subheader>
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
        <HomePosts />
      </section>
    </main>
  );
}
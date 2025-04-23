import Subheader from "@/app/components/subheader";
import CatalogProductsGrid from "../components/catalog-products-grid";

export default function FavoritePage() {
  return (
    <main>
      <section className="sticky md:static top-18 bg-background border-divider z-10">
        <div className="layout-container">
          <Subheader title="Избранное">
            <span className="hidden md:inline">товаров 4</span>
          </Subheader>
        </div>
      </section>
      <section className="layout-container md:mt-8">
        <CatalogProductsGrid />
      </section>
    </main>
  );
}
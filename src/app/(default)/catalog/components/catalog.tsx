import BrandDescription from "./brand-description";
import CatalogFilters from "./catalog-filters";
import Subheader from "../../../components/subheader";
import CatalogProductsGrid from "./catalog-products-grid";
import CatalogSubcategories from "./catalog-subcategories";
import HomePosts from "../../home/components/home-posts";
import SubscribeForm from "@/app/components/subscribe-form";
import { CategoryEntity } from "@/lib/catalog/types/category";
import { SubcategoryEntity } from "@/lib/catalog/types/subcategory";
import fetchCategories from "@/lib/catalog/usecases/fetch-categories";
import { BrandEntity } from "@/lib/catalog/types/brand";
import { Collection } from "@/lib/types/collection";
import { ProductEntity } from "@/lib/catalog/types/product";

export default async function Catalog({
  category,
  subcategory,
  brand,
  products,
  q,
}: {
  category?: CategoryEntity,
  subcategory?: SubcategoryEntity,
  brand?: BrandEntity,
  products: Collection<ProductEntity>,
  q?: string,
}) {

  const categories = category ? category.subcategories : await fetchCategories();

  return (
    <main>
      <section className="sticky md:static top-18 bg-background border-b border-divider z-10">
        <div className="layout-container">
          <Subheader title={subcategory?.name || category?.name || 'Каталог'}>
            <span className="hidden md:inline">товаров 12</span>
          </Subheader>
        </div>
      </section>
      {brand ? (
        <section className="layout-container">
          <BrandDescription brand={brand} />
        </section>
      ) : (
        <section className="layout-container max-md:px-0!">
          <CatalogSubcategories categories={categories} slugPrefix={category?.slug} />
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
  );
}
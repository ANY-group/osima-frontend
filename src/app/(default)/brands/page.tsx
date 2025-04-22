import SearchLgIcon from "@/app/components/ui/icons/search-lg-icon";
import CatalogHeader from "../catalog/components/catalog-header";
import TimesIcon from "@/app/components/ui/icons/times-icon";
import BrandsSearchFilter from "./components/brands-search-filter";
import Brands from "./components/brands";

export default function BrandsPage() {
  return (
    <main>
      <section className="sticky top-18 md:top-0 bg-background z-10">
        <div className="layout-container">
          <CatalogHeader title="Бренды">
            <SearchInput />
          </CatalogHeader>
          <BrandsSearchFilter />
        </div>
      </section>
      <section className="layout-container">
        <Brands />
      </section>
    </main>
  );
}

const SearchInput = () => {
  return (
    <div className="relative hidden md:flex items-center justify-end">
      <div className="z-1">
        <SearchLgIcon />
      </div>
      <input
        type="search"
        name="q"
        placeholder="Поиск по брендам"
        className="px-14 py-1.5 bg-secondary-muted placeholder-placeholder placeholder:font-normal -mx-8"
      />
      <button className="z-1">
        <TimesIcon />
      </button>
    </div>
  );
}
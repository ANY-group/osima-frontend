import SearchLgIcon from "@/app/components/ui/icons/search-lg-icon";
import TimesIcon from "@/app/components/ui/icons/times-icon";
import BrandsSearchFilter from "./components/brands-search-filter";
import Brands from "./components/brands";
import Subheader from "@/app/components/subheader";

export default function BrandsPage() {
  return (
    <main>
      <section className="sticky top-18 md:top-0 bg-background z-10">
        <div className="layout-container">
          <Subheader title="Бренды">
            <SearchInput />
          </Subheader>
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
    <form className="relative hidden md:flex items-center justify-end">
      <div className="z-1 translate-x-8">
        <SearchLgIcon />
      </div>
      <input
        type="text"
        name="q"
        placeholder="Поиск по брендам"
        className="px-14 py-1.5 outline-0 bg-secondary-muted placeholder-placeholder placeholder:font-normal"
        required
      />
      <button
        type="button"
        className="z-1 -translate-x-4 -ml-4"
      >
        <TimesIcon />
      </button>
    </form>
  );
}
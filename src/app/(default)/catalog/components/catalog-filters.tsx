'use client';

import ArrowLeftAltIcon from "@/app/components/ui/icons/arrow-left-alt-icon";
import RotateLeftIcon from "@/app/components/ui/icons/rotate-left-icon";
import { FilterEntity } from "@/lib/catalog/types/filter";
import { useContext, useRef, useState } from "react";
import CatalogFilterValuesPopover from "./catalog-filter-values-popover";
import { useClickOutside } from "@/app/hooks/click_outside";
import { CatalogContext } from "./controllers/catalog-context";
import TimesIcon from "@/app/components/ui/icons/times-icon";
import MobileFiltersSidebar from "./mobile-filters-sidebar";
import HighlightDot from "@/app/components/ui/highlight-dot";

export default function CatalogFilters() {
  return (
    <>
      <DesktopFilters />
      <MobileFilters />
    </>
  );
}

const DesktopFilters = () => {
  const { products } = useContext(CatalogContext);

  return (
    <div className="max-sm:hidden">
      <div className="flex items-center overflow-x-hidden gap-10">
        <p className="text-sm">
          Фильтр
        </p>
        <div className="flex items-center justify-between flex-grow gap-1 bg-secondary-muted rounded-lg overflow-x-hidden">
          <DesktopFiltersBar />
          <ClearFiltersButton />
        </div>
      </div>
      <AppliedFilters />
      <div className="hidden sm:flex items-center justify-between my-4 text-sm">
        <p className="flex-grow">
          Показано <strong>{products.data.length}</strong> товара из {products.meta.total}
        </p>
        <p className="mr-4 font-bold">
          Сортировать:
        </p>
        <SortingButton />
      </div>
    </div>
  );
}

const ClearFiltersButton = () => {
  const { appliedFilters, clearFilters } = useContext(CatalogContext);

  return (
    <button
      className="flex items-center justify-center gap-2 w-50 p-4 bg-success disabled:bg-disabled rounded-lg text-xs text-white font-bold uppercase"
      disabled={appliedFilters.length == 0}
      onClick={() => clearFilters()}
    >
      <RotateLeftIcon />
      Сбросить
    </button>
  );
};

const DesktopFiltersBar = () => {
  const { filters, isFilterApplied } = useContext(CatalogContext);
  const [activeFilter, setActiveFilter] = useState<{
    filter: FilterEntity,
    posX: number,
    posY: number,
  } | null>(null);

  const ref = useRef(null);

  useClickOutside(ref, () => {
    setActiveFilter(null);
  }, undefined);

  const openFilter = (filter: FilterEntity, posX: number, posY: number) => {
    if (activeFilter?.filter.id != filter.id) {
      setActiveFilter(null);
      setTimeout(() => {
        setActiveFilter({ filter, posX, posY });
      }, 100);
    }
  };


  return (
    <>
      <div className="flex divide-x divide-divider-alt overflow-x-auto no-scrollbar">
        {filters.map((filter, index) => (
          <button
            key={index}
            className="flex items-center gap-2.5 px-4 py-2 text-sm whitespace-nowrap overflow-visible"
            onClick={(e) => {
              const x = e.currentTarget.getBoundingClientRect().left;
              const y = e.currentTarget.offsetTop + 35;
              openFilter(filter, x, y);
            }}
          >
            <span className="first-letter:capitalize">
              {filter.name}
            </span>
            <div className="relative">
              <div className={`${activeFilter?.filter.id == filter.id ? 'rotate-90' : '-rotate-90'} transition-transform`}>
                <ArrowLeftAltIcon />
              </div>
              {isFilterApplied(filter) && (
                <HighlightDot className="-top-1.5 -right-1.5" />
              )}
            </div>
          </button>
        ))}
      </div>
      <div ref={ref}>
        <CatalogFilterValuesPopover
          filter={activeFilter?.filter}
          posX={activeFilter?.posX}
          posY={activeFilter?.posY}
        />
      </div>
    </>
  );
}

const AppliedFilters = () => {
  const { appliedFilters, toggleFilter } = useContext(CatalogContext);

  if (appliedFilters.length == 0) {
    return;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 my-3 text-sm">
      {appliedFilters.map((filter) => filter.values.map((value) => (
        <button
          key={`${filter.id}-${value.id}`}
          className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-full border border-divider"
          onClick={() => toggleFilter(filter, value)}
        >
          <span className="first-letter:capitalize">
            {value.name}
          </span>
          <div className="inline-flex items-center p-1 w-4 h-4 bg-divider rounded-full">
            <TimesIcon />
          </div>
        </button>
      ))).flat()}
    </div>
  );
};

const MobileFilters = () => {
  const { appliedFilters } = useContext(CatalogContext);
  const [isFiltersOpen, setFiltersOpen] = useState<boolean>(false);

  return (
    <>
      <div className="grid sm:hidden grid-cols-2 gap-2">
        <button
          className="bg-secondary-muted rounded-lg text-sm"
          onClick={() => setFiltersOpen(true)}
        >
          <div className="relative inline-block">
            Фильтры
            {appliedFilters.length > 0 && (
              <HighlightDot />
            )}
          </div>
        </button>
        <SortingButton />
      </div>
      <MobileFiltersSidebar
        isOpen={isFiltersOpen}
        close={() => setFiltersOpen(false)}
      />
      <AppliedFilters />
    </>
  );
}

const SortingButton = () => {
  return (
    <button className="flex items-center justify-center gap-3 px-4 py-3.5 border border-divider-alt rounded-lg text-sm">
      по умолчанию
      <div className="-rotate-90">
        <ArrowLeftAltIcon />
      </div>
    </button>
  );
}
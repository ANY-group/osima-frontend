'use client';

import ArrowLeftAltIcon from "@/app/components/ui/icons/arrow-left-alt-icon";
import RotateLeftIcon from "@/app/components/ui/icons/rotate-left-icon";
import { FilterEntity } from "@/lib/catalog/types/filter";
import { useContext, useRef, useState } from "react";
import CatalogFilterValuesPopover from "./catalog-filter-values-popover";
import { useClickOutside } from "@/app/hooks/click_outside";
import { CatalogContext } from "./controllers/catalog-context";

export default function CatalogFilters() {
  return (
    <>
      <DesktopFilters />
      <MobileFilters />
    </>
  );
}

const DesktopFilters = () => {
  const { products, filters, isFilterApplied, appliedFilters, clearFilters } = useContext(CatalogContext);
  const [activeFilter, setActiveFilter] = useState<{ filter: FilterEntity, posX: number, posY: number } | null>(null);

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
      <div className="hidden sm:flex items-center overflow-x-hidden gap-10">
        <p className="text-sm">
          Фильтр
        </p>
        <div className="flex items-center justify-between flex-grow gap-1 bg-secondary-muted rounded-lg overflow-x-hidden">
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
                    <div className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-success"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
          <button
            className="flex items-center justify-center gap-2 w-50 p-4 bg-success disabled:bg-disabled rounded-lg text-xs text-white font-bold uppercase"
            disabled={appliedFilters.length == 0}
            onClick={() => clearFilters()}
          >
            <RotateLeftIcon />
            Сбросить
          </button>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-between my-4 text-sm">
        <p className="flex-grow">
          Показано <strong>{products.data.length}</strong> товара из {products.meta.total}
        </p>
        <p className="mr-4 font-bold">
          Сортировать:
        </p>
        <SortingButton />
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

const MobileFilters = () => {

  return (
    <div className="grid sm:hidden grid-cols-2 gap-2 pb-4">
      <button
        className="bg-secondary-muted rounded-lg text-sm"
        onClick={() => { }}
      >
        Фильтры
      </button>
      <SortingButton />
    </div>
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
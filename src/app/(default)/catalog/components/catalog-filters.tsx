'use client';

import ArrowLeftAltIcon from "@/app/components/ui/icons/arrow-left-alt-icon";
import RotateLeftIcon from "@/app/components/ui/icons/rotate-left-icon";

export default function CatalogFilters() {
  return (
    <>
      <DesktopFilters />
      <MobileFilters />
    </>
  );
}

const DesktopFilters = () => {
  const filters = [...Array(4)];

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
                className="flex items-center gap-2.5 px-4 text-sm whitespace-nowrap"
              >
                Цена {index}
                <div className="-rotate-90">
                  <ArrowLeftAltIcon />
                </div>
              </button>
            ))}
          </div>
          <button
            className="flex items-center justify-center gap-2 w-50 p-4 bg-success disabled:bg-disabled rounded-lg text-xs text-white font-bold uppercase"
          // disabled
          >
            <RotateLeftIcon />
            Сбросить
          </button>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-between my-4 text-sm">
        <p className="flex-grow">
          Показано <strong>12</strong> товара из 12
        </p>
        <p className="mr-4 font-bold">
          Сортировать:
        </p>
        <SortingButton />
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
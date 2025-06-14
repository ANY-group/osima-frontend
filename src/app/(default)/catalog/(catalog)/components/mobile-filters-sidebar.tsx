'use client';
import TimesIcon from "@/app/components/ui/icons/times-icon";
import OverlayWrapper from "@/app/components/ui/overlay-wrapper";
import Swipeable from "@/app/components/ui/swipeable";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "./controllers/catalog-context";
import ArrowLeftAltIcon from "@/app/components/ui/icons/arrow-left-alt-icon";
import Collapse from "@/app/components/ui/collapse";
import HighlightDot from "@/app/components/ui/highlight-dot";
import FilterEntity, { FilterType } from "@/lib/catalog/types/filter";
import SimpleFilter from "./simple-filter";
import PriceFilter from "./price-filter";

export default function MobileFiltersSidebar({
  isOpen,
  close,
}: {
  isOpen: boolean,
  close: () => void,
}) {
  const { filters, isFilterApplied, clearFilters } = useContext(CatalogContext);
  const [activeFilter, setActiveFilter] = useState<FilterEntity | null>(null);

  useEffect(() => {
    setActiveFilter(null);
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      <AnimatePresence>
        {isOpen && (
          <OverlayWrapper onClick={() => close()}>
            <Swipeable onLeftSwipe={() => close()}>
              <motion.div
                key="filters"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ ease: "easeInOut", duration: 0.2 }}
                className="relative h-full bg-background overflow-y-auto"
              >
                <div className="sticky top-0 flex items-center justify-center p-3 border-b border-divider bg-background z-10">
                  <p className="font-bold">
                    Фильтр
                  </p>
                  <button
                    type="button"
                    className="absolute right-3"
                    aria-label="Закрыть"
                    onClick={() => close()}
                  >
                    <TimesIcon />
                  </button>
                </div>
                <div className="layout-container flex flex-col mb-25 mt-3">
                  {filters.map((filter, index) => (
                    <div
                      key={index}
                      className=""
                    >
                      <button
                        className="flex items-center justify-between p-3 w-full font-semibold"
                        onClick={() => setActiveFilter(activeFilter?.id == filter.id ? null : filter)}
                      >
                        <div className="relative first-letter:capitalize">
                          {filter.name}
                          {isFilterApplied(filter) && (
                            <HighlightDot className="top-0 -right-2" />
                          )}
                        </div>
                        <div className={`${activeFilter?.id == filter.id ? 'rotate-90' : '-rotate-90'} transition-transform`}>
                          <ArrowLeftAltIcon />
                        </div>
                      </button>
                      <Collapse isOpen={activeFilter?.id == filter.id}>
                        <div className="flex flex-col gap-2 px-3 pb-2 text-sm">
                          {filter.type == FilterType.PRICE ? (
                            <PriceFilter filter={filter} />
                          ) : (
                            <SimpleFilter filter={filter} />
                          )}
                        </div>
                      </Collapse>
                    </div>
                  ))}
                </div>
                <div className="fixed bottom-0 grid grid-cols-2 gap-3 w-full border-t border-divider bg-background p-3 text-sm font-semibold z-10">
                  <button
                    className="p-3 rounded-lg bg-secondary-muted text-text-accent"
                    onClick={() => clearFilters()}
                  >
                    Очистить
                  </button>
                  <button
                    className="p-3 rounded-lg bg-success text-background"
                    onClick={() => close()}
                  >
                    Готово
                  </button>
                </div>
              </motion.div>
            </Swipeable>
          </OverlayWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}
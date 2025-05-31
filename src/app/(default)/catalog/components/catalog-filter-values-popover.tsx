'use client';

import { FilterEntity } from '@/lib/catalog/types/filter';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext } from 'react';
import { CatalogContext } from './controllers/catalog-context';

export default function CatalogFilterValuesPopover({ filter, posX, posY }: {
  filter?: FilterEntity,
  posX?: number,
  posY?: number,
}) {
  const { isFilterApplied, toggleFilter } = useContext(CatalogContext);

  return (
    <AnimatePresence>
      {filter && posX && posY && (
        <div
          className="absolute z-50"
          style={{
            top: `${posY}px`,
            left: `${posX}px`,
          }}
        >
          <motion.div
            className="flex flex-col gap-2 p-4 min-w-40 bg-background rounded-lg border border-divider shadow-2xl origin-top text-sm"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            {filter.values.map((value, index) => (
              <label key={index} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name={filter.slug}
                  value={value.slug}
                  checked={isFilterApplied(filter, value)}
                  onChange={() => toggleFilter(filter, value)}
                />
                <p className="whitespace-nowrap first-letter:capitalize">
                  {value.name}
                  {value.productsCount && (
                    <span className="ml-1 text-secondary">({value.productsCount})</span>
                  )}
                </p>
              </label>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
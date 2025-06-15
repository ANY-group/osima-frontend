'use client';

import { AnimatePresence, motion } from 'framer-motion';
import FilterEntity, { FilterType } from '@/lib/catalog/types/filter';
import PriceFilter from './price-filter';
import SimpleFilter from './simple-filter';

export default function CatalogFilterValuesPopover({ filter, posX, posY }: {
  filter?: FilterEntity,
  posX?: number,
  posY?: number,
}) {

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
            className="flex flex-col gap-2 p-4 min-w-3xs bg-background rounded-lg border border-divider shadow-2xl origin-top text-sm"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            {filter.type == FilterType.PRICE ? (
              <PriceFilter filter={filter} />
            ) : (
              <SimpleFilter filter={filter} />
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
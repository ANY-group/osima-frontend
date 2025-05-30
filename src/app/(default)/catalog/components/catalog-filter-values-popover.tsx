'use client';

import { useClickOutside } from '@/app/hooks/click_outside';
import { FilterEntity } from '@/lib/catalog/types/filter';
import { FilterValueEntity } from '@/lib/catalog/types/filter-value';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';

export default function CatalogFilterValuesPopover({ filter, posX, posY, close }: {
  filter?: FilterEntity,
  posX?: number,
  posY?: number,
  close: () => void,
}) {
  const ref = useRef(null);

  useClickOutside(ref, () => {
    close();
  }, undefined, filter != null);

  const isApplied = (value: FilterValueEntity) => false;

  const onChange = (value: FilterValueEntity) => {
    console.log((isApplied(value) ? 'uncheck' : 'check') + ' ' + value.slug);
  };

  return (
    <AnimatePresence>
      {filter && posX && posY && (
        <div
          ref={ref}
          className="absolute z-50"
          style={{
            top: `${posY + 10}px`,
            left: `${posX - 40}px`,
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
                  checked={isApplied(value)}
                  onChange={(e) => onChange(value)}
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
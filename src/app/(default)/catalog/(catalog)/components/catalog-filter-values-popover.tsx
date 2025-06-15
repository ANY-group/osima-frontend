'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from 'react';
import { CatalogContext } from './controllers/catalog-context';
import FilterEntity, { FilterType } from '@/lib/catalog/types/filter';
import { getTrackBackground, Range } from 'react-range';

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

const PriceFilter = ({ filter }: {
  filter: FilterEntity,
}) => {
  const { appliedFilters, toggleFilter } = useContext(CatalogContext);

  const [values, setValues] = useState<Array<number>>([filter.minPrice || 0, filter.maxPrice || 100]);

  const getMin = (): number => Math.min(values[0] || 0, filter.minPrice || 0);
  const getMax = (): number => Math.max(values[1] || 1, filter.maxPrice || 100, getMin() + 100);

  const [isVisible, setVisible] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 270);
  }, []);

  useEffect(() => {
    const appliedFilter = appliedFilters.find((item) => item.id == filter.id);
    const [minVal, maxVal] = appliedFilter?.rawValue || [];

    setValues([
      minVal ? parseInt(minVal) : (filter.minPrice || 0),
      maxVal ? parseInt(maxVal) : (filter.maxPrice || 100),
    ]);
  }, [appliedFilters]);


  const timeout = useRef<ReturnType<typeof setTimeout>>(null);

  const handleChange = (values: Array<number>) => {
    setValues(values);

    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    const val = `${values[0]},${values[1]}`;

    timeout.current = setTimeout(() => {
      toggleFilter(
        filter,
        { id: 0, name: val, slug: val },
        true
      );
    }, 500);
  };

  return (
    <div className="min-h-12 w-full">
      {isVisible && (
        <motion.div
          className="flex justify-center flex-wrap pt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Range
            values={values}
            step={1}
            min={getMin()}
            max={getMax()}
            onChange={handleChange}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "10px",
                  display: "flex",
                  width: "100%",
                  padding: '0 5px',
                }}
              >
                <div
                  ref={props.ref}
                  className="rounded-full"
                  style={{
                    height: "3px",
                    width: "100%",
                    alignSelf: "center",
                    background: getTrackBackground({
                      values,
                      colors: ["#eeb4c9", "#ee4683", "#eeb4c9"],
                      min: getMin(),
                      max: getMax(),
                      rtl: false,
                    }),
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                key={props.key}
                className="p-3"
                style={{
                  ...props.style,
                }}
              >
                <div className="w-3 h-3 rounded-full bg-accent"></div>
              </div>
            )}
          />
          <output id="output" className="flex justify-between w-full py-2 text-xs">
            <span>
              {values[0].toLocaleString()} ₸
            </span>
            <span>
              {values[1].toLocaleString()} ₸
            </span>
          </output>
        </motion.div>
      )}
    </div>
  );
};

const SimpleFilter = ({ filter }: {
  filter: FilterEntity,
}) => {
  const { isFilterApplied, toggleFilter } = useContext(CatalogContext);

  return (
    <div className="contents">
      {filter.values?.map((value, index) => (
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
    </div>
  );
};
'use client';

import { useContext, useEffect, useState } from 'react';
import { CatalogContext } from './controllers/catalog-context';
import FilterEntity from '@/lib/catalog/types/filter';
import RangeSlider from '@/app/components/ui/range-slider';

export default function PriceFilter({ filter }: {
  filter: FilterEntity,
}) {
  const { appliedFilters, toggleFilter } = useContext(CatalogContext);
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 270);
  }, []);

  const appliedFilter = appliedFilters.find((item) => item.id == filter.id);
  const [minVal, maxVal] = appliedFilter?.values?.at(0)?.slug.split(',') || [];

  const range = {
    min: filter.minPrice || 0,
    max: filter.maxPrice || 100,
  };

  const [value, setValue] = useState({
    min: minVal ? parseInt(minVal) : range.min,
    max: maxVal ? parseInt(maxVal) : range.max,
  });

  useEffect(() => {
    const appliedFilter = appliedFilters.find((item) => item.id == filter.id);
    const [minVal, maxVal] = appliedFilter?.values?.at(0)?.slug.split(',') || [];

    setValue({
      min: minVal ? parseInt(minVal) : range.min,
      max: maxVal ? parseInt(maxVal) : range.max,
    });
  }, [appliedFilters]);

  const onChange = (value: { min: number, max: number }) => {
    const val = `${value.min},${value.max}`;

    toggleFilter(filter, {
      id: 0,
      name: val,
      slug: val,
    });
  };

  return (
    <div className="min-h-12 w-full">
      {isVisible && (
        <div className="flex justify-center flex-wrap pt-3">
          <RangeSlider
            range={range}
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </div>
  );
}
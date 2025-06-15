import FilterEntity from "@/lib/catalog/types/filter";
import { useContext } from "react";
import { CatalogContext } from "./controllers/catalog-context";

export default function SimpleFilter({ filter }: {
  filter: FilterEntity,
}) {
  const { isFilterApplied, toggleFilter } = useContext(CatalogContext);

  return (
    <div className="contents">
      {filter.values?.map((value, index) => (
        <label
          key={index}
          className="flex items-center gap-3 cursor-pointer"
        >
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
}
import FilterValueEntity from "./filter-value";

export const FilterType = {
  PRICE: 'price',
  DEFAULT: 'simple',
};

export default interface FilterEntity {
  id: number,
  type: string,
  slug: string,
  name: string,
  minPrice?: number,
  maxPrice?: number,
  values?: Array<FilterValueEntity>,
};
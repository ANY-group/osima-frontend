import FilterValueEntity from "./filter-value";

export default interface FilterEntity {
  id: number,
  slug: string,
  name: string,
  values: Array<FilterValueEntity>,
};
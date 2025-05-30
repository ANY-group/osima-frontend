import { FilterValueEntity } from "./filter-value";

export type FilterEntity = {
  id: number,
  slug: string,
  name: string,
  values: Array<FilterValueEntity>,
};
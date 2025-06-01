import { FilterEntity } from "./filter";
import { FilterValueEntity } from "./filter-value";

export type CharacteristicEntity = {
  filter: FilterEntity,
  value: FilterValueEntity,
};
import FilterEntity from "./filter";
import FilterValueEntity from "./filter-value";

export default interface CharacteristicEntity {
  filter: FilterEntity,
  value: FilterValueEntity,
};
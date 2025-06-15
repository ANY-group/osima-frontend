import FilterEntity from "./filter";

export default interface AppliedFilterEntity extends FilterEntity {
  rawValue: Array<string>,
}
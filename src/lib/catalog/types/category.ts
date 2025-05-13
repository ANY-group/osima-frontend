import { SubcategoryEntity } from "./subcategory";

export type CategoryEntity = {
  name: string,
  slug: string,
  subcategories: Array<SubcategoryEntity>,
}
import SubcategoryEntity from "./subcategory";

export default interface CategoryEntity {
  name: string,
  slug: string,
  subcategories: Array<SubcategoryEntity>,
}
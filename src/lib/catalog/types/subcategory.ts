import CategoryEntity from "./category";

export default interface SubcategoryEntity {
  name: string,
  slug: string,
  category?: CategoryEntity,
};
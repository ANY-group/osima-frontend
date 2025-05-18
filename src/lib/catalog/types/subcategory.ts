import { CategoryEntity } from "./category";

export type SubcategoryEntity = {
  name: string,
  slug: string,
  category?: CategoryEntity,
};
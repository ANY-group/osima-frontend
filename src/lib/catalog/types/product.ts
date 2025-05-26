import { BrandEntity } from "./brand";
import { SubcategoryEntity } from "./subcategory";

export type ProductEntity = {
  id: number,
  sku: string,
  slug: string,
  name: string,
  price: number,
  oldPrice: number,
  quantity: number,
  inStock: boolean,
  description: string | null,
  image: string,
  images: Array<string>,
  subcategory: SubcategoryEntity,
  brand: BrandEntity | null,
};
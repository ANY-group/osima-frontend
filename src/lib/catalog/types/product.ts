import BrandEntity from "./brand";
import CharacteristicEntity from "./characteristic";
import SubcategoryEntity from "./subcategory";

export default interface ProductEntity {
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
  characteristics?: Array<CharacteristicEntity> | null,
};
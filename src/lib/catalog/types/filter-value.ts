export default interface FilterValueEntity {
  id: number,
  slug: string,
  name: string,
  color?: string|null,
  productsCount?: number|null,
};
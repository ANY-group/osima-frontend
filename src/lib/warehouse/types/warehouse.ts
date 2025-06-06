import CityEntity from "./city";

export default interface WarehouseEntity {
  id: number,
  address: string,
  image?: string | null,
  city: CityEntity,
  contacts?: string | null,
  openingHours?: string | null,
  mapLink?: string | null,
}
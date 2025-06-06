import CityEntity from "@/lib/types/city";

export default interface DeliveryMethodEntity {
  type: string,
  slug: string,
  name: string,
  description: string,
  cities: Array<CityEntity>,
};
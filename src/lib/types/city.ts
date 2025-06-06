import WarehouseEntity from "./warehouse";

export default interface CityEntity {
  id: number,
  name: string,
  warehouses?: Array<WarehouseEntity> | null,
}
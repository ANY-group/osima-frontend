import WarehouseEntity from "@/lib/warehouse/types/warehouse";
import BasePage from "./base-page";

export default interface HomePageEntity extends BasePage {
  warehouses: Array<WarehouseEntity>,
}
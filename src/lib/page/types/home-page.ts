import WarehouseEntity from "@/lib/types/warehouse";
import BasePage from "./base-page";

export default interface HomePageEntity extends BasePage {
  warehouses: Array<WarehouseEntity>,
}
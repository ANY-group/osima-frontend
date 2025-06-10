import WarehouseEntity from "@/lib/types/warehouse";
import BasePage from "./base-page";
import BannerEntity from "@/lib/types/banner";

export default interface HomePageEntity extends BasePage {
  banners: Array<BannerEntity>,
  warehouses: Array<WarehouseEntity>,
}
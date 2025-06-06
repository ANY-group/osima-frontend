import api from "@/lib/utils/api";
import DeliveryMethodEntity from "../types/delivery-method";

export default async function fetchDeliveryMethods(): Promise<Array<DeliveryMethodEntity>> {
  const res = await api.request('delivery/methods');

  const { deliveryMethods } = await res.json();

  return deliveryMethods;
}
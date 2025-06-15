import api from "@/lib/utils/api";
import OrderEntity from "../types/order";

export default async function fetchOrders(): Promise<Array<OrderEntity>> {
  const res = await api.request('orders');

  const {orders} = await res.json();

  return orders;
}
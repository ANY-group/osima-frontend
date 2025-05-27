import { OrderEntity } from "@/lib/order/types/order";
import { CartEntity } from "../types/cart";
import api from "@/lib/utils/api";

export default async function createOrder(cart: CartEntity): Promise<OrderEntity> {
  console.log(cart);

  const res = await api.request('order', 'POST', {

  });

  const { order } = await res.json();

  return order;
}
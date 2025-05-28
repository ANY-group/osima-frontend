import api from "@/lib/utils/api";
import { OrderEntity } from "../types/order";
import { PaymentResult } from "../types/payment-result";

export default async function fetchPaymentUrl(order: OrderEntity): Promise<PaymentResult> {
  const res = await api.request(`orders/pay/${order.id}`, 'POST');

  return await res.json();
}
import api, { RequestMethod } from "@/lib/utils/api";
import { OrderEntity } from "../types/order";
import { PaymentResult } from "../types/payment-result";

export default async function fetchPaymentUrl(order: OrderEntity): Promise<PaymentResult> {
  const res = await api.request(`orders/pay/${order.id}`, {
    method: RequestMethod.POST,
  });

  return await res.json();
}
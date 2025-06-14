import Subheader from "@/app/components/subheader";
import OrdersAccordion from "./components/orders-accordion";
import fetchOrders from "@/lib/order/usecases/fetch-orders";

export default async function OrdersPage() {
  const orders = await fetchOrders();

  return (
    <main className="w-full">
      <section className="md:hidden py-3">
        <Subheader title="История заказов" />
      </section>
      <section className="px-4 py-10 mb-4 rounded-lg bg-background">
        <h2 className="text-xl font-bold">
          История заказов
        </h2>
        <OrdersAccordion orders={orders} />
      </section>
    </main>
  );
}
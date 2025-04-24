import Subheader from "@/app/components/subheader";
import CheckoutForm from "./components/checkout-form";
import CheckoutCart from "./components/checkout-cart";

export default function CheckoutPage() {
  return (
    <main>
      <section className="layout-container">
        <Subheader title="Корзина" />
      </section>
      <section className="layout-container my-3 md:my-15">
        <div className="grid md:grid-cols-2 gap-9 md:gap-26">
          <div className="md:order-2 md:sticky top-5 self-start">
            <CheckoutCart />
          </div>
          <div>
            <CheckoutForm />
          </div>
        </div>
      </section>
    </main>
  );
}
import PaymentPageEntity from "@/lib/page/types/payment-page";
import fetchPage from "@/lib/page/usecases/fetch-page";

export default async function PaymentPage() {

  const page = await fetchPage<PaymentPageEntity>('payment');

  return (
    <main>
      <section className="layout-container-sm my-10">
        <div className="raw-content" dangerouslySetInnerHTML={{ __html: page.content || '' }}>
        </div>
      </section>
    </main>
  );
}
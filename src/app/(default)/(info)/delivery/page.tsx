import DeliveryPageEntity from "@/lib/page/types/delivery-page";
import fetchPage from "@/lib/page/usecases/fetch-page";

export default async function DeliveryPage() {

  const page = await fetchPage<DeliveryPageEntity>('delivery');

  return (
    <main>
      <section className="layout-container-sm my-10">
        <div className="raw-content" dangerouslySetInnerHTML={{ __html: page.content || '' }}>
        </div>
      </section>
    </main>
  );
}
import HowToOrderPageEntity from "@/lib/page/types/how-to-order-page";
import fetchPage from "@/lib/page/usecases/fetch-page";

export default async function HowToOrderPage() {

  const page = await fetchPage<HowToOrderPageEntity>('how-to-order');

  return (
    <main>
      <section className="layout-container-sm my-10">
        <div className="raw-content" dangerouslySetInnerHTML={{ __html: page.content || '' }}>
        </div>
      </section>
    </main>
  );
}
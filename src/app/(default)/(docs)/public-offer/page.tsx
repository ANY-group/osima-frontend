import Breadcrumbs from "@/app/components/breadcrumbs";
import PublicOfferPageEntity from "@/lib/page/types/public-offer";
import fetchPage from "@/lib/page/usecases/fetch-page";

export default async function PublicOfferPage() {
  const page = await fetchPage<PublicOfferPageEntity>('public-offer');

  return (
    <main className="layout-container">
      <Breadcrumbs items={[
        {
          label: 'Документы',
          href: null,
        },
        {
          label: 'Публичная оферта',
          href: null,
        },
      ]} />

      <section className="my-10">
        <div className="raw-content" dangerouslySetInnerHTML={{ __html: page.content || '' }}>
        </div>
      </section>
    </main>
  );
}
import RequisitesPageEntity from "@/lib/page/types/requisites-page";
import fetchPage from "@/lib/page/usecases/fetch-page";

export default async function RequisitesPage() {

  const page = await fetchPage<RequisitesPageEntity>('requisites');

  return (
    <main>
      <section className="layout-container-sm my-10">
        <div className="raw-content" dangerouslySetInnerHTML={{ __html: page.content || '' }}>
        </div>
      </section>
    </main>
  );
}
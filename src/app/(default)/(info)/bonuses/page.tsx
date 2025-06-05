import BonusesPageEntity from "@/lib/page/types/bonuses-page";
import fetchPage from "@/lib/page/usecases/fetch-page";

export default async function BonusesPage() {
  const page = await fetchPage<BonusesPageEntity>('bonuses');

  return (
    <main>
      <section className="layout-container-sm my-10">
        <div className="raw-content" dangerouslySetInnerHTML={{ __html: page.content || '' }}>
        </div>
      </section>
    </main>
  );
}
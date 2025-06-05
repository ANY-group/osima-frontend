import Breadcrumbs from "@/app/components/breadcrumbs";
import PrivacyPolicyPageEntity from "@/lib/page/types/privacy-policy";
import fetchPage from "@/lib/page/usecases/fetch-page";

export default async function PrivacyPolicyPage() {
  const page = await fetchPage<PrivacyPolicyPageEntity>('privacy-policy');

  return (
    <main className="layout-container">
      <Breadcrumbs items={[
        {
          label: 'Документы',
          href: null,
        },
        {
          label: 'Политика конфиденциальности',
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
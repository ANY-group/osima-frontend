import SubscribeForm from "@/app/components/subscribe-form";
import FeaturedPosts from "../../blog/components/featured-posts";

export default function CatalogLayout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <main>
      {children}
      <section className="bg-primary-muted">
        <div className="layout-container">
          <FeaturedPosts />
        </div>
      </section>
      <section>
        <SubscribeForm />
      </section>
    </main>
  );
}
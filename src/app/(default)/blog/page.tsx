import Subheader from "@/app/components/subheader";
import PostsGrid from "./components/posts-grid";

export default function BlogPage() {
  return (
    <main>
      <section className="layout-container">
        <Subheader title="Новости" />
      </section>
      {/* <section className="layout-container my-3">
        qwe
      </section> */}
      <section className="bg-primary-muted">
        <div className="layout-container pt-8 md:pt-12 pb-16 md:pb-24">
          <PostsGrid />
        </div>
      </section>
    </main>
  );
}
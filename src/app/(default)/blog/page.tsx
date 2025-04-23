import Subheader from "@/app/components/subheader";
import PostsGrid from "./components/posts-grid";
import LargePost from "./components/large-post";

export default function BlogPage() {
  return (
    <main>
      <section className="layout-container">
        <Subheader title="Новости" />
      </section>
      <section className="max-md:hidden layout-container">
        <LargePost />
      </section>
      <section className="bg-primary-muted md:mt-12">
        <div className="layout-container pt-8 md:pt-12 pb-16 md:pb-24">
          <PostsGrid />
        </div>
      </section>
    </main>
  );
}
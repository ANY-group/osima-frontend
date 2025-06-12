import Subheader from "@/app/components/subheader";
import PostsGrid from "./components/posts-grid";
import SubscribeForm from "@/app/components/subscribe-form";
import fetchPosts from "@/lib/blog/usecases/fetch-posts";

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main>
      <section className="layout-container">
        <Subheader title="Новости" />
      </section>
      {posts.data.length > 0 && (
        <section className="bg-primary-muted md:mt-12">
          <div className="layout-container pt-8 md:pt-12 pb-16 md:pb-24">
            <PostsGrid posts={posts.data} />
          </div>
        </section>
      )}
      <section>
        <SubscribeForm />
      </section>
    </main>
  );
}
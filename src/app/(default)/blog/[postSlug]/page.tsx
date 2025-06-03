import Subheader from "@/app/components/subheader";
import BlogSocials from "./components/blog-socials";
import Image from "next/image";
import FeaturedPosts from "../components/featured-posts";
import SubscribeForm from "@/app/components/subscribe-form";
import fetchPost from "@/lib/blog/usecases/fetch-post";
import fetchPostRecommendations from "@/lib/blog/usecases/fetch-post-recommendations";

export default async function PostPage({ params }: {
  params: Promise<{
    postSlug: string,
  }>,
}) {
  const { postSlug } = await params;

  const [post, recommendedPosts] = await Promise.all([
    fetchPost(postSlug),
    fetchPostRecommendations(postSlug),
  ]);

  return (
    <main>
      <section className="layout-container">
        <Subheader title="Новости" breadcrumbs={[
          {
            label: 'Новости',
            href: '/blog',
          },
          {
            label: post.title,
            href: null,
          },
        ]} />
      </section>
      <section className="layout-container">
        <BlogSocials />
      </section>
      <section className="layout-container-sm">
        <h1 className="my-8 text-center text-4xl">
          {post.title}
        </h1>
        <p className="my-9 text-center text-sm font-semibold">
          {post.publishedAt}
        </p>
        <Image
          src={post.image}
          alt={post.title}
          width={820}
          height={547}
          className="object-contain max-h-150"
        />
        <div className="raw-content my-12" dangerouslySetInnerHTML={{ __html: post.content || '' }}></div>
      </section>
      <section className="bg-primary-muted">
        <div className="layout-container">
          <FeaturedPosts loadedPosts={recommendedPosts} />
        </div>
      </section>
      <section>
        <SubscribeForm />
      </section>
    </main>
  );
}
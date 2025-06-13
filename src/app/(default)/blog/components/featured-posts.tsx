import Link from "@/app/components/ui/link";
import PostCard from "./post-card";
import fetchPosts from "@/lib/blog/usecases/fetch-posts";
import Collection from "@/lib/types/collection";
import PostEntity from "@/lib/blog/types/post";

export default async function FeaturedPosts({ loadedPosts }: {
  loadedPosts?: Collection<PostEntity>,
}) {
  const posts = loadedPosts || await fetchPosts(4);

  if (!posts.data.length) {
    return;
  }

  return (
    <div className="flex flex-col gap-8 py-10">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-semibold">Блог</h3>
        <Link href="/blog" className="px-6 py-2 bg-accent text-on-accent rounded-full max-md:text-sm font-semibold">
          Смотреть все
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {posts.data.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
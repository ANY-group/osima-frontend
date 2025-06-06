import PostEntity from "@/lib/blog/types/post";
import PostTag from "./post-tag";
import Link from "@/app/components/ui/link";

export default function LargePost({ post }: {
  post: PostEntity,
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex items-end justify-end w-full pt-20 bg-cover bg-center cursor-pointer"
      style={{
        backgroundImage: `url(${post.image})`,
      }}
    >
      <div className="max-w-md bg-accent mt-1/5">
        <div className="flex flex-col gap-6 p-10">
          <p className="text-3xl">
            {post.title}
          </p>
          <div className="flex items-center flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <PostTag key={index} tag={tag} />
            ))}
          </div>
          <p className="text-sm font-semibold">
            {post.publishedAt}
          </p>
        </div>
      </div>
    </Link>
  );
}
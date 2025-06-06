import Image from "next/image";
import PostTag from "./post-tag";
import Link from "@/app/components/ui/link";
import PostEntity from "@/lib/blog/types/post";

export default function PostCard({ post }: {
  post: PostEntity,
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col items-center gap-3 h-full p-3 bg-white"
    >
      <div className="relative w-full aspect-[372/250]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <PostTag key={index} tag={tag} />
        ))}
      </div>
      <div className="flex-grow text-xl text-center">
        {post.title}
      </div>
      <p className="underline">
        Читать далее
      </p>
    </Link>
  );
}

import Image from "next/image";
import PostTag from "./post-tag";
import Link from "@/app/components/ui/link";

export default function PostCard({ title }: {
  title?: string,
}) {
  return (
    <div className="flex flex-col items-center gap-3 h-full p-3 bg-white">
      <div className="relative w-full aspect-[372/250]">
        <Image
          src="/images/tmp/post.png"
          alt="Post"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center flex-wrap gap-2">
        <PostTag />
        <PostTag />
      </div>
      <div className="flex-grow text-xl text-center">
        {title || 'Уход за кожей после 20 лет'}
      </div>
      <Link href="/blog/post" className="underline">
        Читать далее
      </Link>
    </div>
  );
}

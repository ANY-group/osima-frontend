import Image from "next/image";
import PostTag from "./post-tag";

export default function LargePost() {
  return (
    <div className="relative w-full aspect-[123/50]">
      <Image
        src="/images/tmp/blog-post.png"
        alt="Blog post"
        fill
        className="object-cover object-top-left"
      />
      <div className="absolute right-0 bottom-0 max-w-100 max-h-4/5 bg-accent overflow-hidden">
        <div className="flex flex-col gap-6 p-10 pb-20">
          <p className="text-3xl">
            Лучшие косметические подарки и кольцо с блеском для губ.
          </p>
          <div className="flex items-center flex-wrap gap-2">
            <PostTag />
            <PostTag />
          </div>
          <p className="text-sm font-semibold">
            11 ноября
          </p>
        </div>
      </div>
    </div>
  );
}
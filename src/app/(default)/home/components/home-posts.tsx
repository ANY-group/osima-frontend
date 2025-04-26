import Link from "next/link";
import PostCard from "../../blog/components/post-card";

export default function HomePosts() {
  return (
    <div className="flex flex-col gap-8 py-10">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-semibold">Блог</h3>
        <Link href="/blog" className="px-6 py-2 bg-accent rounded-full max-md:text-sm font-semibold">
          Смотреть все
        </Link>
      </div>
      {/* <div className="hidden md:block">
        <LargePost />
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {/* <div className="md:hidden">
        <BlogPost title="Лучшие средства для мгновенного (Large post)" />
      </div> */}
        <PostCard />
        <PostCard title="Лучшие средства для мгновенного уменьшения покраснений и розацеа" />
        <PostCard />
      </div>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function HomeBlogPosts() {
  return (
    <div className="flex flex-col gap-8 py-10">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-semibold">Блог</h3>
        <Link href="#" className="px-6 py-2 bg-accent rounded-full font-semibold">
          Смотреть все
        </Link>
      </div>
      <div className="hidden md:block">
        <LargeBlogPost />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="md:hidden">
          <BlogPost title="Лучшие средства для мгновенного (Large post)" />
        </div>
        <div>
          <BlogPost />
        </div>
        <div>
          <BlogPost title="Лучшие средства для мгновенного уменьшения покраснений и розацеа" />
        </div>
        <div>
          <BlogPost />
        </div>
      </div>
    </div>
  );
}

const LargeBlogPost = () => {
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

const BlogPost = ({ title }: {
  title?: String,
}) => {
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
      <Link href="#" className="underline">
        Читать далее
      </Link>
    </div>
  );
}

const PostTag = () => {
  return (
    <div className="px-4 py-2 rounded-full bg-primary-muted text-xs text-on-primary-muted">
      Лайфстайл
    </div>
  );
}
import PostCard from "./post-card";
import { PostEntity } from "@/lib/blog/types/post";

export default function PostsGrid({ posts }: {
  posts: Array<PostEntity>,
}) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {posts.map((post, index) => (
        <div
          key={index}
          className={`contents ${index == 0 && 'md:hidden'}`}
        >
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
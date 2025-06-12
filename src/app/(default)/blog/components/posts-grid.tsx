import PostEntity from "@/lib/blog/types/post";
import PostCard from "./post-card";

export default function PostsGrid({ posts }: {
  posts: Array<PostEntity>,
}) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
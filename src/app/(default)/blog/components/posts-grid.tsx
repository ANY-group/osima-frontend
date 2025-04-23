import PostCard from "./post-card";

export default function PostsGrid() {
  const posts = [...Array(10)];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {posts.map((post, index) => (
        <PostCard key={index} />
      ))}
    </div>
  );
}
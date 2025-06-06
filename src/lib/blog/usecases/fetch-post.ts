import api from "@/lib/utils/api";
import PostEntity from "../types/post";

export default async function fetchPost(slug: string): Promise<PostEntity> {
  const res = await api.request(`blog/posts/${slug}`);

  const { post } = await res.json();

  return post;
}
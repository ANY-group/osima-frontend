import { Collection } from "@/lib/types/collection";
import { PostEntity } from "../types/post";
import api from "@/lib/utils/api";

export default async function fetchPostRecommendations(slug: string): Promise<Collection<PostEntity>> {
  const res = await api.request(`blog/posts/${slug}/recommendations?perPage=4`);

  const { posts } = await res.json();

  return posts;
}
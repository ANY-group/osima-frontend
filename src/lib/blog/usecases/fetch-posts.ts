import { Collection } from "@/lib/types/collection";
import { PostEntity } from "../types/post";
import api from "@/lib/utils/api";

export default async function fetchPosts(perPage: number = 15): Promise<Collection<PostEntity>> {
  const res = await api.request(`blog/posts?perPage=${perPage}`);

  const { posts } = await res.json();

  return posts;
}
import { TagEntity } from "./tag";

export type PostEntity = {
  slug: string,
  title: string,
  content?: string|null,
  image: string,
  tags: Array<TagEntity>,
  publishedAt: string,
};
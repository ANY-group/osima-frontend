import TagEntity from "./tag";

export default interface PostEntity {
  slug: string,
  title: string,
  content?: string|null,
  image: string,
  tags: Array<TagEntity>,
  publishedAt: string,
};
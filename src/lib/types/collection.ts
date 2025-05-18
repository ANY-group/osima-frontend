export type Collection<T> = {
  links: {
    next: string|null,
    prev: string|null,
  },
  meta: {
    path: string,
    per_page: number,
    current_page: number,
    from: number,
    to: number,
  },
  data: Array<T>,
};
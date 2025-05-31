export type Collection<T> = {
  links: {
    next?: string | null,
    prev?: string | null,
  },
  meta: {
    path: string,
    per_page: number,
    current_page: number,
    from: number,
    to: number,
    total: number,
  },
  data: Array<T>,
};

export const emptyCollection = {
  links: {},
  meta: {
    path: '',
    per_page: 0,
    current_page: 0,
    from: 0,
    to: 0,
    total: 0,
  },
  data: [],
};
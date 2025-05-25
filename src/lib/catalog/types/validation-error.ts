export type ValidationError = {
  message: string,
  errors: {
    [key: string]: Array<string>,
  },
};
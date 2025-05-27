export default class ValidationError extends Error {
  errors: { [key: string]: string[]; };

  constructor(message: string, errors: {
    [key: string]: Array<string>,
  }) {
    super(message);
    this.name = this.constructor.name;
    this.errors = errors;
  }
}
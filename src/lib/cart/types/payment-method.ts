export default interface PaymentMethodEntity {
  type: string,
  slug: string,
  name: string,
  description: string | null,
};
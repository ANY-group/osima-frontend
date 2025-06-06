export default interface UserEntity {
  phone: string,
  email: string | null,
  name: string | null,
  birthDate: string | null,
  favorites?: Array<number> | null,
}
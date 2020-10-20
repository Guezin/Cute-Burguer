export default interface IJsonWebToken {
  generateToken: (user_id: string) => string
  verifyToken: (token: string) => boolean
}

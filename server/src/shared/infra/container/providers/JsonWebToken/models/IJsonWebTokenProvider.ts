export default interface IJsonWebTokenProvider {
  generateToken: (user_id: string) => string
  verifyToken: (token: string) => boolean
}

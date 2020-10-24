interface IVerifyTokenResponse {
  iat: number
  exp: number
  sub: string
}

export default interface IJsonWebTokenProvider {
  generateToken: (user_id: string) => string
  verifyToken: (token: string) => IVerifyTokenResponse
}

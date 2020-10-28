interface IVerifyTokenResponse {
  iat: number
  exp: number
  sub: string
}

export default interface IJsonWebTokenProvider {
  generateToken: (payload: string) => string
  verifyToken: (token: string) => IVerifyTokenResponse
}

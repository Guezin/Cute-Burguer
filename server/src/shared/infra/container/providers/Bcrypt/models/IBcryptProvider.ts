export default interface IBcryptProvider {
  generateHash: (payload: string) => Promise<string>
  compareHash: (payload: string, encrypted: string) => Promise<boolean>
}

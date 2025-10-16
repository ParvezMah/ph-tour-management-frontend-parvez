export type { ISendOtp } from "./auth.type"
export type { ILogin } from "./auth.type"

export interface IResponse<T> {
  statusCode: number
  success: boolean
  message: string
  data: T
}

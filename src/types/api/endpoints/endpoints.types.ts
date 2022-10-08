import { AccountRepositoryLoginResponseLogged_in_user } from "instagram-private-api"
import { CookieJar } from "../../../utils/api/extractCookieFromCookieJar"
import User from "../../models/user/User.types"
import { State } from "../core/state.types"

type AuthButton = {
  action: string,
  title: string
}

export interface AuthErrorResponseData {
  buttons: AuthButton[]
  error_title: string
  error_type: string
  exception_name: string
  invalid_credentials: boolean
  message: string
  status: string
  state: State
  cookieJar: CookieJar
  bloksVersionId: string
  pigeonSessionId: string
}

export interface AuthSuccessResponseData {
  logged_in_user: AccountRepositoryLoginResponseLogged_in_user
  state: State
  cookieJar: CookieJar
  bloksVersionId: string
  pigeonSessionId: string
}

export interface RegularErrorResponseData {
  error: string
  code: string
}
import { Device } from "../../../models/device/device.types"
import { ErrorResponseData, AuthSuccessResponseData } from "../endpoints.types"

export interface SignInRequestData {
  username: string
  password: string
  device: Device
}

export type SignInSuccessResponseData = AuthSuccessResponseData & {
  headers: LoginResponseHeaders
}

export type SignInErrorResponseData = ErrorResponseData & {
  success: false
}

export type LoginResponseHeaders = {
  'content-type': string | 'application/json; charset=utf-8',
  vary: string | 'Accept-Language, Cookie, Accept-Encoding',
  'content-language': string | 'en',
  date: string | Date,
  'content-encoding': string | 'gzip',
  'strict-transport-security': string | 'max-age=31536000',
  'cache-control': string | 'private, no-cache, no-store, must-revalidate',
  pragma: string | 'no-cache',
  expires: string | Date,
  'x-frame-options': string | 'SAMEORIGIN',
  'content-security-policy': string,
  'cross-origin-embedder-policy-report-only': string | 'require-corp;report-to="coep"',
  'report-to': string | '{"group": "coep", "max_age": 86400, "endpoints": [{"url": "/security/coep_report/"}]},{"group": "coop", "max_age": 86400, "endpoints": [{"url": "/security/coop_report/"}]}',
  'origin-trial': string,
  'cross-origin-opener-policy': string | 'same-origin-allow-popups;report-to="coop"',
  'x-content-type-options': string | 'nosniff',
  'x-xss-protection': string | '0',
  'x-ig-push-state': string | 'c2',
  'x-aed': string | '69',
  'x-ig-set-www-claim': string,
  'access-control-expose-headers': string | 'X-IG-Set-WWW-Claim',
  'x-ig-request-elapsed-time-ms': string,
  'x-ig-peak-time': string | '1',
  'set-cookie': string[],
  'x-ig-origin-region': string | 'cln',
  'x-fb-trip-id': string,
  'alt-svc': string | 'h3=":443"; ma=86400,h3-29=":443"; ma=86400',
  connection: 'close',
  'content-length': string
}
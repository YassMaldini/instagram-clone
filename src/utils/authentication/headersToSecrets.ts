import { CookieJar } from "request";
import * as Constants from "instagram-private-api/dist/core/constants"
import { HEADERS } from "apisauce";
import { Secrets } from "../../types/models/authentication/secrets.types";

/* Including some useless headers */
// export const HEADERS_TO_SECRETS_KEYS = Object.freeze({
//   'X-DEVICE-ID': 'xDeviceId',
//   'User-Agent': 'appUserAgent',
//   'X-Ads-Opt-Out': 'adsOptOut',
//   'X-IG-App-Locale': 'language',
//   'X-IG-Device-Locale': 'language',
//   'X-Pigeon-Session-Id': 'pigeonSessionId',
//   'X-IG-EU-DC-ENABLED': 'euDCEnabled',
//   'X-IG-Extended-CDN-Thumbnail-Cache-Busting-Value': 'thumbnailCacheBustingValue',
//   'X-Bloks-Version-Id': 'bloksVersionId',
//   'X-MID': 'mid', // to use with extractCookie
//   'X-IG-WWW-Claim': 'igWWWClaim',
//   'X-Bloks-Is-Layout-RTL': 'isLayoutRTL',
//   'X-IG-Connection-Type': 'connectionTypeHeader',
//   'X-IG-Capabilities': 'capabilitiesHeader',
//   'X-IG-App-ID': 'fbAnalyticsApplicationId',
//   'X-IG-Device-ID': 'uuid',
//   'X-IG-Android-ID': 'deviceId',
//   'Accept-Language': 'language',
//   'Authorization': 'authorization'
// })

export const HEADERS_TO_SECRETS_KEYS = Object.freeze({
  'ig-set-authorization': 'authorization',
  'ig-set-x-mid': 'mid',
  'x-ig-set-www-claim': 'igWWWClaim'
})

export const transformHeadersToSecrets = (headers: HEADERS) =>
  Object.entries(HEADERS_TO_SECRETS_KEYS).reduce(
    (acc, [headerKey, secretKey]) => ({
      ...acc,
      [secretKey]: headers?.[headerKey]
    }),
    {} as Secrets
  );

export const transformSecretsToHeaders = (secrets: Secrets) =>
  Object.entries(HEADERS_TO_SECRETS_KEYS).reduce(
    (acc, [headerKey, secretKey]) => ({
      ...acc,
      [headerKey]: secrets[secretKey as keyof Secrets]
    }),
    {} as HEADERS
  );

// export const extractCookie = (cookieJar: CookieJar, key: string) => {
//   const cookies = cookieJar.getCookies(Constants.HOST);
//   return _.find(cookies, { key }) || null;
// }
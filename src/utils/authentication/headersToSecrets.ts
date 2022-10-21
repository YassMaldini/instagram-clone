import { HEADERS } from 'apisauce';
import { Secrets } from '../../types/models/authentication/secrets.types';

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

export const getCookie = ({
  cookies,
  cookieName,
}: {
  cookies: string;
  cookieName: string;
}): string => {
  const cookie: any = {};
  cookies.split(',').forEach((el: string) => {
    const [key, value] = el.split('=');
    cookie[key.trim()] = value.split(';')[0];
  });
  return cookie[cookieName];
};

export const HEADERS_TO_SECRETS_KEYS = Object.freeze({
  'ig-set-authorization': 'authorization',
  'ig-set-x-mid': 'mid',
  'x-ig-set-www-claim': 'igWWWClaim',
  'x-ig-set-pigeon-session-id': 'pigeonSessionId',
  'x-ig-set-client-session-id': 'clientSessionId',
  // 'x-ig-set-csrftoken': 'cookieCsrfToken',
  // 'x-ig-set-sessionid': 'sessionid',
  'ig-set-ig-u-shbid': 'shbid',
  'ig-set-ig-u-shbts': 'shbts',
  'ig-set-ig-u-ds-user-id': 'ds_user_id',
  'ig-set-ig-u-rur': 'rur',
});

export const transformHeadersToSecrets = (headers: HEADERS) =>
  Object.entries(HEADERS_TO_SECRETS_KEYS).reduce(
    (acc, [headerKey, secretKey]) => ({
      ...acc,
      [secretKey]: headers?.[headerKey],
    }),
    {} as Secrets
  );

export const transformSecretsToHeaders = (secrets: Secrets) =>
  Object.entries(HEADERS_TO_SECRETS_KEYS).reduce(
    (acc, [headerKey, secretKey]) => ({
      ...acc,
      [headerKey.replace(secretKey === 'igWWWClaim' ? 'set-' : 'ig-set-', '')]:
        secrets[secretKey as keyof Secrets],
    }),
    {} as HEADERS
  );

// export const extractCookie = (cookieJar: CookieJar, key: string) => {
//   const cookies = cookieJar.getCookies(Constants.HOST);
//   return _.find(cookies, { key }) || null;
// }

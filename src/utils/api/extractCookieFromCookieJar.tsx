export type Cookie = {
  creation: Date;
  domain: string;
  expires: Date;
  hostOnly: boolean;
  key: string;
  lastAccessed: Date;
  maxAge: number;
  path: string;
  secure: boolean;
  value: string;
};

export interface CookieJar {
  _jar: {
    cookies: Cookie[];
  };
}

const extractCookieFromCookieJar = ({ key, cookieJar }: { key: string; cookieJar: CookieJar }) => {
  const cookie = cookieJar._jar.cookies.find((cookie) => cookie.key === key);
  return cookie;
};

export default extractCookieFromCookieJar;

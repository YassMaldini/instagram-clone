import { Cookie, MemoryCookieStore } from 'tough-cookie';
import * as Constants from 'instagram-private-api/dist/core/constants';
import { ChallengeStateResponse, CheckpointResponse } from 'instagram-private-api';
import { CookieJar } from '../../../utils/api/extractCookieFromCookieJar';

export type State = {
  get signatureKey(): string;
  get signatureVersion(): string;
  get userBreadcrumbKey(): string;
  get appVersion(): string;
  get appVersionCode(): string;
  get fbAnalyticsApplicationId(): string;
  get fbOtaFields(): string;
  get fbOrcaApplicationId(): string;
  get loginExperiments(): string;
  get experiments(): string;
  get bloksVersionId(): string;
  constants: typeof Constants;
  supportedCapabilities: (
    | {
        name: string;
        value: string;
      }
    | {
        name: string;
        value: number;
      }
  )[];
  language: string;
  timezoneOffset: string;
  radioType: string;
  capabilitiesHeader: string;
  connectionTypeHeader: string;
  isLayoutRTL: boolean;
  euDCEnabled?: boolean;
  adsOptOut: boolean;
  thumbnailCacheBustingValue: number;
  igWWWClaim?: string;
  authorization?: string;
  passwordEncryptionPubKey?: string;
  passwordEncryptionKeyId?: string | number;
  deviceString: string;
  build: string;
  uuid: string;
  phoneId: string;
  adid: string;
  deviceId: string;
  proxyUrl: string;
  cookieStore: MemoryCookieStore;
  cookieJar: CookieJar;
  checkpoint: CheckpointResponse | null;
  challenge: ChallengeStateResponse | null;
  clientSessionIdLifetime: number;
  pigeonSessionIdLifetime: number;
  get clientSessionId(): string;
  get pigeonSessionId(): string;
  get appUserAgent(): string;
  get webUserAgent(): string;
  get devicePayload(): {
    android_version: string;
    android_release: string;
    manufacturer: string;
    model: string;
  };
  get batteryLevel(): number;
  get isCharging(): boolean;
  get challengeUrl(): string;
  get cookieCsrfToken(): string;
  get cookieUserId(): string;
  get cookieUsername(): string;
  isExperimentEnabled(experiment: any): boolean;
  extractCookie(key: string): Cookie | null;
  extractCookieValue(key: string): string;
  extractUserId(): string;
  serialize(): Promise<
    {
      constants: any;
      cookies: any;
    } & any
  >;
  deserialize(state: string | any): Promise<void>;
  generateDevice(seed: string): void;
};

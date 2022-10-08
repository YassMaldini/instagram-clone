export interface Secrets {
  supportedCapabilities?: [
    {
      name: string,
      value: string
    },
    { name: string, value: number },
    { name: string, value: string },
    { name: string, value: string },
    { name: string, value: string },
    { name: string, value: string }
  ],
  language: string | 'en_US',
  timezoneOffset?: string,
  radioType?: string,
  capabilitiesHeader?: string,
  connectionTypeHeader?: string,
  isLayoutRTL?: boolean,
  euDCEnabled?: any,
  adsOptOut?: boolean,
  thumbnailCacheBustingValue?: number,
  clientSessionIdLifetime: number,
  pigeonSessionIdLifetime: number,
  deviceString: string,
  deviceId: string,
  uuid: string,
  phoneId: string,
  adid: string,
  build: string,
  mid: string,
  igWWWClaim: string,
  passwordEncryptionKeyId: string,
  passwordEncryptionPubKey: string
}
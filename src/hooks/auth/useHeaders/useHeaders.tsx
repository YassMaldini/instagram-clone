import {
  APP_VERSION_CODE,
  BLOKS_VERSION_ID,
  FACEBOOK_ANALYTICS_APPLICATION_ID,
} from 'instagram-private-api/dist/core/constants';
import { random } from 'lodash';
import { useMemo } from 'react';
import useDevice from '../useDevice/useDevice';
import { Device } from '../../../types/models/device/device.types';
import { Chance } from 'chance';

const useHeaders = () => {
  const device = useDevice();

  // console.log('device headers => ', device)

  if (Boolean(device)) {
    // const {
    //   deviceString,
    //   language,
    //   adsOptOut,
    //   pigeonSessionId,
    //   euDCEnabled,
    //   thumbnailCacheBustingValue,
    //   bloksVersionId,
    //   cookieJar,
    //   igWWWClaim,
    //   isLayoutRTL,
    //   connectionTypeHeader,
    //   capabilitiesHeader,
    //   uuid,
    //   deviceId,
    //   authorization
    // } = useMemo(() => state as State, [state])
    const { adid, build, deviceId, deviceString, phoneId, uuid } = useMemo(
      () => device as Device,
      [device]
    );

    const generateTemporaryGuid = (seed: string, lifetime: number) => {
      return new Chance(`${seed}${deviceId}${Math.round(Date.now() / lifetime)}`).guid();
    };
    const clientSessionIdLifetime: number = 1200000;
    const pigeonSessionIdLifetime: number = 1200000;

    const clientSessionId = generateTemporaryGuid('clientSessionId', clientSessionIdLifetime);
    const pigeonSessionId = generateTemporaryGuid('pigeonSessionId', pigeonSessionIdLifetime);

    const language = 'fr_FR';
    const capabilitiesHeader = '3brTvwE=';

    // const mid = extractCookieFromCookieJar({ key: 'mid', cookieJar })?.value

    const qeHeaders = {
      'User-Agent': `Instagram 121.0.0.29.119 Android (${deviceString}; ${language}; ${APP_VERSION_CODE})`,
      'X-Ads-Opt-Out': '0',
      'X-CM-Bandwidth-KBPS': '-1.000',
      'X-CM-Latency': '-1.000',
      'X-IG-App-Locale': language,
      'X-IG-Device-Locale': language,
      'X-Pigeon-Session-Id': pigeonSessionId,
      'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
      'X-IG-Connection-Speed': `${random(1000, 3700)}kbps`,
      'X-IG-Bandwidth-Speed-KBPS': '-1.000',
      'X-IG-Bandwidth-TotalBytes-B': '0',
      'X-IG-Bandwidth-TotalTime-MS': '0',
      'X-IG-EU-DC-ENABLED': undefined,
      'X-IG-Extended-CDN-Thumbnail-Cache-Busting-Value': '1000',
      'X-Bloks-Version-Id': BLOKS_VERSION_ID,
      'X-MID': undefined,
      'X-IG-WWW-Claim': '0',
      'X-Bloks-Is-Layout-RTL': 'false',
      'X-IG-Connection-Type': 'WIFI',
      'X-IG-Capabilities': capabilitiesHeader,
      'X-IG-App-ID': FACEBOOK_ANALYTICS_APPLICATION_ID,
      'X-IG-Device-ID': uuid,
      'X-IG-Android-ID': deviceId,
      'Accept-Language': language.replace('_', '-'),
      'X-FB-HTTP-Engine': 'Liger',
      Authorization: undefined,
      Host: 'i.instagram.com',
      'Accept-Encoding': 'gzip',
      Connection: 'close',
    };

    const qeHeaders2 = {
      Host: 'i.instagram.com',
      'X-Ig-App-Locale': language,
      'X-Ig-Device-Locale': language,
      'X-Ig-Mapped-Locale': language,
      'X-Pigeon-Session-Id': pigeonSessionId,
      'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
      'X-Ig-Bandwidth-Speed-Kbps': `${random(1000, 3700)}kbps`,
      'X-Ig-Bandwidth-Totalbytes-B': '0',
      'X-Ig-Bandwidth-Totaltime-Ms': '0',
      'X-Ig-App-Startup-Country': 'unknown',
      'X-Bloks-Version-Id': BLOKS_VERSION_ID,
      'X-Ig-Www-Claim': '0',
      'X-Bloks-Is-Layout-Rtl': 'false',
      'X-Ig-Device-Id': uuid,
      'X-Ig-Android-Id': deviceId,
      'X-Ig-Timezone-Offset': '7200',
      'X-Ig-Nav-Chain': 'AD1:login_landing:1:button::',
      'X-Fb-Connection-Type': 'WIFI',
      'X-Ig-Connection-Type': 'WIFI',
      'X-Ig-Capabilities': capabilitiesHeader,
      'X-Ig-App-Id': '567067343352428',
      Priority: 'u=3',
      // 'User-Agent': 'Instagram 237.0.0.14.102 Android (22/5.1.1; 240dpi; 540x960; samsung; SM-J200F; j2lte; universal3475; fr_FR; 373310554)',
      'User-Agent': `Instagram 121.0.0.29.119 Android (${deviceString}; ${language}; ${APP_VERSION_CODE})`,
      'Accept-Language': 'fr-FR, en-US',
      // 'X-Mid': 'YwnNngABAAEIWOZxhqRvjRWETYww',
      'Ig-Intended-User-Id': '0',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept-Encoding': 'gzip, deflate',
      'X-Fb-Http-Engine': 'Liger',
      'X-Fb-Client-Ip': 'True',
      'X-Fb-Server-Cluster': 'True',
    };

    return { qeHeaders, qeHeaders2 };
  } else {
    return {};
  }
};

export default useHeaders;

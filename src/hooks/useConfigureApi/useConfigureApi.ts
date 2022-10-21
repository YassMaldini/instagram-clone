import { ApiResponse } from 'apisauce';
import { BLOKS_VERSION_ID } from 'instagram-private-api/dist/core/constants';
import { random } from 'lodash';
import { useCallback, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { signOut } from '../../store/authentication/authenticationActions/authenticationActions';
import {
  deviceSelector,
  secretsSelector,
} from '../../store/authentication/authenticationReducerSelectors';
import api, { authenticationApi } from '../../utils/api/api';

const PREFIX = '[useConfigureApi]';

export const useConfigureApi = () => {
  const secrets = useSelector(secretsSelector);
  const device = useSelector(deviceSelector);

  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const language = 'fr_FR';
  const capabilitiesHeader = '3brTvwE=';

  const monitor = useCallback(
    (response: ApiResponse<any, any>) => {
      if (response.status === 403) {
        console.log(PREFIX, 'Detected 403 status code... Request url was:', response.config?.url);
        signOut(queryClient)(dispatch);
      }
    },
    [queryClient]
  );

  useEffect(() => {
    console.log(PREFIX, `Instagram Api base url: ${api.getBaseURL()}`);

    api.addMonitor(monitor);

    console.log('api.headers', api.headers);
  }, [monitor]);

  useEffect(() => {
    console.log(PREFIX, `Authentication Api base url: ${authenticationApi.getBaseURL()}`);

    authenticationApi.addMonitor(monitor);

    console.log('authenticationApi.headers', authenticationApi.headers);
  }, [monitor]);

  useEffect(() => {
    // Either secrets changed or just got added. → Add headers.
    if (secrets && device) {
      console.log(PREFIX, 'Adding secrets headers...');
      api.setHeaders({
        Host: 'i.instagram.com',
        'X-Ads-Opt-Out': '0',
        'X-Google-Ad-Id': device.adid,
        'X-Device-Id': device.uuid,
        'X-Fb': '1',
        'X-Cm-Bandwidth-Kbps': `${random(500, 1000).toFixed(3)}`,
        'X-Cm-Latency': `${random(10, 50).toFixed(3)}`,
        'X-Ig-App-Locale': 'fr_FR',
        'X-Ig-Device-Locale': 'fr_FR',
        'X-Ig-Mapped-Locale': 'fr_FR',
        'X-Pigeon-Session-Id': secrets.pigeonSessionId,
        'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
        'X-Ig-Bandwidth-Speed-Kbps': `${random(1000, 3700)}kbps`,
        'X-Ig-App-Startup-Country': 'unknown',
        'X-Bloks-Version-Id': BLOKS_VERSION_ID,
        'X-Ig-Www-Claim': secrets.igWWWClaim,
        'X-Bloks-Is-Layout-Rtl': 'false',
        'X-Ig-Device-Id': device.uuid,
        'X-Ig-Android-Id': device.deviceId,
        'X-Ig-Timezone-Offset': '7200',
        'X-Ig-Nav-Chain': 'MainFeedFragment:feed_timeline:1:cold_start::',
        'X-Fb-Connection-Type': 'WIFI',
        'X-Ig-Connection-Type': 'WIFI',
        'X-Ig-Capabilities': capabilitiesHeader,
        'X-Ig-App-Id': '567067343352429',
        Priority: 'u=0',
        'User-Agent': `Instagram 237.0.0.14.102 Android (${device.deviceString}; ${language}; 373310554)`,
        'Accept-Language': 'fr-FR, en-US',
        Authorization: secrets.authorization,
        'X-Mid': secrets.mid,
        'Ig-U-Shbid': secrets.shbid,
        'Ig-U-Shbts': secrets.shbts,
        'Ig-U-Ds-User-Id': secrets.ds_user_id,
        'Ig-U-Rur': secrets.rur,
        'Ig-Intended-User-Id': secrets.ds_user_id,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Content-Encoding': 'gzip',
        'Accept-Encoding': 'gzip, deflate',
        'X-Fb-Http-Engine': 'Liger',
        'X-Fb-Client-Ip': 'True',
        'X-Fb-Server-Cluster': 'True',
      });
    }
    // Secrets got deleted. → Remove headers.
    else {
      console.log(PREFIX, 'Removing secrets headers...');
      Object.keys(api.headers).forEach((headerKey) => {
        api.deleteHeader(headerKey);
      });
    }
  }, [secrets, device]);

  return api;
};

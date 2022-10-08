import { ApiResponse } from "apisauce"
import { APP_VERSION_CODE, BLOKS_VERSION_ID } from "instagram-private-api/dist/core/constants"
import { random } from "lodash"
import { useCallback, useEffect, useMemo } from "react"
import { useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { signOut } from "../../store/authentication/authenticationActions/authenticationActions"
import { deviceSelector, secretsSelector } from "../../store/authentication/authenticationReducerSelectors"
import { Device } from "../../types/models/device/device.types"
import api, { authenticationApi } from "../../utils/api/api"
import { HEADERS_TO_SECRETS_KEYS, transformSecretsToHeaders } from "../../utils/authentication/headersToSecrets"

const PREFIX = '[useConfigureApi]';

export const useConfigureApi = () => {
  const secrets = useSelector(secretsSelector);
  const device = useSelector(deviceSelector);
  const queryClient = useQueryClient();

  const language = 'fr_FR';
  const capabilitiesHeader = '3brTvwE=';

  // console.log('headers', headers)

  const monitor = useCallback(
    (response: ApiResponse<any, any>) => {
      if (response.status === 403) {
        console.log(
          PREFIX,
          'Detected 403 status code... Request url was:',
          response.config?.url
        );
        // (async () => {
        //     await queryClient.invalidateQueries(USE_VALIDATE_TOKEN_QUERY_KEY);
        // })();
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
    if (secrets) {
      console.log(PREFIX, 'Adding secrets headers...');
      api.setHeaders({
        ...transformSecretsToHeaders(secrets),
        'X-Ig-App-Locale': language,
        'X-Ig-Device-Locale': language,
        'X-Ig-Mapped-Locale': language,
        'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
        'X-Ig-Bandwidth-Speed-Kbps': `${random(1000, 3700)}kbps`,
        'X-Ig-Bandwidth-Totalbytes-B': '0',
        'X-Ig-Bandwidth-Totaltime-Ms': '0',
        'X-Ig-App-Startup-Country': 'unknown',
        'X-Bloks-Version-Id': BLOKS_VERSION_ID,
        'X-Ig-Www-Claim': '0',
        'X-Bloks-Is-Layout-Rtl': 'false',
        'X-Ig-Device-Id': device?.uuid || '',
        'X-Ig-Android-Id': device?.deviceId || '',
        'X-Ig-Timezone-Offset': '7200',
        'X-Ig-Nav-Chain': 'AD1:login_landing:1:button::',
        'X-Fb-Connection-Type': 'WIFI',
        'X-Ig-Connection-Type': 'WIFI',
        'X-Ig-Capabilities': capabilitiesHeader,
        'X-Ig-App-Id': '567067343352428',
        'Priority': 'u=3',
        'User-Agent': `Instagram 121.0.0.29.119 Android (${device?.deviceString}; ${language}; ${APP_VERSION_CODE})`,
        'Accept-Language': 'fr-FR, en-US',
        'Ig-Intended-User-Id': '0',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept-Encoding': 'gzip, deflate',
        'X-Fb-Http-Engine': 'Liger',
        'X-Fb-Client-Ip': 'True',
        'X-Fb-Server-Cluster': 'True'
      });
    }
    // Secrets got deleted. → Remove headers.
    else if (api.headers['access-token']) {
      console.log(PREFIX, 'Removing secrets headers...');
      Object.keys(api.headers).forEach((headerKey) => {
        api.deleteHeader(headerKey);
      });
    }
  }, [secrets]);

  // api.setHeaders({...headers as HEADERS})

  return api
}
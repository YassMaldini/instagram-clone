import { ApiResponse } from "apisauce"
import { useCallback, useEffect } from "react"
import { useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { secretsSelector } from "../../store/authentication/authenticationReducerSelectors"
import api, { authenticationApi } from "../../utils/api/api"
import { HEADERS_TO_SECRETS_KEYS, transformSecretsToHeaders } from "../../utils/authentication/headersToSecrets"

const PREFIX = '[useConfigureApi]';

export const useConfigureApi = () => {
  const secrets = useSelector(secretsSelector);
  const queryClient = useQueryClient()

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
        'Token-Type': 'Bearer'
      });
    }
    // Secrets got deleted. → Remove headers.
    else if (api.headers['access-token']) {
      console.log(PREFIX, 'Removing secrets headers...');
      Object.keys(HEADERS_TO_SECRETS_KEYS).forEach((headerKey) => {
        api.deleteHeader(headerKey);
      });
    }
  }, [secrets]);

  // api.setHeaders({...headers as HEADERS})

  return api
}
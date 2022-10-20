import { TFunction } from 'react-i18next';
import { CurrentUserSuccessResponseData } from '../../../types/api/endpoints/accounts/currentuser.types';
import api from '../../../utils/api/api';
import ACCOUNT_ENDPOINTS from '../../../utils/api/endpoints/accountEndpoints';
import AUTHENTICATION_ENDPOINTS from '../../../utils/api/endpoints/authenticationEndpoints';

const PREFIX = '[queryCurrentUser]';

export const queryCurrentUser = async () => {
  console.log(PREFIX, `Fetching current user...`);
  console.log(PREFIX, `api.headers`, api.headers);
  const response = await ACCOUNT_ENDPOINTS.currentUser();

  const { problem, data: json } = response;

  console.log(response.data);

  if (problem || !response.data) {
    throw json;
  }

  console.log(PREFIX, 'Fetched current user.');

  return json as CurrentUserSuccessResponseData;
};

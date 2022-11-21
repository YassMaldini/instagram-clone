import axios from 'axios';
import { UserInfoResponseRootObject } from '../../../types/api/endpoints/users/info.user.types';
import api from '../../../utils/api/api';
import USERS_ENDPOINTS from '../../../utils/api/endpoints/usersEndpoints';
import { getIosHeaders } from '../../../utils/api/headers/getIosHeaders';
import { QueryUserInfosOptions } from './useUserInfos.types';

const PREFIX = '[queryUserInfos]';

export const queryUserInfos = async ({ userPk }: QueryUserInfosOptions) => {
  console.log(PREFIX, `Fetching user infos...`);

  // Request using axios

  const headers = getIosHeaders()

  const response = await axios.get(`https://i.instagram.com/api/v1/users/${userPk}/info/`, {
    headers
  });

  if (response.status !== 200 && response.status !== 403) {
    throw response.data
  }

  console.log(PREFIX, `Received user infos.`);
  return response.data

  // Request using apisauce (works fine on android but broken on ios)

  // const response = await USERS_ENDPOINTS.info({ userPk });

  // const { problem, data: json } = response;

  // if (problem) {
  //   throw json;
  // }

  // console.log(PREFIX, `Received user infos.`);
  // return json as UserInfoResponseRootObject;
};

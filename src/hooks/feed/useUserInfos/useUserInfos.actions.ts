import { MediaCommentsFeedResponse } from 'instagram-private-api';
import { UserInfoResponseRootObject } from '../../../types/api/endpoints/users/info.user.types';
import MEDIA_ENDPOINTS from '../../../utils/api/endpoints/mediaEndpoints';
import USERS_ENDPOINTS from '../../../utils/api/endpoints/usersEndpoints';
import { QueryUserInfosOptions } from './useUserInfos.types';

const PREFIX = '[queryUserInfos]';

export const queryUserInfos = async ({ userPk }: QueryUserInfosOptions) => {
  console.log(PREFIX, `Fetching user infos...`);

  const response = await USERS_ENDPOINTS.info({ userPk });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(PREFIX, `Received user infos.`);
  return json as UserInfoResponseRootObject;
};

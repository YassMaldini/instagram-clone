import { ErrorResponseData } from '../../../types/api/endpoints/endpoints.types';
import api from '../api';
import { UserInfoResponseRootObject } from '../../../types/api/endpoints/users/info.user.types';
import { QueryUserInfosOptions } from '../../../hooks/feed/useUserInfos/useUserInfos.types';

const USERS_ENDPOINTS = Object.freeze({
  info: ({ userPk }: QueryUserInfosOptions) =>
    api.get<UserInfoResponseRootObject, ErrorResponseData>(`/users/${userPk}/info/`),
});

export default USERS_ENDPOINTS;

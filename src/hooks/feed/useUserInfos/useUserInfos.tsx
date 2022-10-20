import { useQuery } from "react-query"
import { UserInfoResponseRootObject } from "../../../types/api/endpoints/users/info.user.types";
import { queryUserInfos } from "./useUserInfos.actions";
import { UseUserInfosOptions } from "./useUserInfos.types";

export const USE_USER_INFOS_QUERY_KEY = 'USE_USER_INFOS';

const useUserInfos = ({ userPk }: UseUserInfosOptions) => {
  return useQuery<UserInfoResponseRootObject, Error>(
    [USE_USER_INFOS_QUERY_KEY],
    () => queryUserInfos({ userPk })
)
}

export default useUserInfos
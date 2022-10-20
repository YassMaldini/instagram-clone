import { useQuery } from "react-query"
import { UserFeedResponse } from "../../../types/api/endpoints/feed/user.feed.types";
import { UsertagsFeedResponseRootObject } from "../../../types/api/endpoints/feed/usertags.feed.types";
import { UserInfoResponseRootObject } from "../../../types/api/endpoints/users/info.user.types";
import { queryUserFeed } from "./useUserFeed.actions";
import { UseUserFeedOptions } from "./useUserFeed.types";

export const USE_USER_FEED_QUERY_KEY = 'USE_USER_FEED';

const useUserFeed = ({ userPk }: UseUserFeedOptions) => {
  return useQuery<UserFeedResponse, Error>(
    [USE_USER_FEED_QUERY_KEY],
    () => queryUserFeed({ userPk })
)
}

export default useUserFeed
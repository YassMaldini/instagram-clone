import { useQuery } from "react-query"
import { UsertagsFeedResponseRootObject } from "../../../types/api/endpoints/feed/usertags.feed.types";
import { UserInfoResponseRootObject } from "../../../types/api/endpoints/users/info.user.types";
import { queryUsertagsFeed } from "./useUsertagsFeed.actions";
import { UseUsertagsFeedOptions } from "./useUsertagsFeed.types";

export const USE_USERTAGS_FEED_QUERY_KEY = 'USE_USERTAGS_FEED';

const useUsertagsFeed = ({ userPk }: UseUsertagsFeedOptions) => {
  return useQuery<UsertagsFeedResponseRootObject, Error>(
    [USE_USERTAGS_FEED_QUERY_KEY],
    () => queryUsertagsFeed({ userPk })
)
}

export default useUsertagsFeed
import { UserFeedResponse } from '../../../types/api/endpoints/feed/user.feed.types';
import { UsertagsFeedResponseRootObject } from '../../../types/api/endpoints/feed/usertags.feed.types';
import { UserInfoResponseRootObject } from '../../../types/api/endpoints/users/info.user.types';
import FEED_ENDPOINTS from '../../../utils/api/endpoints/feedEndpoints';
import USERS_ENDPOINTS from '../../../utils/api/endpoints/usersEndpoints';
import { QueryUserFeedOptions } from './useUserFeed.types';

const PREFIX = '[queryUserFeed]';

export const queryUserFeed = async ({ userPk }: QueryUserFeedOptions) => {
  console.log(PREFIX, `Fetching user feed...`);

  const response = await FEED_ENDPOINTS.user({ userPk });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(PREFIX, `Received user feed.`);
  return json as UserFeedResponse;
};

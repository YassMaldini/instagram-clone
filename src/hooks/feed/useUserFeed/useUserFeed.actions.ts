import { UserFeedResponse } from '../../../types/api/endpoints/feed/user.feed.types';
import FEED_ENDPOINTS from '../../../utils/api/endpoints/feedEndpoints';
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

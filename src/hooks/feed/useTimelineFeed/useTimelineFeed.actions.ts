import { TimelineFeedSuccessResponseData } from '../../../types/api/endpoints/feed/timeline.feed.types';
import FEED_ENDPOINTS from '../../../utils/api/endpoints/feedEndpoints';

const PREFIX = '[queryTimelineFeed]';

export const queryTimelineFeed = async (data: object) => {
  console.log(PREFIX, `Fetching feed timeline...`);
  const response = await FEED_ENDPOINTS.timelineFeed(data);

  const { problem, data: json } = response;

  if (problem) {
    const error = response.data;
    console.log(PREFIX, 'An error occurred.', error);
    throw error;
  }

  // console.log('----------------------->', json)

  console.log(PREFIX, `Received feed timeline.`);
  return json as TimelineFeedSuccessResponseData;
};

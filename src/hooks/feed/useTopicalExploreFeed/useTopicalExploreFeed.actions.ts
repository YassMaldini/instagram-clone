import { DiscoverFeedResponseRootObject } from '../../../types/api/endpoints/feed/discover.feed.types';
import { TopicalExploreFeedResponseRootObject } from '../../../types/api/endpoints/feed/topicalDiscover.feed.types';
import DISCOVER_ENDPOINTS from '../../../utils/api/endpoints/discoverEndpoints';
import { QueryTopicalExploreFeedOptions } from './useTopicalExploreFeed.types';

const PREFIX = '[queryTopicalExploreFeed]';

export const queryTopicalExploreFeed = async ({ options }: QueryTopicalExploreFeedOptions) => {
  console.log(PREFIX, `Fetching topical explore feed...`);
  const response = await DISCOVER_ENDPOINTS.topicalExplore({ options });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(PREFIX, `Received topical explore feed.`);
  return json as TopicalExploreFeedResponseRootObject;
};

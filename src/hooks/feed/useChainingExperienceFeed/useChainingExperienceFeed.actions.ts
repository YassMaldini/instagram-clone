import { ChainingExperienceFeedResponseRootObject } from '../../../types/api/endpoints/feed/chainingExperience.feed.types';
import DISCOVER_ENDPOINTS from '../../../utils/api/endpoints/discoverEndpoints';
import { QueryChainingExperienceFeedOptions } from './useChainingExperienceFeed.types';

const PREFIX = '[queryChainingExperienceFeed]';

export const queryChainingExperienceFeed = async ({ form }: QueryChainingExperienceFeedOptions) => {
  console.log(PREFIX, `Fetching chaining experience feed...`);
  const response = await DISCOVER_ENDPOINTS.chainingExperience({ form });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(PREFIX, `Received chaining experience feed.`);
  return json as ChainingExperienceFeedResponseRootObject;
};

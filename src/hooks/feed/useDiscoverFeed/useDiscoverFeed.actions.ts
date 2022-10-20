import { DiscoverFeedResponseRootObject } from '../../../types/api/endpoints/feed/discover.feed.types';
import { Device } from '../../../types/models/device/device.types';
import DISCOVER_ENDPOINTS from '../../../utils/api/endpoints/discoverEndpoints';
import FEED_ENDPOINTS from '../../../utils/api/endpoints/feedEndpoints';
import { QueryDiscoverFeedOptions } from './useDiscoverFeed.types';

const PREFIX = '[queryDiscoverFeed]';

export const queryDiscoverFeed = async ({ form }: QueryDiscoverFeedOptions) => {
  console.log(PREFIX, `Fetching discover feed...`);
  const response = await DISCOVER_ENDPOINTS.ayml({ form });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(PREFIX, `Received discover feed.`);
  return json as DiscoverFeedResponseRootObject;
};

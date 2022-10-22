import { ErrorResponseData } from '../../../types/api/endpoints/endpoints.types';
import api from '../api';
import { DiscoverFeedResponseRootObject } from '../../../types/api/endpoints/feed/discover.feed.types';
import { StaticPostEndpoints } from '../../../types/api/endpoints/staticEndpoints';
import { QueryDiscoverFeedOptions } from '../../../hooks/feed/useDiscoverFeed/useDiscoverFeed.types';
import qs from 'qs';
import { TopicalExploreFeedResponseRootObject } from '../../../types/api/endpoints/feed/topicalDiscover.feed.types';
import { QueryTopicalExploreFeedOptions } from '../../../hooks/feed/useTopicalExploreFeed/useTopicalExploreFeed.types';
import { ChainingExperienceFeedResponseRootObject } from '../../../types/api/endpoints/feed/chainingExperience.feed.types';
import { QueryChainingExperienceFeedOptions } from '../../../hooks/feed/useChainingExperienceFeed/useChainingExperienceFeed.types';

const DISCOVER_ENDPOINTS = Object.freeze({
  ayml: ({ form }: QueryDiscoverFeedOptions) =>
    api.post<DiscoverFeedResponseRootObject, ErrorResponseData>(
      StaticPostEndpoints.Ayml,
      qs.stringify(form)
    ),
  topicalExplore: ({ options }: QueryTopicalExploreFeedOptions) =>
    api.get<TopicalExploreFeedResponseRootObject, ErrorResponseData>(
      StaticPostEndpoints.TopicalExplore,
      qs.stringify({ ...options })
    ),
  chainingExperience: ({ form }: QueryChainingExperienceFeedOptions) =>
    api.post<ChainingExperienceFeedResponseRootObject, ErrorResponseData>(
      StaticPostEndpoints.ChainingExperience,
      qs.stringify(form)
    ),
});

export default DISCOVER_ENDPOINTS;

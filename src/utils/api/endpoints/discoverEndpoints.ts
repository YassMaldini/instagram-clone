import { ErrorResponseData } from '../../../types/api/endpoints/endpoints.types';
import api from '../api';
import { DiscoverFeedResponseRootObject } from '../../../types/api/endpoints/feed/discover.feed.types';
import { StaticPostEndpoints } from '../../../types/api/endpoints/staticEndpoints';
import { QueryDiscoverFeedOptions } from '../../../hooks/feed/useDiscoverFeed/useDiscoverFeed.types';
import qs from 'qs';

const DISCOVER_ENDPOINTS = Object.freeze({
  ayml: ({ form }: QueryDiscoverFeedOptions) =>
    api.post<DiscoverFeedResponseRootObject, ErrorResponseData>(
      StaticPostEndpoints.Ayml,
      qs.stringify(form)
    ),
});

export default DISCOVER_ENDPOINTS;

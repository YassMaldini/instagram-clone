import { DiscoverFeedResponseRootObject } from '../../../types/api/endpoints/feed/discover.feed.types';
import { TopicalExploreFeedResponseRootObject } from '../../../types/api/endpoints/feed/topicalDiscover.feed.types';
import DISCOVER_ENDPOINTS from '../../../utils/api/endpoints/discoverEndpoints';
import { QueryTopicalExploreFeedOptions } from './useTopicalExploreFeed.types';
import axios from 'axios';
import qs from 'qs';
import api from '../../../utils/api/api';
import { getIosHeaders } from '../../../utils/api/headers/getIosHeaders';

const PREFIX = '[queryTopicalExploreFeed]';

export const queryTopicalExploreFeed = async ({ options }: QueryTopicalExploreFeedOptions) => {
  console.log(PREFIX, `Fetching topical explore feed...`);

  // Request using axios

  const headers = getIosHeaders()

  const response = await axios.get('https://i.instagram.com/api/v1/discover/topical_explore/', {
    params: {
      'is_prefetch': 'true',
      'omit_cover_media': 'true',
      'is_ptr': 'false',
      'reels_configuration': 'hide_hero',
      'use_sectional_payload': 'true',
      'timezone_offset': '3600'
    },
    headers
  });

  if (response.status !== 200 && response.status !== 403) {
    throw response.data
  }

  console.log(PREFIX, `Received topical explore feed.`);
  return response.data

  // Request using apisauce (works fine on android but broken on ios)

  // const response = await DISCOVER_ENDPOINTS.topicalExplore({ options });

  // const { problem, data: json } = response;

  // if (problem) {
  //   throw json;
  // }

  // console.log(PREFIX, `Received topical explore feed.`);
  // return json as TopicalExploreFeedResponseRootObject;

};

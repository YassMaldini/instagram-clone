import axios from 'axios';
import { Platform } from 'react-native';
import { UserFeedResponse } from '../../../types/api/endpoints/feed/user.feed.types';
import FEED_ENDPOINTS from '../../../utils/api/endpoints/feedEndpoints';
import { getIosHeaders } from '../../../utils/api/headers/getIosHeaders';
import { QueryUserFeedOptions } from './useUserFeed.types';

const PREFIX = '[queryUserFeed]';

export const queryUserFeed = async ({ userPk }: QueryUserFeedOptions) => {
  console.log(PREFIX, `Fetching user feed...`);

  if (Platform.OS !== 'ios') {
    // Request using apisauce (works fine on android but broken on ios)

    const response = await FEED_ENDPOINTS.user({ userPk });

    const { problem, data: json } = response;

    if (problem) {
      throw json;
    }

    console.log(PREFIX, `Received user feed.`);
    return json as UserFeedResponse;
    
  } else {
    // Request using axios

    const headers = getIosHeaders()

    const response = await axios.get(`https://i.instagram.com/api/v1/feed/user/${userPk}/`, {
      headers
    });

    if (response.status !== 200 && response.status !== 403) {
      throw response.data
    }

    console.log(PREFIX, `Received user infos.`);
    return response.data
  }
};

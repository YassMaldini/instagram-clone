import axios from 'axios';
import { Platform } from 'react-native';
import { UsertagsFeedResponseRootObject } from '../../../types/api/endpoints/feed/usertags.feed.types';
import FEED_ENDPOINTS from '../../../utils/api/endpoints/feedEndpoints';
import { getIosHeaders } from '../../../utils/api/headers/getIosHeaders';
import { QueryUsertagsFeedOptions } from './useUsertagsFeed.types';

const PREFIX = '[queryUsertagsFeed]';

export const queryUsertagsFeed = async ({ userPk }: QueryUsertagsFeedOptions) => {
  console.log(PREFIX, `Fetching usertags feed...`);

  if (Platform.OS !== 'ios') {
    const response = await FEED_ENDPOINTS.usertags({ userPk });

    const { problem, data: json } = response;

    if (problem) {
      throw json;
    }

    console.log(PREFIX, `Received usertags feed.`);
    return json as UsertagsFeedResponseRootObject;
  } else {
    // Request using axios

    const headers = getIosHeaders()

    const response = await axios.get(`https://i.instagram.com/api/v1/usertags/${userPk}/feed/`, {
      headers
    });

    if (response.status !== 200 && response.status !== 403) {
      throw response.data
    }

    console.log(PREFIX, `Received user infos.`);
    return response.data
  }
};

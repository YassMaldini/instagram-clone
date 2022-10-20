import { ErrorResponseData } from "../../../types/api/endpoints/endpoints.types";
import { TimelineFeedSuccessResponseData } from "../../../types/api/endpoints/feed/timeline.feed.types";
import { StaticGetEndpoints, StaticPostEndpoints } from "../../../types/api/endpoints/staticEndpoints";
import { Device } from "../../../types/models/device/device.types";
import api from "../api";
import qs from 'qs';
import { ReelsTrayFeedSuccessResponseData } from "../../../types/api/endpoints/feed/reelsTray.feed.types";
import { QueryUserFeedOptions } from "../../../hooks/feed/useUserfeed/useUserFeed.types";
import { UsertagsFeedResponseRootObject } from "../../../types/api/endpoints/feed/usertags.feed.types";
import { UserFeedResponse } from "../../../types/api/endpoints/feed/user.feed.types";
import { QueryUsertagsFeedOptions } from "../../../hooks/feed/useUsertagsFeed/useUsertagsFeed.types";

const FEED_ENDPOINTS = Object.freeze({
  timelineFeed: (data: object) => {
    return api.post<TimelineFeedSuccessResponseData, ErrorResponseData>(StaticPostEndpoints.TimelineFeed, qs.stringify(data))
  },
  reelsTrayFeed: (data: object) => {
    return api.post<ReelsTrayFeedSuccessResponseData, ErrorResponseData>(StaticPostEndpoints.ReelsTrayFeed, qs.stringify(data))
  },
  user: ({ userPk }: QueryUserFeedOptions) => {
    return api.get<UserFeedResponse, ErrorResponseData>(`/feed/user/${userPk}/`)
  },
  usertags: ({ userPk }: QueryUsertagsFeedOptions) => {
    return api.get<UsertagsFeedResponseRootObject, ErrorResponseData>(`/usertags/${userPk}/feed/`)
  }
})

export default FEED_ENDPOINTS
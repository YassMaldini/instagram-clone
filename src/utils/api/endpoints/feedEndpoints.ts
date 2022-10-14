import { ErrorResponseData } from "../../../types/api/endpoints/endpoints.types";
import { TimelineFeedSuccessResponseData } from "../../../types/api/endpoints/feed/timeline.types";
import { StaticGetEndpoints, StaticPostEndpoints } from "../../../types/api/endpoints/staticEndpoints";
import { Device } from "../../../types/models/device/device.types";
import api from "../api";
import qs from 'qs';
import { ReelsTrayFeedSuccessResponseData } from "../../../types/api/endpoints/feed/reelsTray.types";

const FEED_ENDPOINTS = Object.freeze({
  timelineFeed: (data: object) => {
    return api.post<TimelineFeedSuccessResponseData, ErrorResponseData>(StaticPostEndpoints.TimelineFeed, qs.stringify(data))
  },
  reelsTrayFeed: (data: object) => {
    return api.post<ReelsTrayFeedSuccessResponseData, ErrorResponseData>(StaticPostEndpoints.ReelsTrayFeed, qs.stringify(data))
  }
})

export default FEED_ENDPOINTS
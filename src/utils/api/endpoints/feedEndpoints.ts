import { ErrorResponseData } from "../../../types/api/endpoints/endpoints.types";
import { TimelineFeedSuccessResponseData } from "../../../types/api/endpoints/feed/timeline.types";
import { StaticGetEndpoints, StaticPostEndpoints } from "../../../types/api/endpoints/staticEndpoints";
import { Device } from "../../../types/models/device/device.types";
import api from "../api";
import qs from 'qs';

const FEED_ENDPOINTS = Object.freeze({
  timelineFeed: (data: object) => {
    console.log('endpoint api.headers', api.headers)
    console.log('endpoint data', qs.stringify(data))
    return api.post<TimelineFeedSuccessResponseData, ErrorResponseData>(StaticPostEndpoints.TimelineFeed, qs.stringify(data))
  }
})

export default FEED_ENDPOINTS
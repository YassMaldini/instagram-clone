import { Chance } from "chance";
import { MediaCommentsFeedResponse } from "instagram-private-api";
import { useQuery } from "react-query"
import { useSelector } from "react-redux";
import { deviceSelector, secretsSelector } from "../../../store/authentication/authenticationReducerSelectors";
import { ReelsTrayFeedSuccessResponseData } from "../../../types/api/endpoints/feed/reelsTray.types";
import { TimelineFeedSuccessResponseData } from "../../../types/api/endpoints/feed/timeline.types"
import { Secrets } from "../../../types/models/authentication/secrets.types";
import { Device } from "../../../types/models/device/device.types";
import api from "../../../utils/api/api";
import * as supportedCapabilities from "../../../utils/api/samples/supported-capabilities.json";
import { queryComments } from "./useComments.actions";
import { UseCommentsOptions } from "./useComments.types";

export const USE_COMMENTS_FEED_QUERY_KEY = 'USE_COMMENTS_FEED';

const useComments = ({ mediaId }: UseCommentsOptions) => {
  
  const form = {
    inventory_source: 'media_or_ad',
    analytics_module: 'comments_v2_feed_timeline',
    can_support_threading: true,
    is_carousel_bumped_post: false,
    feed_position: 0
  }

  return useQuery<MediaCommentsFeedResponse, Error>(
    [USE_COMMENTS_FEED_QUERY_KEY],
    () => queryComments({ mediaId, form })
)
}

export default useComments
import { Chance } from "chance";
import { useQuery } from "react-query"
import { useSelector } from "react-redux";
import { deviceSelector, secretsSelector } from "../../../store/authentication/authenticationReducerSelectors";
import { TimelineFeedSuccessResponseData } from "../../../types/api/endpoints/feed/timeline.feed.types"
import { Secrets } from "../../../types/models/authentication/secrets.types";
import { Device } from "../../../types/models/device/device.types";
import api from "../../../utils/api/api";
import { queryDiscoverFeed } from "./useDiscoverFeed.actions";
import * as supportedCapabilities from "../../../utils/api/samples/supported-capabilities.json";
import { DiscoverFeedResponseRootObject } from "../../../types/api/endpoints/feed/discover.feed.types";

export const USE_DISCOVER_FEED_QUERY_KEY = 'USE_DISCOVER_FEED';

const useDiscoverFeed = () => {
  const device = useSelector(deviceSelector) as Device;
  
  const form = {
    phone_id: device.phoneId,
    module: 'self_profile',
    _uuid: device.uuid
  }

  return useQuery<DiscoverFeedResponseRootObject, Error>(
    [USE_DISCOVER_FEED_QUERY_KEY],
    () => queryDiscoverFeed({ form })
)
}

export default useDiscoverFeed
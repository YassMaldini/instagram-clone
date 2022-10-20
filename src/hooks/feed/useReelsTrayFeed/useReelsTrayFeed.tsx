import { Chance } from "chance";
import { useQuery } from "react-query"
import { useSelector } from "react-redux";
import { deviceSelector, secretsSelector } from "../../../store/authentication/authenticationReducerSelectors";
import { ReelsTrayFeedSuccessResponseData } from "../../../types/api/endpoints/feed/reelsTray.feed.types";
import { TimelineFeedSuccessResponseData } from "../../../types/api/endpoints/feed/timeline.feed.types"
import { Secrets } from "../../../types/models/authentication/secrets.types";
import { Device } from "../../../types/models/device/device.types";
import api from "../../../utils/api/api";
import { queryReelsTrayFeed } from "./useReelsTrayFeed.actions";
import * as supportedCapabilities from "../../../utils/api/samples/supported-capabilities.json";

export const USE_REELS_TRAY_FEED_QUERY_KEY = 'USE_REELS_TRAY_FEED';

const useReelsTrayFeed = () => {
  const secrets = useSelector(secretsSelector) as Secrets;
  const device = useSelector(deviceSelector) as Device;

  const batteryLevel = () => {
    const chance = new Chance(device.deviceId);
    const percentTime = chance.integer({ min: 200, max: 600 });
    return 100 - (Math.round(Date.now() / 1000 / percentTime) % 100);
  }

  const timezoneOffset = String(new Date().getTimezoneOffset() * -60)
  
  const form = {
    supported_capabilities_new: supportedCapabilities,
    reason: 'cold_start_fetch',
    timezoneOffset,
    page_size: 50,
    _uuid: device.uuid
  }

  return useQuery<ReelsTrayFeedSuccessResponseData, Error>(
    [USE_REELS_TRAY_FEED_QUERY_KEY],
    () => queryReelsTrayFeed(form)
)
}

export default useReelsTrayFeed
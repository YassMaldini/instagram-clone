import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { deviceSelector } from '../../../store/authentication/authenticationReducerSelectors';
import { ReelsTrayFeedSuccessResponseData } from '../../../types/api/endpoints/feed/reelsTray.feed.types';
import { Device } from '../../../types/models/device/device.types';
import { queryReelsTrayFeed } from './useReelsTrayFeed.actions';
import * as supportedCapabilities from '../../../utils/api/samples/supported-capabilities.json';

export const USE_REELS_TRAY_FEED_QUERY_KEY = 'USE_REELS_TRAY_FEED';

const useReelsTrayFeed = () => {
  const device = useSelector(deviceSelector) as Device;

  const timezoneOffset = String(new Date().getTimezoneOffset() * -60);

  const form = {
    supported_capabilities_new: supportedCapabilities,
    reason: 'cold_start_fetch',
    timezoneOffset,
    page_size: 50,
    _uuid: device.uuid,
  };

  return useQuery<ReelsTrayFeedSuccessResponseData, Error>([USE_REELS_TRAY_FEED_QUERY_KEY], () =>
    queryReelsTrayFeed(form)
  );
};

export default useReelsTrayFeed;

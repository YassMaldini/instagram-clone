import { Chance } from 'chance';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import {
  deviceSelector,
  secretsSelector,
} from '../../../store/authentication/authenticationReducerSelectors';
import { TimelineFeedSuccessResponseData } from '../../../types/api/endpoints/feed/timeline.feed.types';
import { Secrets } from '../../../types/models/authentication/secrets.types';
import { Device } from '../../../types/models/device/device.types';
import api from '../../../utils/api/api';
import { queryTimelineFeed } from './useTimelineFeed.actions';

export const USE_TIMELINE_FEED_QUERY_KEY = 'USE_TIMELINE_FEED';

const useTimelineFeed = () => {
  const secrets = useSelector(secretsSelector) as Secrets;
  const device = useSelector(deviceSelector) as Device;

  const batteryLevel = () => {
    const chance = new Chance(device.deviceId);
    const percentTime = chance.integer({ min: 200, max: 600 });
    return 100 - (Math.round(Date.now() / 1000 / percentTime) % 100);
  };

  const timezoneOffset = String(new Date().getTimezoneOffset() * -60);

  const form = {
    is_prefetch: '0',
    feed_view_info: '',
    seen_posts: '',
    phone_id: device.phoneId,
    is_pull_to_refresh: '0',
    battery_level: batteryLevel(),
    timezone_offset: timezoneOffset,
    client_session_id: secrets.clientSessionId,
    device_id: device.uuid,
    _uuid: device.uuid,
    is_charging: 0,
    is_async_ads_in_headload_enabled: 0,
    rti_delivery_backend: 0,
    is_async_ads_double_request: 0,
    will_sound_on: 0,
    is_async_ads_rti: 0,
    reason: 'cold_start_fetch',
  };

  return useQuery<TimelineFeedSuccessResponseData, Error>([USE_TIMELINE_FEED_QUERY_KEY], () =>
    queryTimelineFeed(form)
  );
};

export default useTimelineFeed;

import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { deviceSelector } from '../../../store/authentication/authenticationReducerSelectors';
import { Device } from '../../../types/models/device/device.types';
import { queryDiscoverFeed } from './useDiscoverFeed.actions';
import { DiscoverFeedResponseRootObject } from '../../../types/api/endpoints/feed/discover.feed.types';

export const USE_DISCOVER_FEED_QUERY_KEY = 'USE_DISCOVER_FEED';

const useDiscoverFeed = () => {
  const device = useSelector(deviceSelector) as Device;

  const form = {
    phone_id: device.phoneId,
    module: 'self_profile',
    _uuid: device.uuid,
  };

  return useQuery<DiscoverFeedResponseRootObject, Error>([USE_DISCOVER_FEED_QUERY_KEY], () =>
    queryDiscoverFeed({ form })
  );
};

export default useDiscoverFeed;

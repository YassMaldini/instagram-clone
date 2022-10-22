import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { deviceSelector } from '../../../store/authentication/authenticationReducerSelectors';
import { Device } from '../../../types/models/device/device.types';
import { TopicalExploreFeedResponseRootObject } from '../../../types/api/endpoints/feed/topicalDiscover.feed.types';
import { queryTopicalExploreFeed } from './useTopicalExploreFeed.actions';

export const USE_TOPICAL_EXPLORE_FEED_QUERY_KEY = 'USE_TOPICAL_EXPLORE_FEED';

const useTopicalExploreFeed = () => {
  const device = useSelector(deviceSelector) as Device;

  const options = {
    is_prefetch: true,
    omit_cover_media: true,
    is_ptr: true,
    use_sectional_payload: true,
    reels_configuration: 'hide_hero',
    timezone_offset: 7200
  };

  return useQuery<TopicalExploreFeedResponseRootObject, Error>([USE_TOPICAL_EXPLORE_FEED_QUERY_KEY], () =>
    queryTopicalExploreFeed({ options })
  );
};

export default useTopicalExploreFeed;

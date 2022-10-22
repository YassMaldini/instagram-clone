import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { deviceSelector } from '../../../store/authentication/authenticationReducerSelectors';
import { Device } from '../../../types/models/device/device.types';
import { queryChainingExperienceFeed } from './useChainingExperienceFeed.actions';
import { ChainingExperienceFeedResponseRootObject } from '../../../types/api/endpoints/feed/chainingExperience.feed.types';
import { UseChainingExperienceFeedOptions } from './useChainingExperienceFeed.types';
import { randomIntFromInterval } from '../../../utils/numbers/randomIntFromInterval';

export const USE_CHAINING_EXPLORE_FEED_QUERY_KEY = 'USE_CHAINING_EXPLORE_FEED';

const useChainingExperienceFeed = ({ media }: UseChainingExperienceFeedOptions) => {
  const device = useSelector(deviceSelector) as Device;

  const form = {
    surface: "explore_media_grid",
    explore_source_token: media.explore_source_token,
    phone_id: device.phoneId,
    session_time_spent: randomIntFromInterval(10, 30),
    trigger: "tap",
    media_id: media.id,
    battery_level: randomIntFromInterval(10, 100),
    entry_point: "topical_explore",
    has_user_set_breaks: false,
    _uuid: device.uuid,
    panavision_mode: "none",
    take_a_break_nudge_last_seen_time: 0,
    topic_cluster_id: "explore_all:0",
    is_charging: 0,
    is_dark_mode: 1,
    will_sound_on: 0,
    author_id: media.user.pk,
    media_type: media.media_type,
    paging_token: {
      total_num_items: 1,
      last_organic_item: {
        id: media.id,
        index: 0
      }
    }
  };

  return useQuery<ChainingExperienceFeedResponseRootObject, Error>([USE_CHAINING_EXPLORE_FEED_QUERY_KEY], () =>
    queryChainingExperienceFeed({ form })
  );
};

export default useChainingExperienceFeed;

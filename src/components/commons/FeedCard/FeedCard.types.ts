import { Dispatch, SetStateAction } from 'react';
import { FeedMedia_or_ad } from '../../../types/api/endpoints/feed/media.feed.types';

export interface FeedCardContextProps {
  timelineFeedItem: FeedMedia_or_ad;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}

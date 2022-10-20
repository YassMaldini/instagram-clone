import { Dispatch, RefObject, SetStateAction } from "react";
import { TextInput as TNTextInput, ViewToken } from "react-native"
import { ChainingExperienceFeedResponseMedia_or_ad } from "../../../types/api/endpoints/feed/chainingExperience.feed.types";
import { FeedMedia_or_ad } from "../../../types/api/endpoints/feed/media.feed.types";
import { TimelineFeed, TimelineFeedResponseMedia_or_ad } from "../../../types/api/endpoints/feed/timeline.feed.types";

export interface FeedCardProps extends FeedMedia_or_ad {}

export interface FeedCardContextProps {
  timelineFeedItem: FeedMedia_or_ad;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
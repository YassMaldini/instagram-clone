import { Dispatch, RefObject, SetStateAction } from "react";
import { TextInput as TNTextInput, ViewToken } from "react-native"
import { ChainingExperienceFeedResponseMedia_or_ad } from "../../../types/api/endpoints/feed/chainingExperience.types";
import { FeedMedia_or_ad } from "../../../types/api/endpoints/feed/feed.types";
import { TimelineFeed, TimelineFeedResponseMedia_or_ad } from "../../../types/api/endpoints/feed/timeline.types";

export interface FeedCardProps extends FeedMedia_or_ad {}

export interface FeedCardContextProps {
  timelineFeedItem: FeedMedia_or_ad;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
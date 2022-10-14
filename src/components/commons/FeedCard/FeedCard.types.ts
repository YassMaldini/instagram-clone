import { Dispatch, RefObject, SetStateAction } from "react";
import { TextInput as TNTextInput, ViewToken } from "react-native"
import { TimelineFeed, TimelineFeedResponseMedia_or_ad } from "../../../types/api/endpoints/feed/timeline.types";

export interface FeedCardProps extends TimelineFeedResponseMedia_or_ad {}

export interface FeedCardContextProps {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
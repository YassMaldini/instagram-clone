import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dispatch, SetStateAction } from "react";
import { ChainingExperienceFeedResponseRootObject } from "../../../../types/api/endpoints/feed/chainingExperience.feed.types";
import { SearchStackParamsList } from "../../../navigation/SearchStack/SearchStack.types";

export type ExploreScreenProps =  NativeStackScreenProps<SearchStackParamsList, 'ExploreScreen'>

export interface ExploreScreenContextProps {
  chainingExperienceFeed: ChainingExperienceFeedResponseRootObject;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
}
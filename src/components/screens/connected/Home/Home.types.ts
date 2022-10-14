import { ReelsTrayFeedSuccessResponseData } from "../../../../types/api/endpoints/feed/reelsTray.types";
import { TimelineFeedSuccessResponseData } from "../../../../types/api/endpoints/feed/timeline.types";

export interface HomeContextProps {
  timeline?: TimelineFeedSuccessResponseData;
  reelsTray?: ReelsTrayFeedSuccessResponseData;
  isLoading: boolean;
  error: Error | null;
}
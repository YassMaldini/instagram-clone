import { useMemo } from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import Box from "../../../designSystem/Box/Box";
import TimelineFeed from "../../../commons/TimelineFeed/TimelineFeed";
import useTimelineFeed from "../../../../hooks/feed/useTimelineFeed/useTimelineFeed";
import useReelsTrayFeed from "../../../../hooks/feed/useReelsTrayFeed/useReelsTrayFeed";
import { useMergedStatesFromFetchers } from "../../../../hooks/useMergedStatesFromFetchers/useMergedStatesFromFetchers";
import { HomeContextProps, HomeProps } from "./Home.types";
import { HomeContext } from "./Home.context";
import { timelineSample } from "../../../../utils/api/samples/timelineSample"
import { reelsTraySample } from "../../../../utils/api/samples/reelsTraySample"
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const {
    data: timeline,
    isLoading: isTimelineLoading,
    error: timelineError
  } = useTimelineFeed();

  const {
    data: reelsTray,
    isLoading: isReelsTrayLoading,
    error: reelsTrayError
  } = useReelsTrayFeed();

  const { isLoading, error } = useMergedStatesFromFetchers({
    loadings: [isTimelineLoading, isReelsTrayLoading,],
    errors: [timelineError, reelsTrayError]
  });

  const contextValue = useMemo<HomeContextProps>(
    () => ({
      timeline,
      reelsTray,
      isLoading,
      error
    }),
    // [
    //   timeline,
    //   reelsTray,
    //   isLoading,
    //   error
    // ]
    [
      timeline,
      reelsTray
    ]
  );

  return (
    <HomeContext.Provider value={contextValue}>
      <Box flex={1}>
        <HomeHeader />
        <TimelineFeed />
      </Box>
    </HomeContext.Provider>
  )
}

export default Home
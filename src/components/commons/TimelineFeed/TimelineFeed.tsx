import { useState, useContext, useCallback, useEffect } from 'react';
import { ActivityIndicator } from "react-native"
import FeedCard from "../FeedCard/FeedCard"
import Box from "../../designSystem/Box/Box"
import { FlashList } from "@shopify/flash-list";
import useTimelineFeed from '../../../hooks/feed/useTimelineFeed/useTimelineFeed';
import { timelineSample } from "../../../utils/api/samples/timelineSample"
import { reelsTraySample } from "../../../utils/api/samples/reelsTraySample"
import Text from '../../designSystem/Text/Text';
import ReelsTrayList from '../ReelsTrayList/ReelsTrayList';
import useReelsTrayFeed from '../../../hooks/feed/useReelsTrayFeed/useReelsTrayFeed';
import { useMergedStatesFromFetchers } from '../../../hooks/useMergedStatesFromFetchers/useMergedStatesFromFetchers';
import { HomeContext } from '../../screens/connected/Home/Home.context';

const TimelineFeed = () => {
  const { timeline, reelsTray, isLoading, error } = useContext(HomeContext);

  const renderEmptyComponent = useCallback(() => {
    if (isLoading) {
      return (
        <Box marginTop="l" justifyContent="center">
          <ActivityIndicator />
        </Box>
      );
    }
    return <Text>Nothing...</Text>;
  }, [isLoading]);

  return (
    <Box flex={1}>
      <FlashList
        data={timeline?.feed_items}
        renderItem={({ item, index }) => (
          <Box flex={1}>
            <FeedCard
              {...item.media_or_ad}
            />
          </Box>
        )}
        estimatedItemSize={20}
        ListHeaderComponent={reelsTray?.tray && <ReelsTrayList reelsTray={reelsTray.tray} />}
        ListEmptyComponent={renderEmptyComponent}
      />
    </Box>
  )
}

export default TimelineFeed
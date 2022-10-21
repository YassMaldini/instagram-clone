import { useContext, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import FeedCard from '../FeedCard/FeedCard';
import Box from '../../designSystem/Box/Box';
import { FlashList } from '@shopify/flash-list';
import Text from '../../designSystem/Text/Text';
import ReelsTrayList from '../ReelsTrayList/ReelsTrayList';
import { HomeContext } from '../../screens/connected/Home/HomeScreen.context';

const TimelineFeed = () => {
  const { timeline, reelsTray, isLoading } = useContext(HomeContext);

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
        renderItem={({ item }) => (
          <Box flex={1}>
            <FeedCard {...item.media_or_ad} />
          </Box>
        )}
        estimatedItemSize={20}
        ListHeaderComponent={reelsTray?.tray && <ReelsTrayList reelsTray={reelsTray.tray} />}
        ListEmptyComponent={renderEmptyComponent}
      />
    </Box>
  );
};

export default TimelineFeed;

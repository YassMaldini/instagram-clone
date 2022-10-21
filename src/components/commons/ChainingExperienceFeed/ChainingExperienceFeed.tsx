import { FlashList } from '@shopify/flash-list';
import { useContext } from 'react';
import Box from '../../designSystem/Box/Box';
import { ExploreScreenContext } from '../../screens/connected/ExploreScreen/ExploreScreen.context';
import FeedCard from '../FeedCard/FeedCard';

const ChainingExperienceFeed = () => {
  // const carousel = useRef<Carousel<ChainingExperienceFeedResponseFeedItemsItem>>(null);
  const { chainingExperienceFeed } = useContext(ExploreScreenContext);

  return (
    <Box flex={1}>
      <FlashList
        data={chainingExperienceFeed?.items}
        renderItem={({ item }) => (
          <Box flex={1}>
            <FeedCard {...item.media_or_ad} />
          </Box>
        )}
        estimatedItemSize={20}
        // ListEmptyComponent={renderEmptyComponent}
      />
      {/* <Carousel
            layout={"default"}
            vertical
            ref={carousel}
            data={chainingExperienceFeed.items}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width}
            sliderHeight={Dimensions.get('window').height}
            itemHeight={Dimensions.get('window').height}
            nestedScrollEnabled={true}
            activeSlideOffset={400}
            renderItem={({ item }) => {
              return <FeedCard {...item.media_or_ad} />
            }}
            onSnapToItem={index => setActiveIndex(index)}
          /> */}
    </Box>
  );
};

export default ChainingExperienceFeed;

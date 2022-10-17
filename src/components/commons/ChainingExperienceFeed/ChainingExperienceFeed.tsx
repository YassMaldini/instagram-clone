import { FlashList } from "@shopify/flash-list";
import { useContext, useRef } from "react";
import { Dimensions, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";
import { ChainingExperienceFeedResponseFeedItemsItem } from "../../../types/api/endpoints/feed/chainingExperience.types";
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import { ExploreScreenContext } from "../../screens/connected/ExploreScreen/ExploreScreen.context";
import FeedCard from "../FeedCard/FeedCard";

const ChainingExperienceFeed = () => {
  // const carousel = useRef<Carousel<ChainingExperienceFeedResponseFeedItemsItem>>(null);
  const { chainingExperienceFeed, setActiveIndex } = useContext(ExploreScreenContext);

  return (
      <Box flex={1}>
        <FlashList
          data={chainingExperienceFeed?.items}
          renderItem={({ item, index }) => (
            <Box flex={1}>
              <FeedCard
                {...item.media_or_ad}
              />
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
  )
}

export default ChainingExperienceFeed
import Image from '../../../designSystem/Image/Image';
import { useContext, useRef } from 'react';
import { Dimensions } from 'react-native';
import Video from '../../../designSystem/Video/Video';
import { ResizeMode } from 'expo-av';
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import Box from '../../../designSystem/Box/Box';
import { FeedCardContext } from '../FeedCard.context';
import { FeedResponseCarouselMediaItem } from '../../../../types/api/endpoints/feed/media.feed.types';

const FeedCardMedia = () => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const { timelineFeedItem, setActiveIndex } = useContext(FeedCardContext);

  // const onPressPagination = (index: number) => {
  //   ref.current?.scrollTo({
  //     /**
  //      * Calculate the difference between the current index and the target index
  //      * to ensure that the carousel scrolls to the nearest index
  //      */
  //     count: index - progress.value,
  //     animated: true,
  //   });
  // };

  if (timelineFeedItem.media_type === 1 && timelineFeedItem.image_versions2) {
    return (
      <Image
        flex={1}
        width={Dimensions.get('window').width}
        aspectRatio={
          timelineFeedItem.image_versions2.candidates[0].width /
          timelineFeedItem.image_versions2.candidates[0].height
        }
        source={{ uri: timelineFeedItem.image_versions2.candidates[0].url }}
      />
    );
  }
  if (timelineFeedItem.media_type === 2 && timelineFeedItem.video_versions) {
    return (
      <Video
        source={{ uri: timelineFeedItem.video_versions[0].url }}
        style={{
          width: Dimensions.get('screen').width,
          aspectRatio:
            timelineFeedItem.video_versions[0].width / timelineFeedItem.video_versions[0].height,
        }}
        isLooping
        isMuted
        usePoster
        resizeMode={ResizeMode.CONTAIN}
        posterSource={
          timelineFeedItem.image_versions2 && {
            uri: timelineFeedItem.image_versions2.candidates[0].url,
          }
        }
      />
    );
  }
  if (timelineFeedItem.media_type === 8 && timelineFeedItem.carousel_media) {
    return (
      <Carousel
        ref={ref}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').width / 2}
        data={timelineFeedItem.carousel_media}
        onProgressChange={progress}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => {
          if (item.media_type === 1 && item.image_versions2) {
            return (
              <Image
                flex={1}
                width={Dimensions.get('window').width}
                aspectRatio={
                  item.image_versions2.candidates[0].width /
                  item.image_versions2.candidates[0].height
                }
                source={{ uri: item.image_versions2.candidates[0].url }}
              />
            );
          } else if (item.media_type === 2 && item.video_versions) {
            // const lastIndex = item.video_versions.length - 1;
            return (
              <Video
                source={{ uri: item.video_versions[0].url }}
                style={{
                  width: Dimensions.get('screen').width,
                  aspectRatio: item.video_versions[0].width / item.video_versions[0].height,
                }}
                isLooping
                usePoster
                resizeMode={ResizeMode.CONTAIN}
                posterSource={
                  item.image_versions2 && { uri: item.image_versions2.candidates[0].url }
                }
              />
            );
          } else {
            return <Box />;
          }
        }}
      />
    );
  }
  return <Box />;
};

export default FeedCardMedia;

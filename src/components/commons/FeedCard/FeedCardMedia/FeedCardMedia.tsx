import Image from "../../../designSystem/Image/Image"
import { FeedCardProps } from "../FeedCard.types"
import { useContext, useRef, useState } from "react"
import { Dimensions } from "react-native"
import Video from "../../../designSystem/Video/Video"
import { ResizeMode } from "expo-av"
import Carousel from "react-native-snap-carousel"
import { TimelineFeedResponseCarouselMediaItem } from "../../../../types/api/endpoints/feed/timeline.types"
import Box from "../../../designSystem/Box/Box"
import { FeedCardContext } from "../FeedCard.context"

const FeedCardMedia = (timelineFeed: FeedCardProps) => {
  const carousel = useRef<Carousel<TimelineFeedResponseCarouselMediaItem>>(null);
  const { activeIndex, setActiveIndex } = useContext(FeedCardContext);

  if (timelineFeed.media_type === 1 && timelineFeed.image_versions2) {
    return (
      <Image
        flex={1}
        width={Dimensions.get('window').width}
        aspectRatio={timelineFeed.image_versions2.candidates[0].width / timelineFeed.image_versions2.candidates[0].height}
        source={{ uri: timelineFeed.image_versions2.candidates[0].url }}
      />
    )
  }
  if (timelineFeed.media_type === 2 && timelineFeed.video_versions) {
    return (
      <Video
        source={{ uri: timelineFeed.video_versions[0].url }}
        style={{
          width: Dimensions.get('screen').width,
          aspectRatio: timelineFeed.video_versions[0].width / timelineFeed.video_versions[0].height
        }}
        isLooping
        usePoster
        resizeMode={ResizeMode.CONTAIN}
        posterSource={timelineFeed.image_versions2 && { uri: timelineFeed.image_versions2.candidates[0].url }}
      />
    )
  }
  if (timelineFeed.media_type === 8 && timelineFeed.carousel_media) {
    return (
      <Carousel
          layout={"default"}
          ref={carousel}
          data={timelineFeed.carousel_media}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          activeSlideOffset={100}
          renderItem={({ item }) => {
            if (item.media_type === 1 && item.image_versions2) {
              return (
                <Image
                  flex={1}
                  width={Dimensions.get('window').width}
                  aspectRatio={item.image_versions2.candidates[0].width / item.image_versions2.candidates[0].height}
                  source={{ uri: item.image_versions2.candidates[0].url }}
                />
              )
            } else if (item.media_type === 2 && item.video_versions) {
              const lastIndex = item.video_versions.length - 1
              return (
                <Video
                  source={{ uri: item.video_versions[0].url }}
                  style={{
                    width: Dimensions.get('screen').width,
                    aspectRatio: item.video_versions[0].width / item.video_versions[0].height
                  }}
                  isLooping
                  usePoster
                  resizeMode={ResizeMode.CONTAIN}
                  posterSource={item.image_versions2 && { uri: item.image_versions2.candidates[0].url }}
                />
              )
            } else {
              return <Box />
            }
          }}
          onSnapToItem={index => setActiveIndex(index)}
        />
    )
  }
  return <Box />
}

export default FeedCardMedia
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import ronaldinho from "../../../../assets/images/ronaldinho_post.png"
import FeedCardHeader from "./FeedCardHeader/FeedCardHeader"
import Pressable from "../../designSystem/Pressable/Pressable"
import { StyleSheet } from "react-native"
import { FeedCardContextProps, FeedCardProps } from "./FeedCard.types"
import { TimelineFeed, TimelineFeedResponseCarouselMediaItem, TimelineFeedResponseMedia_or_ad } from "../../../types/api/endpoints/feed/timeline.types"
import Image from "../../designSystem/Image/Image"
import thousandFormatter from "../../../utils/numbers/thousandFormatter"
import FeedCardCaption from "./FeedCardCaption/FeedCardCaption"
import { Dimensions, Button } from "react-native"
import { useRef, useState, LegacyRef, useEffect, memo, useMemo } from "react"
import Carousel from "react-native-snap-carousel"
import { Image as RNImage } from "react-native-svg"
import Video from "../../designSystem/Video/Video"
import { ResizeMode } from "expo-av"
import FeedCardActions from "./FeedCardActions/FeedCardActions"
import { Gesture } from "react-native-gesture-handler"
import FeedCardMedia from "./FeedCardMedia/FeedCardMedia"
import { FeedCardContext } from "./FeedCard.context"
import moment from "moment"

const FeedCard = (timelineFeed: FeedCardProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const contextValue = useMemo<FeedCardContextProps>(
    () => ({ activeIndex, setActiveIndex }),
    [activeIndex, setActiveIndex]
  )

  return (
    <FeedCardContext.Provider value={contextValue}>
      <Box flex={1} backgroundColor="primaryBackground">
        <FeedCardHeader {...timelineFeed} />
        <FeedCardMedia {...timelineFeed} />
        <FeedCardActions {...timelineFeed} />
        {timelineFeed.caption && <FeedCardCaption {...timelineFeed.caption} />}
        <Pressable>
          <Text marginLeft="m" color="secondaryText">Voir les {timelineFeed.comment_count && thousandFormatter(timelineFeed.comment_count)} commentaires</Text>
        </Pressable>
        <Text marginLeft="m" color="secondaryText" fontSize={12}>{moment.unix(timelineFeed.taken_at as number).fromNow()}</Text>
      </Box>
    </FeedCardContext.Provider>
  )
}

export default FeedCard
import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import ronaldinho from "../../../../assets/images/ronaldinho_post.png"
import FeedCardHeader from "./FeedCardHeader/FeedCardHeader"
import Pressable from "../../designSystem/Pressable/Pressable"
import { StyleSheet } from "react-native"
import { FeedCardContextProps, FeedCardProps } from "./FeedCard.types"
import { TimelineFeed, TimelineFeedResponseCarouselMediaItem, TimelineFeedResponseMedia_or_ad } from "../../../types/api/endpoints/feed/timeline.feed.types"
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
import { useNavigation } from "@react-navigation/native"
import { HomeProps } from "../../screens/connected/Home/HomeScreen.types"

const FeedCard = (timelineFeedItem: FeedCardProps) => {
  const { navigate } = useNavigation<HomeProps['navigation']>();
  const [activeIndex, setActiveIndex] = useState(0);

  const contextValue = useMemo<FeedCardContextProps>(
    () => ({ timelineFeedItem, activeIndex, setActiveIndex }),
    [timelineFeedItem, activeIndex, setActiveIndex]
  )

  return (
    <FeedCardContext.Provider value={contextValue}>
      <Box flex={1} backgroundColor="primaryBackground">
        {timelineFeedItem.user && <FeedCardHeader />}
        <FeedCardMedia />
        <FeedCardActions />
        {timelineFeedItem.caption && <FeedCardCaption />}
        {timelineFeedItem.comment_count > 0 &&
          <Pressable onPress={() => navigate('Comments', { mediaId: timelineFeedItem.id })}>
            <Text marginLeft="m" color="secondaryText">Voir les {thousandFormatter(timelineFeedItem.comment_count)} commentaires</Text>
          </Pressable>
        }
        <Text marginLeft="m" color="secondaryText" fontSize={12}>{moment.unix(timelineFeedItem.taken_at as number).fromNow()}</Text>
      </Box>
    </FeedCardContext.Provider>
  )
}

export default FeedCard

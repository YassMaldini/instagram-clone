import { useNavigation } from "@react-navigation/native"
import { ResizeMode } from "expo-av"
import { Dimensions } from "react-native"
import { TopicalExploreFeedResponseSectionalItemsItem } from "../../../types/api/endpoints/feed/topicalDiscover.types"
import Box from "../../designSystem/Box/Box"
import Image from "../../designSystem/Image/Image"
import Pressable from "../../designSystem/Pressable/Pressable"
import { PressableProps } from "../../designSystem/Pressable/Pressable.types"
import Video from "../../designSystem/Video/Video"
import { ExploreScreenProps } from "../../screens/connected/ExploreScreen/ExploreScreen.types"
import { SearchScreenProps } from "../../screens/connected/SearchScreen/SearchScreen.types"

const FeedGridDoubleItem = (
  { isFirstItem, ...sectionalItems }: TopicalExploreFeedResponseSectionalItemsItem & { isFirstItem?: boolean }
) => {
  const { navigate } = useNavigation<SearchScreenProps['navigation']>()

  const THIRD = (Dimensions.get('window').width / 3)
  const MARGIN = (THIRD / THIRD)
  const SIZE = THIRD - MARGIN

  const items = sectionalItems.layout_content.one_by_two_item?.clips.items

  return (
    <>
      {
        items?.map(({ media }, index) => (
          <Pressable
            backgroundColor="highlightBackground"
            width={SIZE}
            height={(THIRD * 2) - MARGIN}
            style={{ marginBottom: MARGIN }}
            key={index}
            onPress={() => navigate('ExploreScreen', { mediaId: media.id })}
          >
            {/* <Image
              source={{ uri: media.image_versions2.candidates[0].url }}
              width={SIZE}
              height={(THIRD * 2) - MARGIN}
            /> */}
            <Video
              source={{ uri: media.video_versions[0].url }}
              style={{
                width: SIZE,
                height: (THIRD * 2) - MARGIN
              }}
              isLooping
              usePoster
              resizeMode={ResizeMode.COVER}
              posterSource={media.image_versions2 && { uri: media.image_versions2.candidates[0].url }}
              shouldPlay={Boolean(isFirstItem)}
              isPlayable={false}
              pauseEnabled={false}
            />
          </Pressable>
        ))
      }
    </>
  )
}

export default FeedGridDoubleItem
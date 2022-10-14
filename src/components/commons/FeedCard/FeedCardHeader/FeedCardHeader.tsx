import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image"
import ronaldinho from "../../../.././../assets/images/ronaldinho.jpg"
import OptionsIcon from "../../../.././../assets/vectors/options.svg"
import Text from "../../../designSystem/Text/Text"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Pressable from "../../../designSystem/Pressable/Pressable"
import { TimelineFeed } from "../../../../types/api/endpoints/feed/timeline.types"
import { FeedCardHeaderProps } from "./FeedCardHeader.types"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useCallback, useMemo, useRef } from "react"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"
import FeedCardModal from "../FeedCardModal/FeedCardModal"
import { FeedCardProps } from "../FeedCard.types"

const FeedCardHeader = (timelineFeed: FeedCardProps) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <Box flex={1}>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" padding="m">
        <Box flexDirection="row" alignItems="center">
          <Image source={{ uri: timelineFeed.user.profile_pic_url }} width={32} height={32} borderRadius='l' marginRight="m" />
          <Box>
            <Text fontWeight="800">{timelineFeed.user.username}</Text>
            {timelineFeed.location && 
              <Text fontSize={13} lineHeight={13} fontWeight="100">{timelineFeed.location.short_name}</Text>
            }
          </Box>
        </Box>
        <Pressable onPress={handlePresentModalPress}>
          <SvgIcon
            icon={OptionsIcon}
            color="primaryText"
          // style={{ transform: [{ rotate: '90deg' }] }}
          />
        </Pressable>
      </Box>
      <FeedCardModal ref={bottomSheetModalRef} {...timelineFeed.user} />
    </Box>
  )
}

export default FeedCardHeader
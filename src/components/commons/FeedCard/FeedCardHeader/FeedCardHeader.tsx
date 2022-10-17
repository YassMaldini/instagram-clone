import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image"
import OptionsIcon from "../../../.././../assets/vectors/options.svg"
import Text from "../../../designSystem/Text/Text"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Pressable from "../../../designSystem/Pressable/Pressable"
import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useCallback, useContext, useRef } from "react"
import FeedCardModal from "../FeedCardModal/FeedCardModal"
import { FeedCardContext } from "../FeedCard.context"

const FeedCardHeader = () => {
  const { timelineFeedItem } = useContext(FeedCardContext);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  return (
    <Box>
      <Box flexDirection="row" alignItems="center" justifyContent="space-between" padding="m">
        <Box flexDirection="row" alignItems="center">
          <Image source={{ uri: timelineFeedItem.user.profile_pic_url }} width={32} height={32} borderRadius='l' marginRight="m" />
          <Box>
            <Text fontWeight="800">{timelineFeedItem.user.username}</Text>
            {timelineFeedItem.location && 
              <Text fontSize={13} lineHeight={13} fontWeight="100">{timelineFeedItem.location.short_name}</Text>
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
      <FeedCardModal ref={bottomSheetModalRef} {...timelineFeedItem.user} />
    </Box>
  )
}

export default FeedCardHeader
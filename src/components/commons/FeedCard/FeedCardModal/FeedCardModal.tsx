import { BottomSheetModal, BottomSheetView, useBottomSheetDynamicSnapPoints } from "@gorhom/bottom-sheet"
import { useTheme } from "@shopify/restyle"
import { forwardRef, useCallback, useMemo, useRef } from "react"
import { Theme } from "../../../../utils/theme/theme"
import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image"
import Pressable from "../../../designSystem/Pressable/Pressable"
import Text from "../../../designSystem/Text/Text"
import FeedCardModalColumnButton from "./FeedCardModalColumnButton/FeedCardModalColumnButton"

import ShareImage from "../../../../../assets/images/share.png"
import LinkImage from "../../../../../assets/images/instagram_link_outline_44.png"
import SaveImage from "../../../../../assets/images/instagram_save_outline_44.png"
import CaptureImage from "../../../../../assets/images/instagram_multi_capture_outline_44.png"
import StarImage from "../../../../../assets/images/instagram_star_pano_outline_32.png"
import UnfollowImage from "../../../../../assets/images/instagram_user_unfollow_outline_44.png"
import InfoImage from "../../../../../assets/images/fb_ic_info_circle_outline_20.png"
import EyeOffImage from "../../../../../assets/images/instagram_eye_off_outline_44.png"
import ReportImage from "../../../../../assets/images/instagram_report_red_outline_44.png"
import FeedCardModalRowButton from "./FeedCardModalRowButton/FeedCardModalRowButton"
import { Platform } from "react-native"

const FeedCardModal = forwardRef<any, any>(
  (rest, ref) => {
    const theme = useTheme<Theme>()

    const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

    const {
      animatedHandleHeight,
      animatedSnapPoints,
      animatedContentHeight,
      handleContentLayout,
    } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

    const handleSheetChanges = useCallback((index: number) => {
      console.log('handleSheetChanges', index);
    }, []);

    return (
      <BottomSheetModal
        {...{ ref }}
        index={0}
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose
        onChange={handleSheetChanges}
        handleStyle={{
          backgroundColor: theme.colors.highlightBackground,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14
        }}
        handleIndicatorStyle={{
          backgroundColor: theme.colors.secondaryText,
          width: 40
        }}
      >
        <BottomSheetView onLayout={handleContentLayout}>
        <Box 
          flex={1} 
          backgroundColor="highlightBackground" 
          paddingBottom={Platform.OS === "android" ? "xxs" : "m"}
        >
          <Box
            paddingHorizontal="l"
            paddingTop="sToM"
            paddingBottom="l"
            flexDirection='row'
            justifyContent="space-between"
            borderBottomWidth={1}
            borderBottomColor="elevatedSeparator"
          >
            <FeedCardModalColumnButton
              imageSource={ShareImage}
              imageSize={22}
              imagePadding={17}
              label="Share"
            />
            <FeedCardModalColumnButton
              imageSource={LinkImage}
              label="Link"
            />
            <FeedCardModalColumnButton
              imageSource={SaveImage}
              label="Save"
            />
            <FeedCardModalColumnButton
              imageSource={CaptureImage}
              label="QR code"
            />
          </Box>
          <Box
            borderBottomWidth={1}
            borderBottomColor="elevatedSeparator"
          >
            <FeedCardModalRowButton 
              imageSource={StarImage} 
              label="Add to favorites"
            />
            <FeedCardModalRowButton 
              imageSource={UnfollowImage} 
              imageSize={44}
              imageMarginRight={8}
              buttonPaddingHorinzontal={6}
              label="Unfollow"
            />
          </Box>
          <Box>
            <FeedCardModalRowButton 
              imageSource={InfoImage} 
              imageSize={24}
              buttonPaddingHorinzontal={18}
              label="Why you're seeing this post"
            />
            <FeedCardModalRowButton 
              imageSource={EyeOffImage} 
              imageSize={38}
              buttonPaddingHorinzontal={9}
              label="Hide"
            />
            <FeedCardModalRowButton 
              imageSource={ReportImage} 
              imageSize={38}
              buttonPaddingHorinzontal={9}
              labelColor="errorOrDestructive"
              label="Report"
            />
          </Box>
        </Box>
        </BottomSheetView>
      </BottomSheetModal>
    )
  }
)

export default FeedCardModal
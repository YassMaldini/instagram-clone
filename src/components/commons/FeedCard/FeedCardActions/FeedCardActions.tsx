import Box from "../../../designSystem/Box/Box"
import SaveOutlineImage from "../../../.././../assets/images/instagram_save_outline_44.png"
import SaveFilledImage from "../../../.././../assets/images/instagram_save_filled_44.png"
import LikedIcon from "../../../.././../assets/vectors/liked.svg"
import LikeIcon from "../../../.././../assets/vectors/like.svg"
import ChatIcon from "../../../.././../assets/vectors/chat.svg"
import SendIcon from "../../../.././../assets/vectors/send.svg"
import SaveIcon from "../../../.././../assets/vectors/save.svg"
import Pressable from "../../../designSystem/Pressable/Pressable"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import { useContext, useState } from "react"
import { useSelector } from "react-redux"
import { deviceSelector, profileSelector } from "../../../../store/authentication/authenticationReducerSelectors"
import { Device } from "../../../../types/models/device/device.types"
import { AccountRepositoryLoginResponseLogged_in_user } from "instagram-private-api"
import { FeedCardProps } from "../FeedCard.types"
import Image from "../../../designSystem/Image/Image"
import { useMutation } from "react-query"
import { likeMutation, saveMutation, unlikeMutation, unsaveMutation } from "./FeedCardActions.actions"
import Text from "../../../designSystem/Text/Text"
import thousandFormatter from "../../../../utils/numbers/thousandFormatter"
import { MediaSuccessResponseData } from "../../../../types/api/endpoints/media/media.types"
import { FeedCardContext } from "../FeedCard.context"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"

const FeedCardActions = () => {
  const { timelineFeedItem, activeIndex } = useContext(FeedCardContext);
  const theme = useTheme<Theme>();

  const DEFAULT_SVG_ICON_SIZE = 24
  const saveIconMarginLeft = (DEFAULT_SVG_ICON_SIZE * 2) + (theme.spacing.m * 2)

  const device = useSelector(deviceSelector) as Device
  const profile = useSelector(profileSelector) as AccountRepositoryLoginResponseLogged_in_user

  const { id: mediaId, has_liked } = timelineFeedItem

  const [hasLiked, setHasLiked] = useState(has_liked);
  const [isSaved, setIsSaved] = useState(false);

  const onLikeMutationSuccess = ({ status }: MediaSuccessResponseData) => {
    if (!Boolean(status === "ok")) {
      setHasLiked(!hasLiked)
    }
  }

  const onSaveMutationSuccess = ({ status }: MediaSuccessResponseData) => {
    if (!Boolean(status === "ok")) {
      setIsSaved(!isSaved)
    }
  }

  const {
    mutate: likeMutate
  } = useMutation(likeMutation, {
    onSuccess: onLikeMutationSuccess,
    onError: () => setHasLiked(false),
    onMutate: () => setHasLiked(!hasLiked)
  })

  const {
    mutate: unlikeMutate
  } = useMutation(unlikeMutation, {
    onSuccess: onLikeMutationSuccess,
    onError: () => setHasLiked(true),
    onMutate: () => setHasLiked(!hasLiked)
  })

  const {
    mutate: saveMutate
  } = useMutation(saveMutation, {
    onSuccess: onSaveMutationSuccess,
    onError: () => setIsSaved(true),
    onMutate: () => setIsSaved(!isSaved)
  })

  const {
    mutate: unsaveMutate
  } = useMutation(unsaveMutation, {
    onSuccess: onSaveMutationSuccess,
    onError: () => setIsSaved(true),
    onMutate: () => setIsSaved(!isSaved)
  })

  return (
    <Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        paddingHorizontal="m"
      >
        <Box flexDirection="row" paddingVertical="sToM">
          {
            hasLiked
              ?
              <Pressable
                onPress={() => unlikeMutate({
                  mediaId,
                  _uid: profile.pk.toString(),
                  _uuid: device.uuid
                })}
              >
                <SvgIcon
                  icon={LikedIcon}
                  color="primaryText"
                  marginRight="m"
                />
              </Pressable>
              :
              <Pressable
                onPress={() => likeMutate({
                  mediaId,
                  _uid: profile.pk.toString(),
                  _uuid: device.uuid
                })}
              >
                <SvgIcon
                  icon={LikeIcon}
                  color="primaryText"
                  marginRight="m"
                />
              </Pressable>
          }
          <Pressable>
            <SvgIcon
              icon={ChatIcon}
              color="primaryText"
              marginRight="m"
            />
          </Pressable>
          <Pressable>
            <SvgIcon
              icon={SendIcon}
              color="primaryText"
              marginRight="m"
            />
          </Pressable>
        </Box>
        {timelineFeedItem.media_type === 8 && timelineFeedItem.carousel_media && 
          <Box flexDirection="row" alignItems="center" alignSelf="center">
          {
            timelineFeedItem.carousel_media.map((item, index) => (
              <Box 
                key={index.toString()}
                width={6} 
                height={6} 
                borderRadius="l"
                backgroundColor={index === activeIndex ? "primaryButton" : "highlightBackground"}
                marginLeft="xxs"
              />
            ))
          }
          </Box>
        }
        {
          isSaved
          ?
          <Pressable 
            marginTop="s"
            onPress={() => unsaveMutate({ 
              mediaId,
              _uid: profile.pk.toString(),
              _uuid: device.uuid
            })}
            style={{ marginLeft: saveIconMarginLeft }}
          >
            <Image source={SaveFilledImage} width={36} height={36} />
          </Pressable>
          :
          <Pressable 
            marginTop="s"
            onPress={() => saveMutate({ 
              mediaId,
              _uid: profile.pk.toString(),
              _uuid: device.uuid
            })}
            style={{ marginLeft: saveIconMarginLeft }}
          >
            <Image source={SaveOutlineImage} width={36} height={36} />
          </Pressable>
        }
      </Box>
      <Pressable>
        <Text marginLeft="m" fontWeight="800">
          {timelineFeedItem.like_count && thousandFormatter(!hasLiked ? timelineFeedItem.like_count : timelineFeedItem.like_count + 1)} J'aime
          </Text>
      </Pressable>
    </Box>
  )
}

export default FeedCardActions
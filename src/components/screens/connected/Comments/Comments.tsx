import { useRoute } from "@react-navigation/native"
import { useEffect, useRef, useState } from "react"
import useComments from "../../../../hooks/feed/useComments/useComments"
import Box from "../../../designSystem/Box/Box"
import Text from "../../../designSystem/Text/Text"
import { HomeStackParamsList } from "../../../navigation/HomeStack/HomeStack.types"
import { CommentsProps } from "./Comments.types"
import { commentsSample } from "../../../../utils/api/samples/commentsSample"
import CommentsCaption from "./CommentsFeed/CommentsCaption/CommentsCaption"
import CommentsItem from "./CommentsFeed/CommentsItem/CommentsItem"
import { FlashList } from "@shopify/flash-list"
import { KeyboardAccessoryView } from "react-native-keyboard-accessory"
import TextInput from "../../../designSystem/TextInput/TextInput"
import { TextInput as RNTextInput } from "react-native"
import Button from "../../../designSystem/Button/Button"
import { ButtonColors, ButtonVariants } from "../../../designSystem/Button/Button.types"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"
import Pressable from "../../../designSystem/Pressable/Pressable"
import Image from "../../../designSystem/Image/Image"
import TextField from "../../../designSystem/TextField/TextField"
import { useSelector } from "react-redux"
import { profileSelector } from "../../../../store/authentication/authenticationReducerSelectors"
import User from "../../../../types/models/user/User.types"
import { AccountRepositoryLoginResponseLogged_in_user } from "instagram-private-api"
import CommentsFeed from "./CommentsFeed/CommentsFeed"
import ScreenHeader from "../../../commons/ScreenHeader/ScreenHeader"
import SendArrow from "../../../../../assets/images/instagram_direct_outline_44.png"

const Comments = () => {

  return (
    <Box flex={1}>
      <ScreenHeader
        showGoBackTouchable
        title="Comments"
        rightElement={
          <Pressable>
            <Image source={SendArrow} width={42} height={42} marginRight="s" />
          </Pressable>
        }
      />
      <CommentsFeed />
    </Box>
  )
}

export default Comments
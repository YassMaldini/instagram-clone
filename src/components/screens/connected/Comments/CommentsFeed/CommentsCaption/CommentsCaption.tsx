import { useCallback, useState } from "react";
import { NativeSyntheticEvent, TextLayoutEventData } from "react-native";
import { MediaCommentsFeedResponseCaption } from "../../../../../../types/api/endpoints/media/comments.media.types";
import Box from "../../../../../designSystem/Box/Box"
import Image from "../../../../../designSystem/Image/Image";
import Pressable from "../../../../../designSystem/Pressable/Pressable";
import Text from "../../../../../designSystem/Text/Text"

const CommentsCaption = (caption: MediaCommentsFeedResponseCaption) => {

  return (
    <Box 
      flexDirection="row" 
      padding="m" 
      borderBottomWidth={1} 
      borderBottomColor="highlightBackground"
    >
      <Pressable marginRight="s">
        <Image source={{ uri: caption.user.profile_pic_url }} width={36} height={36} borderRadius="l" />
      </Pressable>
      <Box flex={1}>
        <Text>
          <Text fontWeight="800">{caption.user.username} </Text>
          {caption.text}
        </Text>
        <Text marginTop="xs" color="secondaryText">8h</Text>
      </Box>
    </Box>
  )
}

export default CommentsCaption
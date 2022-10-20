import { useTheme } from '@shopify/restyle';
import { AccountRepositoryLoginResponseLogged_in_user } from 'instagram-private-api';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  deviceSelector,
  profileSelector,
} from '../../../../../store/authentication/authenticationReducerSelectors';
import { Theme } from '../../../../../utils/theme/theme';
import Box from '../../../../designSystem/Box/Box';
import { ActivityIndicator, TextInput as RNTextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { CommentsProps } from '../Comments.types';
import { commentsSample } from '../../../../../utils/api/samples/commentsSample';
import { FlashList } from '@shopify/flash-list';
import CommentsItem from './CommentsItem/CommentsItem';
import CommentsCaption from './CommentsCaption/CommentsCaption';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import Pressable from '../../../../designSystem/Pressable/Pressable';
import { ICONS } from './CommentsFeed.data';
import Text from '../../../../designSystem/Text/Text';
import Image from '../../../../designSystem/Image/Image';
import TextInput from '../../../../designSystem/TextInput/TextInput';
import Button from '../../../../designSystem/Button/Button';
import { ButtonColors } from '../../../../designSystem/Button/Button.types';
import { useMutation } from 'react-query';
import { commentMutation } from './CommentsFeed.actions';
import { Device } from '../../../../../types/models/device/device.types';
import { MediaCommentsFeedResponseCommentsItem } from '../../../../../types/api/endpoints/media/comments.media.types';
import useComments from '../../../../../hooks/feed/useComments/useComments';
import { MediaCommentResponseComment } from '../../../../../types/api/endpoints/media/comment.media.types';
import moment from 'moment';

const CommentsFeed = () => {
  const theme = useTheme<Theme>();
  const device = useSelector(deviceSelector) as Device;
  const profile = useSelector(profileSelector) as AccountRepositoryLoginResponseLogged_in_user;
  const textInputRef = useRef<RNTextInput>(null);
  const [value, setValue] = useState('');
  const [newComments, setNewComments] = useState<Partial<MediaCommentResponseComment>[]>([]);

  const { params } = useRoute<CommentsProps['route']>();
  const { mediaId } = params;

  const { data: commentsFeed, isLoading, error } = useComments({ mediaId });

  // useEffect(() => console.log('commentsFeed.comment_likes_enabled', commentsFeed?.comment_likes_enabled), [commentsFeed])

  const { mutate: commentMutate } = useMutation(commentMutation, {
    onSuccess: ({ comment }) => {
      comment.text = comment.text.replace('"}', '');
      setNewComments([comment]);
    },
    // onError: () => setHasLiked(false),
    onMutate: ({ commentText }) => {
      const newComment: Partial<MediaCommentResponseComment> = {
        text: commentText,
        user: profile,
      };
      textInputRef.current?.blur();
      setValue('');
      setNewComments([...newComments, newComment]);
    },
  });

  return (
    <Box flex={1}>
      <FlashList
        data={commentsFeed?.comments}
        renderItem={({ item }) => <CommentsItem commentItem={item} />}
        ListEmptyComponent={<ActivityIndicator size="large" />}
        ListHeaderComponent={
          <>
            {commentsFeed?.caption && <CommentsCaption {...commentsFeed.caption} />}
            {newComments.length > 0 &&
              newComments.map((commentItem) => (
                <CommentsItem {...{ commentItem }} key={commentItem.pk} />
              ))}
          </>
        }
        estimatedItemSize={15}
      />
      <KeyboardAccessoryView
        style={{ backgroundColor: theme.colors.highlightBackground }}
        alwaysVisible={true}
        androidAdjustResize>
        {({ isKeyboardVisible }) => (
          <Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingVertical="s"
              paddingHorizontal="sToM">
              {ICONS.map((icon) => (
                <Pressable onPress={() => setValue(value + icon)} key={icon}>
                  <Text fontSize={24}>{icon}</Text>
                </Pressable>
              ))}
            </Box>
            <Box flexDirection="row" alignItems="center" paddingVertical="s">
              <Image
                source={{ uri: profile.profile_pic_url }}
                width={36}
                height={36}
                borderRadius="l"
                marginLeft="sToM"
              />
              <TextInput
                flex={1}
                ref={textInputRef}
                onChangeText={(text) => setValue(text)}
                color="primaryText"
                paddingVertical="sToM"
                {...{ value }}
              />
              {(isKeyboardVisible || value.length > 0) && (
                <Box>
                  <Button
                    color={ButtonColors.PrimaryOutline}
                    paddingHorizontal="sToM"
                    disabled={value.length === 0}
                    onPress={() =>
                      commentMutate({
                        mediaId,
                        _uid: profile.pk.toString(),
                        _uuid: device.uuid,
                        commentText: value,
                      })
                    }>
                    Post
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </KeyboardAccessoryView>
    </Box>
  );
};

export default CommentsFeed;

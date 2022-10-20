import Box from '../../../../../designSystem/Box/Box';
import Image from '../../../../../designSystem/Image/Image';
import Pressable from '../../../../../designSystem/Pressable/Pressable';
import Text from '../../../../../designSystem/Text/Text';
import { CommentsItemProps } from './CommentsItem.types';
import LikeIcon from '../../../../../../../assets/images/instagram_heart_outline_44.png';
import moment from 'moment';

const CommentsItem = ({ commentItem }: CommentsItemProps) => {
  console.log('commentItem', commentItem);
  return (
    <Box flexDirection="row" alignItems="center" padding="m">
      <Pressable marginRight="sToM">
        <Image
          source={{ uri: commentItem.user?.profile_pic_url }}
          width={36}
          height={36}
          borderRadius="l"
        />
      </Pressable>
      <Box flex={1}>
        <Text>
          <Text fontWeight="800">{commentItem.user?.username} </Text>
          {commentItem.text}
        </Text>
        <Box flexDirection="row" marginTop="xs">
          {/* <Text fontSize={13} fontWeight="800" color="secondaryText" marginRight="m">
            {moment.unix(commentItem.created_at_utc).fromNow()}
          </Text> */}
          {commentItem.created_at_utc ? (
            <Text fontSize={13} fontWeight="800" color="secondaryText" marginRight="m">
              {moment().diff(moment.unix(commentItem.created_at_utc), 'hours')}h
            </Text>
          ) : (
            <Text fontSize={13} fontWeight="800" color="secondaryText" marginRight="m">
              Posting...
            </Text>
          )}
          <Text fontSize={13} fontWeight="800" color="secondaryText" marginRight="m">
            {commentItem.comment_like_count} likes
          </Text>
          <Text fontSize={13} fontWeight="800" color="secondaryText">
            Reply
          </Text>
        </Box>
      </Box>
      <Pressable marginRight="s">
        {/* <SvgIcon 
          icon={LikeIcon}
          color="highlightBackground"
          width={14} 
          height={14} 
        /> */}
        <Image source={LikeIcon} width={18} height={18} borderRadius="l" />
      </Pressable>
    </Box>
  );
};

export default CommentsItem;

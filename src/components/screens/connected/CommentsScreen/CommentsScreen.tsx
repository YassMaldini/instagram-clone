import Box from '../../../designSystem/Box/Box';
import Pressable from '../../../designSystem/Pressable/Pressable';
import Image from '../../../designSystem/Image/Image';
import CommentsFeed from './CommentsFeed/CommentsFeed';
import ScreenHeader from '../../../commons/ScreenHeader/ScreenHeader';
import SendArrow from '../../../../../assets/images/instagram_direct_outline_44.png';

const CommentsScreen = () => {
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
  );
};

export default CommentsScreen;

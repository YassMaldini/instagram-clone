import Box from '../../../designSystem/Box/Box';
import Image from '../../../designSystem/Image/Image';
import { ReelsTrayFeedResponseTrayItem } from 'instagram-private-api';
import Text from '../../../designSystem/Text/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../../utils/theme/theme';
import Pressable from '../../../designSystem/Pressable/Pressable';

const ReelsTrayItem = ({ reelsTrayItem }: { reelsTrayItem: ReelsTrayFeedResponseTrayItem }) => {
  const theme = useTheme<Theme>();
  const IMAGE_SIZE = 60;

  return (
    <Pressable>
      <Box flexDirection="column" alignItems="center" marginRight="m">
        <Image
          source={{ uri: reelsTrayItem.user.profile_pic_url }}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          style={{ borderRadius: IMAGE_SIZE / 2 }}
          hasStory
        />
        <Text
          numberOfLines={1}
          marginTop="xs"
          fontSize={12}
          maxWidth={IMAGE_SIZE + theme.spacing.s * 2}>
          {reelsTrayItem.user.username}
        </Text>
      </Box>
    </Pressable>
  );
};

export default ReelsTrayItem;

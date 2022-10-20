import Box from '../../../../designSystem/Box/Box';
import Image from '../../../../designSystem/Image/Image';
import Pressable from '../../../../designSystem/Pressable/Pressable';
import Text from '../../../../designSystem/Text/Text';
import { FeedCardModalColumnButtonProps } from './FeedCardModalColumnButton.types';

const FeedCardModalColumnButton = ({
  imageSource,
  imageSize = 40,
  imagePadding = 8,
  label,
  onPress,
}: FeedCardModalColumnButtonProps) => {
  return (
    <Pressable {...{ onPress }}>
      <Box
        borderWidth={1}
        borderColor="secondaryText"
        borderRadius="xxl"
        alignItems="center"
        justifyContent="center"
        style={{ padding: imagePadding }}>
        <Image source={imageSource} width={imageSize} height={imageSize} />
      </Box>
      <Text textAlign="center" marginTop="xs" fontWeight="800" fontSize={12}>
        {label}
      </Text>
    </Pressable>
  );
};

export default FeedCardModalColumnButton;

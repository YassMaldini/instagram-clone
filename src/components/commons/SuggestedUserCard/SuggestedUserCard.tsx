import Box from '../../designSystem/Box/Box';
import Image from '../../designSystem/Image/Image';
import CrossIcon from '../../../../assets/images/fb_ic_cross_filled_12.png';
import { Dimensions } from 'react-native';
import Text from '../../designSystem/Text/Text';
import Button from '../../designSystem/Button/Button';
import { DiscoverFeedResponseSuggestionsItem } from '../../../types/api/endpoints/feed/discover.feed.types';

const SuggestedUserCard = (suggestion: DiscoverFeedResponseSuggestionsItem) => {
  const { user, social_context } = suggestion;
  const { username, profile_pic_url } = user;

  return (
    <Box
      position="relative"
      padding="m"
      marginRight="s"
      backgroundColor="secondaryBackground"
      borderWidth={1}
      borderRadius="xs"
      borderColor="highlightBackground"
      alignItems="center"
      width={Dimensions.get('window').width * 0.4}>
      <Box width="100%" alignItems="center">
        <Image
          source={{ uri: profile_pic_url }}
          width={86}
          height={86}
          borderRadius="xl"
          marginBottom="s"
        />
        <Text fontWeight="800">{username}</Text>
        <Text numberOfLines={2} fontSize={12} color="secondaryText" textAlign="center">
          {social_context}
          {'\n'}
        </Text>
        <Button marginTop="m" width={'100%'}>
          Follow
        </Button>
      </Box>
      <Image
        source={CrossIcon}
        width={16}
        height={16}
        style={{ position: 'absolute', top: 10, right: 10 }}
      />
    </Box>
  );
};

export default SuggestedUserCard;

import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { TopicalExploreFeedResponseMedia } from '../../../types/api/endpoints/feed/topicalDiscover.feed.types';
import { UserFeedResponseItemsItem } from '../../../types/api/endpoints/feed/user.feed.types';
import { UsertagsFeedResponseItemsItem } from '../../../types/api/endpoints/feed/usertags.feed.types';
import Image from '../../designSystem/Image/Image';
import Pressable from '../../designSystem/Pressable/Pressable';
import { SearchScreenProps } from '../../screens/connected/SearchScreen/SearchScreen.types';

const FeedGridSimpleItem = (
  media: TopicalExploreFeedResponseMedia | UserFeedResponseItemsItem | UsertagsFeedResponseItemsItem
) => {
  const { navigate } = useNavigation<SearchScreenProps['navigation']>();

  const THIRD = Dimensions.get('window').width / 3;
  const MARGIN = THIRD / THIRD;
  const SIZE = THIRD - MARGIN;

  return (
    <Pressable
      backgroundColor="primaryButton"
      width={SIZE}
      height={SIZE}
      style={{ marginBottom: MARGIN, marginRight: MARGIN }}
      onPress={() => navigate('ExploreScreen', { mediaId: media.id })}>
      {media.media_type === 8 && media.carousel_media && (
        <Image
          source={{ uri: media.carousel_media[0].image_versions2?.candidates[0].url }}
          width="100%"
          height="100%"
        />
      )}
      {media.image_versions2 && (
        <Image
          source={{ uri: media.image_versions2.candidates[0].url }}
          width="100%"
          height="100%"
        />
      )}
    </Pressable>
  );
};

export default FeedGridSimpleItem;

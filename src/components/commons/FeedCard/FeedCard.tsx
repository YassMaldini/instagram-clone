import Box from '../../designSystem/Box/Box';
import Text from '../../designSystem/Text/Text';
import FeedCardHeader from './FeedCardHeader/FeedCardHeader';
import Pressable from '../../designSystem/Pressable/Pressable';
import { FeedCardContextProps } from './FeedCard.types';
import thousandFormatter from '../../../utils/numbers/thousandFormatter';
import FeedCardCaption from './FeedCardCaption/FeedCardCaption';
import { useState, useMemo } from 'react';
import FeedCardActions from './FeedCardActions/FeedCardActions';
import FeedCardMedia from './FeedCardMedia/FeedCardMedia';
import { FeedCardContext } from './FeedCard.context';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenProps } from '../../screens/connected/Home/HomeScreen.types';
import { FeedMedia_or_ad } from '../../../types/api/endpoints/feed/media.feed.types';

const FeedCard = (timelineFeedItem: FeedMedia_or_ad) => {
  const { navigate } = useNavigation<HomeScreenProps['navigation']>();
  const [activeIndex, setActiveIndex] = useState(0);

  const contextValue = useMemo<FeedCardContextProps>(
    () => ({ timelineFeedItem, activeIndex, setActiveIndex }),
    [timelineFeedItem, activeIndex, setActiveIndex]
  );

  return (
    <FeedCardContext.Provider value={contextValue}>
      <Box flex={1} backgroundColor="primaryBackground">
        {timelineFeedItem.user && <FeedCardHeader />}
        <FeedCardMedia />
        <FeedCardActions />
        {timelineFeedItem.caption && <FeedCardCaption />}
        {timelineFeedItem.comment_count > 0 && (
          <Pressable onPress={() => navigate('CommentsScreen', { mediaId: timelineFeedItem.id })}>
            <Text marginLeft="m" color="secondaryText">
              Voir les {thousandFormatter(timelineFeedItem.comment_count)} commentaires
            </Text>
          </Pressable>
        )}
        <Text marginLeft="m" color="secondaryText" fontSize={12}>
          {moment.unix(timelineFeedItem.taken_at as number).fromNow()}
        </Text>
      </Box>
    </FeedCardContext.Provider>
  );
};

export default FeedCard;

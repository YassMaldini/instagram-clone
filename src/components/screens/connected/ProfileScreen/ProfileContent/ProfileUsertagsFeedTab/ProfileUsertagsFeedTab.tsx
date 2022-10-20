import { FlashList } from '@shopify/flash-list';
import { useCallback, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import useUserFeed from '../../../../../../hooks/feed/useUserFeed/useUserFeed';
import useUsertagsFeed from '../../../../../../hooks/feed/useUsertagsFeed/useUsertagsFeed';
import { UserInfoResponseRootObject } from '../../../../../../types/api/endpoints/users/info.user.types';
import { userFeedSample } from '../../../../../../utils/api/samples/userFeedSample';
import FeedGridSimpleItem from '../../../../../commons/FeedGridSimpleItem/FeedGridSimpleItem';
import Box from '../../../../../designSystem/Box/Box';
import Text from '../../../../../designSystem/Text/Text';
import { ProfileScreenContext } from '../../ProfileScreen.context';

const ProfileUsertagsFeedTab = () => {
  const { userInfos } = useContext(ProfileScreenContext);
  const userPk = (userInfos as UserInfoResponseRootObject).user.pk;

  const { data, isLoading, error } = useUsertagsFeed({ userPk });

  const renderEmptyComponent = useCallback(() => {
    if (isLoading) {
      return (
        <Box margin="l" justifyContent="center">
          <ActivityIndicator size="large" />
        </Box>
      );
    }
    return (
      <Box flex={1} paddingVertical="xl">
        <Text
          textAlign="center"
          fontSize={24}
          fontWeight="800"
          marginBottom="m"
          paddingHorizontal="xxxl">
          Photos and videos of you
        </Text>
        <Text paddingHorizontal="xl" textAlign="center" color="secondaryText">
          When people tag you in photos and videos, they'll appear here.
        </Text>
      </Box>
    );
  }, [isLoading]);

  return (
    <Box flex={1} flexDirection="row">
      <FlashList
        data={data?.items}
        renderItem={({ item }) => <FeedGridSimpleItem {...item} key={item.id} />}
        ListEmptyComponent={renderEmptyComponent}
        estimatedItemSize={20}
        numColumns={3}
      />
    </Box>
  );
};

export default ProfileUsertagsFeedTab;

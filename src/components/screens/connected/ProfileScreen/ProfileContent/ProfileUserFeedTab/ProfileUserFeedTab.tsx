import { FlashList } from '@shopify/flash-list';
import { useCallback, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import useUserFeed from '../../../../../../hooks/feed/useUserFeed/useUserFeed';
import { UserInfoResponseRootObject } from '../../../../../../types/api/endpoints/users/info.user.types';
import FeedGridSimpleItem from '../../../../../commons/FeedGridSimpleItem/FeedGridSimpleItem';
import Box from '../../../../../designSystem/Box/Box';
import Text from '../../../../../designSystem/Text/Text';
import { ProfileScreenContext } from '../../ProfileScreen.context';

const ProfileUserFeedTab = () => {
  const { userInfos } = useContext(ProfileScreenContext);
  const userPk = (userInfos as UserInfoResponseRootObject).user.pk;

  const { data, isLoading } = useUserFeed({ userPk });

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
          Profile
        </Text>
        <Text marginBottom="m" paddingHorizontal="xl" textAlign="center" color="secondaryText">
          When you share photos and videos, they'll appear on your profile.
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

export default ProfileUserFeedTab;

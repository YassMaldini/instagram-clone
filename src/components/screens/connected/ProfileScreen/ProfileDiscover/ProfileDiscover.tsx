import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator } from 'react-native';
import useDiscoverFeed from '../../../../../hooks/feed/useDiscoverFeed/useDiscoverFeed';
import SuggestedUserCard from '../../../../commons/SuggestedUserCard/SuggestedUserCard';
import Box from '../../../../designSystem/Box/Box';
import Text from '../../../../designSystem/Text/Text';

const ProfileDiscover = () => {
  const { data: discoverFeed, isLoading, error } = useDiscoverFeed();

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Box padding="m">
      <Box flexDirection="row" justifyContent="space-between" marginBottom="m">
        <Text fontWeight="800">Discover people</Text>
        <Text color="primaryButton" fontWeight="800">
          See all
        </Text>
      </Box>
      <Box>
        <FlashList
          data={discoverFeed?.suggested_users.suggestions}
          renderItem={({ item: suggestion }) => <SuggestedUserCard {...suggestion} />}
          horizontal
        />
      </Box>
    </Box>
  );
};

export default ProfileDiscover;

import { FlashList } from '@shopify/flash-list';
import useDiscoverFeed from '../../../../../hooks/feed/useDiscoverFeed/useDiscoverFeed';
import SuggestedUserCard from '../../../../commons/SuggestedUserCard/SuggestedUserCard';
import Box from '../../../../designSystem/Box/Box';
import Loading from '../../../../designSystem/Loading/Loading';
import Text from '../../../../designSystem/Text/Text';

const ProfileDiscover = () => {
  const { data: discoverFeed, isLoading, error } = useDiscoverFeed();

  if (isLoading) {
    return <Loading />;
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

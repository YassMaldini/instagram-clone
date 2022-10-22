import { useRoute } from '@react-navigation/native';
import { isLoading } from 'expo-font';
import { useMemo, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import useChainingExperienceFeed from '../../../../hooks/feed/useChainingExperienceFeed/useChainingExperienceFeed';
import { chainingFeedSample } from '../../../../utils/api/samples/chainingFeedSample';
import ChainingExperienceFeed from '../../../commons/ChainingExperienceFeed/ChainingExperienceFeed';
import ScreenHeader from '../../../commons/ScreenHeader/ScreenHeader';
import Box from '../../../designSystem/Box/Box';
import { ExploreScreenContext } from './ExploreScreen.context';
import { ExploreScreenProps, ExploreScreenContextProps } from './ExploreScreen.types';

const ExploreScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { params } = useRoute<ExploreScreenProps['route']>();
  const media = params?.media;

  const { data: chainingExperienceFeed, isLoading } = useChainingExperienceFeed({ media })

  // const chainingExperienceFeed = chainingFeedSample;

  const contextValue = useMemo<ExploreScreenContextProps>(
    () => ({ chainingExperienceFeed, activeIndex, setActiveIndex }),
    [chainingExperienceFeed, activeIndex, setActiveIndex]
  );

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  return (
    <ExploreScreenContext.Provider value={contextValue}>
      <Box flex={1}>
        <ScreenHeader showGoBackTouchable title="Explore" />
        <ChainingExperienceFeed />
      </Box>
    </ExploreScreenContext.Provider>
  );
};

export default ExploreScreen;

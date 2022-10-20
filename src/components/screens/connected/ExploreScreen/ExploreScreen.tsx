import { useMemo, useState } from 'react';
import { chainingFeedSample } from '../../../../utils/api/samples/chainingFeedSample';
import ChainingExperienceFeed from '../../../commons/ChainingExperienceFeed/ChainingExperienceFeed';
import ScreenHeader from '../../../commons/ScreenHeader/ScreenHeader';
import Box from '../../../designSystem/Box/Box';
import Text from '../../../designSystem/Text/Text';
import { ExploreScreenContext } from './ExploreScreen.context';
import { ExploreScreenContextProps } from './ExploreScreen.types';

const ExploreScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const chainingExperienceFeed = chainingFeedSample;

  const contextValue = useMemo<ExploreScreenContextProps>(
    () => ({ chainingExperienceFeed, activeIndex, setActiveIndex }),
    [chainingExperienceFeed, activeIndex, setActiveIndex]
  );

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

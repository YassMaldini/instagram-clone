import { useMemo, useState, useEffect } from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { loadAsync, useFonts } from 'expo-font';
import getTheme from '../../../utils/theme/theme';
import Box from '../../designSystem/Box/Box';
import Text from '../../designSystem/Text/Text';
import { AppLoaderProps } from './AppLoader.types';

const AppLoader = ({ children }: AppLoaderProps) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const theme = getTheme();

  const loadFonts = async () => {
    await loadAsync({
      'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
      'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
      'Font-Spring': require('../../../../assets/fonts/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  });

  // const [fontsLoaded] = useFonts({
  //   'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
  //   'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
  //   'Font-Spring': require('../../../../assets/fonts/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf'),
  // });

  return (
    <>
      {!fontsLoaded && <Text>Loading for fonts...</Text>}
      {fontsLoaded && <Box flex={1}>{children}</Box>}
    </>
  );
};

export default AppLoader;

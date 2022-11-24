import { useCallback, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useIsSignedIn from '../../../hooks/auth/useIsSignedIn/useIsSignedIn';
import { useConfigureApi } from '../../../hooks/useConfigureApi/useConfigureApi';
import getRootStackScreens from './getRootStackScreens/getRootStackScreens';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const RootStack = () => {
  useConfigureApi();

  const isSignedIn = useIsSignedIn();

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Font-Spring': require('../../../../assets/fonts/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const screens = useMemo(() => getRootStackScreens({ isSignedIn }), [isSignedIn]);

  if (!fontsLoaded) {
    return null;
  }

  return <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>{screens}</SafeAreaView>;
};

export default RootStack;

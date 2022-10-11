import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import { Theme } from '../../utils/theme/theme';
import RootStack from './RootStack/RootStack';
import { SafeAreaView } from 'react-native';

const Navigation = (): JSX.Element => {
  const theme = useTheme<Theme>();

  const navigationTheme = useMemo(() => {
    return {
      ...DarkTheme,
      colors: {
        ...DarkTheme.colors,
        background: theme.colors.secondaryBackground
      }
    };
  }, []);

  return (
    <NavigationContainer theme={navigationTheme}>
      <SafeAreaProvider style={{backgroundColor: theme.colors.primaryBackground}}>
        <RootStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigation;
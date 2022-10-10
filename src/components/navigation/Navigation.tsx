import { NavigationContainer } from '@react-navigation/native';
import RootStack from './RootStack/RootStack';

const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
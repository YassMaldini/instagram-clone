import { Platform } from 'react-native';
import SignIn from '../../screens/authentication/SignIn/SignIn';
import { Navigator, Screen } from './AuthenticationStack.navigator';

const AuthenticationStack = () => {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default AuthenticationStack;

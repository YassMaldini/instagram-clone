import { Platform } from 'react-native';
import ProfileScreen from '../../screens/connected/ProfileScreen/ProfileScreen';
import { Navigator, Screen } from './ProfileStack.navigator';

const ProfileStack = () => {
  return (
    <Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      <Screen name="ProfileScreen" component={ProfileScreen} />
    </Navigator>
  );
};

export default ProfileStack;

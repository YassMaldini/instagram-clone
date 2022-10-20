import { Platform } from 'react-native';
import Comments from '../../screens/connected/Comments/Comments';
import HomeScreen from '../../screens/connected/Home/HomeScreen';
import { Navigator, Screen } from './HomeStack.navigator';

const HomeStack = () => {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default',
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="Comments" component={Comments} />
    </Navigator>
  );
};

export default HomeStack;

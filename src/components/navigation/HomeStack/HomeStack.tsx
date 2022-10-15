import { Platform } from 'react-native';
import Comments from '../../screens/connected/Comments/Comments';
import Home from '../../screens/connected/Home/Home';
import { Navigator, Screen } from './HomeStack.navigator';

const HomeStack = () => {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default'
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Comments" component={Comments} />
    </Navigator>
  );
};

export default HomeStack;
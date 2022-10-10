import { Platform } from 'react-native';
import Home from '../../screens/connected/Home/Home';
import ConnectedBottomTab from '../ConnectedBottomTab/ConnectedBottomTab';
import { Navigator, Screen } from './ConnectedStack.navigator';

const ConnectedStack = () => {
  return (
      <Navigator
          initialRouteName='Home'
          screenOptions={{
              headerShown: false,
              animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default'
          }}
      >
        <Screen name="ConnectedBottomTab" component={ConnectedBottomTab} />
        {/* <Screen name="Home" component={Home} /> */}
      </Navigator>
  );
};

export default ConnectedStack;
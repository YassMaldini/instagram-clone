import { Platform } from 'react-native';
import Comments from '../../screens/connected/Comments/Comments';
import ExploreScreen from '../../screens/connected/ExploreScreen/ExploreScreen';
import Home from '../../screens/connected/Home/Home';
import SearchScreen from '../../screens/connected/SearchScreen/SearchScreen';
import { Navigator, Screen } from './SearchStack.navigator';

const SearchStack = () => {
  return (
    <Navigator
      initialRouteName='SearchScreen'
      screenOptions={{
        headerShown: false,
        animation: Platform.OS === 'android' ? 'fade_from_bottom' : 'default'
      }}
    >
      <Screen name="SearchScreen" component={SearchScreen} />
      <Screen name="ExploreScreen" component={ExploreScreen} />
    </Navigator>
  );
};

export default SearchStack;
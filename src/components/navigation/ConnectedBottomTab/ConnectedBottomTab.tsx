import { Navigator, Screen } from './ConnectedBottomTab.navigator';
import Home from '../../screens/connected/Home/Home';
import Text from '../../designSystem/Text/Text';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import HomeIcon from '../../../../assets/vectors/home.svg';
import SearchIcon12 from '../../../../assets/images/instagram_search_outline_12.png';
import SearchIcon16 from '../../../../assets/images/instagram_search_outline_16.png';
import { View } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import HomeStack from '../HomeStack/HomeStack';
import SearchScreen from '../../screens/connected/SearchScreen/SearchScreen';
import Image from '../../designSystem/Image/Image';
import SearchStack from '../SearchStack/SearchStack';

const ConnectedBottomTab = () => {
  const theme = useTheme<Theme>();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, .04)',
          backgroundColor: theme.colors.primaryBackground
        }
      }}
    >
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <SvgIcon color='primaryText' width={28} height={28} icon={HomeIcon} />
          )
        }}
      />
      <Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            focused
            ?
            <Image source={SearchIcon12} width={24} height={24} />
            :
            <Image source={SearchIcon16} width={24} height={24} />
          )
        }}
      />
    </Navigator>
  );
};

export default ConnectedBottomTab;
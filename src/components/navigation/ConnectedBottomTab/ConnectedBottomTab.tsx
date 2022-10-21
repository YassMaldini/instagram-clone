import { Navigator, Screen } from './ConnectedBottomTab.navigator';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import HomeIcon from '../../../../assets/vectors/home.svg';
import SearchIcon12 from '../../../../assets/images/instagram_search_outline_12.png';
import SearchIcon16 from '../../../../assets/images/instagram_search_outline_16.png';
import ReelsIcon from '../../../../assets/images/instagram_icons_exceptions_reels_outline_48.png';
import ShopIcon from '../../../../assets/images/instagram_shopping_bag_outline_44.png';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../../utils/theme/theme';
import HomeStack from '../HomeStack/HomeStack';
import Image from '../../designSystem/Image/Image';
import ReelsScreen from '../../screens/connected/ReelsScreen/ReelsScreen';
import { useSelector } from 'react-redux';
import { profileSelector } from '../../../store/authentication/authenticationReducerSelectors';
import ProfileStack from '../ProfileStack/ProfileStack';
import { AccountRepositoryLoginResponseLogged_in_user } from 'instagram-private-api';
import SearchStack from '../SearchStack/SearchStack';
import ShopScreen from '../../screens/connected/ShopScreen/ShopScreen';

const ConnectedBottomTab = () => {
  const theme = useTheme<Theme>();
  const profile = useSelector(profileSelector) as AccountRepositoryLoginResponseLogged_in_user;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, .04)',
          backgroundColor: theme.colors.primaryBackground,
        },
      }}>
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <SvgIcon color="primaryText" width={28} height={28} icon={HomeIcon} />,
        }}
      />
      <Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={SearchIcon12} width={22} height={22} />
            ) : (
              <Image source={SearchIcon16} width={24} height={24} />
            ),
        }}
      />
      <Screen
        name="ReelsScreen"
        component={ReelsScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={ReelsIcon} width={36} height={36} />
            ) : (
              <Image source={ReelsIcon} width={36} height={36} />
            ),
        }}
      />
      <Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image source={ShopIcon} width={42} height={42} />
            ) : (
              <Image source={ShopIcon} width={42} height={42} />
            ),
        }}
      />
      <Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={{ uri: profile.profile_pic_url }}
                width={28}
                height={28}
                borderRadius="l"
              />
            ) : (
              <Image
                source={{ uri: profile.profile_pic_url }}
                width={26}
                height={26}
                borderRadius="l"
              />
            ),
        }}
      />
    </Navigator>
  );
};

export default ConnectedBottomTab;

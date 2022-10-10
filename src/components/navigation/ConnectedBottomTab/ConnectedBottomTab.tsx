import { Navigator, Screen } from './ConnectedBottomTab.navigator';
import Home from '../../screens/connected/Home/Home';
import Text from '../../designSystem/Text/Text';
import { SvgIcon } from '../../designSystem/SvgIcon/SvgIcon';
import HomeIcon from '../../../../assets/vectors/home.svg'
import { View } from 'react-native';

const ConnectedBottomTab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, .04)'
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text color='primaryBackground'>Home</Text>
          ),
          tabBarIcon: ({ focused }) => (
            <SvgIcon color='primaryBackground' width={28} height={28} icon={HomeIcon} />
          )
        }}
      />
    </Navigator>
  );
};

export default ConnectedBottomTab;
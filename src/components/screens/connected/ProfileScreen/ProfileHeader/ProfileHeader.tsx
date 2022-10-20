import Box from '../../../../designSystem/Box/Box';
import Text from '../../../../designSystem/Text/Text';
import AddIcon from '../../../../../../assets/images/add.png';
import MenuIcon from '../../../../../../assets/images/instagram_menu_outline_44.png';
import Image from '../../../../designSystem/Image/Image';
import { useContext } from 'react';
import { ProfileScreenContext } from '../ProfileScreen.context';
import { UserInfoResponseRootObject } from '../../../../../types/api/endpoints/users/info.user.types';

const ProfileHeader = () => {
  const { userInfos } = useContext(ProfileScreenContext);
  const { user } = userInfos as UserInfoResponseRootObject;
  const { username } = user;

  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between" padding="s">
      <Text marginLeft="s" fontSize={22} fontWeight="800">
        {username}
      </Text>
      <Box flexDirection="row" alignItems="center">
        <Image source={AddIcon} width={28} height={28} marginRight="s" />
        <Image source={MenuIcon} width={46} height={46} />
      </Box>
    </Box>
  );
};

export default ProfileHeader;

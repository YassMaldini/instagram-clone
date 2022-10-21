import Box from '../../../../designSystem/Box/Box';
import Image from '../../../../designSystem/Image/Image';
import Pressable from '../../../../designSystem/Pressable/Pressable';
import Text from '../../../../designSystem/Text/Text';
import ProfileInfosCount from './ProfileInfosCount/ProfileInfosCount';
import AddUserIcon from '../../../../../../assets/images/instagram_user_follow_outline_44.png';
import { useContext } from 'react';
import { ProfileScreenContext } from '../ProfileScreen.context';
import { UserInfoResponseRootObject } from '../../../../../types/api/endpoints/users/info.user.types';

const ProfileInfos = () => {
  const { userInfos, isCurrentUser, isDiscoverVisible, setDiscoverVisible } =
    useContext(ProfileScreenContext);
  const { user } = userInfos as UserInfoResponseRootObject;
  const {
    full_name,
    biography,
    external_url,
    profile_pic_url,
    media_count,
    follower_count,
    following_count,
  } = user;

  console.log('Boolean(isCurrentUser)', Boolean(isCurrentUser));

  return (
    <Box paddingHorizontal="m" marginBottom="s">
      <Box flexDirection="row" alignItems="center" justifyContent="space-between">
        <Image source={{ uri: profile_pic_url }} width={86} height={86} borderRadius="xl" />
        <Box flexDirection="row" justifyContent="space-between">
          <ProfileInfosCount count={media_count} label="Posts" />
          <ProfileInfosCount count={follower_count} label="Followers" />
          <ProfileInfosCount count={following_count} label="Following" />
        </Box>
      </Box>
      <Text marginTop="s" fontWeight="800">
        {full_name}
      </Text>
      {biography && <Text>{biography}</Text>}
      {external_url && <Text color="link">{external_url}</Text>}
      {Boolean(isCurrentUser) && (
        <Box flexDirection="row" justifyContent="space-between" marginTop="s">
          <Pressable
            flex={1}
            paddingVertical="s"
            backgroundColor="highlightBackground"
            borderRadius="s"
            marginRight="s">
            <Text alignSelf="center" fontWeight="800">
              Edit profile
            </Text>
          </Pressable>
          <Pressable
            backgroundColor="highlightBackground"
            borderRadius="s"
            onPress={() => setDiscoverVisible(!isDiscoverVisible)}>
            <Image source={AddUserIcon} width={36} height={36} borderRadius="xl" />
          </Pressable>
        </Box>
      )}
    </Box>
  );
};

export default ProfileInfos;

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dispatch, SetStateAction } from 'react';
import { UserInfoResponseRootObject } from '../../../../types/api/endpoints/users/info.user.types';
import { ProfileStackParamsList } from '../../../navigation/ProfileStack/ProfileStack.types';

export type ProfileScreenProps = NativeStackScreenProps<ProfileStackParamsList, 'ProfileScreen'>;

export interface ProfileScreenContextProps {
  userInfos?: UserInfoResponseRootObject;
  isLoading?: boolean;
  error?: Error | null;
  isCurrentUser: boolean;
  isDiscoverVisible: boolean;
  setDiscoverVisible: Dispatch<SetStateAction<boolean>>;
}

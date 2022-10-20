import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileStackParamsList } from './ProfileStack.types';

export const { Navigator, Screen } = createNativeStackNavigator<ProfileStackParamsList>();

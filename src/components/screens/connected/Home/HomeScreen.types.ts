import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ReelsTrayFeedSuccessResponseData } from '../../../../types/api/endpoints/feed/reelsTray.feed.types';
import { TimelineFeedSuccessResponseData } from '../../../../types/api/endpoints/feed/timeline.feed.types';
import { ConnectedStackParamsList } from '../../../navigation/ConnectedStack/ConnectedStack.types';
import { HomeStackParamsList } from '../../../navigation/HomeStack/HomeStack.types';
import { RootStackParamsList } from '../../../navigation/RootStack/RootStack.types';

export interface HomeScreenContextProps {
  timeline?: TimelineFeedSuccessResponseData;
  reelsTray?: ReelsTrayFeedSuccessResponseData;
  isLoading: boolean;
  error: Error | null;
}

export type HomeProps = NativeStackScreenProps<HomeStackParamsList, 'HomeScreen'>;

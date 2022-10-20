import { ImageSourcePropType } from 'react-native';
import { Theme } from '../../../../../utils/theme/theme';

export interface FeedCardModalRowButtonProps {
  imageSource: ImageSourcePropType;
  imageSize?: number;
  buttonPaddingHorinzontal?: number;
  imageMarginRight?: number;
  label: string;
  labelColor?: keyof Theme['colors'];
  onPress?: () => void;
}

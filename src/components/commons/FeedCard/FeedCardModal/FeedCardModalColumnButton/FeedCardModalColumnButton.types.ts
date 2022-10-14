import { ImageSourcePropType } from "react-native";

export interface FeedCardModalColumnButtonProps {
  imageSource: ImageSourcePropType;
  imageSize?: number;
  imagePadding?: number;
  label: string;
  onPress?: () => void;
}
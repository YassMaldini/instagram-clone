import { ColorProps, LayoutProps, SpacingProps } from "@shopify/restyle";
import { TextInputProps as RNTextInputProps } from "react-native";
import { Theme } from "../../../utils/theme/theme";


export interface TextInputprops extends SpacingProps<Theme>, LayoutProps<Theme>, ColorProps<Theme>, RNTextInputProps {
  isInBottomModal?: boolean
}
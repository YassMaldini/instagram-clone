import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { BackgroundColorProps, color, ColorProps, composeRestyleFunctions, layout, LayoutProps, spacing, SpacingProps, useRestyle } from "@shopify/restyle";
import { forwardRef, useMemo } from "react";
import { Platform } from "react-native";
import { TextInputprops } from "./TextInput.types";
import { TextInput as RNTextInput } from "react-native";
import { Theme } from "../../../utils/theme/theme";

type RestyleProps = SpacingProps<Theme> & LayoutProps<Theme> & BackgroundColorProps<Theme> & ColorProps<Theme>

const TextInput = forwardRef<any, TextInputprops>(
  ({ isInBottomModal, style: receivedStyle, multiline, ...rest }, ref) => {
    const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
      spacing,
      layout,
      color
    ]);

    const rootProps = useRestyle(restyleFunctions, rest)

    const Component = useMemo(() => {
      if (isInBottomModal && Platform.OS === 'ios') {
        return BottomSheetTextInput
      }
      return RNTextInput
    }, [isInBottomModal])

    return (
      <Component 
        {...rootProps}
        style={[
          receivedStyle
        ]}
        {...{ ref }}
      />
    )
  }
)

export default TextInput
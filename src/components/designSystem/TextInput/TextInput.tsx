import { backgroundColor, BackgroundColorProps, border, BorderProps, color, ColorProps, composeRestyleFunctions, createRestyleComponent, layout, LayoutProps, spacing, SpacingProps, useRestyle } from "@shopify/restyle";
import { forwardRef, useMemo } from "react";
import { Platform } from "react-native";
import { TextInputprops } from "./TextInput.types";
import { TextInput as RNTextInput } from "react-native";
import { Theme } from "../../../utils/theme/theme";

type RestyleProps = SpacingProps<Theme> & LayoutProps<Theme> & BorderProps<Theme> & BackgroundColorProps<Theme> & ColorProps<Theme>

const TextInput = forwardRef<any, TextInputprops>(
  ({ style: receivedStyle, multiline, ...rest }, ref) => {
    const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
      spacing,
      layout,
      border,
      color,
      backgroundColor
    ]);

    // @ts-ignore
    const rootProps = useRestyle(restyleFunctions, rest)

    const Component = useMemo(() => {
      return createRestyleComponent<RestyleProps, Theme>(
        [spacing, layout, border, backgroundColor, color],
        RNTextInput
      )
    }, [])

    return (
      // <Component 
      //   {...rootProps}
      //   {...{
      //     style: [
      //       {
      //         paddingVertical: 10,
      //         borderRadius: 6
      //       },
      //       style
      //     ]
      //   }}
      //   {...{ ref }}
      // />
      <Component
        paddingVertical="sToM"
        paddingHorizontal="m"
        borderRadius="s"
        {...rootProps}
        {...{ ref }}
      />
    )
  }
)

export default TextInput
import { backgroundColor, color, composeRestyleFunctions, createRestyleComponent, layout, opacity, spacing, useRestyle } from "@shopify/restyle"
import { ActivityIndicator, Pressable } from "react-native"
import { Theme } from "../../../utils/theme/theme"
import Box from "../Box/Box"
import Text from "../Text/Text"
import { ButtonColors, ButtonProps, ButtonVariants } from "./Button.types"
import { BackgroundColorProps, ColorProps, LayoutProps, OpacityProps, SpacingProps } from "@shopify/restyle";
import { getButtonBackgroundColor, getButtonTextColor } from "./Button.theme"

type RestyleProps =
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  OpacityProps<Theme> &
  BackgroundColorProps<Theme>

const Content = ({
  loading,
  disabled,
  children,
  color = ButtonColors.Primary,
  variant = ButtonVariants.Text
}: ButtonProps) => {

  const isChildrenString = typeof children === 'string';

  const buttonBackgroundColor = getButtonBackgroundColor({ disabled, color });

  const buttonTextColor = getButtonTextColor({ disabled, color, variant });

  if (loading) {
    return (
      <Box
        borderRadius="s"
        backgroundColor={buttonBackgroundColor}
        paddingVertical="m"
      >
        <ActivityIndicator size={24} color="#fff" />
      </Box>
    )
  }

  return (
    <Box
      borderRadius="s"
      backgroundColor={buttonBackgroundColor}
      paddingVertical="m"
    >
      {!isChildrenString && children}
      {isChildrenString &&
        <Text
          fontSize={14}
          textAlign="center"
          fontFamily='Roboto-Bold'
          color={buttonTextColor}
        >{children}</Text>
      }
    </Box>
  )

}

const Button = ({
  onPress,
  loading,
  disabled,
  children,
  color = ButtonColors.Primary,
  variant,
  ...rest
}: ButtonProps) => {

  const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    spacing,
    layout,
    opacity,
    backgroundColor
  ]);

  const Component = createRestyleComponent<ButtonProps, Theme>(
    [spacing, layout, opacity, backgroundColor],
    Pressable
  )

  // @ts-ignore
  const rootProps = useRestyle(restyleFunctions, rest);

  return (
    <Component {...{ onPress }} {...rootProps}>
      <Content {...{
        loading,
        disabled,
        children,
        color,
        variant
      }} />
    </Component>
  )
}

export default Button
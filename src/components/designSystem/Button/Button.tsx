import {
  backgroundColor,
  border,
  composeRestyleFunctions,
  createRestyleComponent,
  layout,
  opacity,
  spacing,
  useRestyle,
} from '@shopify/restyle';
import { ActivityIndicator, Pressable } from 'react-native';
import { Theme } from '../../../utils/theme/theme';
import Box from '../Box/Box';
import Text from '../Text/Text';
import { ButtonColors, ButtonProps, ButtonSizes, ButtonVariants } from './Button.types';
import { BackgroundColorProps, LayoutProps, OpacityProps, SpacingProps } from '@shopify/restyle';
import {
  BUTTON_HORIZONTAL_PADDING,
  BUTTON_VERTICAL_PADDING,
  getButtonBackgroundColor,
  getButtonTextColor,
} from './Button.theme';

type RestyleProps = SpacingProps<Theme> &
  LayoutProps<Theme> &
  OpacityProps<Theme> &
  BackgroundColorProps<Theme>;

const Content = ({
  loading,
  disabled,
  children,
  color = ButtonColors.Primary,
  variant = ButtonVariants.Text,
  isBold = true,
}: ButtonProps) => {
  const isChildrenString = typeof children === 'string';

  const buttonTextColor = getButtonTextColor({ disabled, color, variant });

  if (loading) {
    return (
      <Box style={{ paddingVertical: 1 }}>
        <ActivityIndicator size={14} color="#fff" />
      </Box>
    );
  }

  return (
    <Box>
      {!isChildrenString && children}
      {isChildrenString && (
        <Text
          fontSize={14}
          textAlign="center"
          fontFamily={isBold ? 'Roboto-Bold' : 'Roboto-Regular'}
          color={buttonTextColor}>
          {children}
        </Text>
      )}
    </Box>
  );
};

const Button = ({
  onPress,
  loading,
  disabled,
  children,
  color = ButtonColors.Primary,
  variant,
  size = ButtonSizes.Small,
  isBold,
  ...rest
}: ButtonProps) => {
  const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
    spacing,
    layout,
    opacity,
    backgroundColor,
  ]);

  const Component = createRestyleComponent<ButtonProps, Theme>(
    [spacing, layout, border, opacity, backgroundColor],
    Pressable
  );

  // @ts-ignore
  const rootProps = useRestyle(restyleFunctions, rest);

  const buttonBackgroundColor = getButtonBackgroundColor({ disabled, color });

  return (
    <Component
      backgroundColor={buttonBackgroundColor}
      paddingHorizontal={BUTTON_HORIZONTAL_PADDING[size]}
      paddingVertical={BUTTON_VERTICAL_PADDING[size]}
      borderRadius="s"
      {...{ onPress }}
      {...rootProps}>
      <Content
        {...{
          loading,
          disabled,
          children,
          color,
          variant,
          isBold,
        }}
      />
    </Component>
  );
};

export default Button;

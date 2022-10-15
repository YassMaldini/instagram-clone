import { Theme } from "../../../utils/theme/theme";
import { ButtonColors, ButtonColorsData, ButtonProps, ButtonVariants } from "./Button.types";

export const BUTTONS_COLORS = Object.freeze<ButtonColorsData>({
  [ButtonColors.Primary]: {
    regular: {
      background: "primaryButtonBackground",
      text: "white"
    },
    disabled: {
      background: "disabledButtonBackground",
      text: "disabledButtonText"
    }
  },
  [ButtonColors.PrimaryText]: {
    regular: {
      background: "highlightBackground",
      text: "primaryButton"
    },
    disabled: {
      background: "highlightBackground",
      text: "disabledButtonBackground"
    }
  }
})

export const getButtonBackgroundColor = ({
  disabled,
  color = ButtonColors.Primary
}: Pick<ButtonProps, 'disabled' | 'color'>): keyof Theme['colors'] => {
  const colors = BUTTONS_COLORS[color];
  return disabled && colors.disabled ? colors.disabled.background : colors.regular.background;
};

export const getButtonTextColor = ({
  disabled,
  color = ButtonColors.Primary,
  variant
}: Pick<ButtonProps, 'disabled' | 'color' | 'variant'>): keyof Theme['colors'] => {
  const colors = BUTTONS_COLORS[color];
  return disabled && colors.disabled ? colors.disabled.text : colors.regular.text;
};
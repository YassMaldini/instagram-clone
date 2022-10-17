import { BackgroundColorProps, ColorProps, LayoutProps, OpacityProps, SpacingProps } from "@shopify/restyle";
import { ReactNode } from "react";
import { PressableProps } from "react-native";
import { Theme } from "../../../utils/theme/theme";

export enum ButtonColors {
  Primary = 'primary',
  PrimaryOutline = 'primaryOutline',
  PrimaryText = 'primaryText'
}

export enum ButtonVariants {
  Contained = 'contained',
  Text = 'text'
}

export interface ButtonBaseContrastColors {
    background: keyof Theme['colors'];
    text: keyof Theme['colors'];
}

export type ButtonColorsData = {
    [color in ButtonColors]: {
        regular: ButtonBaseContrastColors;
        disabled?: ButtonBaseContrastColors;
    };
};

export interface ButtonProps extends 
  SpacingProps<Theme>, 
  LayoutProps<Theme>, 
  OpacityProps<Theme>, 
  BackgroundColorProps<Theme>, 
  Omit<PressableProps, 'style'> {
    loading?: boolean;
    disabled?: boolean;
    children: ReactNode;
    color?: ButtonColors;
    variant?: ButtonVariants;
    isBold?: boolean;
}
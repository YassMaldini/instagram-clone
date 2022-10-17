import { ReactNode } from "react";

export interface ScreenHeaderProps {
  showGoBackTouchable?: boolean;
  title?: string | ReactNode;
  rightElement?: ReactNode;
}
import { RefObject } from "react";
import { TextInput as TNTextInput } from "react-native"

export interface CardProps {
  textInputRef: RefObject<TNTextInput>
}
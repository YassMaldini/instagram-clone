import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image"
import TextField from "../../../designSystem/TextField/TextField"
import ronaldinho from "../../../.././../assets/images/ronaldinho.jpg"
import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../utils/theme/theme"
import Text from "../../../designSystem/Text/Text"
import AddSurroundedIcon from "../../../../../assets/vectors/add-sign-surrounded.svg"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Pressable from "../../../designSystem/Pressable/Pressable"
import { useIsKeyboardOpened } from "../../../../hooks/useIsKeyboardOpened/useIsKeyboardOpened"
import { useRef } from "react"
import { Button, InputAccessoryView, KeyboardAvoidingView, StyleSheet, TextInput as TNTextInput, View } from "react-native"
import { useFocusEffect } from "@react-navigation/native"
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'
import TextInput from "../../../designSystem/TextInput/TextInput"
import { CardProps } from "../Card.types"

const CardComments = ({ textInputRef }: CardProps) => {
  const isKeyboardOpened = useIsKeyboardOpened();

  // useFocusEffect(() => {
  //     textInputRef.current?.f();
  // });

  return (
    <Box flex={1}>
      <Box flexDirection="row" paddingHorizontal="m" paddingVertical="s">
        <Image source={ronaldinho} width={32} height={32} borderRadius='l' marginRight="m" />
        <Pressable flex={1} justifyContent="center" onPress={() => textInputRef.current?.focus()}>
          <Text>Add a comment...</Text>
        </Pressable>
        <Box flexDirection="row" alignItems="center">
          <Text>❤️</Text>
          <Text marginLeft="sToM">🙌</Text>
          <SvgIcon 
            icon={AddSurroundedIcon} 
            color="primaryText" 
            width={14}
            height={14}
            marginLeft="sToM"
          />
        </Box>
      </Box>
      {/* <KeyboardAvoidingView>
        <Box flex={1} width="100%" position="absolute" bottom={0} visible={isKeyboardOpened}>
          <TextInput ref={textInputRef} style={{backgroundColor: 'red'}} />
        </Box>
      </KeyboardAvoidingView> */}
    </Box>
  )
}

export default CardComments

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputView: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: "top",
  },
  textInputButton: {
    flexShrink: 1,
  },
});
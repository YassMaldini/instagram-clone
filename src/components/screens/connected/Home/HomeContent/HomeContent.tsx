import { useRef } from 'react';
import { Button, ScrollView, TextInput as TNTextInput, StyleSheet, View } from "react-native"
import Card from "../../../../commons/Card/Card"
import Box from "../../../../designSystem/Box/Box"
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";
import TextInput from "../../../../designSystem/TextInput/TextInput";
import { FlashList } from "@shopify/flash-list";
import { useIsKeyboardOpened } from '../../../../../hooks/useIsKeyboardOpened/useIsKeyboardOpened';
import Image from '../../../../designSystem/Image/Image';
import ronaldinho from "../../../../../../assets/images/ronaldinho.jpg";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

const HomeContent = () => {
  const textInputRef = useRef<TNTextInput>(null);

  return (
    <>
    <FlashList
      data={DATA}
      renderItem={({ item }) => (
        <Box flex={1}>
          <Card {...{ textInputRef }} />
        </Box>
      )}
      estimatedItemSize={20}
    />
    <KeyboardAccessoryView style={{backgroundColor: 'black'}} alwaysVisible={true} inSafeAreaView={true} androidAdjustResize>
      {({ isKeyboardVisible }) => (
        <Box backgroundColor="secondaryBackground" visible={isKeyboardVisible}>
          <Box flexDirection="row">
            <Image source={ronaldinho} width={32} height={32} borderRadius='l' marginRight="m" />
            <TextInput
              ref={textInputRef}
              placeholder="Write your message"
              underlineColorAndroid="transparent"
              color="primaryText"
              backgroundColor="secondaryBackground"
            />
          </Box>
        </Box>
      )}
    </KeyboardAccessoryView>
    </>
  )
}

export default HomeContent

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
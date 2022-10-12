import Box from "../../designSystem/Box/Box"
import Text from "../../designSystem/Text/Text"
import ronaldinho from "../../../../assets/images/ronaldinho_post.png"
import CardHeader from "./CardHeader/CardHeader"
import CardActions from "./CardActions/CardActions"
import CardDescription from "./CardDescription/CardDescription"
import Pressable from "../../designSystem/Pressable/Pressable"
import Image from "../../designSystem/Image/Image"
import AutoHeightImage from "../../designSystem/AutoHeightImage/AutoHeightImage"
import { StyleSheet, View } from "react-native"
import { KeyboardAccessoryView } from "react-native-keyboard-accessory"
import TextInput from "../../designSystem/TextInput/TextInput"
import { CardProps } from "./Card.types"

const Card = ({}: CardProps) => {
  return (
    <Box flex={1} backgroundColor="primaryBackground">
      <CardHeader />
      <AutoHeightImage source={ronaldinho} />
      <CardActions />
      <Pressable>
        <Text marginLeft="m" fontWeight="800">265 000 J'aime</Text>
      </Pressable>
      <CardDescription />
      <Pressable>
        <Text marginLeft="m" color="secondaryText">Voir les 123 commentaires</Text>
      </Pressable>
      <Text marginLeft="m" color="secondaryText" fontSize={12}>Il y'a 2 jours</Text>
    </Box>
  )
}

export default Card

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
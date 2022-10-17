import { useNavigation } from "@react-navigation/native"
import Box from "../../designSystem/Box/Box"
import Image from "../../designSystem/Image/Image"
import Pressable from "../../designSystem/Pressable/Pressable"
import Text from "../../designSystem/Text/Text"
import LeftArrow from "../../../../assets/images/instagram_chevron_left_outline_44.png"
import { ConnectedStackScreenProps } from "../../navigation/ConnectedStack/ConnectedStack.types"
import { ScreenHeaderProps } from "./ScreenHeader.types"

const ScreenHeader = ({ showGoBackTouchable, title, rightElement }: ScreenHeaderProps) => {
  const { goBack } = useNavigation<ConnectedStackScreenProps['navigation']>()

  return (
    <Box paddingVertical="xs" flexDirection="row" alignItems="center" justifyContent="space-between">
      {showGoBackTouchable &&
        <Pressable onPress={goBack}>
          <Image source={LeftArrow} width={54} height={54} />
        </Pressable>
      }
      {title && <Text fontSize={18} fontWeight="800">{title}</Text>}
      <Box minWidth={42}>{rightElement}</Box>
    </Box>
  )
}

export default ScreenHeader
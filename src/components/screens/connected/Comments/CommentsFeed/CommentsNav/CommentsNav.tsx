import Box from "../../../../../designSystem/Box/Box"
import Image from "../../../../../designSystem/Image/Image"
import LeftArrow from "../../../../../../../assets/images/instagram_chevron_left_outline_44.png"
import SendArrow from "../../../../../../../assets/images/instagram_direct_outline_44.png"
import Text from "../../../../../designSystem/Text/Text"
import Pressable from "../../../../../designSystem/Pressable/Pressable"
import { useNavigation } from "@react-navigation/native"
import { CommentsProps } from "../../Comments.types"

const CommentsNav = () => {
  const { goBack } = useNavigation<CommentsProps['navigation']>()

  return (
    <Box paddingVertical="s" flexDirection="row" alignItems="center" justifyContent="space-between">
      <Pressable onPress={goBack}>
        <Image source={LeftArrow} width={54} height={54} />
      </Pressable>
      <Text fontSize={18} fontWeight="800">Comments</Text>
      <Pressable>
        <Image source={SendArrow} width={42} height={42} marginRight="s" />
      </Pressable>
    </Box>
  )
}

export default CommentsNav
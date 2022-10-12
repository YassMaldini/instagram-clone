import Box from "../../../designSystem/Box/Box"
import Image from "../../../designSystem/Image/Image"
import ronaldinho from "../../../.././../assets/images/ronaldinho.jpg"
import OptionsIcon from "../../../.././../assets/vectors/options.svg"
import Text from "../../../designSystem/Text/Text"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import Pressable from "../../../designSystem/Pressable/Pressable"

const CardHeader = () => {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between" padding="m">
      <Box flexDirection="row" alignItems="center">
        <Image source={ronaldinho} width={32} height={32} borderRadius='l' marginRight="m" />
        <Box>
          <Text fontWeight="800">ronaldinho</Text>
          <Text fontSize={13} lineHeight={13} fontWeight="100">Location</Text>
        </Box>
      </Box>
      <Pressable onPress={() => console.log('okayyy')}>
        <SvgIcon 
          icon={OptionsIcon} 
          color="primaryText" 
          style={{ transform: [{ rotate: '90deg' }] }}
        />
      </Pressable>
    </Box>
  )
}

export default CardHeader
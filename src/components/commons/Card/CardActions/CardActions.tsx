import Box from "../../../designSystem/Box/Box"
import LikeIcon from "../../../.././../assets/vectors/like.svg"
import ChatIcon from "../../../.././../assets/vectors/chat.svg"
import SendIcon from "../../../.././../assets/vectors/send.svg"
import SaveIcon from "../../../.././../assets/vectors/save.svg"
import Pressable from "../../../designSystem/Pressable/Pressable"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"

const CardActions = () => {
  return (
    <Box 
      flexDirection="row" 
      justifyContent="space-between" 
      paddingHorizontal="m"
      paddingVertical="sToM"
    >
      <Box flexDirection="row">
        <Pressable>
          <SvgIcon
            icon={LikeIcon} 
            color="primaryText" 
            marginRight="m"
          />
        </Pressable>
        <Pressable>
          <SvgIcon
            icon={ChatIcon} 
            color="primaryText" 
            marginRight="m"
          />
        </Pressable>
        <Pressable>
          <SvgIcon
            icon={SendIcon} 
            color="primaryText"
            marginRight="m"
          />
        </Pressable>
      </Box>
      <Pressable>
        <SvgIcon
          icon={SaveIcon} 
          color="primaryText"
        />
      </Pressable>
    </Box>
  )
}

export default CardActions
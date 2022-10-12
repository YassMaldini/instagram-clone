import Box from "../../../../designSystem/Box/Box"
import Text from "../../../../designSystem/Text/Text"
import SendIcon from "../../../../../../assets/vectors/send.svg"
import LikeIcon from "../../../../../../assets/vectors/like.svg"
import AddIcon from "../../../../../../assets/vectors/add.svg"
import { SvgIcon } from "../../../../designSystem/SvgIcon/SvgIcon"

const HomeHeader = () => {
  return (
    <Box 
      backgroundColor='primaryBackground' 
      padding="m"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        fontSize={28} 
        fontFamily='Font-Spring'
      >Instaclone</Text>
      <Box flexDirection="row">
        <SvgIcon 
          icon={AddIcon} 
          color='white' 
          width={25}
          height={25}
          marginLeft="l"
        />
        <SvgIcon 
          icon={LikeIcon} 
          color='white' 
          width={25}
          height={25}
          marginLeft="l"
        />
        <SvgIcon 
          icon={SendIcon} 
          color='white' 
          width={25}
          height={25}
          marginLeft="l"
        />
      </Box>
    </Box>
  )
}

export default HomeHeader
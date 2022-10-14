import { useTheme } from "@shopify/restyle"
import { Theme } from "../../../../../utils/theme/theme"
import Box from "../../../../designSystem/Box/Box"
import Image from "../../../../designSystem/Image/Image"
import Pressable from "../../../../designSystem/Pressable/Pressable"
import Text from "../../../../designSystem/Text/Text"
import { FeedCardModalRowButtonProps } from "./FeedCardModalRowButton.types"

const FeedCardModalRowButton = ({ 
  imageSource, 
  imageSize = 26,
  buttonPaddingHorinzontal,
  imageMarginRight: receivedImageMarginRight,
  label, 
  labelColor = "primaryText",
  onPress 
}: FeedCardModalRowButtonProps) => {
  const theme = useTheme<Theme>()
  const imageMarginRight = receivedImageMarginRight || buttonPaddingHorinzontal

  return (
    <Pressable {...{ onPress }}>
      <Box 
        paddingVertical="sToM" 
        flexDirection="row" 
        alignItems="center"
        style={{ 
          paddingHorizontal: buttonPaddingHorinzontal ? buttonPaddingHorinzontal : theme.spacing.m
        }}
      >
        <Image 
          source={imageSource} 
          width={imageSize} 
          height={imageSize}  
          style={{
            marginRight: imageMarginRight ? imageMarginRight : theme.spacing.m
          }}
        />
        <Text color={labelColor} fontSize={15}>{label}</Text>
      </Box>
    </Pressable>
  )
}

export default FeedCardModalRowButton
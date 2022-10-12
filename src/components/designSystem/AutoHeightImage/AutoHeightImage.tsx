import Box from "../Box/Box"
import Image from "../Image/Image"
import { ImageProps } from "../Image/Image.types"

const AutoHeightImage = (rest: ImageProps) => {
  return (
    <Box flexDirection={"row"}>
      <Image flex={1} aspectRatio={1} width="100%" resizeMode="contain" alignSelf="stretch" {...rest} />
    </Box>
  )
}

export default AutoHeightImage
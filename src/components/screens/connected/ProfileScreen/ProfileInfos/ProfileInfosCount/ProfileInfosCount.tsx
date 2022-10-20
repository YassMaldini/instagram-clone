import Box from "../../../../../designSystem/Box/Box"
import Pressable from "../../../../../designSystem/Pressable/Pressable"
import Text from "../../../../../designSystem/Text/Text"
import { ProfileInfosCountProps } from "./ProfileInfosCount.types"

const ProfileInfosCount = ({ count, label }: ProfileInfosCountProps) => {
  return (
    <Pressable alignItems="center" style={{ marginLeft: 32 }}>
      <Text fontSize={16} fontWeight="800">{count}</Text>
      <Text>{label}</Text>
    </Pressable>
  )
}

export default ProfileInfosCount
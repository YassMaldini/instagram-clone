import ScreenHeader from "../../../commons/ScreenHeader/ScreenHeader"
import Box from "../../../designSystem/Box/Box"
import Text from "../../../designSystem/Text/Text"
import ProfileDiscover from "./ProfileDiscover/ProfileDiscover"
import ProfileHeader from "./ProfileHeader/ProfileHeader"
import ProfileInfos from "./ProfileInfos/ProfileInfos"
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon"
import ProfileContent from "./ProfileContent/ProfileContent"
import { ActivityIndicator, ScrollView } from "react-native"
import { useSelector } from "react-redux"
import { profileSelector } from "../../../../store/authentication/authenticationReducerSelectors"
import { AccountRepositoryLoginResponseLogged_in_user } from "instagram-private-api"
import { userInfosSample } from "../../../../utils/api/samples/userInfosSample"
import { useRoute } from "@react-navigation/native"
import { ProfileScreenContextProps, ProfileScreenProps } from "./ProfileScreen.types"
import { useMemo, useState } from "react"
import { ProfileScreenContext } from "./ProfileScreen.context"
import useUserInfos from "../../../../hooks/feed/useUserInfos/useUserInfos"

const ProfileScreen = () => {
  const { pk: currentUserPk } = useSelector(profileSelector) as AccountRepositoryLoginResponseLogged_in_user
  const [isDiscoverVisible, setDiscoverVisible] = useState(false)

  const { params } = useRoute<ProfileScreenProps['route']>()
  const pk = params?.pk;

  const userPk = pk || currentUserPk

  const {
    data: userInfos,
    isLoading,
    error
  } = useUserInfos({ userPk })

  const isCurrentUser = Boolean(pk === currentUserPk || !pk) 

  const contextValue = useMemo<ProfileScreenContextProps>(
    () => ({ userInfos, isCurrentUser, isDiscoverVisible, setDiscoverVisible }),
    [userInfos, isCurrentUser, isDiscoverVisible, setDiscoverVisible]
  )

  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  if (error) {
    return <Text>{error.message}</Text>
  }

  return (
    <ProfileScreenContext.Provider value={contextValue}>
      <ScrollView>
        <Box flex={1}>
          <ProfileHeader />
          <ProfileInfos />
          <Box visible={isDiscoverVisible}>
            <ProfileDiscover />
          </Box>
          {userInfos && <ProfileContent />}
        </Box>
      </ScrollView>
    </ProfileScreenContext.Provider>
  )
}

export default ProfileScreen

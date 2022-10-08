import { SafeAreaView } from "react-native-safe-area-context";
import useIsSignedIn from "../../../hooks/auth/useIsSignedIn/useIsSignedIn";
import { useConfigureApi } from "../../../hooks/useConfigureApi/useConfigureApi"
import SignIn from "../../screens/authentication/SignIn/SignIn"

const RootStack = () => {
  useConfigureApi();

  const isSignedIn = useIsSignedIn();

  console.log('isSignedIn', isSignedIn)

  return (
    <SafeAreaView style={{flex: 1}}>
      <SignIn />
    </SafeAreaView>
  )
}

export default RootStack
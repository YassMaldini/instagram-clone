import { SafeAreaView } from "react-native-safe-area-context";
import { useConfigureApi } from "../../../hooks/useConfigureApi/useConfigureApi"
import SignIn from "../../screens/authentication/SignIn/SignIn"

const RootStack = () => {
  useConfigureApi();

  return (
    <SafeAreaView style={{flex: 1}}>
      <SignIn />
    </SafeAreaView>
  )
}

export default RootStack
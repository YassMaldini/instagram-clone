import { useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useIsSignedIn from "../../../hooks/auth/useIsSignedIn/useIsSignedIn";
import { useConfigureApi } from "../../../hooks/useConfigureApi/useConfigureApi";
import getRootStackScreens from "./getRootStackScreens/getRootStackScreens";

const RootStack = () => {
  useConfigureApi();

  const isSignedIn = useIsSignedIn();

  const screens = useMemo(
    () => getRootStackScreens({ isSignedIn }),
    [isSignedIn]
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screens}
    </SafeAreaView>
  )
}

export default RootStack
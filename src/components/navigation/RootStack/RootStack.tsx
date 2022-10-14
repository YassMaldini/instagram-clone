import { useMemo, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useIsSignedIn from "../../../hooks/auth/useIsSignedIn/useIsSignedIn";
import { useConfigureApi } from "../../../hooks/useConfigureApi/useConfigureApi";
import getRootStackScreens from "./getRootStackScreens/getRootStackScreens";
import * as SplashScreen from 'expo-splash-screen';
import { isLoaded, loadAsync, useFonts } from 'expo-font';
import Text from "../../designSystem/Text/Text";
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory';
import { View } from "react-native";
import TextInput from "../../designSystem/TextInput/TextInput";

const RootStack = () => {
  useConfigureApi();

  const isSignedIn = useIsSignedIn();

  const [fontsLoaded, setFontsLoaded] = useState(false)

  const loadFonts = async () => {
    await loadAsync({
      'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
      'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
      'Font-Spring': require('../../../../assets/fonts/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf'),
    })
    setFontsLoaded(true)
  }

  useEffect(() => {
    loadFonts()
  })

  // const [fontsLoaded] = useFonts({
  //   'Roboto-Regular': require('../../../../assets/fonts/Roboto/Roboto-Regular.ttf'),
  //   'Roboto-Bold': require('../../../../assets/fonts/Roboto/Roboto-Bold.ttf'),
  //   'Font-Spring': require('../../../../assets/fonts/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf'),
  // });

  const screens = useMemo(
    () => getRootStackScreens({ isSignedIn }),
    [isSignedIn]
  )

  if (!fontsLoaded) {
    return <Text>Loading for fonts...</Text>
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screens}
    </SafeAreaView>
  )
}

export default RootStack
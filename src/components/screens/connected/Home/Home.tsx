import { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native"
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useTimelineFeed from "../../../../hooks/feed/useTimelineFeed/useTimelineFeed";
import { deviceSelector, profileSelector, secretsSelector } from "../../../../store/authentication/authenticationReducerSelectors";
import { CurrentUserSuccessResponseData } from "../../../../types/api/endpoints/accounts/currentuser.types";
import { Secrets } from "../../../../types/models/authentication/secrets.types";
import { Device } from "../../../../types/models/device/device.types";
import Text from "../../../designSystem/Text/Text";
import { useTranslation } from 'react-i18next';
import HomeHeader from "./HomeHeader/HomeHeader";
import Box from "../../../designSystem/Box/Box";
import HomeContent from "./HomeContent/HomeContent";
import { KeyboardAccessoryView } from "react-native-keyboard-accessory";
import TextInput from "../../../designSystem/TextInput/TextInput";

const Home = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { t } = useTranslation('authentication')

  const secrets = useSelector(secretsSelector) as Secrets;
  const device = useSelector(deviceSelector) as Device;
  const profile = useSelector(profileSelector) as CurrentUserSuccessResponseData;

  // const {
  //     data: timeline,
  //     isLoading: isTimelineLoading,
  //     error: timelineError
  // } = useTimelineFeed();

  // useEffect(() => console.log(timeline), [timeline])

  return (
    <Box flex={1}>
      <HomeHeader />
      <HomeContent />
    </Box>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputView: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#CCC",
    padding: 10,
    fontSize: 16,
    marginRight: 10,
    textAlignVertical: "top",
  },
  textInputButton: {
    flexShrink: 1,
  },
});
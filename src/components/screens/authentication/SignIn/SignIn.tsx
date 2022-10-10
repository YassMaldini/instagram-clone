import { useEffect } from "react";
import { Button } from "react-native";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSecrets, signOut } from "../../../../store/authentication/authenticationActions/authenticationActions";
import { secretsSelector, profileSelector, deviceSelector } from "../../../../store/authentication/authenticationReducerSelectors";
import api from "../../../../utils/api/api";
import Box from "../../../designSystem/Box/Box";
import Text from "../../../designSystem/Text/Text";
import SignInForm from "./SignInForm/SignInForm";
import qs from "qs";
import axios from "axios";
import { random } from "lodash";

const timelineHeaders = {
  'X-Ads-Opt-Out': 0,
  'X-Google-AD-ID': '8a9e6102-5466-55c7-9b33-135710c33c21',
  'X-DEVICE-ID': 'ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a',
  'X-FB': 1,
  'User-Agent': 'Instagram 121.0.0.29.119 Android (26/8.0.0; 480dpi; 1080x2076; samsung; SM-A530F; jackpotlte; samsungexynos7885; en_US; 185203708)',
  'X-CM-Bandwidth-KBPS': '-1.000',
  'X-CM-Latency': '-1.000',
  'X-IG-App-Locale': 'en_US',
  'X-IG-Device-Locale': 'en_US',
  'X-Pigeon-Session-Id': '132f6dad-6948-55a3-811d-4b574b184ad0',
  'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
  'X-IG-Connection-Speed': `${random(1000, 3700)}kbps`,
  'X-IG-Bandwidth-Speed-KBPS': '-1.000',
  'X-IG-Bandwidth-TotalBytes-B': '0',
  'X-IG-Bandwidth-TotalTime-MS': '0',
  'X-IG-Extended-CDN-Thumbnail-Cache-Busting-Value': '1000',
  'X-Bloks-Version-Id': '1b030ce63a06c25f3e4de6aaaf6802fe1e76401bc5ab6e5fb85ed6c2d333e0c7',
  'X-MID': 'Y0JlLAABAAGU_Zfzwmcd2abEwL5d',
  'X-IG-WWW-Claim': 'hmac.AR0_FYSrkFgD9rqcFxhKRmuwZxrrSDIce1rqDSHZCQK4Xavu',
  'X-Bloks-Is-Layout-RTL': 'false',
  'X-IG-Connection-Type': 'WIFI',
  'X-IG-Capabilities': '3brTvwE=',
  'X-IG-App-ID': '567067343352427',
  'X-IG-Device-ID': 'ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a',
  'X-IG-Android-ID': 'android-28645422301697a2',
  'Accept-Language': 'en-US',
  'X-FB-HTTP-Engine': 'Liger',
  Host: 'i.instagram.com',
  'Accept-Encoding': 'gzip',
  Connection: 'close'
}

const SignIn = () => {
  const secrets = useSelector(secretsSelector);
  const profile = useSelector(profileSelector);
  const device = useSelector(deviceSelector);

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  useEffect(() => {
    (async () => {
      const response2 = await axios.post(
        '/api/v1/feed/timeline/',
        qs.stringify({
          is_prefetch: '0',
          feed_view_info: '',
          seen_posts: '',
          phone_id: 'b0b016b0-a4af-53f8-b06f-05444fe83581',
          is_pull_to_refresh: '0',
          battery_level: 15,
          timezone_offset: '7200',
          _csrftoken: 'EyWmsheROEsBqeXaPjHjrAMqoi41jTKi',
          client_session_id: '9870f181-0e9f-55d7-a1f2-c4df44321bd7',
          device_id: 'ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a',
          _uuid: 'ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a',
          is_charging: 0,
          is_async_ads_in_headload_enabled: 0,
          rti_delivery_backend: 0,
          is_async_ads_double_request: 0,
          will_sound_on: 0,
          is_async_ads_rti: 0,
          recovered_from_crash: undefined,
          push_disabled: undefined,
          latest_story_pk: undefined,
          reason: 'cold_start_fetch'
        }), 
        {
          baseURL: 'https://i.instagram.com',
          headers: timelineHeaders
        }
      )

      console.log('axios', response2)
    })
  })

  return (
    <Box flex={1} backgroundColor="secondaryBackground">
      <Text>DD</Text>
      <SignInForm />
      <Box marginTop={"l"}>
        <Button title="Headers" onPress={async () => console.log(api.headers)} />
        <Button title="secrets" onPress={async () => console.log(secrets)} />
        <Button title="kill secrets" onPress={async () => setSecrets(null)(dispatch)} />
        <Button title="profile" onPress={async () => console.log(profile)} />
        <Button title="device" onPress={async () => console.log(device)} />
        {/* <Button title="data" onPress={async () => console.log(response)} /> */}
        <Button title="signOut" onPress={async () => signOut(queryClient)(dispatch)} />
        {/* <Text 
          marginVertical="l" 
          textAlign="center" 
          fontSize={24}
          // {...{color: status === 200 ? 'green' : 'red'}}
        >{status ? 'true': 'false'}</Text> */}
      </Box>
    </Box>
  )
}

export default SignIn;
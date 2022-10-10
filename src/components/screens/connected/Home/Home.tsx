import { Chance } from "chance";
import { useEffect } from "react";
import { Button, View } from "react-native"
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useTimelineFeed from "../../../../hooks/feed/useTimelineFeed/useTimelineFeed";
import { queryTimelineFeed } from "../../../../hooks/feed/useTimelineFeed/useTimelineFeed.actions";
import { signOut } from "../../../../store/authentication/authenticationActions/authenticationActions";
import { deviceSelector, profileSelector, secretsSelector } from "../../../../store/authentication/authenticationReducerSelectors";
import { CurrentUserSuccessResponseData } from "../../../../types/api/endpoints/accounts/currentuser.types";
import { Secrets } from "../../../../types/models/authentication/secrets.types";
import { Device } from "../../../../types/models/device/device.types";
import api from "../../../../utils/api/api";
import Text from "../../../designSystem/Text/Text";
import qs from "qs";
import axios from "axios";
import { random } from "lodash";
import { APP_VERSION_CODE, BLOKS_VERSION_ID } from "instagram-private-api/dist/core/constants";
import HomeIcon from './home.svg';
import { SvgIcon } from "../../../designSystem/SvgIcon/SvgIcon";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { t } = useTranslation('authentication')

  const secrets = useSelector(secretsSelector) as Secrets;
  const device = useSelector(deviceSelector) as Device;
  const profile = useSelector(profileSelector) as CurrentUserSuccessResponseData;

  // const { 
  //   data: timelineFeed
  // } = useTimelineFeed();

  // useEffect(() => console.log(timelineFeed), [timelineFeed])

  const language = 'fr_FR'
  const capabilitiesHeader = '3brTv10='

  const timelineHeaders2 = {
    'Host': 'i.instagram.com',
    'X-Ads-Opt-Out': '0',
    'X-Google-Ad-Id': device.adid,
    'X-Device-Id': device.uuid,
    'X-Fb': '1',
    'X-Cm-Bandwidth-Kbps': '926.384',
    'X-Cm-Latency': '23.191',
    'X-Ig-App-Locale': 'fr_FR',
    'X-Ig-Device-Locale': 'fr_FR',
    'X-Ig-Mapped-Locale': 'fr_FR',
    'X-Pigeon-Session-Id': secrets.pigeonSessionId,
    'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
    'X-Ig-Bandwidth-Speed-Kbps': `${random(1000, 3700)}kbps`,
    // 'X-Ig-Bandwidth-Totalbytes-B': '420057',
    // 'X-Ig-Bandwidth-Totaltime-Ms': '447',
    'X-Ig-App-Startup-Country': 'unknown',
    'X-Bloks-Version-Id': BLOKS_VERSION_ID,
    'X-Ig-Www-Claim': secrets.igWWWClaim,
    'X-Bloks-Is-Layout-Rtl': 'false',
    'X-Ig-Device-Id': device.uuid,
    // 'X-Ig-Family-Device-Id': 'd5a71ef2-a01b-4786-88e4-0dceb19d8418',
    'X-Ig-Android-Id': device.deviceId,
    'X-Ig-Timezone-Offset': '7200',
    'X-Ig-Nav-Chain': 'MainFeedFragment:feed_timeline:1:cold_start::',
    'X-Fb-Connection-Type': 'WIFI',
    'X-Ig-Connection-Type': 'WIFI',
    'X-Ig-Capabilities': capabilitiesHeader,
    'X-Ig-App-Id': '567067343352429',
    'Priority': 'u=0',
    'User-Agent': `Instagram 237.0.0.14.102 Android (${device.deviceString}; ${language}; 373310554)`,
    'Accept-Language': 'fr-FR, en-US',
    'Authorization': secrets.authorization,
    'X-Mid': secrets.mid,
    'Ig-U-Shbid': secrets.shbid,
    'Ig-U-Shbts': secrets.shbts,
    'Ig-U-Ds-User-Id': secrets.ds_user_id,
    'Ig-U-Rur': secrets.rur,
    'Ig-Intended-User-Id': secrets.ds_user_id,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Content-Encoding': 'gzip',
    'Accept-Encoding': 'gzip, deflate',
    'X-Fb-Http-Engine': 'Liger',
    'X-Fb-Client-Ip': 'True',
    'X-Fb-Server-Cluster': 'True'
  }

  // const {
  //     data: timeline,
  //     isLoading: isTimelineLoading,
  //     error: timelineError
  // } = useTimelineFeed();

  return (
    <View style={{ backgroundColor: 'red' }}>
      <Text>Home</Text>
      <Button title="signOut" onPress={async () => signOut(queryClient)(dispatch)} />
      <SvgIcon icon={HomeIcon} width={55} height={55} marginTop="l" color='primaryText' />
      <Button title="secrets" onPress={async () => console.log(secrets)} />
      <Button title="timeline" onPress={async () => {

        const batteryLevel = () => {
          const chance = new Chance(device.deviceId);
          const percentTime = chance.integer({ min: 200, max: 600 });
          return 100 - (Math.round(Date.now() / 1000 / percentTime) % 100);
        }

        const isCharging = () => {
          const chance = new Chance(`${device.deviceId}${Math.round(Date.now() / 10800000)}`);
          return chance.bool();
        }

        const timezoneOffset = String(new Date().getTimezoneOffset() * -60)

        let form = {
          is_prefetch: '0',
          feed_view_info: '',
          seen_posts: '',
          phone_id: device.phoneId,
          is_pull_to_refresh: '0',
          battery_level: batteryLevel(),
          timezone_offset: timezoneOffset,
          client_session_id: secrets.clientSessionId,
          device_id: device.uuid,
          _uuid: device.uuid,
          is_charging: 0,
          is_async_ads_in_headload_enabled: 0,
          rti_delivery_backend: 0,
          is_async_ads_double_request: 0,
          will_sound_on: 0,
          is_async_ads_rti: 0,
          reason: 'cold_start_fetch'
        }

        console.log(form)
        console.log(qs.stringify(form))

        try {
          const response = await axios.post(
            '/api/v1/feed/timeline/',
            qs.stringify(form),
            {
              baseURL: 'https://i.instagram.com',
              headers: timelineHeaders2
            }
          )
          console.log(response)
        } catch (e) {
          console.log(e)
        }

        // queryTimelineFeed(form)
      }} />
      {/* <Button title="timeline cheat" onPress={async () => {
        try {
          const response = await axios.post(
            'http://192.168.1.17:5500/timeline',
            { secrets, device }
          )
          console.log(response)
        } catch (e) {
          console.log(e)
        }
      }} /> */}
      <Text>{t("form.placeholder.username")}</Text>
    </View>
  )
}

export default Home
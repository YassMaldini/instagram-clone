import { useEffect, useState } from "react";
import { Button } from "react-native";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDevice, signOut } from "../../../../store/authentication/authenticationActions/authenticationActions";
import { secretsSelector, profileSelector, deviceSelector } from "../../../../store/authentication/authenticationReducerSelectors";
import api from "../../../../utils/api/api";
import Box from "../../../designSystem/Box/Box";
import Text from "../../../designSystem/Text/Text";
import SignInForm from "./SignInForm/SignInForm";

export const loginHeaders = {
  'Host': 'i.instagram.com',
  'X-Ig-App-Locale': 'fr_FR',
  'X-Ig-Device-Locale': 'fr_FR',
  'X-Ig-Mapped-Locale': 'fr_FR',
  'X-Pigeon-Session-Id': 'UFS-6834dfa9-e68e-4bf9-95a8-9e401a49951e-0',
  'X-Pigeon-Rawclienttime': '1663776984.285',
  'X-Ig-Bandwidth-Speed-Kbps': '324.000',
  'X-Ig-Bandwidth-Totalbytes-B': '0',
  'X-Ig-Bandwidth-Totaltime-Ms': '0',
  'X-Ig-App-Startup-Country': 'unknown',
  'X-Bloks-Version-Id': '8dab28e76d3286a104a7f1c9e0c632386603a488cf584c9b49161c2f5182fe07',
  'X-Ig-Www-Claim': '0',
  'X-Bloks-Is-Layout-Rtl': 'false',
  'X-Ig-Device-Id': 'af32a7f4-9663-477a-b219-fb865a997c51',
  'X-Ig-Android-Id': 'android-6e357c11168f3db6',
  'X-Ig-Timezone-Offset': '7200',
  'X-Ig-Nav-Chain': 'AD1:login_landing:1:button::',
  'X-Fb-Connection-Type': 'WIFI',
  'X-Ig-Connection-Type': 'WIFI',
  'X-Ig-Capabilities': '3brTv10=',
  'X-Ig-App-Id': '567067343352427',
  'Priority': 'u=3',
  'User-Agent': 'Instagram 237.0.0.14.102 Android (22/5.1.1; 240dpi; 540x960; samsung; SM-J200F; j2lte; universal3475; fr_FR; 373310554)',
  'Accept-Language': 'fr-FR, en-US',
  'X-Mid': 'YwnNngABAAEIWOZxhqRvjRWETYww',
  'Ig-Intended-User-Id': '0',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Content-Length': '1898',
  'Accept-Encoding': 'gzip, deflate',
  'X-Fb-Http-Engine': 'Liger',
  'X-Fb-Client-Ip': 'True',
  'X-Fb-Server-Cluster': 'True'
}

export const qeHeaders = {
  'X-DEVICE-ID': 'ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a',
  'User-Agent': 'Instagram 121.0.0.29.119 Android (26/8.0.0; 480dpi; 1080x2076; samsung; SM-A530F; jackpotlte; samsungexynos7885; en_US; 185203708)',
  'X-Ads-Opt-Out': '0',
  'X-CM-Bandwidth-KBPS': '-1.000',
  'X-CM-Latency': '-1.000',
  'X-IG-App-Locale': 'en_US',
  'X-IG-Device-Locale': 'en_US',
  'X-Pigeon-Session-Id': 'c33e7f7f-45ce-52fe-89a4-287c84240938',
  'X-Pigeon-Rawclienttime': '1663844228.733',
  'X-IG-Connection-Speed': '2280kbps',
  'X-IG-Bandwidth-Speed-KBPS': '-1.000',
  'X-IG-Bandwidth-TotalBytes-B': '0',
  'X-IG-Bandwidth-TotalTime-MS': '0',
  'X-IG-EU-DC-ENABLED': undefined,
  'X-IG-Extended-CDN-Thumbnail-Cache-Busting-Value': '1000',
  'X-Bloks-Version-Id': '1b030ce63a06c25f3e4de6aaaf6802fe1e76401bc5ab6e5fb85ed6c2d333e0c7',
  'X-MID': undefined,
  'X-IG-WWW-Claim': '0',
  'X-Bloks-Is-Layout-RTL': 'false',
  'X-IG-Connection-Type': 'WIFI',
  'X-IG-Capabilities': '3brTvwE=',
  'X-Ig-App-Id': '567067343352427',
  'X-Ig-Device-Id': 'ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a',
  'X-Ig-Android-Id': 'android-28645422301697a2',
  'Accept-Language': 'en-US',
  'X-FB-HTTP-Engine': 'Liger',
  Authorization: undefined,
  Host: 'i.instagram.com',
  'Accept-Encoding': 'gzip',
  Connection: 'close'
}

export const qeHeaders2 = {
  'Host': 'i.instagram.com',
  'X-Ig-App-Locale': 'fr_FR',
  'X-Ig-Device-Locale': 'fr_FR',
  'X-Ig-Mapped-Locale': 'fr_FR',
  'X-Pigeon-Session-Id': 'UFS-6834dfa9-e68e-4bf9-95a8-9e401a49952e-0',
  'X-Pigeon-Rawclienttime': '1663776984.285',
  'X-Ig-Bandwidth-Speed-Kbps': '324.000',
  'X-Ig-Bandwidth-Totalbytes-B': '0',
  'X-Ig-Bandwidth-Totaltime-Ms': '0',
  'X-Ig-App-Startup-Country': 'unknown',
  'X-Bloks-Version-Id': '8dab28e76d3286a104a7f1c9e0c632386603a488cf584c9b49161c2f5182fe09',
  'X-Ig-Www-Claim': '0',
  'X-Bloks-Is-Layout-Rtl': 'false',
  'X-Ig-Device-Id': 'af32a7f4-9663-477a-b219-fb865a997c55',
  'X-Ig-Android-Id': 'android-6e357c11168f3db7',
  'X-Ig-Timezone-Offset': '7200',
  'X-Ig-Nav-Chain': 'AD1:login_landing:1:button::',
  'X-Fb-Connection-Type': 'WIFI',
  'X-Ig-Connection-Type': 'WIFI',
  'X-Ig-Capabilities': '3brTv10=',
  'X-Ig-App-Id': '567067343352428',
  'Priority': 'u=3',
  'User-Agent': 'Instagram 237.0.0.14.102 Android (22/5.1.1; 240dpi; 540x960; samsung; SM-J200F; j2lte; universal3475; fr_FR; 373310554)',
  'Accept-Language': 'fr-FR, en-US',
  // 'X-Mid': 'YwnNngABAAEIWOZxhqRvjRWETYww',
  'Ig-Intended-User-Id': '0',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Accept-Encoding': 'gzip, deflate',
  'X-Fb-Http-Engine': 'Liger',
  'X-Fb-Client-Ip': 'True',
  'X-Fb-Server-Cluster': 'True'
}

const SignIn = () => {
  const secrets = useSelector(secretsSelector);
  const profile = useSelector(profileSelector);
  const device = useSelector(deviceSelector);
  
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const [status, setStatus] = useState(0);

  useEffect(() => {
    (async () => {
      // const response = await api.post(
      //   '/api/v1/qe/sync/',
      //   qs.stringify({
      //     signed_body: 'ab337796a606a75045859f9efcfb91a00d95766f8ee1a50adf352fb5403fc9ae.{"id":"ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a","experiments":"ig_android_fci_onboarding_friend_search,ig_android_device_detection_info_upload,ig_android_account_linking_upsell_universe,ig_android_direct_main_tab_universe_v2,ig_android_allow_account_switch_once_media_upload_finish_universe,ig_android_sign_in_help_only_one_account_family_universe,ig_android_sms_retriever_backtest_universe,ig_android_direct_add_direct_to_android_native_photo_share_sheet,ig_android_spatial_account_switch_universe,ig_growth_android_profile_pic_prefill_with_fb_pic_2,ig_account_identity_logged_out_signals_global_holdout_universe,ig_android_prefill_main_account_username_on_login_screen_universe,ig_android_login_identifier_fuzzy_match,ig_android_mas_remove_close_friends_entrypoint,ig_android_shared_email_reg_universe,ig_android_video_render_codec_low_memory_gc,ig_android_custom_transitions_universe,ig_android_push_fcm,multiple_account_recovery_universe,ig_android_show_login_info_reminder_universe,ig_android_email_fuzzy_matching_universe,ig_android_one_tap_aymh_redesign_universe,ig_android_direct_send_like_from_notification,ig_android_suma_landing_page,ig_android_prefetch_debug_dialog,ig_android_smartlock_hints_universe,ig_android_black_out,ig_activation_global_discretionary_sms_holdout,ig_android_video_ffmpegutil_pts_fix,ig_android_multi_tap_login_new,ig_save_smartlock_universe,ig_android_caption_typeahead_fix_on_o_universe,ig_android_enable_keyboardlistener_redesign,ig_android_sign_in_password_visibility_universe,ig_android_nux_add_email_device,ig_android_direct_remove_view_mode_stickiness_universe,ig_android_hide_contacts_list_in_nux,ig_android_new_users_one_tap_holdout_universe,ig_android_ingestion_video_support_hevc_decoding,ig_android_mas_notification_badging_universe,ig_android_secondary_account_in_main_reg_flow_universe,ig_android_secondary_account_creation_universe,ig_android_account_recovery_auto_login,ig_android_pwd_encrytpion,ig_android_bottom_sheet_keyboard_leaks,ig_android_sim_info_upload,ig_android_mobile_http_flow_device_universe,ig_android_hide_fb_button_when_not_installed_universe,ig_android_account_linking_on_concurrent_user_session_infra_universe,ig_android_targeted_one_tap_upsell_universe,ig_android_gmail_oauth_in_reg,ig_android_account_linking_flow_shorten_universe,ig_android_vc_interop_use_test_igid_universe,ig_android_notification_unpack_universe,ig_android_registration_confirmation_code_universe,ig_android_device_based_country_verification,ig_android_log_suggested_users_cache_on_error,ig_android_reg_modularization_universe,ig_android_device_verification_separate_endpoint,ig_android_universe_noticiation_channels,ig_android_account_linking_universe,ig_android_hsite_prefill_new_carrier,ig_android_one_login_toast_universe,ig_android_retry_create_account_universe,ig_android_family_apps_user_values_provider_universe,ig_android_reg_nux_headers_cleanup_universe,ig_android_mas_ui_polish_universe,ig_android_device_info_foreground_reporting,ig_android_shortcuts_2019,ig_android_device_verification_fb_signup,ig_android_onetaplogin_optimization,ig_android_passwordless_account_password_creation_universe,ig_android_black_out_toggle_universe,ig_video_debug_overlay,ig_android_ask_for_permissions_on_reg,ig_assisted_login_universe,ig_android_security_intent_switchoff,ig_android_device_info_job_based_reporting,ig_android_add_account_button_in_profile_mas_universe,ig_android_add_dialog_when_delinking_from_child_account_universe,ig_android_passwordless_auth,ig_radio_button_universe_2,ig_android_direct_main_tab_account_switch,ig_android_recovery_one_tap_holdout_universe,ig_android_modularized_dynamic_nux_universe,ig_android_fb_account_linking_sampling_freq_universe,ig_android_fix_sms_read_lollipop,ig_android_access_flow_prefil"}'
      //   })
      // )
      
      // const response = await authenticationApi.post(
      //   '/login',
      //   qs.stringify({ username: 'yassmaldox', password: 'Eponge00', device: generateDevice('yassmaldox') }),
      //   {
      //     headers: qeHeaders2
      //   }
      // )

      // console.log('response.headers', response.headers)
      // console.log('response.data', response.data)
      
      // const response2 = await axios.post(
      //   '/api/v1/accounts/login/',
      //   qs.stringify({
      //     'signed_body': 'SIGNATURE.{"jazoest":"22426","country_codes":"[{\\"country_code\\":\\"33\\",\\"source\\":[\\"default\\"]}]","phone_id":"d5a71ef2-a01b-4786-88e4-0dceb19d8418","enc_password":"#PWD_INSTAGRAM:4:1663776984:AcPaJmHK64MmFLmciFEAARIRUBlIB2fpeEv17PpoNQZ/dxKyqPt0L62ozFTIUZGDuhgW6onPpuA56co6t4IUr6Fi6tztf5oByitiwFMKxI3HACqeaNYn42XfaE03E14pkIEhdctZtzq80kdScarVn2b3/UpsBUn+gY+jVUcPBys/34XiWsm/iyzQre3OzX566ruveBDIXEZ5mrhRrlGqz1Mvmr+LaoBEBH91pLLszgVguHqQdyBzgaSNyTlS2ISQuE7UxsVLkVfWDHJuQVb6VRu3imBL3rDMgy4siGDc8yHU/XPas9MrHiOXCQyxUUhmCExGjxBcfiiQBK/4jr1HaucvfBDHz/i/lT+V7li6CmWbtNQFv7qoEYbAUEkJOlPEcp4YFu3Kjww=","username":"yassmald","adid":"0ba953e1-48d3-41cd-a63f-7e50fb7fcd44","guid":"af32a7f4-9663-477a-b219-fb865a997c51","device_id":"android-6e357c11168f3db6","google_tokens":"[\\"eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwOWMwNTdkM2JkZDhjMDhmMmQ1NzM5Nzg4NjMyNjczZjdjNjI0MGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4OTQwMzI3NjEyNDYtZ3Jjb2Fqb3YyaGRvMGwwNW0yaDN1ZGVzYzFqdG50OHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4OTQwMzI3NjEyNDYtN2Y1aWkwZHNjbXR2cXU5bGNzN2JxdWlpMHZiNmRkYzguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDM3MDA0MzE5MTMwNDQ3MjQxMDYiLCJlbWFpbCI6Inlhc3MuY2FybG9zc3NAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY2Mzc3Njk2OSwiZXhwIjoxNjYzNzgwNTY5fQ.S2jmkCX-98oj66UYDiA4jGi76v9l4Nr-0ioUKsn8aNVYqAlga7viV990du6zlCmDQWIWBhDXHWkpiQUzJE1zwKf74uXKcKdxk382qH8Ceikw0jncoE-gY0vzz2Q0cx2rdeJB9-SX7ebtY-jcjO9vCbKcgBZmSaRAXGDPxKS-WLsOI3a8felmZZpuLTRjJNdzohhMo-_B1_rMZ9_5m3uVl8CmfLbX6osHuWL1CiZCj933dGSBLl-bhxJJmxflOWV6Ouyl_oQQ5XPDMvlqGg3cKBVp8oJ3WANDy0aL3MArHUzkLhMnnsJbdDGbEhdVVrhGJ3Rt0l2YZMorcKQgEh0C6A\\"]","login_attempt_count":"0"}'
      // }),{
      //     baseURL: 'https://i.instagram.com',
      //     headers: qeHeaders2
      //   }
      // )
      
      // const response = await authenticationApi.post(
      //   '/auth/sign_in',
      //   qs.stringify({
      //     'signed_body': 'SIGNATURE.{"jazoest":"22426","country_codes":"[{\\"country_code\\":\\"33\\",\\"source\\":[\\"default\\"]}]","phone_id":"d5a71ef2-a01b-4786-88e4-0dceb19d8418","enc_password":"#PWD_INSTAGRAM:4:1663776984:AcPaJmHK64MmFLmciFEAARIRUBlIB2fpeEv17PpoNQZ/dxKyqPt0L62ozFTIUZGDuhgW6onPpuA56co6t4IUr6Fi6tztf5oByitiwFMKxI3HACqeaNYn42XfaE03E14pkIEhdctZtzq80kdScarVn2b3/UpsBUn+gY+jVUcPBys/34XiWsm/iyzQre3OzX566ruveBDIXEZ5mrhRrlGqz1Mvmr+LaoBEBH91pLLszgVguHqQdyBzgaSNyTlS2ISQuE7UxsVLkVfWDHJuQVb6VRu3imBL3rDMgy4siGDc8yHU/XPas9MrHiOXCQyxUUhmCExGjxBcfiiQBK/4jr1HaucvfBDHz/i/lT+V7li6CmWbtNQFv7qoEYbAUEkJOlPEcp4YFu3Kjww=","username":"yassmald","adid":"0ba953e1-48d3-41cd-a63f-7e50fb7fcd44","guid":"af32a7f4-9663-477a-b219-fb865a997c51","device_id":"android-6e357c11168f3db6","google_tokens":"[\\"eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwOWMwNTdkM2JkZDhjMDhmMmQ1NzM5Nzg4NjMyNjczZjdjNjI0MGYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4OTQwMzI3NjEyNDYtZ3Jjb2Fqb3YyaGRvMGwwNW0yaDN1ZGVzYzFqdG50OHUuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4OTQwMzI3NjEyNDYtN2Y1aWkwZHNjbXR2cXU5bGNzN2JxdWlpMHZiNmRkYzguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDM3MDA0MzE5MTMwNDQ3MjQxMDYiLCJlbWFpbCI6Inlhc3MuY2FybG9zc3NAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlhdCI6MTY2Mzc3Njk2OSwiZXhwIjoxNjYzNzgwNTY5fQ.S2jmkCX-98oj66UYDiA4jGi76v9l4Nr-0ioUKsn8aNVYqAlga7viV990du6zlCmDQWIWBhDXHWkpiQUzJE1zwKf74uXKcKdxk382qH8Ceikw0jncoE-gY0vzz2Q0cx2rdeJB9-SX7ebtY-jcjO9vCbKcgBZmSaRAXGDPxKS-WLsOI3a8felmZZpuLTRjJNdzohhMo-_B1_rMZ9_5m3uVl8CmfLbX6osHuWL1CiZCj933dGSBLl-bhxJJmxflOWV6Ouyl_oQQ5XPDMvlqGg3cKBVp8oJ3WANDy0aL3MArHUzkLhMnnsJbdDGbEhdVVrhGJ3Rt0l2YZMorcKQgEh0C6A\\"]","login_attempt_count":"0"}'
      //   }),
      //   {
      //     headers: loginHeaders
      //   }
      // )

      // console.log('apisauce', response.headers)

      // console.log('axios', response2.headers)
      // console.log('axios status', response2.status)

      // if (response.status === 200) {
      //   api.setHeaders({...qeHeaders2 as HEADERS})
      // }

      // setStatus(response.status as number)
    })()
  }, [])

  // useEffect(() => console.log('authenticationReducer', authenticationReducer(undefined, {device: null, type: "SET_DEVICE"})))

  return (
    <Box flex={1} backgroundColor="secondaryBackground">
      <Text>DD</Text>
      <SignInForm />
      <Box marginTop={"l"}>
        <Button title="Headers" onPress={async () => console.log(api.headers)} />
        <Button title="secrets" onPress={async () => console.log(secrets)} />
        <Button title="profile" onPress={async () => console.log(profile)} />
        <Button title="device" onPress={async () => console.log(device)} />
        {/* <Button title="data" onPress={async () => console.log(response)} /> */}
        <Button title="signOut" onPress={async () => signOut(queryClient)(dispatch)} />
        <Text 
          marginVertical="l" 
          textAlign="center" 
          fontSize={24}
          // {...{color: status === 200 ? 'green' : 'red'}}
        >{status}</Text>
      </Box>
    </Box>
  )
}

export default SignIn;
import { create } from "apisauce";
import { random } from "lodash";

export const options = {
  method: 'POST',
  url: '/api/v1/qe/sync/',
  headers: {
    'X-DEVICE-ID': 'ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a',
    'User-Agent': 'Instagram 121.0.0.29.119 Android (26/8.0.0; 480dpi; 1080x2076; samsung; SM-A530F; jackpotlte; samsungexynos7885; en_US; 185203708)',
    'X-Ads-Opt-Out': '0',
    'X-CM-Bandwidth-KBPS': '-1.000',
    'X-CM-Latency': '-1.000',
    'X-IG-App-Locale': 'en_US',
    'X-IG-Device-Locale': 'en_US',
    'X-Pigeon-Session-Id': 'b122f931-17d3-5a7f-952b-77501453d7aa',
    'X-Pigeon-Rawclienttime': (Date.now() / 1000).toFixed(3),
    'X-IG-Connection-Speed': `${random(1000, 3700)}kbps`,
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
    'X-IG-App-ID': '567067343352427',
    'X-IG-Device-ID': 'ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a',
    'X-IG-Android-ID': 'android-28645422301697a2',
    'Accept-Language': 'en-US',
    'X-FB-HTTP-Engine': 'Liger',
    Authorization: undefined,
    Host: 'i.instagram.com',
    'Accept-Encoding': 'gzip',
    Connection: 'close'
  },
  form: {
    ig_sig_key_version: '4',
    signed_body: 'ab337796a606a75045859f9efcfb91a00d95766f8ee1a50adf352fb5403fc9ae.{"id":"ef196c7f-54dc-5ff4-a124-8b3ec2a01d3a","experiments":"ig_android_fci_onboarding_friend_search,ig_android_device_detection_info_upload,ig_android_account_linking_upsell_universe,ig_android_direct_main_tab_universe_v2,ig_android_allow_account_switch_once_media_upload_finish_universe,ig_android_sign_in_help_only_one_account_family_universe,ig_android_sms_retriever_backtest_universe,ig_android_direct_add_direct_to_android_native_photo_share_sheet,ig_android_spatial_account_switch_universe,ig_growth_android_profile_pic_prefill_with_fb_pic_2,ig_account_identity_logged_out_signals_global_holdout_universe,ig_android_prefill_main_account_username_on_login_screen_universe,ig_android_login_identifier_fuzzy_match,ig_android_mas_remove_close_friends_entrypoint,ig_android_shared_email_reg_universe,ig_android_video_render_codec_low_memory_gc,ig_android_custom_transitions_universe,ig_android_push_fcm,multiple_account_recovery_universe,ig_android_show_login_info_reminder_universe,ig_android_email_fuzzy_matching_universe,ig_android_one_tap_aymh_redesign_universe,ig_android_direct_send_like_from_notification,ig_android_suma_landing_page,ig_android_prefetch_debug_dialog,ig_android_smartlock_hints_universe,ig_android_black_out,ig_activation_global_discretionary_sms_holdout,ig_android_video_ffmpegutil_pts_fix,ig_android_multi_tap_login_new,ig_save_smartlock_universe,ig_android_caption_typeahead_fix_on_o_universe,ig_android_enable_keyboardlistener_redesign,ig_android_sign_in_password_visibility_universe,ig_android_nux_add_email_device,ig_android_direct_remove_view_mode_stickiness_universe,ig_android_hide_contacts_list_in_nux,ig_android_new_users_one_tap_holdout_universe,ig_android_ingestion_video_support_hevc_decoding,ig_android_mas_notification_badging_universe,ig_android_secondary_account_in_main_reg_flow_universe,ig_android_secondary_account_creation_universe,ig_android_account_recovery_auto_login,ig_android_pwd_encrytpion,ig_android_bottom_sheet_keyboard_leaks,ig_android_sim_info_upload,ig_android_mobile_http_flow_device_universe,ig_android_hide_fb_button_when_not_installed_universe,ig_android_account_linking_on_concurrent_user_session_infra_universe,ig_android_targeted_one_tap_upsell_universe,ig_android_gmail_oauth_in_reg,ig_android_account_linking_flow_shorten_universe,ig_android_vc_interop_use_test_igid_universe,ig_android_notification_unpack_universe,ig_android_registration_confirmation_code_universe,ig_android_device_based_country_verification,ig_android_log_suggested_users_cache_on_error,ig_android_reg_modularization_universe,ig_android_device_verification_separate_endpoint,ig_android_universe_noticiation_channels,ig_android_account_linking_universe,ig_android_hsite_prefill_new_carrier,ig_android_one_login_toast_universe,ig_android_retry_create_account_universe,ig_android_family_apps_user_values_provider_universe,ig_android_reg_nux_headers_cleanup_universe,ig_android_mas_ui_polish_universe,ig_android_device_info_foreground_reporting,ig_android_shortcuts_2019,ig_android_device_verification_fb_signup,ig_android_onetaplogin_optimization,ig_android_passwordless_account_password_creation_universe,ig_android_black_out_toggle_universe,ig_video_debug_overlay,ig_android_ask_for_permissions_on_reg,ig_assisted_login_universe,ig_android_security_intent_switchoff,ig_android_device_info_job_based_reporting,ig_android_add_account_button_in_profile_mas_universe,ig_android_add_dialog_when_delinking_from_child_account_universe,ig_android_passwordless_auth,ig_radio_button_universe_2,ig_android_direct_main_tab_account_switch,ig_android_recovery_one_tap_holdout_universe,ig_android_modularized_dynamic_nux_universe,ig_android_fb_account_linking_sampling_freq_universe,ig_android_fix_sms_read_lollipop,ig_android_access_flow_prefil"}'
  },
  baseUrl: 'https://i.instagram.com/',
  resolveWithFullResponse: true,
  proxy: undefined,
  simple: false,
  jar: {
    _jar: { enableLooseMode: true, store: { idx: { } } }
  },
  strictSSL: false,
  gzip: true
}

const api = create({
  baseURL: "https://i.instagram.com"
})

export const authenticationApi = create({
  baseURL: "http://192.168.1.17:5000"
})

export default api
export interface TopicalExploreFeedResponseRootObject {
  sectional_items: TopicalExploreFeedResponseSectionalItemsItem[];
  rank_token: string;
  auto_load_more_enabled: boolean;
  more_available: boolean;
  next_max_id: string;
  max_id: string;
  status: string;
}
export interface TopicalExploreFeedResponseSectionalItemsItem {
  layout_type: string;
  layout_content: TopicalExploreFeedResponseLayout_content;
  feed_type: string;
  explore_item_info: TopicalExploreFeedResponseExplore_item_info;
}
export interface TopicalExploreFeedResponseLayout_content {
  one_by_two_item?: TopicalExploreFeedResponseOne_by_two_item;
  two_by_two_item?: TopicalExploreFeedResponseTwo_by_two_item;
  fill_items?: TopicalExploreFeedResponseFillItemsItem[];
  medias?: TopicalExploreFeedResponseMediasItem[];
}
export interface TopicalExploreFeedResponseTwo_by_two_item {
  channel?: TopicalExploreFeedResponseChannel;
  igtv?: TopicalExploreFeedResponseIgtv;
}
export interface TopicalExploreFeedResponseChannel {
  title: string;
  channel_id: string;
  channel_type: string;
  header: string;
  context: string;
  media: TopicalExploreFeedResponseMedia;
  media_count: number;
}
export interface TopicalExploreFeedResponseMedia {
  taken_at: number;
  pk: string;
  id: number;
  device_timestamp: number | string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  location?: TopicalExploreFeedResponseLocation;
  lat?: number;
  lng?: number;
  user: TopicalExploreFeedResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  image_versions2?: TopicalExploreFeedResponseImage_versions2;
  original_width?: number;
  original_height?: number;
  like_count?: number;
  has_liked?: boolean;
  top_likers?: string[];
  photo_of_you: boolean;
  can_see_insights_as_brand: boolean;
  is_dash_eligible?: number;
  video_dash_manifest?: string;
  video_codec?: string;
  number_of_qualities?: number;
  video_versions?: TopicalExploreFeedResponseVideoVersionsItem[];
  has_audio?: boolean;
  video_duration?: number;
  view_count?: number;
  caption: TopicalExploreFeedResponseCaption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  sharing_friction_info: TopicalExploreFeedResponseSharing_friction_info;
  is_in_profile_grid: boolean;
  profile_grid_control_enabled: boolean;
  is_shop_the_look_eligible: boolean;
  deleted_reason: number;
  explore_hide_comments?: boolean;
  algorithm?: string;
  connection_id?: string;
  mezql_token: string;
  explore_context?: string;
  explore_source_token?: string;
  explore: TopicalExploreFeedResponseExplore;
  impression_token?: string;
  product_tags?: TopicalExploreFeedResponseProduct_tags;
  usertags?: TopicalExploreFeedResponseUsertags;
  carousel_media_count?: number;
  carousel_media?: TopicalExploreFeedResponseCarouselMediaItem[];
  title?: string;
  product_type?: string;
  nearly_complete_copyright_match?: boolean;
  thumbnails?: TopicalExploreFeedResponseThumbnails;
  is_post_live?: boolean;
}
export interface TopicalExploreFeedResponseLocation {
  pk: number;
  name: string;
  address: string;
  city: string;
  short_name: string;
  lng: number;
  lat: number;
  external_source: string;
  facebook_places_id: number;
}
export interface TopicalExploreFeedResponseUser {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id?: string;
  friendship_status?: TopicalExploreFeedResponseFriendship_status;
  is_verified: boolean;
  has_anonymous_profile_picture?: boolean;
  is_unpublished?: boolean;
  is_favorite?: boolean;
  latest_reel_media?: number;
  account_badges?: any[];
  show_shoppable_feed?: boolean;
  shoppable_posts_count?: number;
  can_be_reported_as_fraud?: boolean;
  merchant_checkout_style?: string;
  seller_shoppable_feed_type?: string;
}
export interface TopicalExploreFeedResponseFriendship_status {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
}
export interface TopicalExploreFeedResponseImage_versions2 {
  candidates: TopicalExploreFeedResponseCandidatesItem[];
  additional_candidates?: TopicalExploreFeedResponseAdditional_candidates;
}
export interface TopicalExploreFeedResponseCandidatesItem {
  width: number;
  height: number;
  url: string;
  scans_profile?: string;
  estimated_scans_sizes?: number[];
}
export interface TopicalExploreFeedResponseVideoVersionsItem {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}
export interface TopicalExploreFeedResponseCaption {
  pk: string;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  user: TopicalExploreFeedResponseUser;
  is_covered: boolean;
  media_id: string;
  private_reply_status: number;
  has_translation?: boolean;
}
export interface TopicalExploreFeedResponseSharing_friction_info {
  should_have_sharing_friction: boolean;
  bloks_app_url: null;
}
export interface TopicalExploreFeedResponseExplore {
  explanation: string;
  actor_id?: number;
  source_token?: string;
}
export interface TopicalExploreFeedResponseFillItemsItem {
  media: TopicalExploreFeedResponseMedia;
}
export interface TopicalExploreFeedResponseProduct_tags {
  in: TopicalExploreFeedResponseInItem[];
}
export interface TopicalExploreFeedResponseInItem {
  product?: TopicalExploreFeedResponseProduct;
  position: string[] | number[];
  user?: TopicalExploreFeedResponseUser;
  start_time_in_video_in_sec?: null;
  duration_in_video_in_sec?: null;
}
export interface TopicalExploreFeedResponseProduct {
  name: string;
  price: string;
  current_price: string;
  full_price: string;
  product_id: string;
  merchant: TopicalExploreFeedResponseMerchant;
  compound_product_id: string;
  description: string;
  retailer_id: string;
  has_viewer_saved: boolean;
  main_image: TopicalExploreFeedResponseMain_image;
  thumbnail_image: TopicalExploreFeedResponseThumbnail_image;
  review_status: string;
  external_url: string;
  checkout_style: string;
  can_share_to_story: boolean;
  can_see_insights_for_viewer: boolean;
  full_price_stripped: string;
  current_price_stripped: string;
  launch_information?: TopicalExploreFeedResponseLaunch_information;
  rich_text_description?: TopicalExploreFeedResponseRichTextDescriptionItem[];
}
export interface TopicalExploreFeedResponseMerchant {
  pk: number;
  username: string;
  profile_pic_url: string;
}
export interface TopicalExploreFeedResponseMain_image {
  image_versions2: TopicalExploreFeedResponseImage_versions2;
  preview: string;
}
export interface TopicalExploreFeedResponseThumbnail_image {
  image_versions2: TopicalExploreFeedResponseImage_versions2;
  preview: string;
}
export interface TopicalExploreFeedResponseLaunch_information {
  launch_date: number;
  has_launched: boolean;
  is_ig_exclusive: boolean;
  drops_campaign_id: string;
}
export interface TopicalExploreFeedResponseRichTextDescriptionItem {
  block_type: string;
  depth: number;
  text_with_entities: TopicalExploreFeedResponseText_with_entities;
}
export interface TopicalExploreFeedResponseText_with_entities {
  text: string;
  inline_style_ranges: TopicalExploreFeedResponseInlineStyleRangesItem[];
}
export interface TopicalExploreFeedResponseInlineStyleRangesItem {
  inline_style: number;
  length: number;
  offset: number;
}
export interface TopicalExploreFeedResponseExplore_item_info {
  num_columns: number;
  total_num_columns: number;
  aspect_ratio: number;
  autoplay: boolean;
}
export interface TopicalExploreFeedResponseMediasItem {
  media: TopicalExploreFeedResponseMedia;
}
export interface TopicalExploreFeedResponseUsertags {
  in: TopicalExploreFeedResponseInItem[];
}
export interface TopicalExploreFeedResponseCarouselMediaItem {
  id: string;
  media_type: number;
  image_versions2: TopicalExploreFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  pk: string;
  carousel_parent_id: string;
  can_see_insights_as_brand: boolean;
  sharing_friction_info: TopicalExploreFeedResponseSharing_friction_info;
  usertags?: TopicalExploreFeedResponseUsertags;
  product_tags?: TopicalExploreFeedResponseProduct_tags;
}
export interface TopicalExploreFeedResponseIgtv {
  media: TopicalExploreFeedResponseMedia;
  tv_guide: TopicalExploreFeedResponseTv_guide;
  display_content_metadata: boolean;
}
export interface TopicalExploreFeedResponseThumbnails {
  video_length: number;
  thumbnail_width: number;
  thumbnail_height: number;
  thumbnail_duration: string;
  sprite_urls: string[];
  thumbnails_per_row: number;
  max_thumbnails_per_sprite: number;
  sprite_width: number;
  sprite_height: number;
  rendered_width: number;
}
export interface TopicalExploreFeedResponseAdditional_candidates {
  igtv_first_frame: TopicalExploreFeedResponseIgtv_first_frame;
  first_frame: TopicalExploreFeedResponseFirst_frame;
}
export interface TopicalExploreFeedResponseIgtv_first_frame {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
  estimated_scans_sizes: number[];
}
export interface TopicalExploreFeedResponseFirst_frame {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
  estimated_scans_sizes: number[];
}
export interface TopicalExploreFeedResponseTv_guide {
  channels: TopicalExploreFeedResponseChannelsItem[];
}
export interface TopicalExploreFeedResponseChannelsItem {
  id: string;
  items: TopicalExploreFeedResponseItemsItem[];
  more_available: boolean;
  title: string;
  type: string;
  max_id: string;
  user_dict: null;
  description: null;
  cover_photo_url: null;
  approx_total_videos: null;
  destination_client_configs: null;
}
export interface TopicalExploreFeedResponseItemsItem {
  taken_at: number;
  pk: string;
  id: string;
  device_timestamp: number | string;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  user: TopicalExploreFeedResponseUser;
  can_viewer_reshare: boolean;
  caption_is_edited: boolean;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  has_more_comments: boolean;
  max_num_visible_preview_comments: number;
  preview_comments: any[];
  can_view_more_preview_comments: boolean;
  comment_count: number;
  title: string;
  product_type: string;
  nearly_complete_copyright_match: boolean;
  thumbnails: TopicalExploreFeedResponseThumbnails;
  is_post_live: boolean;
  image_versions2: TopicalExploreFeedResponseImage_versions2;
  original_width: number;
  original_height: number;
  photo_of_you: boolean;
  can_see_insights_as_brand: boolean;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: TopicalExploreFeedResponseVideoVersionsItem[];
  has_audio: boolean;
  video_duration: number;
  view_count: number;
  caption: TopicalExploreFeedResponseCaption;
  can_viewer_save: boolean;
  organic_tracking_token: string;
  sharing_friction_info: TopicalExploreFeedResponseSharing_friction_info;
  is_in_profile_grid: boolean;
  profile_grid_control_enabled: boolean;
  is_shop_the_look_eligible: boolean;
  deleted_reason: number;
  explore: TopicalExploreFeedResponseExplore;
  mezql_token: string;
}

// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************
// ************************************************************************************************************

// Generated Typescript

export interface TopicalExploreFeedResponseOne_by_two_item {
  clips: Clips;
}

export interface FundraiserTag {
  has_standalone_fundraiser: boolean;
}

export interface FriendshipStatus {
  following: boolean;
  outgoing_request: boolean;
  is_bestie: boolean;
  is_restricted: boolean;
  is_feed_favorite: boolean;
}

export interface FanClubInfo {
  fan_club_id?: any;
  fan_club_name?: any;
  is_fan_club_referral_eligible?: any;
}

export interface User {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  friendship_status: FriendshipStatus;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  is_unpublished: boolean;
  is_favorite: boolean;
  has_highlight_reels: boolean;
  transparency_product_enabled: boolean;
  account_badges: any[];
  fan_club_info: FanClubInfo;
}

export interface Candidate {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
}

export interface IgtvFirstFrame {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
}

export interface FirstFrame {
  width: number;
  height: number;
  url: string;
  scans_profile: string;
}

export interface AdditionalCandidates {
  igtv_first_frame: IgtvFirstFrame;
  first_frame: FirstFrame;
}

export interface ImageVersions2 {
  candidates: Candidate[];
  additional_candidates: AdditionalCandidates;
}

export interface User2 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}

export interface Caption {
  pk: number;
  user_id: number;
  text: string;
  type: number;
  created_at: number;
  created_at_utc: number;
  content_type: string;
  status: string;
  bit_flags: number;
  did_report_as_spam: boolean;
  share_enabled: boolean;
  user: User2;
  is_covered: boolean;
  is_ranked_comment: boolean;
  media_id: number;
  has_translation: boolean;
  private_reply_status: number;
}

export interface CommentInformTreatment {
  should_have_inform_treatment: boolean;
  text: string;
  url?: any;
  action_type?: any;
}

export interface SharingFrictionInfo {
  should_have_sharing_friction: boolean;
  bloks_app_url?: any;
  sharing_friction_payload?: any;
}

export interface VideoVersion {
  type: number;
  width: number;
  height: number;
  url: string;
  id: string;
}

export interface IgArtist {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}

export interface ConsumptionInfo {
  is_bookmarked: boolean;
  should_mute_audio_reason: string;
  is_trending_in_clips: boolean;
  should_mute_audio_reason_type?: any;
  display_media_id?: any;
}

export interface OriginalSoundInfo {
  audio_asset_id: number;
  music_canonical_id?: any;
  progressive_download_url: string;
  dash_manifest: string;
  ig_artist: IgArtist;
  should_mute_audio: boolean;
  original_media_id: number;
  hide_remixing: boolean;
  duration_in_ms: number;
  time_created: number;
  original_audio_title: string;
  consumption_info: ConsumptionInfo;
  allow_creator_to_rename: boolean;
  can_remix_be_shared_to_fb: boolean;
  formatted_clips_media_count?: any;
  audio_parts: any[];
  is_explicit: boolean;
  original_audio_subtype: string;
  is_audio_automatically_attributed: boolean;
  is_reuse_disabled: boolean;
  is_xpost_from_fb: boolean;
  xpost_fb_creator_info?: any;
}

export interface MusicMetadata {
  music_canonical_id: string;
  audio_type: string;
  music_info?: any;
  original_sound_info: OriginalSoundInfo;
  pinned_media_ids: any[];
}

export interface IgArtist2 {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
}

export interface ConsumptionInfo2 {
  is_bookmarked: boolean;
  should_mute_audio_reason: string;
  is_trending_in_clips: boolean;
  should_mute_audio_reason_type?: any;
  display_media_id?: any;
}

export interface OriginalSoundInfo2 {
  audio_asset_id: number;
  music_canonical_id?: any;
  progressive_download_url: string;
  dash_manifest: string;
  ig_artist: IgArtist2;
  should_mute_audio: boolean;
  original_media_id: number;
  hide_remixing: boolean;
  duration_in_ms: number;
  time_created: number;
  original_audio_title: string;
  consumption_info: ConsumptionInfo2;
  allow_creator_to_rename: boolean;
  can_remix_be_shared_to_fb: boolean;
  formatted_clips_media_count?: any;
  audio_parts: any[];
  is_explicit: boolean;
  original_audio_subtype: string;
  is_audio_automatically_attributed: boolean;
  is_reuse_disabled: boolean;
  is_xpost_from_fb: boolean;
  xpost_fb_creator_info?: any;
}

export interface MashupInfo {
  mashups_allowed: boolean;
  can_toggle_mashups_allowed: boolean;
  has_been_mashed_up: boolean;
  formatted_mashups_count?: any;
  original_media?: any;
  non_privacy_filtered_mashups_media_count: number;
  mashup_type?: any;
  is_creator_requesting_mashup: boolean;
  has_nonmimicable_additional_audio: boolean;
}

export interface ViewerInteractionSettings {
  disable_comment: boolean;
  disable_share: boolean;
  disable_account_click: boolean;
  disable_account_follow: boolean;
  disable_more_options: boolean;
  disable_audio_page_entry: boolean;
  disable_swipe_up_nux: boolean;
  disable_like_count: boolean;
  disable_like_button: boolean;
  show_follow_button_border: boolean;
}

export interface BrandedContentTagInfo {
  can_add_tag: boolean;
}

export interface AudioReattributionInfo {
  should_allow_restore: boolean;
}

export interface AdditionalAudioInfo {
  additional_audio_username?: any;
  audio_reattribution_info: AudioReattributionInfo;
}

export interface AssetRecommendation {
  asset_id: string;
  asset_type: string;
  asset_name: string;
  extra: string;
  cover_artwork_thumbnail_uri: string;
}

export interface AssetRecommendationInfo {
  asset_recommendations: AssetRecommendation[];
}

export interface AudioRankingInfo {
  best_audio_cluster_id: string;
}

export interface MerchandisingPillInfo {
  merchandising_pill_types?: any;
  loop_time: number;
}

export interface ClipsMetadata {
  music_info?: any;
  original_sound_info: OriginalSoundInfo2;
  audio_type: string;
  music_canonical_id: string;
  featured_label?: any;
  mashup_info: MashupInfo;
  nux_info?: any;
  viewer_interaction_settings: ViewerInteractionSettings;
  branded_content_tag_info: BrandedContentTagInfo;
  shopping_info?: any;
  additional_audio_info: AdditionalAudioInfo;
  is_shared_to_fb: boolean;
  breaking_content_info?: any;
  challenge_info?: any;
  reels_on_the_rise_info?: any;
  breaking_creator_info?: any;
  asset_recommendation_info: AssetRecommendationInfo;
  contextual_highlight_info?: any;
  clips_creation_entry_point: string;
  audio_ranking_info: AudioRankingInfo;
  template_info?: any;
  is_fan_club_promo_video?: any;
  disable_use_in_clips_client_cache: boolean;
  content_appreciation_info?: any;
  show_achievements: boolean;
  show_tips: boolean;
  merchandising_pill_info: MerchandisingPillInfo;
  is_public_chat_welcome_video: boolean;
}

export interface SquareCrop {
  crop_left: number;
  crop_right: number;
  crop_top: number;
  crop_bottom: number;
}

export interface MediaCroppingInfo {
  square_crop: SquareCrop;
}

export interface Media {
  taken_at: number;
  pk: number;
  id: string;
  device_timestamp: number;
  media_type: number;
  code: string;
  client_cache_key: string;
  filter_type: number;
  is_unified_video: boolean;
  should_request_ads: boolean;
  original_media_has_visual_reply_media: boolean;
  caption_is_edited: boolean;
  like_and_view_counts_disabled: boolean;
  commerciality_status: string;
  is_paid_partnership: boolean;
  is_visual_reply_commenter_notice_enabled: boolean;
  has_delayed_metadata: boolean;
  fundraiser_tag: FundraiserTag;
  comment_likes_enabled: boolean;
  comment_threading_enabled: boolean;
  max_num_visible_preview_comments: number;
  has_more_comments: boolean;
  comment_count: number;
  can_view_more_preview_comments: boolean;
  hide_view_all_comment_entrypoint: boolean;
  photo_of_you: boolean;
  is_organic_product_tagging_eligible: boolean;
  can_see_insights_as_brand: boolean;
  user: User;
  can_viewer_reshare: boolean;
  like_count: number;
  fb_like_count: number;
  has_liked: boolean;
  image_versions2: ImageVersions2;
  original_width: number;
  original_height: number;
  caption: Caption;
  comment_inform_treatment: CommentInformTreatment;
  sharing_friction_info: SharingFrictionInfo;
  is_dash_eligible: number;
  video_dash_manifest: string;
  video_codec: string;
  number_of_qualities: number;
  video_versions: VideoVersion[];
  has_audio: boolean;
  video_duration: number;
  view_count: number;
  play_count: number;
  fb_play_count: number;
  can_viewer_save: boolean;
  is_in_profile_grid: boolean;
  profile_grid_control_enabled: boolean;
  organic_tracking_token: string;
  has_shared_to_fb: number;
  product_type: string;
  deleted_reason: number;
  integrity_review_decision: string;
  commerce_integrity_review_decision?: any;
  music_metadata: MusicMetadata;
  is_artist_pick: boolean;
  clips_metadata: ClipsMetadata;
  media_cropping_info: MediaCroppingInfo;
  logging_info_token: string;
}

export interface Item {
  media: TopicalExploreFeedResponseMedia;
}

export interface Clips {
  id: string;
  chaining_info?: any;
  items: Item[];
  max_id: string;
  more_available: boolean;
  type: string;
  design: string;
  label: string;
  content_source: string;
  badge_label?: any;
}

// export interface CurrentUserResponseRootObject {
//   user: CurrentUserResponseUser;
//   status: string;
// }
export interface CurrentUserSuccessResponseData {
  pk: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_url: string;
  profile_pic_id: string;
  is_verified: boolean;
  has_anonymous_profile_picture: boolean;
  biography: string;
  can_link_entities_in_bio: boolean;
  biography_with_entities: CurrentUserResponseBiography_with_entities;
  external_url: string;
  has_biography_translation: boolean;
  reel_auto_archive: string;
  hd_profile_pic_versions: CurrentUserResponseHdProfilePicVersionsItem[];
  hd_profile_pic_url_info: CurrentUserResponseHd_profile_pic_url_info;
  show_conversion_edit_entry: boolean;
  allowed_commenter_type: string;
  birthday: null;
  phone_number: string;
  country_code: number;
  national_number: number;
  gender: number;
  email: string;
}
export interface CurrentUserResponseBiography_with_entities {
  raw_text: string;
  entities: any[];
}
export interface CurrentUserResponseHdProfilePicVersionsItem {
  width: number;
  height: number;
  url: string;
}
export interface CurrentUserResponseHd_profile_pic_url_info {
  url: string;
  width: number;
  height: number;
}

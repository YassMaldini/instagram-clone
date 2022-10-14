import { MediaSuccessResponseData } from "../../../../types/api/endpoints/media/media.types";
import MEDIA_ENDPOINTS from "../../../../utils/api/endpoints/mediaEndpoints";
import { MediaMutationVariables } from "./FeedCardActions.types";

const LIKE_PREFIX = '[likeMutation]';

export const likeMutation = async (
  { mediaId, _uid, _uuid }: 
  MediaMutationVariables) => {
  const form = {
    inventory_source: "media_or_ad",
    delivery_class: "organic",
    tap_source: "button",
    media_id: mediaId,
    radio_type: "wifi-none",
    _uid,
    _uuid,
    nav_chain: "MainFeedFragment:feed_timeline:1:cold_start::",
    is_carousel_bumped_post: "false",
    container_module: "feed_timeline",
    feed_position: "0"
  }

  console.log(LIKE_PREFIX, `Fetching media like...`);

  const response = await MEDIA_ENDPOINTS.like({ mediaId, data: form });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(LIKE_PREFIX, `Received media like.`);

  return json as MediaSuccessResponseData;
}

const UNLIKE_PREFIX = '[unlikeMutation]';

export const unlikeMutation = async (
  { mediaId, _uid, _uuid }: 
  MediaMutationVariables) => {
  const form = {
    inventory_source: "media_or_ad",
    delivery_class: "organic",
    tap_source: "button",
    media_id: mediaId,
    radio_type: "wifi-none",
    _uid,
    _uuid,
    nav_chain: "MainFeedFragment:feed_timeline:1:cold_start::",
    is_carousel_bumped_post: "false",
    container_module: "feed_timeline",
    feed_position: "0"
  }

  console.log(UNLIKE_PREFIX, `Fetching media unlike...`);

  const response = await MEDIA_ENDPOINTS.like({ mediaId, data: form });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(UNLIKE_PREFIX, `Received media unlike.`);

  return json as MediaSuccessResponseData;
}

const SAVE_PREFIX = '[saveMutation]';

export const saveMutation = async (
  { mediaId, _uid, _uuid }: 
  MediaMutationVariables) => {
  const form = {
    inventory_source: "media_or_ad",
    delivery_class: "organic",
    tap_source: "button",
    media_id: mediaId,
    radio_type: "wifi-none",
    _uid,
    _uuid,
    nav_chain: "MainFeedFragment:feed_timeline:1:cold_start::",
    is_carousel_bumped_post: "false",
    container_module: "feed_timeline",
    feed_position: "0"
  }

  console.log(SAVE_PREFIX, `Fetching media save...`);

  const response = await MEDIA_ENDPOINTS.save({ mediaId, data: form });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(SAVE_PREFIX, `Received media save.`);

  return json as MediaSuccessResponseData;
}

const UNSAVE_PREFIX = '[unsaveMutation]';

export const unsaveMutation = async (
  { mediaId, _uid, _uuid }: 
  MediaMutationVariables) => {
  const form = {
    inventory_source: "media_or_ad",
    delivery_class: "organic",
    tap_source: "button",
    media_id: mediaId,
    radio_type: "wifi-none",
    _uid,
    _uuid,
    nav_chain: "MainFeedFragment:feed_timeline:1:cold_start::",
    is_carousel_bumped_post: "false",
    container_module: "feed_timeline",
    feed_position: "0"
  }

  console.log(UNSAVE_PREFIX, `Fetching media unsave...`);

  const response = await MEDIA_ENDPOINTS.unsave({ mediaId, data: form });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(UNSAVE_PREFIX, `Received media unsave.`);

  return json as MediaSuccessResponseData;
}
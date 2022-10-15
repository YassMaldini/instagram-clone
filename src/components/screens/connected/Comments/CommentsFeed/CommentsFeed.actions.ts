import { MediaCommentResponse } from "../../../../../types/api/endpoints/media/comment.types"
import MEDIA_ENDPOINTS from "../../../../../utils/api/endpoints/mediaEndpoints";
import { MediaCommentMutationVariables } from "./CommentsFeed.types";

const COMMENT_PREFIX = '[commentMutation]';

export const commentMutation = async (
  { mediaId, _uid, _uuid, commentText }: 
  MediaCommentMutationVariables) => {
  const form = {
    inventory_source: "media_or_ad",
    delivery_class: "organic",
    radio_type: "wifi-none",
    _uid,
    _uuid,
    nav_chain: "MainFeedFragment:feed_timeline:1:cold_start::,CommentThreadFragment:comments_v2:2:button::",
    is_carousel_bumped_post: "false",
    container_module: "comments_v2_feed_timeline",
    feed_position: "0",
    comment_text: commentText
  }

  console.log('form', form)

  console.log(COMMENT_PREFIX, `Trying to comment...`);

  const response = await MEDIA_ENDPOINTS.comment({ mediaId, form });

  const { problem, data: json } = response;

  if (problem) {
    throw json;
  }

  console.log(COMMENT_PREFIX, `Successfully commented.`);

  return json as MediaCommentResponse;
}
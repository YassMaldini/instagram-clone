import { MediaCommentResponseComment } from "../../../../../../types/api/endpoints/media/comment.media.types";
import { MediaCommentsFeedResponseCommentsItem } from "../../../../../../types/api/endpoints/media/comments.media.types";

export interface CommentsItemProps {
  commentItem: MediaCommentsFeedResponseCommentsItem | Partial<MediaCommentsFeedResponseCommentsItem>;
}
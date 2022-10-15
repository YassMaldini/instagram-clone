import { MediaCommentResponseComment } from "../../../../../../types/api/endpoints/media/comment.types";
import { MediaCommentsFeedResponseCommentsItem } from "../../../../../../types/api/endpoints/media/comments.types";

export interface CommentsItemProps {
  commentItem: MediaCommentsFeedResponseCommentsItem | Partial<MediaCommentsFeedResponseCommentsItem>;
}
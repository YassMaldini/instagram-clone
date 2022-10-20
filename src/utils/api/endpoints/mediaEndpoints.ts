import { ErrorResponseData } from '../../../types/api/endpoints/endpoints.types';
import api from '../api';
import qs from 'qs';
import { MediaSuccessResponseData } from '../../../types/api/endpoints/media/media.types';
import { MediaCommentsFeedResponse } from '../../../types/api/endpoints/media/comments.media.types';
import { QueryCommentsOptions } from '../../../hooks/feed/useComments/useComments.types';
import { MediaCommentResponse } from '../../../types/api/endpoints/media/comment.media.types';

const MEDIA_ENDPOINTS = Object.freeze({
  like: ({ mediaId, data }: { mediaId: string; data: any }) =>
    api.post<MediaSuccessResponseData, ErrorResponseData>(
      `/media/${mediaId}/like/`,
      qs.stringify(data)
    ),
  unlike: ({ mediaId, data }: { mediaId: string; data: any }) =>
    api.post<MediaSuccessResponseData, ErrorResponseData>(
      `/media/${mediaId}/unlike/`,
      qs.stringify(data)
    ),
  save: ({ mediaId, data }: { mediaId: string; data: any }) =>
    api.post<MediaSuccessResponseData, ErrorResponseData>(
      `/media/${mediaId}/save/`,
      qs.stringify(data)
    ),
  unsave: ({ mediaId, data }: { mediaId: string; data: any }) =>
    api.post<MediaSuccessResponseData, ErrorResponseData>(
      `/media/${mediaId}/unsave/`,
      qs.stringify(data)
    ),
  comment: ({ mediaId, form }: QueryCommentsOptions) =>
    api.post<MediaCommentResponse, ErrorResponseData>(`/media/${mediaId}/comment/`, {
      signed_body: `SIGNATURE.${qs.stringify(form)}`,
    }),
  comments: ({ mediaId, form }: QueryCommentsOptions) =>
    api.get<MediaCommentsFeedResponse, ErrorResponseData>(
      `/media/${mediaId}/comments/`,
      qs.stringify(form)
    ),
});

export default MEDIA_ENDPOINTS;

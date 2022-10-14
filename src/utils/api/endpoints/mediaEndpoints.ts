import { ErrorResponseData } from "../../../types/api/endpoints/endpoints.types";
import api from "../api";
import qs from 'qs';
import { MediaSuccessResponseData } from "../../../types/api/endpoints/media/media.types";

const MEDIA_ENDPOINTS = Object.freeze({
  like: ({ mediaId, data }: { mediaId: string, data: any }) =>
    api.post<MediaSuccessResponseData, ErrorResponseData>(`/media/${mediaId}/like/`, qs.stringify(data)),
  unlike: ({ mediaId, data }: { mediaId: string, data: any }) =>
    api.post<MediaSuccessResponseData, ErrorResponseData>(`/media/${mediaId}/unlike/`, qs.stringify(data)),
  save: ({ mediaId, data }: { mediaId: string, data: any }) =>
    api.post<MediaSuccessResponseData, ErrorResponseData>(`/media/${mediaId}/save/`, qs.stringify(data)),
  unsave: ({ mediaId, data }: { mediaId: string, data: any }) =>
    api.post<MediaSuccessResponseData, ErrorResponseData>(`/media/${mediaId}/unsave/`, qs.stringify(data))
})

export default MEDIA_ENDPOINTS
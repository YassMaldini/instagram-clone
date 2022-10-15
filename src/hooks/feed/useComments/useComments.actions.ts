import { MediaCommentsFeedResponse } from "instagram-private-api";
import MEDIA_ENDPOINTS from "../../../utils/api/endpoints/mediaEndpoints";
import { QueryCommentsOptions } from "./useComments.types";

const PREFIX = '[queryComments]';

export const queryComments = async ({ mediaId, form }: QueryCommentsOptions) => {
    console.log(PREFIX, `Fetching comments feed...`);

    const response = await MEDIA_ENDPOINTS.comments({ mediaId, form });

    const { problem, data: json } = response;

    if (problem) {
        throw json
    }

    console.log(PREFIX, `Received comments feed.`);
    return json as MediaCommentsFeedResponse;
};
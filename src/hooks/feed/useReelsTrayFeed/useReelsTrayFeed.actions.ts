import { ReelsTrayFeedSuccessResponseData } from "../../../types/api/endpoints/feed/reelsTray.feed.types";
import { Device } from "../../../types/models/device/device.types";
import FEED_ENDPOINTS from "../../../utils/api/endpoints/feedEndpoints";

const PREFIX = '[queryReelsTrayFeed]';

export const queryReelsTrayFeed = async (data: object) => {
    console.log(PREFIX, `Fetching feed reels tray...`);
    const response = await FEED_ENDPOINTS.reelsTrayFeed(data);

    const { problem, data: json } = response;

    if (problem) {
        const error = response.data;
        console.log(PREFIX, 'An error occurred.', error);
        throw error;
    }

    // console.log('----------------------->', json)

    console.log(PREFIX, `Received feed reels tray.`);
    return json as ReelsTrayFeedSuccessResponseData;
};
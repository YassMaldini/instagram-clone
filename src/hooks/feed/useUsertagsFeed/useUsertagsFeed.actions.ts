import { UsertagsFeedResponseRootObject } from "../../../types/api/endpoints/feed/usertags.feed.types";
import { UserInfoResponseRootObject } from "../../../types/api/endpoints/users/info.user.types";
import FEED_ENDPOINTS from "../../../utils/api/endpoints/feedEndpoints";
import USERS_ENDPOINTS from "../../../utils/api/endpoints/usersEndpoints";
import { QueryUsertagsFeedOptions } from "./useUsertagsFeed.types";

const PREFIX = '[queryUsertagsFeed]';

export const queryUsertagsFeed = async ({ userPk }: QueryUsertagsFeedOptions) => {
    console.log(PREFIX, `Fetching usertags feed...`);

    const response = await FEED_ENDPOINTS.usertags({ userPk });

    const { problem, data: json } = response;

    if (problem) {
        throw json
    }

    console.log(PREFIX, `Received usertags feed.`);
    return json as UsertagsFeedResponseRootObject;
};
import { MediaCommentsFeedResponse } from 'instagram-private-api';
import { useQuery } from 'react-query';
import { queryComments } from './useComments.actions';
import { UseCommentsOptions } from './useComments.types';

export const USE_COMMENTS_FEED_QUERY_KEY = 'USE_COMMENTS_FEED';

const useComments = ({ mediaId }: UseCommentsOptions) => {
  const form = {
    inventory_source: 'media_or_ad',
    analytics_module: 'comments_v2_feed_timeline',
    can_support_threading: true,
    is_carousel_bumped_post: false,
    feed_position: 0,
  };

  return useQuery<MediaCommentsFeedResponse, Error>([USE_COMMENTS_FEED_QUERY_KEY], () =>
    queryComments({ mediaId, form })
  );
};

export default useComments;

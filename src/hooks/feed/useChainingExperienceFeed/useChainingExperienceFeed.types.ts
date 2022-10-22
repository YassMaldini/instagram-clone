import { FeedMedia } from "../../../types/api/endpoints/feed/media.feed.types"
import { TopicalExploreFeedResponseMedia } from "../../../types/api/endpoints/feed/topicalDiscover.feed.types";

export interface UseChainingExperienceFeedOptions {
  media: TopicalExploreFeedResponseMedia;
}

export interface QueryChainingExperienceFeedOptions {
  form: {
    surface: string,
    explore_source_token?: string,
    phone_id: string,
    session_time_spent: number,
    trigger: string,
    media_id: number,
    battery_level?: number,
    entry_point: string,
    has_user_set_breaks: boolean,
    chaining_session_id?: string,
    _uuid: string,
    panavision_mode: string,
    take_a_break_nudge_last_seen_time: number,
    topic_cluster_id: string,
    is_charging: number,
    is_dark_mode?: number,
    will_sound_on: number,
    author_id: number,
    media_type: number,
    paging_token: {
      total_num_items: number,
      last_organic_item: {
        id: number,
        index: number
      }
    }
  }
}
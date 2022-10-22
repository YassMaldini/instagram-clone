export interface QueryTopicalExploreFeedOptions {
  options: {
    is_prefetch: boolean;
    omit_cover_media: boolean;
    is_ptr: boolean;
    use_sectional_payload: boolean;
    reels_configuration: string;
    timezone_offset: number;
  };
}
export enum StaticPostEndpoints {
  // Authentication
  SignIn = '/auth/sign_in',

  // Account
  QeSync = '/qe/sync/',

  // Discover
  Ayml = '/discover/ayml/',
  TopicalExplore= '/discover/topical_explore/',
  ChainingExperience = '/discover/chaining_experience_feed/',

  // Feed
  ReelsTrayFeed = '/feed/reels_tray/',
  TimelineFeed = '/feed/timeline/',
}

export enum StaticGetEndpoints {
  // Accounts
  CurrentUser = '/accounts/current_user/',
}

import { DiscoverFeedResponseRootObject } from '../../../types/api/endpoints/feed/discover.feed.types';
import { TopicalExploreFeedResponseRootObject } from '../../../types/api/endpoints/feed/topicalDiscover.feed.types';
import DISCOVER_ENDPOINTS from '../../../utils/api/endpoints/discoverEndpoints';
import { QueryTopicalExploreFeedOptions } from './useTopicalExploreFeed.types';
import axios from 'axios';
import qs from 'qs';
import api from '../../../utils/api/api';

const PREFIX = '[queryTopicalExploreFeed]';

export const queryTopicalExploreFeed = async ({ options }: QueryTopicalExploreFeedOptions) => {
  console.log(PREFIX, `Fetching topical explore feed...`);

  // Request using apisauce (works fine on android but broken on ios)

  const headers_mock = {
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "fr-FR, en-US",
    "Authorization": "Bearer IGT:2:eyJkc191c2VyX2lkIjoiMjI1ODU4MDI3MDUiLCJzZXNzaW9uaWQiOiIyMjU4NTgwMjcwNSUzQTdkVkRDZDVWQzA0eWxwJTNBMjMlM0FBWWV4TVEzekVDaU9UTUFuNlFPNkwtLVdONEljN2xfb2Z3RFo5QXhkb2cifQ==",
    "Host": "i.instagram.com",
    "Ig-Intended-User-Id": "22585802705",
    "Ig-U-Ds-User-Id": "22585802705",
    "Priority": "u=3",
    "User-Agent": "Instagram 237.0.0.14.102 Android (22/5.1.1; 240dpi; 540x960; samsung; SM-J200F; j2lte; universal3475; fr_FR; 373310554)",
    "X-Bloks-Is-Layout-Rtl": "false",
    "X-Bloks-Version-Id": "8dab28e76d3286a104a7f1c9e0c632386603a488cf584c9b49161c2f5182fe07",
    "X-Fb-Client-Ip": "True",
    "X-Fb-Connection-Type": "WIFI",
    "X-Fb-Http-Engine": "Liger",
    "X-Fb-Server-Cluster": "True",
    "X-Ig-Android-Id": "android-42e6c06cbd72c265",
    "X-Ig-App-Id": "567067343352427",
    "X-Ig-App-Locale": "fr_FR",
    "X-Ig-App-Startup-Country": "FR",
    "X-Ig-Bandwidth-Speed-Kbps": "-1.000",
    // "X-Ig-Bandwidth-Totalbytes-B": "0",
    // "X-Ig-Bandwidth-Totaltime-Ms": "0",
    "X-Ig-Capabilities": "3brTv10=",
    "X-Ig-Connection-Type": "WIFI",
    "X-Ig-Device-Id": "6db1644d-a663-4007-9fcf-0b0df675399d",
    "X-Ig-Device-Locale": "fr_FR",
    "X-Ig-Family-Device-Id": "65b3d89d-3433-4c01-b3c8-06aa78f6c88f",
    "X-Ig-Mapped-Locale": "fr_FR",
    "X-Ig-Nav-Chain": "MainFeedFragment:feed_timeline:1:cold_start::",
    "X-Ig-Timezone-Offset": "7200",
    "X-Ig-Www-Claim": "hmac.AR1lDNgJsbmtEaQYRFoZdESAE5-CIPLPIsGJKn98y-snZldX",
    "X-Mid": "undefined",
    "X-Pigeon-Rawclienttime": "1668964414.104",
    "X-Pigeon-Session-Id": "UFS-ffbd1a8a-fbe4-405d-b77a-054bde7716a0-0"
  }

  let h = {}
  for (let key in headers_mock) {
    // @ts-ignore
    h[key] = api.headers[key]
  }
  const response = await axios.get('https://i.instagram.com/api/v1/discover/topical_explore/', {
    params: {
      'is_prefetch': 'true',
      'omit_cover_media': 'true',
      'is_ptr': 'false',
      'reels_configuration': 'hide_hero',
      'use_sectional_payload': 'true',
      'timezone_offset': '3600'
    },
    headers: h
  });

  if (response.status !== 200 && response.status !== 403) {
    throw response.data
  }

  return response.data

  // Request using apisauce (works fine on android but broken on ios)

  // const response = await DISCOVER_ENDPOINTS.topicalExplore({ options });

  // const { problem, data: json } = response;

  // if (problem) {
  //   throw json;
  // }

  // console.log(PREFIX, `Received topical explore feed.`);
  // return json as TopicalExploreFeedResponseRootObject;

};

import Box from '../../../../designSystem/Box/Box';
import { SvgIcon } from '../../../../designSystem/SvgIcon/SvgIcon';
import GalleryIcon from '../../../../../../assets/vectors/gallery.svg';
import FollowerIcon from '../../../../../../assets/vectors/follower.svg';
import { useState } from 'react';
import { ProfileContentTab } from './ProfileContent.types';
import Pressable from '../../../../designSystem/Pressable/Pressable';
import { userFeedSample } from '../../../../../utils/api/samples/userFeedSample';
import { FlashList } from '@shopify/flash-list';
import FeedGridSimpleItem from '../../../../commons/FeedGridSimpleItem/FeedGridSimpleItem';
import ProfileUserFeedTab from './ProfileUserFeedTab/ProfileUserFeedTab';
import ProfileUsertagsFeedTab from './ProfileUsertagsFeedTab/ProfileUsertagsFeedTab';

const ProfileContent = () => {
  const [selectedTab, setSelectedTab] = useState<ProfileContentTab>(ProfileContentTab.Posts);

  return (
    <Box>
      <Box flexDirection="row">
        <Pressable
          flex={2}
          paddingVertical="sToM"
          borderBottomWidth={selectedTab === ProfileContentTab.Posts ? 1 : 0.5}
          borderBottomColor={
            selectedTab === ProfileContentTab.Posts ? 'primaryText' : 'elevatedSeparator'
          }
          onPress={() => setSelectedTab(ProfileContentTab.Posts)}>
          <SvgIcon
            icon={GalleryIcon}
            width={28}
            height={28}
            color={selectedTab === ProfileContentTab.Posts ? 'primaryText' : 'secondaryText'}
            alignSelf="center"
          />
        </Pressable>
        <Pressable
          flex={2}
          paddingVertical="sToM"
          borderBottomWidth={selectedTab === ProfileContentTab.Tags ? 1 : 0.5}
          borderBottomColor={
            selectedTab === ProfileContentTab.Tags ? 'primaryText' : 'elevatedSeparator'
          }
          onPress={() => setSelectedTab(ProfileContentTab.Tags)}>
          <SvgIcon
            icon={FollowerIcon}
            width={28}
            height={28}
            color={selectedTab === ProfileContentTab.Tags ? 'primaryText' : 'secondaryText'}
            alignSelf="center"
          />
        </Pressable>
      </Box>
      <Box>
        {selectedTab === ProfileContentTab.Posts && <ProfileUserFeedTab />}
        {selectedTab === ProfileContentTab.Tags && <ProfileUsertagsFeedTab />}
      </Box>
    </Box>
  );
};

export default ProfileContent;

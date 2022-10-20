import { ReelsTrayFeedResponseTrayItem } from 'instagram-private-api';
import Box from '../../designSystem/Box/Box';
import ReelsTrayItem from './ReelsTrayItem/ReelsTrayItem';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';

const ReelsTrayList = ({ reelsTray }: { reelsTray: ReelsTrayFeedResponseTrayItem[] }) => {
  return (
    <Box flexDirection="row" padding="m" paddingRight="none" backgroundColor="primaryBackground">
      <ScrollView horizontal>
        {reelsTray.map((reelsTrayItem) => (
          <ReelsTrayItem key={reelsTrayItem.id} {...{ reelsTrayItem }} />
        ))}
      </ScrollView>
    </Box>
  );
};

export default ReelsTrayList;

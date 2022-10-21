import { useCallback, useContext, useState } from 'react';
import { NativeSyntheticEvent, TextLayoutEventData } from 'react-native';
import Box from '../../../designSystem/Box/Box';
import Pressable from '../../../designSystem/Pressable/Pressable';
import Text from '../../../designSystem/Text/Text';
import { FeedCardContext } from '../FeedCard.context';

const FeedCardCaption = () => {
  const { timelineFeedItem } = useContext(FeedCardContext);
  const [showMore, setShowMore] = useState(false);
  const [realNumberOfLines, setRealNumberOfLines] = useState(1);
  const [numberOfLines, setNumberOfLines] = useState(1);

  const onTextLayout = useCallback((e: NativeSyntheticEvent<TextLayoutEventData>) => {
    setRealNumberOfLines(e.nativeEvent.lines.length);
    setShowMore(e.nativeEvent.lines.length > numberOfLines);
  }, []);

  const onPress = () => {
    setShowMore(false);
    setNumberOfLines(realNumberOfLines);
  };

  return (
    <Box paddingHorizontal="m">
      <Box flexDirection="row" justifyContent="space-between">
        <Text
          {...{ numberOfLines }}
          onTextLayout={(e) =>
            Boolean(e.nativeEvent.lines.length > numberOfLines) && onTextLayout(e)
          }>
          <Text fontWeight="800">{timelineFeedItem.caption.user.username} </Text>
          {timelineFeedItem.caption.text}
        </Text>
        {Boolean(showMore) && (
          <Pressable {...{ onPress }}>
            <Text color="secondaryText">plus</Text>
          </Pressable>
        )}
      </Box>
    </Box>
  );
};

export default FeedCardCaption;

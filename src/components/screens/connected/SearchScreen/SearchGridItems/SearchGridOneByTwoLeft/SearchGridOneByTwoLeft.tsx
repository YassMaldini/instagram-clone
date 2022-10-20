import { Dimensions } from 'react-native';
import {
  TopicalExploreFeedResponseLayout_content,
  TopicalExploreFeedResponseSectionalItemsItem,
} from '../../../../../../types/api/endpoints/feed/topicalDiscover.feed.types';
import FeedGridDoubleItem from '../../../../../commons/FeedGridDoubleItem/FeedGridDoubleItem';
import FeedGridSimpleItem from '../../../../../commons/FeedGridSimpleItem/FeedGridSimpleItem';
import Box from '../../../../../designSystem/Box/Box';
import { SearchGridOneByTwoLeftProps } from './SearchGridOneByTwoLeft.types';

const SearchGridOneByTwoLeft = ({ isFirstItem, sectionalItems }: SearchGridOneByTwoLeftProps) => {
  const THIRD = Dimensions.get('window').width / 3;
  const MARGIN = THIRD / THIRD;
  const { layout_content: layoutContent } = sectionalItems;

  return (
    <Box flexDirection="row" justifyContent="space-between">
      <FeedGridDoubleItem {...{ isFirstItem, ...sectionalItems }} />
      <Box
        width={THIRD * 2 - MARGIN / 2}
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap">
        {layoutContent.fill_items?.map(({ media }) => (
          <FeedGridSimpleItem {...media} key={media.pk} />
        ))}
      </Box>
    </Box>
  );
};

export default SearchGridOneByTwoLeft;

import { Dimensions } from 'react-native';
import FeedGridDoubleItem from '../../../../../commons/FeedGridDoubleItem/FeedGridDoubleItem';
import FeedGridSimpleItem from '../../../../../commons/FeedGridSimpleItem/FeedGridSimpleItem';
import Box from '../../../../../designSystem/Box/Box';
import { SearchGridOneByTwoRightProps } from './SearchGridOneByTwoRight.types';

const SearchGridOneByTwoRight = ({ isFirstItem, sectionalItems }: SearchGridOneByTwoRightProps) => {
  const THIRD = Dimensions.get('window').width / 3;
  const MARGIN = THIRD / THIRD;
  const { layout_content: layoutContent } = sectionalItems;

  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Box
        width={THIRD * 2 - MARGIN / 2}
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap">
        {layoutContent.fill_items?.map(({ media }) => (
          <FeedGridSimpleItem {...media} key={media.pk} />
        ))}
      </Box>
      <FeedGridDoubleItem {...{ isFirstItem, ...sectionalItems }} />
    </Box>
  );
};

export default SearchGridOneByTwoRight;
